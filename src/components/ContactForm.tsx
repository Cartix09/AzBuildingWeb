import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { services } from '../data/services'
import { cn } from '../lib/cn'

/*
 * CONTACT FORM
 * ------------
 * Submission target is read from the Vite env var VITE_CONTACT_FORM_ENDPOINT.
 * It POSTs JSON, which works with:
 *   - Formspree:  VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/<id>
 *   - Web3Forms:  VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit
 *                 (also set VITE_WEB3FORMS_KEY — it is a PUBLIC access key)
 *   - Custom API / serverless function that accepts a JSON POST.
 *
 * If the endpoint is not configured, the form does NOT silently fail — it shows
 * a clear "not configured" message so nobody assumes a submission was sent.
 * No private keys are hardcoded here.
 */

const ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

type Status = 'idle' | 'loading' | 'success' | 'error' | 'unconfigured'

interface FormState {
  name: string
  phone: string
  email: string
  company: string
  serviceType: string
  message: string
}

const empty: FormState = { name: '', phone: '', email: '', company: '', serviceType: '', message: '' }

export function ContactForm() {
  const { t, lang } = useLanguage()
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = t('form.required')
    if (!form.message.trim()) next.message = t('form.required')
    if (!form.serviceType) next.serviceType = t('form.required')
    // Need at least one contact channel
    if (!form.phone.trim() && !form.email.trim()) {
      next.phone = t('form.contactRequired')
      next.email = t('form.contactRequired')
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = t('form.invalidEmail')
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    if (!ENDPOINT) {
      // Do not pretend it sent.
      setStatus('unconfigured')
      return
    }

    setStatus('loading')
    try {
      const payload: Record<string, string> = { ...form, source: 'azbuilding.az contact form' }
      if (WEB3FORMS_KEY) payload.access_key = WEB3FORMS_KEY

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('success')
      setForm(empty)
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setStatus('error')
    }
  }

  const fieldClass = (key: keyof FormState) =>
    cn(
      'w-full border bg-slate-deep px-4 py-3 text-base placeholder:text-steel/50 transition-colors focus:outline-none focus:border-orange-brand',
      errors[key] ? 'border-red-500/70' : 'border-white/15',
    )

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center border border-orange-brand/40 bg-slate-surface/40 p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-orange-brand" />
        <h3 className="mt-6 font-display text-2xl font-bold text-base">{t('form.successTitle')}</h3>
        <p className="mt-3 max-w-md text-steel">{t('form.success')}</p>
        <button type="button" onClick={() => setStatus('idle')} className="group btn-ghost mt-8">
          {t('cta.sendInquiry')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={t('form.name')} required error={errors.name}>
          <input className={fieldClass('name')} value={form.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" />
        </Field>
        <Field label={t('form.company')} error={undefined}>
          <input className={fieldClass('company')} value={form.company} onChange={(e) => update('company', e.target.value)} autoComplete="organization" />
        </Field>
        <Field label={t('form.phone')} error={errors.phone}>
          <input className={fieldClass('phone')} value={form.phone} onChange={(e) => update('phone', e.target.value)} inputMode="tel" autoComplete="tel" />
        </Field>
        <Field label={t('form.email')} error={errors.email}>
          <input className={fieldClass('email')} value={form.email} onChange={(e) => update('email', e.target.value)} inputMode="email" autoComplete="email" />
        </Field>
      </div>

      <Field label={t('form.serviceType')} required error={errors.serviceType}>
        <select className={cn(fieldClass('serviceType'), !form.serviceType && 'text-steel/60')} value={form.serviceType} onChange={(e) => update('serviceType', e.target.value)}>
          <option value="">{t('form.serviceTypePlaceholder')}</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug} className="text-base">
              {pick(s.title, lang)}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t('form.message')} required error={errors.message}>
        <textarea rows={5} className={fieldClass('message')} value={form.message} onChange={(e) => update('message', e.target.value)} />
      </Field>

      {status === 'error' && (
        <Alert icon={<AlertTriangle className="h-5 w-5" />} title={t('form.errorTitle')} body={t('form.error')} tone="error" />
      )}
      {status === 'unconfigured' && (
        <Alert icon={<AlertTriangle className="h-5 w-5" />} title={t('form.errorTitle')} body={t('form.notConfigured')} tone="warn" />
      )}

      <button type="submit" disabled={status === 'loading'} className="group btn-primary w-full disabled:opacity-70 sm:w-auto">
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> {t('form.sending')}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> {t('form.submit')}
          </>
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-steel">
        {label} {required && <span className="text-orange-brand">*</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block font-mono text-xs text-red-400">{error}</span>}
    </label>
  )
}

function Alert({ icon, title, body, tone }: { icon: React.ReactNode; title: string; body: string; tone: 'error' | 'warn' }) {
  return (
    <div
      className={cn(
        'flex items-start gap-3 border p-4',
        tone === 'error' ? 'border-red-500/40 bg-red-500/5 text-red-300' : 'border-orange-brand/40 bg-orange-brand/5 text-orange-200',
      )}
    >
      <span className="mt-0.5 shrink-0">{icon}</span>
      <span>
        <span className="block font-display font-bold">{title}</span>
        <span className="mt-1 block text-sm opacity-90">{body}</span>
      </span>
    </div>
  )
}

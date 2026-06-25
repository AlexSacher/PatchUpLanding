import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { motion } from 'motion/react'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { cn } from '@/lib/utils'

const inViewTransition = {
    item: {
        hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
        },
    },
}
const viewport = { once: true, margin: '-80px' as const }

const inputClass =
    'w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30'
const errorInputClass = 'border-red-400 focus:ring-red-300'

type FieldName = 'firstName' | 'lastName' | 'email' | 'school' | 'message'

type FormValues = Record<FieldName, string>

type FormErrors = Partial<Record<FieldName, string>>

const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    message: '',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): FormErrors {
    const errors: FormErrors = {}

    if (!values.firstName.trim()) errors.firstName = 'First name is required.'
    if (!values.lastName.trim()) errors.lastName = 'Last name is required.'

    if (!values.email.trim()) {
        errors.email = 'Email is required.'
    } else if (!EMAIL_RE.test(values.email.trim())) {
        errors.email = 'Enter a valid email address.'
    }

    if (!values.message.trim()) {
        errors.message = 'Please include a short message.'
    } else if (values.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters.'
    }

    return errors
}

export default function ContactEight() {
    const [values, setValues] = useState<FormValues>(initialValues)
    const [errors, setErrors] = useState<FormErrors>({})
    const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        const next = { ...values, [name]: value }
        setValues(next)
        // Re-validate a field once it's been touched, so errors clear as the user fixes them.
        if (touched[name as FieldName]) {
            setErrors(validate(next))
        }
    }

    const handleBlur = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name } = e.target
        setTouched((t) => ({ ...t, [name]: true }))
        setErrors(validate(values))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const nextErrors = validate(values)
        setErrors(nextErrors)
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            school: true,
            message: true,
        })

        if (Object.keys(nextErrors).length > 0) {
            // Move focus to the first field with an error.
            const firstError = Object.keys(nextErrors)[0]
            document.getElementById(firstError)?.focus()
            return
        }

        setStatus('submitting')
        // Simulated submission — swap this for a real endpoint when the backend is ready.
        await new Promise((resolve) => setTimeout(resolve, 900))
        setStatus('success')
    }

    if (status === 'success') {
        return (
            <section className="py-8 md:py-12 h-[100%]">
                <div className="mx-auto max-w-2xl px-6">
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                        className="rounded-2xl  bg-background p-10 text-center">
                        <CheckCircle2 className="text-primary mx-auto size-12" />
                        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                            Thanks, {values.firstName || 'there'}!
                        </h2>
                        <p className="text-muted-foreground mt-2">
                            Your message is on its way. Our team will get back to you at{' '}
                            <span className="text-foreground font-medium">{values.email}</span> soon.
                        </p>
                        <button
                            type="button"
                            
                            onClick={() => {
                                setValues(initialValues)
                                setErrors({})
                                setTouched({})
                                setStatus('idle')
                            }}
                            className="text-primary hover:text-primary/80 mt-6 text-sm font-medium hover:cursor-pointer">
                            Send another message
                        </button>
                    </motion.div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-8 md:py-12">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={viewport}
                    transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                    className="mx-auto max-w-2xl text-center">
                    <h1 className="text-foreground text-balance text-4xl font-bold tracking-tight md:text-5xl">
                        Contact us
                    </h1>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Questions about bringing PatchUp to your classroom or school? We'd love to help. Reach out and
                        our team will get back to you.
                    </p>
                </motion.div>

                <AnimatedGroup
                    className="mx-auto mt-12 max-w-2xl"
                    variants={{ container: { visible: { transition: { staggerChildren: 0.1 } } }, ...inViewTransition }}
                    viewport={viewport}>
                    <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Field
                                id="firstName"
                                label="First name"
                                placeholder="Jane"
                                value={values.firstName}
                                error={touched.firstName ? errors.firstName : undefined}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            <Field
                                id="lastName"
                                label="Last name"
                                placeholder="Doe"
                                value={values.lastName}
                                error={touched.lastName ? errors.lastName : undefined}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                        </div>
                        <Field
                            id="email"
                            type="email"
                            label="Professional email"
                            placeholder="jane@school.edu"
                            value={values.email}
                            error={touched.email ? errors.email : undefined}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        <Field
                            id="school"
                            label="School / Organization"
                            placeholder="Maple Grove Elementary"
                            value={values.school}
                            error={touched.school ? errors.school : undefined}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div>
                            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="How can we help?"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={touched.message && !!errors.message}
                                aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                                className={cn(inputClass, 'resize-none', touched.message && errors.message && errorInputClass)}
                            />
                            {touched.message && errors.message && (
                                <p id="message-error" className="mt-1.5 text-sm text-red-500">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="bg-primary hover:bg-primary/90 mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-70">
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    Send message
                                    <ArrowRight className="size-4" />
                                </>
                            )}
                        </button>
                    </form>
                </AnimatedGroup>
            </div>
        </section>
    )
}

type FieldProps = {
    id: FieldName
    label: string
    value: string
    placeholder?: string
    type?: string
    required?: boolean
    error?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: ChangeEvent<HTMLInputElement>) => void
}

function Field({ id, label, value, placeholder, type = 'text', required, error, onChange, onBlur }: FieldProps) {
    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn(inputClass, error && errorInputClass)}
            />
            {error && (
                <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    )
}

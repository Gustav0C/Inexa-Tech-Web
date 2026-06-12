import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, CheckCircle } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { contactInfo } from '../../config/contact'

/* ─── Zod schema ─── */
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  company: z.string().optional(),
  serviceType: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  'Custom Development',
  'Cloud Infrastructure',
  'Cybersecurity',
  'AI & Machine Learning',
  'Other',
]

/* ─── Component ─── */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType: '',
    },
  })

  const onSubmit = async () => {
    setSending(true)

    // TODO: Replace with actual EmailJS send() call
    // import emailjs from '@emailjs/browser'
    // await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, data, emailjsConfig.publicKey)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setSending(false)
    setSubmitted(true)
    reset()
  }

  const inputBase =
    'w-full rounded-md bg-surface-container-high/60 border border-outline-variant px-4 py-3 text-body-md text-on-surface placeholder-on-surface-variant/50 font-inter transition-colors duration-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30'
  const labelBase = 'block text-label-sm font-jetbrains text-on-surface-variant uppercase tracking-wider mb-1.5'
  const errorBase = 'mt-1 text-sm text-error'

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-container mx-auto">
      <SectionTitle
        title="Get in Touch"
        subtitle="Ready to start your next project? Let's talk."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* ─── Sidebar: Contact info ─── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div>
            <h3 className="font-sora font-semibold text-headline-md text-on-surface mb-6">
              Contact Information
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-label-sm font-jetbrains text-on-surface-variant uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-body-md text-on-surface hover:text-secondary transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-label-sm font-jetbrains text-on-surface-variant uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-body-md text-on-surface hover:text-secondary transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-label-sm font-jetbrains text-on-surface-variant uppercase tracking-wider">
                    Address
                  </p>
                  <p className="text-body-md text-on-surface">{contactInfo.address}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <p className="text-label-sm font-jetbrains text-on-surface-variant uppercase tracking-wider mb-3">
              Follow Us
            </p>
            <div className="flex gap-3">
              {contactInfo.social.linkedin && (
                <a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="INEXA TECH on LinkedIn"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-high/60 border border-outline-variant text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {contactInfo.social.github && (
                <a
                  href={contactInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="INEXA TECH on GitHub"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-high/60 border border-outline-variant text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {contactInfo.social.twitter && (
                <a
                  href={contactInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="INEXA TECH on Twitter"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-high/60 border border-outline-variant text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* ─── Form ─── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className="lg:col-span-2"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-xl bg-surface-container/60 backdrop-blur-xl border border-white/10 p-12 text-center"
              >
                <CheckCircle className="mx-auto mb-4 w-12 h-12 text-secondary" aria-hidden="true" />
                <h3 className="font-sora font-semibold text-headline-md text-on-surface mb-2">
                  Message Sent!
                </h3>
                <p className="text-body-md text-on-surface-variant mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-xl bg-surface-container/60 backdrop-blur-xl border border-white/10 p-8 sm:p-10 space-y-6"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelBase}>
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className={`${inputBase} ${errors.name ? 'border-error focus:border-error focus:ring-error/30' : ''}`}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className={errorBase} role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelBase}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className={`${inputBase} ${errors.email ? 'border-error focus:border-error focus:ring-error/30' : ''}`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className={errorBase} role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className={labelBase}>
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Corp"
                    className={inputBase}
                    {...register('company')}
                  />
                </div>

                {/* Service type */}
                <div>
                  <label htmlFor="serviceType" className={labelBase}>
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    className={`${inputBase} ${errors.serviceType ? 'border-error focus:border-error focus:ring-error/30' : ''}`}
                    {...register('serviceType')}
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className={errorBase} role="alert">
                      {errors.serviceType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelBase}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project…"
                    className={`${inputBase} resize-none ${errors.message ? 'border-error focus:border-error focus:ring-error/30' : ''}`}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className={errorBase} role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button type="submit" loading={sending} className="w-full sm:w-auto">
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Send Message
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

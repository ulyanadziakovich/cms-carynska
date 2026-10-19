// Przyjmuje wiadomość z formularza „Napisz do nas” od serwera strony (../carynska, server/api/contact.post.ts)
// i zapisuje ją w kolekcji „Wiadomości”. Tylko z poprawnym sekretem — przeglądarki gości tu nie trafiają.
import { query } from '#pruvious/server'
import { timingSafeEqual } from 'node:crypto'

const LIMITS = { name: 120, email: 200, phone: 40, message: 5000 } as const
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sameSecret(given: string, expected: string) {
  const a = Buffer.from(given)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

export default defineEventHandler(async (event) => {
  const secret = useRuntimeConfig().contactSecret as string
  const given = getHeader(event, 'x-contact-secret') ?? ''
  if (!secret || !sameSecret(given, secret)) throw createError({ statusCode: 403 })

  const body = await readBody<Record<string, unknown>>(event)
  const field = (k: keyof typeof LIMITS) => (typeof body?.[k] === 'string' ? (body[k] as string).trim() : '')
  const msg = { name: field('name'), email: field('email'), phone: field('phone'), message: field('message') }

  if (!msg.name || !msg.message || !EMAIL.test(msg.email)) throw createError({ statusCode: 400 })
  for (const k of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (msg[k].length > LIMITS[k]) throw createError({ statusCode: 400 })
  }

  const result = await query('wiadomosci').create({ ...msg, status: 'Nowa', receivedAt: Date.now() })
  if (!result.success) throw createError({ statusCode: 500 })
  return { ok: true }
})

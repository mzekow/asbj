import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const secretKey = process.env.JWT_SECRET || 'super-secret-key-for-asbj'
const key = new TextEncoder().encode(secretKey)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function login(username: string) {
  const user = { username }
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const session = await encrypt({ user, expires })
  
  ;(await cookies()).set('session', session, { expires, httpOnly: true, path: '/' })
}

export async function logout() {
  ;(await cookies()).set('session', '', { expires: new Date(0), httpOnly: true, path: '/' })
}

export async function getSession() {
  const session = (await cookies()).get('session')?.value
  if (!session) return null
  try {
    return await decrypt(session)
  } catch (error) {
    return null
  }
}

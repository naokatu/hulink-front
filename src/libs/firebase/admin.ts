import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = {
  projectId: process.env['FIREBASE_PROJECT_ID'],
  privateKey: process.env['FIREBASE_PRIVATE_KEY']?.replace(/\\n/g, '\n'),
  clientEmail: process.env['FIREBASE_CLIENT_EMAIL'],
}
export const firebaseAdmin =
  getApps().length === 0
    ? initializeApp({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        credential: cert(serviceAccount),
      })
    : getApp()

/** @public */
export const auth = getAuth()

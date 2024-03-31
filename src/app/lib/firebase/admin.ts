import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../../../../service-account.json')
export const firebaseAdmin =
  getApps().length === 0 ??
  initializeApp({
    credential: cert(serviceAccount),
  })

export const auth = getAuth()

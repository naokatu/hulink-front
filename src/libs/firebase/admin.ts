import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../../../service-account.json')
export const firebaseAdmin =
  getApps().length === 0
    ? initializeApp({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        credential: cert(serviceAccount),
      })
    : getApp()

/** @public */
export const auth = getAuth()

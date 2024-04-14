import createClient from 'openapi-fetch'

import { type paths } from './schema'

export const client = createClient<paths>({
  baseUrl: process.env['NEXT_PUBLIC_API_MOCK_URL'] ?? '',
})

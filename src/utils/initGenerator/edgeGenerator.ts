import { type Edge } from 'reactflow'

import { type components } from '@/api'

export const generateInitEdges = (
  user: components['schemas']['User'],
): Edge[] => {
  return (user.linkUsers ?? []).map((link) => ({
    id: `e-${user.id}-${link.id}`,
    source: user.id,
    target: link.id + '1',
    type: 'custom',
  }))
}

export const generateAddEdge = (
  user: components['schemas']['User'],
  linkUser: components['schemas']['LinkUser'],
): Edge => {
  return {
    id: `e-${user.id}-${linkUser.id + '1'}`,
    source: user.id,
    target: linkUser.id + '2',
    type: 'custom',
  }
}

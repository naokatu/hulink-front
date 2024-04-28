import { type Node } from 'reactflow'

import { type components } from '@/api'

const RADIUS = 200 // 円の半径
const ANGLE_STEP = (2 * Math.PI) / 8 // ノードの配置間隔（ラジアン）

export const generateInitNodes = (
  user: components['schemas']['User'],
): Node[] => {
  const userNode = {
    id: user.id,
    type: 'custom',
    position: { x: 0, y: 0 },
    data: {
      label: user.name,
    },
  }

  const linkUserNodes = (user.linkUser ?? []).map((linkUser, index) => {
    const angle = index * ANGLE_STEP
    const x = RADIUS * Math.cos(angle)
    const y = RADIUS * Math.sin(angle)

    return {
      id: linkUser.id + '1',
      type: 'custom',
      position: { x, y },
      data: { label: linkUser.name },
    }
  })

  return [userNode, ...linkUserNodes]
}

export const generateAddNode = (
  linkUser: components['schemas']['LinkUser'],
  nodes: Node[],
): Node => {
  const nodeNum = nodes.length
  const angle = nodeNum - 1 * ANGLE_STEP
  const x = RADIUS * Math.cos(angle)
  const y = RADIUS * Math.sin(angle)

  return {
    id: linkUser.id + '2',
    type: 'custom',
    position: { x, y },
    data: { label: linkUser.name },
  }
}

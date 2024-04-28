import { type FC } from 'react'

import { BaseEdge, type EdgeProps, getStraightPath } from 'reactflow'

interface basicEdge {
  id: string
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
}

export const CustomEdge: FC<EdgeProps<basicEdge>> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: basicEdge) => {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  })

  return <BaseEdge id={id} path={edgePath} />
}

import React from 'react'
import { type FC } from 'react'

import { Handle, type NodeProps, Position } from 'reactflow'

interface basicNode {
  id: string
  label: string
}

export const CustomNode: FC<NodeProps<basicNode>> = (props) => {
  return (
    <div
      className="
        flex justify-center items-center
        w-[4rem] h-[4rem]
        bg-[#0E8BFF] text-white
        rounded-full font-bold text-[16px]
        shadow-md
        transition-transform duration-300
        hover:scale-125
        animate-fade-in
      "
    >
      <Handle type="target" position={Position.Top} id={`${props.data.id}`} />
      <div>{props.data.label}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        id={`${props.data.id}`}
      />
    </div>
  )
}

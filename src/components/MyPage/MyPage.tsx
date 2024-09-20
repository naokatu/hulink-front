'use client'

import { useState, useEffect, type FC } from 'react'

import ReactFlow, {
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from 'reactflow'
import 'reactflow/dist/style.css'

import { client, type components } from '@/api'
import {
  generateInitNodes,
  generateInitEdges,
  generateAddNode,
  generateAddEdge,
} from '@/utils/initGenerator'
import { type InputsLinkUser } from '@/types/inputsLinkUser'
import { getIdTokenFromSession } from '@/libs/next-auth/getIdTokenFromSession'

import { PlusButton } from '../PlusButton/'
import { ShowButtons } from '../ShowButtons/'
import { AddPersonModalWindow } from '../AddPersonModalWindow'
import { CustomNode } from '../CustomNode'
import { CustomEdge } from '../CustomEdge'

const nodeTypes = {
  custom: CustomNode,
}

const edgeTypes = {
  custom: CustomEdge,
}

export const MyPage: FC = () => {
  const [user, setUser] = useState<components['schemas']['User'] | null>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])
  const [isShowButtons, setShowButtons] = useState<boolean | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [buttonType, setButtonType] = useState<string | null>(null)

  const openModal = (type: string): void => {
    setIsModalOpen(true)
    setButtonType(type)
  }

  const closeModal = (): void => {
    setIsModalOpen(false)
    setButtonType(null)
  }

  const handlePlusButtonClick = (): void => {
    setShowButtons((prevState) => (prevState === null ? true : !prevState))
  }

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const token = await getIdTokenFromSession()
      const res = await client.GET('/user', {
        params: {
          header: {
            authorization: `Bearer ${token}`,
          },
        },
      })
      setUser(res.data?.data.user ?? null)
      generateInitialNodesAndEdges(res.data?.data.user ?? null)
    }

    void fetchUser()
  }, [])

  const generateInitialNodesAndEdges = (
    user: components['schemas']['User'] | null,
  ): void => {
    if (user !== null) {
      const initialNodes: Node[] = generateInitNodes(user)
      const initialEdges: Edge[] = generateInitEdges(user)

      setNodes(initialNodes)
      setEdges(initialEdges)
    }
  }

  const generateAddNodesAndEdges = (
    user: components['schemas']['User'],
    linkUser: components['schemas']['LinkUser'] | null,
  ): void => {
    if (linkUser != null) {
      const addNode: Node = generateAddNode(linkUser, nodes)
      const addEdge: Edge = generateAddEdge(user, linkUser)

      setNodes((es) => es.concat(addNode))
      setEdges((es) => es.concat(addEdge))
    }
  }

  const addPersonSubmit = async (data: InputsLinkUser): Promise<void> => {
    if (user !== null) {
      const token = await getIdTokenFromSession()
      const res = await client.POST('/link-user', {
        params: {
          header: {
            authorization: `Bearer ${token}`,
          },
        },
        body: {
          name: data.name,
          interact: data.interact,
          userId: user.id,
        },
      })

      const linkUser: components['schemas']['LinkUser'] | null =
        res.data?.data?.linkUser ?? null
      generateAddNodesAndEdges(user, linkUser)
    }
  }

  const selectPersonSubmit = async (data: InputsLinkUser): Promise<void> => {
    if (user !== null) {
      const token = await getIdTokenFromSession()
      const res = await client.POST('/link-user', {
        params: {
          header: {
            authorization: `Bearer ${token}`,
          },
        },
        body: {
          name: data.name,
          interact: data.interact,
          userId: user.id,
        },
      })

      const linkUser: components['schemas']['LinkUser'] | null =
        res.data?.data?.linkUser ?? null

      generateAddNodesAndEdges(user, linkUser)
    }
  }

  return (
    <div className="w-screen h-[85vh] relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      />
      <PlusButton onClick={handlePlusButtonClick}></PlusButton>
      <ShowButtons
        isShowButtons={isShowButtons}
        onAddPerson={openModal}
      ></ShowButtons>
      <AddPersonModalWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        buttonType={buttonType}
        linkUser={
          user?.linkUsers != null
            ? user?.linkUsers.map((linkUser) => linkUser.name)
            : null
        }
        addPersonSubmit={addPersonSubmit}
        selectPersonSubmit={selectPersonSubmit}
      />
    </div>
  )
}

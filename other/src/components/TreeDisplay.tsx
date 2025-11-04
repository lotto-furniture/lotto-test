import type { TreeDataNode } from 'antd'
import { Tree } from 'antd'
import React, { useMemo } from 'react'
import type { TreeNode } from '../data/tree.data'

interface TreeDisplayProps {
  data: TreeNode[]
}

const convertToTreeData = (items: TreeNode[]): TreeDataNode[] => {
  return items.map((item) => ({
    title: item.name,
    key: item.id.toString(),
    children: item.children ? convertToTreeData(item.children) : undefined,
  }))
}

const TreeDisplay: React.FC<TreeDisplayProps> = ({ data }) => {
  const treeData = useMemo(() => {
    try {
      return convertToTreeData(data)
    } catch (err: any) {
      return [{ title: err.message || '数据转换错误', key: 'error' }]
    }
  }, [data])

  return (
    <Tree
      defaultExpandAll
      treeData={treeData}
      style={{ background: '#f5f5f5', padding: '16px', borderRadius: '6px' }}
    />
  )
}

export default TreeDisplay


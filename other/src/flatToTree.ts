import fs from 'fs'
import { resolve } from 'path'
import { flatData } from './data/flatToTreeData'

function flatToTree(data: { id: number; name: string; parentId?: number }[]) {
  // TODO：返回树状结构化数据
  return null
}

fs.writeFileSync(
  resolve(__dirname, '../flatData.json'),
  JSON.stringify(flatToTree(flatData), null, 2)
)


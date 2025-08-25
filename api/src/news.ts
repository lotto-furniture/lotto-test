import { request } from './request'

export interface NewsItem {
  id?: number
  title: string
  content: string
}

/** 获取新闻列表 */
export async function list(opts?: {
  /** 页码 */
  page?: number
  /** 每页数量 */
  pageSize?: number
  /** 关键字搜索 */
  keyword?: string
}) {
  return await request.get<{
    list: NewsItem[]
    total: number
  }>('/news/list', opts)
}

/** 获取新闻详情 */
export async function getItem(id: number) {
  return await request.get<NewsItem>(`/news/detail/${id}`)
}

/** 创建新闻  */
export async function createItem(body: Omit<NewsItem, 'id'>) {
  return await request.post('/news/create', body)
}

/** 修改新闻  */
export async function updateItem(body: NewsItem) {
  return await request.put(`/news/update/${body.id}`, body)
}

/** 删除新闻 */
export async function deleteItem(id: number) {
  return await request.delete(`/news/delete/${id}`)
}


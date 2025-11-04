import { Button } from 'antd'
import { API } from 'api'

export function App() {
  return (
    <div>
      <div>请开始作答</div>
      <div>
        项目已引入 Ant Design:
        <Button onClick={() => API.news.list().then(console.log)}>
          测试请求接口数据
        </Button>
      </div>
    </div>
  )
}


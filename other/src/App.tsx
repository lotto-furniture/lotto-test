import './app.css'
import TreeDisplay from './components/TreeDisplay'
import { treeData } from './data/tree.data'
import { distributeRedPackets } from './distributeRedPackets'
import { flatToTree } from './flatToTree'

export function App() {
  const _distributeRedPackets = (totalAmount: number, totalPeople: number) => {
    try {
      return JSON.stringify(
        distributeRedPackets(totalAmount, totalPeople),
        null,
        2
      )
    } catch (err: any) {
      return err.message
    }
  }

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="content-card">
          <div className="section-title">树状解构转换</div>
          <div className="tree-container">
            <div className="tree-section">
              <div className="tree-section-title">你的效果</div>
              <TreeDisplay data={flatToTree()} />
            </div>
            <div className="tree-section">
              <div className="tree-section-title">示例</div>
              <TreeDisplay data={treeData} />
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="section-title">微信手气红包</div>
          <div className="red-packet-results">
            <div className="red-packet-result">
              10元6个： {_distributeRedPackets(10, 6)}
            </div>
            <div className="red-packet-result">
              8.5元3个： {_distributeRedPackets(8.5, 3)}
            </div>
            <div className="red-packet-result">
              100元14个： {_distributeRedPackets(100, 14)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


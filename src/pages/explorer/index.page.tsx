import { Drawer } from '../../components/Drawer'

import { Content, ExplorerContainer } from './styles'

export default function Explorer() {
  return (
    <ExplorerContainer>
      <Drawer />
      <Content>
        <div>
          <h2>Explorer</h2>
        </div>
      </Content>
    </ExplorerContainer>
  )
}

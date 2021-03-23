import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesProvider } from './MoviesContext';

import './styles/global.scss';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MoviesProvider>
        <SideBar />
        <Content />     
      </MoviesProvider> 
    </div>
  )
}
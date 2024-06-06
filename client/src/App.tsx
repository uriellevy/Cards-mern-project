import './App.css'
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/navigationBar/NavigationBar'
import FooterComponent from './components/footer/FooterComponent'

function App() {
  return (
    <div className='app'>
      <NavigationBar />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App

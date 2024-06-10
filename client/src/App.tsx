import './App.css';
import { Outlet } from 'react-router-dom';
import NavigationBar from './components/navigationBar/NavigationBar';
import FooterComponent from './components/footer/FooterComponent';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='app'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <NavigationBar />

      <Outlet />
      <FooterComponent />
      <ToastContainer />
    </div>
  )
}

export default App

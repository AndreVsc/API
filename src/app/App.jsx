import './App.css';
import { Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
function App() {
  return (
    <>
        <div className='geral'>
          <Navbar />
          <div className='container'>
            <Outlet />
          </div>
        </div>
    </>
  );
}

export default App;

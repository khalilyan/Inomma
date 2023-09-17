import './App.css';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Layout/Footer/Footer';
import Menu from './components/Layout/Menu';
import Nosie from './components/Nosie/Nosie';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/preLoader/Preloader';
import Home from './pages/Home/Home';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'

function App() {
  const isMobile = useMediaQuery({ minWidth: 769 })
  return (
    <>
    <Nosie/>
    <Preloader/>
    {isMobile?<Cursor/>:null}
    <motion.div
      className='App'
      initial={{display: 'none'}}
      animate={{display: 'flex'}}
      transition={{delay: 7.5}}
      >
        <Menu/>
    <ScrollToTop/>
    <div className="Main">
        <Home/>
    </div>
        <Footer/>
    </motion.div>
    </>
  );
}

export default App;

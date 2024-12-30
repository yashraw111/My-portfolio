import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import Loading from './layout/Loading';
import MainPage from './layout/MainPage';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; // AOS ke CSS animations
import AOS from 'aos';
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <>
    <div>
      {loading ? <Loading /> : <MainPage />} {/* अगर loading true है तो loading screen दिखाओ */}
    </div>
     
    </>
  )
}

export default App

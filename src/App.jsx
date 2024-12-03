import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import Loading from './layout/Loading';
import MainPage from './layout/MainPage';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
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

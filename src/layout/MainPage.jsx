
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Routers , Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import About from './About'
import Resume from './Resume'
import Technologies from './Technologies'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'
import Project from './Project'
function App() {
  return (
    <>
    <Routers>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}  ></Route>
        <Route path='/About' element={<About></About>}  ></Route>
        <Route path='/technologies' element={<Technologies></Technologies>}  ></Route>
        <Route path='/contact' element={<Contact></Contact>}  ></Route>
        <Route path='/resume' element={<Resume></Resume>}  ></Route>
        <Route path='/Project' element={<Project></Project>}  ></Route>
      </Routes>
      <Footer></Footer>
    </Routers>

     
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Nav from './components/nav/nav'
import HeroSec from './components/heroSec/HeroSec'
import Row from './components/Row/Row'
import SecRow from './components/secendRow/SecRow'
import ThirdRow from './components/ThirdRow/ThirdRow'
import HighlightPage from './components/higlighPage/HighlightPage'
import Publish from './components/PublishPage/Publish'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Nav/>
   <HeroSec/>
   <Row/>
   <SecRow/>
   <ThirdRow/>
   <HighlightPage/>
   <Publish/>
   <Footer/>
    </>
  )
}

export default App

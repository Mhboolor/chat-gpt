import React from 'react'
import './Main.css';
import WhatIsGpt from './whatisgpt/WhatIsGpt'
import Future from './future/Future';
import Imagination from './imagination/Imagination';
import RegesterBox from './regester/RegesterBox';
import Blog from './blog/Blog';


function Main() {
  return (
    <main className='main'> 
      <WhatIsGpt/>
      <Future/>
      <Imagination/>
      <RegesterBox/>
      <Blog/>
    </main>
  )
}

export default Main
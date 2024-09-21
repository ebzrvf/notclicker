import React from 'react'
import ReactDOM from 'react-dom/client'
import { Notcoin } from './notcoin'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
        <h1 className='beta'>Beta Phase</h1>
        <h1 className="test">Version: 1.0.2</h1>
    <main>
    <Notcoin 
        canIClickPlease={true}
        sleep={false}
        funMode={false}
        clickValue={1}
        cooldown={0}
        handleClick={() => {/*nothing*/}}
      />
    </main>
  </React.StrictMode>
)
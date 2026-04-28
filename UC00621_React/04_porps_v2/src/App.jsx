import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import Card from "./Social.jsx";


const social =  [
  { nome: "GitHub", iconSvg: "github-icon", link: "https://github.com/vitejs/vite" },
  { nome: "Discord", iconSvg: "discord-icon", link: "https://chat.vite.dev/" },
  { nome: "X.com", iconSvg: "x-icon", link: "https://x.com/vite_js" },
  { nome: "Bluesky", iconSvg: "bluesky-icon", link: "https://bsky.app/profile/vite.dev" },
]

const docs =  [
  { nome: "Explore Vite", iconImg: viteLogo, link: "https://vite.dev/" },
  { nome: "Learn more", iconImg: reactLogo, link: "https://react.dev/" },
]



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">

        <div id="docs">
          <Card lista={docs}
                  icon="documentation-icon"
                  title="Documentation"
                  descricao="Your questions, answered"/>
        </div>


        <div id="social">
          <Card lista={social}
                  icon="social-icon"
                  title="Connect with us"
                  descricao="Join the Vite community"/>
        </div>

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

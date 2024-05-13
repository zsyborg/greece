'use client'
import Image from "next/image";
import { useState } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'font-awesome/css/font-awesome.min.css';
import { gsap, Elastic, wrapYoyo, CSSPlugin } from "gsap"

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [papytoggle, setpapy] = useState(false)

  function arenaclick() {
    const arn = document.getElementById("papy")
    setpapy(true)
    // arn?.className{display:"flex"}
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <img src="/temples.png" className="one" onMouseEnter={toggleHover}
      onMouseLeave={toggleHover} />
  {/* <Draggable onDrag={dragged("#img")}> */}

  <div className='papy ${pappytoggle ? "" : "hidden"}' >
  <img src="/papyrus.jpg" id="papyrus" className="papyrus" />
  <div className="papytext">
  <i className="fa fas fa-close fa-4x text-emerald-800" style={{right:"-10px", position:"absolute", top:"-20px"}}></i>
    <p className="text-black p-24" style={{fontSize:"15pt", textAlign:"justify"}}>
    Months of meticulous design and curation have been spent to create some of the finest art available as a Digital Collectible on Solana. A predominantly female collection, Archons is unlike any other in the NFT space with its unique appeal to the collectors of web3. Aside from fantastic art that will catch the eye of any observer, we also strive to bring value to our community of over a year in the making. Our thesis; utilizing the brand of Archons to create avenues that will return value to our native web3 users.

    </p>
  </div>
</div>

    <img src="/team.png" id="team" className="team" />
    <img src="/roadmap.png" id="roadmmap" className="roadmap" />
    <img src="/lore.png" id="lore" className="lore" />



    <img src="/ArchonsLogo.png" id="logo" className="logo logowiggle" />
    <img src="/arenaog.png" id="arenaog" className="arenaog" onMouseDown={arenaclick} />
    <img src="/stairs.png" id="stairs" className="stairs" />
    <img src="/unicorns.png" id="unicorns" className="unicorns wiggle" />
    <img src="/volcano.png" id="volcano" className="volcano" />
    <img src="/castles.png" id="castle" className="castle castlewiggle" />
    <img src="/base.jpg" id="base" className="img" />
      {/* </Draggable> */}

      
     </main>
  );
}

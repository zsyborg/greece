'use client'
import Image from "next/image";
import { useState } from "react";
import Draggable from "react-draggable";



export default function About() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  function arena() {
    console.log("Arena")
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <img src="http://localhost:3000/1.png" className="one" onMouseEnter={toggleHover}
      onMouseLeave={toggleHover} />
  {/* <Draggable onDrag={dragged("#img")}> */}

    {/* <img src="http://localhost:3000/arena.png" id="arena" className="arena" /> */}
    <img src="http://localhost:3000/arenaog.png" id="arenaog" className="arenaog" />
    <img src="http://localhost:3000/stairs.png" id="stairs" className="stairs" />
    <img src="http://localhost:3000/unicorns.png" id="unicorns" className="unicorns" />
    <img src="http://localhost:3000/volcano.png" id="volcano" className="volcano" />
    <img src="http://localhost:3000/castles.png" id="castle" className="castle" />
    <img src="http://localhost:3000/base.jpg" id="base" className="img" />
      {/* </Draggable> */}

      
     </main>
  );
}

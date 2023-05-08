import { useEffect, useState } from 'react'
import Space from './assets/spaceShip.png'

export const App = () => {
  const[enabled,setEnabled] = useState(false)
  const[position,setPosition]= useState({x:0,y:0})


  const handleChange =()=>{
    setEnabled(!enabled)
    setPosition({x:0,y:0})
  }
  useEffect(()=>{
    const handleMove = (event)=>{
      const{clientX, clientY} = event
      setPosition({x:clientX, y:clientY})
    }
   
    if(enabled){
      window.addEventListener('pointermove',handleMove);
    }

    return ()=>{
      window.removeEventListener('pointermove',handleMove)
    }
  },[enabled])
  return (
    <>
     <img 
      style={
        {
          position:'absolute',
          top:0,
          left:0,
          width:70,
          height:70,
          transform:`translate(${position.x}px,${position.y}px)`
        }
      } 
      src={Space}
       alt="" />
    <main className="container">
      <button onClick={handleChange}>{ enabled ? 'Desactiver' :'activer'}mouse following</button>
    </main>
    </>
  )
}

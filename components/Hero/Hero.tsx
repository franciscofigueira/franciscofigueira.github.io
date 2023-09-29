"use client"
import styles from "./hero.module.css"
import animation from "../../public/animation_ln20wkp2.json"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from "react";



export default function Hero(){

// const elemS = getComputedStyle(document.documentElement).getPropertyValue('--secondary');
// console.log(elemS,"color")


// let color2 = [parseInt(elemS.slice(1,3),16),parseInt(elemS.slice(3,5),16),parseInt(elemS.slice(5,7),16),255]
// console.log(color2,"color2")
const b ={...animation}
const [mode, setMode] = useState('light');

let color 
if(mode === 'light'){
    color = [28, 156, 163,255].map((item)=>item/255)
}else{
    color = [240, 189, 89].map((item)=>item/255) 
}
for(let i = 0; i< b.layers.length; i++){
    for(let j = 0; j < b.layers[i].shapes.length; j++){
    
        b.layers[i].shapes[j].it[1].c!.k =  color
    }
}
const onSelectMode = (mode:string) => {
    setMode(mode)
   
}

useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));
  
    // Setup dark/light mode for the first time
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  
    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);

    return(
        <div className={styles.container}>
            <div className={styles.description}>
                <h3>Hello, my name is:</h3>
                <h1 style={{color:"var(--title-rgb)"}}>Francisco Figueira.</h1>
                <h1>I build software.</h1>
                <h2>I&apos;m a software enginner focusing on developing web3 apps.</h2>
                <div className={styles.socials}>
                    <a href="https://franciscofigueira.hashnode.dev/" target="_blank" className={styles.blog_button}>
                        Check out my Blog
                    </a>
                    <a href="#Contact" className={styles.contact_button}  >Get in touch</a>
                </div>
              
            </div>
            <div className={styles.player}>
                <Player
                    autoplay
                    loop
                    src= {b}
                    style={{ height: '60rem', width: '60rem', }}
                
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player> 
            </div>                    
        </div>
    )
}

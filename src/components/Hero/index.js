import React from 'react'
import Navbar from '../Navbar'
import {HeroContainer, HeroContent, HeroBtn, HeroH1, HeroP, HeroItems} from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
           <Navbar /> 
           <HeroContent>
               <HeroItems>
                   <HeroH1>Greatest Bakery Shop Ever</HeroH1>
                   <HeroP>Ready in 60 seconds</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
               </HeroItems>
           </HeroContent>
        </HeroContainer>
    )
}

export default Hero

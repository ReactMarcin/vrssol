import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Particle from './HomeComponents/SectionParticle'
import Products from './HomeComponents/Products'
import Parallax from './Parallax'

const Container = styled(motion.div)`
    max-width: 100%;
    padding-top: 125px;
`

const HeroContainer = styled(motion.div)`
    max-width: 100%;
    background-image: url('/img/hero.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 350px;
    height: 100% !important;
`

const Block = styled(motion.div)`
    width: 75%;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
    background-color: rgba(236,0,140, .7);
    display: flex;
    align-items: center;
    padding: 50px 30px;
    text-align: center;
    color: #fff;
    box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);
    z-index: 5;
`

const Section = styled(motion.div)`
    padding: 75px 30px;
    width: calc(100% - (2 * 30px));
    height: 100%;
    position: relative;
    height: 60vh;
    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(250deg, rgba(123, 47, 247, .9), rgba(241, 7, 163, .9));
        border-radius: 5px;
    }

    @media (max-width: 1100px){
        height: 100vh;
    }

    @media (max-width: 600px){
        height: 100vh;
        width: 100%;
        padding: 75px 0;
    }
`

const Section2 = styled.div`
    padding-top: 100px;
    background: #fff;
    height: 100%;
`

const Content = styled.div`
    color: snow;
    padding: 50px;
    width: 80%;
    max-height: 80%;
    position: absolute;
    left: 50%;
    top: 60%;
    padding-left: 100px;
    transform: translate(-50%, -50%);
    text-align: center;

    @media (max-width: 600px){
        height: min-content;
        padding: 0;
    }
`

const Button = styled(Link)`
    padding: 13px 45px;
    border: 1.5px solid #fff;
    background: #D309E1;
    outline: none;
    border-radius: 30px;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
    &:hover{
        box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);
    }
`

const Span = styled.span`
    display: block;
    margin: 50px 0;
    width: 100%;
    position: relative;
`

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const sectionVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};
const Home = () => (
    <Container>
        <HeroContainer
            initial="initial"
            animate="enter"
            exit="exit"
            variants={sectionVariants}
        >  
        <Block>
        <h1>VR/AR solutions for training & education
            wind energy and offshore industry</h1>
        </Block>
        </HeroContainer>
        <Section
            initial="initial"
            animate="enter"
            exit="exit"
            variants={sectionVariants}
        >
            <Particle />
            <Content>
                <Span>
                <h1>
                VRS_Solutions, to studio wirtualnej rzeczywistości przy windhunter group (na rynku od ponad 20 lat), przygotowujące dostosowane do potrzeb klienta aplikacje VR/AR oraz innowacyjne rozwiązania IT.
                </h1>
                <br />
                <h2>
                Swoje usługi dedykuje odbiorcom z sektora energetyki wiatrowej onshore i offshore a także z innych dziedzin.
                </h2>
                </Span>
                <Span>
                <Button to="/o-firmie">
                    Więcej
                </Button>
                </Span>
            </Content>
        </Section>
        <Section2>
            <Products />
        </Section2>
    </Container>   
);
export default Home;
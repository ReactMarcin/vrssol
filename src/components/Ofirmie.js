import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Parallax from './Parallax'

const Container = styled(motion.div)`
    max-width: 100%;
    padding-top: 125px;
`

const Section = styled(motion.div)`
    width: 90%;
    height: min-content ;
    background: #fff;
    margin: -50px auto 50px auto;
    z-index: 1;
    border-radius: 6px;
    padding: 50px 100px;
    color: #555;
    box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);

    @media (max-width: 900px){
        padding: 30px;
        font-size: 16px;
    }

    p{
        text-align: justify;
        padding: 30px 0;
    }
`

const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  
  const imageVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 1.5, ...transition }
    }
  };

const Ofirmie = () => (
    <Container
        initial="exit" animate="enter" exit="exit"
    >
        <Parallax image="/img/top-about.jpg" variants={imageVariants}>
            
        </Parallax>
        <Section>
            <h1 align="center">
                O nas
            </h1>
            <p>
            VRS_Solutions, to studio wirtualnej rzeczywistości przy windhunter group (na rynku od ponad 20 lat), przygotowujące dostosowane do potrzeb klienta aplikacje VR/AR oraz innowacyjne rozwiązania IT. Swoje usługi dedykuje odbiorcom z sektora energetyki wiatrowej onshore i offshore a także z innych dziedzin.
            </p>
            <p>
            Nasze produkty i aplikacje informatyczne otwierają innowacyjne i nowoczesne obszary w zakresie edukacji, szkoleń i usług serwisowych w ramach pracy naszych klientów komercyjnych. Zapewniamy pewność działania i oszczędności kosztów w ich firmach.
            </p>
            <p>
            Celem VRS_Solutions jest tworzenie realnych odczuć i scenariuszy podczas treningów zwłaszcza tam, gdzie rzeczywistość może okazać się niebezpieczna lub niemożliwa do wykreowania.
            </p>
            <p>
            Działalność VRS_Solutions jest skrojona idealnie do Twoich potrzeb.
            </p>
        </Section>
    </Container>
);
export default Ofirmie;
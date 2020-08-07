import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  
  const imageVariants = {
    exit: { y: "50%", opacity: 0, transition },
    enter: {
      y: "0%",
      opacity: 1,
      transition
    }
  };

  const transition2 = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition2 },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition2 }
  }
};

const Container = styled(motion.div)`
    max-width: 100%;
    padding: 125px 15px 0 15px;
`

const HeroContainer = styled(motion.div)`
    max-width: 100%;
    background-image: linear-gradient(250deg, rgba(123, 47, 247, .7), rgba(241, 7, 163, .7)), url('/img/top-services.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 350px;
    height: 100% !important;
`

const Section = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 50px 0;
`

const Avatar = styled(motion.img)`

`

const ListItem = styled(motion.li)`
    cursor: pointer;
    margin: 30px 0;
`

const ListItem2 = styled(motion.li)`
    cursor: pointer;
    margin: 30px 0;
    padding: 0;
`

const List = styled(motion.ul)`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-row-gap: 50px;
`

const List2 = styled(motion.ul)`
    list-style: none;
`

const Text = styled(motion.h2)`
    padding: 0 20px; 
    
`

const Span = styled(motion.span)`
    display: inline-flex;
    align-items: center;
`

const ContentContainer = styled(motion.div)`
    max-width: 70%;
    min-height: max-content;
    margin: 0 auto;
    position: relative;
`

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const data = [
    {
        title: "energetyka wiatrowa",
        avatar: '/img/ico-wind.png',
        text1: "badanie odporności na stres",
        text2: "ćwiczenia z ewakuacji z gondoli przeprowadzane w bezpiecznych warunkach, z zachowaniem realizmu pracy na wysokości",
        text3: "szkolenia techniczne z instalacji, naprawy i serwisowania turbin wiatrowych",
        text4: "komunikacja z helikopterem – naprowadzanie podczas lądowania"
    },
    {
        title: "pożarnictwo",
        avatar: "/img/ico-fire.png",
        text1: "symulacja pożarów wewnętrznych",
        text2: "rozprzestrzenianie się pożarów",
        text3: "ewakuacja z płonących budynków",
        text4: "ćwiczenia w realnych warunkach, pozbawione ryzyka"
    },
    {
        title: "pierwsza pomoc",
        avatar: "/img/ico-aid.png",
        text1: "wypadki masowe – segregacja poszkodowanych",
        text2: "wypadki drogowe – zabezpieczenie miejsca zdarzenia",
        text3: "udzielanie pierwszej pomocy w różnych warunkach zagrażających życiu ratownika (np. pożar, autostrada, wyciek chemiczny)",
        text4: null
    },
    {
        title: "bezpieczeństwo i ochrona",
        avatar: "/img/ico-safety.png",
        text1: "bezpieczeństwo na lotniskach – scenariusze przygotowujące personel do właściwych reakcji w sytuacji zagrożenia atakiem terrorystycznym",
        text2: "ochrona obiektów – scenariusze w warunkach trudnych do odwzorowania (np. noc); badanie czasu reakcji na poszczególne bodźce",
        text3: "ochrona osobista – ćwiczenie umiejętności skupiania uwagi na osobie chronionej mimo różnych bodźców dookoła; rozpoznawanie w tłumie potencjalnych zamachowców",
        text4: null
    }
]

const Content = ({ item }) => (
    <ContentContainer
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <List2>
            <ListItem2>
                {item.text1}
            </ListItem2>
            <ListItem2>
                {item.text2}
            </ListItem2>
            <ListItem2>
                {item.text3}
            </ListItem2>
            <ListItem2>
                {item.text4}
            </ListItem2>
        </List2>
    </ContentContainer>
);

const Uslugi_i_produkty = () => {

    return(
        <Container 
            initial="exit" animate="enter" exit="exit"
        >
            <HeroContainer variants={imageVariants} />

            <h1 style={{
                padding: '50px 0 0 0',
                color: "#4400FF",
                textAlign: "center"
            }}>
                    Aplikacje VR/AR dostarczane przez VRS_Solutions
                </h1>
            <Section>
            
                <AnimateSharedLayout>
                <List
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
                >
                    {data.map((item,index) => (
                        <Item item={item} key={index} index={index} />
                    ))}
                </List>
                </AnimateSharedLayout>
            </Section>
        </Container>
    );
};

const Item = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return(
        <ListItem layout onClick={toggleOpen} initial={{ borderRadius: 10 }} variants={thumbnailVariants}>
            <Span>
                <Avatar layout src={item.avatar} alt={item.title} />
                <Text style={{color: colors[index]}}>
                    {item.title}
                </Text>
            </Span>
                <AnimatePresence>{isOpen && <Content item={item} />}</AnimatePresence>
            </ListItem>
    );
}
export default Uslugi_i_produkty;
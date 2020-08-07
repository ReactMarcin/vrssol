import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 125px 0; 
`

const Content2 = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: min-content;
    grid-row-gap: 100px;
    grid-column-gap: 20px;
    grid-auto-rows: min-content;
    justify-items: center;
    align-content: center;
    padding: 125px 0;
`

const CardProducts = styled(motion.div)`
    min-width: 15rem;
    background: #fff;
    padding: 30px 0;
    border-radius: 5px;
    &:hover{
        background: snow;
    }
`

const Span = styled.span`
    display: block;
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const Icons = styled.img`
    width: 80px;
    height: 80px;
`

const Text = styled.h3`
    color: rgb(236,0,140);
`

const Button = styled(Link)`
    padding: 13px 45px;
    text-decoration: none;
    border: 1.5px solid #ccc;
    background: #D309E1;
    outline: none;
    border-radius: 30px;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover{
        box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);
    }
`

const products = [
    { id: 0, name: "energtyka wiatrowa", src: "/img/ico-wind.png" },
    { id: 1, name: "pożarnictwo", src: "/img/ico-fire.png" },
    { id: 2, name: "pierwsza pomoc", src: "/img/ico-aid.png" },
    { id: 3, name: "bezpieczeństwo i ochrona", src: "/img/ico-safety.png" },
]

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const Products = () => (
    <Container>
            <h1 align="center" style={{color: '#555'}}>
                Produkty i usługi
            </h1>
            <Content2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            >
                {products.map((item,index) => (
                    <CardProducts key={index}
                        variants={thumbnailVariants}
                        style={{
                            border: '1px dashed ' + colors[index]
                        }}
                    >
                        <Span>
                            <Icons src={item.src} alt={item.name} />
                        </Span>
                        <Span>
                            <Text>
                                {item.name}
                            </Text>
                        </Span>
                    </CardProducts>
                ))}
            </Content2>
            <Button to="/uslugi-i-produkty">
                Więcej
            </Button>
    </Container>
);
export default Products;
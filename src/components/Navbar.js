import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navigation = styled.nav`
    padding: 10px;
    background: #fff;
    border-bottom: 1px solid rgb(236,0,140);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 9;

    @media (max-width: 1199px){
        display: flex;
        justify-content: center;
    }
`

const LogoContainer = styled.div`
    padding: 5px;
    background: snow;
    border-radius: 5px;
    margin-left: 20px;
`

const Logo = styled.img`
    width: 90%;

    @media (max-width: 600px){
        width: 60%;
    }

    @media (max-width: 900px){
        width: 70%;
    }

    @media (max-width: 1200px){
        width: 80%;
    }
`

const List = styled.ul`
    list-style: none;
    margin-right: 20px;
`

const ListItem = styled(motion.li)`
    display: inline-flex;
    padding: 10px;
    align-items: center;

    @media (max-width: 1200px){
        display: none;
    }
`

const Item = styled(Link)`
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    color: #333;
    font-size: 17px;
    &:first-child{
        padding: 0 10px 0 20px;
    }
`

const NavBar = () => (
    <Navigation>
        <LogoContainer>
            <Logo src="/img/logo2.png" />
        </LogoContainer>
        <List>
            <ListItem
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                <Item to="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                >
                    home
                </Item>
            </ListItem>
            <ListItem
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                <Item to="/o-firmie"
                >
                    o firmie
                </Item>
            </ListItem>
            <ListItem
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                <Item to="uslugi-i-produkty"
                >
                    usługi i produkty
                </Item>
            </ListItem>
            <ListItem
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                <Item to="/kontakt"
                   
                >
                    kontakt
                </Item>
            </ListItem>
        </List>
    </Navigation>
);
export default NavBar;
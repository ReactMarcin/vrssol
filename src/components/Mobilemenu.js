import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Nav = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    max-width: 300px;
    min-width: 270px;
    /* width: 100%; */
    align-items: center;
    justify-content: center;
    z-index: 10;

    display: none;
  @media (max-width: 1200px){
        display: flex;
  }
`

const Bg = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0 !important;
  max-width: 300px;
  min-width: 270px;
  background: snow;
  border-right: 1px solid rgb(236,0,140);
`

const Button = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`

const Logo = styled(motion.img)`
    width: 200px;
    margin-top: 70px;
`

const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });
  
    useEffect(() => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }, []);
  
    return dimensions.current;
  };

const variantsNav = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
  const Navigation = ({ toggle }) => (
    <motion.ul variants={variantsNav}
        style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            textAlign: 'center'
        }}
    >
      {itemIds.map((i,j) => (
        <MenuItem i={i} key={j} index={j} toggle={toggle} />
      ))}
      <Logo src="/img/logo2.png" alt="VRS" variants={variants} />

    </motion.ul>
  );
  
  const itemIds = [
      { id: 1, name: 'home', route: ''},
      { id: 2, name: 'o firmie', route: 'o-firmie'},
      { id: 3, name: 'uslugi i produkty', route: 'uslugi-i-produkty'},
      { id: 4, name: 'kontakt', route: 'kontakt'}
  ]
  

const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
  
  const MenuToggle = ({ toggle }) => (
    <Button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </Button>
  );

  
const variants = {
    open: {
      x: 1,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 }
      }
    }
  };
  
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
  
  const MenuItem = ({ i, index, toggle }) => {
    return (
      <motion.li
        style={{
            marginTop: 25
        }}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
          <Link style={{color: colors[index], textDecoration: 'none', margin: 0, padding: 0, fontSize: 20}} to={`/${i.route}`} onClick={toggle}>
            {i.name}
          </Link>
      </motion.li>
    );
  };
  
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      variants={sidebar}
      ref={containerRef}
    >
      <Bg variants={sidebar} />
      <Navigation toggle={() => toggleOpen(!isOpen )} />
      <MenuToggle toggle={() => toggleOpen(!isOpen )} />
    </Nav>
  );
};
export default Example
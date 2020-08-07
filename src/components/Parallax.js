import React from 'react';
// import '../parallax.scss';
import styled from 'styled-components'
import { motion } from 'framer-motion';

const ParalaxContainer = styled(motion.div)`
    overflow: hidden;
    position: relative;
    background-position: center center;
    background-size: cover;
    margin: 0;
    padding: 0;
    border: 0;
    height: 50vw;
    z-index: -1;
`

const Parallax = (props) => {
  
    let windowScrollTop;
    if (window.innerWidth >= 768) {
      windowScrollTop = window.pageYOffset / 3;
    } else {
      windowScrollTop = 0;
    }
    const [transform, setTransform] = React.useState(
      `translate3d(0,${windowScrollTop}px,0)`
    );
    React.useEffect(() => {
      if (window.innerWidth >= 768) {
        window.addEventListener("scroll", resetTransform);
      }
      return function cleanup() {
        if (window.innerWidth >= 768) {
          window.removeEventListener("scroll", resetTransform);
        }
      };
    });
    const resetTransform = () => {
      var windowScrollTop = window.pageYOffset / 3;
      setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    return(
        <ParalaxContainer style={{backgroundImage:`url(${props.image})`,transform: transform}}>
          {props.children}
        </ParalaxContainer>
    );
}

export default Parallax;
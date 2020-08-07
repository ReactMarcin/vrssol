import React from 'react'
import Particles from 'react-particles-js';

const Particle = () => (
    <Particles
    style={{
        width: '100%',
        height: '100%',
        position: 'absolute'
    }}
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
);
export default Particle;
import React from 'react'
import styled from 'styled-components'

const ContentContact = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
    grid-template-rows: 1fr;
    grid-auto-rows: min-content;
`

const CardFooter = styled.div`
    max-width: 220px;
    text-align: center;
    padding: 30px 0;
    border-radius: 5px;
    justify-self: center;
`

const Footer = styled.div`
    background: #333;
    height: auto;
    color: #fff;
    padding: 100px 30px;
`

const contact = [
    { name: "V_R_S Polska", street: "ul. Morska 18A", code: "75-221 Koszalin, Polska", tel: "+48 94 732 60 40" },
    { name: "V_R_S Niemcy", street: "Attilastraße 175", code: "12105 Berlin, Niemcy", tel: "+49 30 39 800 93 90" },
    { name: "Email:", tel: "info@vrssolutions.com.pl" }
]

const FooterComponent = () => (
    <Footer>
            <h1 align="center" style={{
                paddingBottom: 70
            }}>
                Kontakt
            </h1>
            <ContentContact>
                {contact.map((item,index) => (
                    <CardFooter key={index}>
                        <h3>
                            {item.name}
                        </h3>
                        <p>
                            {item.street}
                        </p>
                        <p>
                            {item.tel}
                        </p>
                    </CardFooter>
                ))}
            </ContentContact>
        </Footer>
);
export default FooterComponent;
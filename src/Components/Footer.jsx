import { Button } from "@mui/material";
import React from "react";
//import "./Styles/styles.css";
import "../Styles/styles.css";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading
} from "../Styles/FooterStyles.jsx";

const Footer = () => {
  return (
    <Box
      style={{
        position: "absolute",
        bottom: 0,
        height: "325px",
        paddingTop: "5px",
        width: "100%"
      }}
    >
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Column>
            <Heading>Serviço e Atendimento</Heading>
            <FooterLink href="#">Tabela Fipe</FooterLink>
            <FooterLink href="#">Formas de Pagamento</FooterLink>
            <FooterLink href="#">Devolução e Reembolso</FooterLink>
          </Column>
          <Column>
            <Heading>Contatos</Heading>
            <FooterLink href="#">Central de Ajuda</FooterLink>
            <FooterLink href="#">Fale Conosco</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </Column>
          <Column>
            <Heading>Sobre Nós</Heading>
            <FooterLink href="#">ShineStar</FooterLink>
            <FooterLink href="#">Valores</FooterLink>
            <FooterLink href="#">Nossa equipe</FooterLink>
            <FooterLink href="#">Trabalhe Conosco</FooterLink>
          </Column>
        </Row>
        <Row className="buttonFooter">
          <Button className="buttonFooter">Termos de uso</Button>
          <Button className="buttonFooter">Política de privacidade</Button>
          <Button className="buttonFooter">Sobre a ShineStar</Button>
          <div className="iconFooter">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size="30" color="black" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size="30" color="black" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size="30" color="black" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size="30" color="black" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube size="30" color="black" />
            </a>
            <img
              src="../Assets/170.png"
              width="50"
              height="25"
              marginLeft="485px"
              alt=""
            />
          </div>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

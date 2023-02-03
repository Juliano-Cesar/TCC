import styled from "styled-components";
import React from "react";

export const Box = styled.div`
  padding: 80px 60px;
  background: #1976d2;
  position: absolute;
  bottom: -100px;
  right: 0px; /*rodapé centraliza*/
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;

  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: top;
  margin-left: 100px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 25px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: gray;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;

  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
`;

const Button2 = ({ children }) => <StyledButton>{children}</StyledButton>;

import React, { useState } from "react";
import styled, { css } from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const MenuLine = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease;

  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(45deg) translate(5px, 5px);
    `}
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  top: 60px;
  right: 0;
  width: 200px;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  ${(props) =>
    props.isOpen &&
    css`
      height: 200px;
    `}
`;

const DropdownItem = styled.a`
  padding: 20px;
  font-size: 18px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #eee;
  }
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuContainer onClick={() => setIsOpen(!isOpen)}>
        <MenuLine isOpen={isOpen} />
        <MenuLine isOpen={isOpen} />
        <MenuLine isOpen={isOpen} />
      </MenuContainer>
      <DropdownContainer isOpen={isOpen}>
        <DropdownItem href="#">Home</DropdownItem>
        <DropdownItem href="#">About</DropdownItem>
        <DropdownItem href="#">Contact</DropdownItem>
      </DropdownContainer>
    </>
  );
};

export default HamburgerMenu;

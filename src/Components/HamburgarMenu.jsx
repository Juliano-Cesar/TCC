import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Hamburger from "hamburger-react";
import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";

const Container = styled.div`
  position: relative;
`;

/*
const Dropdown = styled.div`
  position: absolute;
  left: -35px;
  top: calc(100% + 10px); 
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.show ? "block" : "none")};
  padding: 1em;
  z-index: 1;
`;
*/

const DropdownOption = styled.div`
  cursor: pointer;
`;

const HamburgerMenu = () => {
  const [isActive, setActive] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <Container>
      <Hamburger
        toggled={isActive}
        toggle={setActive}
        onMouseEnter={() => {
          setActive(true);
        }}
      />
      <DropdownMenu> </DropdownMenu>
    </Container>
  );
};

export default HamburgerMenu;

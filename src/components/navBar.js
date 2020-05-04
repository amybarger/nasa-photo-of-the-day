import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const TheNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><h1>🚀 NASA Photo of the Day! 🚀</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://www.nasa.gov/">Learn About NASA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://api.nasa.gov/">NASA APIs</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Where to?
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  To infinity
                </DropdownItem>
                <DropdownItem>
                  and beyond
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>by Amy Barger</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TheNavBar;
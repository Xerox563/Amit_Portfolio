import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Close } from "@mui/icons-material";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo */}
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>

        {/* Hamburger Icon for Mobile */}
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>

        {/* Desktop Navigation Links */}
        <NavItems>
          <NavLink href="#about">About</NavLink>

          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        {/* GitHub Button */}
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <Close
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                color: "white",
              }}
              onClick={() => setIsOpen(false)}
            />
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="#achievements" onClick={() => setIsOpen(false)}>
              Achievements
            </MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </MobileLink>

            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
                marginTop: "20px",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

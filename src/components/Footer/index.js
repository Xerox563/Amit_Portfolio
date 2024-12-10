import styled from "styled-components";

// import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Bio } from "../../data/constants";
import { Icon } from "@iconify/react";
import { SiGeeksforgeeks } from "react-icons/si";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Amit Gangwar</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twit} target="display">
            <img
              src="https://cdn-icons-png.freepik.com/256/124/124021.png?semt=ais_hybrid"
              alt="twitter"
              width={27}
              height={27}
            />
          </SocialMediaIcon>

          <SocialMediaIcon href={Bio.gfg} target="display">
            <SiGeeksforgeeks />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.cf} target="display">
            <Icon icon="simple-icons:codeforces" color="#69f" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.leet} target="display">
            <img
              src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png"
              alt="LeetCode"
              width={32}
              height={32}
            />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.codecf} target="display">
            <img
              src="https://static.uacdn.net/thumbnail/external-app-icons/ce4fd2180646452aa0b03c3ffa3ef8e2.png"
              alt="LeetCode"
              width={32}
              height={32}
            />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.hack} target="display">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEUNFB4A6mT///8AAAANEh4NBR0A6GQNABoACxgFDhoNABcA7WU5PUMkKTAHm0gFv1UAABOwsbO/wMLr7O0AAAUYHibx8fKLjI8AAAuZmp0Jdjusra68vb/39/dMlznKAAAA/ElEQVR4nO3cOQ7CMBRF0YCBBMI8j/vfJkICiriBSETi65z6Fb5KFRcuCgAAAAAAAAAAAAAAAAAAAICPjRu+Xg3a6STucfK0bDrmq202Su/Gshy2UnYUuNv3mw5Z4vaUjTbVK/Bc90Yt1PNuEqtpdvb+KjVXaZ2vZs+PWM7rXhv1YqJQoUKFChUqVKhQoUKFChUqVKhQoUKFChX+uPCSMtdYhbdN5har8DMKFSpUqFChQoUKFSpUqFDhvxfG/8ePf08T/65NoUKFChUqVKhQoUKFChUqVKhQoUKFChVGLIz/pkL8dzGK+G+bAAAAAAAAAAAAAAAAAAAAAH/tDsvlYejehUEgAAAAAElFTkSuQmCC"
              alt="Hackerank"
              width={32}
              height={32}
            />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.mail} target="display">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
              alt="gmail"
              width={32}
              height={32}
            />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>&copy; 2023 Amit Gangwar. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;

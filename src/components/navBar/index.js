import React from "react";

import LogoIcon from "@assets/Logo.png";
import Divider from "@assets/divider.png";
import UserIcon from "@assets/user.svg";
import PlusIcon from "@assets/plus.svg";

import {
  Container,
  Logo,
  Links,
  Buttons,
  ButtonSignIn,
  ButtonSignUp,
  LogoLink,
} from "./styles";

const Navbar = () => {
  return (
    <>
      <Container>
        <LogoLink>
          <Logo>
            <img src={LogoIcon} />
          </Logo>
          <Links>
            <img src={Divider} />
            <a>Novos</a>
            <a>Usados</a>
            <a>Vender</a>
            <a>Comprar</a>
            <a>Novidades</a>
          </Links>
        </LogoLink>
        <Buttons>
          <ButtonSignIn>
            <img src={UserIcon} />
            <span>Entrar</span>
          </ButtonSignIn>
          <ButtonSignUp>
            <img src={PlusIcon} />
            <span>Vender</span>
          </ButtonSignUp>
        </Buttons>
      </Container>
    </>
  );
};

export default Navbar;

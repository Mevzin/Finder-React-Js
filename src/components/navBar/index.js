import React from "react";

import LogoIcon from "@assets/Logo.png";
import Divider from "@assets/divider.png";

import { TbPlus, TbUser } from "react-icons/tb";

import { Link } from "react-router-dom";

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
            <Link to="/">
              <img src={LogoIcon} />
            </Link>
          </Logo>
          <Links>
            <img src={Divider} />
            <Link to="/catalogo/novo">Novos</Link>
            <Link to="/catalogo/novo">Usados</Link>
            <Link to="/catalogo/novo">Vender</Link>
            <Link to="/catalogo/novo">Comprar</Link>
            <Link to="/detalhes/123">Novidades</Link>
          </Links>
        </LogoLink>
        <Buttons>
          <ButtonSignIn>
            <Link to="/">
              <TbUser />
              <span>Entrar</span>
            </Link>
          </ButtonSignIn>
          <ButtonSignUp>
            <Link to="/">
              <TbPlus />
              <span>Vender</span>
            </Link>
          </ButtonSignUp>
        </Buttons>
      </Container>
    </>
  );
};

export default Navbar;

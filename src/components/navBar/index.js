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

import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.div
    style={{zIndex: 2}}
    initial={{ y: -window.innerHeight }}
    animate={{ y: 0 }}
    exit={{ y: -window.innerHeight }}
    >
      <Container>
        <LogoLink>
          <Logo>
            <Link to="/">
              <img src={LogoIcon} />
            </Link>
          </Logo>
          <Links>
            <img src={Divider} />
            <Link to="/catalogo/novo/all">Novos</Link>
            <Link to="/catalogo/usado/all">Usados</Link>
            <Link to="/catalogo/novo/all">Vender</Link>
            <Link to="/catalogo/novo/all">Comprar</Link>
            <Link to="/">Novidades</Link>
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
    </motion.div>
  );
};

export default Navbar;

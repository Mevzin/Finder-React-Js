import React from "react";

import LogoIcon from "@assets/Logo.png";

import {
  Container,
  FooterHeader,
  FooterBody,
  FooterEnd,
  HeaderContent,
  Logo,
  Options,
  NewsLetterContent,
  BuySaleContent,
  AboutContent,
  ProfileContent,
  ContactContent,
  InputEmail,
  Label,
  SocialLinks,
  InputSelect,
  Copyright,
  Links,
} from "./styles";

import { TbMail, TbSend, TbWorld, TbMapPin } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaFacebookMessenger,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <FooterHeader>
        <HeaderContent>
          <Logo>
            <img src={LogoIcon} />
          </Logo>
          <Options>
            <InputSelect>
              <TbWorld />
              <select disabled={true}>
                <option>pt-BR</option>
              </select>
            </InputSelect>
            <InputSelect>
              <TbMapPin />
              <select disabled={true}>
                <option>São Paulo</option>
              </select>
            </InputSelect>
          </Options>
        </HeaderContent>
      </FooterHeader>
      <FooterBody>
        <NewsLetterContent>
          <h2>Cadastre-se na newsletter</h2>
          <p>Não perca nenhuma oferta relevante!</p>
          <InputEmail>
            <TbMail />
            <input type="email" name="email" placeholder="Informe seu email" />
            <button>
              <TbSend />
            </button>
          </InputEmail>
        </NewsLetterContent>
        <BuySaleContent>
          <h2>Comprar ou Vender</h2>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
        </BuySaleContent>
        <AboutContent>
          <h2>Sobre</h2>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
        </AboutContent>
        <ProfileContent>
          <h2>Perfil</h2>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
          <p>Loren ipsun</p>
        </ProfileContent>
        <ContactContent>
          <Label>
            <IoPhonePortraitOutline />
            <p>(11)1111-1111</p>
          </Label>
          <Label>
            <TbMail />
            <p>email@finder.com.br</p>
          </Label>
          <SocialLinks>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaTelegramPlane />
            </button>
            <button>
              <FaFacebookMessenger />
            </button>
          </SocialLinks>
        </ContactContent>
      </FooterBody>
      <FooterEnd>
        <Copyright>
          <p>
            Copyright © Finder | Gama Academy. Todos os direitos reservados -
            Este é um projeto acadêmico.
          </p>
        </Copyright>
        <Links>
          <a>Termos de uso</a>
          <a>Política de privacidade</a>
        </Links>
      </FooterEnd>
    </Container>
  );
};

export default Footer;

import React from "react";

import LogoIcon from "@assets/icons/illustration_App.png";
import BtnAppStore from "@assets/icons/btn_AppStore.svg";
import BtnGooglePlay from "@assets/icons/btn_GooglePlay.svg";

import { ButtonApp, Container, ContestApp, LogoApp } from "./styles";

const Footer = () => {
  return (
    <>
      <Container>
        <ContestApp>
          <h1>Baixe o nosso app</h1>
          <p>
            Baixe o Finder App e junte-se à comunidade de entusiastas de carros.
            Não pare sua busca de carro quando sair do computador com nosso
            aplicativo para Android e iOS!
          </p>
          <ButtonApp>
            <button>
              <img src={BtnAppStore} />
            </button>
            <button>
              <img src={BtnGooglePlay} />
            </button>
          </ButtonApp>
        </ContestApp>
        <LogoApp>
          <img src={LogoIcon} />
        </LogoApp>
      </Container>
    </>
  );
};

export default Footer;

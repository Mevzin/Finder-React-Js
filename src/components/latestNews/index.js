import React from "react";

import Arrow from "@assets/news/arrow.png";
import Car from "@assets/news/car.png";
import Car2 from "@assets/news/car2.png";
import Jacob from "@assets/news/jacob.png";
import Motorcycle from "@assets/news/motorcycle.png";
import Ralph from "@assets/news/ralph.png";
import Calendar from "@assets/news/calendar.png";
import Annette from "@assets/news/annette.png";

import {
  LatestNews,
  TitleNew,
  News,
  Offers,
  TitleOffers,
  User,
  Username,
  TitleGo,

} from "./styles";

const latestNews = () => {
    return (
      <>
        <LatestNews>
          <TitleNew>
            <h2>Ultimas novidades</h2>
            <TitleGo>Go to blog <img src={Arrow}/></TitleGo>
          </TitleNew>

          <News>
            <div class="img-novidade">
              <img src={Car}/>
              <Offers>
                <p>DICAS</p>
                <TitleOffers>Loren ipsuns</TitleOffers>
              </Offers>
              <User>
                <img src={Jacob}/>
                <div>
                  <Username>Jacob Jones</Username>
                  <Username><img class="calendario" src={Calendar}/> 24 de Nov</Username>
                </div>
              </User>
            </div>

            <div class="img-novidade">
              <img src={Car2}/>
              <Offers>
                <p>OFERTA</p>
                <TitleOffers>Loren ipsuns</TitleOffers>
              </Offers>       
              <User>
                <img src={Annette}/>
                <div>
                  <Username>Annette Black</Username>
                  <Username><img class="calendario" src={Calendar}/> 28 de Nov</Username>
                </div>     
              </User>
            </div>

            <div class="img-novidade">
              <img src={Motorcycle}/>
              <Offers>
                <p>OFERTA</p>
                <TitleOffers>Loren ipsuns</TitleOffers>
              </Offers>
              <User>
                <img src={Ralph}/>
                <div>
                  <Username>Ralph Edwards</Username>
                  <Username><img class="calendario" src={Calendar}/> 15 de Dez</Username>
                </div>  
              </User>
            </div>    
          </News>
        </LatestNews>
      </>
    );
  };
  
  export default latestNews;
  
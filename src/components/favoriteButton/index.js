import React, { useState } from 'react';

import {
  ContainerFav
} from './styles';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const FavoriteButton = ({isFavorite}) => {
  const [favorite, setFavorite] = useState(false);

  if(isFavorite != undefined){
    setFavorite(favorite);
  }

  function handleFavorite(){
    setFavorite(!favorite);
  }

  return(
    <ContainerFav onClick={() => handleFavorite()}>
      {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </ContainerFav>
  );
};

export default FavoriteButton;
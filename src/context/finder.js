import React, {createContext, useState } from "react";
import useGetFinderProps from "../hooks/useFinderApi";

const FinderPropsContext = createContext({});

export const FinderProvider = ({children}) => {
  const finderProps = useGetFinderProps({});

  return (
    <FinderPropsContext.Provider value={{ finderProps }}>
      {children}
    </FinderPropsContext.Provider>
  );
}

export const FinderPropsContent = FinderPropsContext;
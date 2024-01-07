"use client"

//Need to add proper TS below

import React, {createContext, useState, Dispatch, SetStateAction} from "react";

type Cluster = {
  ipAddress: number;
  clusterName: string;
}

type ContextProps = {
  ipAddress: number,
  setIpAddress: Dispatch<SetStateAction<number>>,
  clusterName: string,
  setClusterName: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
  ipAddress: 0,
  setIpAddress: (): number => 0,
  clusterName: '',
  setClusterName: (): string => ''
})

export default function GlobalContextProvider({children}: {children:React.ReactNode}){
    const [ipAddress, setIpAddress] = useState(10);
    const [clusterName, setClusterName] = useState('');

    return (
      <GlobalContext.Provider value={{ ipAddress, setIpAddress, clusterName, setClusterName}}>
        {children}
      </GlobalContext.Provider>
    )
}


//To use context on other pages, import useGlobalContext
  //destructure as necessary i.e const {ipAddress, setIpAddress, clusterName, setClusterName} = useGlobalContext()
  //then you can access the values or set them
//THIS ONLY WORKS FOR CLIENT COMPONENTS
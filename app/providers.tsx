'use client';

//we can add global context providers here (light/dark mode?)

import GlobalContextProvider from '../context/contextStore';

export function Providers({children}: {children:React.ReactNode}){
    return (
        <GlobalContextProvider>
            {children}
        </GlobalContextProvider>
    )
}
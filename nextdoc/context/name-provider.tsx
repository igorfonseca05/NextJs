'use client'

import { createContext, ReactNode, useState } from "react"


export const NameContext = createContext<string>('')

export function NameContextProvider({ children }: { children: ReactNode }) {
    return (

        <NameContext.Provider value="Igor">
            {children}
        </NameContext.Provider>
    )
}
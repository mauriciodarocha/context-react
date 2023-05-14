import React, { Dispatch, SetStateAction } from "react";

export type TGlobalContext = {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

export const GlobalContext = React.createContext<TGlobalContext>({ search: "", setSearch: () => {} })

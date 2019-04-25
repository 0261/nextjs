import React from "react";
import { Header } from "@components/Header";

export const Layout: React.FunctionComponent<{children: any}> = ({children}) => (
    <div>
        <Header/>
        {children}
    </div>
);
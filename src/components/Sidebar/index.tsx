import React from "react";
import { SideHeader, Sidebar, Title } from "./styled";
import { Divider } from "@mui/material";
export default function Aside (){
return(
    <>
    <Sidebar>

    <SideHeader>
    <Title>Base Dashboard</Title>
    </SideHeader>
    <Divider />
    </Sidebar>
    </>
)
}
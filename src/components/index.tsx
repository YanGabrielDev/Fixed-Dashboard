import { Divider } from "@mui/material";
import React from "react";
import AsideHeader from "./Header";
import Aside from "./Sidebar";
import Grid from "@mui/material";
export default function Layout(): JSX.Element {
  return (
    <>
      <Grid>
        <AsideHeader />
        <Aside />
      </Grid>
    </>
  );
}

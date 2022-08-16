import React from "react";
import * as Colors from "../../configs/colors";
import styled from "styled-components";
export const Sidebar = styled.div`
  height: 100%;
  width: 260px;
  position: fixed;
  background-color: ${Colors.SoftBlack};
`;
export const SideHeader = styled.header`
  height: 100px;
  width: 260px;
  background-color: ${Colors.SoftBlack};
  position: fixed;
  border-bottom: solid 1px;
  border-color: ${Colors.SoftGray};
  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  color: white;
  margin-top: 2rem;
`;

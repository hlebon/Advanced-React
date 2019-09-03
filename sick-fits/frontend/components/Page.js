import React from 'react';
import Header from "./Header";
import Meta from "./Meta";
import styled from "styled-components";

const theme = {
  red: "#FF0000",
  back: "#393939",
  grey: "#3A3A3A",
  lightgrey: "",
  offwhite: ""
}

const StyledPage = styled.div`
  background: #fff;
  color: back;
`

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`

const Page = (props) => {
  return (
    <StyledPage>
      <Meta/>
      <Header/>
      <Inner>
        {props.children}
      </Inner>
    </StyledPage>
   );
}

export default Page;

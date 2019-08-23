import React from 'react';
import Header from "./Header";

const Page = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
    </div>
   );
}

export default Page;

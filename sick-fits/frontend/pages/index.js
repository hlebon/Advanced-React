import React from "react";
import Link from "next/link"

function Home(){
  return (
    <div>
      <h1>Home!</h1>
      <Link href={"/sell"}>Sell Page</Link>
    </div>
  )
}

export default Home;
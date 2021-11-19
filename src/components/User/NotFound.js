import React from "react";
import image from "../../img/noFound.gif";
import scanor from "../../img/juanScanor.gif";
import Navbar from "../Home/Navbar";


export default function NotFound() {
  return (
    <>
      <Navbar />

      <div>
          <img  src={image}/>
      </div>
      <div>
          <img src={scanor} />
      </div>
    </>
  );
}

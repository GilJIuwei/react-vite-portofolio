import React from "react";
import { SiJavascript } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiArcgis } from "react-icons/si";
import { SiSketchup } from "react-icons/si";

const Jumbotron = () => {
  return (
    <div className="bg-slate-500 mt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <p>Hello, My Name is 👋</p>
            <h1>Virgil I. Ambar</h1>
            <p>I'm Software Engineer</p>
            <div className="flex justify-start py-2 gap-1">
              <SiJavascript />
              <SiAdobeillustrator />
              <SiArcgis />
              <SiSketchup />
            </div>
          </div>
          <div className="w-60 h-60 mx-auto px-2 py-4">
            <img src="dist/img/wa.png" alt="gil"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;

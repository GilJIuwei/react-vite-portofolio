import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

export const Contacts = () => {
  return (
    <div className="mx-auto px-4 mt-4 font-bold text-xl text-center">
      <p>Contacts</p>
      <div className="object-center">
        <div className="flex flex-row">
          <SiWhatsapp />
          <SiInstagram />
        </div>
      </div>
    </div>
  );
};
export default Contacts;

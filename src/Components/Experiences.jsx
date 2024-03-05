import React from "react";

const Projects = (props) => {
  return (
    <div className="mx-auto w-11/12 border border bg-slate-500  border-gray-800 py-0">
      <img src={props.img} alt="" className="w-full h-1/2" />
      <h1 className="text-center font-bold py-1">{props.title}</h1>
      <p className="py-1"> {props.decs}</p>
    </div>
  );
};
export const Experiences = () => {
  return (
    <div className="mx-auto px-4 mt-4">
      <h1 className="text-center font-bold">Experiences</h1>
      <div className="grid grid-cols-4 mt-5">
        <Projects
          img="https://images.unsplash.com/photo-1608303588026-884930af2559?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Autocad"
          decs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dignissimos."
        />
        <Projects
          img="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Arcgis"
          decs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dignissimos."
        />
        <Projects
          img="https://images.unsplash.com/photo-1502404679462-d669245fc482?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Ilustrator"
          decs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dignissimos."
        />
        <Projects
          img="https://images.unsplash.com/photo-1525373698358-041e3a460346?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Javascript"
          decs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dignissimos."
        />
      </div>
    </div>
  );
};
export default Experiences;

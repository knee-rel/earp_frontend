import React from "react";
import Dessert from "../../../public/dessert.png";

const Card = (props) => {
  return (
    <div className="z-10 w-1/2 p-4 lg:w-1/3 lg:p-10 md:p-6 justify-evenly">
      <div className="flex flex-col items-center justify-center h-64 bg-white shadow-none cursor-pointer bg-none sm:shadow-lg rounded-2xl animate--button">
        <img src={props.image} />
        <p className="pt-2 text-lg font-bold leading-loose">{props.caption}</p>
        <p className="text-sm text-center text-seagreen md:text-gray-500 md:text-base">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;

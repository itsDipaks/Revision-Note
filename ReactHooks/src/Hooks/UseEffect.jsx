import React, {useState} from "react";
import {useEffect} from "react";

const UseEffect = () => {
  const [size, setsize] = useState(window.screen.width);

  const currentsize = () => {
    //here we are setting the screen inner size in size state and then it will useed in vheraible
    setsize(() => window.innerWidth);
  };
  useEffect(() => {
    //this is The Event For To check a screen size whrere resize is event name and currrentsize is callback function where we write our setsize login
    window.addEventListener("resize", currentsize);

    //return callback in useeefect will remove the privious state of a function it will acts like a clemup function where it will clean privious function and only return new function
    return () => {
      window.removeEventListener("resize", () => {});

      // [] =>   Array dependancis in useffect shows that the inside callbak function only runs when the page loads
      // [value] =>  value inside array show that run useefect in every time that the value get change which is mention inside the useeffect arrays
      //     => empty shows run useefcet in every time the function which is inside useffect runs
    };
  });
  return (
    <div>
      <h1>My Screen Width is {size}</h1>
    </div>
  );
};

export default UseEffect;

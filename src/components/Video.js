import React from "react";

const Video = (props) => {
  return (
    <section>
      <h1>Video {props.number}</h1>
      <button onClick={props.setToggle}>Toggle</button>
    </section>
  );
};

export default Video;

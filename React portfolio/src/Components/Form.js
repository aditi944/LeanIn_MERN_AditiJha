import React from "react";
import { NavContact } from "../Components/sidebar/Nav";
// import { ReactComponent as Wave } from "../Wave.svg";

const Form = () => {
  return (
    <div>
      {/* <Wave top='-500vh'/> */}
      <NavContact />
      <iframe
        title="Contact"
        src="https://forms.gle/7jQzkQqhzG7U5WR69"
        width="640vw"
        height="900vh"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Form;

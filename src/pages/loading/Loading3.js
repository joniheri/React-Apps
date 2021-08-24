import React from "react";

// import css
import "../../css/Loading3.css";

// import components
import NavbarPublic from "../../components/NavbarPublic";

export default function Loading3() {
  return (
    <>
      <NavbarPublic />
      <div style={{ marginTop: "100px" }}>
        <center>
          <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </center>
      </div>
    </>
  );
}

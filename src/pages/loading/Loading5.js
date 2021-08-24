import React from "react";

// import css
import "../../css/Loading5.css";

// import components
import NavbarPublic from "../../components/NavbarPublic";

export default function Loading5() {
  return (
    <>
      <NavbarPublic />
      <div style={{ marginTop: "100px" }}>
        <center>
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </center>
      </div>
    </>
  );
}

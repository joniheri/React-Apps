import React from "react";

// import css
import "../../css/Loading4.css";

// import components
import NavbarPublic from "../../components/NavbarPublic";

export default function Loading4() {
  return (
    <>
      <NavbarPublic />
      <div style={{ marginTop: "100px" }}>
        <center>
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
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

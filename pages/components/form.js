import { Button, formatMs } from "@material-ui/core";
import React, { Component } from "react";

export default function Form(props) {
  return (
    <div>
        <br/>
        <br/>
        <h1>Get <danger classname="danger">25%</danger> off</h1>
        <h4>Subscribe to the Desicovers</h4>
      <form>
        <h6>
          <input type="text" id="fname" value="Your Email Address" />
          <input type="button"/>
        </h6>
      </form>
    </div>
  );
}

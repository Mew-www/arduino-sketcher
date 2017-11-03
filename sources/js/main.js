import ReactDOM from 'react-dom';
import React from "react";
import {SketchesAppComponent} from "./components/sketches-app-component";
import axios from "axios";

ReactDOM.render(
  <SketchesAppComponent
    a_test_prop={"String passed as a property"}
  />,
  document.getElementById('app-root')
);
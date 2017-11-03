import React, {Component} from "react";
import {SketchMenuItemComponent} from "./sketch-menu-item-component";

export class SketchMenuComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SketchMenu">
        <div className="SketchMenu__items">
          {this.props.sketches.map((sketch) => <SketchMenuItemComponent sketch={sketch}/>)}
        </div>
        <div className="SketchMenu__controls">
          <button className="SketchMenu__create-new-btn">Create new sketch</button>
        </div>
      </div>
    );
  }
}
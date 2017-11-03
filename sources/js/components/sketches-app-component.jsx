import React, {Component} from "react";
import {SketchEditorComponent} from "./sketch-editor-component";
import {SketchMenuComponent} from "./sketch-menu-component";
import axios from "axios";
import Settings from "../settings";

export class SketchesAppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      available_sketches: null,
      selected_sketch: null
    }
  }
  componentDidMount() {
    axios.get(Settings.SKETCHES_URI)
      .then((response) => {
        this.setState({
          available_sketches: response.data
        })
      })
      .catch((error) => {
        document.body.innerHTML = "Error when requesting sketch listing, unable to continue (without sketch listing).";
      })
  }
  render() {
    return (
      <div className="SketchesApp">
        <div className="SketchesApp__editor-container">
          {
            this.state.selected_sketch === null ?
            <p className="SketchesApp__none-selected-message">No sketch selected.</p>
            :
            <SketchEditorComponent
              sketch={this.state.selected_sketch}
            />
          }
        </div>
        <div className="SketchesApp__menu-container">
          {
            this.state.available_sketches === null ?
            <p className="SketchesApp__loading-sketches-message">Loading available sketches ...</p>
            :
            <SketchMenuComponent
              sketches={this.state.available_sketches}
              selected={this.state.selected_sketch}
              select_a_sketch={(sketch) => {this.setState({selected_sketch: sketch});}}
            />
          }
        </div>
      </div>
    );
  }
}
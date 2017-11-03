import React, {Component} from "react";

export class SketchMenuItemComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SketchMenuItem">
        <p className="SketchMenuItem__title">{this.props.sketch.name} (UID#{this.props.sketch.id})</p>
        <div className="SketchMenuItem__controls">
          <button className="SketchMenuItem__edit-btn"
                  onClick={()=>{this.props.select_a_sketch(this.props.sketch)}}
          >
            Edit
          </button>
          <button className="SketchMenuItem__install-btn">
            Install
          </button>
        </div>
      </div>
    );
  }
}
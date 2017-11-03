import React, {Component} from "react";

export class SketchEditorComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SketchEditor">
        <pre>{JSON.stringify(this.props.sketch, null, ' ')}</pre>
      </div>
    );
  }
}
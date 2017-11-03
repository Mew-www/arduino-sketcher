import React, {Component} from "react";

export class SketchEditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable_name: this.props.sketch.name,
      editable_code: this.props.sketch.code
    };
  }
  /*
   * Reset component if sketch ID changes (=indicates another sketch was selected)
   */
  componentWillReceiveProps(next_props) {
    if (next_props.sketch.id !== this.props.sketch.id) {
      this.setState({
        editable_name: next_props.sketch.name,
        editable_code: next_props.sketch.code
      })
    }
  }
  render() {
    return (
      <div className="SketchEditor">
        <div className="SketchEditor__sketch">
          <div className="SketchEditor__sketch-title">
            <input className="SketchEditor__sketch-name"
                   type="text"
                   value={this.state.editable_name}
                   onChange={(e) => {this.setState({editable_name: e.target.value});}}
            />
            {
              this.props.sketch.id ?
                <span className="SketchEditor__sketch-uid"> (UID#{this.props.sketch.id})</span>
                :
                ""
            }
          </div>
          <textarea className="SketchEditor__sketch-content"
                    value={this.state.editable_code}
                    onChange={(e) => {this.setState({editable_code: e.target.value});}}
          >
          </textarea>
        </div>
        <div className="SketchEditor__controls">
          <button className="SketchEditor__save-btn"
                  title="Save written modifications"
                  disabled={
                    this.state.editable_name === this.props.sketch.name
                    && this.state.editable_code === this.props.sketch.code
                  }
          >
            Save
          </button>
          <button className="SketchEditor__install-btn"
                  title="Try installing sketch on Arduino"
          >
            Install
          </button>
          <button className="SketchEditor__reload-btn"
                  title="Reload sketch to how it was"
          >
            Reload sketch (any changes will be lost)
          </button>
        </div>
      </div>
    );
  }
}
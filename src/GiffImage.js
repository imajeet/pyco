import React, { Component } from "react";
import "./GiffImage.css";
import ReactMediumImg from "react-medium-zoom";

class GiffImage extends Component {
  render() {
    return (
      <div className="Giffimage">
        <h1 className="Giffimage-title">{this.props.title.substr(0, 10)}</h1>
        <div className="Giffimage-image">
          <ReactMediumImg
            src={this.props.img}
            alt={this.props.title}
            style={{ height: "250px", width: "230px" }}
          />
        </div>
      </div>
    );
  }
}

export default GiffImage;

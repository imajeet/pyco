import React, { Component } from "react";
import GiffImage from "./GiffImage";
import "./GiffLoop.css";

class GiffLoop extends Component {
  render() {
    return (
      <div className="GiffLoop">
        <div className="GiffLoop-cards">
          {this.props.data.map(tile => (
            <GiffImage title={tile.title} img={tile.images.original.url} />
          ))}
        </div>
      </div>
    );
  }
}

export default GiffLoop;

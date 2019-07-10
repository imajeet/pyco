import React, { Component } from "react";
import GiffLoop from "./GiffLoop";
import axios from "axios";

class GiffCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      isToggle: false
    };
  }

  async componentDidMount() {
    await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/trending?api_key=a3sAFREFVwHxhj7G1dkREXWscFdY6kSM&limit=20`
      )
      .then(response => {
        this.setState({ result: response.data.data });
      });
  }
  render() {
    const data = this.state.result;
    return (
      <div>
        <GiffLoop data={data} />
      </div>
    );
  }
}
export default GiffCard;

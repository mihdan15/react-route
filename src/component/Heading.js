import React from "react";

class Heading extends React.Component {
  render() {
    const { text } = this.props;
    return <h1>{text ? text : "Heading Class Component"}</h1>;
  }
}

//Export dlu
export default Heading;

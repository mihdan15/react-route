import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Heading from "./component/Heading";

// Fungsi Component

// function Heading(text = " ") {
//   return <h1>{text}</h1>;
// }

// function App() {
//   return (
//     <center>
//       {Heading("Halo Mihdan")}
//       {Heading("Halo Mihdan2")}
//       {Heading("Halo Mihdan3")}
//     </center>
//   );
// }

// Class Component

// class Heading extends React.Component {
//   render() {
//     const { text } = this.props;
//     return <h1>{text ? text : "Heading Class Component"}</h1>;
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <h3>Class Component</h3>;
//         <Heading />
//         <Heading text={"Class Component"} />
//       </>
//     );
//   }
// }

// File Component harus import dulu

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  sentuhBtn = () => {
    this.setState({ count: this.state.count + 2 });
  };
  render() {
    return (
      <>
        <h3>Class Component</h3>;
        <Heading />
        <Heading text={"Class Component"} />
        <button onClick={this.sentuhBtn}>Klik Saya</button>
        <h2>{this.state.count}</h2>
      </>
    );
  }
}

export default App;

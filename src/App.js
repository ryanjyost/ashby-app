import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            // height: "100vh",
            backgroundColor: "#fcfcfc",
            padding: "100px 20px"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "rgba(0,0,0,0.9)",
              fontWeight: "bold",
              fontSize: 30
            }}
          >
            How It Works
          </h2>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%" }}>
              <h4 style={{ width: "100%", textAlign: "center" }}>
                1. Answer some of Ashby's questions{" "}
              </h4>
              <p>
                This is how Ashby will understand your unique needs. Ashby's
                learning never ends, so no need to complete all at once.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            // height: "100vh",
            backgroundColor: "#fcfcfc",
            padding: "100px 20px"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "rgba(0,0,0,0.9)",
              fontWeight: "bold",
              fontSize: 30
            }}
          >
            How Ashby helps you
          </h2>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%" }}>
              <h4 style={{ width: "100%", textAlign: "center" }}>
                1. Answer some of Ashby's questions{" "}
              </h4>
              <p style={{ display: "flex", textAlign: "center" }}>
                zThis is how Ashby will understand your unique needs. Ashby's
                learning never ends, so no need to complete all at once.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

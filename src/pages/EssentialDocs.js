import React, { Component } from "react";

export default class EssentialDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "rgba(85,88,255,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "hidden"
        }}
      >
        <h2 style={{ fontSize: 24 }}>Essential Docs Checklist</h2>
        <h5 style={{ color: "rgba(255, 255, 255, 0.8)", marginTop: 10 }}>
          Made by Ryan @ Ashby
        </h5>
        <div
          style={{
            backgroundColor: "rgba(85,88,255,1)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "50px 30px",
            maxWidth: 600
          }}
        >
          <a
            className={"button"}
            style={{ margin: 10, width: 200 }}
            href={"Ashby_Essential_Docs_Checklist.pdf"}
            download
          >
            <i
              className="fa fa-cloud-download-alt"
              aria-hidden="true"
              style={{ marginRight: 10 }}
            />Download
          </a>
          <a
            style={{ margin: 10, width: 200 }}
            className={"button"}
            href={"Ashby_Essential_Docs_Checklist.pdf"}
            target="_blank"
          >
            <i
              className="fa fa-external-link-alt"
              aria-hidden="true"
              style={{ marginRight: 10 }}
            />Open in Browser
          </a>
        </div>
      </div>
    );
  }
}

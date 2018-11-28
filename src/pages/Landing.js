import React, { Component } from "react";
import { Icon } from "antd";
import "../styles/Landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      s1: 0,
      s2: 0
    };
  }

  render() {
    const items1 = [
      {
        text: "staying on top of basic personal finance",
        image: "convo-2"
      },
      {
        text: "keeping track of important documents",
        image: "convo-3"
      },
      {
        text: "considering things you may not have considered",
        image: "conv-11"
      },
      {
        text:
          "tax and investment deadlines, expiration dates of cards, licenses and" +
          " registrations, etc.",
        image: "convo-1"
      },
      {
        text:
          "big life changes like switching jobs, moving into a new apartment, etc.",
        image: "convo-4"
      },
      {
        text:
          "other adult duties that are necessary but a struggle to remember and deal with.",
        image: "convo-5"
      }
    ];

    const items2 = [
      {
        text:
          "Ashby worries about your mundane adulthood responsibilities so that you don't have to.",
        image: "convo-7"
      },
      {
        text:
          "Receive tips, guidance, resources and more that make your life easier.",
        image: "convo-8"
      },
      {
        text: "Save time, stress less, and avoid bad outcomes.",
        image: "convo-9"
      },
      {
        text: "Never miss important dates or deadlines.",
        image: "convo-6"
      },

      {
        text: "Ashby is proactive so that you can be proactive, too.",
        image: "convo-10"
      }
    ];

    const renderSingle = (item, index, stateList) => {
      return (
        <li
          onClick={() => this.setState({ [stateList]: index })}
          style={{ color: this.state[stateList] === index ? "#fff" : null }}
        >
          <div
            className="icon"
            style={{
              color: this.state[stateList] === index ? "#fff" : null,
              marginTop: 5
            }}
          >
            {this.state[stateList] === index ? (
              <span>✔</span>
            ) : (
              <span>&#9634;</span>
            )}
          </div>
          <span
            style={{
              textDecoration:
                this.state[stateList] === index ? "underline" : "none"
            }}
          >
            {item.text}
          </span>
        </li>
      );
    };

    const benefit = (
      title,
      items,
      backgroundColor,
      isReverse,
      stateList,
      header,
      image
    ) => {
      return (
        <div style={{ width: "100%", backgroundColor: backgroundColor }}>
          <div
            className={`main ${isReverse ? "main-reverse" : null}`}
            style={{ backgroundColor: backgroundColor }}
          >
            <div className="left">
              {/*<h2 className="sectionTitle" style={{ marginBottom: 20 }}>*/}
              {/*{title}*/}
              {/*</h2>*/}
              <h1
                className={"sectionHeader"}
                style={{
                  textAlign: "center"
                }}
              >
                {header}
              </h1>
              <ul>
                {items.map((item, i) => {
                  return (
                    <div key={`${Math.random() * i}${stateList}`}>
                      {renderSingle(item, i, stateList)}
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="right">
              <div className="phone">
                <div className="marvel-device iphone8 silver">
                  <div className="top-bar" />
                  <div className="sleep" />
                  <div className="volume" />
                  <div className="camera" />
                  <div className="sensor" />
                  <div className="speaker" />
                  <div className="screen">
                    <img
                      src={`https://s3.amazonaws.com/ashby.app/images/${
                        "image" in items[this.state[stateList]]
                          ? items[this.state[stateList]].image
                          : null
                      }.jpg`}
                      width="100%"
                    />
                  </div>
                  <div className="home" />
                  <div className="bottom-bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="App">
        <main>
          <div className="main">
            <div className="left leftMain">
              <h1 style={{ color: "#fff" }}>
                Hate having to manage mundane adulthood tasks?
              </h1>

              <h3
                style={{
                  margin: "20px 0px 0px 0px",
                  color: "rgba(255, 255, 255, 0.9)"
                }}
              >
                Ashby helps you get boring-but-necessary adult stuff done with
                autogenerated reminders, guidance, and an online organizer, so
                that you have more time and energy for things you'd rather do.
                {/*Ashby is a simple automated assistant that helps busy young*/}
                {/*professionals stay on top of life's most common and mundane*/}
                {/*responsibilities.*/}
                {/*<span style={{ color: "#fff" }}>Ashby</span> keeps you organized*/}
                {/*and accountable with autogenerated reminders, actionable tips*/}
                {/*and more. You'll save time and energy for things you'd rather*/}
                {/*do.*/}
                {/*Ashby is a simple automated assistant for busy young*/}
                {/*professionals who want to save time and energy managing life's*/}
                {/*most common and mundane tasks.*/}
              </h3>

              {/*<h3*/}
              {/*style={{*/}
              {/*margin: "20px 0px 0px 0px",*/}
              {/*color: "rgba(255, 255, 255, 0.9)"*/}
              {/*}}*/}
              {/*>*/}
              {/*Ashby makes it easy for you to manage mundane responsibilities*/}
              {/*and navigate adulthood through autogenerated reminders,*/}
              {/*guidance, and more. You'll save time and stress less.*/}
              {/*</h3>*/}
              <div id="mc_embed_signup" style={{ marginTop: 10 }}>
                <Link
                  to={"/coming-soon"}
                  className="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    textDecoration: "none",
                    width: 200,
                    fontSize: 16
                  }}
                >
                  Get Started{" "}
                  <span style={{ fontSize: 20, marginLeft: 15 }}>&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="right">
              <div id="phone">
                <div className="marvel-device iphone8 silver">
                  <div className="top-bar" />
                  <div className="sleep" />
                  <div className="volume" />
                  <div className="camera" />
                  <div className="sensor" />
                  <div className="speaker" />
                  <div className="screen">
                    <img
                      src="https://s3.amazonaws.com/ashby.app/images/convo-6.jpg"
                      width="100%"
                    />
                  </div>
                  <div className="home" />
                  <div className="bottom-bar" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/*<div*/}
        {/*key={0}*/}
        {/*style={{*/}
        {/*backgroundColor: "#fcfcfc",*/}
        {/*// padding: "75px 20px",*/}
        {/*textAlign: "center"*/}
        {/*}}*/}
        {/*>*/}
        {/*<div*/}
        {/*className={"things"}*/}
        {/*style={{*/}
        {/*display: "flex",*/}
        {/*maxWidth: 600,*/}
        {/*margin: "auto",*/}
        {/*flexDirection: "column",*/}
        {/*alignItems: "center",*/}
        {/*justifyContent: "center",*/}
        {/*padding: "200px 20px",*/}
        {/*position: "relative",*/}
        {/*overflow: "hidden",*/}
        {/*textAlign: "center"*/}
        {/*}}*/}
        {/*>*/}
        {/*<h1*/}
        {/*className={"sectionHeader"}*/}
        {/*style={{*/}
        {/*color: "rgba(0,0,0,0.9)",*/}
        {/*width: "100%",*/}
        {/*marginTop: 0,*/}
        {/*marginBottom: 20,*/}
        {/*textAlign: "center"*/}
        {/*}}*/}
        {/*>*/}
        {/*What is Ashby?*/}
        {/*</h1>*/}
        {/*<h5 style={{ color: "rgba(0,0,0,0.6)" }}>*/}
        {/*Ashby is a simple automated assistant for busy young professionals*/}
        {/*who want to save time and stress less about managing adulthood's*/}
        {/*most common and mundane tasks.*/}
        {/*</h5>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/* How it works */}
        <div
          key={0}
          style={{
            backgroundColor: "#fcfcfc",
            padding: "75px 20px",
            textAlign: "center"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "rgba(0,0,0,0.9)",
              fontWeight: "bold",
              fontSize: 40,
              marginBottom: 20
            }}
          >
            How it works
          </h2>
          <div
            className={"things"}
            style={{
              display: "flex",
              maxWidth: 600,
              margin: "auto",
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 20px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ width: "100%", margin: "30px 0px" }}>
              <Icon type="form" style={{ fontSize: 40, color: "#5558FF" }} />
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "#5558FF"
                }}
              >
                Ashby learns about your current situation by asking some simple
                questions.{" "}
              </h2>
              <p
                style={{
                  color: "rgba(0,0,0,0.5)",
                  fontWeight: "bold",
                  display: "none"
                }}
              >
                Ashby will use your answers to determine how best to help you.
                No need to go through everything - Ashby will fill in the gaps
                later as-needed. No sensitive personal info required{" "}
                <span style={{ color: "rgba(0,0,0,1)" }}>👌</span>
              </p>
            </div>
            <div
              style={{
                width: "100%",
                margin: "30px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                className={"spinner"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  type="setting"
                  style={{ fontSize: 40, color: "#5558FF", lineHeight: 0.8 }}
                />
              </div>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "#5558FF"
                }}
              >
                Ashby generates a calendar of important dates, to-dos and
                reminders, determines things you're missing or should consider,
                and sets up your online organizer.
              </h2>
              <p
                style={{
                  color: "rgba(0,0,0,0.5)",
                  fontWeight: "bold",
                  display: "none"
                }}
              >
                Ashby will use your answers to determine how best to help you.
                No need to go through everything - Ashby will fill in the gaps
                later as-needed. No sensitive personal info required{" "}
                <span style={{ color: "rgba(0,0,0,1)" }}>👌</span>
              </p>
            </div>
            <div
              style={{
                width: "100%",
                margin: "30px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                className={"compass"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  type="compass"
                  style={{ fontSize: 40, color: "#5558FF", lineHeight: 0.8 }}
                />
              </div>

              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "#5558FF"
                }}
              >
                Ashby regularly helps you navigate adulthood by sending
                proactive reminders, providing valuable tips and resources, and
                more.
              </h2>
            </div>
            <div
              style={{
                width: "100%",
                margin: "30px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                className={"spinner"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  type="sync"
                  style={{ fontSize: 40, color: "#5558FF", lineHeight: 0.8 }}
                />
              </div>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "#5558FF"
                }}
              >
                Get stuff done. Save time. Stress less.
              </h2>
            </div>
          </div>
        </div>

        {/* Things it helps with */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(255,99,99,1)"
          }}
        >
          {benefit(
            "Stay on top of boring-but-necessary responsibilities like personal finance",
            items1,
            "rgba(255,99,99,1)",
            true,
            "s1",
            "Ashby helps you with..."
          )}
        </div>

        {/* Security */}
        <div
          key={0}
          style={{
            backgroundColor: "#fcfcfc",
            padding: "75px 20px",
            textAlign: "center"
          }}
        >
          <Icon
            type="lock"
            style={{ fontSize: 60, color: "rgba(85,88,255,1)" }}
          />
          <div
            className={"things"}
            style={{
              display: "flex",
              maxWidth: 600,
              margin: "auto",
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 20px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ width: "100%", margin: "30px 0px" }}>
              <h3 style={{ fontSize: 26, color: "rgba(85,88,255,1)" }}>
                Your data stays private
              </h3>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "rgba(0,0,0,0.7)"
                }}
              >
                We won't share your info for any reason. We don't have ads or
                sell data.
              </h2>
            </div>
            <div
              style={{
                width: "100%",
                margin: "30px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <h3 style={{ fontSize: 26, color: "rgba(85,88,255,1)" }}>
                Your account is secure
              </h3>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "rgba(0,0,0,0.7)"
                }}
              >
                Your document storage is handled by Google Drive or Dropbox. Any
                info Ashby collects is safe and encrypted.
              </h2>
            </div>
            <div
              style={{
                width: "100%",
                margin: "30px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <h3 style={{ fontSize: 26, color: "rgba(85,88,255,1)" }}>
                No sensitive personal info needed
              </h3>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "rgba(0,0,0,0.7)"
                }}
              >
                You'll never provide Ashby with any ultra-sensitive info like
                account numbers. Ashby only asks for generic info, like dates
                and yes-or-no answers.
              </h2>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(255,99,99,1)"
          }}
        >
          {benefit(
            "Feel confident that you've got all your bases covered",
            items2,
            "rgba(85,88,255,1)",
            false,
            "s2",
            "Benefits"
          )}
        </div>

        <div
          key={2}
          style={{
            // backgroundColor: "rgba(85,88,255,1)",
            backgroundColor: "#fcfcfc",
            padding: "75px 20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            boxSizing: "border-box"
          }}
        >
          <h3
            style={{
              fontSize: 30,
              color: "rgba(0,0,0,0.8)",
              // color: "#fff",
              lineHeight: 1.2,
              marginBottom: 30
            }}
          >
            Easily navigate adulthood with Ashby
          </h3>
          <Link
            to={"/coming-soon"}
            className="button"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              textDecoration: "none",
              width: 200,
              fontSize: 16
            }}
          >
            Get Started{" "}
            <span style={{ fontSize: 20, marginLeft: 15 }}>&rarr;</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;

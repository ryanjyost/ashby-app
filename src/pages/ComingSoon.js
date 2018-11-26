import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "../styles/ComingSoon.css";

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  render() {
    const renderMailchimp = () => {
      return (
        <MailchimpSubscribe
          url={
            "https://app.us18.list-manage.com/subscribe/post?u=bbab41b4faa898c5bb1f4c2e1&amp;id=6d37986a72"
          }
          render={({ subscribe, status, message, onValidated }) => {
            return (
              <div className={"mailchimpSignUp"}>
                <input
                  type="email"
                  value={this.state.email}
                  name="EMAIL"
                  className="emailSignUpInput"
                  id="mce-EMAIL"
                  placeholder="Your email address"
                  required
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <div
                  style={{ position: "absolute", left: -5000 }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_bbab41b4faa898c5bb1f4c2e1_75f26540d8"
                    tabIndex="-1"
                    value=""
                  />
                </div>

                {status === "success" ? (
                  <div
                    style={{
                      color: "#fff",
                      padding: "0px 10px",
                      fontWeight: "bold"
                    }}
                  >
                    I'll be in touch!
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="button"
                    onClick={() => {
                      subscribe({ EMAIL: this.state.email });
                    }}
                  >
                    {!status && "Remind Me"}
                    {status === "sending" && "Sending..."}
                    {status === "success" && "I'll be in touch!"}
                    {status === "error" && "Hmm, try again."}
                  </button>
                )}
              </div>
            );
          }}
        />
      );
    };

    return (
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "rgba(85,88,255,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "hidden"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(85,88,255,1)",
            display: "flex",
            flexDirection: "column",
            padding: "50px 30px",
            maxWidth: 600
          }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
              fontSize: 28
            }}
          >
            Hello! You found Ashby before it's ready.
          </h2>
          <h3 style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: 20 }}>
            I'm{" "}
            <a
              href={"https://ryanjyost.com"}
              target={"_blank"}
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "underline"
              }}
            >
              Ryan,
            </a>{" "}
            {/*<span role="img" aria-label={"hand-wave"} style={{ marginLeft: 0 }}>*/}
            {/*👋*/}
            {/*</span>, */}
            financial planner turned web developer.
          </h3>

          <h3 style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            I'm still working on the first version of Ashby. If you'd like me to
            send you a reminder when it's ready,{" "}
            <span style={{ color: "#fff" }}>just put in your email below.</span>
          </h3>

          {renderMailchimp()}
          <h3 style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            In the meantime,{" "}
            <span style={{ color: "#fff" }}>
              I'll send you a checklist of essential docs
            </span>{" "}
            so that you can avoid the stress of not having these docs when you
            need them most. Also{" "}
            <a
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
              href="mailto:ryan@ashby.app"
            >
              happy to answer any questions you have!
            </a>
          </h3>

          <h6 style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            Disclaimer: I can't give individualized financial, investment, tax,
            etc. advice. But I can help you think about your adult
            responsibilities, provide resources and general guidance, etc.
          </h6>
        </div>
      </div>
    );
  }
}

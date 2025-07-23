import React from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="landing-hero">
      <header className="landing-header">
        <h1 className="logo">AskSenior</h1>
        <div className="header-right">
          <SignedOut>
            <SignUpButton mode="modal">
              <button className="get-started-btn">Get started →</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <button className="get-started-btn" onClick={() => navigate("/profile")}>
              Go to Dashboard →
            </button>
          </SignedIn>
        </div>
      </header>

      <main className="landing-main">
        <h2>
          Discover real advice <br /> from <span className="highlight">college seniors</span>
        </h2>
        <p>
          Get answers from real students about CET, JEE, NEET, or NIMCET. Make informed choices with trusted insights.
        </p>

        <div className="cta-buttons">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn primary">Start exploring now</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="btn secondary">Watch demo</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <button className="btn primary" onClick={() => navigate("/profile")}>
              Continue to app
            </button>
            

          </SignedIn>
        </div>

        <div className="trusted-info">
          <div className="avatars">
            <img src="https://i.pravatar.cc/32?img=1" alt="User" />
            <img src="https://i.pravatar.cc/32?img=2" alt="User" />
            <img src="https://i.pravatar.cc/32?img=3" alt="User" />
          </div>
          <p>Trusted by 10k+ students</p>
        </div>
      </main>
    </div>
  );
};

export default Landing;

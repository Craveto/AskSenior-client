
import React from "react";
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">AskSenior</Link>
      <div className="nav-links">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="nav-btn">Login</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="nav-btn">Register</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link to="/profile" className="nav-btn">My Profile</Link>
          <UserButton />
        </SignedIn>
        <Link to="/feed" className="nav-btn">Q&A</Link>

      </div>
    </nav>
  );
};

export default Navbar;

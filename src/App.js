import React from "react";

import { Routes, Route } from "react-router-dom";
import { ClerkLoaded, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import { SignIn, SignUp, UserProfile } from "@clerk/clerk-react";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import PostFeed from "./pages/PostFeed";
import RoleSelect from "./pages/RoleSelect";

const App = () => {
  return (
    <>
      <Navbar />
      <ClerkLoaded>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
          <Route path="/profile" element={
            <SignedIn>
              <Profile />
            </SignedIn>
          } />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/protected" element={
            <SignedIn>
              <h1>Protected Route</h1>
            </SignedIn>
          } />
          <Route path="/protected" element={<SignedOut><RedirectToSignIn /></SignedOut>} />
          <Route path="/feed" element={<PostFeed />} />
          <Route path="/select-role" element={<SignedIn><RoleSelect /></SignedIn>} />
        </Routes>
      </ClerkLoaded>
    </>
  );
};

export default App;

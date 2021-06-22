import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <main className="container">
      <header>
        <h1>Avatar</h1>
        <h5>Username</h5>
      </header>
      <Link to="/">Home</Link>
      <section>
        <h3>Personal Info.</h3>
        <article>
          <button>Edit Name</button>
        </article>
      </section>
    </main>
  );
}

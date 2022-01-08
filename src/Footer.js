import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="text-center">
      Coded by{" "}
      <a
        href="https://elastic-tesla-33daed.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Lucy Shaw{" "}
      </a>
      and{" "}
      <a
        href="https://github.com/Pumpkin92/dictionary-project"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on Github
      </a>
      <div className="fontAwesomeIcon footer">
        <a
          className="icon-link"
          href="https://github.com/Pumpkin92/"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          className="icon-link"
          href="https://elastic-tesla-33daed.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Portfolio"
        >
          <i className="fas fa-portrait fa-lg"></i>
        </a>
        <a
          className="icon-link"
          href="mailto:lucy.shaw@live.co.uk"
          title="Email"
        >
          <i className="far fa-envelope fa-lg"></i>
        </a>
      </div>
    </div>
  );
}

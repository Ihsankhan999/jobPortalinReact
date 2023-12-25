import React from "react";

export default function Footer() {
  return (
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a className="text-dark">Job Huntly</a>
    </div>
  );
}

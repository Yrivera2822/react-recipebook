import React from "react";

const imgURL =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

function NotFound() {
  return (
    <div>
      {" "}
      <div className="not-found">
        <h1>404</h1>
        <img src={imgURL} alt="404 error gif" className="page-img" />
      </div>
    </div>
  );
}

export default NotFound;

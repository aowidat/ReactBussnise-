import React from "react";
import { Link } from "react-router-dom";
class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <p
          style={{
            textAlign: "center",
            padding: "200px",
          }}
        >
          <Link to="/">
            <h2>Zuruck zur Hauptseite</h2>
          </Link>
        </p>
      </div>
    );
  }
}
export default PageNotFound;

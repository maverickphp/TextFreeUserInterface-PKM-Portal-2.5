import React from "react";
import "../../styles/Error404.css";
import { Link } from "react-router-dom";

export default function Error404(props) {
  props.changeProgress(30);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <Link to="/" className="btn btn-primary btn-lg">
                Take Me Home
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline-dark btn-lg"
                {...props.changeProgress(100)}
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

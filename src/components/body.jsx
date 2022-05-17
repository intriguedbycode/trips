import React, { Component } from "react";

export default function Body() {
  return (
    <div className="container mt-3">
      <h1>Book Your Next Vacation</h1>
      <form className="row g-3 justify-content-center">
        <div className="col-md-8">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            id="firstname"
            required
          />
        </div>
        <div className="col-md-8">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="form-control"
            id="lastname"
            required
          />
        </div>
        <div className="col-md-8">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
            id="email"
            required
          />
        </div>
        <div className="col-md-8">
          <label htmlFor="zip" className="form-label">
            Zip Code
          </label>
          <input
            type="text"
            placeholder="Zip Code"
            className="form-control"
            id="zip"
            required
          />
        </div>
        <div className="col-md-8 mt-2">
          <button type="submit" className="btn btn-primary">
            Find Your Next Destination
          </button>
        </div>
      </form>
    </div>
  );
}

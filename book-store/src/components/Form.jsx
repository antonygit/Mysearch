import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <section className="nav">
        <form className="form" name="login" method="POST">
          <div id="username-container" className="login__input-search">
            <input
              type="text"
              placeholder="Enter user id"
              name="username"
              id="username"
              required
              autoComplete="off"
            />
          </div>
          <div id="username-container" className="login__input-search">
            <input
              type="text"
              placeholder="Enter Book id"
              name="username"
              id="username"
              required
              autoComplete="off"
            />
          </div>
          <div id="username-container" className="login__input-search">
            <input
              type="text"
              placeholder="Enter Book Name"
              name="username"
              id="username"
              required
              autoComplete="off"
            />
          </div>
          <div id="username-container" className="login__input-search">
            <input
              type="text"
              placeholder="Enter Book Description"
              name="username"
              id="username"
              required
              autoComplete="off"
            />
          </div>
          <div className="button-submit">
            <button type="submit" id="loginButton">
              Add{" "}
            </button>
            <button type="submit" id="loginButton">
              Clear
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Form;

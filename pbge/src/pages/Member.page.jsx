import React from "react";
import PropTypes from "prop-types";

// import Directory from "./Directory";

/**
 * TODO
 * Display the page that display one directory
 */
export default function MemberPage({ id }) {
  return <h1> Member number {id} </h1>;
}

MemberPage.propTypes = {
  id: PropTypes.any.isRequired
};
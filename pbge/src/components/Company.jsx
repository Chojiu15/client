import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * TODO
 * Display a directory
 */
export default function Company({ id, name }) {
  return <Link to={`/companies/${id}/view`}>{name}</Link>;
}
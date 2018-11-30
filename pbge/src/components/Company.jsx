import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * TODO
 * Display a directory
 */
export default function Company({
  id,
  name,
  username,
  email,
  phone,
  location
}) {
  return (
    <Link to={`/companies/${id}/view`}>
      {name}
      {username}
      {email}
      {phone}
      {location}
    </Link>
  );
}

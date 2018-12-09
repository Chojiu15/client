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
  location,
  sector
}) {
  return (
    <Link to={`/companies/${id}/edit`}>
      {name}
      {username}
      {email}
      {phone}
      {location}
      {sector}
    </Link>
  );
}

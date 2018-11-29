import React from "react";
import PropTypes from "prop-types";

import List from "./List";
import Company from "./Company";

/**
 * TODO
 * Display a list of companies
 */
export default function Companies({ companies }) {
  return (
    <List
      items={companies}
      renderItem={(company, i) => (
        <Company id={company.id} name={company.name} />
      )}
    />
  );
}
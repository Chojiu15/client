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
        <ul>
          <li>
            Nom de l'organisation:{" "}
            <Company id={company.id} name={company.name} />
          </li>
          <li>
            Nom : <Company id={company.id} username={company.username} />
          </li>
          <li>
            Email : <Company id={company.id} email={company.email} />
          </li>
          <li>
            Téléphone : <Company id={company.id} phone={company.phone} />
          </li>
        </ul>
      )}
    />
  );
}

import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

import List from "./List";
import Company from "./Company";

/**
 * TODO
 * Display a list of companies
 */
export default function Companies({ companies }) {
  return (
    <div>
      <Grid
        centered
        textAlign="left"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 650 }}>
          <Segment stacked>
            <List
              items={companies}
              renderItem={(company, i) => (
                <ul>
                  <h2>
                    <li>
                      Organisation :{" "}
                      <Company id={company.id} name={company.name} />
                    </li>
                    <li>
                      Nom :{" "}
                      <Company id={company.id} username={company.username} />
                    </li>
                    <li>
                      Email : <Company id={company.id} email={company.email} />
                    </li>
                    <li>
                      Téléphone :{" "}
                      <Company id={company.id} phone={company.phone} />
                    </li>
                  </h2>
                </ul>
              )}
            />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

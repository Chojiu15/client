import React from "react";
import PropTypes from "prop-types";
import axios from "axios"; // HTTP library to make http request @see : https://github.com/axios/axios

import Companies from "../components/Companies";

/**
 * TODO
 * TIPS : use componentDidMount lyfeCycle method to make your 'GET /directories' with axios (https://github.com/axios/axios)
 * Display the page that display list of directory
 */
export default class CompaniesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }
  componentDidMount() {
    axios
      .get("https://peaceful-springs-62051.herokuapp.com/api/companies.json")
      .then(res => this.setState({ companies: res.data }));
  }

  render() {
    const { companies } = this.state;
    return <Companies companies={companies} />;
  }
}

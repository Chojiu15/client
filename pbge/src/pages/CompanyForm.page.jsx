import React from "react";
import axios from "axios"; // HTTP library to make http request @see : https://github.com/axios/axios
import { Redirect } from "react-router-dom";

/**
 * TODO
 * TIPS : use componentDidMount lyfeCycle method to make your 'GET /directories' with axios (https://github.com/axios/axios)
 * Display the page that display list of directory
 */
export default class CompanyFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCompany: null,
      redirectTo: null
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    axios
      .get(`https://peaceful-springs-62051.herokuapp.com/api/companies/${id}.json`)
      .then(res => this.setState({ currentCompany: res.data }));
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const { id } = this.props;
    axios
      .put(`https://peaceful-springs-62051.herokuapp.com/api/companies/${id}.json`, {
        name
      })
      .then(() => this.setState({ redirectTo: `/companies` }));
  }

  render() {
    const { currentCompany, redirectTo } = this.state;
    if (redirectTo !== null) {
      return <Redirect to={redirectTo} />;
    }
    if (currentCompany === null) {
      return (
        <div>Fetching the current company of props : {this.props.id} ...</div>
      );
    }
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="dirName">Company name</label>
        <input
          id="dirName"
          name="name"
          type="text"
          defaultValue={currentCompany.name}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}
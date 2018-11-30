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
      currentLocation: null,
      redirectTo: null
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props;
    // const id = this.props.id;
    // const newPrrops = this.props.newProps;
    const { data: currentCompany } = await axios.get(
      `https://peaceful-springs-62051.herokuapp.com/api/companies/${id}.json`
    );
    const { data: currentLocation } = await axios.get(
      `https://peaceful-springs-62051.herokuapp.com${
        currentCompany.location
      }.json`
    );
    this.setState({
      currentCompany,
      currentLocation
    });
    // const setCurrentCompany = company =>
    //   new Promise(resolve => {
    //     this.setState({ currentCompany: company }, resolve);
    //   });
    // axios
    //   .get(
    //     `https://peaceful-springs-62051.herokuapp.com/api/companies/${id}.json`
    //   )
    //   .then(res => setCurrentCompany(res.data))
    //   .then(() => {
    //     const currentCompanyLocation = this.state.currentCompany.location;
    //     return axios.get(
    //       `https://peaceful-springs-62051.herokuapp.com/api/companies/${currentCompanyLocation}.json`
    //     );
    //   })
    //   .then(res => this.setState({ currentLocation: res.data }));
  }

  async handleOnSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const username = e.currentTarget.elements.username.value;
    const email = e.currentTarget.elements.email.value;
    const phone = parseInt(e.currentTarget.elements.phone.value);
    const pdgName = e.currentTarget.elements.pdgName.value;
    const description = e.currentTarget.elements.description.value;
    const city = e.currentTarget.elements.city.value;
    const { id } = this.props;

    const { data: currentCompany } = await axios.put(
      `https://peaceful-springs-62051.herokuapp.com/api/companies/${id}.json`,
      {
        name,
        username,
        email,
        phone,
        pdgName,
        description
      }
    );
    const { data: currentLocation } = await axios.put(
      `https://peaceful-springs-62051.herokuapp.com${
        currentCompany.location
      }.json`,
      {
        city
      }
    );

    this.setState({
      currentCompany,
      currentLocation,
      redirectTo: `/companies`
    });
  }

  render() {
    const { currentCompany, redirectTo, currentLocation } = this.state;
    if (redirectTo !== null) {
      return <Redirect to={redirectTo} />;
    }
    if (currentCompany === null) {
      return (
        <div>Fetching the current company of props : {this.props.id} ...</div>
      );
    }
    if (currentLocation === null) {
      return (
        <div>Fetching the current location of props : {this.props.id} ...</div>
      );
    }

    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="dirName">Nom de l'organisation : </label>
        <input
          id="dirName"
          name="name"
          type="text"
          defaultValue={currentCompany.name}
        />
        <br />
        <label htmlFor="dirUserName">Nom : </label>
        <input
          id="dirUserName"
          name="username"
          type="text"
          defaultValue={currentCompany.username}
        />
        <br />
        <label htmlFor="dirEmail">Email : </label>
        <input
          id="dirEmail"
          name="email"
          type="text"
          defaultValue={currentCompany.email}
        />
        <br />
        <label htmlFor="dirPhone">Téléphone : </label>
        <input
          id="dirPhone"
          name="phone"
          type="text"
          defaultValue={currentCompany.phone}
        />
        <br />
        <label htmlFor="dirPdgName">Président général : </label>
        <input
          id="dirPdgName"
          name="pdgName"
          type="text"
          defaultValue={currentCompany.pdgName}
        />
        <br />
        <label htmlFor="dirdescription">Description : </label>
        <input
          id="dirdescription"
          name="description"
          type="text"
          defaultValue={currentCompany.description}
        />
        <br />
        <label htmlFor="dirlocation">Ville : </label>
        <input
          id="dirlocation"
          name="city"
          type="text"
          defaultValue={currentLocation.city}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}

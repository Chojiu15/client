import React, { Component } from "react";
import axios from "axios"; // HTTP library to make http request @see : https://github.com/axios/axios
import { Redirect } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

/**
 * TODO
 * TIPS : use componentDidMount lyfeCycle method to make your 'GET /directories' with axios (https://github.com/axios/axios)
 * Display the page that display list of directory
 */

const options = [
  { key: "a", text: "Agroalimentaire", value: "agroalimentaire" },
  {
    key: "b",
    text: " Biosciences, pharmacie et santé,recherche",
    value: " Biosciences, pharmacie et santé,recherche"
  },
  {
    key: "c",
    text: "Chimie, sciences de l'innovation",
    value: "Chimie, sciences de l'innovation"
  },
  {
    key: "i",
    text: " Informatique, nouvelles technologies",
    value: " Informatique, nouvelles technologies"
  }
];

export default class CompanyFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCompany: null,
      currentLocation: null,
      currentSector: null,
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
    const { data: currentSector } = await axios.get(
      `https://peaceful-springs-62051.herokuapp.com${
        currentCompany.sector
      }.json`
    );
    this.setState({
      currentCompany,
      currentLocation,
      currentSector
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
    const namesector = e.currentTarget.elements.sector.value;
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

    const { data: currentSector } = await axios.put(
      `https://peaceful-springs-62051.herokuapp.com${
        currentCompany.sector
      }.json`,
      {
        name: namesector
      }
    );

    this.setState({
      currentCompany,
      currentLocation,
      currentSector,
      redirectTo: `/companies`
    });
  }

  render() {
    const {
      currentCompany,
      redirectTo,
      currentLocation,
      currentSector
    } = this.state;
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
    if (currentSector === null) {
      return (
        <div>Fetching the current sector of props : {this.props.id} ...</div>
      );
    }

    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="dirName">Organisation : </label>
            <input
              id="dirName"
              name="name"
              type="text"
              defaultValue={currentCompany.name}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirUserName">Nom : </label>
            <input
              id="dirUserName"
              name="username"
              type="text"
              defaultValue={currentCompany.username}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirPdgName">Président général : </label>
            <input
              id="dirPdgName"
              name="pdgName"
              type="text"
              defaultValue={currentCompany.pdgName}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirEmail">Email : </label>
            <input
              id="dirEmail"
              name="email"
              type="text"
              defaultValue={currentCompany.email}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label htmlFor="dirPhone">Téléphone : </label>
          <input
            id="dirPhone"
            name="phone"
            type="text"
            defaultValue={currentCompany.phone}
          />
        </Form.Field>
        <label htmlFor="dirsector">Secteur : </label>
        <Form.Field id="dirsector" name="sector" control="select">
          <option value={currentSector.name}> {currentSector.name}</option>
          <option value="biosciences, pharmacie et santé,recherche">
            Biosciences, pharmacie et santé,recherche
          </option>
          <option value="chimie, sciences de l'innovation">
            Chimie, sciences de l'innovation
          </option>
          <option value="informatique, nouvelles technologies">
            Informatique, nouvelles technologies
          </option>
          <option value="Journalisme ">Journalisme </option>
          <option value="Architecture/ Urbanisme/ Immobilier">
            Architecture/ Urbanisme/ Immobilier
          </option>
          <option value="Sciences sociales et humaines">
            Sciences sociales et humaines
          </option>
          <option value="Droit">Droit</option>
          <option value="Finance, Comptabilité, Banque,">
            Finance, Comptabilité, Banque
          </option>
          <option value="Conseil et stratégie">Conseil et stratégie</option>
          <option value="Administration publique">
            Administration publique
          </option>
          <option value="Enseignement">Enseignement</option>
          <option value="Communication / Marketing">
            Communication / Marketing
          </option>
          <option value="Autres">Autres</option>
        </Form.Field>
        <Form.Field>
          <label htmlFor="dirlocation">Ville : </label>
          <input
            id="dirlocation"
            name="city"
            type="text"
            defaultValue={currentLocation.city}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="dirdescription">Description : </label>
          <input
            id="dirdescription"
            name="description"
            type="text"
            defaultValue={currentCompany.description}
          />
        </Form.Field>

        <br />
        <Button color="red" type submit>
          Enregistrer
        </Button>
      </Form>
    );
  }
}

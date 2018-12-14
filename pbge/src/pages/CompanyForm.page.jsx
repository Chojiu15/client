/*                                                  *
 *             WILD CODE SCHOOL                      *
 *     v 1.0                                         *
 *                            author : Marc foix     *
 *****************************************************
 *  Ce fichier permet l'édition et la mise à jour de *
 * la base de données de la table entreprises        *
 *  (company), sector et location via l'API          *
 *                                                   *
 ****************************************************/

import React from "react";
import axios from "axios"; // HTTP library to make http request @see : https://github.com/axios/axios
import { Redirect, Link } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";

import JobOffer from "../components/LinkJobOffer";
import { HREF } from "./Parameters";
import List from "../components/List";
import LinkJobOffer from "../components/LinkJobOffer";

export default class CompanyFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCompany: null,
      currentLocation: null,
      currentSector: null,
      currentJobOffers: [],
      redirectTo: null,
      isFetching: true
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props;
    // const id = this.props.id;
    // const newPrrops = this.props.newProps;

    const { data: currentCompany } = await axios.get(
      HREF + `/api/companies/${id}.json`
    );
    const { data: currentLocation } = await axios.get(
      HREF + `${currentCompany.location}.json`
    );
    const { data: currentSector } = await axios.get(
      HREF + `${currentCompany.sector}.json`
    );

    let currentJobOffers = [];
    if (currentCompany.jobOffer && currentCompany.jobOffer.length > 0) {
      currentJobOffers = await Promise.all(
        currentCompany.jobOffer.map(jobOffRoute =>
          axios.get(HREF + `${jobOffRoute}.json`).then(res => res.data)
        )
      );
    }

    this.setState({
      currentCompany,
      currentLocation,
      currentSector,
      currentJobOffers,
      isFetching: false
    });
    // const setCurrentCompany = company =>
    //   new Promise(resolve => {
    //     this.setState({ currentCompany: company }, resolve);
    //   });
    // axios
    //   .get(
    //     HREF+"/api/companies/${id}.json"
    //   )
    //   .then(res => setCurrentCompany(res.data))
    //   .then(() => {
    //     const currentCompanyLocation = this.state.currentCompany.location;
    //     return axios.get(
    //       HREF+"/api/companies/${currentCompanyLocation}.json"
    //     );
    //   })
    //   .then(res => this.setState({ currentLocation: res.data }));
  }

  async handleOnSubmit(e) {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const name = e.currentTarget.elements.name.value;
    const companyEmail = e.currentTarget.elements.companyEmail.value;
    const phone = e.currentTarget.elements.phone.value;
    const address = e.currentTarget.elements.address.value;
    const pdgName = e.currentTarget.elements.pdgName.value;
    const description = e.currentTarget.elements.description.value;
    const zipcode = parseInt(e.currentTarget.elements.zipcode.value);
    const city = e.currentTarget.elements.city.value;
    const namesector = e.currentTarget.elements.sector.value;

    const { id } = this.props;

    const { data: currentCompany } = await axios.put(
      HREF + `/api/companies/${id}.json`,
      {
        email,
        name,
        companyEmail,
        phone,
        address,
        pdgName,
        description
      }
    );

    const { data: currentLocation } = await axios.put(
      HREF + `${currentCompany.location}.json`,
      {
        zipcode,
        city
      }
    );

    const { data: currentSector } = await axios.put(
      HREF + `${currentCompany.sector}.json`,
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

  handleOnClick(e) {
    e.preventDefault();

    const { id } = this.props;
  }

  render() {
    const {
      currentCompany,
      redirectTo,
      currentLocation,
      currentSector,
      currentJobOffers,
      isFetching
    } = this.state;
    if (redirectTo !== null) {
      return <Redirect to={redirectTo} />;
    }
    if (isFetching) {
      return <div>Data is fetching ....</div>;
    }

    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="dirName">Organisation : (*) </label>
            <input
              id="dirName"
              name="name"
              type="text"
              defaultValue={currentCompany.name}
              required
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirCompanyEmail">Email de l'organisation : </label>
            <input
              id="dirCompanyEmail"
              name="companyEmail"
              type="text"
              defaultValue={currentCompany.companyEmail}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirPdgName">Président général (*) : </label>
            <input
              id="dirPdgName"
              name="pdgName"
              type="text"
              defaultValue={currentCompany.pdgName}
              required
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirEmail">Email (*) : </label>
            <input
              id="dirEmail"
              name="email"
              type="text"
              defaultValue={currentCompany.email}
              required
            />
          </Form.Field>
        </Form.Group>
        <label htmlFor="dirsector">Secteur : </label>
        <Form.Field id="dirsector" name="sector" control="select">
          <option value={currentSector.name}> {currentSector.name}</option>
          <option value="Agroalimentaire">Agroalimentaire</option>}
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
        <Form.Group widths="three">
          <Form.Field>
            <label htmlFor="jobOffer">Offre d'emploi : </label>
            {currentJobOffers.length ? (
              <List
                items={currentJobOffers}
                renderItem={(jobOffer, i) => (
                  <LinkJobOffer
                    key={i}
                    id={jobOffer.id}
                    title={jobOffer.title}
                  />
                )}
              />
            ) : (
              <Segment>Aucune offre</Segment>
            )}
          </Form.Field>
          <Form.Field>
            <Link to="/job_offers/new">
              <Button>Ajouter une offre</Button>
            </Link>
          </Form.Field>

          <Form.Field>
            {/* <Link to="/joboffer"> EDITION</Link> */}
            {/* lien vers JobOffer *
            <JobOffer id={jobOffer.id} title={jobOffer.title} /> */}
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="diraddress">Adresse : </label>
            <input
              id="diraddress"
              name="address"
              type="text"
              defaultValue={currentCompany.address}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirzipcode">CP : </label>
            <input
              id="dirzipcode"
              name="zipcode"
              type="text"
              defaultValue={currentLocation.zipcode}
            />
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
            <label htmlFor="dirPhone">Téléphone : </label>
            <input
              id="dirPhone"
              name="phone"
              type="text"
              defaultValue={currentCompany.phone}
            />
          </Form.Field>
        </Form.Group>
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

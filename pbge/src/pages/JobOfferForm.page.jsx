/*                                                  *
 *             WILD CODE SCHOOL                      *
 *     v 1.0                                         *
 *                            author : Marc foix     *
 *****************************************************
 *  Ce fichier permet l'édition et la mise à jour de *
 * la base de données de la table job Offer          *
 *                                                   *
 ****************************************************/

import React, { Component } from "react";
import axios from "axios"; // HTTP library to make http request @see : https://github.com/axios/axios
import { Redirect } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";


import { HREF } from "./Parameters";

export default class JobOfferFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJobOffers: [],
      isFetching: true
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props;

    const { data: currentJobOffers } = await axios.get(
      HREF + `${currentCompany.jobOffer}{id}.json`
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
      currentJobOffers,
      isFetching: false
    });
  }


  async handleOnSubmit(e) {
    e.preventDefault();
    const title = e.currentTarget.elements.title.value;
    const contractType = e.currentTarget.elements.contractType.value;
    const workingHours = e.currentTarget.elements.workingHours.value;
    const experience = e.currentTarget.elements.experience.value;
    const description = e.currentTarget.elements.description.value;
    

    const { id } = this.props;

    

    
    const { data: currentJobOffer } = await axios.put(
      HREF + `${currentCompany.jobOffer}.json`,
      {
        name: namesector
      }
    );
    this.setState({
      currentJobOffer,
      redirectTo: `/companies`
    });

    const { data: currentJobOffer } = await axios.put(
      HREF + "/api/job_offers/${id}.json",
      {
        title,
        contractType,
        workingHours,
        experience,
        description
      }
    );
  }

  render() {
    const {
      currentJobOffers,
      isFetching
    } = this.state;
    if (redirectTo !== null) {
      return <Redirect to={redirectTo} />;
    }
    if (isFetching) {
      return <div>En cours de chargement ...</div>;
    }

    return (

      <Form onSubmit={this.handleOnSubmit}>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="dirOfferTitle">Titre de l'offre  : </label>
            <input
              id="dirTitle"
              name="title"
              type="text"
              defaultValue={currentJobOffer.title}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirContrat">Type de contrat : </label>
            <input
              id="dircontractType"
              name="contractType"
              type="text"
              defaultValue={currentJobOffer.contractType}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirWorkingHours">Nombre d'heures par semaine : </label>
            <input
              id="dirWorkingHours"
              name="workingHours"
              type="text"
              defaultValue={currentCompany.workingHours}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="dirExperience">Experience : </label>
            <input
              id="dirExperience"
              name="experience"
              type="text"
              defaultValue={currentCompany.experience}
            />
          </Form.Field> 
          <Form.Field>
            <label htmlFor="dirdescription">Description de l'offre : </label>
            <input
              id="dirdescription"
              name="description"
              type="text"
              defaultValue={currentLocation.description}
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

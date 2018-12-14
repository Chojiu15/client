/*                                                   *
 *             WILD CODE SCHOOL                      *
 *     v 1.0                                         *
 *                            author : Marc foix     *
 *****************************************************
 *  Ce fichier permet de récupérer les informations  *
 *  en json sur la base de données de la table       *
 *                      Job Offer                   *
 *                                                   *
 ****************************************************/

import React from "react";
import axios from "axios";

import LinkJobOffer from "../components/LinkJobOffer";
import { HREF } from "./Parameters";

export default class JobOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobOffers: []
    };
  }
  componentDidMount() {
    axios

      .get(HREF + `/api/job_offers.json`)
      .then(res => this.setState({ JobOffers: res.data }));
  }

  render() {
    const { jobOffer } = this.state;
    return <LinkJobOffer linkjobOffer={linkjobOffer} />;
  }
}

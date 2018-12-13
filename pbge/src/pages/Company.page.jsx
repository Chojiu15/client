/*                                                  *
 *             WILD CODE SCHOOL                      *
 *     v 1.0                                         *
 *                            author : Marc foix     *
 *****************************************************
 *  Ce fichier permet de récupérer les informations  *
 *  en json sur la base de données de la table       *
 *  entreprise  (company)                            *
 *                                                   *
 ****************************************************/

import React from "react";
import axios from "axios"; // HTTP library to make http request @see : https://github.com/axios/axios

import { HREF } from "./Parameters";

export default class CompanyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCompany: null
    };
  }

  componentDidMount() {
    const { id } = this.props;
    axios
      .get(HREF + `/api/companies/${id}.json`)
      .then(res => this.setState({ currentCompany: res.data }));
  }

  render() {
    const { currentCompany } = this.state;
    if (currentCompany === null) {
      return <div>Chargement en cours ....</div>;
    }

    return <div className={"cn"} />;
  }
}

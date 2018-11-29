import React from "react";
import axios from "axios"; // HTTP library to make http request @see : https://github.com/axios/axios
import { Link } from "react-router-dom";
import Company from "../components/Company";


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
        .get(`https://peaceful-springs-62051.herokuapp.com/api/companies/${id}.json`)
        .then(res => this.setState({ currentCompany: res.data }));
    }
  
    render() {
      const { currentCompany } = this.state;
      if (currentCompany === null) {
        return <div>Loading ....</div>;
      }
  
      return (
        <div className={"cn"}>
          <Company name={currentCompany.name} id={currentCompany.id} />;
          <Link to={`/companies/${this.props.id}/edit`}>Editer </Link>
        </div>
      );
    }
  }
  
  const msg = "Hellow worl";
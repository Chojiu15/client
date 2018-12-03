import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Desktop from "./pages/Desktop.page";
import CompaniesPage from "./pages/Companies.page";
import CompanyPage from "./pages/Company.page";
import CompanyFormPage from "./pages/CompanyForm.page";
import Connexion from "./pages/Connexion";
import HomepageLayout from "./pages/HomeLayout";

/**
 * TODO : Make each component
 * The current router app
 */
export default () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Desktop} />
          <Route exact path="/companies" component={CompaniesPage} />
          <Route
            path="/companies/new"
            component={() => <h1>Listes des entreprises : TODO</h1>}
          />
          <Route
            path="/companies/:id/view"
            component={({ match }) => <CompanyPage id={match.params.id} />}
          />
          <Route
            path="/companies/:id/edit"
            component={({ match }) => <CompanyFormPage id={match.params.id} />}
          />
          <Route
            path="/companies/:id/delete"
            component={() => <h1>DIR- DELETE - TODO</h1>}
          />
          <Route path="/connexion" component={Connexion} />
          <Route path="/homelayout" component={HomepageLayout} />
          {/* TODO: Added files missing routes */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

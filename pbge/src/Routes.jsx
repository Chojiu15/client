/*                                                  *
 *             WILD CODE SCHOOL                      *
 *     v 1.0                                         *
 *                            author : Marc foix     *
 *****************************************************
 *  Ce fichier définit les routes des pages          *
 *                                                   *
 *                                                   *
 ****************************************************/

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Desktop from "./pages/Desktop.page";
import CompaniesPage from "./pages/Companies.page";
import CompanyPage from "./pages/Company.page";
import CompanyFormPage from "./pages/CompanyForm.page";

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
            path="/companies/:id/edit"
            component={({ match }) => <CompanyFormPage id={match.params.id} />}
          />
          {/* TODO: Added files missing routes */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

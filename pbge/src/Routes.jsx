/*                                                  *
 *             WILD CODE SCHOOL                      *
 *     v 1.0                                         *
 *                            author : Marc foix     *
 *                      marcfoix@hotmail.com         *
 *****************************************************
 *  Ce fichier définit les routes des pages Web      *
 *                                                   *
 *                                                   *
 ****************************************************/

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Desktop from "./pages/Desktop.page";
import CompaniesPage from "./pages/Companies.page";
import CompanyFormPage from "./pages/CompanyForm.page";
import JobOfferFormPage from "./pages/JobOfferForm.page";

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
            path="/companies/:idcomp/edit"
            component={({ match }) => (
              <CompanyFormPage idcomp={match.params.idcomp} />
            )}
          />
          <Route
            path="/job_offers/:id/edit"
            component={({ match }) => <JobOfferFormPage id={match.params.id} />}
          />
          {/* TODO: Added files missing routes */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Desktop from "./pages/Desktop.page";
import CompanyPage from "./pages/Companies.page";
import MemberPage from "./pages/Directory.page";

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
          <Route exact path="/directories" component={DirectoriesPage} />
          <Route
            path="/directories/new"
            component={() => <h1>Listes des directories : TODO</h1>}
          />
          <Route
            path="/directories/:id/view"
            component={({ match }) => (
              <h1>
                DIR - VIEW - TODO <DirectoryPage id={match.params.id} />
              </h1>
            )}
          />
          <Route
            path="/directories/:id/edit"
            component={() => <h1>DIR- EDIT - TODO</h1>}
          />
          <Route
            path="/directories/:id/delete"
            component={() => <h1>DIR- DELETE - TODO</h1>}
          />
          <Route
            path="/directories/:id/files"
            component={() => <h1>DIR- FILES - TODO</h1>}
          />
          <Route path="/files" component={() => <h1>FILES - TODO</h1>} />
          {/* TODO: Added files missing routes */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
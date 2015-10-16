import React from 'react';
import App from 'routing/App';
import { Router, Route } from 'react-router';

import Routes from 'routing/Routes';
import DebugHandler from './DebugHandler';

import StreamsPage from 'pages/StreamsPage';
import StreamRulesEditor from 'components/streamrules/StreamRulesEditor';
import StreamOutputsPage from 'pages/StreamOutputsPage';
import StreamAlertsPage from 'pages/StreamAlertsPage';
import DashboardsPage from 'pages/DashboardsPage';
import ShowDashboardPage from 'pages/ShowDashboardPage';
import SourcesPage from 'pages/SourcesPage';
import CollectorsPage from 'pages/CollectorsPage';
import SystemOutputsPage from 'pages/SystemOutputsPage';
import RolesPage from 'pages/RolesPage';

const AppRouter = React.createClass({
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <Route path={Routes.STREAMS} component={StreamsPage}/>
          <Route path={Routes.stream_edit(':streamId')} component={StreamRulesEditor}/>
          <Route path={Routes.stream_outputs(':streamId')} component={StreamOutputsPage}/>
          <Route path={Routes.stream_alerts(':streamId')} component={StreamAlertsPage}/>
          <Route path={Routes.DASHBOARDS} component={DashboardsPage}/>
          <Route path={Routes.dashboard_show(':dashboardId')} component={ShowDashboardPage}/>
          <Route path={Routes.SOURCES} component={SourcesPage}/>
          <Route path={Routes.SYSTEM.COLLECTORS} component={CollectorsPage}/>
          <Route path={Routes.SYSTEM.OUTPUTS} component={SystemOutputsPage}/>
          <Route path={Routes.SYSTEM.ROLES} component={RolesPage}/>
        </Route>
      </Router>
    );
  },
});

export default AppRouter;

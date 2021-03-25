import React from 'react';
import { Switch, Route /* Redirect */ } from 'react-router-dom';
import TestPage from 'pages/TestPage';

const App = () => {
  return (
    <Switch>
      <Route
        exact
        path={'/'}
        render={() => <TestPage />}
      />
    </Switch>
  );
};

export default App;

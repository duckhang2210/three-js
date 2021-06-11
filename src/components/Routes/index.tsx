import { Route } from 'react-router-dom';

import { LandingPage } from '../../pages/LandingPage';

export function Routes() {
  return (
    <>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </>
  );
}

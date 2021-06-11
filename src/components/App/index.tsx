import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import { store } from '../../store';
import { Routes } from '../Routes';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

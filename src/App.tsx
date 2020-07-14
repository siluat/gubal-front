import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';
import { useDispatch } from 'react-redux';
import { getItemSummariesAsync } from './modules/library';

export function AppRoute() {
  return (
    <Switch>
      <Route exact path={['/', '/search']}>
        <Search />
      </Route>
    </Switch>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemSummariesAsync.request());
  });

  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;

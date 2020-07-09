import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FullScreen from './layouts/FullScreen';
import JobIconMorph from './components/JobIconMorph/JobIconMorph';
import styled from '@emotion/styled';
import Search from './pages/Search';
import { useDispatch } from 'react-redux';
import { getItemSummariesAsync } from './modules/library';

const Text = styled.span`
  font-size: 1rem;
  color: #bbac94;
  line-height: 3rem;
`;

export function AppRoute() {
  return (
    <Switch>
      <Route exact path="/">
        <FullScreen>
          <JobIconMorph color="#bbac94" />
          <Text>서비스 오픈 준비 중</Text>
        </FullScreen>
      </Route>
      <Route exact path="/search">
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

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/Pages/Home';
import LoginPage from 'components/Pages/LoginPage';
import SearchResults from 'components/Pages/SearchResults';
import Detail from 'components/Pages/Detail';
import NotFound from 'components/Pages/NotFound';

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/GiffyApp" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/search/:keyword/:rating?" component={SearchResults} />
      <Route exact path="/gif/:gifId" component={Detail} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default RootRouter;

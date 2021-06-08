import { Route, Switch } from 'react-router';
import MainLayout from './components/Templates/MainLayout';
import Home from './components/Pages/Home';
import Favs from './components/Pages/Favs';
import SearchResults from './components/Pages/SearchResults';
import Detail from './components/Pages/Detail';
import NotFound from './components/Pages/NotFound';
import LastSearchProvider from 'contexts/LastSearchProvider';

function App() {
  return (
    <LastSearchProvider>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/GiffyApp" component={Home} />
        <Route exact path="/favs" component={Favs} />
        <Route exact path="/search/:keyword" component={SearchResults} />
        <Route exact path="/gif/:gifId" component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
      </MainLayout>
      </LastSearchProvider>
  );
}

export default App;

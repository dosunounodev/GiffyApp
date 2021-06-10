import { Route, Switch } from 'react-router';
import MainLayout from './components/Templates/MainLayout';
import Home from './components/Pages/Home';
import SearchResults from './components/Pages/SearchResults';
import Detail from './components/Pages/Detail';
import NotFound from './components/Pages/NotFound';
import DataProvider from 'contexts/DataProvider';

function App() {
  return (
    <DataProvider>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/GiffyApp" component={Home} />
          <Route exact path="/search/:keyword" component={SearchResults} />
          <Route exact path="/gif/:gifId" component={Detail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainLayout>
    </DataProvider>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from 'routes/RootRouter';
import MainLayout from './components/Templates/MainLayout';
import DataProvider from 'contexts/DataProvider';
import GlobalStyle from 'GlobalStyle';

function App() {
  return (
    <Router>
      <DataProvider>
        <GlobalStyle />
        <MainLayout>
          <RootRouter />
        </MainLayout>
      </DataProvider>
    </Router>
  );
}

export default App;

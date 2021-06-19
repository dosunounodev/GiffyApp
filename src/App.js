import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from 'routes/RootRouter';
import MainLayout from 'components/Templates/MainLayout';
import LastSearchProvider from 'contexts/LastSearchProvider';
import UserProvider from 'contexts/UserProvider';
import GlobalStyle from 'GlobalStyle';

function App() {
  return (
    <Router>
      <UserProvider>
        <LastSearchProvider>
          <GlobalStyle />
          <MainLayout>
            <RootRouter />
          </MainLayout>
        </LastSearchProvider>
      </UserProvider>
    </Router>
  );
}

export default App;

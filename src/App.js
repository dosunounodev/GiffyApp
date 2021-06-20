import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from 'routes/RootRouter';
import MainLayout from 'components/Templates/MainLayout';
import LastSearchProvider from 'contexts/LastSearchProvider';
import UserProvider from 'contexts/UserProvider';
import GlobalStyle from 'GlobalStyle';
import LoginModalProvider from 'contexts/LoginModalProvider';

function App() {
  return (
    <Router>
      <UserProvider>
        <LoginModalProvider>
          <LastSearchProvider>
            <GlobalStyle />
            <MainLayout>
              <RootRouter />
            </MainLayout>
          </LastSearchProvider>
        </LoginModalProvider>
      </UserProvider>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from 'hooks/useUser';
import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Input';
import { StyledForm } from './style';
import Title from 'components/Atoms/Title';

const Login = ({ showModalToggle }) => {
  const initialValues = '';
  const [username, setUsername] = useState(initialValues);
  const [password, setPassword] = useState(initialValues);

  useEffect(() => {
    setUsername(initialValues);
    setPassword(initialValues);
  }, []);

  const history = useHistory();

  const {
    isLogged,
    login,
    loading: loginLoading,
    error: loginError,
  } = useUser();

  useEffect(() => {
    isLogged && history.push('/');
  }, [history, isLogged]);

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password, showModalToggle });
  };

  return (
    <>
      <Title>Login</Title>
      {!loginLoading ? (
        <StyledForm onSubmit={handleSubmit}>
          <label>
            <span>Username:</span>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUserNameChange}
            />
          </label>
          <br />
          <label>
            <span>Password:</span>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <br />
          <Button height="60px" invert>
            Login
          </Button>
          <br />
          {loginError && <Title color="salmon">Credentials are invalid</Title>}
        </StyledForm>
      ) : (
        <Title>Checking Credentials</Title>
      )}
    </>
  );
};

export default Login;

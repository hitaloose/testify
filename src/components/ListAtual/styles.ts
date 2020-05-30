import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const Form = styled.form`
  padding: 10px 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    margin: 15px;

    width: 100%;
    max-width: 300px;

    padding: 10px;
    background: #ddd;
    border-radius: 4px;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    @media (max-width: 570px) {
      margin: 5px;
    }
  }

  button {
    margin: 15px;
    padding: 10px;
    background: #660066;
    border-radius: 4px;
    border: none;
    color: #ddd;
    font-weight: bold;
    width: 100%;
    max-width: 180px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 0px 10px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 400px;

    padding: 15px 20px;
    margin: 5px 0px;

    background: #ddd;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    div {
      margin-left: 15px;

      input {
        margin: 0px 5px;
      }

      p {
        margin: 0px 5px 10px;
        color: #333;
      }

      a {
        margin: 0px 5px;
        color: #660066;
      }
    }

    button {
      border: none;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0);

      padding: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background 0.1s;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }
`;

export const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#660066',
    },
  },
});

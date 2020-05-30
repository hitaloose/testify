import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  justify-content: center; */
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 0px 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  max-width: 400px;

  padding: 15px 20px;
  margin: 5px 0px;

  background: #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  label {
    color: #636363;

    input {
      width: 100%;

      margin-bottom: 10px;

      padding: 10px;
      background: #eee;
      border-radius: 4px;
      border: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    textarea {
      width: 100%;

      resize: vertical;

      margin-bottom: 10px;

      padding: 10px;
      background: #eee;
      border-radius: 4px;
      border: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    a {
      margin-top: 10px;
      margin-bottom: 20px;
      color: #660066;
    }
  }

  button {
    border: none;
    border-radius: 5px;
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
`;

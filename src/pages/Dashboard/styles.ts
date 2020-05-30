import styled from 'styled-components';

export const Tabs = styled.div`
  background: #660066;

  display: flex;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  margin-bottom: 15px;

  button {
    padding: 15px 30px;
    color: #eee;
    background: rgba(0, 0, 0, 0);
    border: none;
    transition: background 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

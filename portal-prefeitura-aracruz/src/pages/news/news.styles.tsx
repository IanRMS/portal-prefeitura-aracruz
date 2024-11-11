import styled from "styled-components";

export const SearchButton = styled.button`
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  cursor: pointer;
  padding: 16px 24px;
  gap: 8px;
  color: var(--lightest);
  font-size: 16px;
  font-weight: 500;
  border: none;
  height: 100%;

  &:hover {
    background-color: var(--primary-light);
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex: 1;

  > ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 16px;
    margin: auto;

    > li > a {
      background: var(--primary);
      padding: 12px;
      border-radius: 4px;
      color: var(--lightest);
      user-select: none;
      cursor: pointer;
      &:hover {
        background-color: var(--primary-light);
      }
    }
  }
`;

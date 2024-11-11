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
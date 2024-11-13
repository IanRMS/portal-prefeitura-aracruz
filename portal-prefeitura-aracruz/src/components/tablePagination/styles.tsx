import styled from "styled-components";

export const PaginationButton = styled.button`
  width: 42px;
  height: 40px;
  user-select: none;
  > span {
    margin: auto;
    font-weight: 700;
    font-size: 16px;
  }
  background: var(--gray-lightest);
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 4px;
`;

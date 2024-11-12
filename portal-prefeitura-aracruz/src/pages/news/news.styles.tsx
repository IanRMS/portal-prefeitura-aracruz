import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 16px;

  > ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 16px;
    margin: auto;

    > li > a {
      background: var(--primary);
      padding: 12px 16px;
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

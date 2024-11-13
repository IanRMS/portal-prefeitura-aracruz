import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
  > div > div > div > button {
    border-bottom: 1px solid var(--gray-light);
    flex: 1;
  }
`;

export const TabTitle = styled.h1`
  color: var(--primary);
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 40px;
`;

export const TabContent = styled.div`
  padding-top: 16px;
  width: 100%;
`;

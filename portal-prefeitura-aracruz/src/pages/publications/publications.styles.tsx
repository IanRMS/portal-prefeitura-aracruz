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

export const ExportText = styled.strong`
  font-weight: 500;
  font-size: 14px;
  color: var(--neutral);
  line-height: 15.4px;
`;

export const CustomTableHead = styled.thead`
  display: table-header-group;
  border-spacing: 0;
  border-collapse: collapse;

  > tr > td {
    background-color: var(--gray-light);
    color: var(--neutral);
    font-weight: 500;
    font-size: 14px;
  }
`;

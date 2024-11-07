import styled from "styled-components";

export const SiteInfo = styled.div`
  width: calc(100vw - 320px);
  padding: 8px 160px;
  border-bottom: 1px solid;
  border-color: var(--gray-light);
  background-color: var(--gray-lightest);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > span {
    font-size: 13px;
  }

  @media (max-width: 960px) {
    width: calc(100vw - 160px);
    padding: 8px 80px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 80px);
    padding: 8px 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--neutral);
  background: transparent;
  border: none;
  gap: 4px;
`;

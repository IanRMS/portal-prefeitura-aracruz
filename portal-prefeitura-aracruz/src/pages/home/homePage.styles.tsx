import styled from "styled-components";

export const Section = styled.section``;

export const SectionTitle = styled.h2`
  font-weight: 600;
  color: var(--primary);
  font-size: 32px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray-light);
`;

export const EasyNavigationCard = styled.button`
  border: none;
  background-color: var(--primary);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--lightest);
  padding: 32px 16px;
  flex: 1;
  min-width: 160px;
  max-width: 320px;

  > span {
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--primary-light);
    transition: all 0.3s;
  }
`;

export const EasyNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

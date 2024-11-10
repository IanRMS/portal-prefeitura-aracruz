import styled from "styled-components";

export const MoreAccessedServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  padding-top: 16px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const MoreAccessedService = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  cursor: pointer;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const MoreAccessedServiceTitle = styled.span`
  color: var(--neutral);
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`;

export const MoreAccessedServiceDescription = styled.span`
  color: var(--neutral-light);
  font-size: 16px;
  line-height: 24px;
`;

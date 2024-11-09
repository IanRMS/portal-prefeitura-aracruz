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

export const ShowMoreButtonContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

export const ShowMoreButton = styled.button`
  background: none;
  padding: 16px 24px;
  border: 2px solid var(--primary);
  border-radius: 8px;
  color: var(--primary);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--gray-lightest);
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 16px;
  gap: 24px;
`;

export const New = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-width: 264px;
  cursor: pointer;
`;

export const NewImage = styled.img`
  border-radius: 8px;
  height: 176px;
  width: 100%;
  object-fit: cover;
`;

export const NewTheme = styled.span`
  text-transform: uppercase;
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
`;

export const NewTitle = styled.span`
  line-height: 30px;
  font-weight: 600;
  font-size: 20px;
  color: var(--neutral);
`;

export const NewDescription = styled.span`
  color: var(--neutral-light);
  font-size: 16px;
  line-height: 24px;
`;

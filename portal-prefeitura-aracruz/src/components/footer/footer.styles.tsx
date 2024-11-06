import styled from "styled-components";

interface InfoContainerProps {
  background?: string;
  alignCenter?: boolean;
}

export const InfoContainer = styled.div<InfoContainerProps>`
  width: calc(100vw - 320px);
  display: flex;
  flex-direction: row;
  padding: 32px 160px;
  align-items: ${(props) => props.alignCenter && "center"};
  background-color: ${(props) =>
    props.background === "blue" ? `var(--primary)` : `var(--lightest)`};
  gap: 32px;

  @media (max-width: 960px) {
    width: calc(100vw - 160px);
    padding: 32px 80px;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 80px);
    flex-direction: column;
    padding: 32px 40px;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const InfoTitle = styled.h3`
  color: var(--lightest);
  font-weight: 700;
  font-size: 20px;
  margin: 0px;
`;

export const InfoDescription = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: var(--lightest);
  margin: 0;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: var(--lightest);
  font-size: 14px;
  font-weight: 700;
`;

export const AddressFooter = styled.footer`
  width: calc(100vw - 320px);
  display: flex;
  flex-direction: row;
  padding: 32px 160px;
  background-color: var(--lightest);
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 960px) {
    width: calc(100vw - 160px);
    padding: 32px 80px;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 80px);
    flex-direction: column;
    padding: 32px 40px;
  }
`;

export const Address = styled.span`
  font-size: 16px;
`;

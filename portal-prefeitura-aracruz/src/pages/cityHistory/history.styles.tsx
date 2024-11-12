import styled from "styled-components";

export const CityImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 545px;
  border-radius: 16px;
  object-fit: cover;
  margin-top: 32px;
`;

export const Title = styled.h3`
  color: var(--primary);
  font-weight: 600;
  font-size: 32px;
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: var(--neutral);
  text-align: justify;
`;

export const TextContainer = styled.div`
  width: calc(100% - 80px);
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 960px) {
    width: calc(100% - 40px);
    padding-left: 20px;
    padding-right: 20px;
  }

  @media(max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

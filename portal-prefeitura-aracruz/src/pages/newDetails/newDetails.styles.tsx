import styled from "styled-components";

export const NewDetailsTitle = styled.h1`
  color: var(--primary);
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 0px;
`;

export const NewDetailsText = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: var(--neutral);
  text-align: justify;
  margin-top: 12px;
`;

export const NewDetailsInfo = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: var(--neutral-light);
`;

export const NewDetailsImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: auto;
  max-height: 600px;
  border-radius: 8px;
`;

import styled from "styled-components";

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
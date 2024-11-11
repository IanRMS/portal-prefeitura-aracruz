import styled from "styled-components";

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

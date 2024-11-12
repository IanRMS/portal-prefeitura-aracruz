import styled from "styled-components";

export const Text = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: var(--neutral);
`;

export const OrganizationalLink = styled.a`
  text-decoration: none;
  display: block;
  border-radius: 4px;
  padding: 8px 16px;
  &:hover {
    background-color: var(--gray-light);
  }
`;

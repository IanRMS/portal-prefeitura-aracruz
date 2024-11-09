import styled from "styled-components";

export const PageContainer = styled.main`
  width: calc(100vw - 320px);
  padding: 12px 160px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 100vh;

  @media (max-width: 960px) {
    width: calc(100vw - 80px);
    padding: 8px 40px;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    padding: 8px 20px;
  }
`;

import styled from "styled-components";

export const PageContainer = styled.main`
  width: calc(100vw - 320px);
  padding: 12px 160px 72px 160px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  min-height: 100vh;
  position: relative;

  @media (max-width: 960px) {
    width: calc(100vw - 80px);
    padding: 8px 40px 36px 40px;
    gap: 48px;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    gap: 32px;
  }
`;

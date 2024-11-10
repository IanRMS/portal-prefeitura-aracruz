import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  position: relative;
  .right {
    float: right;
    right: 24px;
  }
  .left {
    float: left;
    left: 24px;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  margin-top: 16px;
  justify-content: center;
`;

interface DotProps {
  active: boolean;
}

export const Dot = styled.div<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.active ? "var(--primary)" : "var(--gray-light)"};
`;

export const CarouselImage = styled.img`
  width: 100%;
  position: relative;
  height: 545px;
  object-fit: cover;

  @media (max-width: 960px) {
    height: 360px;
  }

  @media (max-width: 768px) {
    height: 320px;
  }
`;

export const ArrowButton = styled.button`
  border: none;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: var(--gray-lightest);
  position: absolute;
  top: calc(50% - 24px);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

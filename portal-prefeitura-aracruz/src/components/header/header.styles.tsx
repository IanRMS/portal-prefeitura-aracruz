import styled from "styled-components";

export const SiteInfo = styled.div`
  width: calc(100vw - 320px);
  padding: 8px 160px;
  border-bottom: 1px solid;
  border-color: var(--gray-light);
  background-color: var(--gray-lightest);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > span {
    font-size: 13px;
  }

  @media (max-width: 960px) {
    width: calc(100vw - 80px);
    padding: 8px 40px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    padding: 8px 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--neutral);
  background: transparent;
  border: none;
  gap: 4px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100vw - 320px);
  padding: 24px 160px;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid var(--gray-light);

  @media (max-width: 960px) {
    width: calc(100vw - 160px);
    padding: 8px 80px;
  }

  @media (max-width: 698px) {
    width: calc(100vw - 80px);
    padding: 8px 40px;
    flex-direction: column-reverse;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  > .search-icon {
    position: absolute;
    right: 16px;
    top: 12px;
  }

  @media (max-width: 698px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  border-width: 1px;
  border-style: solid;
  border-color: var(--gray-light);
  border-radius: 25px;
  padding: 12px;
  color: var(--neutral);
  width: 100%;
  flex: 1;
`;

export const Logo = styled.img`
  width: 260px;

  @media (max-width: 960px) {
    width: 200px;
  }
`;

export const MediaButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 698px) {
    display: none;
  }
`;

export const MediaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  border-radius: 28px;
  width: 56px;
  height: 56px;
  border: none;
  cursor: pointer;

  @media (max-width: 960px) {
    width: 48px;
    height: 48px;
  }

  &:hover {
    background: var(--primary-light);
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: calc(100vw - 320px);
  border-bottom: 1px solid;
  border-color: var(--gray-light);
  padding: 32px 160px;

  @media (max-width: 960px) {
    width: calc(100vw - 80px);
    padding: 8px 40px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    padding: 8px 20px;
  }
`;

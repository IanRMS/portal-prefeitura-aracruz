import styled from "styled-components";

export const Nav = styled.nav`
  width: calc(100vw - 320px);
  border-bottom: 1px solid;
  border-color: var(--gray-light);
  padding: 0px 160px;

  @media (max-width: 960px) {
    width: calc(100vw - 40px);
    padding: 0px 20px;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    padding: 0px 20px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-around;
`;

export const NavListItem = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--neutral);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 8px;

  &:hover {
    background: var(--gray-lightest);
    cursor: pointer;
    transition: 0.2s linear;
  }
`;

export const NavListSubMenu = styled.ul`
  position: absolute;
  background: #fff;
  border-radius: 2px;
  padding: 8px;
  width: 200px;
  top: 56px;
  border: 1px solid var(--gray-light);
  z-index: 1000;
`;

export const SubMenuItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--neutral);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 14px 0px;
  border-bottom: 1px solid var(--gray-light);

  &:hover {
    background: var(--gray-lightest);
    cursor: pointer;
    transition: 0.2s linear;
  }
`;

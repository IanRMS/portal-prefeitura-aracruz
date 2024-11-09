import styled from "styled-components";

export const DrawerContainer = styled.nav`
  background-color: var(--lightest);
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100vh;
  width: 100vw;
  max-width: 320px;
  z-index: 1000;
  padding: 20px;

  @media (min-width: 721px) {
    display: none;
  }
`;

export const DrawerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const BackDrop = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @media (min-width: 721px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  border: none;
  box-shadow: none;
  background: none;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary);
`;

export const DrawerNavMenu = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  padding: 0px;
`;

export const DrawerNavMenuItem = styled.li`
  border-bottom: 1px solid var(--gray-light);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0px;
`;

export const DrawerNavMSubMenuContainer = styled.div`
  padding-left: 30px;
  
`;

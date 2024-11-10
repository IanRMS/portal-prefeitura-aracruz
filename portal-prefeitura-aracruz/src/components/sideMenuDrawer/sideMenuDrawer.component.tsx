import React, { useState } from "react";
import { useNavigate } from "react-router";

import Close from "assets/icons/close.svg";
import ArrowDown from "assets/icons/arrow-down.svg";
import {
  BackDrop,
  CloseButton,
  DrawerContainer,
  DrawerHeader,
  DrawerNavMenu,
  DrawerNavMenuItem,
  DrawerNavMSubMenuContainer,
} from "./sideMenuDrawer.styles";
import { navItems } from "../../utils/nav-items";

interface SideDrawerProps {
  onClose: () => void;
}

export const SideMenuDrawerComponent: React.FC<SideDrawerProps> = ({
  onClose,
}) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const navigate = useNavigate();

  const goTo = (route: string) => {
    navigate(route);
    onClose();
  };

  const handleTabClick = (item: any, i: number) => {
    if (item.items) {
      if (i === activeItem) {
        setActiveItem(null);
        return;
      }
      setActiveItem(i);
      return;
    }
    goTo(item.route);
  };

  return (
    <>
      <DrawerContainer>
        <DrawerHeader>
          <CloseButton onClick={() => onClose()}>
            <img src={Close} alt="" />
          </CloseButton>
        </DrawerHeader>
        <DrawerNavMenu>
          {navItems.map((item, i) => (
            <div key={item.label}>
              <DrawerNavMenuItem onClick={() => handleTabClick(item, i)}>
                {item.label} {item.items && <img src={ArrowDown} alt="" />}
              </DrawerNavMenuItem>
              {item.label && i === activeItem && (
                <DrawerNavMSubMenuContainer>
                  {item.items?.map((subItem) => (
                    <DrawerNavMenuItem
                      onClick={() => goTo(subItem.route)}
                      key={subItem.label}
                    >
                      {subItem.label}
                    </DrawerNavMenuItem>
                  ))}
                </DrawerNavMSubMenuContainer>
              )}
            </div>
          ))}
        </DrawerNavMenu>
      </DrawerContainer>
      <BackDrop onClick={() => onClose()} />
    </>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { navItems } from "utils/nav-items";
import {
  Nav,
  NavList,
  NavListItem,
  NavListSubMenu,
  SubMenuItem,
} from "./nav.styles";
import ArrowDown from "assets/icons/arrow-down.svg";

function useOutSiteClickAlert(ref: any, action: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export const NavBarComponent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const subMenuRef = useRef(null);

  const emptyActiveTab = () => {
    setActiveTab(null);
  };

  useOutSiteClickAlert(subMenuRef, emptyActiveTab);

  const handleTabClick = (tab: any, index: number) => {
    setActiveTab(index);
    if (!tab.items) {
      navigate(tab.route);
    }
  };

  return (
    <Nav>
      <NavList>
        {navItems.map((item, i) => (
          <NavListItem key={item.label}>
            <div onClick={() => handleTabClick(item, i)}>
              {item.label} {item.items && <img src={ArrowDown} alt="Opções" />}
            </div>
            {activeTab !== null && i === activeTab && item.items && (
              <NavListSubMenu
                id="submenu"
                ref={subMenuRef}
                onClick={() => setActiveTab(null)}
              >
                {item.items.map((navItem) => (
                  <SubMenuItem
                    key={navItem.label}
                    onClick={() => {
                      navigate(navItem.route);
                    }}
                  >
                    {navItem.label}
                  </SubMenuItem>
                ))}
              </NavListSubMenu>
            )}
          </NavListItem>
        ))}
      </NavList>
    </Nav>
  );
};

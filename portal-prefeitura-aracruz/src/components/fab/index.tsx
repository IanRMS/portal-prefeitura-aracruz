import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowUp from "assets/icons/arrow-up.svg";

interface IFabButton {
  visible: boolean;
}

const FabButton = styled.button<IFabButton>`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid var(--gray-light);
  background: var(--gray-lightest);
  position: fixed;
  right: 16px;
  top: calc(50% - 40px);
  display: ${(props) => (props.visible ? "block" : "none")};
  cursor: pointer;
`;

const FabButtonComponent = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [window]);

  return (
    <FabButton
      visible={offset > 0}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src={ArrowUp} alt="" />
    </FabButton>
  ); 
};

export default FabButtonComponent;

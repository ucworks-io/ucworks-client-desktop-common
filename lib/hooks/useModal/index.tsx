/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import usePortal from "react-useportal";

export default function useModal() {
  const { isOpen, openPortal, togglePortal, closePortal, Portal } = usePortal({
    onOpen({ portal }) {
      const overlay = document.createElement("div");
      overlay.id = "overlay";
      overlay.style.cssText =
        "position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:100;";
      document.body.appendChild(overlay);
      portal.current.style.cssText = `
        /* add your css here for the Portal */
        position: absolute;
        z-index:102;
        top: 0;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          
      `;
    },
    onClose({ portal }) {
      const overlay = document.getElementById("overlay");
      if (overlay) {
        overlay.remove();
      }
    },
  });

  useEffect(
    () => () => {
      const overlay = document.getElementById("overlay");
      if (overlay) {
        overlay.remove();
      }
    },
    []
  );

  const Modal = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
      <Portal>
        <div
          css={css`
            background-color: white;
            padding: 20px;
            box-shadow: 0 3px 12px 0 rgba(75, 85, 98, 0.3);
            border-radius: 6px;
          `}
        >
          {children}
        </div>
      </Portal>
    );
  };

  return {
    Modal,
    openModal: openPortal,
    toggleModal: togglePortal,
    closeModal: closePortal,
    isOpen,
  };
}

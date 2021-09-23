/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import React, { useEffect } from "react";
import usePortal from "react-useportal";

interface Props {
  overlay?: boolean;
  closeOnOutsideClick?: boolean;
  bindTo?: HTMLElement | undefined;
}

export default function useModal(
  { overlay, closeOnOutsideClick, bindTo }: Props = {
    overlay: true,
    closeOnOutsideClick: true,
    bindTo: undefined,
  }
) {
  const { isOpen, openPortal, togglePortal, closePortal, Portal } = usePortal({
    closeOnOutsideClick,
    onOpen({ portal }) {
      const overlayDiv = document.createElement("div");
      overlayDiv.id = "overlay";
      if (overlay) {
        overlayDiv.style.cssText =
          "position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:100;background-color:#000000;opacity:0.9;";
      } else {
        overlayDiv.style.cssText =
          "position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:100;";
      }
      document.body.appendChild(overlayDiv);
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
      const overlayDiv = document.getElementById("overlay");
      if (overlayDiv) {
        overlayDiv.remove();
      }
    },
    bindTo,
  });

  useEffect(
    () => () => {
      const overlayDiv = document.getElementById("overlay");
      if (overlayDiv) {
        overlayDiv.remove();
      }
    },
    []
  );

  const Modal = ({
    children,
    override,
  }: {
    children: JSX.Element | JSX.Element[];
    override?: Interpolation<Theme>;
  }) => {
    return (
      <Portal>
        <div
          css={[
            css`
              background-color: white;
              padding: 20px;
              box-shadow: 0 3px 12px 0 rgba(75, 85, 98, 0.3);
              border-radius: 6px;
            `,
            override,
          ]}
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

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useModal } from "../hooks";

const ModalComponent = ({ unmount }: { unmount: () => void }) => {
  const { Modal, openModal, closeModal, isOpen } = useModal();
  useEffect(
    () => () => {
      unmount();
    },
    []
  );
  return (
    <div>
      <span>this is modal 1</span>
      <button
        onClick={(e) => {
          openModal(e);
        }}
      >
        click me!!
      </button>
      {isOpen && (
        <Modal>
          <>this is modal2</>
        </Modal>
      )}
    </div>
  );
};

const App = () => {
  const { Modal, openModal, closeModal, isOpen } = useModal();
  return (
    <>
      <button
        onClick={(e) => {
          openModal(e);
        }}
      >
        click me!!
      </button>
      {isOpen && (
        <Modal>
          <ModalComponent unmount={closeModal} />
        </Modal>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

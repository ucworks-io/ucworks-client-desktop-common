/** @jsxImportSource @emotion/react */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { css, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  Input,
  useModal,
  useTab,
  UcThemeProvider,
  Table,
  useSelect,
  Radio,
} from "../src";
import "../index.css";

const App = () => {
  const {
    Modal: Modal1,
    openModal: openModal1,
    closeModal: closeModal1,
    isOpen: is1Open,
  } = useModal({ closeOnOutsideClick: false });

  const {
    Modal: Modal2,
    openModal: openModal2,
    closeModal: closeModal2,
    isOpen: is2Open,
  } = useModal();
  return (
    <>
      <button onClick={openModal1}>open modal 1</button>
      {is1Open && (
        <Modal1>
          <div>this is modal 1</div>
          <button onClick={openModal2}>open modal 2</button>
        </Modal1>
      )}
      {is2Open && (
        <Modal2>
          <div>this is modal 2</div>
        </Modal2>
      )}
    </>
  );
};

ReactDOM.render(
  <UcThemeProvider>
    <App />
  </UcThemeProvider>,
  document.getElementById("root")
);

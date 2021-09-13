/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useModal, useSelect } from "../src";

function DepartmentNode({ department }: { department: any }) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        & > div {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      `}
    >
      <div>{department.dept_name}</div>
    </div>
  );
}

export default function ExampleUseModal() {
  const {
    Modal: AddDepartmentModalWrapper,
    openModal: openAddDepartmentModal,
    closeModal: closeAddDepartmentModal,
    isOpen: isAddDepartmentModalOpen,
  } = useModal();

  const [selectedNode, set, Select] = useSelect({
    items: [
      {
        title: () => <DepartmentNode department={{ dept_name: "0" }} />,
        key: "0",
        children: [
          {
            title: "0-1",
            key: "0-1",
          },
        ],
      },
    ],
    initialKey: "0-1",
  });
  return (
    <>
      <button onClick={(e) => openAddDepartmentModal(e)} />

      {isAddDepartmentModalOpen && (
        <AddDepartmentModalWrapper>
          <Select />
        </AddDepartmentModalWrapper>
      )}
    </>
  );
}

# Project is maintained (v1.0.3)

this project contains palettes, components and custom hooks that is used by ucworks desktop team.

## Table of contents

* Installation
* API

## Installation

Using npm

```bash
npm install --save ucworks-client-desktop-common
```

Using yarn

```bash
yarn add ucworks-client-desktop-common
```

## API

### `useModal`

return [Portal](https://github.com/alex-cory/react-useportal), toggle functions and boolean that represents if the modal is visible or not.

#### PropsTypes

|Property|Type|Required?|Default|Description|
|--------|----|---------|-------|-----------|
|overlay|boolean|❌|true|Determine if overlay is visible|

#### Usages

```javascript
import { useModal } from "ucworks-client-desktop-common/hooks";

const App = () => {
  const { openModal, closeModal, isOpen, Modal } = useModal();

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          openModal(e);
        }}
      >
        clickme!
      </button>
      {isOpen && (
        <Modal>
          <span>modal</span>
        </Modal>
      )}
    </>
  );
};
```

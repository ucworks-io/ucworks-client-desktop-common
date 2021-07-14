# Project is maintained (v1.0.3)

this project contains palettes, components and custom hooks that is used by ucworks desktop team.

## Table of contents

* Installation
* hooks

## Installation

Using npm

```bash
npm install --save ucworks-client-desktop-common
```

Using yarn

```bash
yarn add ucworks-client-desktop-common
```

## `components`

### `<Button/>`

return button component

#### PropTypes

|Property|Type|Required?|Default|Description|
|--------|----|---------|-------|-----------|
|colorTheme|string|❌|none|determine button's color|

## `palettes`

#### usages

```typescript
// index.tsx
/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import { palettes } from "ucworks-client-desktop-common/theme";

const baseTheme = {
  headerHeight: "100px",
  palettes,
};

export type BaseTheme = typeof baseTheme;

const App = () => {
  return (
    <button
      css={(props) => css`
        background-color: ${props.palettes.blue._500};
      `}
    >
      click me!!
    </button>
  );
};

ReactDOM.render(
  <ThemeProvider theme={baseTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// theme.d.ts
import { BaseTheme } from "../lib/examples";

declare module "@emotion/react" {
  interface Theme extends BaseTheme {}
}

```

## `hooks`

### `useTab()`

return TabComponent and current tab index

#### PropsTypes

|Property|Type|Required?|Default|Description|
|--------|----|---------|-------|-----------|
|rows|string[]|✅||tab title that is displayed|
|initialRow|number|❌|0|tab index that is displayed at first|

#### Usages

```typescript
import { useTab } from "ucworks-client-desktop-common/hooks";

const App = () => {
  const [current, Tab] = useTab({
    rows: ["foo", "bar"],
    initialRow: 1,
  });
  return (
    <>
      <Tab />
      {current === 0 ? <span>foo</span> : <span>bar</span>}
    </>
  );
};
```

### `useModal()`

return [Portal](https://github.com/alex-cory/react-useportal), toggle functions and boolean that represents if the modal is visible or not.

#### PropsTypes

|Property|Type|Required?|Default|Description|
|--------|----|---------|-------|-----------|
|overlay|boolean|❌|true|Determine if overlay is visible|

#### Usages

```typescript
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

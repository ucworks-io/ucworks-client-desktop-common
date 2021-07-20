# Project is maintained (v1.0.27)

this project contains components and custom hooks that is used by ucworks desktop team.

## Table of contents

* Installation
* components
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

write these codes into your project.

```typescript
// for providing palettes in whole project.
// index.tsx
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { UcThemeProvider } from 'ucworks-client-desktop-common';
import { render } from 'react-dom';
import App from './routes/app.route';
import 'ucworks-client-desktop-common/lib/index.css';

render(
  <UcThemeProvider>
    <App />
  </UcThemeProvider>,
  document.getElementById('root')
);

// theme.d.ts
// for intellisense 
import { UcTheme } from "../src";

declare module "@emotion/react" {
  interface Theme extends UcTheme {}
}
```

## `components`

### `<Button/>`

#### PropTypes

| Property   | Type          | Required? | Default | Description              |
| ---------- | ------------- | --------- | ------- | ------------------------ |
| colorTheme | string        | ❌         | none    | determine button's color |
| override   | Interpolation | ❌         |         | override default css     |

### `<Checkbox/>`

#### PropTypes

| Property | Type          | Required? | Default | Description              |
| -------- | ------------- | --------- | ------- | ------------------------ |
| name     | string        | ✅         |         | key of FormData          |
| label    | string        | ✅         |         | description for checkbox |
| override | Interpolation | ❌         |         | override default css     |
  
### `<Form/>`

#### PropTypes

| Property | Type                     | Required? | Default | Description               |
| -------- | ------------------------ | --------- | ------- | ------------------------- |
| onSubmit | (data: FormData) => void | ✅         |         | called after form submit. |
| override | Interpolation            | ❌         |         | override default css      |

### `<Input/>`

#### PropTypes

| Property | Type                             | Required? | Default | Description          |
| -------- | -------------------------------- | --------- | ------- | -------------------- |
| type     | "number" \| "text" \| "password" | ✅         |         | input types          |
| name     | string                           | ✅         |         | key of FormData      |
| override | Interpolation                    | ❌         |         | override default css |

### `<Table/>`

#### PropTypes
| Property     | Type                        | Required? | Default | Description                                                          |
| ------------ | --------------------------- | --------- | ------- | -------------------------------------------------------------------- |
| columns      | Column[]                    | ✅         |         | table columns                                                        |
| data         | any[]                       | ✅         |         | table data                                                           |
| initialState | TableState                  | ❌         |         | determine initial table state(ex. hiddenColumns)                     |
| renderCell   | (cell: Cell) => React.React | ❌         |         | determine a shape of each cell                                       |
| selectable   | boolean                     | ❌         | false   | determine if the table is selectable(should be used with onSelect()) |
| onSelect     | (selectedRow: Row) => void  | ❌         |         | called after rows are selected                                       |
| searchValue  | string                      | ❌         |         | filter rows by given value.                                          |
| override     | Interpolation               | ❌         |         | override default css                                                 |

## `hooks`

### `useTab()`

return TabComponent and current tab index

#### PropsTypes

| Property   | Type     | Required? | Default | Description                          |
| ---------- | -------- | --------- | ------- | ------------------------------------ |
| rows       | string[] | ✅         |         | tab title that is displayed          |
| initialRow | number   | ❌         | 0       | tab index that is displayed at first |

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

| Property | Type    | Required? | Default | Description                     |
| -------- | ------- | --------- | ------- | ------------------------------- |
| overlay  | boolean | ❌         | true    | Determine if overlay is visible |

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

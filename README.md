# Project is maintained (v1.0.35)

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
import { UcTheme } from "ucworks-client-desktop-common";

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

| Property | Type                             | Required? | Default | Description              |
| -------- | -------------------------------- | --------- | ------- | ------------------------ |
|          | Partial`<UseFormRegisterReturn`> | ❌         |         | return value of register |
| label    | string                           | ✅         |         | description for checkbox |
| override | Interpolation                    | ❌         |         | override default css     |

#### usages
```typescript
import { Checkbox, Button } from "ucworks-client-desktop-common";

const App = () => {
  const {handleSubmit, register} = useForm();
  return (
    <form onSubmit={handleSubmit((data) => {console.log(data)})}>
      <Checkbox label="checkbox" {...register("checkbox")}/>
      <Button type="submit">submit</Button>
    </form>);
}
```

### `<Radio/>`

#### PropTypes

| Property | Type                             | Required? | Default | Description              |
| -------- | -------------------------------- | --------- | ------- | ------------------------ |
|          | Partial`<UseFormRegisterReturn`> | ❌         |         | return value of register |
| label    | string                           | ✅         |         | description for checkbox |
| value    | any                           | ✅         |         | value of radio group |
| override | Interpolation                    | ❌         |         | override default css     |

#### usages
```typescript
import { Radio, Button } from "ucworks-client-desktop-common";

const App = () => {
  const {handleSubmit, register} = useForm();
  return (
    <form onSubmit={handleSubmit((data) => {console.log(data)})}>
      <Radio label="딸기" {...register('food')} value="strawberry" />
      <Radio label="바나나" {...register('food')} value="banana" />
      <Button type="submit">submit</Button>
    </form>);
}
```

### `<Input/>`

#### PropTypes

| Property | Type                             | Required? | Default | Description              |
| -------- | -------------------------------- | --------- | ------- | ------------------------ |
| type     | "number" \| "text" \| "password" | ✅         |         | input types              |
|          | Partial`<UseFormRegisterReturn`> | ❌         |         | return value of register |
| errors   | FieldErrors                      | ❌         |         | key of FormState         |
| override | Interpolation                    | ❌         |         | override default css     |

#### usages
```typescript
import { Input, Button } from "ucworks-client-desktop-common";

const App = () => {
  const {handleSubmit, register, formState} = useForm({
    resolver: yupResolver(
      yup.object({
        input: yup.string().required("fill the input!"),
      })
    ),
  });
  return (
    <form onSubmit={handleSubmit((data) => {console.log(data)})}>
      <Input type="text" {...register("input")} errors={formState.errors}/>
      <Button type="submit">submit</Button>
    </form>);
}
```

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

#### usages 
```typescript
import { Table } from "ucworks-client-desktop-common";

const App = () => {
  const columns = [
    {
      Header: "foo",
      accessor: "foo",
      minWidth: 100,
    },
    { Header: "bar", accessor: "bar", minWidth: 100 },
  ];

  const data = [
    { foo: "foo1", bar: "bar1" },
    { foo: "foo2", bar: "bar2" },
  ];

  return (
    <Table
      selectable
      columns={columns}
      data={data}
      onSelect={(row) => {
        console.log(row);
      }}
    />
  )
}
```

## `hooks`

### `useSelect()`

#### PropsTypes

| Property   | Type     | Required? | Default | Description                          |
| ---------- | -------- | --------- | ------- | ------------------------------------ |
| items       | TreeItem[] | ✅         |         | treeItem of `select`          |
| initialItem | TreeItem   | ❌         | 0       | treeItem which is displayed at first |

#### Usages 

```typescript
import { useSelect } from "ucworks-client-desktop-common";

const itemsMock = [
  { title: "test1" },
  { title: "test2", children: [{ title: "test2-1" }] },
];

const App = () => {
  const [selectedItem, Select] = useSelect({
    items: itemsMock,
    initialItem: itemsMock[1].children[0],
  });

  return (
    <Select />
  );
};
```

### `useTab()`

return TabComponent and current tab index

#### PropsTypes

| Property   | Type     | Required? | Default | Description                          |
| ---------- | -------- | --------- | ------- | ------------------------------------ |
| rows       | string[] | ✅         |         | tab title that is displayed          |
| initialRow | number   | ❌         | 0       | tab index that is displayed at first |

#### Usages

```typescript
import { useTab } from "ucworks-client-desktop-common";

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
import { useModal } from "ucworks-client-desktop-common";

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

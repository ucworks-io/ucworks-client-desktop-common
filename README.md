# Project is maintained (v1.0.3)

this project contains palettes, components and custom hooks that is used by ucworks team.

## Table of contents 
* Installation
* API 

## Installation 
---
Using npm
```
npm install --save ucworks-client-desktop-common
```

Using yarn 
```
yarn add ucworks-client-desktop-common
```

## API
---

### `useModal`
return [Portal][https://github.com/alex-cory/react-useportal]

#### PropsTypes 
|Property|Type|Required?|Default|Description|
|--------|----|---------|-------|-----------|
|overlay|boolean|❌|true|Determine if overlay is visible|

#### Usages
```javascript
const App = () => {
    const { openModal, closeModal, isOpen, Modal } = useModal();
    
    return (
        <button type="button" onClick={(e) => {
            openModal(e);
        }}>
        clickme!
        </button>
        {isOpen && (<Modal>
            <span>modal</span>
        </Modal>
        )}
    );
}
```
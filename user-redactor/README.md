### `npm run dev`
Использовать для запуска fake-api и Приложения

В проекте использованы:
react-hook-form
styled-components
redux & redux-thunk

Структура проекта:

src-
  common-
    constants
  components-
    Edit-
      Edit.jsx
      EditContainer.jsx       
    Header-
      Header.jsx
      HeaderContainer.jsx
    Register-
      Register.jsx
      RegisterContainer.jsx
    UserList-
      UserList.jsx
      UserListContainer.jsx
  redux-
    reduxStore.js
    usersReducer.js
    
Вся логика находится в Контейнерных компонентах, презентационные компоненты не содержат в себе логики и могут быть использованны повторно.
Redux логика находится в единственном редюсере.

# goit-react-hw-07-phonebook

# Критерии приема

Используй этот
[шаблон React-проекта](https://github.com/goitacademy/react-homework-template#readme)
как стартовую точку своего приложения.

- Создан репозиторий `goit-react-hw-07-phonebook`
- Использована библиотека `Redux Toolkit`

# Книга контактов

Выполни рефакторинг кода приложения «Книга контактов». Удали код отвечающий за
хранение и чтение контактов из локального хранилища, и добавь взаимодействие с
бэкендом для хранения контактов.

## Бэкенд

Создай свой персональный бэкенд для разработки при помощи UI-сервиса
[mockapi.io](https://mockapi.io/). Зарегистрируйся используя свой аккаунт
GitHub. Создай ресурс `contacts` чтобы получить ендпоинт `/contacts`. Используй
конструктор ресурса и опиши объект контакта как на иллюстрации.

<img src='https://textbook.edu.goit.global/lms-react-homework/v1/img/hw-07/api.png'>

## Форма состояния

Добавь в состояние Redux обработку индикатора загрузки и ошибки. Для этого
измени форму состояния.

```js
{
  contacts: [
    items: [],
    isLoading: false,
    error: null
  ],
  filter: ""
}
```

## Операции

Используй функцию
[createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) для
объявления асинхронный генераторов экшенов и выполнения HTTP-запросов. Обработку
экшенов и изменение данных в состоянии Redux сделай при помощи
[createSlice](https://redux-toolkit.js.org/api/createSlice).

Объяви следующие операции:

- `fetchContacts` - получение массива контактов (метод GET) запросом. Базовый
  тип экшена `"contacts/fetchAll"`.
- `addContact` - добавление контакта (метод POST). Базовый тип экшена
  `"contacts/addContact"`.
- `deleteContact` - удаление контакта (метод DELETE). Базовый тип экшена
  `"contacts/deleteContact"`.

Или используй [RTK Query](https://redux-toolkit.js.org/rtk-query/overview), для
`HTTP` запросов.

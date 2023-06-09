# Задача: Переход с JavaScript на TypeScript

## Проблема

Предположим, у вас есть JavaScript код, который вы используете для управления базой данных книг:

```javascript
const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
];

function getBooksByAuthor(author) {
    return books.filter(book => book.author === author);
}

console.log(getBooksByAuthor('George Orwell'));
```

Этот код также есть в файле `app.js`.

Несмотря на то, что код работает, вы хотите воспользоваться преимуществами TypeScript, включая статическую типизацию и автодополнение, чтобы сделать ваш код более надежным и легким для поддержки.

## Постановка задачи

Ваша задача - переписать данный JavaScript код на TypeScript.

## Subtask 1: Переименование файла в .ts

Первый шаг в переходе с JavaScript на TypeScript - это просто переименование ваших .js файлов в .ts.

1. Переименуйте файл `app.js` в `app.ts`.

## Subtask 2: Указание типов

В TypeScript мы можем явно указывать типы данных для переменных, параметров функций и возвращаемых значений. Добавьте типы в ваш код.

1. Добавьте интерфейс `Book` для описания структуры книги;
2. Затем используйте этот интерфейс для указания типа массива books и параметра функции `getBooksByAuthor`;
3. Добавьте тип возвращаемого значения для функции `getBooksByAuthor`.

## Subtask 3: Запуск файла с помощью ts-node и проверка

Теперь, когда ваш файл переименован и типы указаны, вы можете выполнить его с помощью ts-node и убедиться, что всё работает как ожидалось.

1. Откройте терминал в папке с файлом и выполните следующую команду:

```
ts-node app.ts
```

2. Убедитесь, что код работает так же, как и раньше, но теперь с преимуществами TypeScript.

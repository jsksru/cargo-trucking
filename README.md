# Тестовое задание на должность javascript developer
Фронтенд: React\
Бекенд: NodeJS + Express\
Общее время на кодинг и чтение мануалов: 30 часов.\
Сервер Api хранит данные в json файлах.\
Версия NodeJS: v12.18.0

## Установка
```
git clone https://github.com/jsksru/cargo-trucking.git
cd cargo-trucking/
npm install
```
## Запуск
```
npm run build
npm run serve
```
Собирает продакшн сборку и поднимает сервер
[http://localhost:8080](http://localhost:8080)

## Комманды NPM
### `npm start`
Запускает Dev сервер для React-а на 3000 порту
### `npm serve`
Запускает сервер для Api, и показывает статику из build.
### `npm build`
Собирает продакшн сборку React-а в папку build (сервер берет статику из этой папки).

## Документация к Api
### Получение списка заявок
#### ```GET: /api/requests```
Ответ: JSON массив объектов где:
| Поле     | Тип          | Описание                |
|----------|--------------|-------------------------|
| id       | Number       | id и номер заявки       |
| datetime | Date(String) | Дата и время заявки     |
| client   | String       | Фирма клиента           |
| carrier  | String       | ФИО \ Фирма перевозчика |
| phone    | String       | Телефон перевозчика     |
| code     | String       | Код АТИ перевозчика     |
### Получение информации об одной заявке по id
#### ```GET: /api/requests/:id```
Ответ: JSON объект где:
| Поле     | Тип          | Описание                                                                                                                                     |
|----------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| id       | Number       | id и номер заявки                                                                                                                            |
| datetime | Date(String) | Дата и время заявки                                                                                                                          |
| client   | Object       | Объект клиента с полями: id - id клиента, name - фирма или имя клиента, phone - телефон клиента                                              |
| carrier  | Object       | Объект перевозчика с полями: id - id перевозчика, name - фио или фирма перевозчика, phone - телефон перевозчика, code - АТИ код перевозчика  |
| comments | String       | Комментарии                                                                                                                                  |
### Добавление новой заявки
#### ```POST: /api/requests```
Данные в BODY запроса в формате JSON
| Поле     | Тип    | Описание               |
|----------|--------|------------------------|
| client   | Number | id клиента из базы     |
| carrier  | Number | id перевозчика из базы |
| comments | String | Комментарии            |
### Изменение данных в заявке по id
#### ```PUT: /api/requests/:id```
Данные в BODY запроса в формате JSON
| Поле     | Тип         | Описание               |
|----------|-------------|------------------------|
| datetime | Date(String)| Дата и время заявки    |
| client   | Number      | id клиента из базы     |
| carrier  | Number      | id перевозчика из базы |
| comments | String      | Комментарии            |
### Удаление заявки по id
#### ```DELETE: /api/requests/:id```
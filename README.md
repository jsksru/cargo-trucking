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
Получение списка заявок\
#### ```GET: /api/requests```
Ответ: JSON массив объектов где:\
| Поле     | Тип          | Описание                |
|----------|--------------|-------------------------|
| id       | Number       | id и номер заявки       |
| datetime | Date(String) | Дата и время заявки     |
| client   | String       | Фирма клиента           |
| carrier  | String       | ФИО \ Фирма перевозчика |
| phone    | String       | Телефон перевозчика     |
| code     | String       | Код АТИ перевозчика     |
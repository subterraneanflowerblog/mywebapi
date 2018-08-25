const express = require('express'); // expressモジュールを読み込む
const multer = require('multer'); // multerモジュールを読み込む
const uuidv4 = require('uuid/v4'); // uuidモジュールを読み込む

const app = express(); // expressアプリを生成する
app.use(multer().none()); // multerでブラウザから送信されたデータを解釈する
app.use(express.static('web')); // webフォルダの中身を公開する

// TODOリストデータ
const todoList = [];

// http://localhost:3000/api/v1/list にアクセスしてきたときに
// TODOリストを返す
app.get('/api/v1/list', (req, res) => {
    // JSONを送信する
    res.json(todoList);
});

// http://localhost:3000/api/v1/add にデータを送信してきたときに
// TODOリストに項目を追加する
app.post('/api/v1/add', (req, res) => {
    // クライアントからの送信データを取得する
    const todoData = req.body;
    const todoTitle = todoData.title;

    // ユニークIDを生成する
    const id = uuidv4();

    // TODO項目を作る
    const todoItem = {
        id,
        title: todoTitle,
        done: false
    };

    // TODOリストに項目を追加する
    todoList.push(todoItem);

    // コンソールに出力する
    console.log('Add: ' + JSON.stringify(todoItem));

    // 追加した項目をクライアントに返す
    res.json(todoItem);
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
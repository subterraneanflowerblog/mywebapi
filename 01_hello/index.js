// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// ルート（http://localhost/）にアクセスしてきたときに「Hello」を返す
app.get('/', (req, res) => res.send('Hello'));

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
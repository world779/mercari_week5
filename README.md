# MyBlog
vue.js、vuerify、firebaseを用いてブログのようなサイトを作成しました。

firebaseのdatabaseを使って、リアルタイムにデータの出し入れをすることができます。

## 作成した機能
* 投稿機能
* 編集機能
* 削除機能
* 一覧ページ
* 詳細ページ


## デモ
#### 投稿機能
![image](img/image1.gif)


#### 編集機能
![image](img/image2.gif)


#### 削除機能
![image](img/image3.gif)

### 苦労したところ
投稿の編集をする際に、始めはどの投稿の編集ボタンを押しても最後に投稿されたモノしか編集ができなかった。
そこで、@click.stopと関数を用いた値の受け渡しを行うことで、1つ1つの投稿に対応した編集機能を作成することができた。

### サイト 
デプロイしたサイトは[こちら](https://my-blog-7c08b.web.app/) 




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

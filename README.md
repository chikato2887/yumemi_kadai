This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

動作確認
===

`.env`を `.env.sample`からコピーで作成して、 `REACT_APP_RESAS_API_KEY`の値を設定してください

アプリを開発モードで実行します。
> yarn dev

[http://localhost：3000]（http://localhost:3000）を開いて、ブラウザで表示します。

編集するとページがリロードされます。


要件
===
都道府県別の総人口推移グラフを表示するSPA(Single Page Application)を構築せよ

###  内容
1. RESAS(地域経済分析システム) APIの「都道府県一覧」からAPIを取得する
2. APIレスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する
4. 人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する

### 制約
* Reactをベースに、最新版(9/26時点で v16.5.2)でSPAを構築すること
* 都道府県一覧および総人口情報はRESAS APIのデータを用いること
* グラフは Highcharts や Rechart.js サードパーティ製のグラフライブラリを用いて描画すること
* グラフライブラリは任意のものを用いる
* Google Chrome最新版で正しく動くこと

### 補足
[資料](https://www.dropbox.com/s/kppssc1p1di91tz/frontend-wireframe.jpg?dl=0)
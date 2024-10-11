
## 專案說明
### roaddriving是一款能提供線上預約道路駕訓課程服務的作品


### pc版瀏覽圖
![image](https://github.com/kawa3310/2024-roaddriving/blob/main/public/pc%E7%89%88.jpg?raw=true)


### mobilia版瀏覽圖
![image](https://github.com/kawa3310/2024-roaddriving/blob/main/public/mobilia%E7%89%88.jpg?raw=true)



Node.js 版本建議為：18.17.1 以上

## 安裝與使用

以下將會引導你如何安裝此專案到你的電腦上。




### 取得專案

```bash
git clone https://github.com/kawa3310/2024-roaddriving.git
```



### 運行專案
```npm run serve```



### 開啟專案
### 在瀏覽器網址列輸入以下即可看到畫面

```https://kawa3310.github.io/2024-roaddriving/#/```



### 專案技術

```- vue (^3.3.11)
- @vitejs/plugin-vue (^4.5.2)
- vue-router (^4.2.5)
- axios (^1.6.5)
- bootstrap (^5.3.2)
```


### 第三方服務
```
- swiper: "^8.0.0",
- sweetalert2": "^11.14.1",
- vee-validate": "^4.13.2",
- vue-loading-overlay,
```



## 資料夾結構
- `.vscode`：Visual Studio Code 的設定檔
- `dist`：打包後的檔案
- `public`：公開的靜態檔案
- `src`：專案的程式碼
  - `assets`：靜態檔案
  - `components`：元件
  - `router`：路由
  - `store`：狀態管理
  - `views`：頁面
  - `App.vue`：根元件
  - `main.js`：進入點
- `.env.example`：環境變數範本
- `.eslintrc.js`：ESLint 設定檔
- `.gitignore`：Git 忽略檔案
- `.nvmrc`：Node.js 版本
- `index.html`：進入點 HTML
- `package-lock.json`：套件版本鎖定
- `package.json`：專案資訊
- `README.md`：專案說明
- `vite.config.js`：Vite 設定檔

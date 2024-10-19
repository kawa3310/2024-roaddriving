## 南南道路駕訓（roaddriving）

####南南道路駕訓是能一款提供北中南道路駕訓服務的預約平台，課程使用者可以透過瀏覽課程方案、師資來選擇最適合自己的課程方案。透過這個平台希望讓所有剛拿到駕照的新手們得到專業的知識技巧後不必再畏懼成為馬路三寶。

## 專案DEMO
以下為 [Google][1]、[Yahoo][2]、[MSN][3] 三個網站的比較內容。

[1]: <https://www.google.com.tw/> "Google 搜尋"
[2]: <https://tw.yahoo.com/?p=us> "Yahoo 首頁"
[3]: <https://www.msn.com/zh-tw> "MSN 首頁"
(https://kawa3310.github.io/2024-roaddriving/#/)

### pc版瀏覽圖
![image](https://github.com/kawa3310/2024-roaddriving/blob/main/public/pc%E7%89%88.jpg?raw=true)


### mobilia版瀏覽圖
![image](https://github.com/kawa3310/2024-roaddriving/blob/main/public/mobilia%E7%89%88.jpg?raw=true)



Node.js 版本建議為：18.17.1 以上

## 安裝與使用

以下將會引導你如何安裝此專案到你的電腦上。




## 取得專案

```bash
git clone https://github.com/kawa3310/2024-roaddriving.git
```



## 運行專案
```npm run serve```



## 專案技術

```- vue (^3.3.11)
- @vitejs/plugin-vue (^4.5.2)
- vue-router (^4.2.5)
- axios (^1.6.5)
- bootstrap (^5.3.2)
```


## 第三方服務
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

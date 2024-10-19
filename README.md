## 南南道路駕訓（roaddriving）

南南道路駕訓是能一款提供北中南道路駕訓服務的預約平台，課程使用者可以透過瀏覽課程方案、師資來選擇最適合自己的課程方案。透過這個平台希望讓所有剛拿到駕照的新手們得到專業的知識技巧後不必再畏懼成為馬路三寶。

## 瀏覽專案
[專案DEMO](https://kawa3310.github.io/2024-roaddriving/#/)

### pc版瀏覽圖
![image](https://github.com/kawa3310/2024-roaddriving/blob/main/public/pc%E7%89%88.jpg?raw=true)


### mobilia版瀏覽圖
![image]([https://github.com/kawa3310/2024-roaddriving/blob/main/public/mobilia%E7%89%88.jpg?raw=true](https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1729304130714.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Xm%2FjN6c%2BbDpkMdBi1XAOykHwPasSSS8%2Byi1K41TvgF1hfvk6gqw405xw%2BpY6QMMIx67vITFjTDjcQNjHiHrfltLTq6fQOflSu9zoKL7LXc8aqkEKpw%2FUTD4g90xdoY0G%2B3PHM71ULtJbMgVF95JXW3Ja%2F8c5JmN%2BG09k%2BLU87mpcr09ULHcFzktfWtfZ27ghHQ9aj8PNvpBYyf8Vj%2BZBBrD91Lg7sKHAWMMCedZjGdm99Y3yr2OdbwGCTX6jW8%2Fyy8ByBkJ9tmdsv2D0wWyfKpiGGgeH1lpGqBue234MvV20zEQJh5qd6n%2FR6icnw2GNj1OUg1J%2BAA0RDJvaP07JcA%3D%3D))



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

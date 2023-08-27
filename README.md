# bootstrap5

https://bootstrap5.hexschool.com/docs/5.0/getting-started/introduction/

# fontawesome

https://fontawesome.com/v5.15/icons?d=gallery&p=2

### 大小範例

```
<i class="fa fa-thumbs-o-up fa-lg"></i>
<i class="fa fa-thumbs-o-up fa-2x"></i>
<i class="fa fa-thumbs-o-up fa-3x"></i>
<i class="fa fa-thumbs-o-up fa-4x"></i>
<i class="fa fa-thumbs-o-up fa-5x"></i>
```

# 配色參考

https://coolors.co/012a4a-013a63-01497c-014f86-2a6f97-2c7da0-468faf-61a5c2-89c2d9-a9d6e5

---

# Sass 建置筆記與指令

參考: https://frankknow.com/sass-tutorial/

## 建置步驟

1. node.js 安裝
    ```
    npm install -g sass
    ```
    自動生成sass資料夾
    
2. 在sass資料夾內，新建.sass檔案
3. 下指令編譯.sass/.scss
    ```
    sass sass/style.scss:css/style.css
    ```
4. 在指定位置可看見css檔案

---

## 監聽檔案並自動編譯

1. 重複執行：看有幾個檔案需監聽，就輸入幾次。

    ```
    sass --watch path/to/filename.scss:path/filename.css
    ```

2. 一次執行：看有幾個檔案需監聽，一次下指令。

    ```
    sass --watch path/filename1.scss:path/filename1.css path/filename2.scss:path/filename2.css path/filename3.scss:path/filename3.css
    ```
    
3. 指定目錄下全部監聽：監聽 sass 目錄下的 sass/scss 檔案到指定的 css 目錄下（下面指令為兩個資料夾在同一層）

    ```
    sass --watch sass:css
    ```
    
4. 當前目錄下全數監聽，並直接生成 css 檔案。

    ```
    sass --watch .
    ```


---

## 檔案結構參考

```
│  index.html
│  package-lock.json
│  README.md
│
├─font
│      Baskerville-Old-Face-Caps-Regular-4.ttf
│      Baskerville-Old-Face-Caps-Regular-4.woff
│      NotoSans-BlackItalic.ttf
│      NotoSans-BlackItalic.woff
│
├─images
│  └─background
│      │  pexels-kristina-paukshtite-1591252-1.jpg
│      │  pexels-kristina-paukshtite-1591252-2.jpg
│      │  pexels-kristina-paukshtite-1591252-3.jpg
│      │
│      └─bk
│              pexels-kristina-paukshtite-1591252-1.jpg
│              pexels-kristina-paukshtite-1591252-2.jpg
│              pexels-kristina-paukshtite-1591252-3 - 複製1.jpg
│              pexels-kristina-paukshtite-1591252-3 - 複製22.jpg
│              pexels-kristina-paukshtite-1591252-3 .jpg
│
├─js
│      jquery-3.6.0.js
│      main.js
│
└─sass
        load.css
        load.css.map
        load.scss
        main.css
        main.css.map
        main.scss
```
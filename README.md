## nodejs 网页主体内容抓取

* 使用phantomjs可以抓取js动态生成的网页，安利 <a target="_blank" href="https://github.com/amir20/phantomjs-node">https://github.com/amir20/phantomjs-node</a>
* 采用mozilla的主体抓取算法 <a target="_blank" href="https://github.com/mozilla/readability">https://github.com/mozilla/readability</a>

#### usage

```sh
cnpm i
cnpm run start
```
打开浏览器，访问 http://localhost:3333/parseurl?url=https://xxxx

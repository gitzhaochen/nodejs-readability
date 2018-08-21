const express = require('express');
const router = express.Router();
const jsdom = require("jsdom");
const Readability = require('../lib/Readability')
const {JSDOM} = jsdom;
const phantom = require('phantom');

function delay(second) {
    return new Promise((resolve) => {
        setTimeout(resolve, second * 1000);
    });
};
async function asyncPrint(url,res) {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open(url);
    if(status==='success'){
        await delay(3);//等待js异步加载3秒
        let html = await page.property('content');//整个网页的html
        // console.log(html)
        let {document} = (new JSDOM(html)).window;
        let documentJson = new Readability(document).parse();
        if(documentJson && documentJson.content){
            res.send(documentJson);
        }else{
            res.status(500).json({ error: '解析失败' });
        }
    }else{
        res.status(400).json({ error: 'url参数错误' });
    }

    await instance.exit();

};

router.get('/', (req, res, next) => {
    (async function () {
        let url = req.query.url;
        await asyncPrint(url,res);
    }())
});

module.exports = router;
<template>
<div id="footer">
    <div id="footer-container">
        <div class="footer-list">
            <div class="footer-title">{{ footer[0].title }}</div> <!-- 核心产品 -->
            <a class="footer-item" v-for="(item, index) of footer[0].item" :key="'item0' + index"
            :href="item.link">{{ item.text }}</a>
        </div>
        <div class="footer-list">
            <div class="footer-title">{{ footer[1].title }}</div> <!-- 解决方案 -->
            <a class="footer-item" v-for="(item, index) of footer[1].item" :key="'item1' + index"
            :href="item.link">{{ item.text }}</a>
            <div class="footer-title">{{ footer[2].title }}</div> <!-- 快速入口 -->
            <a class="footer-item" v-for="(item, index) of footer[2].item" :key="'item2' + index"
            :href="item.link">{{ item.text }}</a>
        </div>
        <div class="footer-list">
            <div class="footer-title">{{ footer[3].title }}</div> <!-- 友情链接 -->
            <a class="footer-item" v-for="(item, index) of footer[3].item" :key="'item3' + index"
            :href="item.link">{{ item.text }}</a>
        </div>
        <div class="footer-list">
            <div class="footer-title">{{ footer[4].title }}</div> <!-- 关于我们 -->
            <a class="footer-item" v-for="(item, index) of footer[4].item" :key="'item4' + index"
            :href="item.link">{{ item.text }}</a>
            <div class="footer-title">{{ footer[5].title }}</div> <!-- 咨询服务 -->
            <a class="footer-item" v-for="(item, index) of footer[5].item" :key="'item5' + index"
            :href="item.link">{{ item.text }}</a>
        </div>
        <div class="footer-list" style="width: 400px">
            <div class="footer-title" style="clear: both">{{ contact.title }}</div> <!-- 联系我们 -->
            <a class="footer-item" v-for="(item, index) of contact.item" :key="'contact' + index"
            :href="item.link">{{ item.text }}</a>
            <!-- <div class="footer-title">{{ qr.title }}</div> -->
            <!-- 二维码 -->
            <div id="footer-QR-title">
                <img src="@/assets/img/icon-wechat.svg" id="icon-wechat">关注我们
            </div>
            <div id="footer-QR">
                <img :src="qr.qr" id="footer-QR-img">
            </div>
            <!-- <div id="footer-QR-text">{{ qr.text }}</div> -->
        </div>
    </div>
    <div id="footer-bottom">{{ wa }}</div>
</div>
</template>

<script>
export default {
    methods: {
    },
    data() {
        return {
            footer: [
                { title: "核心产品",
                item: [
                    { text: "核心产品 #A", link: "/product" },
                    { text: "核心产品 #B", link: "/product" },
                    { text: "核心产品 #C", link: "/product" },
                    { text: "核心产品 #D", link: "/product" },
                    { text: "核心产品 #E", link: "/product" },
                    { text: "核心产品 #F", link: "/product" },
                    { text: "核心产品 #G", link: "/product" },
                    { text: "核心产品 #H", link: "/product" },
                    { text: "核心产品 #I", link: "/product" },
                    { text: "核心产品 #J", link: "/product" },
                    { text: "核心产品 #K", link: "/product" },
                ]},
                { title: "解决方案",
                item: [
                    { text: "软件解决方案", link: "/solution" },
                    { text: "硬件解决方案", link: "/solution" },
                    { text: "软硬件解决方案", link: "/solution" },
                ]},
                { title: "快速入口",
                item: [
                    { text: "管理平台 0", link: "http://www.bing.com" },
                    { text: "管理平台 1", link: "http://www.bing.com" },
                    { text: "服务平台 A", link: "http://www.bing.com" },
                ]},
                { title: "友情链接",
                item: [
                    { text: "友情链接 0", link: "http://www.bing.com" },
                    { text: "友情链接 1", link: "http://www.bing.com" },
                    { text: "友情链接 2", link: "http://www.bing.com" },
                    { text: "友情链接 3", link: "http://www.bing.com" },
                    { text: "友情链接 4", link: "http://www.bing.com" },
                    { text: "友情链接 5", link: "http://www.bing.com" },
                    { text: "友情链接 6", link: "http://www.bing.com" },
                ]},
                { title: "关于我们",
                item: [
                    { text: "公司简介", link: "/about" },
                    { text: "生产合作", link: "/cooperation" },
                    { text: "加入我们", link: "/inputCoop" },
                ]},
                { title: "咨询服务",
                item: [
                    { text: "售前在线咨询", link:"/inputAdvisory" },
                    { text: "售后智能在线", link:"/inputAfterSale" },
                    { text: "意见反馈", link:"/inputFeedback" },
                ]},
            ],
            contact: { title: "联系我们",
            item: [
                { text: "官方网站: www.xxxxxxxxx.com.cn", link: "/" },
                { text: "地址: 广东广州天河区A大道B广场" },
                { text: "邮箱: xxxxxx@xxx.com" },
                { text: "电话: 17600000000" },
                { text: "官方微信公众号: ?" },
            ]},
            qr: { title: "微信公众号", qr: require("@/assets/img/QR.jpg"), text: "官方微信公众号: ?" },
            wa: "©2021 XX集团有限公司版权所有 粤ICP备xxxxxxxx号",
        }
    },
}
</script>

<style scoped>
#footer {
    position: relative;
    margin-top: 100px;
    height: 540px;
    width: 100%;
    background: hsla(0, 0%, 20%, 1);
}
#footer-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
}
.footer-list {
    float: left;
    padding: 0 30px 50px 30px;
    width: 200px;
    font-size: 14px;
}
.footer-title {
    padding: 50px 0 20px 0;
    color: hsla(0, 0%, 100%, 1);
}
.footer-item {
    display: block;
    padding-bottom: 10px;
    color: hsla(0, 0%, 100%, 0.5);
}
.footer-item:hover {
    color: hsla(200, 98%, 48%, 1);
}
#footer-other {
    padding: 50px;
    width: 20%;
}
#footer-QR {
    /* float: left; */
    /* margin: 50px 20px auto auto; */
    /* margin: 8px 0 20px 0; */
    padding: 5px;
    height: 110px;
    width: 110px;
    background: hsla(0, 0%, 100%, 0.15);
}
#footer-QR-img {
    height: 100px;
    width: 100px;
}
#footer-QR-title {
    /* float: left; */
    /* margin: 74px 0 16px 0; */
    margin: 10px 0;
    height: 18px;
    font-size: 18px;
    line-height: 18px;
    white-space: nowrap;
    color: hsla(0, 0%, 100%, 1);
}
#footer-QR-text {
    float: left;
    display: block;
    width: 210px;
    padding-bottom: 10px;
    color: hsla(0, 0%, 100%, 0.5);
}
#icon-wechat {
    float: left;
    margin-right: 8px;
    height: 16px;
}
#footer-bottom {
    position: absolute;
    bottom: 0;
    clear: both;
    height: 50px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color:  hsla(0, 0%, 100%, 0.5);
}
</style>
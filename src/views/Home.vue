<template>
<div id="home">
    <Header/>
    <div id="banner">
        <a class="banner-item" v-for="(item, index) of banner" :key="'banner' + index"
        :id="'banner' + index" :href="item.link"><img :src="item.img"></a>
        <div id="selector">
            <div class="selector-item" v-for="(item, index) of banner"
            :key="'selector' + index" :id="'selector' + index" @click="bannerClick(index)"/>
        </div>
        <span class="arrow-left iconfont icon-arrow" @click="bannerClick(-2)"></span>
        <span class="arrow-right iconfont icon-arrow" @click="bannerClick(-1)"></span>
    </div>
    <div class="module">
        <div class="title float-title">{{ title[0].main }}<div class="sub-title">{{ title[0].sub }}</div></div>
        <div id="tab">
            <span class="tab-item" v-for="(item, index) of tab" :key="'tab' + index"
            :id="'tab' + index" @mouseenter="tabEnter(index)">{{ item.text }}</span>
            <span class="tab-item">
                <a class="tab-more" :href="tabMoreLink">更多产品<span class="iconfont icon-arrow"/></a>
            </span>
        </div>
        <div id="product">
            <div class="product-item" v-for="(item, index) of product" :key="'product' + index">
                <div class="product-title">{{ item.title }}
                    <div class="product-text">{{ item.text }}</div>
                </div>
                <a class="product-btn btn" style="z-index: 99" :href="item.link">{{ item.btnText }}</a>
                <img :src="item.img" class="product-img">
            </div>
        </div>
    </div>
    <div class="module">
        <div class="title">{{ title[1].main }}<div class="sub-title">{{ title[1].sub }}</div></div>
        <div id="solution">
            <a class="solution-item" v-for="(item, index) of solution" :key="'solution' + index" :href="item.link">
                <img :src="item.img" class="solution-img">
                <div class="solution-title">{{ item.title }}</div>
                <div class="solution-text">{{ item.text }}</div>
                <div class="solution-btn">查 看 详 情&nbsp;<span class="iconfont icon-arrow"/></div>
            </a>
        </div>
    </div>
    <div class="module">
        <div class="title">{{ title[2].main }}<div class="sub-title">{{ title[2].sub }}</div></div>
        <div id="partner-container">
            <div id="partner">
                <div class="partner-item" v-for="(item, index) of partner" :key="'partner' + index">
                    <img :src="item.img" class="partner-img">
                </div>
            </div>
        </div>
        <div id="page"/>
    </div>
    <Footer/>
    <Float/>
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Float from '@/components/Float'

export default {
    name: 'Home',
    components: {
        Header, Footer, Float,
    },
    mounted() {
        //banner
        document.getElementById("banner0").style.opacity = 1
        document.getElementById("banner0").style.zIndex = 0
        document.getElementById("selector0").style.width = "40px"
        this.timer = setInterval(() => { this.bannerTimer() }, 4000)
        //product
        document.getElementById("tab0").style.boxShadow = "inset 0 -4px 0 -1px hsla(200, 98%, 48%, 1)"
        document.getElementById("tab0").style.color = "hsla(200, 98%, 48%, 1)"
        document.getElementById("product").style.width = this.product.length * 1920 + "px"
        //partner
        document.getElementById("partner").style.height = Math.floor(this.partner.length / 5 + 1) * 150 + "px"
        let page = document.getElementById("page")
        let dot = ""
        let num = Math.floor(this.partner.length / 10)
        for (let i = 0; i <= num; i++) {
            dot += '<div style="float: left; margin: auto 8px; height: 14px; width: 20px; cursor: pointer; border-radius: 14px; ' + 
                'background: hsla(0, 0%, 80%, 1); transition: all ease, 0.3s;" id="page' + i + '"></div>'
        }
        page.innerHTML = dot
        for (let i = 0; i <= num; i++) {
            document.getElementById("page" + i).onclick = function () {
                for (let j = 0; j <= num; j++) {
                    document.getElementById("page" + j).style.width = "20px"
                    document.getElementById("page" + j).style.background = "hsla(0, 0%, 80%, 1)"
                }
                document.getElementById("page" + i).style.width = "40px"
                document.getElementById("page" + i).style.background = "hsla(200, 98%, 48%, 1)"
                document.getElementById("partner").style.marginTop = -300 * i + "px"
            }
        }
        document.getElementById("page0").style.width = "40px"
        document.getElementById("page0").style.background = "hsla(200, 98%, 48%, 1)"
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
        bannerStart() {
            for (let b = 0; b < this.banner.length; b++) {
                document.getElementById("banner" + b).style.opacity = b === 0 ? 1 : 0
                document.getElementById("banner" + b).style.zIndex = b === 0 ? 0 : -1
                document.getElementById("selector" + b).style.width = b === 0 ? "40px" : "20px"
            }
            this.bannerNo = 0
            this.timer = setInterval(() => { this.bannerTimer() }, 4000)
        },
        bannerTimer() {
            let index = (this.bannerNo + 1) % this.banner.length
            //IE9 不支持transition, 使用循环制作动画效果
            let o = 0
            let t = setInterval(() => {
                o += 0.05
                document.getElementById("banner" + index).style.zIndex = 0
                document.getElementById("banner" + this.bannerNo).style.opacity = (1 - o).toFixed(2)
                document.getElementById("banner" + index).style.opacity = o.toFixed(2)
                document.getElementById("selector" + this.bannerNo).style.width = (40 - (o * 20)).toFixed(0) + "px"
                document.getElementById("selector" + index).style.width = (20 + (o * 20)).toFixed(0) + "px"
                if (o >= 1) {
                    document.getElementById("banner" + this.bannerNo).style.zIndex = -1
                    clearInterval(t)
                    this.bannerNo = index
                }
            }, 20)
        },
        bannerClick(index) {
            // -1: banner顺序 +1; -2: banner顺序 -1; 其它: 跳转到指定banner;
            if (index === -1) { index = (this.bannerNo + 1) % this.banner.length }
            if (index === -2) { index = this.bannerNo === 0 ? (this.banner.length - 1) : (this.bannerNo - 1)}
            document.getElementById("banner" + this.bannerNo).style.zIndex = -1
            document.getElementById("banner" + index).style.zIndex = 0
            document.getElementById("banner" + this.bannerNo).style.opacity = 0
            document.getElementById("banner" + index).style.opacity = 1
            document.getElementById("selector" + this.bannerNo).style.width = "20px"
            document.getElementById("selector" + index).style.width = "40px"
            this.bannerNo = index
        },
        tabEnter(index) {
            for (let i = 0; i < this.tab.length; i++) {
                document.getElementById("tab" + i).removeAttribute("style")
            }
            document.getElementById("tab" + index).style.boxShadow = "inset 0 -4px 0 -1px hsla(200, 98%, 48%, 1)"
            document.getElementById("tab" + index).style.color = "hsla(200, 98%, 48%, 1)"
            document.getElementById("product").style.marginLeft = "calc(50vw - 960px - 1920px * " + index + ")"
        },
    },
    data() {
        return {
            timer: '',
            bannerNo: 0,
            tabMoreLink: "more.htm",
            partnerMoreLink: "more.htm",
            banner: [
                { img: require("@/assets/img/banner-0.jpg"), link: "banner0.htm" },
                { img: require("@/assets/img/banner-1.jpg"), link: "banner1.htm" },
                { img: require("@/assets/img/banner-2.jpg"), link: "banner2.htm" },
            ],
            title: [
                { main: "产品展示模块", sub: "产品展示模块副标题 介绍文本" },
                { main: "方案展示模块", sub: "方案展示模块副标题 介绍文本" },
                { main: "合作伙伴", sub: "合作伙伴展示模块副标题 介绍文本" },
            ],
            tab: [
                { text: "展示产品 A" },
                { text: "展示产品 4267832" },
                { text: "展示产品 C" },
                { text: "展示产品 D" },
                { text: "展示产品 E" },
            ],
            product: [
                { title: "展示产品 A", text: "产品详细描述文案产品详细描述文案远程,抄表产品详细描述文案远程,抄表产品详细描述文案产品详细描述文案产品详细描述文案产品详细描述文案产品详细描述文案",
                  btnText: "产品详情", link: "/product", img: require("@/assets/img/product-0.png") },
                { title: "展示产品 426783", text: "采用7G网络通信，能够探测危险并提供准实时报警功能。报警信息通过蜂窝网络发往云端平台，平台可通过手机APP、短信、电话等方式向用户告警。",
                btnText: "产品详情", link: "/product", img: require("@/assets/img/product-1.png") },
                { title: "展示产品 C", text: "产品C 详细描述文案",
                btnText: "产品详情", link: "/product", img: require("@/assets/img/product-2.png") },
                { title: "展示产品 D", text: "产品D 详细描述文案",
                btnText: "产品详情", link: "/product", img: require("@/assets/img/product-3.png") },
                { title: "展示产品 E", text: "产品E 详细描述文案",
                btnText: "产品详情", link: "/product", img: require("@/assets/img/product-4.png") },
            ],
            solution: [
                { title: "软件解决方案", text: "硬件解决方案详细描述文案硬件解决方案详细描述文案硬件解决方案详细描述文案硬件解决方案详细描述文案硬件解决方案详细描述文案硬件解决方案详细描述文案硬件解决方案详细描述文案",
                img: require("@/assets/img/solution-0.jpg"), link: "/solution" },
                { title: "硬件解决方案", text: "硬件解决方案详细描述文案",
                img: require("@/assets/img/solution-1.jpg"), link: "/solution" },
                { title: "软硬件解决方案", text: "软硬件解决方案详细描述文案。",
                img: require("@/assets/img/solution-2.jpg"), link: "/solution" },
                { title: "更多解决方案", text: "更多专属行业解决方案",
                img: require("@/assets/img/solution-3.jpg"), link: "/solution" },
            ],
            partner: [
                { img: require("@/assets/img/logo-Huawei.svg") },
                { img: require("@/assets/img/logo-NTT-DoCoMo.svg") },
                { img: require("@/assets/img/logo-KT.png") },
                { img: require("@/assets/img/logo-Intel.svg") },
                { img: require("@/assets/img/logo-ZTE.svg") },
                { img: require("@/assets/img/logo-360.png") },
                { img: require("@/assets/img/logo-Doosan.svg") },
                { img: require("@/assets/img/logo-IBM.svg") },
                { img: require("@/assets/img/logo-Oracle.svg") },
                { img: require("@/assets/img/logo-Cisco.svg") },
                { img: require("@/assets/img/logo-Vodafone.svg") },
                { img: require("@/assets/img/logo-DFM.svg") },
                { img: require("@/assets/img/logo-Huawei.svg") },
                { img: require("@/assets/img/logo-NTT-DoCoMo.svg") },
                { img: require("@/assets/img/logo-KT.png") },
                { img: require("@/assets/img/logo-Intel.svg") },
                { img: require("@/assets/img/logo-ZTE.svg") },
                { img: require("@/assets/img/logo-360.png") },
                { img: require("@/assets/img/logo-Doosan.svg") },
                { img: require("@/assets/img/logo-IBM.svg") },
                { img: require("@/assets/img/logo-Oracle.svg") },
                { img: require("@/assets/img/logo-Cisco.svg") },
                { img: require("@/assets/img/logo-Vodafone.svg") },
                { img: require("@/assets/img/logo-DFM.svg") },
                { img: require("@/assets/img/logo-Huawei.svg") },
                { img: require("@/assets/img/logo-NTT-DoCoMo.svg") },
                { img: require("@/assets/img/logo-KT.png") },
                { img: require("@/assets/img/logo-Intel.svg") },
                { img: require("@/assets/img/logo-ZTE.svg") },
                { img: require("@/assets/img/logo-360.png") },
                { img: require("@/assets/img/logo-Doosan.svg") },
                { img: require("@/assets/img/logo-IBM.svg") },
                { img: require("@/assets/img/logo-Oracle.svg") },
                { img: require("@/assets/img/logo-Cisco.svg") },
                { img: require("@/assets/img/logo-Vodafone.svg") },
                { img: require("@/assets/img/logo-DFM.svg") },
            ],
        }
    },
}
</script>

<style scoped>
#home {
    width: 100%;
}
#banner {
    position: relative;
    height: 360px;
    width: 100%;
    overflow: hidden;
}
.banner-item {
    position: absolute;
    margin-left: calc(50vw - 960px);
    height: 360px;
    width: 1920px;
    opacity: 0;
    z-index: -1;
    transition: all ease, 0.2s;
}
#selector {
    position: absolute;
    margin: 320px auto auto auto;
    left: 50%;
    transform: translateX(-50%);
}
.selector-item {
    float: left;
    margin: auto 8px;
    height: 8px;
    width: 20px;
    opacity: 0.6;
    cursor: pointer;
    border-radius: 8px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
    transition: all ease, 0.2s;
}
.arrow-left {
    position: absolute;
    top: 100px;
    left: 0;
    font-size: 100px;
    transform: rotate(90deg) scaleX(1.2);
    color: hsla(0, 0%, 100%, 1);
    opacity: 0.5;
    cursor: pointer;
}
.arrow-right {
    position: absolute;
    top: 100px;
    right: 0;
    font-size: 100px;
    transform: rotate(-90deg) scaleX(1.2);
    color: hsla(0, 0%, 100%, 1);
    opacity: 0.5;
    cursor: pointer;
}

.module {
    position: relative;
    width: 100%;
    max-width: 1920px;
    overflow: hidden;
}
.title {
    padding: 70px 0 0 0;
    width: 100%;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    color: hsla(0, 0%, 13%, 1);
    z-index: 2;
}
.sub-title {
    padding: 10px 0 0 0;
    font-size: 16px;
    font-weight: 400;
    color: hsla(0, 0%, 57%, 0.7);
}
.float-title {
    position: absolute;
    top: 0;
}

#tab {
    position: absolute;
    display: inline-block;
    top: 180px;
    left: 50%;
    color: hsla(0, 0%, 13%, 1);
    transform: translateX(-50%);
    white-space: nowrap;
    cursor: default;
    z-index: 2;
}
.tab-item {
    padding: 10px 20px;
    font-size: 16px;
    white-space: nowrap;
    transition: all ease, 0.2s;
}
.tab-more { color: hsla(0, 0%, 13%, 1); }
.tab-more > .icon-arrow { display: inline-block; transform: rotate(-90deg); }
.tab-more:hover{ color: hsla(200, 98%, 48%, 1); }

#product {
    margin-left: calc(50vw - 960px);
    transition: all ease, 0.6s;
}
.product-item {
    position: relative;
    float: left;
    height: 600px;
    width: 1920px;
    background: hsla(200, 98%, 97%, 1);
}
.product-img { position: absolute; top: 0; left: 0; }
.product-title {
    margin: 300px 0 0 540px;
    font-size: 26px;
    font-weight: 800;
    color: hsla(200, 98%, 48%, 1);
}
.product-text {
    margin: 10px auto auto 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    height: 78px;
    width: 430px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: justify;
    color: hsla(0, 0%, 13%, 1);
}
.product-btn {
    position: absolute;
    margin: 50px auto auto 540px;
    width: 160px;
}

#solution {
    margin-left: calc(50vw - 600px);
    width: 1200px;
}
.solution-item {
    position: relative;
    float: left;
    margin: 44px 25px 6px 25px;
    height: 240px;
    width: 550px;
    background: hsla(0, 0%, 20%, 1);
    z-index: 10;
    transition: all ease, 0.3s;
}
.solution-item:hover {
    transform: scale(1.05);
    background: hsla(200, 56%, 32%, 1);
}
.solution-item:hover > .solution-title { margin-top: 40px; }
.solution-item:hover > .solution-text { height: 72px; }
.solution-item:hover > .solution-btn { padding: 10px; height: 46px; }
.solution-img {
    position: absolute;
    height: 100%;
    opacity: 0.4;
    z-index: -1;
}
.solution-img, .solution-img:hover, .solution-img:visited {
    border: 0px; /* IE 9/10 超链接图片边框 */
}
.solution-title {
    margin: 100px auto 16px auto;
    width: 100%;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    color: hsla(0, 0%, 100%, 1);
    transition: all ease, 0.3s;
}
.solution-text {
    margin: 0 auto;
    display: -webkit-box;
    height: 0px;
    width: 400px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    color: hsla(0, 0%, 100%, 1);
    transition: all ease, 0.3s;
}
.solution-btn {
    position: absolute;
    bottom: 0;
    height: 0;
    width: 100%;
    font-size: 18px;
    text-align: center;
    overflow: hidden;
    color: hsla(0, 0%, 100%, 1);
    background: hsla(0, 0%, 0%, 0.2);
    transition: all ease, 0.3s;
}
.solution-btn > .icon-arrow {
    display: inline-block;
    transform: rotate(-90deg);
}

#partner-container {
    margin-left: calc(50vw - 600px);
    margin-bottom: 30px;
    height: 300px;
    width: 1200px;
    overflow: hidden;
}
#partner {
    width: 1200px;
    transition: all ease, 0.3s;
}
.partner-item {
    float: left;
    margin: 30px 15px 0 15px;
    padding: 34px;
    height: 120px;
    width: 210px;
    background: hsla(0, 0%, 97%, 1);
    border: 1px solid hsla(0, 0%, 90%, 1);
}
#page {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.page-item {
    float: left;
    margin: auto 8px;
    height: 8px;
    width: 8px;
    cursor: pointer;
    border-radius: 8px;
    background: hsla(0, 0%, 80%, 1);
}
</style>
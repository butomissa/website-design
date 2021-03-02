<template>
<div id="product">
    <Header/>
    <div id="banner-container">
        <img :src="banner.img" id="banner-img">
        <div id="banner">
            <div id="banner-title">{{ banner.title }}</div>
            <div id="banner-text">{{ banner.text }}</div>
            <div>
                <a class="banner-btn btn" :href="banner.link">{{ banner.btn0 }}</a>
                <a class="banner-btn btn">{{ banner.btn1 }}</a>
            </div>
        </div>
    </div>
    <div id="bar">
        <div id="bar-container">
            <div id="bar-module">
                <div class="bar-title" v-for="(item, index) of moduleName" :key="'title' + index"
                :id="'title' + index" @click="mtClick(index)">{{ item.title }}</div>
            </div>
            <div id="bar-right">
                <a class="bar-btn" :href="banner.link">{{ banner.btn0 }}</a>
                <a class="bar-btn">{{ banner.btn1 }}</a>
            </div>
        </div>
    </div>
    <div style="height: 60px"></div>
    <div id="module0" class="module">
        <p class="title">{{ moduleName[0].title }}</p>
        <div id="feature">
            <div class="feature-item" v-for="(item, index) of feature" :key="'feature' + index">
                <div class="iconfont" :class="item.icon"/>
                <div class="feature-title">{{ item.title }}</div>
                <div class="feature-text">{{ item.text }}</div>
            </div>
        </div>
    </div>
    <div id="module1" class="module">
        <p class="title">{{ moduleName[1].title }}</p>
    </div>
    <div id="module2" class="module">
        <p class="title">{{ moduleName[2].title }}</p>
        <div id="scenes">
            <div class="scenes-item" v-for="(item, index) of scenes" :key="'scenes' + index">
                <img :src="item.img" class="scenes-img">
                {{ item.title }}
            </div>
        </div>
    </div>
    <div id="module3" class="module">
        <p class="title-light">{{ moduleName[3].title }}</p>
        <img :src="coreImg" id="core-img">
        <div id="core">
            <div class="core-item" v-for="(item, index) of core" :key="'core' + index">
                <div class="iconfont" :class="item.icon"/>
                <div class="core-title">{{ item.title }}</div>
                <div class="core-text">{{ item.text }}</div>
            </div>
        </div>
    </div>
    <div id="module4" class="module">
        <p class="title">{{ moduleName[4].title }}</p>
    </div>
    <div id="module5" class="module">
        <p class="title">{{ moduleName[5].title }}</p>
        <div id="partner">
            <div class="partner-item" v-for="(item, index) of partner" :key="'partner' + index">
                <img :src="item.img" class="partner-img">
            </div>
        </div>
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
    name: 'Product',
    components: {
        Header, Footer, Float,
    },
    mounted () {
        window.addEventListener('scroll', this.scrollToTop)
        this.scrollToTop()
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop)
    },
    methods: {
        scrollToTop() {
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            // IE 9 不支持position: sticky, 手动判断模块栏目位置
            if (scrollTop >= 300) {
                document.getElementById("bar").style.position = "fixed"
                document.getElementById("bar").style.top = "60px"
                document.getElementById("bar-container").style.textAlign = "left"
                document.getElementById("bar-right").style.display = "block"
            } else {
                document.getElementById("bar").removeAttribute("style")
                document.getElementById("bar-container").style.textAlign = "center"
                document.getElementById("bar-right").style.display = "none"
            }
            // 当滚动到模块位置时改变模块栏目的文字颜色和下划线
            for (var i = 0; i < this.moduleName.length; i++) {
                document.getElementById("title" + i).removeAttribute("style")
                if ((i < this.moduleName.length - 1 && that.scrollTop >= (document.getElementById("module" + i).offsetTop - 120)
                && that.scrollTop < (document.getElementById("module" + (i + 1)).offsetTop - 120)) ||
                (i === this.moduleName.length - 1 && that.scrollTop >= (document.getElementById("module" + i).offsetTop - 120))) {
                    document.getElementById("title" + i).style.boxShadow = "inset 0 -4px 0 -1px hsla(200, 98%, 48%, 1)"
                    document.getElementById("title" + i).style.color = "hsla(200, 98%, 48%, 1)"
                }
            }
        },
        mtClick(index) {
            // 滚动到模块顶端 - 导航栏高度 60px - 模块栏目高度 60px
            document.documentElement.scrollTop = document.body.scrollTop = 
                document.getElementById("module" + index).offsetTop - 119
        },
    },
    data() {
        return {
            banner: { title: "核心产品 A", text: "核心产品描述，核心产品描述核心产品描述核心产品描述，核心产品描述核心产品描述，核心产品描述，核心产品描述核心产品描述。",
                btn0: "我要购买", btn1: "我要体验", link: "/inputBuy", img: require("@/assets/img/product.png")
            },
            moduleName: [
                { title: "产品功能" },
                { title: "产品方案" },
                { title: "应用场景" },
                { title: "核心优势" },
                { title: "/* 自定义 */" },
                { title: "客户案例" },
            ],
            feature: [
                { icon: "icon-phone", title: "产品特性 0", text: "连接管理能力更新迭代，满足多种运营需求的统一平台，支持“全球连接”。" },
                { icon: "icon-online", title: "产品特性 1", text: "功能描述功能描述功能描述功能描述功能描述" },
                { icon: "icon-service", title: "产品特性 2", text: "功能描述功能描述功能描述功能描述功能描述" },
                { icon: "icon-repair", title: "产品特性 3", text: "功能描述功能描述功能描述功能描述功能描述" },
                { icon: "icon-phone", title: "产品特性 4", text: "功能描述" },
                { icon: "icon-online", title: "产品特性 5", text: "功能描述功能描述功能描述功能描述功能描述" },
                { icon: "icon-service", title: "产品特性 6", text: "功能描述功能描述" },
                { icon: "icon-repair", title: "产品特性 7", text: "功能描述功能描述功能描述功能描述功能描述" },
                { icon: "icon-feedback", title: "产品特性 8", text: "功能描述功能描述功能描述功能描述功能描述功能描述功能描述功能描述功能描述功能描述功能描述功能描述功能描述功能描述功能描述" },
            ],
            scenes: [
                { title: "九小场所", img: require("@/assets/img/scenes-0.jpg") },
                { title: "医院", img: require("@/assets/img/scenes-1.jpg") },
                { title: "学校", img: require("@/assets/img/scenes-2.jpg") },
                { title: "商城", img: require("@/assets/img/scenes-3.jpg") },
                { title: "出租屋", img: require("@/assets/img/scenes-4.jpg") },
                { title: "工厂", img: require("@/assets/img/scenes-5.jpg") },
                { title: "城中村", img: require("@/assets/img/scenes-6.jpg") },
                { title: "古建筑", img: require("@/assets/img/scenes-7.jpg") },
            ],
            core: [
                { icon: "icon-phone", title: "核心功能 A", text: "专用网络的建设，基于“人物分离”、“一级架构”、“集中专用”、“叠加组网”、“承载组网方式不变”和“信令组网方式不变”等6大原则，2/3/4G/NB等网络能力已覆盖全国。" },
                { icon: "icon-online", title: "核心功能 B", text: "为客户提供一点接入、全国/全球部署的一站式服务，有效提高客户支撑服务效率，降低了业务的运营和服务成本。" },
                { icon: "icon-service", title: "核心功能 C", text: "端到端加密通道、SIM卡级数据加密配合核心网络安全架构，构建了完整的数据安全传输通道，满足客户专用性、高安全性和高可靠性需求。" },
                { icon: "icon-repair", title: "核心功能 D", text: "基于全球相关质量体系标准要求,结合行业特点定制开发了专用SIM卡产品，完全能够满足各行业对于物联网专用SIM卡的硬件尺寸适配性、环境质量适应性、安全管理可靠性的需求。" },
                { icon: "icon-phone", title: "核心功能 E", text: "基于eSIM的“全球连接”解决方案，实现全球一点接入、统一管理、一致体验；实现：一份合同、一点支撑、一点服务、一点出账、一点付费的高效部署方案。" },
            ],
            coreImg: require("@/assets/img/core.jpg"),
            partner: [  
                { img: require("@/assets/img/logo-Huawei.svg"), link: "" },
                { img: require("@/assets/img/logo-NTT-DoCoMo.svg"), link: "" },
                { img: require("@/assets/img/logo-KT.png"), link: "" },
                { img: require("@/assets/img/logo-Intel.svg"), link: "" },
                { img: require("@/assets/img/logo-ZTE.svg"), link: "" },
                { img: require("@/assets/img/logo-360.png"), link: "" },
                { img: require("@/assets/img/logo-Doosan.svg"), link: "" },
                { img: require("@/assets/img/logo-IBM.svg"), link: "" },
            ],
        }
    }
}
</script>

<style scoped>
#banner-container {
    position: relative;
    height: 300px;
    width: 100%;
    background: hsla(200, 98%, 97%, 1);
    overflow: hidden;
}
#banner {
    position: absolute;
    padding: 50px 0 0 50px;
    width: 100%;
    min-width: 900px;
    max-width: 1200px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
#banner-img {
    margin-left: calc(50vw - 960px);
    z-index: -2;
}
#banner-title {
    font-size: 26px;
    font-weight: 800;
    color: hsla(200, 98%, 48%, 1);
}
#banner-text {
    margin: 10px auto auto 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    width: 430px;
    height: 72px;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    color: hsla(0, 0%, 13%, 1);
}
.banner-btn {
    margin: 40px 40px auto 0;
    width: 160px;
}

#bar {
    position: absolute;
    height: 60px;
    width: 100%;
    top: 360px;
    text-align: center;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 12px 20px -16px hsla(200, 37%, 31%, 0.2);
    z-index: 999;
}
#bar-container {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 900px;
    max-width: 1200px;
    text-align: center;
}
#bar-module {
    display: inline-block;
}
.bar-title {
    float: left;
    margin: 6px 10px;
    padding: 12px 10px;
    font-size: 16px;
    line-height: 24px;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.bar-title:hover {
    color: hsla(200, 98%, 48%, 1);
    cursor: pointer;
}
#bar-right {
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    animation: showBtn 0.3s;
}
@keyframes showBtn {
    0% { opacity: 0; right: -20px; }
    100% { opacity: 1; right: 0; }
}
.bar-btn {
    display: inline-block;
    margin: 10px 20px 10px 0;
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    color: hsla(200, 98%, 48%, 1);
    border: 1px solid hsla(200, 98%, 48%, 0.5);
    background: hsla(200, 98%, 97%, 1);
    transition: all ease, 0.3s;
}
.bar-btn:hover {
    cursor: pointer;
    color: hsla(200, 98%, 48%, 1);
    box-shadow: 0 10px 32px -12px hsla(200, 37%, 31%, 0.5);
}
.module {
    position: relative;
    width: 100%;
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
.title-light {
    position: absolute;
    padding: 70px 0 0 0;
    width: 100%;
    font-size: 28px;
    text-align: center;
    color: hsla(0, 0%, 100%, 1);
    z-index: 2;
}

#feature {
    margin-left: calc(50vw - 600px);
    width: 1200px;
}
.feature-item {
    float: left;
    position: relative;
    margin: 40px 40px 0 40px;
    width: 320px;
    transition: all ease, 0.4s;
}
.feature-item > .iconfont {
    float: left;
    margin-right: 10px;
    padding-top: 11px;
    height: 50px;
    min-width: 50px;
    font-size: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 10px;
    color: hsla(200, 98%, 48%, 1);
    background: hsla(200, 98%, 97%, 1);
    border: 1px solid hsla(200, 98%, 48%, 0.3);
}
.feature-title {
    margin: auto auto 6px 16px;
    font-size: 18px;
    white-space: nowrap;
    font-weight: 600;
    color: hsla(0, 0%, 13%, 1);
}
.feature-text {
    margin: auto auto auto 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 40px;
    overflow: hidden;
    text-align: justify;
    font-size: 14px;
    line-height: 20px;
    color: hsla(0, 0%, 57%, 1);
}
#scenes {
    width: 1200px;
    margin-left: calc(50vw - 600px);
}
.scenes-item {
    margin: 10px 40px 30px 40px;
    float: left;
    width: 220px;
    font-size: 18px;
    text-align: center;
    letter-spacing: 3px;
    color: hsla(200, 98%, 48%, 1);
}
.scenes-img {
    margin: auto auto 10px auto;
    height: 200px;
    width: 200px;
    border-radius: 220px;
    border: 10px solid hsla(0, 0%, 100%, 1);
    box-shadow: 0.2px 1px 0 1px hsla(200, 98%, 48%, 1), 0 10px 32px -12px hsla(200, 37%, 31%, 0.5);
}
#core {
    height: 500px;
    margin-left: calc(50vw - 600px);
    padding: 140px 0 0 0;
    text-align: center;
    height: 500px;
    width: 1200px;
}
#core-img {
    position: absolute;
    top: 0;
    z-index: -1;
    margin-left: calc(50vw - 960px);
}
.core-item {
    float: left;
    width: 210px;
    margin: 20px 15px;
    padding: 30px;
    border-radius: 6px;
    background: hsla(0, 0%, 100%, 0.05);
}
.core-item > .iconfont {
    font-size: 40px;
    line-height: 40px;
    color: hsla(200, 98%, 48%, 1);
}
.core-title {
    margin: 12px auto;
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
    color: hsla(200, 98%, 48%, 1);
}
.core-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    height: 140px;
    overflow: hidden;
    text-align: justify;
    font-size: 14px;
    line-height: 20px;
    color: hsla(0, 0%, 100%, 1);
}

#partner {
    margin-left: calc(50vw - 600px);
    width: 1200px;
}
.partner-item {
    float: left;
    margin: 15px;
    padding: 34px;
    height: 120px;
    width: 210px;
    background: hsla(0, 0%, 97%, 1);
    border: 1px solid hsla(0, 0%, 90%, 1);
}
</style>
<template>
<div id="solution">
    <Header/>
    <div id="banner-container">
        <img :src="banner.img" id="banner-img">
        <div id="banner">
            <div id="banner-title">{{ banner.title }}</div>
            <div id="banner-text">{{ banner.text }}</div>
            <div>
                <a class="banner-btn btn" :href="banner.link">{{ banner.btn0 }}</a>
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
            </div>
        </div>
    </div>
    <div style="height: 60px"></div>
    <div id="module0" class="module">
        <p class="title">{{ moduleName[0].title }}</p>
    </div>
    <div id="module1" class="module">
        <p class="title">{{ moduleName[1].title }}</p>
        <div id="part">
            <div class="part-item" v-for="(item, index) of part" v-show="item.sub"
            :id="'part' + index" :key="'part' + index">
                <div class="part-title">{{ item.title }}</div>
                <a class="part-sub" v-for="(val, num) of item.sub" :key="'partSub' + num" :href="val.link">
                    <span class="iconfont icon-repair"/>{{ val.text }}
                </a>
            </div>
        </div>
    </div>
    <!-- <div style="height: 612px"></div> -->
    <div id="module2" class="module">
        <p class="title">{{ moduleName[2].title }}</p>
        <div id="partner">
            <div class="partner-item" v-for="(item, index) of partner" :key="'partner' + index">
                <img :src="item.img" class="partner-img">
            </div>
        </div>
    </div>
    <!-- <div style="height: 420px"></div> -->
    <Footer/>
    <Float/>
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Float from '@/components/Float'

export default {
    name: 'Solution',
    components: {
        Header, Footer, Float,
    },
    mounted () {
        window.addEventListener('scroll', this.scrollToTop)
        this.scrollToTop
        // 产品组成两边的子模块高度对齐
        for (let i = 0; i < this.part.length; i += 2) {
            if (i < this.part.length - 1) {
                document.getElementById("part" + i).offsetHeight > document.getElementById("part" + (i + 1)).offsetHeight ?
                    document.getElementById("part" + (i + 1)).style.height = document.getElementById("part" + i).offsetHeight + "px" :
                    document.getElementById("part" + i).style.height = document.getElementById("part" + (i + 1)).offsetHeight + "px"
            }
        }
        // 产品组成子模块内列表垂直居中
        for (let j = 0; j < this.part.length; j++ ) {
            document.getElementById("part" + j).style.paddingTop =
                (document.getElementById("part" + j).offsetHeight / 2 - Math.floor((this.part[j].sub.length + 1) / 2) * 41 - 2) + "px"
        }
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
            banner:{ title: "软硬件解决方案", text: "软硬件解决方案软硬件解决方案软硬件解决方案软硬件解决方案软硬件解决方案软硬件解决方案软硬件解决方案软硬件解决方案软硬件解决方案软硬件解决方案。",
                btn0: "我要咨询", link: "/inputAdvisory", img: require("@/assets/img/product.png") },
            moduleName: [
                { title: "方案详情" },
                { title: "产品组成" },
                { title: "客户案例" },
            ],
            part: [
                { title: "标准化产品",
                sub: [
                    { text: "标准化产品 A1", link: "/product" },
                    { text: "标准化产品 A2", link: "/product" },
                    { text: "标准化产品 A3", link: "/product" },
                    { text: "标准化产品 A4", link: "/product" },
                    { text: "标准化产品 A5", link: "/product" },
                ],
                },
                { title: "连接产品",
                sub: [
                    { text: "连接产品 B0", link: "/product" },
                    { text: "连接产品 B1", link: "/product" },
                ],
                },
                { title: "模组产品",
                sub: [
                    { text: "模组产品 C0", link: "/product" },
                    { text: "模组产品 C1", link: "/product" },
                    { text: "模组产品 C4", link: "/product" },
                ],
                },
                { title: "泛终端产品",
                sub: [
                    { text: "泛终端产品 D0", link: "/product" },
                    { text: "泛终端产品 D1", link: "/product" },
                    { text: "泛终端产品 D2", link: "/product" },
                    { text: "泛终端产品 D3", link: "/product" },
                ],
                },
            ],
            coreImg: require("@/assets/img/core.jpg"),
            partner: [  
                {img: require("@/assets/img/logo-Huawei.svg"), link: "" },
                {img: require("@/assets/img/logo-NTT-DoCoMo.svg"), link: "" },
                {img: require("@/assets/img/logo-KT.png"), link: "" },
                {img: require("@/assets/img/logo-Intel.svg"), link: "" },
                {img: require("@/assets/img/logo-ZTE.svg"), link: "" },
                {img: require("@/assets/img/logo-360.png"), link: "" },
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
    z-index: 99;
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

#part {
    margin-left: calc(50vw - 600px);
    width: 1200px;
}
.part-item {
    float: left;
    position: relative;
    padding: 20px 0 20px 136px;
    margin: 40px 20px 0 20px;
    width: 560px;
    border-radius: 20px;
    border: 2px dashed hsla(0, 0%, 90%, 1);
    background: hsla(0, 0%, 97%, 1);
}
.part-title {
    position: absolute;
    top: calc(50% - 9px);
    left: 20px;
    font-size: 18px;
    line-height: 18px;
    white-space: nowrap;
    font-weight: 600;
    color: hsla(0, 0%, 13%, 1);
}
.part-sub {
    position: relative;
    float: left;
    margin: 10px 30px 10px 0;
    padding: 21px 0;
    overflow: hidden;
    width: 180px;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    border-radius: 6px;
    color: hsla(200, 98%, 48%, 1);
    border: 1px solid hsla(200, 98%, 48%, 1);
    background: hsla(200, 98%, 97%, 1);
    transition: all ease, 0.3s;
}
.part-sub:hover {
    color: hsla(0, 0%, 100%, 1);
    background: hsla(200, 98%, 48%, 1);
    box-shadow: 0 10px 32px -12px hsla(200, 37%, 31%, 0.5);
}
.part-sub:hover > .iconfont {
    color: hsla(0, 0%, 100%, 1);
}
.part-sub > .iconfont {
    position: absolute;
    top: 50px;
    right: -20px;
    font-size: 90px;
    opacity: 0.1;
    transform: rotate(15deg);
    color: hsla(200, 98%, 48%, 1);
    transition: all ease, 0.2s;
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
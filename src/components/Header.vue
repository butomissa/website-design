<template>
<div id="header">
    <div id="nav-container">
        <div id="nav-bar">
            <img id="logo" :src="logo[0].img">
            <a href="/" class="nav-item"><span>首页</span></a>
            <span class="nav-item nav-menu">
                <span>产品服务</span><span class="iconfont icon-arrow"/>
                <div class="menu" id="menu0">
                    <div class="sider">
                        <div class="sider-item" :id="'sider' + index" v-for="(menu, index) of menuProduct"
                        :key="'sider' + index" @mouseenter="siderEnter(index)">{{ menu.text }}</div>
                    </div>
                    <template v-for="(sub, index0) of menuProduct" >
                        <div class="sub" :id="'sub' + index0" :key="'sub' + index0" v-if="sub.isShow">
                            <div v-for="(item, index1) of sub.item" :key="'item' + index1">
                                <div class="sub-title">{{ item.text }}</div>
                                <a class="content" v-for="(val, index2) of item.content"
                                    :key="'content' + index2" :href="val.link">{{ val.text }}</a>
                                <div style="height: 10px; clear: both"></div>
                            </div>
                        </div>
                    </template>
                </div>
            </span>
            <span class="nav-item nav-menu">
                <span>解决方案</span><span class="iconfont icon-arrow"/>
                <div class="menu menu-column">
                    <a class="menu-item" v-for="(item, index) of menuSolution"
                    :key="'solution' + index" :href="item.link">{{ item.text }}</a>
                </div>
            </span>
            <span class="nav-item nav-menu">
                <span>生产合作</span><span class="iconfont icon-arrow"/>
                <div class="menu menu-column">
                    <a class="menu-item" v-for="(item, index) of menuCooperation"
                    :key="'cooperation' + index" :href="item.link">{{ item.text }}</a>
                </div>
            </span>
            <a href="/about" class="nav-item"><span>关于我们</span></a>
            <div id="nav-right">
                <a href="/login" class="nav-item"><span>登录</span></a>
                <a href="/signup" class="nav-item"><span>注册</span></a>
                <a class="nav-btn btn">客户后台</a>
            </div>
        </div>
    </div>
    <div style="height: 60px"></div>
</div>
</template>

<script>
export default {
    mounted() {
        document.getElementById("sider0").style.color = "hsla(200, 98%, 48%, 1)"
        document.getElementById("sider0").style.background = "hsla(0, 0%, 100%, 1)"
        document.getElementById("sider0").style.boxShadow =
            "0px 8px 16px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3)"
    },
    methods: {
        siderEnter(index) {
            for (var i = 0; i < this.menuProduct.length; i++) {
                document.getElementById("sider" + i).removeAttribute("style")
                this.menuProduct[i].isShow = false
            }
            document.getElementById("sider" + index).style.color = "hsla(200, 98%, 48%, 1)"
            document.getElementById("sider" + index).style.background = "hsla(0, 0%, 100%, 1)"
            document.getElementById("sider" + index).style.boxShadow =
                "0px 8px 16px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3)"
            this.menuProduct[index].isShow = true
        },
    },
    data() {
        return {
            logo: [
                { img: require("@/assets/logo.svg") },
            ],
            menuProduct: [
                { text: "产品主类型 0", isShow: true,
                item: [
                    { text: "产品子类型",
                    content: [
                        { text: "产品 0", link: "/product" },
                        { text: "产品 1", link: "/product" },
                        { text: "产品 2", link: "/product" },
                        { text: "产品 3", link: "/product" },
                        { text: "产品 4", link: "/product" },
                    ]},
                    { text: "高级产品子类型",
                    content: [
                        { text: "高级产品 0", link: "/product" },
                        { text: "高级产品 1", link: "/product" },
                        { text: "高级产品 2", link: "/product" },
                        { text: "高级产品 3", link: "/product" },
                        { text: "高级产品 4", link: "/product" },
                    ]},
                    { text: "辅助类产品",
                    content: [
                        { text: "辅助类产品 0", link: "/product" },
                        { text: "辅助类产品 1", link: "/product" },
                    ]},
                    { text: "办公生产类产品",
                    content: [
                        { text: "办公生产类产品 0", link: "/product" },
                        { text: "办公生产类产品 1", link: "/product" },
                        { text: "办公生产类产品 2", link: "/product" },
                    ]},
                    { text: "新型产品",
                    content: [
                        { text: "新型产品 0", link: "/product" },
                        { text: "新型产品 1", link: "/product" },
                        { text: "新型产品 2", link: "/product" },
                        { text: "新型产品 3", link: "/product" },
                    ]},
                    { text: "家庭类产品",
                    content: [
                        { text: "家庭类产品 0", link: "/product" },
                        { text: "家庭类产品 1", link: "/product" },
                        { text: "家庭类产品 2", link: "/product" },
                    ]},
                ]},
                { text: "智能硬件类产品", isShow: false,
                item: [
                    { text: "智能硬件类产品",
                    content: [
                        { text: "智能硬件类产品 A", link: "/product" },
                        { text: "智能硬件类产品 B", link: "/product" },
                    ]},
                ]},
                { text: "智能软件类产品", isShow: false,
                item: [
                    { text: "智能软件类产品",
                    content: [
                        { text: "智能软件类产品 AII型", link: "/product" },
                        { text: "智能软件类产品 BVI型", link: "/product" },
                    ]},
                ]},
            ],
            menuSolution: [
                { text: "硬件解决方案", link: "/solution" },
                { text: "软件解决方案", link: "/solution" },
                { text: "软硬件解决方案", link: "/solution" },
            ],
            menuCooperation: [
                { text: "生产合作", link: "/cooperation" },
                { text: "申请加入", link: "/inputCoop" },
            ],
        }
    },
}
</script>

<style scoped>
#nav-container {
    position: fixed;
    height: 60px;
    width: 100%;
    background: hsla(0, 0%, 100%, 1);
    border-bottom: 1px solid hsla(0, 0%, 92%, 1);
    box-shadow: 0px 8px 20px -16px hsla(200, 37%, 31%, 0.2);
    z-index: 10010;
}
#nav-bar {
    position: absolute;
    padding: 0 20px;
    height: 60px;
    width: 100%;
    min-width: 900px;
    /* max-width: 1200px; */
    left: 50%;
    transform: translateX(-50%);
}
#logo {
    float: left;
    margin: 19px 60px 19px 0px;
    width: 140px;
}
/* 导航栏菜单-主菜单 */
.nav-item {
    position: relative;
    float: left;
    padding: 0 8px;
    height: 60px;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.nav-item > span {
    display: inline-block;
    margin-top: 18px;
}
.nav-item:hover > span {
    color: hsla(200, 98%, 48%, 1);
    transition: all ease, 0.3s;
}
.nav-menu:hover {
    cursor: default;
}
.nav-menu > .iconfont {
    display: inline-block;
    padding: 0 4px;
    font-size: 12px;
    transition: all ease, 0.3s;
}
.nav-menu:hover > .iconfont {
    transform: rotate(180deg);
}
.nav-menu:hover > .menu {
    display: block;
}
#nav-right {
    float: right;
    margin: auto 0 auto auto;
}
.nav-btn {
    padding: 8px 20px;
    margin: 10px 0 10px 10px;
    height: 40px;
    font-size: 16px;
}

/* 导航栏菜单 */
.menu {
    position: absolute;
    display: none;
    top: 60px;
    left: 0px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
    z-index: 99;
    animation: showMenu 0.3s;
}
@keyframes showMenu {
    0% { opacity: 0; top: 40px; }
    100% { opacity: 1; top: 60px; }
}
#menu0 {
    left: -60px;
    width: 800px;
    height: calc(90vh - 60px);
    min-height: 288px;
    max-height: 500px;
}
.menu-column {
    padding: 12px 0;
}
.sider {
    float: left;
    padding: 16px 0;
    height: 100%;
    min-width: 160px;
    cursor: default;
    background: hsla(200, 98%, 97%, 1);
    box-shadow: inset -1px 0px 0px 0px hsla(203, 40%, 90%, 1);
}
.sider-item {
    margin: 0 0 0 12px;
    padding: 20px 16px;
    white-space: nowrap;
    transition: all ease, 0.3s;
}

/* 导航子菜单 */
.sub {
    float: left;
    padding: 0 0 0 14px;
    margin: 14px 14px 14px 0;
    height: calc(100% - 28px);
    width: calc(100% - 174px);
    overflow-y: auto;
    background: hsla(0, 0%, 100%, 1);
}
.sub-title {
    margin: 10px;
    padding: 0 0 10px 0;
    width: calc(100% - 20px);
    white-space: nowrap;
    color: hsla(200, 98%, 48%, 1);
    border-bottom: 1px solid hsla(200, 98%, 48%, 0.3);
}
.content{
    float: left;
    margin: 6px 30px 6px 10px;
    font-size: 15px;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.content:hover {
    color: hsla(200, 98%, 48%, 1);
}
.menu-item{
    float: left;
    margin: 10px 50px 10px 30px;
    font-size: 15px;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.menu-item:hover {
    color: hsla(200, 98%, 48%, 1);
}
</style>

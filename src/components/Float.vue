<template>
<div id="float">
    <div class="float-item">
        <div class="iconfont icon-contact"/>
        <div class="float-text">联系我们</div>
        <div id="fc">
            <a class="fc-item" v-for="(item, index) of floatContact"
            :key="'item' + index" :href="item.link">
                <div class="iconfont" :class="item.icon"/>
                <div class="fc-title">{{ item.title }}
                    <div class="fc-text">{{ item.text }}</div>
                </div>
            </a>
        </div>
    </div>
    <div class="float-item" id="float-top" @click="backTop">
        <div class="iconfont icon-arrow"/>
    </div>
</div>
</template>

<script>
export default {
    mounted () {
        window.addEventListener('scroll', this.scrollToTop);
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop);
    },
    methods: {
        backTop () {
            const that = this;
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5);
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
                if (that.scrollTop === 0) {
                    clearInterval(timer);
                }
            }, 16);
        },
        scrollToTop () {
            const that = this;
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            that.scrollTop = scrollTop;
            if (that.scrollTop > 200) {
                document.getElementById("float-top").style.margin = "12px auto 0 auto";
                document.getElementById("float").style.bottom = "20px";
            } else {
                document.getElementById("float-top").style.margin = "32px auto 0 auto";
                document.getElementById("float").style.bottom = "-54px";
            }
        },
    },
    data() {
        return {
            floatContact: [
                { icon: "icon-phone", title: "售前咨询电话", text: "020-77777777" },
                { icon: "icon-online", title: "售前在线咨询", text: "方案匹配购买咨询，常见问题在线解答", link:"/inputAdvisory" },
                { icon: "icon-service", title: "售后智能在线", text: "售后问题智能诊断，匹配最合适的人工服务", link:"/inputAfterSale" },
                { icon: "icon-feedback", title: "意见反馈", text: "为了提升服务质量，我们期待您的建议", link:"/inputFeedback" },
            ],
        }
    },
}
</script>

<style scoped>
#float {
    position: fixed;
    right: 20px;
    bottom: -54px;
    transition: all ease, 0.3s;
    z-index: 999;
}
.float-item {
    position: relative;
    margin: 12px auto 0 auto;
    padding: 10px 0;
    width: 40px;
    text-align: center;
    border-radius: 10px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 12px 20px -20px hsla(200, 37%, 31%, 0.5), 0px 0px 10px 0px hsla(200, 37%, 31%, 0.3);
    transition: all ease, 0.3s;
}
.float-text {
    margin: 4px auto;
    width: 18px;
    font-size: 15px;
    line-height: 17px;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.float-item > .iconfont {
    font-size: 18px;
    line-height: 20px;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.float-item > .icon-arrow {
    transform: rotate(180deg);
}
.float-item:hover {
    background: hsla(200, 98%, 48%, 1);
    cursor: pointer;
}
.float-item:hover > .iconfont,
.float-item:hover > .float-text {
    color: hsla(0, 0%, 100%, 1);
}
.float-item:hover > #fc {
    display: block;
}
#float-top {
    margin: 32px auto 0 auto;
}

#fc {
    position: absolute;
    display: none;
    padding: 4px;
    right: 40px;
    bottom: 0px;
    border-radius: 10px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 12px 20px -20px hsla(200, 37%, 31%, 0.5), 0px 0px 10px 0px hsla(200, 37%, 31%, 0.3);
    animation: showMenu 0.3s;
}
@keyframes showMenu {
    0% { opacity: 0; right: 20px; }
    100% { opacity: 1; right: 40px; }
}
.fc-item {
    display: block;
    padding: 12px;
    width: 280px;
    text-align: left;
    border-radius: 6px;
    transition: all ease, 0.3s;
}
.fc-item:hover {
    background: hsla(200, 98%, 48%, 1);
}
.fc-item:hover > .iconfont,
.fc-item:hover > .fc-title,
.fc-item:hover > .fc-title > .fc-text {
    color: hsla(0, 0%, 100%, 1);
}
.fc-item > .iconfont {
    float: left;
    margin: 4px 10px auto 0;
    font-size: 20px;
    color: hsla(200, 98%, 48%, 1);
}
.fc-title {
    white-space: nowrap;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.fc-text {
    font-size: 12px;
    color: hsla(0, 0%, 57%, 1);
    transition: all ease, 0.3s;
}
</style>
<template>
<div id="about">
    <Header/>
    <div id="title"><div id="subtitle">{{ subtitle }}</div>{{ title }}</div>
    <img :src="banner" id="img">
    <div id="bar">
        <div id="bar-container">
            <div id="bar-module">
                <div class="bar-title" v-for="(item, index) of moduleName" :key="'title' + index"
                :id="'title' + index" @click="mtClick(index)">{{ item.title }}</div>
            </div>
        </div>
    </div>
    <div style="height: 60px"></div>
    <div id="module0" class="module">
        <p class="title">{{ moduleName[0].title }}</p>
        <div class="about-item" v-for="(item, index) of about" :key="'about' + index">
            <span class="about-title">{{ item.title }}<span class="about-en">{{ item.en }}</span></span>
            <span class="about-text" v-for="(text, val) of item.text" :key="'text' + val">{{ text }}</span>
        </div>
    </div>
    <div id="module1" class="module">
        <p class="title">{{ moduleName[1].title }}</p>
        <div id="news">
            <div id="news-list">
                <a class="news-item" v-for="(item, index) of newsList" :key="'news' + index" :href="item.link">
                    <img :src="newsImg[0]" class="news-img">
                    <div class="news-title">{{ item.title }}</div>
                    <div class="news-text">{{ item.text }}</div>
                </a>
            </div>
            <a id="big-news" :href="bigNews[0].link">
                <img :src="newsImg[1]" id="big-news-img">
                <div id="big-news-title">{{ bigNews[0].title }}</div>
                <div id="big-news-text">{{ bigNews[0].text }}</div>
            </a>
        </div>
    </div>
    <div id="module2" class="module">
        <p class="title">{{ moduleName[2].title }}</p>
        <div id="honor">
            <div class="honor-item" v-for="(item, index) of honor" :key="'honor' + index">
                <img :src="item.img" class="honor-img">
                <div class="honor-title">{{ item.title }}</div>
                <div class="honor-text">{{ item.text }}</div>
            </div>
        </div>
    </div>
    <div id="module3" class="module">
        <p class="title">{{ moduleName[3].title }}</p>
        <div id="contact">
            <a class="contact-item" v-for="(item, index) of contact" :key="'contact' + index" :href="item.link">
                <div class="iconfont" :class="item.icon"/>
                <div class="contact-title">{{ item.title }}</div>
                <div class="contact-text">{{ item.text }}</div>
            </a>
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
    name: 'About',
    components: {
        Header, Footer, Float,
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
        this.scrollToTop
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
            } else {
                document.getElementById("bar").removeAttribute("style")
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
            banner: require("@/assets/img/about.jpg"),
            title: "关于我们",
            subtitle: "XX公司广东分公司 A平台",
            moduleName: [
                { title: "XX公司广东分公司 A平台", top: 420 },
                { title: "新闻资讯", top: 946 },
                { title: "资质荣誉", top: 1656 },
                { title: "联系我们", top: 2356 },
            ],
            about: [
                { title: "XX公司", en: "XX Company™",
                text: [ "XX集团有限公司（简称“XX公司”）于2077年7月7日创立，Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ],
                },
                { title: "XX公司广东分公司", en: "XX Company™ Guangdong Branch",
                text: [ 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' ],
                },
                { title: "XX公司广东分公司 A平台", en: "XX Company™ Guangdong Branch A Platform",
                text: [ "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.' ],
                },
            ],
            newsImg: [ require("@/assets/img/news.jpg"), require("@/assets/img/bignews.jpg") ],
            newsList: [
                { title: "反击美国禁令！中国芯片业收入达8848亿，欧洲17国也将行动",
                text:"自去年9月美国发布芯片新规后，这场芯片较量已经逐步蔓延成为了“全球大战”。",
                link: "/news" },
                { title: "中国商家“占领”亚马逊 日媒：师从中国的时代已然到来",
                text:"最近20年，随着中国互联网飞速发展，输出中国经验的“Copy from China”（师从中国）的时代已然到来。",
                link: "/news" },
                { title: "胡润全球富豪榜发布：马斯克财富达到1.28万亿，首次成为世界首富",
                text:"胡润研究院今日发布《2021世茂港珠澳口岸城·胡润全球富豪榜》, 计算截止日期为2021年1月15日。",
                link: "/news" },
                { title: "年报深解：英伟达或将由盛转衰？三大挑战不容忽视",
                text:"当前，从市值来看，全球价值最高的芯片企业，是芯片设计巨头英伟达。而它正处于前所未有的辉煌时期。",
                link: "/news" },
            ],
            bigNews: [
                { title: "年报深解：英伟达或将由盛转衰？三大挑战不容忽视",
                text:"当前，从市值来看，全球价值最高的芯片企业，是芯片设计巨头英伟达。而它正处于前所未有的辉煌时期。",
                link: "/news" },
            ],
            honor: [
                { img: require("@/assets/img/honor-1.jpg"), title: "资质荣誉 A", text: "A平台收入规模、连接规模、新增连接数三项第一。" },
                { img: require("@/assets/img/honor-0.jpg"), title: "资质荣誉 B", text: "第四次荣任广东省产业联盟轮值主席，会员单位由70家发展至200多家，连续多年举办行业峰会。" },
                { img: require("@/assets/img/honor-2.jpg"), title: "资质荣誉 C", text: "A平台连接数已达77亿，其中子平台B连接数超过7777万。" },
            ],
            contact: [
                { icon: "icon-phone", title: "售前咨询电话 (周一至周五 9:00-17:30)", text: "提供购买咨询，帮您排忧解惑！热线电话：020-77777777" },
                { icon: "icon-online", title: "售前在线咨询 (周一至周五 9:00-17:30)", text: "售前咨询在线客服，常见问题在线解答！", link:"/inputAdvisory" },
                { icon: "icon-service", title: "售后智能在线", text: "售后问题智能诊断，匹配最合适的人工服务", link:"/inputAfterSale" },
                { icon: "icon-repair", title: "意见反馈", text: "为了提升服务质量，我们期待您的建议", link:"/inputFeedback" },
            ],
        }
    }
}
</script>

<style scoped>
#title {
    padding: 170px 0 0 calc(50vw - 450px);
    height: 300px;
    width: 100%;
    max-width: 900px;
    font-size: 60px;
    line-height: 80px;
    font-weight: 800;
    letter-spacing: 4px;
    white-space: nowrap;
    color: hsla(0, 0%, 13%, 1);
}
#subtitle {
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0;
    color: hsla(0, 0%, 33%, 1)
}
#img {
    position: absolute;
    left: 0;
    top: 60px;
    margin-left: calc(50vw - 960px);
    z-index: -2;
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

.about-item {
    margin: auto;
    padding: 0 50px;
    width: 100%;
    max-width: 1000px;
}
.about-title {
    display: block;
    margin: 40px auto 10px auto;
    font-size: 20px;
    font-weight: 600;
    color: hsla(0, 0%, 13%, 1);
}
.about-en {
    /* display: block; */
    margin: auto 10px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;

    color: hsla(0, 0%, 80%, 1);
}
.about-text {
    display: block;
    margin: 10px auto;
    font-size: 16px;
    line-height: 28px;
    text-align: justify;
    text-indent: 2em;
    color: hsla(0, 0%, 40%, 1);
}

#news {
    /* padding-bottom: 20px; */
    margin: 40px auto calc(50vw - 600px);
    width: 1120px;
}
#news-list {
    float: left;
    width: 680px;
}
.news-item {
    position: relative;
    display: block;
    margin: 0 20px 12px 0;
    padding: 10px;
    height: 110px;
    min-height: 110px;
    width: 670px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
    transition: all ease, 0.3s;
}
.news-img {
    position: absolute;
    height: 90px;
    width: 120px;
}
.news-img, .news-img:hover, .news-img:visited,
#big-news-img, #big-news-img:hover, #big-news-img:visited {
    border: 0px; /* IE 9/10 超链接图片边框 */
}
.news-item:hover {
    background: hsla(200, 98%, 48%, 1);
    box-shadow: 0 10px 32px -12px hsla(200, 37%, 31%, 0.5);
}
.news-item:hover > .news-title,
.news-item:hover > .news-text {
    color: hsla(0, 0%, 100%, 1);
}
.news-title {
    margin: 10px auto 8px 0;
    padding: 0 6px 0 136px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 540px;
    font-size: 17px;
    line-height: 20px;
    font-weight: 600;
    color: hsla(200, 98%, 48%, 1);
    transition: all ease, 0.3s;
}
.news-text {
    display: -webkit-box;
    padding: 0 6px 0 136px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 48px;
    overflow: hidden;
    text-align: justify;
    font-size: 15px;
    line-height: 24px;
    color: hsla(0, 0%, 57%, 1);
    transition: all ease, 0.3s;
}
#big-news {
    float: right;
    display: block;
    margin: 0 auto 20px auto;
    padding: 16px;
    height: 476px;
    width: 432px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
    transition: all ease, 0.3s;
}
#big-news:hover {
    background: hsla(200, 98%, 48%, 1);
    box-shadow: 0 10px 32px -12px hsla(200, 37%, 31%, 0.5);
}
#big-news:hover > #big-news-title, #big-news:hover > #big-news-text {
    color: hsla(0, 0%, 100%, 1);
}
#big-news-img {
    height: 300px;
    width: 400px;
    background: hsla(0, 0%, 90%, 1);
}
#big-news-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 30px 6px 12px 6px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
    color: hsla(200, 98%, 48%, 1);
    transition: all ease, 0.3s;
}
#big-news-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin: auto 6px;
    height: 72px;
    font-size: 16px;
    line-height: 24px;
    color: hsla(0, 0%, 57%, 1);
    transition: all ease, 0.3s;
}

#honor {
    margin-left: calc(50vw - 600px);
    width: 1200px;
    min-width: 1200px;
}
.honor-item {
    position: relative;
    float: left;
    margin: 20px 30px;
    padding: 20px;
    width: 340px;
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
}
.honor-title {
    position: absolute;
    padding: 20px;
    top: 330px;
    left: -10px;
    font-size: 22px;
    font-weight: 800;
    transform: rotate(-4deg);
    color: hsla(0, 0%, 100%, 1);
    background: hsla(200, 98%, 48%, 1);
    box-shadow: 10px 6px 0 0 hsla(200, 98%, 48%, 0.3);
}
.honor-text {
    display: -webkit-box;
    margin: 14px auto auto auto;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    height: 66px;
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
    color: hsla(0, 0%, 13%, 1);
}

#contact {
    margin: 30px auto auto calc(50vw - 600px);
    width: 1200px;
}
.contact-item {
    float: left;
    display: block;
    margin: 0 20px 40px 20px;
    padding: 30px;
    height: 120px;
    width: 560px;
    border-radius: 20px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
    transition: all ease, 0.2s;
}
.contact-item:hover {
    background: hsla(200, 98%, 48%, 1);
}
.contact-item:hover > .contact-text, .contact-item:hover > .contact-title {
    color: hsla(0, 0%, 100%, 1);
}
.contact-item > .iconfont {
    float: left;
    margin: auto 10px auto auto;
    padding: 15px;
    font-size: 30px;
    line-height: 30px;
    border-radius: 50px;
    border: 1px solid hsla(200, 98%, 48%, 1);
    background: hsla(200, 98%, 97%, 1);
    color: hsla(200, 98%, 48%, 1);
    transition: all ease, 0.2s;
}
.contact-title {
    margin: 6px auto 8px auto;
    font-size: 18px;
    line-height: 20px;
    white-space: nowrap;
    font-weight: 600;
    color: hsla(200, 98%, 48%, 1);
}
.contact-text {
    margin: 0 auto;
    font-size: 15px;
    line-height: 24px;
    color: hsla(0, 0%, 57%, 1);
    transition: all ease, 0.3s;
}

</style>
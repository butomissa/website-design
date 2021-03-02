<template>
<div id="login">
    <div id="left">
        <img id="logo" :src="logo">
        <p id="title">{{ title }}</p>
        <p class="text">{{ text[0].para }}</p>
        <p class="text">{{ text[1].para }}</p>
    </div>
    <div id="login-form">
        <div>
            <div class="tab-item" id="tab0" @click="tabSelect(0)">{{ tab[0] }}</div>
            <div class="tab-item" id="tab1" @click="tabSelect(1)">{{ tab[1] }}</div>
        </div>
        <!-- IE 9 不支持 placeholder -->
        <div class="input-item" @click="putFocus(0)" v-show="currentTab === 0"> <!-- 账号 -->
            <input type="text" class="input" id="input0" @focus="inputFocus(0)"
            v-model.trim="input[0].data">
            <div class="label" id="label0">{{ input[0].name }}</div>
            <div class="placeholder" v-show="input[0].data === ''">请填写{{ input[0].name }}</div>
            <div class="error" id="error0"/>
        </div>
        <div class="input-item" @click="putFocus(3)" v-show="currentTab === 1"> <!-- 手机号 -->
            <input type="text" class="input" id="input3" @focus="inputFocus(3)"
            v-model.trim="input[3].data">
            <div class="label" id="label3">{{ input[3].name }}</div>
            <div class="placeholder" v-show="input[3].data === ''">请填写{{ input[3].name }}</div>
            <div class="error" id="error3"/>
        </div>
        <div class="input-item" @click="putFocus(1)" v-show="currentTab === 0"> <!-- 密码 -->
            <input type="password" class="input" id="input1" @focus="inputFocus(1)"
            v-model.trim="input[1].data">
            <div class="label" id="label1">{{ input[1].name }}</div>
            <div class="placeholder" v-show="input[1].data === ''">请填写{{ input[1].name }}</div>
            <div class="error" id="error1"/>
        </div>
        <div class="input-item" @click="putFocus(2)"> <!-- 图形验证码 -->
            <input type="text" class="input" id="input2" @focus="inputFocus(2)"
            v-model.trim="input[2].data">
            <div class="label" id="label2">{{ input[2].name }}</div>
            <div class="placeholder" v-show="input[2].data === ''">请填写{{ input[2].name }}</div>
            <img class="verify-img" :src="verifyImg">
            <div class="error" id="error2"/>
        </div>
        <div class="input-item" @click="putFocus(4)" v-show="currentTab === 1"> <!-- 手机验证码 -->
            <input type="text" class="input" id="input4" @focus="inputFocus(4)"
            v-model.trim="input[4].data">
            <div class="label" id="label4">{{ input[4].name }}</div>
            <div class="placeholder" v-show="input[4].data === ''">请填写{{ input[4].name }}</div>
            <div class="btn" id="get-verify" @click="getVerify">{{ verifyText }}</div>
            <div class="error" id="error4"/>
        </div>
        <div>
            <a id="btn-signin" href="/signup">注 册</a>
            <div id="btn-login" @click="loginClick()">登 录</div>
        </div>
        <a id="bottom" href="/">- A平台·统一认证平台 -</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',
    mounted() {
        this.tabSelect(0)
        window.addEventListener('resize', this.resize)
        this.resize()
    },
    methods: {
        resize() {
            document.getElementById("login-form").style.marginTop = "calc(50vh - " + document.getElementById("login-form").offsetHeight / 2 + "px)"
            document.getElementById("left").style.marginTop = "calc(45vh - " + document.getElementById("left").offsetHeight / 2 + "px)"
        },
        tabSelect(index) {
            document.getElementById("tab" + this.currentTab).removeAttribute("style")
            document.getElementById("tab" + index).style.boxShadow = "inset 0 -10px 0 -7px hsla(200, 98%, 48%, 1)"
            document.getElementById("tab" + index).style.color = "hsla(200, 98%, 48%, 1)"
            this.currentTab = index
            for (let i = 0; i < 5; i++) {
                if (this.currentTab === 0 && i < 3 || this.currentTab === 1 && i > 1) { //tab判断
                    document.getElementById("error" + i).innerText = ""
                    document.getElementById("input" + i).removeAttribute("style")
                    document.getElementById("label" + i).removeAttribute("style")
                }
            }
        },
        putFocus(index) {
            document.getElementById("input" + index).focus()
        },
        inputFocus(index) {
            document.getElementById("input" + index).removeAttribute("style")
            document.getElementById("label" + index).removeAttribute("style")
            document.getElementById("error" + index).innerText = ""
        },
        getVerify() {
            if (this.input[3].data === "") {
                document.getElementById("input3").style.borderColor = "hsla(0, 88%, 60%, 1)"
                document.getElementById("error3").innerText = "请填写正确的手机号"
            } else {
                document.getElementById("get-verify").style.background = "hsla(0, 0%, 90%, 1)"
                document.getElementById("get-verify").style.color = "hsla(0, 0%, 100%, 1)"
                this.verifyText = "XX秒"
            }
        },
        loginClick() {
            for (let i = 0; i < 5; i++) {
                if (this.currentTab === 0 && i < 3 || this.currentTab === 1 && i > 1) { //tab判断
                    document.getElementById("error" + i).innerText = ""
                    document.getElementById("input" + i).removeAttribute("style")
                    document.getElementById("label" + i).removeAttribute("style")
                    if (this.input[i].data === "") {
                        document.getElementById("error" + i).innerText = "请填写正确的" + this.input[i].name
                        document.getElementById("input" + i).style.borderColor = "hsla(0, 88%, 60%, 1)"
                        document.getElementById("label" + i).style.color = "hsla(0, 88%, 60%, 1)"
                    }
                }
            }
        },
    },
    data() {
        return {
            currentTab: 0,
            tab: [ "账号登录",  "手机号登录", ],
            input: [
                { name: "账号", data: "" },
                { name: "密码", data: "" },
                { name: "图形验证码", data: "" },
                { name: "手机号", data: "" },
                { name: "手机验证码", data: "" },
            ],
            verifyImg: require("@/assets/img/verify.jpg"),
            logo: require("@/assets/logoLight.svg"),
            title: "A平台·统一认证平台",
            text: [
                { para: "A平台聚合全球产业链资源，为行业企业提供优质全方位服务。打造新型合作模式和商业模式，赋能产业创新发展。" },
                { para: "统一认证平台围绕可信数字身份整合多种认证渠道，为相关系统提供统一可信的线上认证服务，实现 “一次认证、全网通行”。" },
            ],
            verifyText: "获取",
        }
    },
}
</script>

<style scoped>
#login {
    height: 100vh;
    min-height: 600px;
    width: 100vw;
    min-width: 900px;
    background: url("../assets/img/login.jpg");
    background-size: cover;
    background-position: center;
}
#left {
    float: left;
    margin-left: calc(42% - 400px);
    width: 360px;
}
#logo {
    width: 180px;
}
#title {
    margin: 60px auto 30px 0;
    font-size: 26px;
    color: hsla(0, 0%, 100%, 1);
    text-shadow: 0 0 10px hsla(200, 37%, 31%, 0.5);
}
.text {
    margin: 0 auto 10px 0;
    text-indent: 2em;
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    color: hsla(0, 0%, 100%, 1);
    text-shadow: 0 0 10px hsla(200, 37%, 31%, 0.5);
}

#login-form {
    float: right;
    padding: 50px 60px 30px 60px;
    width: 440px;
    margin-right: calc(42% - 400px);
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0 10px 32px -12px hsla(200, 37%, 31%, 0.5);
    animation: formShow 1s;
}
@keyframes formShow {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
.tab-item {
    display: inline-block;
    margin: 0 5% 20px 5%;
    padding: 6px 0 14px 0;
    width: 40%;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    transition: all ease, 0.3s;
}
.tab-item:hover {
    cursor: pointer;
    color: hsla(200, 98%, 48%, 1);
}
.input-item {
    position: relative;
    padding: 8px 0 0 0;
    margin: 10px 0 0 0;
    z-index: 9;
}
.label {
    position: absolute;
    padding: 0 6px;
    top: 0;
    left: 7px;
    font-size: 14px;
    line-height: 14px;
    color: hsla(0, 0%, 57%, 1);
    background: hsla(0, 0%, 100%, 1);
}
.input {
    padding-left: 12px;
    height: 44px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid hsla(0, 0%, 90%, 1);
    outline: none;
    color: hsla(0, 0%, 13%, 1);
    box-shadow: 0px 12px 20px -16px hsla(200, 37%, 31%, 0.5);
    transition: all ease, 0.3s;
}
.input:focus, .input:hover, .input-item:hover > .input {
    border-color: hsla(200, 98%, 48%, 1);
    color: hsla(200, 98%, 48%, 1);
}
.input:focus ~ .label, .input-item:hover > .label {
    color: hsla(200, 98%, 48%, 1);
}
.placeholder {
    position: absolute;
    top: 24px;
    left: 13px;
    font-size: 14px;
    line-height: 14px;
    color: hsla(0, 0%, 80%, 1);
}
.error {
    margin: 4px auto 10px 13px;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    color: hsla(0, 88%, 60%, 1);
}
.verify-img {
    position: absolute;
    top: 12px;
    right: 4px;
}
#get-verify {
    position: absolute;
    padding: 10px 0;
    width: 90px;
    font-size: 16px;
    line-height: 16px;
    top: 12px;
    right: 4px;
    transition: all ease, 0.3s;
}
#get-verify:hover{
    cursor: pointer;
}

#btn-signin {
    display: inline-block;
    margin: 10px 10% 40px 0;
    width: 45%;
    font-size: 18px;
    line-height: 42px;
    text-align: center;
    border-radius: 3px;
    color: hsla(200, 98%, 48%, 1);
    border: 1px solid hsla(200, 98%, 48%, 1);
    background: hsla(200, 98%, 97%, 1);
    transition: all ease, 0.3s;
}
#btn-login {
    display: inline-block;
    margin: 10px 0 40px auto;
    width: 45%;
    font-size: 18px;
    line-height: 44px;
    text-align: center;
    border-radius: 3px;
    color: hsla(0, 0%, 100%, 1);
    background: hsla(200, 98%, 48%, 1);
    transition: all ease, 0.3s;
}
#btn-signin:hover, #btn-login:hover {
    cursor: pointer;
    box-shadow: 0 10px 32px -12px hsla(200, 37%, 31%, 0.5);
}

#bottom {
    display: block;
    text-align: center;
    font-size: 14px;
    letter-spacing: 4px;
    color: hsla(0, 0%, 70%, 1);
}
#bottom:hover, #bottom:visited {
    color: hsla(0, 0%, 70%, 1);
}
</style>
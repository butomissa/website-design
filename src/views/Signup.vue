<template>
<div id="signup">
    <div id="form">
        <div id="info">
            <div id="title">注册</div>
            <div id="text">A平台·统一认证平台</div>
            <img id="img" :src="img">
        </div>
        <img id="bg-logo" :src="logo">
        <div>
            <!-- IE 9 不支持 placeholder -->
            <div id="left">
                <div class="input-item" @click="putFocus(0)"> <!-- 账号 -->
                    <input type="text" class="input" id="input0" @focus="inputFocus(0)"
                    v-model.trim="input[0].data">
                    <div class="label" id="label0">{{ input[0].name }}</div>
                    <div class="placeholder" v-show="input[0].data === ''">请填写{{ input[0].name }}</div>
                    <div class="error" id="error0"/>
                </div>
                <div class="input-item" @click="putFocus(1)"> <!-- 密码 -->
                    <input type="password" class="input" id="input1" @focus="inputFocus(1)"
                    v-model.trim="input[1].data">
                    <div class="label" id="label1">{{ input[1].name }}</div>
                    <div class="placeholder" v-show="input[1].data === ''">请填写{{ input[1].name }}</div>
                    <div class="error" id="error1"/>
                </div>
                <div class="input-item" @click="putFocus(2)"> <!-- 再次填写密码 -->
                    <input type="password" class="input" id="input2" @focus="inputFocus(2)"
                    v-model.trim="input[2].data">
                    <div class="label" id="label2">{{ input[2].name }}</div>
                    <div class="placeholder" v-show="input[2].data === ''">请{{ input[2].name }}</div>
                    <div class="error" id="error2"/>
                </div>
                <div class="input-item" @click="putFocus(3)"> <!-- 联系人姓名 -->
                    <input type="text" class="input" id="input3" @focus="inputFocus(3)"
                    v-model.trim="input[3].data">
                    <div class="label" id="label3">{{ input[3].name }}</div>
                    <div class="placeholder" v-show="input[3].data === ''">请填写{{ input[3].name }}</div>
                    <div class="error" id="error3"/>
                </div>
                <div class="input-item" @click="putFocus(4)"> <!-- 身份证 -->
                    <input type="text" class="input" id="input4" @focus="inputFocus(4)"
                    v-model.trim="input[4].data">
                    <div class="label" id="label4">{{ input[4].name }}</div>
                    <div class="placeholder" v-show="input[4].data === ''">请填写{{ input[4].name }}</div>
                    <div class="error" id="error4"/>
                </div>
            </div>
            <div id="right">
                <div class="input-item" @click="putFocus(5)"><!-- 手机号码 -->
                    <input type="text" class="input" id="input5" @focus="inputFocus(5)"
                    v-model.trim="input[5].data">
                    <div class="label" id="label5">{{ input[5].name }}</div>
                    <div class="placeholder" v-show="input[5].data === ''">请填写{{ input[5].name }}</div>
                    <div class="error" id="error5"/>
                </div>
                <div class="input-item" @click="putFocus(6)"><!-- 手机验证码 -->
                    <input type="text" class="input" id="input6" @focus="inputFocus(6)"
                    v-model.trim="input[6].data">
                    <div class="label" id="label6">{{ input[6].name }}</div>
                    <div class="placeholder" v-show="input[6].data === ''">请填写{{ input[6].name }}</div>
                    <div class="btn" id="get-verify" @click="getVerify">{{ verifyText }}</div>
                    <div class="error" id="error6"/>
                </div>
                <div class="input-item" @click="putFocus(7)"><!-- 单位名称 -->
                    <input type="text" class="input" id="input7" @focus="inputFocus(7)"
                    v-model.trim="input[7].data">
                    <div class="label" id="label7">{{ input[7].name }}</div>
                    <div class="placeholder" v-show="input[7].data === ''">请填写{{ input[7].name }}</div>
                    <div class="error" id="error7"/>
                </div>
                <div class="input-item"><!-- 证件类型 -->
                    <Select class="select" :data="cert" v-model="certId" left="12" />
                    <div class="label" id="label8">{{ input[8].name }}</div>
                    <div class="error" id="error8"/>
                </div>
                <div class="input-item" @click="putFocus(9)"><!-- 证件号码 -->
                    <input type="text" class="input" id="input9" @focus="inputFocus(9)"
                    v-model.trim="input[9].data">
                    <div class="label" id="label9">{{ input[9].name }}</div>
                    <div class="placeholder" v-show="input[9].data === ''">请填写{{ input[9].name }}</div>
                    <div class="error" id="error9"/>
                </div>
            </div>
            <div id="btn-signup" class="btn" @click="signupClick()">注册账号</div>
            <a id="btn-login" class="link" href="/login">已有账号, 直接登录</a>
            <a id="btn-index" class="link" href="/">返回首页</a>
        </div>
    </div>
</div>
</template>

<script>
import Select from '@/components/Select'
export default {
    name: 'Signup',
    components: {
        Select,
    },
    mounted() {

    },
    methods: {
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
        signupClick() {
            for (let i = 0; i < 10; i++) {
                if (i != 4 && i != 8) {
                    document.getElementById("error" + i).innerText = ""
                    document.getElementById("input" + i).removeAttribute("style")
                    document.getElementById("label" + i).removeAttribute("style")
                }
                if (i === 2) {
                    if (this.input[2].data != this.input[1].data) {
                        document.getElementById("error2").innerText = "两次填写的密码不一致"
                        document.getElementById("input2").style.borderColor = "hsla(0, 88%, 60%, 1)"
                        document.getElementById("label2").style.color = "hsla(0, 88%, 60%, 1)"
                    }
                } else if (this.input[i].data === "" && i != 4 && i != 8) {
                    document.getElementById("error" + i).innerText = "请填写正确的" + this.input[i].name
                    document.getElementById("input" + i).style.borderColor = "hsla(0, 88%, 60%, 1)"
                    document.getElementById("label" + i).style.color = "hsla(0, 88%, 60%, 1)"
                }
            }
        },
    },
    data() {
        return {
            img: require("@/assets/img/signup.svg"),
            input: [
                { name: "账号", data: "" },
                { name: "密码", data: "" },
                { name: "再次填写密码", data: "" },
                { name: "联系人姓名", data: "" },
                { name: "联系人身份证号码（选填）", data: "" },
                { name: "联系人手机号码", data: "" },
                { name: "手机验证码", data: "" },
                { name: "单位/企业名称", data: "" },
                { name: "单位/企业证件类型", data: "" },
                { name: "单位/企业证件号码", data: "" },
            ],
            cert: [ "统一社会信用代码", "组织机构代码证", "其他有效证件" ],
            certId: 0,
            logo: require("@/assets/logo.svg"),
            bgLogo: require("@/assets/logoLight.svg"),
            verifyText: "获取",
        }
    },
}
</script>

<style scoped>
#signup {
    padding: calc(50vh - 300px) 0 0 calc(50vw - 490px);
    height: 100vh;
    min-height: 600px;
    width: 100vw;
    min-width: 900px;
    background: url("../assets/img/login.jpg");
    background-size: cover;
    background-position: center;
}
#form {
    position: relative;
    padding: 50px 54px 50px 360px;
    height: 600px;
    width: 980px;
    overflow: hidden;
    background: hsla(0, 0%, 100%, 1);
    animation: formShow 1s;
}
@keyframes formShow {
    0% { opacity: 0; margin-top: -20px; }
    100% { opacity: 1; margin-top: 0px; }
}
#info {
    position: absolute;
    top: 60px;
    left: 50px;
}
#title {
    font-size: 50px;
    line-height: 50px;
    letter-spacing: 1px;
    font-weight: 100;
    color: hsla(0, 0%, 13%, 1);
}
#text {
    margin: 20px 0 60px 0;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 300;
    color: hsla(0, 0%, 57%, 1);
}
#img {
    /* transform: scale(0.7); */
    width: 250px;
    height: 233px;
}
#bg-logo {
    position: absolute;
    height: 90px;
    left: -10px;
    bottom: -16px;
    opacity: 0.05;
}
#left {
    float: left;
    width: 47%;
}
#right {
    float: right;
    width: 47%;
}
.input-item {
    position: relative;
    padding: 8px 0 0 0;
    margin: 10px 0 0 0;
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
.select {
    min-height: 44px;
    height: 44px;
    width: 100%;
    border-radius: 3px;
    /* border: 1px solid hsla(0, 0%, 90%, 1); */
    /* color: hsla(0, 0%, 13%, 1); */
    box-shadow: 0px 12px 20px -16px hsla(200, 37%, 31%, 0.5);
    transition: all ease, 0.3s;
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
.option {
    padding: 2px;
    height: 44px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid hsla(0, 0%, 90%, 1);
    outline: none;
    color: hsla(0, 0%, 13%, 1);
    box-shadow: 0px 12px 20px -16px hsla(200, 37%, 31%, 0.5);
}
.option-item {
    float: left;
    width: 33.33%;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    transition: all ease, 0.3s;
}
.option-item:hover {
    color: hsla(200, 98%, 48%, 1);
}

#btn-signup {
    float: right;
    padding: 0;
    margin: 16px 0 0 auto;
    width: 240px;
    line-height: 44px;
    border-radius: 3px;
}
.link {
    float: right;
    padding: 0;
    margin: 16px 30px 0 auto;
    white-space: nowrap;
    font-size: 16px;
    line-height: 44px;
    border-radius: 3px;
}
#btn-login, #btn-login:hover, #btn-login:visited {
    color: hsla(200, 98%, 48%, 1);
}
#btn-index, #btn-index:hover, #btn-index:visited {
    color: hsla(0, 0%, 70%, 1);
}
</style>
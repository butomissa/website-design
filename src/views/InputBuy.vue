<template>
<div id="input-form">
    <Header/>
    <div id="form">
        <div class="title">{{ title }}<div class="sub-title">{{ text }}</div></div>
        <div class="input-item">
            <span class="input-title"><span class="star">*</span>购买产品</span>
            <Select :data="product" v-model="productId" style="width: calc(100% - 90px); margin: 0 0 0 90px"/>
        </div>
        <div class="error"/>
        <div class="input-item">
            <span class="input-title"><span class="star">*</span>{{ content[0].title }}</span>
            <input id="input0" class="input" @focus="inputFocus(0)" :placeholder="content[0].placeholder" v-model="content[0].data" />
        </div>
        <div class="error" id="error0"/>
        <div class="input-item">
            <span class="input-title"><span class="star">*</span>{{ content[1].title }}</span>
            <input id="input1" class="input" @focus="inputFocus(1)" :placeholder="content[1].placeholder" v-model="content[1].data" oninput="value=value.replace(/[^\d]/g,'')"/>
        </div>
        <div class="error" id="error1"/>
        <div class="input-item">
            <span class="input-title"><span class="star">*</span>{{ content[2].title }}</span>
            <input id="input2" class="input" @focus="inputFocus(2)" :placeholder="content[2].placeholder" v-model="content[2].data" />
            <div class="btn" id="get-verify" @click="getVerify">{{ verifyText }}</div>
        </div>
        <div class="error" id="error2"/>
        <div class="input-item">
            <span class="input-title"><span class="star">*</span>地市</span>
            <City v-model="cityId" style="width: calc(100% - 90px); margin: 0 0 0 90px"/>
        </div>
        <div class="error"/>
        <div class="input-item">
            <span class="input-title"><span class="star">*</span>{{ content[3].title }}</span>
            <input id="input3" class="input" @focus="inputFocus(3)" :placeholder="content[3].placeholder" v-model="content[3].data" />
        </div>
        <div class="error" id="error3"/>
        <div class="input-item">
            <span class="input-title"><p class="star"></p>{{ content[4].title }}</span>
            <input id="input4" class="input" @focus="inputFocus(4)" :placeholder="content[4].placeholder" v-model="content[4].data" />
        </div>
        <div class="error" id="error4"/>
        <div class="">
            <span class="input-title">{{ content[5].title }}</span>
            <textarea class="input" id="textarea" :placeholder="content[5].placeholder" v-model="content[5].data"></textarea>
        </div>
        <div id="btn" class="btn" @click="submitClick()">确 定</div>
    </div>
    <Footer/>
    <Float/>
    <div v-show="showAlert">
        <div id="bg"></div>
        <div id="alert">
            <div class="title">{{ alertTitle }}</div>
            <div id="alert-text">{{ alertText }}</div>
            <div id="alert-btn" class="btn" @focus="exitClick()">确 定</div>
        </div>
    </div>
</div>
</template>

<script>
import City from '@/components/City'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Float from '@/components/Float'
import Select from '@/components/Select'

export default {
    components: {
        Header, Footer, Float, City, Select,
    },
    methods: {
        submitClick() {
            this.check();
            if (!this.hasError) {
                this.showAlert = true
            }
        },
        inputFocus(index) {
            document.getElementById("input" + index).removeAttribute("style")
            document.getElementById("error" + index).innerText = ""
        },
        getVerify() {
            document.getElementById("get-verify").style.background = "hsla(0, 0%, 80%, 1)"
            document.getElementById("get-verify").style.color = "hsla(0, 0%, 97%, 1)"
            this.verifyText = "XX秒"
        },
        check() {
            this.hasError = false;
            for (var i = 0; i < 4; i++) {
                document.getElementById("error" + i).innerText = ""
                document.getElementById("input" + i).removeAttribute("style")
            }
            for (i = 0; i < this.content.length - 2; i++) {
                if (this.content[i].data === "") {
                    document.getElementById("error" + i).innerText = "请填写正确的 " + this.content[i].title
                    document.getElementById("input" + i).style.borderColor = "hsla(0, 88%, 60%, 1)"
                    this.hasError = true
                }
            }
        },
        exitClick() {
            this.showAlert = false
        }
    },
    data() {
        return {
            hasError: false, showAlert: false,
            title: "产品服务购买",
            text: "购买产品需进一步调研，请填写以下信息，专业人员会尽快与您联系",
            content: [
                { title: "联系人", placeholder: "请填写联系人姓名", data: "" },
                { title: "联系号码", placeholder: "请填写联系人号码", data: "" },
                { title: "验证码", placeholder: "请填写验证码", data: "" },
                { title: "详细地址", placeholder: "请填写详细地址，精确到门牌号", data: "" },
                { title: "单位名称", placeholder: "请填写单位名称", data: "" },
                { title: "需求描述", placeholder: "请大致描述您的需求，以便开展下一步工作", data: "" },
            ],
            product: [ "产品 0", "产品 1", "产品 2", "产品 3", "产品 4",
                    "产品 5", "产品 6", "产品 7", "产品 8", "产品 9",
                    "产品 10", "产品 11", "产品 12", "产品 13", "产品 14", ],
            productId: 0,
            cityId: [19, 0],
            verifyText: "获取",
            alertTitle: "已收到您的产品购买需求",
            alertText: "请等待需求评估，专业人员会尽快与您联系",
        }
    },
}
</script>

<style scoped>
#form {
    margin: auto;
    min-width: 500px;
    width: 35%;
    text-align: center;
}
.title {
    padding: 70px 0 0 0;
    width: 100%;
    font-size: 28px;
    font-weight: 600;
    color: hsla(0, 0%, 13%, 1);
    z-index: 2;
}
.sub-title {
    padding: 10px 0 50px 0;
    font-size: 16px;
    font-weight: 400;
    color: hsla(0, 0%, 57%, 0.7);
}

.input-item {
    height: 34px;
    margin: 0 auto;
}
.star {
    margin: auto 4px auto auto;
    color: hsla(0, 88%, 60%, 1);
}
.input-title {
    float: left;
    display: block;
    margin: 6px 10px auto auto;
    min-width: 80px;
    text-align: right;
    font-size: 16px;
    white-space: nowrap;
}
.input {
    display: inline-block;
    margin: auto;
    padding: 8px;
    height: 34px;
    width: calc(100% - 90px);
    border: 1px solid hsla(0, 0%, 90%, 1);;
    outline: none;
    transition: all ease, 0.3s;
}
#input2 {
    width: calc(100% - 230px);
}
.input:focus, .input:hover {
    border-color: hsla(200, 98%, 48%, 1);
}
.error {
    clear: both;
    margin: 2px auto 6px 100px;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    text-align: left;
    color: hsla(0, 88%, 60%, 1);
    transition: all ease, 0.3s;
}
#get-verify {
    margin: 0 auto auto 20px;
    padding: 9px 0;
    width: 120px;
    font-size: 16px;
    line-height: 16px;
    transition: all ease, 0.3s;
}
#get-verify-text {
    margin: auto;
    color: hsla(0, 0%, 100%, 1);
}
#textarea {
    margin: auto;
    resize: none;
    height: 100px;
}

#btn {
    margin: 20px auto 50px auto;
    width: 160px;
}

#bg {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: hsla(0, 0%, 0%, 0.2);
    z-index: 10011;
}
#alert {
    position: fixed;
    height: 300px;
    width: 600px;
    top: calc(50% - 150px);
    left: calc(50% - 300px);
    text-align: center;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
    z-index: 10012;
}
#alert-title {
    text-align: center;
}
#alert-text {
    margin: 20px auto 50px auto;
    font-size: 18px;
    text-align: center;
    color: hsla(0, 0%, 57%, 1);
}
#alert-btn {
    width: 140px;
}
</style>
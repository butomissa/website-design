<template>
<div ref="menu" id="menu" @click="menuClick">
    <span id="select-text" ref="selectText">{{ data[val] }}</span>
    <span ref="arrow" class="iconfont icon-arrow"/>
    <div ref="list" id="list" v-show="show">
        <div class="item" v-for="(item, index) of data" :key="index"
        @click="$emit('val-event', index)">{{ item }}</div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        data: { type: Array },
        left: { type: String, default: "8" },
        val: { type: Number, default: 0 },
    },
    model: {
        prop: "val",
        event: "val-event",
    },
    mounted() {
        document.addEventListener('click', e => {
            if (!this.$el.contains(e.target)) {
                this.show = false
                this.$refs.arrow.style.transform = "rotate(0deg)"
            }
            setTimeout(() => {
                if (this.val >= this.data.length) {
                    this.$emit('val-event', 0)
                }
            }, 10);
        })
        this.changeStyle()
    },
    methods: {
        changeStyle() {
            this.$refs.selectText.style.left = this.left + "px"
            this.$refs.arrow.style.right = this.left + "px"
            this.$refs.list.style.top = (this.$refs.menu.clientHeight - 2) + "px"
            this.$refs.list.style.lineHeight = this.$refs.menu.clientHeight + "px"
        },
        menuClick() {
            this.show = !this.show
            if ( this.show ) {
                this.$refs.arrow.style.transform = "rotate(180deg)"
            } else { this.$refs.arrow.style.transform = "rotate(0deg)" }
        },
    },
    data() {
        return {
            show: false,
        }
    },
}
</script>

<style scoped>
#menu {
    position: relative;
    height: 100%;
    width: 100%;
    text-align: left;
    font-size: 14px;
    border: 1px solid hsla(0, 0%, 90%, 1);
    transition: all ease, 0.3s;
}
#menu:hover {
    cursor: pointer;
    border-color: hsla(200, 98%, 48%, 1);
}
#menu > span {
    position: absolute;
    top: calc(50% - 7px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 14px;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}

#list {
    position: absolute;
    padding: 4px;
    max-height: 200px;
    width: 100%;
    overflow-y: auto;
    border: 1px solid hsla(0, 0%, 90%, 1);
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
    z-index: 1000;
    animation: showList 0.3s;
}
@keyframes showList {
    0% { opacity: 0; margin-top: -10px; }
    100% { opacity: 1; margin-top: 0px; }
}
.item {
    padding: 0 0 0 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all ease, 0.3s;
}
.item:hover {
    cursor: pointer;
    background: hsla(200, 98%, 48%, 1);
    color: hsla(0, 0%, 100%, 1);
}
</style>
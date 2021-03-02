<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-size: 14px; */
    font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
    text-decoration: none;
    /* color: var(--color-dark); */
}

.btn {
    display: inline-block;
    padding: 12px 0;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    white-space: nowrap;
    color: hsla(0, 0%, 100%, 1);
    background: hsla(200, 98%, 48%, 1);
    transition: all ease, 0.3s;
}
.btn:hover {
    cursor: pointer;
    color: hsla(0, 0%, 100%, 1);
    box-shadow: 0 10px 32px -12px hsla(200, 37%, 31%, 0.5);
}

/* a:hover, a:visited {
  color: hsla(200, 98%, 48%, 1);
} */

::-webkit-scrollbar-track-piece,
::-webkit-scrollbar-corner {
    background: transparent;
}
::-webkit-scrollbar{
    height: 6px;
    width: 6px;
}
::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 0%, 0.2);
    border-radius: 6px;
}
</style>
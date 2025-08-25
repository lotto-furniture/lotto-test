<template>
  <div>
    请开始作答

    <div>项目已引入 Ant Design Vue：<a-button @click="testAPI">测试请求接口数据</a-button></div>
    <div>项目已引入 Element Plus：<el-button @click="testAPI">测试请求接口数据</el-button></div>
  </div>
</template>

<script setup lang="ts">
import { API } from 'api'

function testAPI() {
  API.news.list().then(console.log)
}
</script>

<style scoped></style>

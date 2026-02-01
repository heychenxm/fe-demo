<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div id="box">
    <h1 class="msg">{{ msg }}</h1>
    <div class="count">{{ count }}</div>
  </div>
</template>

<style scoped>
  #box{
    border: 1px solid rebeccapurple;
    .msg{
      color: skyblue;
    }
    .count{
      color: red;
    }
  }
</style>

<template>
  <div class="btnlink"> 
    <NuxtLink :to="url"> 
      <p class="btnp"><Icon name="material-symbols:link" color="black" /> {{ title }}</p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  url: String
})
</script>

<style>
.btnlink {
  font-family: Rubik, sans-serif;
  font-size: 2vw;
  color: white;
  background-color: rgb(2,0,36);
  width: fit-content;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  transition: all 0.2s ease-out 100ms;
}
.btnlink:hover {
  transform: scale(1.1);
}
</style>
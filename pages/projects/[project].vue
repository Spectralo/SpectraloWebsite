<template>
  <div>
    <div class="btncontainer">
      <HomeButton />
    </div>
    <div class="containersprig">
      <ContentDoc />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style>
* {
    font-family: 'Rubik', sans-serif;
    color: white;
  }
  .containersprig {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 1.8vw;
  }
</style>
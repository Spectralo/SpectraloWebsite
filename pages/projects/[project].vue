<template>
  <div>
    <div class="btncontainer">
      <HomeButton />
    </div>
    <div class="containersprig">
      <ContentDoc/>
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
    margin-left: 10vw;
    margin-right: 10vw;
    font-size: 1.5vw;
  }
  a {
    border-bottom: 200px;
    font-size: 105%;
    transition: border-bottom 0.5s ease;
  }
  a.containersprig:hover {
    border-bottom: 20px solid #fff5bd;
  }

</style>
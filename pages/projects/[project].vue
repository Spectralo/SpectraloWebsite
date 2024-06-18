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
    text-decoration: none;
    font-weight: bold;
    transition: all 0.2s ease-out 100ms;
  }
  a:hover {
    border-bottom: 4px solid #ffffff;
  }

</style>
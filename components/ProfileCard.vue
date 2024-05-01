<template>
  <div class="profilepicture">
    <NuxtImg src="profilepicture.png" sizes="10vw" ></NuxtImg>
  </div>
</template>

<script lang="js" setup>

</script>

<style>
.profilepicture {
  background: rgb(2,0,36);
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 25px;
  padding: 10px;
  padding-bottom: 0px;
  padding-top: 20px;
  margin-right: 25px;
  transition: rotate 0.2s ease-out 100ms;
  transition: transform 0.2s ease-out 100ms
}
.profilepicture:hover {
  transform: scale(1.1);
  rotate: 10deg;
}
</style>
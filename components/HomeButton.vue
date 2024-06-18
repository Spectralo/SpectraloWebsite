<template>
  <div class="btn">
    <NuxtLink to="/">
      <p class="btnp"><Icon name="ion:arrow-back" color="black" /> Back</p>
    </NuxtLink>
</div>
</template>

<script lang="ts" setup>

</script>

<style>
.btn {
  font-family: Rubik, sans-serif;
  font-size: 2vw;
  color: white;
  background-color: rgb(2,0,36);
  width: fit-content;
  border-radius: 15px;
  padding: 15px;
  font-weight: 600;
  margin-left: 5vw;
  transition: transform 0.2s ease-out 100ms;
  margin-top: 30px;
}
.btnp {
  margin: 0;
  padding: 0%;
}
.btn:hover {
  transform: scale(1.1);
}
a {
  text-decoration: none;
  color: white;
}
</style>
<template>
  <div class="container">
    <div class="square">
      <a href="https://spectralo.itch.io/">
        <img src="~public/itchio.svg" alt="Itch.io" height="50" width="50" class="socialsvg">
      </a>
        </div>
        <div class="square">
      <a href="https://github.com/Spectralo">
        <img src="~public/github.svg" alt="Github" height="50" width="50" class="socialsvg">
      </a>
        </div>
        <div class="square">
      <a href="https://discordapp.com/users/1089086820446384158">
        <img src="~public/discord.svg" alt="Discord" height="50" width="50" class="socialsvg">
      </a>
        </div>
        <div class="square">
      <a href="mailto:arthur@spectralo.me">
        <img  class="socialsvg" src="~public/email.svg" alt="Mail" height="50" width="50">
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.socialsvg {
  fill: white;
}
.container {
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row;
  margin-right: 20px;
}
.square {
  padding-bottom: 15px;
  margin: 10px;
  background: rgb(2,0,36);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-out 100ms;
  transition: rotate 0.05s ease-out 100ms;
}
.square:hover {
  transform: scale(1.1);
  rotate: 5deg;
}
</style>
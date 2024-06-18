<template>
  <div class="container">
    <div class="square">
      <a href="https://spectralo.itch.io/" class="nounder">
        <img src="~public/itchio.svg" alt="Itch.io" height="50" width="50" class="socialsvg">
      </a>
        </div>
        <div class="square">
      <a href="https://github.com/Spectralo" class="nounder">
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
  margin-top: 8vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  transition: all 0.2s ease-out 100ms;
}
.square {
  padding-bottom: 15px;
  margin: 10px;
  background: rgb(2,0,36);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  transition: transform 0.1s ease-out 100ms;
  transition: rotate 0.05s ease-out 100ms;
}
.square:hover {
  transform: scale(1.1);
  rotate: 5deg;
}
.container:hover {
  background: rgba(0, 0, 0, .3);    /*  10% opaque green */ ;
  border-radius: 15px;
}
</style>
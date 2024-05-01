<template>
  <div class="pattern">
  </div>
  <div class="column">
    <div class="nameandimg">
      <ProfileCard />
      <NameCard />
    </div>
    <SubtitleSpectralo/>
    <div class="myprojects">
      <h1>My Projects</h1>
    </div>
    <ProjectsMiniGallery/>
  </div>
  <SocialSquares/>
</template>

<script lang="js" setup>

</script>

<style>
body {
  width: 100%;
  background-color: #183D3D;
}
* {
  font-family: Rubik, sans-serif;
}
.nameandimg {
  margin-top: 4vw;
  display: inline-flex;
  justify-content: start;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
.column {
  display: flex;
  flex-direction: column;
  margin-left: 4vw;
}
.pattern {
  position: absolute;
  width: 100%;
  height: 12vh;
  background-color: #e5e5f7;
  background: repeating-linear-gradient( -45deg, #000 0px, #000 10px, #333 12px, #333 22px, #000 24px);
  z-index: -1;
  margin: 0;
}
.myprojects {
  margin-top: 1vw;
  background-color: rgb(2,0,36);
  display: flex;
  justify-content: start;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: fit-content;
}

/* CSS Reset */

html, body {
  margin: 0;
  padding: 0;
}


</style>
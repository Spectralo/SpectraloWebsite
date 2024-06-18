<template>
  <div class="subtitle">
   <p>A 14yrs old <em class="subtitleitalic">developper</em>. I love Linux, making stupid games with Godot and scripting in Python (I need to learn Rust)</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.subtitle {
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-size: 140%;
  color: white;
  margin-top: 0.5vw;
  font-weight: 700;
  margin-left: 2vw;
  margin-right: 40vw;
}
em.subtitleitalic {
  color: #fff5bd;
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  font-style: normal;
  transition: text-decoration-color 300ms;
  font-size: 103%;
}
em.subtitleitalic:hover {
  text-decoration-color: rgba(255, 245, 189, 1);
}

</style>
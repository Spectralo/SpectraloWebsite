<template>
  <div>
    <ContentNavigation v-slot="{ navigation }">
      <ul class="gallerylist">
        <li class="gallery" v-for="item in contentQuery" :key="item.id">
          <div class="containerprojects">
          <NuxtLink :to="item._path" class="link">
          <NuxtImg :src="item.img" :alt="item.title" width="200px" height="200" class="projectimg"/>
          <p class="project">{{ item.title }}</p>
          </NuxtLink>
          </div>
        </li>
      </ul>
    </ContentNavigation>
  </div>
</template>

<script lang="ts" setup>
const contentQuery = await queryContent('projects').find()
</script>

<style>
  li.gallery {
    list-style-type: none;
    font-size: 20px;
    margin-top: 1vw;
    margin-left: 2vw;
    font-weight: 700;
    background-color: #FFFFFF;
    padding: 20px;      
    border-radius: 10px;
    transition: rotate 0.2s ease-out 100ms;

  }
  .gallerylist {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
  li.gallery:hover {
    transform: scale(1.1);
    rotate: 5deg;
  }
  p.project {
    text-decoration: none;
    color: #000000;
    font-family: Rubik, sans-serif;
    justify-content: center;
  }
  .containerprojects {
    display: flex;
    flex-direction: column;
    align-items: center;
    word-wrap: break-word;
    width: 210px;
  }
  .link {
    padding-top: 2vh;
  }
  .projectimg {
    border-radius: 10px;
    transition: border-radius 0.2s ease-out 100ms;
  }
  .projectimg:hover {
    border-radius: 100px;
  }
</style>
<template>
  <div>
    <ContentNavigation v-slot="{ navigation }">
      <ul class="gallerylist">
        <li class="gallery" v-for="item in contentQuery" :key="item.id">
          <div class="containerprojects">
          <NuxtImg src="/img/a.jpg" :alt="item.title" width="200" height="200" />
          <NuxtLink :to="item._path" class="link">
            {{ item.title }}
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
    rotate: 10deg;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
  .containerprojects {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .link {
    padding-top: 2vh;
  }
</style>
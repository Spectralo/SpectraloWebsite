<template>
  <div>
    <ContentNavigation v-slot="{ navigation }">
      <ul class="gallerylist">
        <li class="gallery" v-for="item in contentQuery" :key="item.id">
          <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
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
    font-size: 1.5vw;
    margin-top: 1vw;
    margin-left: 2vw;
    font-weight: 700;
    background-color: #FFFFFF;
    padding: 1vw;
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
</style>
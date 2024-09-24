<script setup>
const { blogPosts } = useConstants();
useHead({
  title: "Web Developer Portfolio | Blog",
  meta: [
    {
      property: "og:title",
      content: "Web Developer Portfolio | Blog",
    },
    {
      property: "og:site_name",
      content: "Web Developer Portfolio | Blog",
    },
    {
      property: "og:site",
      content: "https://my-portfolio-7e81f.web.app/blog",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="bg-white dark:bg-[#121212]">
      <div class="max-w-4xl mx-auto px-4">
        <br>
        <h1 class="text-4xl font-bold mb-8 text-center">Blog Articles</h1>
        <CardsBlogCard
            v-for="post in blogPosts"
            :key="post"
            :blog="post"
          />
      </div>
    </div>
    <br> <br> <br>
  </NuxtLayout>
</template>

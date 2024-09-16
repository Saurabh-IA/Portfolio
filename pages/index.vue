<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Web Developer Portfolio | Saurabh Singh",
  author: {
    "@type": "Person",
    "@id": "#saurabh",
  },
  url: "",
  description:
    "Personal Portfolio Website. Hi, I am Saurabh Singh. ",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Saurabh Singh",
  image: "",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#saurabh",
  name: "Saurabh Singh",
  email: "saurabhsingh.iitmandi@gmail.com",
  url: "https://my-portfolio-7e81f.web.app/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>

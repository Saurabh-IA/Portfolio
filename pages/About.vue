<script setup>
//const
const { hobbies, timeline } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "https://www.eazypau.com/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="about-section">
      <Profile />
      <div class="empty-left-content"></div>
      <div class="right-content">
        <section>
          <h2>About</h2>
          <p class="mt-2">
            I am Saurabh Singh, a Software Engineer with over 3 years of
            experience. I got my Bachelor's degree from the Indian Institute of
            Technology Mandi in 2021. Currently, I work at
            <a
              class="font-bold text-red-600 dark:text-red-300 hover:underline"
              href="https://www.internetacademy.jp/"
              target="_blank"
              >Internet Academy</a
            >
            Tokyo, where I am responsible for the development, deployment, and
            maintenance of the company's corporate platform and Learning
            Management System (LMS), which serves nearly 10,000 daily users.
            Previously, I worked as a Senior Analyst at eClerx Services Ltd.,
            where I was responsible for developing various applications for our
            clients. I focus on creating impactful systems that enhance user
            experiences and streamline business operations.
          </p>
          <p class="mt-2">
            I'm passionate in learning new technologies, building responsive
            websites, and documenting my working process when it comes to
            complicated features.
          </p>
          <p class="mt-2">
            Here are a few technologies I've been working with recently:
          </p>

          <div class="flex gap-10 mt-2 pl-3">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>NuxtJs</li>
              <li>Vue</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>Nodejs</li>
              <li>Python/Django</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Career Timeline</h2>
          <CardsCareer
            v-for="career in timeline"
            :key="career"
            :career-details="career"
          />
        </section>

        <HobbySection :hobbies="hobbies" />
      </div>
    </div>
  </NuxtLayout>
</template>

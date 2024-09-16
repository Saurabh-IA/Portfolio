<script setup>
const props = defineProps({
  blog: {
    type: Object,
    default() {
      return {};
    },
  },
});

// Reactive variable to control the toggle state
import { ref } from "vue";
const isCollapsed = ref(true);

// Function to toggle content visibility
const toggleContent = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div
    class="relative bg-white dark:bg-[#1c1c1c] border border-white hover:border-gray-600 dark:border-[#1c1c1c] dark:hover:border-white rounded shadow-lg mt-8 transition ease-out duration-300"
  >
    <div class="w-full absolute -top-10">
      <!-- Optional: Add any decorative elements or placeholders here -->
    </div>
    <div class="p-5 text-gray-900 dark:text-gray-100">
      <div class="flex flex-col md:flex-row justify-between">
        <h3 class="text-2xl font-semibold mb-2  whitespace-wrap w-full md:w-4/5 overflow-hidden">{{ blog.title }}</h3>
      <button
        @click="toggleContent"
        class="text-blue-500 hover:text-blue-700 dark:text-blue-400 mb-4 transition duration-200"
      >
        {{ isCollapsed ? 'Show Content' : 'Hide Content' }}
      </button>
      </div>
      
      <p class="text-gray-500 dark:text-gray-400 mb-4">{{ blog.date }}</p>
      
      <!-- Toggle button to show/hide content -->
      

      <!-- Collapsible content -->
      <p
        v-if="!isCollapsed"
        class="text-lg transition-opacity duration-300 ease-in-out"
      >
        {{ blog.content }}
      </p>
    </div>
  </div>
</template>

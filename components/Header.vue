<template>
  <header class="headerHeight">
    <TransitionGroup name="list" tag="div" class="header-bg">
      <img
        :class="showBgImg ? 'opacity-100' : 'opacity-0'"
        src="/red-blue.jpg"
        width="1920"
        height="1280"
        alt="blue red fusion"
      />
    </TransitionGroup>
    <div class="content" :class="showContent ? 'opacity-100' : 'opacity-0'">
      <h1 class="leading-3">
        <span class="text-3xl md:text-3xl font-semibold">{{
          introObj.lineOne
        }}</span>
        <br />
        <span class="text-2xl md:text-2xl font-medium">{{
          introObj.lineTwo
        }}</span>
        <br />
        <span class="text-xl md:text-xl">{{ introObj.lineThree }}</span>
      </h1>
    </div>
  </header>
</template>
<script setup>
// const loading = ref(true);
const columns = ref([]);
const counter = ref(0);
const numOfColumns = ref(4);
const currentLeftPosition = ref(20);
const width = 2;
const typeSpeed = 100;
const columnSpeed = 100;
const rectangDelay = ref(1300);
const typeWriterDelay = ref(2800);
const contentContainerDelay = ref(2500);
const showBgImg = ref(false);
const showContent = ref(false);
const isMobile = ref(false);
const { enabled } = useTheme();
const { transitionCompletedOnce } = useTransitionTracking();

const i = ref(0);
const j = ref(0);
const introObj = ref({
  lineOne: "",
  lineTwo: "",
  lineThree: "",
});
const intro = [
  "Saurabh Singh",
  "Software Developer",
  "I specialize in building user-centric web applications, content management tools, and solutions that address real-world challenges.",
];

const addColumns = () => {
  if (counter.value < numOfColumns.value) {
    const positionY = 0;
    const styling = `height: 100%; width: ${width}%; top: ${positionY}; left: ${currentLeftPosition.value}%`;
    columns.value.push(styling);
    currentLeftPosition.value += 20;
    counter.value++;
    setTimeout(addColumns, columnSpeed);
  }
};

const typeWriter = () => {
  const currentLine =
    j.value === 0 ? "lineOne" : j.value === 1 ? "lineTwo" : "lineThree";
  
  if (j.value < 2) { // Only apply typing animation for the first two lines
    if (i.value < intro[j.value].length) {
      introObj.value[currentLine] += intro[j.value][i.value];
      i.value++;
      setTimeout(typeWriter, typeSpeed);
    } else {
      if (j.value < 1) i.value = 0; // Reset for the next line
      j.value++;
      if (j.value < 2) setTimeout(typeWriter, typeSpeed);
      else { // Skip typing for the third line, set it immediately
        introObj.value.lineThree = intro[2];
      }
    }
  }
};

const assignDelayAmount = () => {
  if (window.innerWidth < 500) {
    isMobile.value = true;
    if (enabled.value) {
      contentContainerDelay.value = 800;
      typeWriterDelay.value = 1100;
    } else {
      rectangDelay.value = 0;
      contentContainerDelay.value = 1200;
      typeWriterDelay.value = 1500;
    }
  } else {
    if (enabled.value) {
      rectangDelay.value = 0;
      contentContainerDelay.value = transitionCompletedOnce.value ? 800 : 2100;
      typeWriterDelay.value = transitionCompletedOnce.value ? 1100 : 2400;
    } else {
      rectangDelay.value = transitionCompletedOnce.value ? 0 : 1300;
      contentContainerDelay.value = transitionCompletedOnce.value ? 1200 : 2500;
      typeWriterDelay.value = transitionCompletedOnce.value ? 1500 : 2800;
    }
  }
};

const triggerRevealBackground = () => {
  if (counter.value === 4 && !enabled.value) {
    setTimeout(() => {
      showBgImg.value = true;
    }, 200);
  } else if (enabled.value) {
    const delay = transitionCompletedOnce.value
      ? 300
      : isMobile.value
      ? 500
      : 1200;
    setTimeout(() => {
      showBgImg.value = true;
    }, delay);
  }
};

watchEffect(() => {
  triggerRevealBackground();
});

onMounted(() => {
  assignDelayAmount();
  setTimeout(() => {
    addColumns();
  }, rectangDelay.value);
  triggerRevealBackground();
  setTimeout(() => {
    showContent.value = true;
  }, contentContainerDelay.value);
  setTimeout(() => {
    typeWriter();
  }, typeWriterDelay.value);
  // loading.value = false;
  // Promise.all([addSquare(), typeWriter()]);
});
</script>
<style lang="scss" scoped>
.headerHeight {
  height: calc(100vh - 70px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>

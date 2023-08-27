<script setup lang="ts">
import { computed, ref, onBeforeMount, onMounted, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content = await queryContent("/content").findOne();

const shadowSlideIndex = ref(0);
const slideIndex = ref(-1);
const data = computed(() => content.cases[slideIndex.value]);
const duration = 0.3;

let iconLinks = {};

let processing = false;
let quarter = 0;
let iconsContainer = null;
let icons = null;
let iconsArray = null;

watch(shadowSlideIndex, (nextIndex, prevIndex) => {
  processing = true;
  console.log("prevIndex", prevIndex);
  console.log("nextIndex", nextIndex);
  const prevData = content.cases[prevIndex];
  const nextData = content.cases[nextIndex];

  for (const key in iconLinks) {
    iconLinks[key].kill();
  }

  iconLinks = {};
  animation({
    arr: iconsArray,
    isScrollTrigger: false,
    isIn: false,
    onComplete: () => {
      slideIndex.value = nextIndex;
      animation({
        arr: iconsArray,
        isScrollTrigger: false,
        isIn: true,
        onComplete: () => (processing = false),
      });
    },
  });
});

const nextSlide = () => {
  if (processing) {
    return;
  }

  if (shadowSlideIndex.value < content.cases.length - 1) {
    shadowSlideIndex.value += 1;
  } else {
    shadowSlideIndex.value = 0;
  }
};
const prevSlide = () => {
  if (processing) {
    return;
  }

  if (shadowSlideIndex.value > 0) {
    shadowSlideIndex.value -= 1;
  } else {
    shadowSlideIndex.value = content.cases.length - 1;
  }
};

const animation = ({
  arr,
  isScrollTrigger,
  isIn = false,
  onComplete = () => {},
}) => {
  const shift = 20;
  arr.forEach((icon, index) => {
    gsap.fromTo(
      icon,
      { x: quarter * index, y: isIn ? 500 : 0 },
      {
        ...{ x: quarter * index - shift, y: isIn ? 0 : 500 },
        ...(isScrollTrigger
          ? {
              scrollTrigger: {
                trigger: iconsContainer,
                scrub: true,
                start: "top 85%",
                end: "top 60%",
                immediateRender: false,
                // markers: true,
              },
            }
          : { duration }),
        onComplete() {
          this.kill();
          onComplete();

          if (isIn === false) {
            return false;
          }

          const x = this.vars.x;
          const y = this.vars.y;

          iconLinks[index] = gsap.to(icon, {
            x: `random(${x - 10}, ${x + 10}, 5)`,
            y: `random(${y - 10}, ${y + 10}, 5)`,
            duration: 1,
            ease: "none",
            repeat: -1,
            yoyo: true,
          });
        },
      },
    );
  });

  const title = document.querySelector(".container-four .title");
  const text = document.querySelector(".container-four .description");

  gsap.fromTo(
    [title, text],
    {
      opacity: isIn ? 0 : 1,
      y: isIn ? 50 : 0,
      duration,
      ease: "power2.inOut",
    },
    {
      opacity: isIn ? 1 : 0,
      y: isIn ? 0 : 50,
      duration,
      ease: "power2.inOut",
    },
  );
};

onBeforeMount(() => {
  slideIndex.value = shadowSlideIndex.value;
});

onMounted(() => {
  iconsContainer = document.querySelector(".icons-container");
  icons = iconsContainer.querySelectorAll(".icon");
  iconsArray = Array.from(icons);

  quarter = iconsContainer?.clientWidth / 4;

  animation({ arr: iconsArray, isScrollTrigger: true, isIn: true });

  const container = document.querySelector(".container-four");
  gsap.set(".container-four .ball", {
    x: `random(0, ${container?.clientWidth}, 5)`,
    y: `random(0, ${container?.clientHeight}, 3)`,
  });
  const tl = gsap.timeline().to(".container-four .ball", {
    x: `random(0, ${container?.clientWidth}, 5)`,
    y: `random(0, ${container?.clientHeight}, 3)`,
    duration: 10,
    ease: "none",
    repeat: -1,
    repeatRefresh: true,
  });
});
</script>

<template>
  <div
    v-if="data"
    :style="`background-color: ${data.bgColor}`"
    :class="`container-four relative overflow-hidden w-full h-[710px] py-[50px]`"
  >
    <div v-for="(ball, i) in data.balls" :key="i" class="ball absolute">
      <img :src="ball.path" alt="" />
    </div>

    <div
      class="title text-[40px] font-bold text-center mb-[30px] text-[#505050]"
    >
      {{ data.title }}
    </div>

    <div
      class="description w-[80%] bg-white py-[28px] px-[2%] mb-10 overflow-auto mx-auto flex"
    >
      <div class="logo w-[134px] mr-3">
        <img :src="data.logo.path" alt="" />
      </div>
      <div class="text w-[80%] flex">
        <p class="my-auto">{{ data.description }}</p>
      </div>
    </div>

    <div class="icons-container relative w-[80%] h-[50%] mx-auto">
      <div v-for="(icon, i) in data.icons" :key="i" class="icon absolute">
        <img :src="icon.path" alt="" />
      </div>
    </div>

    <div
      v-if="content.cases.length > 1"
      class="buttons absolute flex right-[40px] bottom-[20px]"
    >
      <div
        class="btn flex w-[50px] h-[50px] cursor-pointer bg-[#ffd9dd] rounded-full mr-[30px]"
        @click="prevSlide"
      >
        <img src="/images/chevron-left.svg" alt="" class="w-5 h-5 m-auto" />
      </div>

      <div
        class="btn flex w-[50px] h-[50px] cursor-pointer bg-[#ffd9dd] rounded-full"
        @click="nextSlide"
      >
        <img src="/images/chevron-right.svg" alt="" class="w-5 h-5 m-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.description {
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
}
.btn {
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.15));
}
</style>

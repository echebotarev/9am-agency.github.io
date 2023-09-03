<script setup lang="ts">
import { onMounted } from "vue";
import Button from "~/components/common/Button.vue";
import VideoContainer from "~/components/common/VideoContainer.vue";

import gsap from "gsap";

const content = await queryContent("/content").findOne();

const getRadian = (deg: number) => (deg * Math.PI) / 180;
const getTanDeg = (deg: number) => {
  const rad = getRadian(deg);
  return Math.tan(rad);
};

const cornerDeg = 3;

onMounted(() => {
  const container = document.querySelector(".videos");
  const topVideos = gsap.utils.toArray(
    document.querySelectorAll(".first .video"),
  );

  topVideos.forEach((video: HTMLElement) => {
    const rect = video.getBoundingClientRect();

    gsap.fromTo(
      video,
      {
        x: window.innerWidth,
        y: (window.innerWidth + rect.x) * getTanDeg(cornerDeg),
        rotation: cornerDeg,
        ease: "power2.out",
      },
      {
        x: 0,
        y: rect.x * getTanDeg(cornerDeg),
        rotation: cornerDeg,
        scrollTrigger: {
          trigger: container,
          scrub: true,
          start: "top 80%",
          end: "top 55%",
          immediateRender: false,
          // markers: true,
        },
      },
    );
  });

  const bottomVideos = gsap.utils.toArray(
    document.querySelectorAll(".second .video"),
  );

  bottomVideos.forEach((video: HTMLElement) => {
    const rect = video.getBoundingClientRect();

    gsap.fromTo(
      video,
      {
        x: -window.innerWidth,
        y: -window.innerWidth * getTanDeg(cornerDeg),
        rotation: cornerDeg,
        ease: "power2.out",
      },
      {
        x: 0,
        y: rect.x * getTanDeg(cornerDeg),
        rotation: cornerDeg,
        scrollTrigger: {
          trigger: container,
          scrub: true,
          start: "top 80%",
          end: "top 55%",
          immediateRender: false,
          // markers: true,
        },
      },
    );
  });

  const containerBalls = document.querySelector(".container-five");
  const tl = gsap.timeline().to(".container-five .ball", {
    x: `random(0, ${containerBalls?.clientWidth}, 5)`,
    y: `random(0, ${containerBalls?.clientHeight - 100}, 3)`,
    duration: 10,
    ease: "none",
    repeat: -1,
    repeatRefresh: true,
  });
});
</script>

<template>
  <div class="container-five relative pt-[100px]">
    <img
      v-for="b in content.cases[3]?.balls"
      :src="b.path"
      alt=""
      class="absolute ball"
    />
    <img
      v-for="b in content.cases[3]?.balls"
      :src="b.path"
      alt=""
      class="absolute ball"
    />
    <Button class="mb-[80px]">Заказать услугу</Button>

    <h1 class="text-[64px] font-bold text-center mb-[30px]">
      Video Production
    </h1>
    <p class="text-xl px-[120px] mb-[70px] text-center">
      Мы - ваш надежный партнер в создании видео контента, который искренне
      трогает сердца аудитории. Объединяем профессионализм и страсть к
      искусству, чтобы каждый проект стал уникальным. Ваше видео будет не просто
      материалом, а живой историей и настоящим путешествием вашего бренда.
    </p>

    <h1 class="text-[64px] font-bold text-center mb-[30px]">Наши работы</h1>

    <div class="videos relative px-3">
      <div class="grid grid-cols-6 gap-1 first mb-2">
        <div
          v-for="(v, index) in content.videos.items.filter(
            (v: any) => v.position === 0,
          )"
          :key="index"
          class="video aspect-video"
        >
          <VideoContainer :src="v.url" />
        </div>
      </div>

      <div class="grid grid-cols-6 gap-1 second">
        <div
          v-for="(v, index) in content.videos.items.filter(
            (v: any) => v.position === 1,
          )"
          :key="index"
          class="video aspect-video"
        >
          <VideoContainer :src="v.url" />
        </div>
      </div>
    </div>

    <div class="main-video mt-[100px]">
      <VideoContainer
        :src="content.videos.main.url"
        :controls="content.videos.main.controls"
        width="560"
        height="315"
        class="mx-auto"
      />

      <Button class="mt-[80px] mb-[50px]">Заказать услугу</Button>
    </div>
  </div>
</template>

<style scoped>
.video {
  border-radius: 4px;
  overflow: hidden;
}
</style>

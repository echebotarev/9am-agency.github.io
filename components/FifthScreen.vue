<script setup lang="ts">
import { onMounted } from "vue";
import Button from "~/components/common/Button.vue";

import gsap from "gsap";

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
});
</script>

<template>
  <div class="pt-[100px]">
    <Button />

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

    <div class="videos relative px-3 w-[1000px]">
      <div class="grid grid-cols-6 gap-1 first mb-2">
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
      </div>

      <div class="grid grid-cols-6 gap-1 second">
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
        <div class="video aspect-video bg-[purple]"></div>
      </div>
    </div>

    <div class="main-video mt-[100px]">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/F4W3vndSOZQ?si=ePAzgJBTPiRIMwfC"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="mx-auto"
      ></iframe>

      <Button class="mt-[80px]" />
    </div>
  </div>
</template>

<style scoped></style>

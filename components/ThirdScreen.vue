<script setup lang="ts">
import ButtonsSlide from "~/components/common/ButtonsSlide.vue";

const content = await queryContent("/content").findOne();
const { isMobile } = useDevice();

const slideIndex = ref(0);
const step = 24;
const prev = () => {
  if (slideIndex.value > step) {
    slideIndex.value -= step;
  } else {
    slideIndex.value = content.images.length - step;
  }
};
const next = () => {
  if (slideIndex.value < content.images.length - step) {
    slideIndex.value += step;
  } else {
    slideIndex.value = 0;
  }
};
</script>

<template>
  <div class="relative top-[70px] pb-[50px]">
    <h1
      :class="`text-[64px] font-bold text-center mb-[30px] ${
        isMobile ? 'leading-[60px]' : ''
      }`"
    >
      Наши клиенты
    </h1>

    <div v-if="isMobile" class="relative">
      <div class="w-full flex flex-row flex-wrap px-5">
        <img
          v-for="(img, i) in content.images.slice(
            slideIndex,
            slideIndex + step,
          )"
          :key="i"
          :src="img.path"
          alt=""
          class="m-auto"
        />
      </div>
      <ButtonsSlide
        class="relative flex justify-center mt-5"
        @prev="prev"
        @next="next"
      />
    </div>
    <div v-else class="w-full flex flex-row flex-wrap px-5">
      <img
        v-for="(img, i) in content.images"
        :key="i"
        :src="img.path"
        alt=""
        class="m-auto"
      />
    </div>

    <h1 id="smm" class="text-[64px] font-bold text-center my-[30px]">SMM</h1>
    <p class="text-xl px-[120px] mb-[70px] text-center">
      Взлетайте выше с нами! Раскрывайте свой бренд и захватывайте сердца вашей
      аудитории. Вместе, мы создадим потрясающие истории, которые никогда не
      будут забыты. Подарите своей компании заботу и вдохновение!
    </p>
  </div>
</template>

<style scoped></style>

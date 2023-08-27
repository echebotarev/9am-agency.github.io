<script setup lang="ts">
const content = await queryContent("/content").findOne();
</script>

<template>
  <div class="relative top-[70px] pb-[50px]">
    <h1 class="text-[64px] font-bold text-center mb-[30px]">Наши клиенты</h1>

    <div class="w-full flex flex-row flex-wrap px-5">
      <img
        v-for="(img, i) in content.images"
        :key="i"
        :src="img.path"
        alt=""
        class="m-auto"
      />
    </div>

    <h1 class="text-[64px] font-bold text-center my-[30px]">SMM</h1>
    <p class="text-xl px-[120px] mb-[70px]">
      Взлетайте выше с нами! Раскрывайте свой бренд и захватывайте сердца вашей
      аудитории. Вместе, мы создадим потрясающие истории, которые никогда не
      будут забыты. Подарите своей компании заботу и вдохновение!
    </p>
  </div>
</template>

<style scoped></style>

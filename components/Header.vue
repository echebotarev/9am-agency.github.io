<script setup lang="ts"></script>

<template>
  <div class="fixed top-5 left-0 z-10 w-full">
    <div class="absolute left-4">
      <img src="/images/logo.svg" alt="9am Agency" />
    </div>

    <div class="flex h-[70px] justify-end">
      <div class="links my-auto font-semibold">
        <nuxt-link class="mr-10">SMM</nuxt-link>
        <nuxt-link class="mr-10">Видеопродакшен</nuxt-link>
        <nuxt-link class="mr-10">О нас</nuxt-link>
        <nuxt-link class="mr-10">Контакты</nuxt-link>
      </div>

      <a
        href="tel:+373060320713"
        class="rounded-full flex my-auto mr-10 bg-white px-8 py-3.5"
      >
        <img src="/images/call.svg" alt="" class="w-6 h-6 mr-2.5" />
        <div class="font-medium">060 320 713</div>
      </a>

      <!--      <div class="w-[65px]">
        <v-select
          :items="['RU', 'ROM', 'EN']"
          density="compact"
          variant="plain"
          label="RU"
          single-line
          solo
        ></v-select>
      </div>-->
    </div>
  </div>
</template>

<style scoped></style>

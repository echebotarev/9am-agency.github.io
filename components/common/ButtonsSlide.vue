<script setup lang="ts"></script>

<template>
  <div>
    <div
      class="btn flex w-[50px] h-[50px] cursor-pointer bg-[#ffd9dd] rounded-full mr-[30px]"
      @click="$emit('prev')"
    >
      <img src="/images/chevron-left.svg" alt="" class="w-5 h-5 m-auto" />
    </div>

    <div
      class="btn flex w-[50px] h-[50px] cursor-pointer bg-[#ffd9dd] rounded-full"
      @click="$emit('next')"
    >
      <img src="/images/chevron-right.svg" alt="" class="w-5 h-5 m-auto" />
    </div>
  </div>
</template>

<style scoped></style>

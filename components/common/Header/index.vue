<script setup lang="ts">
import HeaderDesktop from "~/components/common/Header/HeaderDesktop.vue";
import HeaderMobile from "~/components/common/Header/HeaderMobile.vue";
</script>

<template>
  <header-mobile v-if="$device.isMobile" />
  <header-desktop v-else />
</template>

<style scoped></style>

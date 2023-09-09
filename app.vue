<script setup lang="ts"></script>

<template>
  <div :class="$device.isMobile ? 'mobile' : 'desktop'">
    <NuxtPage />
  </div>
</template>

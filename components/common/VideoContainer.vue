<script setup lang="ts">
interface Props {
  src: string;
  controls: boolean;
  width: number | string;
  height: number | string;
}
const props = withDefaults(defineProps<Props>(), {
  src: "",
  controls: false,
  width: "100%",
  height: "100%",
});
</script>

<template>
  <iframe
    :width="props.width"
    :height="props.height"
    :src="`${props.src}${!props.controls ? ';controls=0' : ''}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>

<style scoped></style>

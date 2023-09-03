<script setup lang="ts">
interface Props {
  src: string;
  poster?: string;
  controls?: boolean;
  width?: number | string;
  height?: number | string;
}
const props = withDefaults(defineProps<Props>(), {
  src: "",
  controls: false,
  width: "100%",
  height: "100%",
});

const video = ref<HTMLIFrameElement | null>(null);

const isShow = ref(false);
const runVideo = () => {
  isShow.value = true;
  video.play();
};
</script>

<template>
  <div @click="runVideo">
    <div v-if="!isShow && props.poster">
      <img :src="props.poster" alt="" />
      <img
        src="/images/play.svg"
        alt=""
        class="play absolute bottom-0 right-2"
      />
    </div>
    <iframe
      v-else
      ref="video"
      :width="props.width"
      :height="props.height"
      :src="`${props.src}${!props.controls ? ';controls=0' : ''}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.play {
  transform: rotate(-3deg);
}
</style>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, computed } from "vue";
import { gsap } from "gsap";
import { useEventListener } from "@vueuse/core";

const { isMobile } = useDevice();

const mainScreen = ref<HTMLElement | null>(null);

const shift = ref<number>(48);
const shiftX = ref<number>(0);
const shiftY = ref<number>(0);

let width = 0;
let height = 0;

onBeforeMount(() => {
  useEventListener("mouseup", onMouseEnd);

  width = document.body.getBoundingClientRect().width;
});

onMounted(() => {
  height = mainScreen.value?.getBoundingClientRect().height || 0;

  gsap.to(shiftX, {
    value: width / 2,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
  });
  gsap.to(shiftY, {
    value: height / 2,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
  });
  gsap.to(shift, {
    value: 50,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
  });

  shiftX.value = width * (shift.value / 100);
  shiftY.value = height * (shift.value / 100);
});

let isMouseDown = false;
const onMouseStart = (e: MouseEvent) => {
  isMouseDown = true;
  width = document.body.getBoundingClientRect().width;
};
const onTouchStart = (e: TouchEvent) => {
  isMouseDown = true;
  height = mainScreen.value?.getBoundingClientRect().height || 0;
};

const onMouseEnd = (e: MouseEvent) => {
  isMouseDown = false;
};
const onTouchEnd = (e: TouchEvent) => {
  isMouseDown = false;
};

const onMouseMove = (e: MouseEvent) => {
  if (!isMouseDown) return;

  const { clientX } = e;
  shift.value = (clientX / width) * 100;
  shiftX.value = clientX;
};
const onTouchMove = (e: TouchEvent) => {
  if (!isMouseDown) return;
  e.preventDefault();

  const hRect = mainScreen.value?.getBoundingClientRect() || {};
  const { clientY } = e.touches[0];

  const y = clientY - hRect.top;
  if (y >= hRect.height || y <= 0) {
    return false;
  }

  shift.value = (y / height) * 100;
  shiftY.value = y;
};
</script>

<template>
  <div
    ref="mainScreen"
    class="main-screen comparisonSection w-full"
    @mousemove="onMouseMove"
    @touchmove="onTouchMove"
  >
    <div class="comparisonImage absolute before">
      <img
        :src="
          isMobile
            ? '/images/mobile-image-before.jpg'
            : '/images/desktop-image-before.png'
        "
        alt=""
      />
    </div>
    <div
      class="comparisonImage after"
      :style="
        isMobile
          ? `transform: translate(0%, ${shift}%) translate3d(0px, 0px, 0px);`
          : `transform: translate(${shift}%, 0%) translate3d(0px, 0px, 0px);`
      "
    >
      <img
        :src="
          isMobile
            ? '/images/mobile-image-after.jpg'
            : '/images/desktop-image-after.png'
        "
        alt=""
        :style="
          isMobile
            ? `transform: translate(0%, -${shift}%) translate3d(0px, 0px, 0px);`
            : `transform: translate(-${shift}%, 0%) translate3d(0px, 0px, 0px);`
        "
      />
    </div>

    <div
      v-if="isMobile"
      class="divider absolute w-full h-1 left-0 bg-white"
      :style="`transform: translate(0px, ${shiftY}px);`"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div
        class="ball flex justify-center flex-col relative w-[60px] h-[60px] rounded-full bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          class="arrow-left rotate-90 mx-auto"
        >
          <path
            d="M5.76277 9.26273L12.7628 2.26273C13.0928 1.94395 13.5349 1.76756 13.9937 1.77155C14.4526 1.77554 14.8915 1.95958 15.216 2.28405C15.5404 2.60851 15.7245 3.04743 15.7284 3.50628C15.7324 3.96512 15.556 4.40718 15.2373 4.73723L9.47452 10.5L15.2373 16.2627C15.556 16.5928 15.7324 17.0348 15.7284 17.4937C15.7245 17.9525 15.5404 18.3914 15.216 18.7159C14.8915 19.0404 14.4526 19.2244 13.9937 19.2284C13.5349 19.2324 13.0928 19.056 12.7628 18.7372L5.76277 11.7372C5.4347 11.4091 5.25039 10.964 5.25039 10.5C5.25039 10.0359 5.4347 9.5909 5.76277 9.26273Z"
            fill="black"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          class="arrow-right rotate-90 mx-auto"
        >
          <path
            d="M15.2372 9.26273L8.23723 2.26273C7.90718 1.94395 7.46512 1.76756 7.00628 1.77155C6.54743 1.77554 6.10851 1.95958 5.78405 2.28405C5.45958 2.60851 5.27554 3.04743 5.27155 3.50628C5.26756 3.96512 5.44395 4.40718 5.76273 4.73723L11.5255 10.5L5.76273 16.2627C5.44395 16.5928 5.26756 17.0348 5.27155 17.4937C5.27554 17.9525 5.45958 18.3914 5.78405 18.7159C6.10851 19.0404 6.54743 19.2244 7.00628 19.2284C7.46512 19.2324 7.90718 19.056 8.23723 18.7372L15.2372 11.7372C15.5653 11.4091 15.7496 10.964 15.7496 10.5C15.7496 10.0359 15.5653 9.5909 15.2372 9.26273Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
    <div
      v-else
      class="divider absolute w-1 h-full top-0 bg-white"
      :style="`transform: translate(${shiftX}px);`"
      @mousedown="onMouseStart"
      @mouseup="onMouseEnd"
    >
      <div
        class="ball flex justify-center relative w-[60px] h-[60px] rounded-full bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          class="arrow-left my-auto"
        >
          <path
            d="M5.76277 9.26273L12.7628 2.26273C13.0928 1.94395 13.5349 1.76756 13.9937 1.77155C14.4526 1.77554 14.8915 1.95958 15.216 2.28405C15.5404 2.60851 15.7245 3.04743 15.7284 3.50628C15.7324 3.96512 15.556 4.40718 15.2373 4.73723L9.47452 10.5L15.2373 16.2627C15.556 16.5928 15.7324 17.0348 15.7284 17.4937C15.7245 17.9525 15.5404 18.3914 15.216 18.7159C14.8915 19.0404 14.4526 19.2244 13.9937 19.2284C13.5349 19.2324 13.0928 19.056 12.7628 18.7372L5.76277 11.7372C5.4347 11.4091 5.25039 10.964 5.25039 10.5C5.25039 10.0359 5.4347 9.5909 5.76277 9.26273Z"
            fill="black"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          class="arrow-right my-auto"
        >
          <path
            d="M15.2372 9.26273L8.23723 2.26273C7.90718 1.94395 7.46512 1.76756 7.00628 1.77155C6.54743 1.77554 6.10851 1.95958 5.78405 2.28405C5.45958 2.60851 5.27554 3.04743 5.27155 3.50628C5.26756 3.96512 5.44395 4.40718 5.76273 4.73723L11.5255 10.5L5.76273 16.2627C5.44395 16.5928 5.26756 17.0348 5.27155 17.4937C5.27554 17.9525 5.45958 18.3914 5.78405 18.7159C6.10851 19.0404 6.54743 19.2244 7.00628 19.2284C7.46512 19.2324 7.90718 19.056 8.23723 18.7372L15.2372 11.7372C15.5653 11.4091 15.7496 10.964 15.7496 10.5C15.7496 10.0359 15.5653 9.5909 15.2372 9.26273Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ball {
  top: 50%;
  margin-top: -30px;
  left: 50%;
  margin-left: -30px;
  cursor: pointer;
}
.comparisonSection {
  position: relative;
  top: 0;
  padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
  user-select: none;
}
.mobile .comparisonSection {
  padding-bottom: 177.77%;
}
.comparisonImage {
  width: 100%;
  height: 100%;
}
.comparisonImage img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.desktop {
  .after {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0px);
  }
  .after img {
    transform: translate(-100%, 0px);
  }
}
.mobile {
  .after {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(0px, 100%);
  }
  .after img {
    transform: translate(0px, -100%);
  }
}
</style>

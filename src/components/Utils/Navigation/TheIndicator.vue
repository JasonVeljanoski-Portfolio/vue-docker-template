<template>
  <div :style="color_" id="indicator" class="indicator" />
</template>

<script>
import { computed, onMounted, onUnmounted } from "vue";

export default {
  name: "TheIndicator",
  props: {
    color: {
      type: String,
      required: false,
      default: "#2caaca"
    }
  },
  setup(props) {
    // COMPUTED
    const color_ = computed(() => {
      let color = props.color;

      switch (color) {
        case "red":
          color = "#ec6d5f";
          break;
        case "green":
          color = "#27c9b8";
          break;
        case "blue":
          color = "#2caaca";
          break;
      }

      return {
        "background-color": color,
        opacity: 1
      };
    });

    // METHODS
    function progressBarCallback() {
      const scrollPos = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight; // instead document.body.clientHeight
      const perc = (100 * scrollPos) / (docHeight - winHeight);
      document.getElementById("indicator").style.width = perc + "%";
    }

    function hexToRGB(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          }
        : null;
    }

    // LIFECYCLE HOOKS
    onMounted(() => {
      window.addEventListener("scroll", progressBarCallback);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", progressBarCallback);
    });

    return {
      color_,
      progressBarCallback,
      hexToRGB
    };
  }
};
</script>

<style lang="stylus" scoped>
.indicator
  position fixed
  top 0
  left 0
  margin-top $header-height
  height 5px
  z-index 3
</style>

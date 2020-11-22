<template>
  <div>
    <!-- DARK OVERLAY -->
    <transition name="fade">
      <div v-if="drawer" class="focus" />
    </transition>
    <!-- SIDEBAR -->
    <transition name="slide">
      <div v-if="drawer" @click="toggle" class="background">
        <div @click.stop class="sidebar">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TheSidebar",
  setup() {
    // VUEX STORE
    const store = useStore();

    // COMPUTED
    const drawer = computed(() => store.state.Drawer.drawer);

    // METHODS
    function toggle() {
      store.dispatch("Drawer/toggleDrawer");
    }

    return {
      drawer,
      toggle
    };
  }
};
</script>

<style lang="stylus" scoped>
.sidebar
  float right
  max-width $sidebar-width
  width 100%
  height 100%
  border-right 1px solid #e5e5e5
  background-color white
  overflow-y scroll
  z-index 2000

+desktop()
  .sidebar,
  .focus
    display none

.background
  position fixed
  z-index 998
  top 0
  width 100%
  height 100%

.focus
  position fixed
  z-index 998
  top 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, 0.25)
</style>

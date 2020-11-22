<template>
  <aside class="sidbar">
    <!-- HEADER -->
    <header>
      <router-link class="logo" to="/">
        <img @click="toggle" src="@/assets/logos/logo.svg" />
      </router-link>
      <div class="spacer" />
      <div>
        <BaseIconCross />
      </div>
    </header>

    <!-- NAVS -->
    <nav @click="toggle" class="navigation-items">
      <ul class="nav-list">
        <router-link
          class="link"
          v-for="nav in navItems"
          :key="nav"
          :to="nav.slug"
        >
          <li class="nav-item">{{ nav.name }}</li>
        </router-link>
      </ul>
    </nav>

    <!-- SOCIAL MEDIA -->
    <BaseSocialMedia
      :has-facebook="true"
      :has-instagram="true"
      :has-linkedin="true"
      :has-twitter="true"
      :has-youtube="true"
      link-linkedin="https://www.google.com"
    />
  </aside>
</template>

<script>
import { useStore } from "vuex";
import BaseIconCross from "@/components/Utils/Navigation/svg/BaseIconCross";
import BaseSocialMedia from "@/components/Utils/SocailMedia/BaseSocialMedia";

export default {
  name: "TheSidebarContent",
  components: {
    BaseIconCross,
    BaseSocialMedia
  },
  props: {
    navItems: {
      type: Array,
      require: true,
      validator: prop => prop.every(e => typeof e === "object")
    }
  },
  setup() {
    // VUEX STORE
    const store = useStore();

    // METHODS
    function toggle() {
      store.dispatch("Drawer/toggleDrawer");
    }

    return {
      toggle
    };
  }
};
</script>

<style lang="stylus" scoped>
aside
  height 100%
  width 100%
  z-index 9

header
  background-color white
  display flex
  flex-flow row nowrap
  align-items center
  height $header-height
  padding 0 10px
  border-bottom 1px solid $border-color

.spacer
  flex 1 1 auto

.logo
  max-width 150px
  width 100%

// nav links
.nav-list
  list-style none
  padding 0
  margin 0

a
  text-decoration none
  color $dark

.nav-item
  padding 10px 10px
  font-size 14pt
  color $dark
  border-bottom solid 1px $border-color

.nav-item:hover
  cursor pointer
  background-color #efefef

.link:hover
  color $grey

.router-link-exact-active .nav-item
  font-weight 400
  color $blue !important
</style>

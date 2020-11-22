<template>
  <header>
    <router-link to="/">
      <img class="logo" src="@/assets/logos/logo.svg" />
    </router-link>
    <div class="spacer" />
    <!-- NAV LINKS -->
    <nav class="navigation-items">
      <ul class="nav-list">
        <li v-for="nav in navItems" :key="nav" class="nav-item">
          <router-link class="link" :to="nav.slug">{{ nav.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="menu">
      <BaseIconBurger />
    </div>
    <TheIndicator color="blue" />
  </header>
</template>

<script>
import TheIndicator from "@/components/Utils/Navigation/TheIndicator";
import BaseIconBurger from "@/components/Utils/Navigation/svg/BaseIconBurger";

export default {
  name: "TheHeader",
  components: {
    TheIndicator,
    BaseIconBurger
  },
  props: {
    navItems: {
      type: Array,
      require: true,
      validator: prop => prop.every(e => typeof e === "object")
    }
  }
};
</script>

<style lang="stylus" scoped>
header
  background-color white
  width 100%
  display flex
  flex-flow row nowrap
  align-items center
  height $header-height
  top 0
  position fixed
  z-index 1
  padding 0 40px 0 20px
  border-bottom 1px solid $border-color

img
  max-width 200px
  width 100%

.logo
  padding 10px

.spacer
  flex 1 1 auto

.attention
  padding 0 10px
  background-color $blue
  border-radius 5px
  .link
    color white !important

.attention:hover
  background-color $blue
  opacity 0.96

// nav links
.navigation-items
  display none

.menu
  display block

+desktop()
  .navigation-items
    display block
  .menu
    display none

.nav-list
  list-style none
  padding 0
  margin 0
  display flex
  align-items center

.nav-item a
  text-decoration none
  color $dark

.nav-item
  margin 0 10px
  display inline-block
  font-size 14pt
  color $dark

.nav-item:hover
  cursor pointer

.link:hover
  color $grey

.router-link-exact-active
  font-weight bold
  color $blue !important
/*           */
.account
  position absolute
  z-index 9999
  list-style none
  padding 0
  margin 5px 0 0 0
  border solid 1px $border-color
  background-color white
  li
    padding 8px

.account li:hover
  cursor pointer
  background-color $border-color
</style>

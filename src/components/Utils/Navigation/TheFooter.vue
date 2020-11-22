<template>
  <footer>
    <!-- COPYRIGHT -->
    <div>
      <router-link to="/">
        <img class="logo" src="@/assets/logos/logo.svg" />
      </router-link>
      <p>&#9400; Masterly 2020. All rights reserved.</p>
    </div>
    <div class="spacer" />
    <!-- NAV LINKS -->
    <div>
      <!-- NAV LINKS -->
      <nav class="navigation-items">
        <ul class="nav-list">
          <li v-for="nav in navItems" :key="nav" class="nav-item">
            <router-link class="link" :to="nav.slug">
              {{ nav.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <BaseSocialMedia
        :has-facebook="true"
        :has-instagram="true"
        :has-linkedin="true"
        :has-twitter="true"
        :has-youtube="true"
        link-linkedin="https://www.google.com"
      />
    </div>
  </footer>
</template>

<script>
import BaseSocialMedia from "@/components/Utils/SocailMedia/BaseSocialMedia";

export default {
  name: "TheFooter",
  components: {
    BaseSocialMedia
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
footer
  background-color white
  width 100%
  padding 0 40px 0 20px
  border-top 1px solid $border-color
  padding-top 10px

  // To keep the footer where it belongs
  position absolute
  bottom 0
  height $footer-height-phone

+desktop()
  footer
    display flex
    flex-flow row wrap
    align-items center
    height $footer-height-desktop

p
  text-align left
  font-size 10pt

img
  max-width 250px
  width 100%

.logo
  padding 10px

.spacer
  flex 1 1 auto

+desktop()
  .nav-list
    display flex
  footer
    display flex
    flex-flow row wrap
    align-items center

.nav-list
  list-style none
  padding 0
  margin 0

.nav-item a
  text-decoration none
  color $dark

.nav-item
  margin 0 10px
  text-decoration none
  font-size 14pt

.nav-item:hover
  cursor pointer

.link:hover
  color $grey

.router-link-exact-active
  font-weight bold
  color $blue !important
</style>

<template>
  <div class="main-wrapper">
    <TheHeader :navItems="state.navItems" />
    <TheSidebar>
      <TheSidebarContent :navItems="state.navItems" />
    </TheSidebar>
    <!-- MAIN CONTENT -->
    <div id="content" class="main-content flexbox">
      <router-view />
    </div>
    <TheFooter :navItems="state.footerNavItems" />
  </div>
</template>

<script>
import { reactive } from "vue";
import TheHeader from "@/components/Utils/Navigation/TheHeader";
import TheSidebar from "@/components/Utils/Navigation/TheSidebar";
import TheSidebarContent from "@/components/Utils/Navigation/TheSidebarContent";
import TheFooter from "@/components/Utils/Navigation/TheFooter";

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheSidebarContent,
    TheFooter
  },
  setup() {
    // DATA
    const state = reactive({
      navItems: [
        { name: "Home", slug: "/" },
        { name: "Contact", slug: "/contact" }
      ],
      footerNavItems: [
        { name: "Contact", slug: "/contact" },
        { name: "Privacy Policy", slug: "/privacy" },
        { name: "Terms & Conditions", slug: "/terms" }
      ]
    });

    return {
      state
    };
  }
};
</script>

<style lang="stylus">
html
  font-family 'Nunito', SansSerif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  background-color white

*
*:before
*:after
  box-sizing border-box
  margin 0


body
  font-family 'Nunito', SansSerif
  font-weight 100
  font-size 14pt
  line-height 30px
  color $grey

p
  margin-bottom 1.3em
  text-align justify

h1
h2
h3
h4
  margin 1.414em 0 0.5em
  font-weight inherit
  line-height 1.2

h1
  margin-top 0
  font-size 2.441em

h2
  font-size 1.953em

h3
  font-size 1.563em

h4
  font-size 1.25em

h5
  font-size 1em

small
  font-size 0.8em

.main-wrapper
  // To keep the footer where it belongs
  position relative
  min-height "calc(100vh - %s)" % $header-height
  padding-bottom $footer-height-phone
  background-color rgba(252, 252, 255, 1)

+desktop()
  .main-wrapper
    // To keep the footer where it belongs
    padding-bottom: $footer-height-desktop

.main-content
  min-height "calc(100vh - %s - %s)" % ($header-height $footer-height-desktop)
  margin-top $header-height
  background-color white
  width 100vw

.flexbox
  display flex
  justify-content center
  align-items center
</style>

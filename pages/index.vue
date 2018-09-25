<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-pwa-app
      </h1>
      <h2 class="subtitle">
        My classy Nuxt.js project
      </h2>
        <!-- <button class="btn btn-primary" @click="checkOs">Check OS</button> -->
        <div v-if="notificationShow" class="notification-div">Do follow the instructions below...</div>
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div> -->
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      notificationShow: false
    }
  },
  components: {
    Logo
  },
    mounted: function () {
      let nav = window.navigator;
      let ua = nav.userAgent;

      function isiOsSafari (a) {
          return ("standalone" in nav) // There's a thing called standalone in nav
           && !nav.standalone // It is not running in standalone mode
           && ua.indexOf(a)!=-1 // iPhone is in the UA string (could be Opera)
           && ua.indexOf('Mac OS')!=-1 // There's Mac in the UA string (not Opera)
           && ua.indexOf('Safari')!=-1
           /* if all the above are true this probably means this is
           the Safari browser,
           not a webview in an app,
           not a page in standalone mode */
      }

      // Check if Mobile Safari on iPhone
      if(isiOsSafari('iPhone')){
          // document.write('Probably Safari on an iPhone: ' + ua);
          // alert('this is an ' + ua);
          if (!nav.standalone) {
            this.notificationShow = true;
          }

      }
      // Check if Mobile Safari on iPod
      else if(isiOsSafari('iPad')){
          // document.write('Probably Safari on an iPad: ' + ua);
          // alert('this is an ' + ua);
          // alert('this is an ipad');
          this.notificationShow = true;
      }
      else{
          // document.write('Probably something else: ' + ua)
          // alert('this is an ' + ua);
      }
    }
}
</script>

<style>

.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}

.notification-div {
  margin-top: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  background-color: tomato;
  color: white;
}
</style>

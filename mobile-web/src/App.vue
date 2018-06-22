<template>
  <div id="app">
    <div class="wrapper">
      <transition mode="out-in" name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import 'mint-ui/lib/style.css'
export default {
  name: 'App'
}
</script>

<style lang="postcss">
@import "./assets/vars.css";

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font: var(--font);
  background: var(--gray);
  padding-top: calc(30/var(--basFont))rem;
}

.vi {
  color: #ff9900;
}

.row {
  background-color: #ffffff;
}
</style>

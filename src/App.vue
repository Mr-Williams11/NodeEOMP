<template>
  <NavBar />
  <div class="container-fluid">
    <router-view />
  </div>
  <SpinnerView/>
  <FooterComp />

</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
import SpinnerView from '@/components/SpinnerView.vue';

export default {
  components: {
    NavBar,
    FooterComp,
    SpinnerView
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

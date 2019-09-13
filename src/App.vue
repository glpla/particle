<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <span class="nav-item">Home</span>
      </router-link>|
      <router-link to="/particlesJS">
        <span class="nav-item">ParticlesJS</span>
      </router-link>|
      <router-link to="/about">
        <span class="nav-item">About</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
a {
  text-decoration: none;
}

a.router-link-exact-active .nav-item {
  color: #f06;
}
a .nav-item {
  color: #666;
}
</style>

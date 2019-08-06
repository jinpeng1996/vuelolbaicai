<template>
  <div class="about">
    <h1>分类</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/joyou">joyou</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/collection">Collection</router-link>|
      <router-link to="/my">my</router-link>
    </div>
    <router-view />
  </div>
</template>

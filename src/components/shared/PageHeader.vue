<template>
  <div>
    <div class="headerinfo">
      <div>Contact: <router-link :to="{ name: 'Contact' }">Email</router-link></div>
      <div><a href="http://soundcloud.com/palmerjazz">SoundCloud</a> | <a href="http://www.youtube.com/AndrewPalmerJazz">YouTube</a></div>
    </div>
    <div class="logo">
      <div class="main-text"><a href="/">palmerjazz.com</a></div>
      <h1>Andrew Palmer</h1>
      <h2>Pianist. Arranger.</h2>
    </div>
  </div>
</template>

<style scoped>
.logo {
  margin: 10px;
  text-align: left;
}

.logo a {
  text-decoration: none;
  color: #999;
}

h1 {
  margin: 0;
  font: bold 12pt Muli,sans-serif;
  color: #999;
}

h2 {
  margin: 0;
  font: 10pt Muli,sans-serif;
  color: #999;
}

.headerinfo {
  float: right;
  text-align: right;
  margin: 10px;
  color: #fff;
  font: 10pt Muli,sans-serif;
}
</style>

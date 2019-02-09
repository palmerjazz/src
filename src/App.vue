<template>
  <div id="app">
    <div class="page">
      <page-header class="page-section"/>
      <router-view class="main-items"/>
      <page-footer class="page-section"/>
    </div>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Muli);

body {
  color: #666;
  background-color: #fff;
  background-image: url(./assets/piano-background.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
}

#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  font: 12pt/16pt Muli, verdana, sans-serif;
}

.page {
  width: 900px;
  margin: auto;
}

.page-section {
  width: 100%;
  background: rgba(0,0,0,0.5);
  padding: 10px 4px;
  font-family: Muli, verdana, sans-serif;
}

.main-items {
  width: 100%;
  padding: 25px 4px;
  background-color: rgba(166, 166, 204, 0.9);
}

.inneritem {
  width: 90%;
  padding: 10px;
  margin: 20px auto;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  box-shadow: 0 4px 8px #666;
  opacity: 1.0;
}

.main-text {
  font: 32pt Muli, verdana, sans-serif;
}

.big{
  font: bold 20pt Muli,verdana, sans-serif;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #fff;
  text-decoration: underline;
}

.inneritem a {
  text-decoration: none;
  color: #4a4a99;
}

.inneritem a:hover {
  text-decoration: underline;
  color: #600;
}
</style>

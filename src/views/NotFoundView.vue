<script setup lang="ts"></script>

<template>
  <div class="notFound">
    <div class="container">
      <nav class="notFound__logo">
        <a href="/"
          ><img src="https://culqi.com/assets/images/brand/brandCulqi-white.svg" alt=""
        /></a>
      </nav>
      <div class="notFound__content">
        <div>
          <div class="error">Error 404</div>
          <div class="huno">
            ¡Ups! <span class="color-orange">No encontramos</span> la
            <span class="color-yellow">página</span> que buscas
          </div>
          <a href="/" class="btn btn-primary">volver al home</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.notFound {
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  background-color: #000000;
}

.notFound .container {
  width: 100%;
  max-width: 1700px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}

.notFound__content {
  width: 35vw;
  height: 50%;
  margin: 10% auto;
  color: #ffffff;
}

.notFound__logo {
  margin-top: 2%;
  margin-left: 1%;
}

.notFound__content .error {
  font-size: 1.5vw;
  font-weight: normal;
}

.notFound__content .huno {
  font-size: 3vw;
  line-height: 4vw;
  margin: 5% 0;
  font-weight: normal;
}

.color-orange {
  color: #eb6f25;
}

.color-yellow {
  color: #f5a800;
}

.btn-primary {
  background-color: #763383;
  color: #ffffff;
  border: solid 1px #763383;
}

.btn {
  display: inline-flex;
  padding: 14px 36px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 0;
  text-decoration: none;
  text-transform: initial;
  letter-spacing: 0;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  height: 40px;
  border-radius: 4px;
}
</style>

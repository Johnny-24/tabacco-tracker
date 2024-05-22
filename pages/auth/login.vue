<template>
  <main>
    <form>
      <h2>Войти</h2>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Пароль" />
      <button type="submit">Войти</button>
      <a href="#">Регистрация</a>
    </form>
    <video class="bg" autoplay loop muted>
      <source src="@/assets/video/smoke.mp4" type="video/mp4" />
    </video>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
h1 {
  margin: 0;
}
body * {
  box-sizing: border-box;
}
</style>

<style>
form {
  border-radius: 8px;
  background-color: rgba(255, 255, 255, .3);
  padding: 20px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  border: 1px solid #808080;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .4);
}
a {
  color: #cfcfcf;
}
button {
  border: none;
  background: #fff;
  color: #000;
  margin-bottom: 10px;
  width: 100%;
  height: 35px;
}
input {
  background: #808080;
  height: 35px;
  width: 100%;
  color: #fff;
  margin-bottom: 15px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
}
input::placeholder {
  color: #cfcfcf;
}
form h2 {
  color: #fff
}
main {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  min-height: 100vh;
  position: relative;
}
.bg {
  background-image: url('~/assets/video/smoke.mp4');
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  z-index: 1;
}
</style>

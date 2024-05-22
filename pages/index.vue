<template>
  <main>
    <UButton>Button</UButton>
    <!-- <ul>
      <div>+</div>
      <li v-for="(index, item) in 20" :key="index">
        <img src="https://loremflickr.com/150/150" alt="">
        <h2>Brusko</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, ipsa?</p>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 47.94 47.94" xml:space="preserve">
          <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"/>
        </svg>
        8.5
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 117.74 122.88" style="enable-background:new 0 0 117.74 122.88" xml:space="preserve"><g><path class="st0" d="M94.62,2c-1.46-1.36-3.14-2.09-5.02-1.99c-1.88,0-3.56,0.73-4.92,2.2L73.59,13.72l31.07,30.03l11.19-11.72 c1.36-1.36,1.88-3.14,1.88-5.02s-0.73-3.66-2.09-4.92L94.62,2L94.62,2L94.62,2z M41.44,109.58c-4.08,1.36-8.26,2.62-12.35,3.98 c-4.08,1.36-8.16,2.72-12.35,4.08c-9.73,3.14-15.07,4.92-16.22,5.23c-1.15,0.31-0.42-4.18,1.99-13.6l7.74-29.61l0.64-0.66 l30.56,30.56L41.44,109.58L41.44,109.58L41.44,109.58z M22.2,67.25l42.99-44.82l31.07,29.92L52.75,97.8L22.2,67.25L22.2,67.25z"/></g></svg>
        </i>
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="109.484px" height="122.88px" viewBox="0 0 109.484 122.88" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/></g></svg>
        </i>
      </li>
    </ul> -->
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #000;
}
h1 {
  margin: 0;
}
body * {
  box-sizing: border-box;
}
ul {
  list-style: none;
  grid-template-columns: repeat(6, calc(100% / 6 - 8px / 6*(6 - 1)));
  row-gap: 32px;
  display: grid;
  column-gap: 8px;
  grid-auto-flow: row dense;
}
ul img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
li {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  grid-column: span 1;
}

svg {
  width: 15px;
  height: 15px;
}

ul div {
  border: 1px dashed #fff;
    border-radius: 8px;
    margin: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
}

@media(max-width: 1024px) {
  ul {
    grid-template-columns: repeat(4, calc(100% / 4 - 8px / 4*(4 - 1)));
    column-gap: 8px;
  }
}

@media(max-width: 768px) {
  ul {
    grid-template-columns: repeat(2, calc(100% / 2 - 8px / 2*(2 - 1)));
    row-gap: 24px;
  }
}
</style>

<style scoped>

</style>

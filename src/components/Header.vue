<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    v-bind:class="{ navbarOpen: show }"
  >
    <a class="navbar-brand" href="#"> <img src="../assets/img/benkam.png" /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      @click.stop="toggleNavbar()"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
      v-bind:class="{ show: show }"
      
    >
      <ul class="navbar-nav mr-auto" style="margin-left:10%">
        <li class="nav-item active">
          <a class="nav-link navLink" href="#"
            >О компании <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item mr-1">
          <a class="nav-link navLink" href="#">База знаний</a>
        </li>
        <li class="nav-item mr-1">
          <a class="nav-link navLink" href="#">услуги</a>
        </li>
        <li class="nav-item mr-1">
          <a class="nav-link navLink" href="#">Новости </a>
        </li>
        <li class="nav-item mr-1">
          <a class="nav-link navLink" href="#">Контакты</a>
        </li>
        <li class="nav-item mr-1">
          <a class="nav-link navLink" href="#">карьера</a>
        </li>
      </ul>
      <div class="my-2 my-lg-0">
        <span class="nlang mr-3">RU</span>

        <span class="nlang mr-3">EN</span>

        <span class="nlang mr-3">DE</span>
      </div>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand mb-3" href="#">
      <img  src="../assets/img/benkam.png"></a>

  <div class="collapse navbar-collapse ml-5" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item mr-1 active">
        <a class="nav-link navLink" href="#">О компании </a>
      </li>
      <li class="nav-item mr-1">
        <a class="nav-link navLink" href="#">База знаний</a>
      </li>
      <li class="nav-item mr-1">
        <a class="nav-link navLink" href="#">услуги</a>
      </li>
        <li class="nav-item mr-1">
        <a class="nav-link navLink" href="#">Новости </a>
      </li>
      <li class="nav-item mr-1">
        <a class="nav-link navLink" href="#">Контакты</a>
      </li>
      <li class="nav-item  mr-1">
        <a class="nav-link navLink" href="#">карьера</a>
      </li>
    </ul>
  <div class="navLang">
    <span class="nlang mr-3">RU</span>
    
    <span class="nlang mr-3">EN</span>
    
    <span class="nlang mr-3">DE</span>
  </div>
  </div>
</nav> -->
 
</template>
<script>
export default {
  name: "header-nav",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>

.navLink{
  font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;

letter-spacing: 2px;
text-transform: uppercase;


color: #282828;
}
 .nlang{
  font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
letter-spacing: 1px;
text-transform: uppercase;


color: #233B57;

}
/* .navbar{
  /* background-color:  #F8F8F8; /
  height: 80px;
} */
/* .navbar-brand { */
  
/* margin:22px ; */
/* margin-left: 80px  !important; */
/* padding-right:104px; */

/* } */
</style>
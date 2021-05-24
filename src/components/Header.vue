<template>
    <nav class="navbar navbar-expand-lg">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand " href="#">
      <img  src="../assets/img/benkam.png"></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">О компании </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">База знаний</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">услуги</a>
      </li>
        <li class="nav-item active">
        <a class="nav-link" href="#">Новости </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Контакты</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">карьера</a>
      </li>
    </ul>
   
  </div>
</nav>
</template>
<script>
export default {
    
  name: 'header-nav',
}
</script>
<style scoped>
.navbar{
  background-color:  #F8F8F8;
  height: 80px;
}
.navbar-brand {
  
margin-top:22px ;
margin-left: 80px  !important;


}
</style>
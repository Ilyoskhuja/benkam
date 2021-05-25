<template>
    <nav class="navbar navbar-expand-lg">
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
</nav>
<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> -->
</template>
<script>
export default {
    
  name: 'header-nav',
}
</script>
<style scoped>
.navLink{
  font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

letter-spacing: 2px;
text-transform: uppercase;

/* Benkam (text) */

color: #282828;
}
.nlang{
  font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

letter-spacing: 1px;
text-transform: uppercase;

/* _Text */

color: #233B57;

}
.navLang{
  display: flex;
  justify-content: space-around;
  max-width: 97px;
}
.navbar{
  background-color:  #F8F8F8;
  height: 80px;
}
.navbar-brand {
  
margin-top:22px ;
margin-left: 80px  !important;


}
</style>
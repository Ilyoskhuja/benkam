<template>
  <div>
    <vue-particles
      color="#f7f7f7"
      :particleOpacity="0.7"
      :particlesNumber="15"
      shapeType="none"
      :particleSize="4"
      linesColor="#000000"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="300"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
    >
    </vue-particles>
    <a-row class="secone">
      <a-col :span="12" :offset="6">
        <div class="mainImage">
          <img class="mainLogo" src="../assets/img/BenkamBig.png" />
          <p class="info">Современные алюминиевые решения</p>
        </div>
      </a-col>
    </a-row>
    <a-row class="sectwo">
      <a-col :span="24">
        <div class="parttwo">
          <div class="img2">
            <img width="100%" src="../assets/img/2.jpg" />
          </div>
          <div class="greenInfo">
            <h4>BENKAM ALU EXTRUSIONS ®</h4>
            <p class="mt-5">
              Молодое, стремительно развивающееся предприятие, специализируется
              на производстве алюминиевого профиля различных типов и размеров.
            </p>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="secthr">
      <a-col  :xs="{ span: 24 }" :sm="{ span: 24}" :md="{ span: 24 }" :lg="{ span: 24}">
        <div class="thrtitle">
          <span class="lineGrey"></span>
          <span class="miniTitle">Производственная мощность</span>
        </div>
      </a-col>
      <a-col :xs="{ span: 24 }" :sm="{ span: 24}" :md="{ span: 6, offset: 4 }" :lg="{ span: 4, offset: 2 }">
        <div class="secInfotwo">
          <h1 class="miniTitleone">1000</h1>
          <h4 class="miniTitlesec">тонн</h4>
          <p class="miniTt">Складской запас готовой продукции.</p>
        </div>
      </a-col>

      <a-col  :xs="{ span: 24 }" :sm="{ span: 24}" :md="{ span: 8, offset: 4 }" :lg="{ span: 4, offset: 2 }">
        <div class="secInfotwo">
          <h1 class="miniTitleone">3</h1>
          <h4 class="miniTitlesec">новейших пресса</h4>
          <p class="miniTt">
            Возможности изготовления профиля до 279.5мм в диаметре.
          </p>
        </div>
      </a-col>

      <a-col  :xs="{ span: 24 }" :sm="{ span: 24}" :md="{ span: 6, offset: 4 }" :lg="{ span: 4, offset: 2 }">
        <div class="secInfotwo">
          <h1 class="miniTitleone">28</h1>
          <h4 class="miniTitlesec">тысяч тонн в год</h4>
          <p class="miniTt">
            Производительность собственной линии анодирования.
          </p>
        </div>
      </a-col>

      <a-col  :xs="{ span: 24 }" :sm="{ span: 24}" :md="{ span: 8, offset: 4 }" :lg="{ span: 4, offset: 2 }">
        <div class="secInfotwo">
          <h1 class="miniTitleone">36</h1>
          <h4 class="miniTitlesec">тысяч тонн в год</h4>
          <p class="miniTt">Производительная мошность изготовления профиля.</p>
        </div>
      </a-col>
    </a-row>
    <!-- <a-row class="secthr" type="flex" justify="space-between">
      <a-col :span="24">
        <div class="thrtitle">
          <span class="lineGrey"></span>
          <span class="miniTitle2">Наши услуги</span>
        </div>
      </a-col>
      <a-col :span="1" :offset="0">
        <img class="waterImg" src="../assets/img/water.png" />
      </a-col>

      <a-col :span="4" :offset="1">
        <h1 class="waterTitle">Анодирование</h1>
        <h1 class="waterInfo">
          Для чего необходим <br />
          процесс анодирования?
        </h1>
        <p class="waterMore">Подробнее</p>
      </a-col>

      <a-col :span="14">
        <img class="waterImg" src="../assets/img/water2.png" />
      </a-col>
      <a-col :span="14" :offset="10">
        <h1 class="waterUnderImg">
          Наши экструзионные линии могут производить профили до 7,5 метров в
          автоматическом режиме. Экструдируемый вес профилей составляет от 50 до
          15 кг на метр.
        </h1>
      </a-col>
    </a-row>
    <a-row class="mt-5" type="flex" justify="space-around">
      <a-col :span="24">
        <div class="thrtitleNoneBackg">
          <span class="lineGrey"></span>
          <span class="miniTitleMission">Миссия и видение</span>
        </div>
      </a-col>
      <a-col :span="5" :offset="4">
        <h1 class="fiveMaint">Молодое – значит оценивающее <br />по-новому.</h1>
        <h4 class="fiveMainb">
          Анализируя мировой рынок, мы стремимся идти в ногу со временем
          предлагая самые выгодные условия для наших клиентов.
        </h4>
      </a-col>
      <a-col :span="3" :offset="1"
        >.

        <span class="line65"></span>
        <h5 class="fiveMainc">
          Благодаря профессиональному и квалифицированному персоналу, а также
          высокотехнологичному оборудованию мы сможем воплотить самые сложные и
          инновационные проекты. Нам важен успех наших клиентов !
        </h5>
      </a-col>
      <a-col :span="6" :offset="0">
        <span class="line65"></span>
        <h5 class="fiveMainc">
          Создание инновационных и комплексных решений, отвечающих потребностям
          рынка. Внедрение качественной продукции на рынок.
        </h5>
      </a-col>
    </a-row>
    <a-row class="sec6">
    
      <a-col :span="24" >
          <div style="position:absolute">
            <img width="100%" src="../assets/img/6.png" />
          </div>
        <div class="sec6Box">
         
          <h1 class="sec6Title">Инновационность</h1>
          <h6 class="sec6Info">
            Непрерывное внедрение новшеств, обеспечивающих повышение
            эффективности процессов производства, и <br />
            улучшения качества продукции, востребованное рынком.
          </h6>
        </div>
      </a-col>

    </a-row>

    <a-row class="mt-5" type="flex" justify="space-around">
      <a-col :span="24">
        <div class="thrtitleD8">
          <span class="lineGrey"></span>
          <span class="miniTitleMission">Коротко о нас</span>
        </div>
      </a-col>
      <a-col :span="7" :offset="2">
        <h1 class="aboutMaint">
          Благодаря опыту наших с пециалистов из Европы и неординарному подходу
          к работе, каждый наш клиент может рассчитывать на техническую помощь и
          поддержку в разработке профилей.
        </h1>
      </a-col>
      <a-col :span="3" :offset="1"
        >.

        <span class="line65"></span>
        <h5 class="aboutMainc">
          На веб-сайте BENKAM предоставлена полная информация и доступ о нашей
          производственной мощности, доступных алюминиевых сплавов и
          возможностях механической обработки и отделки поверхности алюминиевых
          профилей
        </h5>
      </a-col>
    </a-row>
    <a-row class="secthr" type="flex" justify="space-between">
      <a-col :span="24">
        <div class="thrtitleNoneBackg">
          <span class="lineGrey"></span>
          <span class="miniTitle2">применение</span>
        </div>
      </a-col>
      <a-col :span="2" :offset="0">
        <img class="waterImg" src="../assets/img/man.png" />
      </a-col>

      <a-col :span="4" :offset="1">
        <h1 class="appTitle">Транспорт</h1>
        <h1 class="appInfo">
          Современные города невозможно представить без алюминия. Из него
          возводятся пешеходные, фасадные, оконные и раздвижные системы,
          опалубки и строительные леса.
        </h1>
        <p class="waterMore">Подробнее</p>
      </a-col>

      <a-col :span="14">
        <img class="waterImg" src="../assets/img/car.png" />
      </a-col>
    </a-row>
    <a-row class="secthr">
      <a-col :span="24" class="geoBox">
        <div class="geoBoxDec">
          <h1 class="geoTitle">Рассчитайте точный срок доставки</h1>
          <h4 class="geoInfo">
            Узнайте точные сроки доставки до вашего города или центрального
            склада с ресурсами нашего отдела логистики и собственным автопарком.
          </h4>
        </div>
      </a-col>
      <a-col :span="22" :offset="2">
        <div class="geoButton">
          <a-select
            default-value="lucy"
            style="width: 120px"
            @change="handleChange"
          >
            <a-select-option value="jack"> Jack </a-select-option>
            <a-select-option value="lucy"> Lucy </a-select-option>
            <a-select-option value="disabled" disabled>
              Disabled
            </a-select-option>
            <a-select-option value="Yiminghe"> yiminghe </a-select-option>
          </a-select>
          <a-select default-value="lucy" style="width: 120px" disabled>
            <a-select-option value="lucy"> Lucy </a-select-option>
          </a-select>
          <a-select default-value="lucy" style="width: 120px" loading>
            <a-select-option value="lucy"> Lucy </a-select-option>
          </a-select>
        </div>
      </a-col>
      <a-col :span="22" :offset="2">
        <div class="geoButton">
          <div class="gCountry">
            <span class="geoCountry">cтрана, город доставки :</span>
            <span class="geoCountryTitle">США, Новый Орлеан</span>
            <span class="geoCountryLink">Узнать про типы упаковок</span>
          </div>
          <div>
            <h6 class="geoTransportTitle">
              Срок доставки
              <span class="geoTitleCount">(количество дней):</span>
            </h6>
            <div class="geoDay">
              <span class="geoTitleCountNum">20 - 25 </span>
              <span class="geoTitleDay">дней</span>
            </div>
          </div>
          <div>
            <h6 class="geoTransportTitle">Тип транспорта :</h6>
            <div class="geoTransport">
              <img src="../assets/img/cargo.png" />
              <img src="../assets/img/tanker.png" />
            </div>
          </div>
        </div>
      </a-col>

      <a-col :span="22" :offset="2">
        <div class="geoMap">
          <img class="geoMap1" src="../assets/img/country.png" />

          <img class="geoMap2" src="../assets/img/map.png" />

          <img class="geoMap3" src="../assets/img/uzbekistan.png" />
        </div>
      </a-col>
    </a-row>
    <a-row class="secthr" >
      <a-col :span="24">
        <div class="thrtitleNoneBackg">
          <span class="lineGrey"></span>
          <span class="miniTitleMission">Наши контакты</span>
        </div>
      </a-col>
      <a-col class="mt-5" :span="6" :offset='2'>
        <h1 class="contactMain">Головной офис</h1>
        <ul class="contactInfoAlign">
          <li>
            <span class="contactInfo"
              >Узбекистан, г. Ташкент, Учтепинский район,
              ул. Хирмонтепа, д-1</span
            >
          </li>
          <li>
            <span class="contactInfo"
              >+998 71 203 01 01 <br />
              +998 95 144 49 59</span
            >
          </li>
          <li><span class="contactInfo">info@benkam.be</span></li>
        </ul>

        <h1 class="contactMainInfo">База производства :</h1>
        <li>
          Навоийская область, Карманинский <br />
          район, СЭЗ “Навои”
        </li>
        <li>+998 79 222 00 00</li>
      </a-col>
      <a-col class="mt-5" :span="6" :offset='3'>
        <h1 class="contactMain">BENKAM в России</h1>
        <ul>
          <li>Россия, г. Химки, ул. Рабочая 2А, корпус 22 А. Офис 206В</li>
          <li>+7 (967) 034-00-07 +7 (495) 795-74-84</li>
          <li>info@benkam.ru sales@benkam.ru</li>
        </ul>

        <h1 class="contactMain mt-5">BENKAM в Европе</h1>
        <ul>
          <li>
            ул. Галинес 1, Вильнюс, Литва 14247 Регистрационный номер: 304590804
            <br />
            ИНН: LT100011262117
          </li>
          <li>+370 67 608 303</li>
          <li>Email: a.yokubov@benkam.be</li>
        </ul>
      </a-col>
    </a-row>
    <a-row class="secthr">
      <a-col :span="24">
        <div class="thrtitle">
          <span class="lineGrey"></span>
          <span class="miniTitleMission">Партнеры</span>
        </div>
      </a-col>
      <a-col :span="18">
        <div class="row">
          <div class="col-md-6" style="height: 480px; display:flex;justify-content:center;">
          <h1 class="partnerTitle">
            Каждый партнер - это ценность для <br />нас.
          </h1>
          </div>
          <div class="col-md-6" > 
          <img style="margin:10rem 0;"  src="../assets/img/eco.png" />
          <!- <div style="position:relative;height: 480px;background: #404040;opacity: 0.03;    z-index:1; "></div> ->
          </div>
        </div>
        <div class="row">  
        <div class="col-md-6" style="
height: 480px; background: #6D7D92;">
          <img
            style="background: #6d7d92; opacity: 0.16;margin:8rem 0;"
            src="../assets/img/alu.png"
          />
        </div>
      <div class="col-md-6" style="
height: 480px;background: #FFFFFF;">
          <img style="margin:8rem 0;" src="../assets/img/emmebi.png" />
      </div>
        </div>
      </a-col>
      <a-col :span="6" style="height: 960px; background:#ECFFED; ">
        <img width="100%" style="margin:20rem 0;" src="../assets/img/akzo.png" />
      </a-col>
    </a-row>
    <a-row class="secthr" >
      <a-col :span="10" :offset="2">
        <h1 class="connectform">
          Заполните форму обратной <br />
          связи и мы оперативно <br />свяжемся с вами !
        </h1>
        <span class="requiredInfo"
          >Поля отмеченные (*) оязательные для заполнения !</span
        >
        <a-row style="margin-top: 55px">
          <a-col :span="12" class="mt-3">
            <input placeholder="Ваше Имя" />
          </a-col>
          <a-col :span="12" class="mt-3">
            <input placeholder="Ваша Фамилия" />
          </a-col>
          <a-col :span="12" class="mt-3">
            <input placeholder="Номер тел.:  + 998 (__) ___ __ __" />
          </a-col>
          <a-col :span="12" class="mt-3">
            <input placeholder="E-mail (электронная почта)" />
          </a-col>
          <a-col :span="24" class="mt-3">
            <textarea
              name="text"
              placeholder="Комментарий к заявке "
              id=""
              cols="60"
              rows="5"
            ></textarea>
          </a-col>
          <a-col :span="12" class="mt-3">
            <h1 class="requiredConfirm">
              Я согласен на обработку персональных данных
            </h1>
          </a-col>
          <a-col>
            <button class="callButton mt-3">Заказать звонок</button>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="12">
        <a-row>
          <div class="reqInfo">
            <div class="reqInfoTitle">
              <span class="requiredMiniInfo">Страна, город доставки :</span>
              <h1 class="reqminiTitle">BENKAM в России</h1>
            </div>
            <input placeholder="select" />
          </div>
          <a-divider />
          <img width="100%" src="../assets/img/map.png" />
          <h3 class="contactMain">ООО “БЕНКАМ РУС” Отдел продаж и склад</h3>
          <ul class="reqContact">
            <li>Россия, г. Химки, ул. Рабочая 2А, корпус 22 А. Офис 206В</li>

            <li>+7 (967) 034-00-07 +7 (495) 795-74-84</li>

            <li>info@benkam.ru sales@benkam.ru</li>
          </ul>
        </a-row>
      </a-col>
    </a-row> -->
    <!-- <a-row>
     <div class=" footer" >
     
      <div class="item1 footerLogo">
          <img  src="../assets/img/footerlogo.png" />
          <span class="footerlogoText"
            >Компания Avant Metal Group зарекомендовала себя как надежного и
            ответственного производителя, в продукции которого вы можете быть
            уверены.
          </span>
        </div>
        <div class="item2">
        <span>О нас</span>
        <ul>
          <li>Миссия и видение</li>
          <li>Профиль компании</li>
          <li>Политика IMS</li>
        </ul>
        <div class="miniInfo">
        <span >База знаний</span>
        <ul>
          <li>Почему алюминий</li>
          <li>Сплавы</li>
          <li>Лабороторные испытания</li>
          <li>Области применения</li>
        </ul>
        </div>
     </div>
      <div class="item3">
        <span>Услуги</span>
        <ul>
          <li>Экструзия</li>
          <li>Андонирование</li>
          <li>Покраска</li>
          <li>Упаковка и логистика</li>
        </ul>
        <ul class="miniInfo">
          <li>Карьера</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div class="item4">
        <span> © 2017 Benkam alu extrusions. Все права защищены. </span>
        <span>Benkam в социальных сетях :</span> 
      </div>
    </div>
    </a-row> -->
    <!-- <a-row class=" footer">
      
      <a-col class="mt-5 mb-5" :span="12" :offset="1">
        <div style="text-align: left">
          <img class="mb-5" src="../assets/img/footerlogo.png" />
          <span class="footerInfo"
            >Компания Avant Metal Group зарекомендовала себя как надежного и
            ответственного производителя, в продукции которого вы можете быть
            уверены.
          </span>
        </div>
      </a-col>
      <a-col :span="4" :offset="3">
        <span>О нас</span>
        <ul>
          <li>Миссия и видение</li>
          <li>Профиль компании</li>
          <li>Политика IMS</li>
        </ul>
      </a-col>
      <a-col :span="4" :offset="3">
        <span>База знаний</span>
        <ul>
          <li>Почему алюминий</li>
          <li>Сплавы</li>
          <li>Лабороторные испытания</li>
          <li>Области применения</li>
        </ul>
      </a-col>
      <a-col :span="4" :offset="18">
        <span>Услуги</span>
        <ul>
          <li>Экструзия</li>
          <li>Андонирование</li>
          <li>Покраска</li>
          <li>Упаковка и логистика</li>
        </ul>
      </a-col>
      <a-col :span="4" :offset="3">
        <ul>
          <li>Карьера</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>
      </a-col>
      <a-col :span="24" style="display: flex; justify-content: space-around">
        <span> © 2017 Benkam alu extrusions. Все права защищены. </span>
        <span>Benkam в социальных сетях :</span>
      </a-col>
    </a-row> -->
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item1 { grid-area: logo; }
.item2 { grid-area: one; }
.item3 { grid-area: two; }
.item4 { grid-area: footer; 
 display: flex;
 justify-content: left;
}
.miniInfo{
  margin-top: 105px;
}
ul {
  list-style-type: none;
}
.footerlogoText{
  text-align: left;
  /* margin-top:25px; */
}
.footerLogo{
  display: grid;
  justify-self:left;
  max-width: 500px;
}
.geoBox {
  height: 272px;
  margin: 50px 0;
  background: #d8f4da;
  box-shadow: 0px 0px 104px rgba(0, 0, 0, 0.15);
}
.geoBoxDec {
  display: grid;
  justify-content: center;
}
.recInfo {
  max-width: 560px;
  height: 280px;
  left: 0px;

  background: #f2f2f2;
  transform: matrix(1, 0, 0, -1, 0, 0);
}
.footer {
  padding: 150px 0;
  background-color: #fafafa;
display: grid;
  grid-template-areas:
    
    'logo  logo one  one two two'
    'footer footer footer footer footer footer';
  grid-template-rows:300px;  
  grid-gap: 10px;
  padding: 100px 45px;
}
#particles-js {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
}
.footerInfo {
  max-width: 528px;
  height: 72px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 2px;

  /* Benkam (text) */

  color: #282828;
}
.reqContact li {
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 2px;

  /* Benkam (text) */

  color: #282828;
}
.reqminiTitle {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  letter-spacing: 0.05em;

  /* Benkam (text) */

  color: #282828;
}
.reqInfoTitle {
  text-align: left;
}
.requiredMiniInfo {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  letter-spacing: 0.05em;

  color: #c1c1c1;
}
.callButton {
  max-width: 368px;
  height: 64px;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  /* _Text */

  color: #fbfbfb;
  /* Benkam (text) green */

  background: #18b025;
}
.requiredConfirm {
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  letter-spacing: 0.05em;

  /* Benkam (teht) gray */

  color: #656565;
}
.requiredInfo {
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 0.05em;

  /* Benkam (teht) gray */

  color: #656565;
  margin-top: 5rem;
  margin-bottom: 15rem;
}
.connectform {
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  /* or 100% */

  letter-spacing: 0.05em;

  /* Benkam (text) green */

  color: #18b025;
}
.partnerMain {
  display: flex;
  justify-content: space-around;
}
.reqInfo {
  display: flex;
  justify-content: space-between;
}
.partnerTitle {
  max-width: 300px;
  display: flex;
  justify-content: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  /* or 150% */
 margin-top:10rem;
  letter-spacing: 0.05em;

  /* Benkam (text) */

  color: #282828;
}
.contactMainInfo {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */

  letter-spacing: 0.05em;

  /* Benkam (text) */

  color: #282828;
}
.contactInfoAlign{
  text-align: left;
}
.contactInfo {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 2px;

  /* Benkam (text) */

  color: #282828;
 text-align: left;
}
.contactMain {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height, or 150% */

  letter-spacing: 0.05em;

  /* Benkam (text) green */

  color: #18b025;
}
.contactAddress {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 2px;

  /* Benkam (text) */

  color: #282828;
}
.thrtitle {
  display: flex;
  justify-content: flex-start;
  max-width: 560px;
  height: 280px;
  left: 0px;

  background: #f2f2f2;
}
.thrtitleD8 {
  display: flex;
  justify-content: flex-start;
  max-width: 560px;
  height: 280px;
  left: 0px;

  background: #d8f4da;
}
.thrtitleNoneBackg {
  display: flex;
  justify-content: flex-start;
  max-width: 560px;
  height: 280px;
  left: 0px;
}
.miniTitleone {
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
  /* identical to box height, or 114% */

  text-align: right;
  letter-spacing: 0.015em;

  /* Benkam (text) */

  color: #282828;
}
.miniTt {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  text-align: right;
  letter-spacing: 2px;

  /* Benkam (text) */

  color: #282828;
}
.line65 {
  position: absolute;
  width: 240px;
  height: 4px;
  margin-top: 15rem;
  /* Benkam (teht) gray */
  left: 0;
  background: #656565;
}
.lineGrey {
  /* position: absolute; */
  width: 112px;
  height: 1px;
  background: #424242;
  margin-top: auto;
  margin-bottom: 3rem;
  margin-left: 10rem;
}
.asection {
  background-color: #f7f7f7;
}
.img2 {
  margin-top: 7rem;
}
.parttwo {
  display: flex;
  justify-content: center;
}
.secone {
  height: 80vh;
}
/* .secthr {
  /* margin-top: 10rem; /
  height: 120vh;
} */
.mainImage {
  margin-top: 20vh;
  text-align: left;
}
.info {
  margin-top: 50px;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 80px;
  /* identical to box height, or 200% */

  letter-spacing: 0.015em;
  width: 55vw;

  color: #282828;
}
.mainLogo {
  width: 37vw;
  height: 12vh;
}

#particles-js {
  height: 100%;
}
.greenInfo {
  position: absolute;
  background-color: #18b025;

  width: 25vw;
  height: 35vh;
  padding: 1rem;
}
.greenInfo h4,
p {
  color: white;
}
.miniTitle {
  width: 24px;
  height: 32px;
  margin-left: 5rem;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  /* or 133% */
  margin-bottom: 1.5rem;
  margin-top: auto;
  letter-spacing: 2px;

  /* Benkam (text) */

  color: #282828;
}
.miniTitle2 {
  width: 90px;
  height: 32px;
  margin-left: 5rem;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  /* or 133% */
  margin-bottom: 1.5rem;
  margin-top: auto;

  letter-spacing: 2px;

  /* Benkam (text) */

  color: #282828;
}
.miniTitleMission {
  width: 240px;
  height: 16px;
  margin-left: 1rem;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  margin-bottom: 2.5rem;
  margin-top: auto;
  /* identical to box height, or 133% */

  letter-spacing: 2px;

  /* Benkam (text) */

  color: #282828;
}
.secInfotwo {
  text-align: right;
  margin-right: 25px;
  margin-top: 15rem;
}
.waterInfo {
  margin-top: 7rem;
  text-align: left;
  width: 400px;
  height: 64px;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  letter-spacing: 2px;

  /* Benkam (text) green */

  color: #18b025;
}
.waterTitle {
  /* position: relative; */
  margin-top: 15rem;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: 500;
  font-size: 120px;
  line-height: 104px;
  /* identical to box height, or 87% */

  letter-spacing: 0.015em;

  /* Benkam (text) */

  color: #282828;
}
.waterMore {
  margin-top: 8rem;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  text-align: center;
  letter-spacing: 2px;

  /* Benkam (text) */

  color: #282828;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.waterUnderImg {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.05em;
  text-align: left;
  /* Benkam (teht) gray */

  color: #656565;
}
.waterImg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
/*********Section 5*****/
.fiveMaint {
  margin-top: 15rem;
  width: 560px;
  height: 144px;
  text-align: left;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  /* or 120% */

  letter-spacing: 0.015em;

  /* Benkam (text) */

  color: #282828;
}
.fiveMainb {
  width: 20rem;
  height: 160px;
  text-align: left;
  margin-top: 3rem;

  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  letter-spacing: 0.015em;

  /* Benkam (text) */

  color: #282828;
}
.fiveMainc {
  width: 238px;
  height: 216px;
  margin-top: 19rem;
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  letter-spacing: 0.05em;
  text-indent: 24px;

  /* Benkam (text) */

  color: #282828;
}
/**sec6 */

.sec6 {
  height: 100vh;
  margin-top: 10rem;
  /* background-image: url("../assets/img/6.png"); */
  position: relative;
}
.sec6Box {
  position: absolute;
  text-align: left;
  margin-top: 10rem;
  margin-left: 10rem ;
  width: 40vw;
  z-index: 1;
}
.sec6Title {
  /* position: absolute; */
  max-width: 1200px;
  height: 96px;

  font-family: Styrene A LC;
  font-style: normal;
  font-weight: 500;
  font-size: 96px;
  line-height: 96px;
  /* identical to box height, or 100% */

  letter-spacing: 0.015em;

  /* text (bottom) */

  color: #fafafa;
}
.sec6Info {
  /* position: absolute; */
  width: 880px;
  height: 48px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  letter-spacing: 0.05em;

  /* text (bottom) */

  color: #fafafa;
}
/**about */
.aboutMaint {
  text-align: left;
  height: 320px;
  margin-top: 15rem;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  /* or 125% */

  letter-spacing: 0.015em;

  /* Benkam (text) */

  color: #282828;
}
.aboutMainc {
  width: 15rem;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  /* or 171% */

  margin-top: 20rem;
  letter-spacing: 0.05em;

  /* Benkam (teht) gray */

  color: #656565;
}
/*********************app */
.appTitle {
  margin-top: 5rem;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  /* identical to box height, or 117% */

  letter-spacing: 0.015em;

  /* Benkam (text) */

  color: #282828;
}
.appInfo {
  margin-top: 5rem;
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  letter-spacing: 0.05em;

  /* Benkam (teht) gray */

  color: #656565;
}
/**geoInfo */
.geoTitle {
  margin-top: 5rem;
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  /* identical to box height, or 100% */

  letter-spacing: 0.05em;

  /* Benkam (text) green */

  color: #18b025;
}
.geoInfo {
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */
  letter-spacing: 0.05em;

  /* Benkam (teht) gray */

  color: #656565;
}
.geoButton {
  display: flex;
  justify-content: space-around;

  margin: 7rem 0 0 0;
}
.geoTransportTitle {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  letter-spacing: 0.05em;

  /* Benkam (text) */

  color: #282828;
}
.geoTransport {
  display: flex;
  justify-content: space-between;
}
.geoTitleCount {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 2px;

  /* Benkam (teht) gray */

  color: #656565;
}
.geoTitleCountNum {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height, or 150% */

  /* Benkam (text) green */

  color: #18b025;
}
.geoTitleDay {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 64px;
  /* identical to box height, or 267% */

  display: flex;
  align-items: flex-end;
  letter-spacing: 0.015em;

  /* Benkam (text) green */

  color: #18b025;
}
.geoDay {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.gCountry {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.geoCountry {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 2px;

  /* Benkam (teht) gray */

  color: #656565;
}
.geoCountryTitle {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  letter-spacing: 0.05em;

  /* Benkam (text) */

  color: #282828;
}
.geoCountryLink {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */

  letter-spacing: 0.05em;

  /* Benkam (text) green */

  color: #18b025;
}
.geoMap {
  display: flex;
  justify-content: center;
  margin: 5rem;
}
.geoMap1 {
  position: absolute;
  margin-top: 20rem;
  max-width: 400px;
  height: 208px;
  left: 7vw;
  right: auto;
}
.geoMap2 {
  max-width: 912px;
  height: 449.55px;
}
.geoMap3 {
  position: absolute;
  margin-top: 20rem;
  left: auto;
  right: 3vw;
  max-width: 400px;
  height: 208px;
}
@media screen and (max-width: 375px)  {
  .thrtitle{
    display:grid;
      height: 120px;
  }
  .lineGrey{
    position:absolute;
    margin-left: 5rem;
    margin-top:6.5rem;
  }
  .greenInfo{
     width: 65vw;
  height: 35vh;
  }
  .info{
      font-size: 16px;
       line-height: 22px;

  letter-spacing: 0.015em;
  width: 55vw;

  }
  .mainLogo {
  width: 57vw;
  height: 15vh;
  }
  .secInfotwo{
    margin-top: 4rem;
  }
}
@media screen and (max-width: 768px)  {
  .thrtitle{
    display:grid;
      height: 120px;
      max-width: 350px;
  }
  .lineGrey{
    position:absolute;
    margin-left: 5rem;
    margin-top:6.5rem;
  }
  .greenInfo{
     width: 65vw;
     height: 19vh;
  }
  .info{
      font-size: 26px;
       line-height: 22px;

  letter-spacing: 0.015em;
  width: 60vw;

  }
  .mainLogo {
  width: 57vw;
  height: 15vh;
  }
  .secInfotwo{
    margin-top: 5rem;
  }
}

</style>

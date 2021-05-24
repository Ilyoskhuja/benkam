<template>
<div>
     <!-- <vue-particles
        color="#f7f7f7"
        :particleOpacity="90.7"
        :particlesNumber="8"
        shapeType="triangle"
        :particleSize="4"
        linesColor="#000000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="650"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        style="position:an z-index:-15"
      >
      
      </vue-particles> -->
   <a-row class="secone">
      <a-col :span="12" :offset="6">
      <div class="mainImage">
       <img class="mainLogo" src="../assets/img/BenkamBig.png">
       <p class="info">Современные алюминиевые решения</p>
      </div>
      </a-col>
    </a-row>
    <a-row class="sectwo">
      <a-col :span="24">
        <div class="parttwo">
        <div class="img2">
          <img width="100%" src="../assets/img/2.jpg">
        </div>
        <div class="greenInfo">
         <h4>BENKAM ALU EXTRUSIONS ®</h4>
         <p class="mt-5">Молодое, стремительно развивающееся предприятие, специализируется на производстве алюминиевого профиля различных типов и размеров.</p>
        </div>
        </div>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" align="middle" class="secthr">
      
      <!-- <particles-bg type="ball" :color="white" :bg="true" /> -->
     <a-col :span="22" :offset="2">
       <div class="thrtitle">
       <span class="lineGrey"></span>
       <span class="miniTitle">Производственная мощность</span>
       </div>
     </a-col>
     <a-col :span="4" :offset="2">
      <div class="secInfotwo">
       <h1 class="miniTitleone">1000</h1>
       <h4  class="miniTitlesec">тонн</h4>
       <p class="miniTt">Складской запас готовой продукции.</p>
      </div>      
     </a-col>
     
     <a-col :span="4" :offset="2">
       <div class="secInfotwo">
       <h1 class="miniTitleone">3</h1>
       <h4  class="miniTitlesec">новейших пресса</h4>
       <p class="miniTt">Возможности изготовления профиля до 279.5мм в диаметре.</p>
       </div>
     </a-col>
     
     <a-col :span="4" :offset="2">
       <div class="secInfotwo">
       <h1 class="miniTitleone">28</h1>
       <h4  class="miniTitlesec">тысяч тонн в год</h4>
       <p class="miniTt">Производительность собственной линии анодирования.</p>
       </div>
     </a-col>
     
     <a-col :span="4" :offset="2">
       <div class="secInfotwo">
       <h1 class="miniTitleone">36</h1>
       <h4 class="miniTitlesec">тысяч тонн в год</h4>
       <p class="miniTt">Производительная мошность изготовления профиля.</p>
       </div>
     </a-col>
     
    </a-row>
     <a-row class="secthr" type="flex" justify="space-between" >
     <a-col :span="22" :offset="2">
       <div class="thrtitle">
       <span class="lineGrey"></span>
       <span class="miniTitle2">Наши услуги</span>
       </div>
     </a-col>
     <a-col :span="1" :offset=0>
      <img class="waterImg" src="../assets/img/water.png">
     </a-col>
     
     <a-col :span="4" :offset="1">
       <h1 class="waterTitle">Анодирование</h1>
       <h1 class="waterInfo">Для чего необходим <br> процесс анодирования?</h1>
       <p class="waterMore">Подробнее</p>
  
     </a-col>
     
     <a-col :span="14" >
       <img class="waterImg" src="../assets/img/water2.png">
  
     </a-col>
    <a-col :span="14" :offset="10">
       <h1 class="waterUnderImg">Наши экструзионные линии могут производить профили до 7,5 метров в автоматическом режиме. Экструдируемый вес профилей составляет от 50 до 15 кг на метр.</h1>
  
     </a-col>
     
    </a-row>
    <a-row style="margin-top:5rem" type="flex" justify="space-around">
      <a-col :span="22" :offset="2">
       <div class="thrtitle">
       <span class="lineGrey"></span>
       <span class="miniTitleMission">Миссия и видение</span>
       </div>
     </a-col>
     <a-col :span="5" :offset="4">
      <h1 class="fiveMaint">Молодое – значит оценивающее <br>по-новому.</h1>
      <h4 class="fiveMainb">Анализируя мировой рынок, мы стремимся идти в ногу со временем предлагая самые выгодные условия для наших клиентов.</h4>
     </a-col>
     <a-col :span="3" :offset="1">.
       
       <span class="line65"></span>
       <h5 class="fiveMainc">Благодаря профессиональному и квалифицированному персоналу, а также высокотехнологичному оборудованию мы сможем воплотить самые сложные и инновационные проекты. Нам важен успех наших клиентов !</h5>
     </a-col>
      <a-col :span="6" :offset="0">
        
       <span class="line65"></span>
       <h5 class="fiveMainc">Создание инновационных и комплексных решений, отвечающих потребностям рынка. Внедрение качественной продукции на рынок.  </h5>
     </a-col>
    </a-row>
    <a-row class="sec6">

      
      <a-col :span="16" :offset="4">
        <div class="sec6Box">
       <h1 class="sec6Title">Инновационность</h1>
       <h6 class="sec6Info">Непрерывное внедрение новшеств, обеспечивающих повышение эффективности процессов производства, и <br> улучшения качества продукции, востребованное рынком.</h6>
        </div>
      </a-col>
     </a-row>

       <a-row style="margin-top:5rem" type="flex" justify="space-around">
      <a-col :span="22" :offset="2">
       <div class="thrtitle">
       <span class="lineGrey"></span>
       <span class="miniTitleMission">Коротко о нас</span>
       </div>
     </a-col>
     <a-col :span="6" :offset="4">
      <h1 class="aboutMaint">Благодаря опыту наших с пециалистов из Европы и неординарному подходу к работе, каждый наш клиент может рассчитывать на техническую помощь и поддержку в разработке профилей.</h1>
     </a-col>
     <a-col :span="3" :offset="1">.
       
       <span class="line65"></span>
       <h5 class="aboutMainc">На веб-сайте BENKAM предоставлена полная информация и доступ о нашей производственной мощности, доступных алюминиевых сплавов и возможностях механической обработки и отделки поверхности алюминиевых профилей</h5>
     </a-col>
   
    </a-row>
     <a-row class="secthr" type="flex" justify="space-between" >
     <a-col :span="22" :offset="2">
       <div class="thrtitle">
       <span class="lineGrey"></span>
       <span class="miniTitle2">применение</span>
       </div>
     </a-col>
     <a-col :span="2" :offset=0>
      <img class="waterImg" src="../assets/img/man.png">
     </a-col>
     
     <a-col :span="4" :offset="1">
       <h1 class="appTitle">Транспорт</h1>
       <h1 class="appInfo">Современные города невозможно представить без алюминия. Из него возводятся пешеходные, фасадные, оконные и раздвижные системы, опалубки и строительные леса.</h1>
       <p class="waterMore">Подробнее</p>
  
     </a-col>
     
     <a-col :span="14" >
       <img class="waterImg" src="../assets/img/car.png">
  
     </a-col>
 
     
    </a-row>
    <a-row>
      <a-col :span="12" :offset="2">
      <h1 class="geoTitle">Рассчитайте точный срок доставки</h1>
      <h4 class="geoInfo">Узнайте точные сроки доставки до вашего города или центрального склада с ресурсами нашего отдела логистики и собственным автопарком.</h4>
      </a-col>  
      <a-col :span="22" :offset="2">
        <div class="geoButton">
    <a-select  default-value="lucy" style="width: 120px" @change="handleChange">
      <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
      <a-select-option value="disabled" disabled>
        Disabled
      </a-select-option>
      <a-select-option value="Yiminghe">
        yiminghe
      </a-select-option>
    </a-select>
    <a-select  default-value="lucy" style="width: 120px" disabled>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
    <a-select  default-value="lucy" style="width: 120px" loading>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
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
       <div  >
          <h6 class="geoTransportTitle">Срок доставки <span class="geoTitleCount">(количество дней):</span></h6>
          <div class="geoDay">
          <span class="geoTitleCountNum">20 - 25 </span> <span class="geoTitleDay">дней</span>
          </div>
       </div>    
       <div>
          <h6 class="geoTransportTitle">Тип транспорта :</h6>
          <div class="geoTransport">
            <img src="../assets/img/cargo.png">
            <img src="../assets/img/tanker.png">
          </div>
        </div>    
    
        </div>
      </a-col>
      
        <a-col :span="22" :offset="2">
          <div class="geoMap">
        <img class="geoMap1" src="../assets/img/country.png">
        
        <img class="geoMap2" src="../assets/img/map.png">
        
        <img class="geoMap3" src="../assets/img/uzbekistan.png">
          </div>
        </a-col> 
        
    </a-row>
    <a-row style="margin-top:5rem" type="flex" justify="space-around">
      <a-col class="mt-5 mb-5" :span="22" :offset="2">
       <div class="thrtitle">
       <span class="lineGrey"></span>
       <span class="miniTitleMission">Наши  контакты</span>
       </div>
     </a-col>
     <a-col :span="6">

       <h1 class="contactMain">Головной офис</h1>
       <ul>
         <li><span class="contactInfo">Узбекистан, г. Ташкент, Учтепинский район,<br> ул. Хирмонтепа, д-1</span></li>
         <li> <span class="contactInfo">+998 71 203 01 01 <br>
                                        +998 95 144 49 59</span></li>
         <li><span class="contactInfo">info@benkam.be</span></li>
       </ul>

       <h1 class="contactMainInfo">База производства :</h1>
        <li>Навоийская область, Карманинский <br> район, СЭЗ “Навои”</li>
         <li>+998 79 222 00 00 </li>
     </a-col>
     <a-col :span="6">
          <h1 class="contactMain">BENKAM в России</h1>
       <ul>
         <li>Россия, г. Химки, ул. Рабочая 2А, корпус 22 А. Офис 206В</li>
         <li>+7 (967) 034-00-07    +7 (495) 795-74-84</li>
         <li>info@benkam.ru  sales@benkam.ru</li>
       </ul>

       <h1 class="contactMain">BENKAM в Европе</h1>
        <li>ул. Галинес 1, Вильнюс, Литва 14247
                Регистрационный номер: 304590804 <br>
                            ИНН: LT100011262117</li>
         <li>+370 67 608 303</li>
         <li>Email: a.yokubov@benkam.be</li>

      </a-col>
   
    </a-row>
     <a-row style="margin-top:5rem" type="flex" justify="space-around">
      <a-col class="mt-5 mb-5" :span="22" :offset="2">
       <div class="thrtitle">
       <span class="lineGrey"></span>
       <span class="miniTitleMission">Партнеры</span>
       </div>
     </a-col>
     <a-col :span="16">
     <div class="partnerMain">
      <h1 class="partnerTitle">Каждый партнер - <br>это ценность для <br>нас.</h1>
       
     <img src="../assets/img/eco.png">
     </div>
     <div class="partnerMain">
     <img  src="../assets/img/alu.png">
     <img src="../assets/img/emmebi.png"></div>
     
     </a-col>
     <a-col :span="8">
       <img src="../assets/img/akzo.png">
      </a-col>
   
    </a-row>
      <a-row style="margin-top:5rem" type="flex" justify="space-around">
     
     <a-col :span="12">
      <h1 class="partnerTitle">Заполните форму обратной <br> связи и мы оперативно <br>свяжемся с вами !</h1>
       <span>Поля отмеченные (*) оязательные для заполнения !</span>
      <a-row>
        <a-col :span="12">
        <input placeholder="Ваше Имя" />
        </a-col>
        <a-col :span="12">
          <input placeholder="Ваша Фамилия">
        </a-col>
        <a-col :span="12">
          <input placeholder="Номер тел.:  + 998 (__) ___ __ __">
        </a-col>
        <a-col :span="12">
          <input placeholder="E-mail (электронная почта)">
        </a-col>
        <a-col :span="12">
          <textarea name="text" placeholder="Комментарий к заявке " id="" cols="30" rows="10"></textarea>
        </a-col>
        <a-col :span="12">
          <h1>Я согласен на обработку персональных данных</h1>
        </a-col>
        <a-col>
          <button>Заказать звонок</button>
        </a-col>
      </a-row>
     
     </a-col>
     <a-col :span="12">
     <a-row>
       <div class="partnerMain">
         <h1>Benkam</h1>
         <input placeholder="select">
       </div>
       <img src="../assets/img/map.png">
       <h3>ООО “БЕНКАМ РУС” Отдел продаж и склад</h3>
       <h4>Россия, г. Химки, ул. Рабочая 2А, корпус 22 А. Офис 206В</h4>
       
       <h4>+7 (967) 034-00-07 +7 (495) 795-74-84</h4>
       
       <h4>info@benkam.ru sales@benkam.ru</h4>
     </a-row>
     </a-col>
   
    </a-row>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.partnerMain{
  display: flex;
  justify-content: space-around;
}
.partnerTitle{
  display: flex;
  justify-content: left;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 48px;
/* or 150% */

letter-spacing: 0.05em;

/* Benkam (text) */

color: #282828;
}
.contactMainInfo{
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
.contactInfo{
  font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: 2px;

/* Benkam (text) */

color: #282828;
display: flex;
justify-content: left;
}
.contactMain{
  
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 48px;
/* identical to box height, or 150% */

letter-spacing: 0.05em;

/* Benkam (text) green */

color: #18B025;

}
.contactAddress{
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
.thrtitle{
  display: flex;
  justify-content: flex-start;
}
.miniTitleone{


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
.miniTt{
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
.line65{
  position: absolute;
width: 240px;
height: 4px;
margin-top: 15rem;
/* Benkam (teht) gray */
 left:0;
background: #656565;
}
.lineGrey{
/* position: absolute; */
width: 112px;
height: 1px;
background: #424242;
margin-top: 5rem;
}
.asection{
  background-color: #f7f7f7;

}
.img2{
  
      margin-top: 7rem;
}
.parttwo{
  display:flex;
  justify-content:center;
}
.secone{
  height: 80vh;
}
.secthr{
  height: 100vh;
}
.mainImage{
    margin-top:20vh ;
    text-align: left;
  
}
.info{
 margin-top:50px;
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
.mainLogo{

 width: 37vw;
height: 12vh; 
}

#particles-js {
  height: 100%;
}
.greenInfo{
  
    position: absolute;
    background-color: #18B025;
    
    width: 25vw;
    height: 35vh;
    padding: 1rem;
}
.greenInfo h4,p{
  color: white;
}
.miniTitle{
width: 24px;
height: 32px;
margin-left: 5rem;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
/* or 133% */
margin-top: 4.5rem;

letter-spacing: 2px;

/* Benkam (text) */

color: #282828;
}
.miniTitle2{
width: 90px;
height: 32px;
margin-left: 5rem;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
/* or 133% */
margin-top: 4.5rem;

letter-spacing: 2px;

/* Benkam (text) */

color: #282828;
}
.miniTitleMission{
  
width: 240px;
height: 16px;
margin-left: 5rem;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;

margin-top: 4.5rem;
/* identical to box height, or 133% */

letter-spacing: 2px;

/* Benkam (text) */

color: #282828;

}
.secInfotwo{
  text-align: right;
  margin-right: 25px;
}
.waterInfo{
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

color: #18B025;
}
.waterTitle{
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
.waterMore{
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
.waterUnderImg{
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
.waterImg{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
/*********Section 5*****/
.fiveMaint{
  margin-top:15rem;
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
.fiveMainb{
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
.fiveMainc{
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

.sec6{
  height: 100vh;
  margin-top:10rem ;
  background-image: url('../assets/img/6.png');
}
.sec6Box{
  text-align: left;
  margin-top: 10rem;
  width: 40vw;
}
.sec6Title{
  /* position: absolute; */
width: 1200px;
height: 96px;


font-family: Styrene A LC;
font-style: normal;
font-weight: 500;
font-size: 96px;
line-height: 96px;
/* identical to box height, or 100% */

letter-spacing: 0.015em;

/* text (bottom) */

color: #FAFAFA;
}
.sec6Info{
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

color: #FAFAFA;
}
/**about */
.aboutMaint{
  width: 25rem;
height: 320px;
margin-top:15rem;
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
.aboutMainc{
  width: 15rem;
  font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
text-align: left;
/* or 171% */

margin-top:20rem;
letter-spacing: 0.05em;

/* Benkam (teht) gray */

color: #656565;
}
/*********************app */
.appTitle{
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
.appInfo{
  margin-top:5rem ;
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
.geoTitle{
  margin-top: 10rem;
  width: 50rem;
  font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 48px;
/* identical to box height, or 100% */

letter-spacing: 0.05em;

/* Benkam (text) green */

color: #18B025;

}
.geoInfo{
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
.geoButton{
  display: flex;
  justify-content: space-around;
  
 margin: 7rem 0 0 0 ;
}
.geoTransportTitle{
  
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
.geoTransport{
  display: flex;
  justify-content: space-between;
}
.geoTitleCount
{
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
.geoTitleCountNum{
  font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 72px;
/* identical to box height, or 150% */


/* Benkam (text) green */

color: #18B025;
}
.geoTitleDay{
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

color: #18B025;
}
.geoDay{
 display: flex;
 justify-content: space-around;
 flex-direction: row;
}
.gCountry{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.geoCountry{
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
.geoCountryTitle{
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
.geoCountryLink{
  font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;
/* identical to box height, or 160% */

letter-spacing: 0.05em;

/* Benkam (text) green */

color: #18B025;

}
.geoMap{
  display: flex;
  justify-content: center;
  margin: 5rem;
}
.geoMap1{
  position: absolute;
  margin-top:20rem ;
 max-width:400px;
 height: 208px;
 left: 7vw;
 right: auto;
}
.geoMap2{
  max-width: 912px;
  height: 449.55px;
}
.geoMap3{
  position: absolute;
    margin-top:20rem ;
   left: auto;
   right: 3vw;
   max-width: 400px;
  height: 208px;
}
</style>

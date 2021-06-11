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
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <a-row class="secone">
      <a-col :span="24" style="display: flex">
        <div class="thrtitleNoneBackg">
          <span class="lineGrey"></span>
          <div style="margin-top: auto; margin-bottom: 2.3rem">
            <span class="miniTitle">01.</span>
            <p class="seconeInfo">Современные алюминиевые решения</p>
          </div>
        </div>
        <div class="mainImage">
          <img class="mainLogo" src="../assets/img/BenkamBig.png" />
        </div>
      </a-col>
    </a-row>
    <a-row class="sectwo">
      <div class="parttwo">
        <div class="img2">
          <div class="thrtitleNoneBackg2"></div>
          <div class="t34">
            <span class="whiteLine"></span>
            <div style="margin-top: auto; margin-bottom: 5.3rem">
              <span class="miniTitle" style="color: white">02.</span>
              <p class="sectwoInfo">BENKAM ALU EXTRUSIONS ®</p>
            </div>
          </div>
          <!-- <img src="../assets/img/2.jpg" /> -->
        </div>
        <div class="greenInfo">
          <span>BENKAM ALU EXTRUSIONS ®</span>
          <p class="mt-5">
            Молодое, стремительно развивающееся предприятие, специализируется на
            производстве алюминиевого профиля различных типов и размеров.
          </p>
        </div>
      </div>
    </a-row>
    <a-row>
      <div class="gridThird">
        <div class="gridth-item1">
          <div class="thrtitleNoneBackg">
            <span
              class="lineGrey"
              style="margin-top: 15.7rem; margin-bottom: auto"
            ></span>
            <div style="margin-top: 15.1rem; margin-bottom: auto">
              <span class="miniTitle">03.</span>
              <p class="seconeInfo">Производственная мощность</p>
            </div>
          </div>
        </div>
        <div class="gridth-item2">
          <div class="thBackg2"></div>
          <div class="t342">
            <span class="miniTitleth">28</span>
          </div>
          <h1 class="secthCountYear">тысяч тонн в год</h1>
          <h2 class="secthCountYearMini">
            Производительность собственной линии анодирования.
          </h2>
        </div>
        <div class="gridth-item3">
          <div class="thBackg2" style="opacity: 1"></div>
          <div class="t342">
            <span class="miniTitleth" style="color: black">36</span>
          </div>
          <h1 class="secthCountYear" style="color: black">тысяч тонн в год</h1>
          <h2 class="secthCountYearMini" style="color: black">
            Производительная мошность изготовления профиля.
          </h2>
        </div>
        <div class="gridth-item4">
          <div class="thBackg2" style="opacity: 1"></div>
          <div class="t342">
            <span class="miniTitleth" style="color: black">3</span>
          </div>
          <h1 class="secthCountYear" style="color: black">новейших пресса</h1>
          <h2 class="secthCountYearMini" style="color: black">
            Возможности изготовления профиля до 279.5мм в диаметре.
          </h2>
        </div>
        <div class="gridth-item5">
          <div class="thBackg2"></div>
          <div class="t342">
            <span class="miniTitleth">1 000</span>
          </div>
          <h1 class="secthCountYear">тонн</h1>
          <h2 class="secthCountYearMini">Складской запас готовой продукции.</h2>
        </div>
        <div class="gridth-item6"></div>
      </div>
      <!-- <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 24 }"
      >
        <div class="thrtitle">
          <span class="lineGrey"></span>
          <span class="miniTitle">Производственная мощность</span>
        </div>
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 6, offset: 4 }"
        :lg="{ span: 4, offset: 2 }"
      >
        <div class="secInfotwo">
          <h1 class="miniTitleone">1000</h1>
          <h4 class="miniTitlesec">тонн</h4>
          <p class="miniTt">Складской запас готовой продукции.</p>
        </div>
      </a-col>

      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 8, offset: 4 }"
        :lg="{ span: 4, offset: 2 }"
      >
        <div class="secInfotwo">
          <h1 class="miniTitleone">3</h1>
          <h4 class="miniTitlesec">новейших пресса</h4>
          <p class="miniTt">
            Возможности изготовления профиля до 279.5мм в диаметре.
          </p>
        </div>
      </a-col>

      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 6, offset: 4 }"
        :lg="{ span: 4, offset: 2 }"
      >
        <div class="secInfotwo">
          <h1 class="miniTitleone">28</h1>
          <h4 class="miniTitlesec">тысяч тонн в год</h4>
          <p class="miniTt">
            Производительность собственной линии анодирования.
          </p>
        </div>
      </a-col>

      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 8, offset: 4 }"
        :lg="{ span: 4, offset: 2 }"
      >
        <div class="secInfotwo">
          <h1 class="miniTitleone">36</h1>
          <h4 class="miniTitlesec">тысяч тонн в год</h4>
          <p class="miniTt">Производительная мошность изготовления профиля.</p>
        </div>
      </a-col> -->
    </a-row>
    <a-row>
      <div class="gridFour">
        <div class="gridf-item1">
          <div class="thrtitleNoneBackg2" style="opacity: 1"></div>
          <div class="fourt34">
            <span class="whiteLine" style="background: #424242"></span>
            <div style="margin-top: auto; margin-bottom: 5.3rem">
              <span class="miniTitle" style="color: black">04</span>
              <p class="sectwoInfo" style="color: black">Коротко о нас</p>
            </div>
          </div>
          <h1 class="fourInfo">
            Benkam является крупнейшим производителем экструзионного алюминия в
            Центральной Азии и занимает лидирующее место по поставке
            алюминиевого профиля для различного назначения.
          </h1>
          <button class="detailButton" style="margin-left:20rem">
           <img
                      style="margin-top: 3.5rem; margin-left: 3em; margin-right:5em"
                      src="@/assets/img/detailButton.png"
                    ><span style="margin-top:3.5rem">Подробнее</span>
          </button>
        </div>
        <div class="gridf-item2">
          <div class="fourGI2box">
            <h1 style="margin-top: 2.5rem">250</h1>
            <h1 class="fourGI2">Более специалистов своего дела</h1>
          </div>
          <h2 class="fourGI2mini">На производстве занято</h2>
        </div>
        <div class="gridf-item3">
          <div class="fourGI2box" style="margin-left: 290px">
            <h1 style="margin-top: 2.5rem">3 000</h1>
            <h1 class="fourGI2">Более тонн годовой продуции в месяц</h1>
          </div>
          <h2
            class="fourGI2mini"
            style="width: 320px; text-align: left; margin-left: 29.5rem"
          >
            Производственная мощность предприятия по выпуску алюминиевых
            профилей
          </h2>
        </div>
      </div>
    </a-row>
    <!-- <a-row type="flex">
      <a-col :span="24">
        <div class="thrtitle">
          <span class="lineGrey"></span>
          <span class="miniTitle2">Наши услуги</span>
        </div>
      </a-col>
      <a-col :span="24">
        <a-carousel :after-change="onChange">
          <div>
            <a-row>
              <a-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 24 }"
                :lg="{ span: 4, offset: 8 }"
              >
                <h1 class="waterTitle">Анодирование</h1>
                <h1 class="waterInfo">
                  Для чего необходим <br />
                  процесс анодирования?
                </h1>
                <p class="waterMore">Подробнее</p>
                <div class="waterImg">
                  <img src="../assets/img/water2.png" />
                </div>
              </a-col>

              <a-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 20, offset: 2 }"
                :lg="{ span: 20, offset: 12 }"
              >
                <h1 class="waterUnderImg">
                  Наши экструзионные линии могут производить профили до 7,5
                  метров в автоматическом режиме. Экструдируемый вес профилей
                  составляет от 50 до 15 кг на метр.
                </h1>
              </a-col>
            </a-row>
          </div>
          <div>
            <a-row>
              <a-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 24 }"
                :lg="{ span: 4, offset: 8 }"
              >
                <h1 class="waterTitle">Анодирование</h1>
                <h1 class="waterInfo">
                  Для чего необходим <br />
                  процесс анодирования?
                </h1>
                <p class="waterMore">Подробнее</p>
                <div class="waterImg">
                  <img src="../assets/img/roof.png" />
                </div>
              </a-col>
              <a-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 20, offset: 2 }"
                :lg="{ span: 20, offset: 12 }"
              >
                <h1 class="waterUnderImg">
                  Наши экструзионные линии могут производить профили до 7,5
                  метров в автоматическом режиме. Экструдируемый вес профилей
                  составляет от 50 до 15 кг на метр.
                </h1>
              </a-col>
            </a-row>
          </div>
        </a-carousel>
      </a-col>
    </a-row> -->
    <a-row type="flex">
      <a-col :span="24">
        <div
          class="thrtitleNoneBackg2"
          style="opacity: 1; background: #d8f4da"
        ></div>
        <div class="fourt34">
          <span class="whiteLine" style="background: #424242"></span>
          <div style="margin-top: auto; margin-bottom: 5.3rem">
            <span class="miniTitle" style="color: black">05</span>
            <p class="sectwoInfo" style="color: black">Миссия и видение</p>
          </div>
        </div>
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 18, offset: 4 }"
        :lg="{ span: 4, offset: 2 }"
      >
        <h1 class="fiveMaint">Молодое – значит оценивающее <br />по-новому.</h1>
        <h4 class="fiveMainb">
          Анализируя мировой рынок, мы стремимся идти в ногу со временем
          предлагая самые выгодные условия для наших клиентов.
        </h4>
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 4, offset: 4 }"
        :lg="{ span: 4, offset: 2 }"
      >
        <!-- <span class="line65"></span> -->
        <h5 class="fiveMainc">
          Благодаря профессиональному и квалифицированному персоналу, а также
          высокотехнологичному оборудованию мы сможем воплотить самые сложные и
          инновационные проекты. Нам важен успех наших клиентов !
        </h5>
        <button class="detailButton" style="margin-bottom: 15rem">
        <img
                      style="margin-top: 3.5rem; margin-left: 3em; margin-right:5em"
                      src="@/assets/img/detailButton.png"
                    ><span style="margin-top:3.5rem">Подробнее</span>
        </button>
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 4, offset: 4 }"
        :lg="{ span: 4, offset: 2 }"
      >
        <!-- <span class="line65"></span> -->
        <h5 class="fiveMainc">
          Создание инновационных и комплексных решений, отвечающих потребностям
          рынка. Внедрение качественной продукции на рынок.
        </h5>
      </a-col>
    </a-row>
    <a-row class="secSix">
      <div class="thrtitleNoneBackg2"></div>
      <div class="t34" style="position: relative">
        <span class="whiteLine"></span>
        <div style="margin-top: auto; margin-bottom: 5.3rem">
          <span class="miniTitle" style="color: white">06.</span>
          <p class="sectwoInfo" style="text-align: left">
            Выгодные преимещества и <br />
            основные принципы <br />компании
          </p>
        </div>
      </div>
      <div class="sec6Box">
        <h1 class="sec6Title">Инновационность</h1>
        <h6 class="sec6Info">
          Создание инновационных и комплексных решений, отвечающих
          потребностям<br />
          рынка. Внедрение качественной продукции на рынок.
        </h6>
      </div>
    </a-row>
    <a-row style="height: 560px">
      <div class="successBack"></div>

      <div style="display: flex; justify-content: center">
        <div style="margin-top: 19vh; margin-right: 80px">
          <img width="112px" height="83px" src="../assets/img/VectorUp.png" />
          <span class="darkLine"></span>
        </div>
        <h1 class="success">Нам важен успех наших клиентов !</h1>

        <img
          style="margin-top: 22vh; margin-left: 90px"
          width="152px"
          height="112px"
          src="../assets/img/VectorDown.png"
        />
      </div>
    </a-row>
    <!-- <a-row class="mt-5" type="flex">
      <a-col :span="24">
        <div class="thrtitleD8">
          <span class="lineGrey"></span>
          <span class="miniTitleMission">Коротко о нас</span>
        </div>
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 18, offset: 4 }"
        :lg="{ span: 7, offset: 2 }"
      >
        <h1 class="aboutMaint">
          Благодаря опыту наших с пециалистов из Европы и неординарному подходу
          к работе, каждый наш клиент может рассчитывать на техническую помощь и
          поддержку в разработке профилей.
        </h1>
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 18, offset: 4 }"
        :lg="{ span: 3, offset: 1 }"
      >
        <span class="line65"></span>
        <h5 class="aboutMainc">
          На веб-сайте BENKAM предоставлена полная информация и доступ о нашей
          производственной мощности, доступных алюминиевых сплавов и
          возможностях механической обработки и отделки поверхности алюминиевых
          профилей
        </h5>
      </a-col>
    </a-row> -->
    <a-row>
      <div class="thrtitleNoneBackg2" style="opacity: 1"></div>
      <div class="t34" style="position: relative">
        <span class="whiteLine" style="background: black"></span>
        <div style="margin-top: auto; margin-bottom: 5.3rem">
          <span class="miniTitle">07.</span>
          <p class="sectwoInfo" style="color: black">Наши услуги</p>
        </div>
      </div>

      <a-col :span="24">
        <a-carousel :after-change="onChange">
          <div>
            <a-row>
              <a-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 24 }"
                :lg="{ span: 24 }"
              >
                <h1 class="waterTitle">Экструзия</h1>
                <h6 class="waterTitleInfo">
                  Наши экструзионные линии могут производить профили до 7,5
                  <br />метров в автоматическом режиме. Экструдируемый вес
                  профилей <br />
                  составляет от 50 гр до 15 кг на метр. Максимальный диаметр
                  <br />
                  экструдированного профиля 280 мм, а ширина 360 мм
                </h6>
                
                  <button class="detailButton" style="margin-left:20rem">
                    <img
                      style="margin-top: 3.5rem; margin-left: 3em; margin-right:5em"
                      src="@/assets/img/detailButton.png"
                    ><span style="margin-top:-1rem">Подробнее</span>
                  </button>
               
                <div class="waterImg">
                  <img width="100%" height="auto" src="../assets/img/benkammanu.png" />
                </div>
              </a-col>
            </a-row>
          </div>
          <div>
            <a-row>
             <a-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 24 }"
                :lg="{ span: 24 }"
              >
                <h1 class="waterTitle">Анодирование</h1>
                <h6 class="waterTitleInfo">
                 Анодировочные резервуары длиной 8 метров способны <br> наносить декоративный анодный слой 5-25 µm на <br> поверхность профилей длиной до 7,5 метров.
                </h6>
                
                  <button class="detailButton" style="margin-left:20rem">
                    <img
                      style="margin-top: 3.5rem; margin-left: 3em; margin-right:5em"
                      src="@/assets/img/detailButton.png"
                    ><span style="margin-top:-1rem">Подробнее</span>
                  </button>
               
                <div class="waterImg">
                  <img width="100%" height="auto" src="../assets/img/water2.png" />
                </div>
              </a-col>
            </a-row>
          </div>
            <div>
            <a-row>
             <a-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 24 }"
                :lg="{ span: 24 }"
              >
                <h1 class="waterTitle">Покраска</h1>
                <h6 class="waterTitleInfo">
                 Вертикальная линия порошкового покрытия от <br> итальянского производителя SAT без использования <br> хрома.
                </h6>
                
                  <button class="detailButton" style="margin-left:20rem">
                    <img
                      style="margin-top: 3.5rem; margin-left: 3em; margin-right:5em"
                      src="@/assets/img/detailButton.png"
                    ><span style="margin-top:-1rem">Подробнее</span>
                  </button>
               
                <div class="waterImg">
                  <img width="100%" height="auto" src="../assets/img/material.png" />
                </div>
              </a-col>
            </a-row>
          </div>
            <div>
            <a-row>
             <a-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 24 }"
                :lg="{ span: 24 }"
              >
                <h1 class="waterTitleLast">Мы всегда рады предоставить Вам <br> полный комплекс алюминиевых <br> решений для вашего бизнеса.</h1>
                <h6 class="waterTitleInfo">
                 С помощью совмеменного ободуования и опытного <br> персонала, превосходного сервиса и услуги, мы <br> исполняем самые смелые желания и требования. 
                </h6>
                
                  <button class="detailButton" style="margin-left:20rem">
                    <img
                      style="margin-top: 3.5rem; margin-left: 3em; margin-right:5em"
                      src="@/assets/img/detailButton.png"
                    ><span style="margin-top:-1rem">Подробнее</span>
                  </button>
               
                <div class="waterImg">
                  <img width="100%" height="auto" src="../assets/img/list.png" />
                </div>
              </a-col>
            </a-row>
          </div>
        </a-carousel>
      </a-col>
    </a-row>
    <a-row>
      <div class="bigGrid">
        <div class="big-item1"></div>
        <div class="big-item2"></div>
        <div class="big-item3"></div>
        <div class="big-item4"></div>
        <div class="big-item5"></div>
        <div class="big-item6"></div>
        <div class="big-item7"></div>
        <div class="big-item8"></div>
        <div class="big-item9"></div>
        <div class="big-item10"></div>

        <div class="big-item11"></div>

        <div class="big-item12"></div>

        <div class="big-item13"></div>

        <div class="big-item14"></div>

        <div class="big-item15"></div>
        <div class="big-item16"></div>

        <div class="big-item17"></div>
      </div>
    </a-row>
    <a-row>
      <div class="middleGrid">
        <div class="middle-item1"></div>
        <div class="middle-item2"></div>
        <div class="middle-item3"></div>
        <div class="middle-item4"></div>
      </div>
    </a-row>
    <a-row>
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
        <!-- <div class="geoMap"> -->
        <!-- <img class="geoMap1" src="../assets/img/country.png" /> -->

        <mapWorld></mapWorld>
        <!-- <img class="geoMap2" src="../assets/map/map.svg" /> -->

        <!-- <img class="geoMap3" src="../assets/img/uzbekistan.png" /> -->
        <!-- </div> -->
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <div class="thrtitleNoneBackg">
          <span class="lineGrey"></span>
          <span class="miniTitleMission">Наши контакты</span>
        </div>
      </a-col>
      <a-row>
        <a-col
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 8, offset: 2 }"
          :lg="{ span: 10, offset: 2 }"
        >
          <h1 class="contactMain">Головной офис</h1>
          <ul class="contactInfoAlign">
            <li>
              <span class="contactInfo"
                >Узбекистан, г. Ташкент, Учтепинский район, ул. Хирмонтепа,
                д-1</span
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
        </a-col>

        <a-col
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 12, offset: 2 }"
          :lg="{ span: 10, offset: 2 }"
        >
          <h1 class="contactMain">BENKAM в Европе</h1>
          <ul>
            <li>
              ул. Галинес 1, Вильнюс, Литва 14247 Регистрационный номер:
              304590804
              <br />
              ИНН: LT100011262117
            </li>
            <li>+370 67 608 303</li>
            <li>Email: a.yokubov@benkam.be</li>
          </ul>
        </a-col>
      </a-row>
      <a-row>
        <a-col
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 8, offset: 2 }"
          :lg="{ span: 10, offset: 2 }"
        >
          <h1 class="contactMainInfo">База производства :</h1>
          <li>
            Навоийская область, Карманинский <br />
            район, СЭЗ “Навои”
          </li>
          <li>+998 79 222 00 00</li>
        </a-col>
        <a-col
          :xs="{ span: 24 }"
          :sm="{ span: 22, offset: 2 }"
          :md="{ span: 10, offset: 3 }"
          :lg="{ span: 10, offset: 2 }"
        >
          <h1 class="contactMain">BENKAM в России</h1>
          <ul class="benRu">
            <li>Россия, г. Химки, ул. Рабочая 2А, корпус 22 А. Офис 206В</li>
            <li>+7 (967) 034-00-07 +7 (495) 795-74-84</li>
            <li>info@benkam.ru sales@benkam.ru</li>
          </ul>
        </a-col>
      </a-row>
    </a-row>
    <a-row>
      <a-col :span="24">
        <div class="thrtitle">
          <span class="lineGrey"></span>
          <span class="miniTitleMission">Партнеры</span>
        </div>
      </a-col>
      <a-col :span="24">
        <div class="partnerContainer">
          <div class="grid-item-1">
            <h1 class="partnerTitle">
              Каждый партнер - это ценность для <br />нас.
            </h1>
          </div>
          <div class="grid-item-2 center">
            <img src="../assets/img/eco.png" />
          </div>
          <div class="grid-item-3 center">
            <img width="100%" src="../assets/img/akzo.png" />
          </div>
          <div class="grid-item-4 center">
            <img src="../assets/img/alu.png" />
          </div>
          <div class="grid-item-5 center">
            <img src="../assets/img/emmebi.png" />
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 22, offset: 2 }"
        :md="{ span: 10, offset: 3 }"
        :lg="{ span: 10, offset: 2 }"
      >
        <h1 class="connectform">
          Заполните форму обратной <br />
          связи и мы оперативно <br />свяжемся с вами !
        </h1>
        <span class="requiredInfo"
          >Поля отмеченные (*) оязательные для заполнения !</span
        >
        <a-row style="margin-top: 55px">
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 22, offset: 2 }"
            :md="{ span: 10, offset: 3 }"
            :lg="{ span: 10, offset: 2 }"
          >
            <input placeholder="Ваше Имя" />
          </a-col>
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 22, offset: 2 }"
            :md="{ span: 10, offset: 3 }"
            :lg="{ span: 10, offset: 2 }"
          >
            <input placeholder="Ваша Фамилия" />
          </a-col>
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 22, offset: 2 }"
            :md="{ span: 10, offset: 3 }"
            :lg="{ span: 10, offset: 2 }"
          >
            <input placeholder="Номер тел.:  + 998 (__) ___ __ __" />
          </a-col>
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 22, offset: 2 }"
            :md="{ span: 10, offset: 3 }"
            :lg="{ span: 10, offset: 2 }"
          >
            <input placeholder="E-mail (электронная почта)" />
          </a-col>
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 22, offset: 2 }"
            :md="{ span: 10, offset: 3 }"
            :lg="{ span: 10, offset: 2 }"
          >
            <!-- <textarea
                width="100%"
              name="text"
              placeholder="Комментарий к заявке "
              id=""
              cols="60"
              rows="5"
            ></textarea> -->
          </a-col>
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 22, offset: 2 }"
            :md="{ span: 10, offset: 3 }"
            :lg="{ span: 10, offset: 2 }"
          >
            <h1 class="requiredConfirm">
              Я согласен на обработку персональных данных
            </h1>
          </a-col>
          <a-col>
            <button class="callButton mt-3">Заказать звонок</button>
          </a-col>
        </a-row>
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 22, offset: 2 }"
        :md="{ span: 10, offset: 3 }"
        :lg="{ span: 10, offset: 2 }"
      >
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
    </a-row>
    <a-row>
      <div class="footer">
        <div class="item1">
          <div class="footerLogo">
            <img class="footerLogoImg" src="../assets/img/footerlogo.png" />
            <span class="footerlogoText textposition" style="max-width: 528px"
              >Компания Avant Metal Group зарекомендовала себя как надежного и
              ответственного производителя, в продукции которого вы можете быть
              уверены.
            </span>
          </div>
        </div>
        <div class="item2">
          <div class="footerAboutText">
            <span class="footerlogoText">О нас</span>
            <ul>
              <li class="footerlogoText">Миссия и видение</li>
              <li class="footerlogoText">Профиль компании</li>
              <li class="footerlogoText">Политика IMS</li>
            </ul>
          </div>
        </div>
        <div class="item3">
          <div class="footerAboutText">
            <span class="footerlogoText">База знаний</span>
            <ul>
              <li class="footerlogoText">Почему алюминий</li>
              <li class="footerlogoText">Сплавы</li>
              <li class="footerlogoText">Лабороторные испытания</li>
              <li class="footerlogoText">Области применения</li>
            </ul>
          </div>
        </div>

        <div class="item4">
          <div class="footerAboutText">
            <span class="footerlogoText">Услуги</span>
            <ul>
              <li class="footerlogoText">Экструзия</li>
              <li class="footerlogoText">Андонирование</li>
              <li class="footerlogoText">Покраска</li>
              <li class="footerlogoText">Упаковка и логистика</li>
            </ul>
          </div>
        </div>
        <div class="item5">
          <ul class="footerAboutText">
            <li class="footerlogoText">Карьера</li>
            <li class="footerlogoText">Новости</li>
            <li class="footerlogoText">Контакты</li>
          </ul>
        </div>
        <div class="item6">
          <span>
            © 2017 <span style="color: #18b025">Benkam alu extrusions</span>.
            Все права защищены.
          </span>
        </div>
      </div>
    </a-row>
  </div>
</template>

<script>
import mapWorld from "../components/Map.vue";
export default {
  name: "HelloWorld",
  components: {
    mapWorld,
  },
  props: {
    msg: String,
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@font-face {
  font-family: "Styrene A LC";
  src: url("~@/assets/font/StyreneALC-Regular.otf");
  font-weight: normal;
  font-style: normal;
}
.darkLine {
  position: absolute;
  width: 112px;
  height: 4px;
  margin-top: 3.5rem;
  margin-left: -8.5rem;
  /* Darck_text */

  background: #282828;
}
.waterTitleLast{
  font-family: Styrene A LC;
font-style: normal;
font-weight: 500;
font-size: 64px;
line-height: 80px;
/* or 125% */

letter-spacing: 0.015em;

color: #1C1C1C;
text-align: start;
margin-left: 18rem;
margin-top: 2rem;
margin-bottom: 5rem;
}
.secSix {
  background: url("../assets/img/6.png");
  background-size: 100% 100%;
  height: 100vh;
}
.successBack {
  z-index: -2;
  position: absolute;
  background: #f0f0f0;
  opacity: 0.5;
  width: 100%;
  height: 560px;
}
.success {
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 96px;
  /* identical to box height, or 171% */

  letter-spacing: 0.05em;

  color: #1c1c1c;
  margin-top: 19vh;
}
.fourGI2box {
  display: flex;
  margin-top: 152px;
  margin-left: 320px;
}
.fourGI2 {
  width: 220px;
  height: 96px;
  margin-left: 5rem;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 32px;
  /* or 100% */
  text-align: left;
  letter-spacing: 0.015em;

  /* Benkam (text) */

  color: #282828;
}
.fourGI2mini {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  /* or 200% */

  letter-spacing: 0.25em;

  /* Darck_text */
  margin-top: 10rem;
  margin-left: 11rem;
  color: #282828;
}
.detailButton {
  width: 320px;
  height: 128px;
  margin-top: 10rem;
  
  background: #f2f2f2;
  padding: 0;
  border: none;
  display: flex;
  justify-content: start;
  /* background: none; */
}

.fourInfo {
  width: 480px;
  height: 240px;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  /* or 167% */
  text-align: left;
  letter-spacing: 0.015em;
  margin-top: 15rem;
  margin-left: 19rem;
  /* Benkam (text) */

  color: #282828;
}
.secthCountYear {
  width: 180px;
  height: 64px;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 32px;
  /* or 100% */

  letter-spacing: 0.015em;
  margin-left: 20rem;
  text-align: left;
  /* Light */

  color: #ffffff;
}
.secthCountYearMini {
  margin-left: 5rem;
  margin-top: 5rem;
  width: 320px;
  height: 96px;
  /* left: 880px;
top: 368px; */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  /* or 200% */
  text-align: left;
  margin-left: 17rem;
  letter-spacing: 0.25em;

  /* Light */

  color: #ffffff;
}
.middleGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(400px, auto);
}
.middle-item1 {
  grid-row: span 3;
}
.middle-item2 {
  background: #e3f5e3;
}
.middle-item3 {
  background: #f5eae3;
}
.middle-item4 {
  background: #f2f2f2;
}
.bigGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(680px, auto);
}
.big-item1 {
  grid-row: span 2;
  background: #d8f4da;
}
.big-item2 {
  background: #ededed;
  opacity: 0.16;
}
.big-item3 {
  background: url("../assets/img/carmanu.png");
  background-size: 100% 100%;
}
.big-item4 {
  background: url("../assets/img/build.png");
  background-size: 100% 100%;
}
.big-item5 {
  background: #f0f282;
  opacity: 0.16;
}
.big-item6 {
  background: #b1ccf4;
  opacity: 0.16;
}
.big-item7 {
  background: url("../assets/img/roofb.png");
  background-size: 100% 100%;
}

.big-item8 {
  background: url("../assets/img/manufacc.png");
  background-size: 100% 100%;
}
.big-item9 {
  background: url("../assets/img/room.png");
  background-size: 100% 100%;
}

.big-item10 {
  background: #ededed;
  opacity: 0.16;
}
.big-item11 {
  background: #84f282;
  opacity: 0.16;
}

.big-item12 {
  background: #51b4ca;
  opacity: 0.16;
}
.big-item13 {
  background: url("../assets/img/alum.png");
  background-size: 100% 100%;
}
.big-item14 {
  background: url("../assets/img/elect.png");
  background-size: 100% 100%;
}

.big-item15 {
  background: url("../assets/img/table.png");
  background-size: 100% 100%;
}

.big-item16 {
  background: #e7e7e7;
  opacity: 0.16;
}

.big-item17 {
  background: #f2b182;
  opacity: 0.16;
}
.gridFour {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(680px, auto);
}
.gridf-item1 {
  grid-row: span 2;
  background: #f8f8f8;
}
.gridf-item2 {
  background: #d8f4da;
}
.gridf-item3 {
  background: #f0f4f7;
}

.gridThird {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(680px, auto);
}
.gridth-item1 {
  background: #f2f2f2;
}
.gridth-item2 {
  background: url("../assets/img/Frame73.png");
  background-size: 100% 100%;
}
.gridth-item3 {
}
.gridth-item4 {
}
.gridth-item5 {
  background: #2dad38;
}
.gridth-item6 {
  background: url("../assets/img/block.png");
  background-size: 100% 100%;
}
.gridth-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.miniTitleth {
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
  /* identical to box height, or 114% */

  letter-spacing: 0.015em;

  /* Light */
  position: absolute;
  bottom: 0;
  right: 0;
  color: #ffffff;
}
.onTopTitle {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* or 133% */

  letter-spacing: 0.25em;
  opacity: 1;
  /* Light */

  color: #ffffff;
}
.whiteLine {
  width: 112px;
  height: 1px;
  margin-top: auto;
  margin-bottom: 5.8rem;
  margin-left: 7.3rem;
  background: #ffffff;
}
.sectwo {
  background: url("../assets/img/2.jpg");
  background-size: 100% 100%;
  height: 100vh;
}
.sectwoInfo {
  position: absolute;
  width: 240px;
  height: 72px;
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* or 133% */
  margin-left: 5rem;
  margin-top: 0.5rem;
  letter-spacing: 0.25em;

  /* Light */

  color: #ffffff;
}
.seconeInfo {
  position: absolute;
  width: 240px;
  height: 72px;
  text-align: left;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* or 133% */
  margin-bottom: 1rem;
  margin-top: auto;
  letter-spacing: 0.25em;
  margin-left: 5rem;
  margin-top: 1.5rem;
  /* Benkam (text) */

  color: #282828;
}
path {
  fill: #558b2f;
  cursor: pointer;
  -webkit-transition: all 150ms;
  -moz-transition: all 150ms;
  -o-transition: all 150ms;
  transition: all 150ms;
}
path:hover {
  opacity: 0.85;
}
.land {
  fill-opacity: 1;
  stroke: white;
  stroke-opacity: 1;
  stroke-width: 0.5;
}
.footerLogoImg {
  margin-top: 120px;
  margin-left: 56px;
}
.partnerContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(350px, auto);
}
.grid-item-1 {
  grid-column: span 1;
}
.grid-item-2 {
  grid-column: span 1;
}
.grid-item-3 {
  grid-column-start: 3;
  grid-row: span 2;
}

.grid-item-4 {
  grid-column: span 1;
}
.grid-item-5 {
  grid-column: span 1;
}

.ecoImg {
  margin: 10rem 0;
}
.akzoImg {
  margin: 17rem 0;
}
.emmebi {
  position: absolute;
  margin-top: 45rem;
  margin-left: 40rem;
}
.alu {
  position: absolute;
  margin-top: 45rem;
}
.ant-carousel {
  height: 100vh;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 100vh;
  line-height: 160px;

  /* background: #364d79; */
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.item1 {
  grid-column: span 1;
  grid-row: span 2;
}
.item2 {
  grid-column: span 1;
}
.item3 {
  grid-column: span 1;
  grid-column-start: 3;
}

.item4 {
  grid-column: span 1;
}
.item5 {
  grid-column: span 1;
}
.item6 {
  grid-column: span 1;
}

/* 
.item1 {
  grid-area: logo;
}
.item2 {
  grid-area: one;
}
.item3 {
  grid-area: two;
}
.item4 {
  grid-area: footer;
  display: flex;
  justify-content: left;
} */

ul {
  list-style-type: none;
}
.footerAboutText {
  margin-top: 120px !important;
  text-align: left;
  margin-left: 4em;
}
.footerlogoText {
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
.textposition {
  text-align: left;
  margin-left: 56px;
  margin-top: 66px;
}
.footerLogo {
  display: grid;
  /* justify-self: left; */
  /* max-width: 500px; */
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
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  /* grid-auto-rows: minmax(350px,auto); */
  grid-auto-rows: auto auto auto auto auto 100px;

  background: #fafafa;
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
  max-width: 400px;
  display: flex;
  justify-content: left;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  /* or 150% */
  padding: 5rem 0 5rem 5rem;
  letter-spacing: 0.05em;

  /* Benkam (text) */

  color: #282828;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
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
.contactInfoAlign {
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
  margin-top: 55rem;

  background: #d8f4da;
}
.thrtitleNoneBackg {
  display: flex;
  justify-content: flex-start;
  max-width: 560px;
  height: 280px;
  left: 0px;
  /* margin-top: 15rem; */
}
.thBackg2 {
  width: 320px;
  height: 240px;
  position: absolute;
  background: #f2f2f2;
  opacity: 0.08;
}
.t342 {
  width: 320px;
  height: 240px;
  position: relative;
}
.thrtitleNoneBackg2 {
  display: flex;
  justify-content: flex-start;
  width: 560px;
  height: 280px;
  left: 0px;
  position: absolute;

  background: #f2f2f2;
  opacity: 0.08;
  /* transform: matrix(1, 0, 0, -1, 0, 0); */
}
.t34 {
  display: flex;
  justify-content: flex-start;
  width: 560px;
  height: 280px;
  left: 0px;
  position: absolute;
}

.fourt34 {
  display: flex;
  justify-content: flex-start;
  width: 560px;
  height: 280px;
  left: 0px;
  position: relative;
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
  /* margin-top: 7rem; */
}
.img2 img {
  width: 100%;
  height: auto;
}
.parttwo {
  display: flex;
  justify-content: center;
}
.secone {
  height: 80vh;
}
.mainImage {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  width: 641px;
  height: 688px;
  padding: 1rem;
  margin-top: -10rem;
}
.greenInfo p {
  position: relative;
  width: 400px;
  height: 160px;
  left: 80px;
  top: 3rem;
  text-align: left;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  letter-spacing: 0.1em;

  /* Light_text */

  color: #fbfbfb;
}
.greenInfo span {
  position: relative;
  width: 400px;
  height: 120px;
  left: 0px;
  top: 3rem;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  /* or 117% */
  letter-spacing: 0.015em;

  /* _Light */

  color: #fbfbfb;
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
  text-align: start;
  margin-left: 18rem;
  letter-spacing: 0.015em;

  /* Benkam (text) */

  color: #282828;
}
.waterTitleInfo {
  max-width: 560px;
  height: 96px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */
  text-align: left;
  letter-spacing: 0.1em;
  margin-left: 18rem;
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
  max-width: 640px;
  letter-spacing: 0.05em;
  text-align: left;
  /* Benkam (teht) gray */

  color: #656565;
}
.waterImg {
  position: absolute;
  left: 0px;
  top: 0px;
  margin-left: 45vw;
  margin-right: 0;
  /* padding-bottom: 5rem; */
  z-index: -1;
}
/*********Section 5*****/
.fiveMaint {
  margin-top: 15rem;
  max-width: 560px;
  height: 144px;
  text-align: left;
  font-family: Styrene A LC;
  font-style: normal;
  font-weight: normal;
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
  line-height: 40px;
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

  letter-spacing: 0.1em;
  text-indent: 24px;

  /* Benkam (text) */

  color: #7c7c7c;
}
/**sec6 */

.sec6Box {
  position: relative;
  text-align: left;
  margin-top: -5rem;
  margin-left: 40rem;
  width: 40vw;
  z-index: 1;
}
.sec6Img {
  position: absolute;
  width: 100%;
}
.sec6Title {
  /* position: absolute; */
  max-width: 1200px;
  height: 96px;

  font-family: Styrene A LC;
  font-style: normal;
  font-weight: 500;
  font-size: 88px;
  line-height: 96px;
  /* identical to box height, or 100% */

  letter-spacing: 0.015em;

  /* text (bottom) */

  color: #fafafa;
}
.sec6Info {
  /* position: absolute; */
  max-width: 880px;
  height: 48px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  letter-spacing: 0.1em;

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
@media only screen and (max-width: 375px) {
  .grid-item-1 {
    grid-column: 1 / -1;
  }
  .grid-item-2 {
    grid-row-start: 2;
    grid-column: 1/-1;
  }
  .grid-item-3 {
    grid-row-start: 3 !important;
    grid-column: 1/-1;
    /* grid-row: span 2; */
  }

  .grid-item-4 {
    grid-row-start: 4;
    grid-column: 1/-1;
  }
  .grid-item-5 {
    grid-row-start: 5;
    grid-column: 1/-1;
  }
  .footer {
    display: grid;
    grid-template-columns: 1fr;
    /* grid-auto-rows: minmax(190px,auto); */
    grid-template-rows: 390px 190px 190px 190px 190px 59px;
  }
  .item1 {
    grid-column: 1 /-1;
    grid-row-start: 1;
  }
  .item2 {
    grid-row-start: 2;
    grid-column: 1/-1 !important;
  }
  .item3 {
    grid-row-start: 3;
    grid-column: 1/-1 !important;
  }

  .item4 {
    grid-row-start: 4;
    grid-column: 1/-1 !important;
  }
  .item5 {
    grid-row-start: 5;
    grid-column: 1/-1 !important;
  }
  .item6 {
    grid-row-start: 6 !important;
    grid-column: 1/-1 !important;
  }

  .textposition {
    text-align: left;
    margin: 66px 56px;
  }

  .footerLogoImg {
    width: 15em;
    margin-top: 5em;
  }
  .footerAboutText {
    margin: 50px 4em;
    text-align: left;
  }
  .thrtitle {
    display: grid;
    height: 120px;
  }
  .lineGrey {
    position: absolute;
    margin-left: 5rem;
    margin-top: 6.5rem;
  }
  .greenInfo {
    width: 65vw;
    height: 33vh !important;
  }
  .info {
    font-size: 16px;
    line-height: 22px;

    letter-spacing: 0.015em;
    width: 55vw;
  }
  .mainLogo {
    width: 57vw;
    height: 15vh;
  }
  .secInfotwo {
    margin-top: 4rem;
  }

  .waterTitle {
    font-size: 30px;
  }
  .waterInfo {
    font-size: 16px;
  }
  .waterUnderImg {
    font-size: 12px;
    padding: 15px;
  }
  .fiveMaint {
    margin-left: 15px;
  }
  .fiveMainb {
    margin-left: 15px;
  }
  .fiveMainc {
    margin-left: 25px;
  }
  .sec6Box {
    position: absolute;
    text-align: left;
    margin-top: 0rem;
    margin-left: 0rem;
    padding-top: 0px !important;
    width: 100vw;
    z-index: 1;
  }
  .sec6Title {
    font-size: 25px !important;
    margin-bottom: 0;
  }
  .sec6Info {
    font-size: 12px;
    margin-top: 0;
    line-height: 12px;
  }
  /* .sec6 {
    height: 30vh;
  } */
  .thrtitleD8 {
    display: grid;
    width: 90vw !important;
    height: 20vh !important;
  }
  .aboutMaint {
    font-size: 15px !important;
    padding: 15px;
    margin-top: 85px;
  }
  .aboutMainc {
    margin-top: 55px;
    padding-left: 15px;
  }

  .contactMain {
    font-size: 22px;
  }
  .benRu {
    padding: 0 25px;
  }
  .alu {
    position: relative;
    margin-top: 0rem;
  }

  .emmebi {
    position: relative;
    margin-top: 0rem;
    margin-left: 0 !important;
  }
  .ecoImg {
    margin: 0;
  }
  .akzoImg {
    margin: 0;
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .grid-item-1 {
    grid-column: 1 / -1;
  }
  .grid-item-2 {
    grid-row-start: 2;
    grid-column: 1/-1;
  }
  .grid-item-3 {
    grid-row-start: 3 !important;
    grid-column: 1/-1;
    /* grid-row: span 2; */
  }

  .grid-item-4 {
    grid-row-start: 4;
    grid-column: 1/-1;
  }
  .grid-item-5 {
    grid-row-start: 5;
    grid-column: 1/-1;
  }
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(190px, auto);
  }
  .item1 {
    grid-column: 1 /-1;
    grid-row-start: 1;
  }
  .item2 {
    grid-column: span 1;
  }
  .item3 {
    grid-column: span 1;
  }

  .item4 {
    grid-column: span 1;
  }
  .item5 {
    grid-column: span 1;
  }
  .item6 {
    grid-row-start: 4;
    grid-column: 1/-1;
  }

  .textposition {
    text-align: left;
    margin: 66px 56px;
  }
  .footerAboutText {
    margin: 50px 4em !important;
    text-align: left;
  }
  .alu {
    position: unset;
    padding-left: 0rem;
    margin-top: 0rem;
  }
  .emmebi {
    position: unset;
    margin-top: 0rem;
    margin-left: 5rem;
  }

  .thrtitleD8 {
    margin-top: 350px;
    display: grid;
    width: 40vw;
    height: 12vh;
  }
  .aboutMaint {
    font-size: 25px !important;
    padding: 15px;
    margin-top: 85px;
  }
  .aboutMainc {
    margin-top: 55px;
    /* padding-left:15px; */
    font-size: 20px;
    width: 70vw;
  }
  .thrtitle {
    display: grid;
    height: 120px;
    max-width: 350px;
  }
  .onethrtitle {
    display: grid;
    height: 120px;
    max-width: 350px;
  }
  .lineGrey {
    position: absolute;
    margin-left: 5rem;
    margin-top: 6.5rem;
  }
  .greenInfo {
    width: 65vw;
    height: 19vh;
  }
  .info {
    font-size: 26px;
    line-height: 22px;

    letter-spacing: 0.015em;
    width: 60vw;
  }
  .mainLogo {
    width: 57vw;
    height: 15vh;
  }
  .secInfotwo {
    margin-top: 5rem;
  }
  .thrtitleNoneBackg {
    display: grid;
    height: 120px;
    width: 100%;
  }
  .fiveMaint {
    margin-top: 15px;
  }
  .fiveMainb {
    margin-top: 0;
  }
  .line65 {
    margin-top: 35px;
  }
  .fiveMainc {
    margin-top: 75px;
  }
  .waterTitle {
    font-size: 45px;
  }

  .waterInfo {
    margin-left: 15px;
    color: #ffffff;
  }
  .sec6Box {
    position: absolute;
    text-align: left;
    margin-top: 0rem;
    margin-left: 0rem;
    padding: 20px;
    width: 100vw;
    z-index: 1;
  }
  .sec6Title {
    font-size: 45px;
  }
  .sec6Info {
  }

  .sec6Img {
    height: 30vh;
  }

  .contactMain {
    font-size: 22px;
  }
  .ecoImg {
    margin-top: 10rem;
  }
  .akzoImg {
    width: 100%;
    margin: 5rem;
  }
}
</style>

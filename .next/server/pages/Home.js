module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("STA+");


/***/ }),

/***/ "2TCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: ./src/assets/img/Logo.png
var Logo = __webpack_require__("cGww");
var Logo_default = /*#__PURE__*/__webpack_require__.n(Logo);

// EXTERNAL MODULE: ./src/components/Menu/Menu.css
var Menu = __webpack_require__("FxFd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Button/index.js

const Button = external_styled_components_default.a.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;
/* harmony default export */ var components_Button = (Button);
// CONCATENATED MODULE: ./src/components/Menu/index.js
var __jsx = external_react_default.a.createElement;




 // import ButtonLink from './components/ButtonLink';

function Menu_Menu() {
  return __jsx("nav", {
    className: "Menu"
  }, __jsx(external_react_router_dom_["Link"], {
    to: "/"
  }, __jsx("img", {
    className: "Logo",
    src: Logo_default.a,
    alt: "AluraFlix logo"
  })), __jsx(components_Button, {
    as: external_react_router_dom_["Link"],
    className: "ButtonLink",
    to: "/cadastro/video"
  }, "Novo v\xEDdeo"));
}

/* harmony default export */ var components_Menu = __webpack_exports__["a"] = (Menu_Menu);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FxFd":
/***/ (function(module, exports) {



/***/ }),

/***/ "Fzi1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Footer/styles.js

const FooterBase = external_styled_components_default.a.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
// CONCATENATED MODULE: ./src/components/Footer/index.js
var __jsx = external_react_default.a.createElement;



function Footer() {
  return __jsx(FooterBase, null, __jsx("a", {
    href: "https://www.alura.com.br/"
  }, __jsx("img", {
    src: "https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",
    alt: "Logo Alura"
  })), __jsx("p", null, "Orgulhosamente criado durante a", ' ', __jsx("a", {
    href: "https://www.alura.com.br/"
  }, "Imers\xE3o React da Alura")));
}

/* harmony default export */ var components_Footer = __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "STA+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Menu/index.js + 1 modules
var Menu = __webpack_require__("2TCc");

// EXTERNAL MODULE: ./src/data/dados_iniciais.json
var dados_iniciais = __webpack_require__("gtg4");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/BannerMain/components/VideoIframeResponsive/styles.js

const VideoContainer = external_styled_components_default.a.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  @media (max-width: 800px) {
    display: none;
  }
`;
const ResponsiveIframe = external_styled_components_default.a.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
// CONCATENATED MODULE: ./src/components/BannerMain/components/VideoIframeResponsive/index.js
var __jsx = external_react_default.a.createElement;



function YouTubeIframeResponsive({
  youtubeID
}) {
  return __jsx(VideoContainer, null, __jsx(ResponsiveIframe, {
    title: "Titulo do Iframe",
    src: `https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }));
}

/* harmony default export */ var VideoIframeResponsive = (YouTubeIframeResponsive);
// CONCATENATED MODULE: ./src/components/BannerMain/styles.js

const ContentAreaContainer = external_styled_components_default.a.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;
ContentAreaContainer.Item = external_styled_components_default.a.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
ContentAreaContainer.Category = external_styled_components_default.a.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;
ContentAreaContainer.Description = external_styled_components_default.a.p`
  @media (max-width: 800px) {
    display: none;
  }
`;
ContentAreaContainer.Title = external_styled_components_default.a.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;
const BannerMainContainer = external_styled_components_default.a.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({
  backgroundImage
}) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;
const WatchButton = external_styled_components_default.a.button`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  color: var(--black);
  background: var(--white);
  border-color: var(--black);
  transition: opacity .3s;
  display: none;
  margin: 0 auto;
  @media (max-width: 800px) {
    display: block;
  }
`;
// CONCATENATED MODULE: ./src/components/BannerMain/index.js
var BannerMain_jsx = external_react_default.a.createElement;




function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
}

function BannerMain({
  videoTitle,
  videoDescription,
  url
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  return BannerMain_jsx(BannerMainContainer, {
    backgroundImage: bgUrl
  }, BannerMain_jsx(ContentAreaContainer, null, BannerMain_jsx(ContentAreaContainer.Item, null, BannerMain_jsx(ContentAreaContainer.Title, null, videoTitle), BannerMain_jsx(ContentAreaContainer.Description, null, videoDescription)), BannerMain_jsx(ContentAreaContainer.Item, null, BannerMain_jsx(VideoIframeResponsive, {
    youtubeID: youTubeID
  }), BannerMain_jsx(WatchButton, null, "Assistir"))));
}
// CONCATENATED MODULE: ./src/components/Carousel/styles.js

const Title = external_styled_components_default.a.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;
const ExtraLink = external_styled_components_default.a.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;
const VideoCardList = external_styled_components_default.a.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;
const VideoCardGroupContainer = external_styled_components_default.a.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
// CONCATENATED MODULE: ./src/components/Carousel/components/VideoCard/styles.js

const VideoCardContainer = external_styled_components_default.a.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({
  url
}) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
// CONCATENATED MODULE: ./src/components/Carousel/components/VideoCard/index.js
var VideoCard_jsx = external_react_default.a.createElement;



function VideoCard_getYouTubeId(youtubeURL) {
  return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
}

function VideoCard({
  videoTitle,
  videoURL,
  categoryColor
}) {
  const image = `https://img.youtube.com/vi/${VideoCard_getYouTubeId(videoURL)}/hqdefault.jpg`;
  return VideoCard_jsx(VideoCardContainer, {
    url: image,
    href: videoURL,
    target: "_blank",
    style: {
      borderColor: categoryColor || 'red'
    },
    title: videoTitle
  });
}

/* harmony default export */ var components_VideoCard = (VideoCard);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./src/components/Carousel/components/Slider/index.js
var Slider_jsx = external_react_default.a.createElement;

/* eslint-disable react/jsx-props-no-spreading */



const Container = external_styled_components_default.a.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;
const SliderItem = external_styled_components_default.a.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({
  children
}) => Slider_jsx(Container, null, Slider_jsx(external_react_slick_default.a, {
  dots: false,
  infinite: false,
  speed: 300,
  centerMode: false,
  variableWidth: true,
  adaptiveHeight: true
}, children));

/* harmony default export */ var components_Slider = (Slider);
// CONCATENATED MODULE: ./src/components/Carousel/index.js
var Carousel_jsx = external_react_default.a.createElement;





function Carousel({
  ignoreFirstVideo,
  category
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return Carousel_jsx(VideoCardGroupContainer, null, categoryTitle && Carousel_jsx(external_react_default.a.Fragment, null, Carousel_jsx(Title, {
    style: {
      backgroundColor: categoryColor || 'red'
    }
  }, categoryTitle), categoryExtraLink && Carousel_jsx(ExtraLink, {
    href: categoryExtraLink.url,
    target: "_blank"
  }, categoryExtraLink.text)), Carousel_jsx(components_Slider, null, videos.map((video, index) => {
    if (ignoreFirstVideo && index === 0) {
      return null;
    }

    return Carousel_jsx(SliderItem, {
      key: video.titulo
    }, Carousel_jsx(components_VideoCard, {
      videoTitle: video.titulo,
      videoURL: video.url,
      categoryColor: categoryColor
    }));
  })));
}

/* harmony default export */ var components_Carousel = (Carousel);
// EXTERNAL MODULE: ./src/components/Footer/index.js + 1 modules
var Footer = __webpack_require__("Fzi1");

// CONCATENATED MODULE: ./src/pages/Home/index.js
var Home_jsx = external_react_default.a.createElement;







function Home() {
  return Home_jsx("div", {
    style: {
      background: "#141414"
    }
  }, Home_jsx(Menu["a" /* default */], null), Home_jsx(BannerMain, {
    videoTitle: dados_iniciais.categorias[0].videos[0].titulo,
    url: dados_iniciais.categorias[0].videos[0].url,
    videoDescription: "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
  }), Home_jsx(components_Carousel, {
    ignoreFirstVideo: true,
    category: dados_iniciais.categorias[0]
  }), Home_jsx(components_Carousel, {
    category: dados_iniciais.categorias[1]
  }), Home_jsx(components_Carousel, {
    category: dados_iniciais.categorias[2]
  }), Home_jsx(components_Carousel, {
    category: dados_iniciais.categorias[3]
  }), Home_jsx(components_Carousel, {
    category: dados_iniciais.categorias[4]
  }), Home_jsx(components_Carousel, {
    category: dados_iniciais.categorias[5]
  }), Home_jsx(Footer["a" /* default */], null));
}

/* harmony default export */ var pages_Home = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cGww":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "gtg4":
/***/ (function(module) {

module.exports = JSON.parse("{\"categorias\":[{\"titulo\":\"Front End\",\"link\":\"https://www.alura.com.br/formacao-front-end\",\"cor\":\"#6BD1FF\",\"link_extra\":{\"text\":\"Formação de Front End na Alura\",\"url\":\"https://www.alura.com.br/cursos-online-front-end\"},\"videos\":[{\"titulo\":\"O que faz uma desenvolvedora front-end? #HipstersPontoTube\",\"url\":\"https://www.youtube.com/watch?v=ZY3-MFxVdEw\"},{\"titulo\":\"SEO com React\",\"url\":\"https://www.youtube.com/watch?v=c8mVlakBESE\"},{\"titulo\":\"Componentização com VanillaJS #AluraMais\",\"url\":\"https://www.youtube.com/watch?v=LatCKpcOMak\"},{\"titulo\":\"Pare de chutar e aprenda a display: inline #01\",\"url\":\"https://www.youtube.com/watch?v=5PS6ku8NzIE\"},{\"titulo\":\"Template String: Interpolando strings com JavaScript #AluraMais\",\"url\":\"https://www.youtube.com/watch?v=ORI_HTXaIw0\"},{\"titulo\":\"Qual é a melhor linguagem de programação? #HipstersPontoTube\",\"url\":\"https://www.youtube.com/watch?v=Uh-GNH-t89w\"},{\"titulo\":\"Novidades do Angular v9\",\"url\":\"https://www.youtube.com/watch?v=34uHo7hFmG0\"},{\"titulo\":\"Base para aprender os frameworks\",\"url\":\"https://www.youtube.com/watch?v=QzDjdlF1BQI\"}]},{\"titulo\":\"Back End\",\"cor\":\"#00C86F\",\"link_extra\":{\"text\":\"Cursos de Back End na Alura\",\"url\":\"https://www.alura.com.br/cursos-online-programacao\"},\"videos\":[{\"titulo\":\"PERCURSO em NÍVEL em ÁRVORE BINÁRIA | Estruturas de Dados #14\",\"url\":\"https://www.youtube.com/watch?v=UOK7nS2E9xM\"},{\"titulo\":\"Coders4Tips - S01E04: GitHub CLI - Uma Nova Experiência no Github!\",\"url\":\"https://www.youtube.com/watch?v=6o6-bKOZOEY\"},{\"titulo\":\"Programei 4 robôs que criam vídeos para mim no YouTube\",\"url\":\"https://www.youtube.com/watch?v=kjhu1LEmRpY\"},{\"titulo\":\"API: Dicionário do Programador\",\"url\":\"https://www.youtube.com/watch?v=vGuqKIRWosk\"},{\"titulo\":\"Usando Git Direito\",\"url\":\"https://www.youtube.com/watch?v=6OokP-NE49k\"}]},{\"titulo\":\"Data Science e Inteligência Artificial\",\"cor\":\"#9cd33b\",\"link_extra\":{\"text\":\"Cursos de Data Science na Alura\",\"url\":\"https://www.alura.com.br/formacao-data-science\"},\"videos\":[{\"titulo\":\"Teste de Turing\",\"url\":\"https://www.youtube.com/watch?v=BaPGU4JWa34\"},{\"titulo\":\"O que é Data Science?\",\"url\":\"https://www.youtube.com/watch?v=5b9Z8toVaAU&t=9s\"},{\"titulo\":\"Melhor forma de aprender Python\",\"url\":\"https://www.youtube.com/watch?v=Gojqw9BQ5qY\"},{\"titulo\":\"Como ingressar no mercado de Data Science?\",\"url\":\"https://www.youtube.com/watch?v=gxyjGmOV540\"}]},{\"titulo\":\"Filmes\",\"cor\":\"orange\",\"videos\":[{\"titulo\":\"Interestellar\",\"url\":\"https://www.youtube.com/watch?v=frD_IiY_A3E\"},{\"titulo\":\"Gattaca\",\"url\":\"https://www.youtube.com/watch?v=Dl0tYLbrhhs\"},{\"titulo\":\"A Chegada\",\"url\":\"https://www.youtube.com/watch?v=rNciXGzYZms\"},{\"titulo\":\"Feitiço do Tempo\",\"url\":\"https://www.youtube.com/watch?v=zi8d69P9NvI\"}]},{\"titulo\":\"Games\",\"cor\":\"red\",\"link_extra\":{\"text\":\"Formação de Jogos na Alura\",\"url\":\"https://www.alura.com.br/formacao-jogos-unity\"},\"videos\":[{\"titulo\":\"Final Fantasy 7\",\"url\":\"https://www.youtube.com/watch?v=I_ATSCTnUD8\"},{\"titulo\":\"Assassins Creed Valhalla\",\"url\":\"https://www.youtube.com/watch?v=KDfdjB9uL0U\"},{\"titulo\":\"God of War 4\",\"url\":\"https://www.youtube.com/watch?v=FyIwEFXOcaE\"},{\"titulo\":\"Resident Evil 8\",\"url\":\"https://www.youtube.com/watch?v=JSapXD9vxYA\"},{\"titulo\":\"Pokémon Let's Go Pikachu/Eevee\",\"url\":\"https://www.youtube.com/watch?v=L56q_k2ydrs\"}]},{\"titulo\":\"Aprendendo a aprender tecnologia\",\"cor\":\"#6b5be2\",\"link_extra\":{\"text\":\"Curso sobre aprendizado na Alura\",\"url\":\"https://alura.com.br/curso-online-aprender-a-aprender-tecnicas-para-seu-autodesenvolvimento\"},\"videos\":[{\"titulo\":\"Como estudar melhor?\",\"url\":\"https://www.youtube.com/watch?v=Is6c9KSGCbk&feature=youtu.be\"},{\"titulo\":\"Faculdade\",\"url\":\"https://www.youtube.com/watch?v=jw06H8esyzQ&feature=youtu.be\"},{\"titulo\":\"Frameworks\",\"url\":\"https://www.youtube.com/watch?v=QzDjdlF1BQI\"},{\"titulo\":\"A mágica do Aprendizado\",\"url\":\"https://www.youtube.com/watch?v=oTEXzpfEpPY\"},{\"titulo\":\"Como aprender a programar?\",\"url\":\"https://www.youtube.com/watch?v=MwCx2qKdbDw&feature=youtu.be\"}]}]}");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
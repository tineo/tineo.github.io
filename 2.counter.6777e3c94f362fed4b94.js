webpackJsonp([2],{93:function(e,n,t){e.exports={"default":t(142),__esModule:!0}},94:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var o=t(141),r=u(o);n["default"]=function(e,n,t){return n in e?(0,r["default"])(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},96:[700,53,14],100:[736,54,148,147,111,18,53],139:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.Counter=void 0;var o=t(43),r=u(o),c=t(8),i=(u(c),t(197)),a=u(i),f=n.Counter=function(e){return(0,r["default"])("div",{},void 0,(0,r["default"])("h2",{className:a["default"].counterContainer},void 0,"Counter:"," ",(0,r["default"])("span",{className:a["default"]["counter--green"]},void 0,e.counter)),(0,r["default"])("button",{className:"btn btn-default",onClick:e.increment},void 0,"Increment")," ",(0,r["default"])("button",{className:"btn btn-default",onClick:e.doubleAsync},void 0,"Double (Async)"))};n["default"]=f},140:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(139),r=u(o);n["default"]=r["default"]},142:function(e,n,t){t(167),t(169),t(170),t(168),e.exports=t(16).Promise},143:67,146:[705,54,150,149,32,161,166],148:119,149:[710,65,14],150:[712,32],151:[715,14],152:[718,18,100,53],155:function(e,n,t){var u=t(55);e.exports=function(e,n,t){for(var o in n)t&&e[o]?e[o]=n[o]:u(e,o,n[o]);return e}},156:function(e,n,t){"use strict";var u=t(18),o=t(16),r=t(46),c=t(44),i=t(14)("species");e.exports=function(e){var n="function"==typeof o[e]?o[e]:u[e];c&&n&&!n[i]&&r.f(n,i,{configurable:!0,get:function(){return this}})}},159:[734,32,95,14],166:[745,96,14,65,16],168:[752,97,18,54,96,45,64,95,143,146,159,100,152,14,155,99,156,16,151],197:function(e,n){e.exports={counter:"Counter__counter___8Lvk1","counter--green":"Counter__counter--green___30k-8 Counter__counter___8Lvk1",counterContainer:"Counter__counterContainer___1Ev3K"}},230:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0];return{type:l,payload:e}}function r(){var e=arguments.length<=0||void 0===arguments[0]?_:arguments[0],n=arguments[1],t=s[n.type];return t?t(e,n):e}Object.defineProperty(n,"__esModule",{value:!0}),n.actions=n.doubleAsync=n.COUNTER_INCREMENT=void 0;var c=t(94),i=u(c),a=t(93),f=u(a);n.increment=o,n["default"]=r;var l=n.COUNTER_INCREMENT="COUNTER_INCREMENT",d=n.doubleAsync=function(){return function(e,n){return new f["default"](function(t){setTimeout(function(){e(o(n().counter)),t()},200)})}},s=(n.actions={increment:o,doubleAsync:d},(0,i["default"])({},l,function(e,n){return e+n.payload})),_=0},336:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(87),r=t(230),c=t(140),i=u(c),a={increment:function(){return(0,r.increment)(1)},doubleAsync:r.doubleAsync},f=function(e){return{counter:e.counter}};n["default"]=(0,o.connect)(f,a)(i["default"])}});
webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

/*
 *  setGlobalfontSize 设置全局页面字体大小方法
 *  params-1 number
 */
function setGlobalfontSize(size) {
    var oHtml = document.querySelector('html');
    var width = oHtml.getBoundingClientRect().width;
    oHtml.style.fontSize = width / size + 'px';
}
function scrollUp(obj, refreshState) {
    let self = obj;
    let scrollTop = document.body.scrollTop;
    let deviceHeight = document.documentElement.clientHeight;
    let bodyHeight = document.body.scrollHeight;
    let allHeight = scrollTop + deviceHeight;
    if (allHeight >= bodyHeight && !refreshState) {
        self.refreshState = true;
        setTimeout(function () {
            self.addList();
        }, 800);
    }
}
//************dataUp判断是否是更新，是就替换所有，不是就加入
function locationPushUser(user, listName, dataUp) {
    if (dataUp) {
        window.localStorage.removeItem(listName);
        window.localStorage.setItem(listName, JSON.stringify(user));
    } else {
        let storage = window.localStorage.getItem(listName);
        storage = storage ? JSON.parse(storage) : [];
        storage.push(user);
        window.localStorage.setItem(listName, JSON.stringify(storage));
    }
}
function locationGetUser(userName, listName) {
    let userData = null;
    let storage = window.localStorage.getItem(listName);
    storage = eval(storage);
    for (let i = 0; i < storage.length; i++) {
        if (userName == storage[i].phoneNumber) {
            userData = storage[i];
            return userData;
        }
    }
}

//这个module 就相当 es6里面的 export
module.exports = {
    setFontSize: setGlobalfontSize,
    scrollUp: scrollUp,
    locationPushUser: locationPushUser,
    locationGetUser: locationGetUser
};

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(100)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  "data-v-7fb4f3b5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(102)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  "data-v-d05ccad2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(103)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  "data-v-d27a04f2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  "data-v-04961a18",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(98)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(73),
  /* scopeId */
  "data-v-79ba50ba",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(99)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  "data-v-03000096",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(97)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-78d21dd2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_index_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_home_home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_recommendation_recommendation_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_recommendation_recommendation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_recommendation_recommendation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_message_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_message_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_message_message_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_userCenter_userCenter_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_userCenter_userCenter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_userCenter_userCenter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_login_login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_register_register_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_detail_detail_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_detail_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_detail_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_detail_menuDetail_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_detail_menuDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_detail_menuDetail_vue__);












__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [{
        path: '/home',
        component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_vue___default.a,
        children: [{
            path: 'index',
            component: __WEBPACK_IMPORTED_MODULE_2__components_index_index_vue___default.a
        }, {
            path: 'recomendation',
            component: __WEBPACK_IMPORTED_MODULE_4__components_recommendation_recommendation_vue___default.a
        }, {
            path: 'message',
            component: __WEBPACK_IMPORTED_MODULE_5__components_message_message_vue___default.a
        }, {
            path: 'userCenter',
            component: __WEBPACK_IMPORTED_MODULE_6__components_userCenter_userCenter_vue___default.a
        }]
    }, {
        path: '/login',
        component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_vue___default.a
    }, {
        path: '/register',
        component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_vue___default.a
    }, {
        name: 'detail',
        path: '/detail:dataId',
        component: __WEBPACK_IMPORTED_MODULE_9__components_detail_detail_vue___default.a
    }, {
        name: 'menuDetail',
        path: '/menuDetail:dataId',
        component: __WEBPACK_IMPORTED_MODULE_10__components_detail_menuDetail_vue___default.a
    }]
}));

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(91)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  "data-v-5465bfd6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(61),
  /* scopeId */
  "data-v-1fd11e58",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(90)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(65),
  /* scopeId */
  "data-v-4f8f18d5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  "data-v-3a862495",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(104)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  "data-v-fbfd9156",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  "data-v-018eed96",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(93)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(68),
  /* scopeId */
  "data-v-6220a73e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(118),
  /* template */
  __webpack_require__(63),
  /* scopeId */
  "data-v-4406fe1b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(94)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(69),
  /* scopeId */
  "data-v-6243dad4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(60),
  /* scopeId */
  "data-v-167f5709",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(96)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-6bebb276",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(92)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  "data-v-58de3c13",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(95)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  "data-v-654d2dd6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(101)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(76),
  /* scopeId */
  "data-v-ca52e456",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(89)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(127),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  "data-v-44c0f7b5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(84)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  "data-v-1605bd2a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hotSell"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "goods"
  }, [(_vm.hotGoods) ? _c('ul', {
    ref: "hotScroll",
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        _vm.onTouchStart($event)
      },
      "touchmove": function($event) {
        $event.stopPropagation();
        _vm.onTouchMove($event)
      }
    }
  }, _vm._l((_vm.hotGoods.goods), function(item) {
    return _c('li', {
      ref: "goodsHook",
      refInFor: true
    }, [_c('router-link', {
      staticClass: "goods_link",
      attrs: {
        "to": ""
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    }), _vm._v(" "), _c('p', [_c('span', [_vm._v("￥" + _vm._s(item.price))]), _c('span', [_vm._v("￥" + _vm._s(item.oldPrice))])])])], 1)
  })) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "icon-fire"
  }), _vm._v("秒杀专区")])
}]}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "userCenter"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "userPic"
  }, [_c('div', {
    staticClass: "userBackground"
  }, [_c('img', {
    attrs: {
      "src": _vm.userData.userBackground
    }
  })]), _vm._v(" "), _c('div', [_c('router-link', {
    staticClass: "login",
    attrs: {
      "to": "/login"
    }
  }, [_c('div', {
    staticClass: "userBorder"
  }), _vm._v(" "), _c('div', {
    staticClass: "userPhoto"
  }, [_c('img', {
    attrs: {
      "src": _vm.userData.userBackground
    }
  })]), _vm._v(" "), (_vm.userId) ? _c('div', {
    staticClass: "login_text"
  }, [_c('p'), _vm._v(" "), _c('p', [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.loginState ? '你好，' + _vm.userName : '点击登录')
    }
  })])]) : _vm._e()])], 1)]), _vm._v(" "), _c('v-menuList', {
    attrs: {
      "menuListData": _vm.userData.userMenuList
    }
  }), _vm._v(" "), (_vm.loginState) ? _c('div', {
    staticClass: "logout",
    on: {
      "click": _vm.logoutF
    }
  }, [_vm._v("\n                退出登录\n        ")]) : _vm._e()], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('h1', {
    staticClass: "title"
  }, [_c('span'), _vm._v(" "), _c('span', [_vm._v("坊主")]), _vm._v(" "), _c('span', [_vm._v("设置")])])])
}]}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "triangle"
  }, [_c('div', {
    staticClass: "toggle"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "icon",
    class: _vm.triangleState ? 'icon-chevron-down' : 'icon-chevron-up',
    on: {
      "click": function($event) {
        _vm.triangleState = !_vm.triangleState
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "line"
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "bounce"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.triangleState),
      expression: "triangleState"
    }],
    staticClass: "content"
  }, [_c('h3', [_vm._v("第三方登录")]), _vm._v(" "), _c('ul', _vm._l((_vm.dataTriangle), function(item) {
    return _c('li', [_c('img', {
      attrs: {
        "src": item.icon
      }
    })])
  }))])])], 1)
},staticRenderFns: []}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "menuList"
  }, [_c('ul', _vm._l((_vm.menuListData), function(item, index) {
    return _c('li', {
      staticClass: "menuList_li"
    }, [_c('router-link', {
      attrs: {
        "to": item.dataId
      }
    }, [_c('span', [_c('img', {
      attrs: {
        "src": item.icon
      }
    })]), _vm._v(" "), _c('span', [_vm._v("\n                    " + _vm._s(item.menuName) + "\n                ")]), _vm._v(" "), _c('span', {
      staticClass: " icon-chevron-right"
    })])], 1)
  }))])
},staticRenderFns: []}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "login"
    }
  }, [_c('div', {
    staticClass: "head"
  }, [_c('h1', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "icon-chevron-left goBack",
    on: {
      "click": _vm.back
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("登录")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("\n                注册\n            ")])], 1)]), _vm._v(" "), _c('v-form'), _vm._v(" "), _c('v-triangle')], 1)
},staticRenderFns: []}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "menuDetail"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('h1', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "icon-chevron-left goBack",
    on: {
      "click": _vm.back
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_c('span', {
    staticClass: "titleName"
  }, [_vm._v(_vm._s(_vm.oTitle))]), _vm._v(" Zoom")]), _vm._v(" "), _c('span', {
    staticClass: "icon-share"
  })])])])
},staticRenderFns: []}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('h1', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "icon-reorder menuHeader",
    on: {
      "click": function($event) {
        _vm.userCenterState = !_vm.userCenterState
      }
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "search",
    attrs: {
      "type": "text",
      "placeholder": "搜美食/商品/达人"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bell message"
  })]), _vm._v(" "), _c('transition-group', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.userCenterState) ? _c('div', {
    key: "1",
    staticClass: "indexUserCenter"
  }, [_c('div', {
    staticClass: "contentBox"
  }, [_c('v-userCenter', {
    staticClass: "userCenterContent"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "close",
    on: {
      "click": function($event) {
        _vm.userCenterState = !_vm.userCenterState
      }
    }
  }, [_c('span', {
    staticClass: "icon-remove"
  })])]) : _vm._e()])], 1)
},staticRenderFns: []}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home",
    on: {
      "touchstart": _vm.reLoadStart,
      "touchmove": _vm.reLoadMove,
      "touchend": _vm.reLoadEnd
    }
  }, [(_vm.currentIndex == 0) ? _c('div', {
    key: "currentIndex",
    staticClass: "index"
  }, [_c('v-header'), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "bounce"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.reLoadState),
      expression: "reLoadState"
    }],
    staticClass: "refresh",
    domProps: {
      "textContent": _vm._s(_vm.reLoadText)
    }
  })]), _vm._v(" "), _c('v-banner', {
    attrs: {
      "bannerData": _vm.dataAll.banner
    }
  }), _vm._v(" "), _c('v-sideMenu', {
    attrs: {
      "sideMenu": _vm.dataAll.sideMenu1
    }
  }), _vm._v(" "), _c('v-sideMenu', {
    attrs: {
      "sideMenu": _vm.dataAll.sideMenu2
    }
  }), _vm._v(" "), _c('v-scrollNews', {
    attrs: {
      "newsData": _vm.dataAll.news
    }
  }), _vm._v(" "), _c('v-sideBanner'), _vm._v(" "), _c('v-indexList', {
    attrs: {
      "indexListData": _vm.indexList
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "bounce"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.refreshState),
      expression: "refreshState"
    }],
    staticClass: "refresh",
    domProps: {
      "textContent": _vm._s(_vm.refreshText)
    }
  }, [_vm._v("\n                  拼命加载中。。。\n              ")])])], 1) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "scrollNews"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "news"
  }, [_c('ul', _vm._l((_vm.newsData), function(item, index) {
    return _c('transition', {
      key: "index",
      attrs: {
        "name": "slide-fade"
      }
    }, [_c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((index == _vm.currentItem) || (index - 1 == _vm.currentItem)),
        expression: "( index == currentItem ) || (index - 1 == currentItem)"
      }]
    }, [_c('p', [_c('span', {
      class: _vm.changIcon(item.iconNumber)
    }), _vm._v("\n                        " + _vm._s(item.text) + "\n                    ")])])])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('p', [_vm._v("美坊—")]), _vm._v(" "), _c('p', [_vm._v("—热文 ")])])
}]}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    staticClass: "active",
    attrs: {
      "to": "/goods"
    }
  }, [_c('span', {
    staticClass: "icon-home"
  }), _vm._v(" "), _c('span', [_vm._v("主页")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/ratings"
    }
  }, [_c('span', {
    staticClass: "icon-food"
  }), _vm._v(" "), _c('span', [_vm._v("精选")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/seller"
    }
  }, [_c('span', {
    staticClass: "icon-comments-alt"
  }), _vm._v(" "), _c('span', [_vm._v("圈子")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/seller"
    }
  }, [_c('span', {
    staticClass: " icon-user"
  }), _vm._v(" "), _c('span', [_vm._v("坊主")])])], 1), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('h1', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "icon-chevron-left goBack",
    on: {
      "click": _vm.back
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.dataAll.listTitle))]), _vm._v(" "), _c('span', {
    staticClass: "icon-share"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "foodPic"
  }, [_c('img', {
    attrs: {
      "src": _vm.dataAll.listPic
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "foodJudge"
  }, [_c('span', {
    staticClass: "browse"
  }, [_c('span', {
    staticClass: "icon-eye-open"
  }), _vm._v("浏览" + _vm._s(_vm.dataAll.browseTime))]), _vm._v(" "), _c('span', {
    staticClass: "collection"
  }, [_c('span', {
    staticClass: "icon-star"
  }), _vm._v("收藏" + _vm._s(_vm.dataAll.collection))])])]), _vm._v(" "), _c('div', {
    staticClass: "foodInfo"
  }, [_c('h3', [_vm._v(_vm._s(_vm.dataAll.listTitle))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.dataAll.listText))]), _vm._v(" "), _c('p', {
    staticClass: "ratings"
  }, [_c('span', [_vm._v(_vm._s(_vm.dataAll.score))]), _vm._v(" " + _vm._s(_vm.dataAll.ratingsPeople) + "人评分 "), (_vm.dataAll.boutique) ? _c('span', {
    staticClass: "boutique"
  }, [_vm._v("精")]) : _vm._e()]), _vm._v(" "), _c('v-star', {
    attrs: {
      "score": _vm.dataAll.score,
      "classs": "star"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "foodAuthor"
  }, [_c('div', [_c('router-link', {
    attrs: {
      "to": "user"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.dataAll.listPic
    }
  })])], 1), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.dataAll.user))]), _vm._v(" "), _c('div', {
    on: {
      "click": function($event) {
        _vm.followState = !_vm.followState
      }
    }
  }, [(!_vm.followState) ? _c('span', {
    staticClass: "icon-plus"
  }) : _vm._e(), _c('span', {
    domProps: {
      "textContent": _vm._s(!_vm.followState ? '关注' : '已关注')
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "foodMake"
  }, [_c('div', {
    staticClass: "time"
  }, [_c('p', [_c('span', {
    staticClass: "icon-time"
  }), _vm._v(" 时间：" + _vm._s(_vm.dataAll.postTime))]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "icon-signal"
  }), _vm._v(" 难度：" + _vm._s(_vm.dataAll.hardLevel))])]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "icon-ok-sign"
  }), _vm._v(" " + _vm._s(_vm.dataAll.descript))]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "stuffList"
  }, [_c('ul', _vm._l((_vm.dataAll.stuffList), function(item) {
    return _c('li', {
      staticClass: "stuffList_li"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.number))])])
  }))]), _vm._v(" "), _vm._m(1)])], 1)]), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "stuffListTitle"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("食材清单")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "stuffListTitle"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("美食步骤")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detailMenu"
  }, [_c('p', [_vm._v("加入采购单")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "icon-comment-alt"
  }), _vm._v(" 评论")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "icon-star-empty"
  }), _vm._v(" 收藏")])])
}]}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "msgListItem"
  }, [_vm._m(0), _vm._v(" "), _c('ul', _vm._l((_vm.listData), function(item, index) {
    return _c('li', {
      staticClass: "foodslist"
    }, [_c('router-link', {
      attrs: {
        "to": item.dataId
      }
    }, [_c('div', {
      staticClass: "foodsImg"
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "foodsInfo"
    }, [_c('div', {
      staticClass: "foodDescript"
    }, [_c('h2', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "foodStar"
    }, [_c('v-star', {
      staticClass: "star",
      attrs: {
        "score": 4.5
      }
    }), _vm._v(" "), _c('div', [_c('span', {
      staticClass: "starScore"
    }, [_vm._v("4.5")]), _vm._v(" "), _c('span', {
      staticClass: "icon-eye-open"
    }), _c('span', [_vm._v(_vm._s(item.browse))]), _vm._v(" "), _c('span', {
      staticClass: "icon-comment-alt"
    }), _c('span', [_vm._v(_vm._s(item.comment))])])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "user"
    }, [_c('div', {
      staticClass: "userPic"
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "userName"
    }, [_c('span', [_vm._v(_vm._s(item.userName))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.postTime) + "分钟前")])])])])])], 1)
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list_title"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("热门精贴")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })])
}]}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "indexSideBanner"
  }, [_c('ul', [_c('transition-group', {
    attrs: {
      "name": "bounce"
    }
  }, _vm._l((_vm.sideBanner), function(item, index) {
    return (_vm.currentShow == index) ? _c('li', {
      key: index,
      staticClass: "SB_list",
      on: {
        "touchstart": _vm.onTouchStart,
        "touchend": _vm.onTouchEnd
      }
    }, [_c('h2', [_vm._v(_vm._s(item.title) + " "), _c('span', {
      staticClass: "list_text"
    }, [_vm._v(_vm._s(item.text))])]), _vm._v(" "), _c('div', {
      staticClass: "details"
    }, _vm._l((item.details), function(detail) {
      return _c('router-link', {
        key: 'detail' + index,
        staticClass: "detail_link",
        attrs: {
          "to": "detail.dataId"
        }
      }, [_c('img', {
        attrs: {
          "src": detail.img
        }
      })])
    }))]) : _vm._e()
  }))], 1)])
},staticRenderFns: []}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form"
  }, [_c('ul', {
    staticClass: "userInfo"
  }, [_c('li', {
    staticClass: "form_li"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "couter"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userCount),
      expression: "userCount"
    }],
    staticClass: "phoneNumber",
    attrs: {
      "type": "text",
      "placeholder": "请输入手机号码"
    },
    domProps: {
      "value": (_vm.userCount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userCount = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "form_li"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "couter"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userPassWard),
      expression: "userPassWard"
    }],
    staticClass: "passWord",
    attrs: {
      "type": "password",
      "placeholder": "请输入密码"
    },
    domProps: {
      "value": (_vm.userPassWard)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userPassWard = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('ul', {
    staticClass: "submit_Ul"
  }, [_c('li', {
    staticClass: "forgetPossward"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("忘记密码?")])], 1), _vm._v(" "), _c('li', {
    staticClass: "submit"
  }, [_c('input', {
    attrs: {
      "type": "button",
      "value": "登录"
    },
    on: {
      "click": _vm.login
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "question"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("登录遇到问题")])], 1)]), _vm._v(" "), (_vm.loginOk) ? _c('div', {
    staticClass: "loginOk"
  }, [_c('p', [_vm._v("登录成功，马上转到美坊首页！")])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter_text"
  }, [_c('span', {
    staticClass: "icon-user"
  }), _vm._v(" "), _c('span', [_vm._v("账号")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter_text"
  }, [_c('span', {
    staticClass: "icon-wrench"
  }), _vm._v(" "), _c('span', [_vm._v("密码")])])
}]}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "recommendation"
    }
  }, [_c('v-rec-header', {
    attrs: {
      "title": _vm.oTitle
    }
  }), _vm._v(" "), _c('v-banner', {
    attrs: {
      "bannerData": _vm.recData.banner
    }
  }), _vm._v(" "), _c('v-sideMenu', {
    attrs: {
      "sideMenu": _vm.recData.sideMenu
    }
  }), _vm._v(" "), _c('v-hotSell', {
    attrs: {
      "hotGoods": _vm.recData.hotSell
    }
  }), _vm._v(" "), _c('v-listItem', {
    attrs: {
      "indexListData": _vm.indexList
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "message"
    },
    on: {
      "touchstart": _vm.reLoadStart,
      "touchmove": _vm.reLoadMove,
      "touchend": _vm.reLoadEnd
    }
  }, [_c('v-header', {
    attrs: {
      "title": _vm.oTitle
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "bounce"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.reLoadState),
      expression: "reLoadState"
    }],
    staticStyle: {
      "text-align": "center"
    },
    domProps: {
      "textContent": _vm._s(_vm.reLoadText)
    }
  })]), _vm._v(" "), _c('v-banner', {
    attrs: {
      "bannerData": _vm.dataAll.banner
    }
  }), _vm._v(" "), _c('v-listItem', {
    attrs: {
      "listData": _vm.messageList
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "bounce"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.refreshState),
      expression: "refreshState"
    }],
    staticClass: "refresh",
    domProps: {
      "textContent": _vm._s(_vm.refreshText)
    }
  }, [_vm._v("\n            拼命加载中。。。\n        ")])])], 1)
},staticRenderFns: []}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "head"
  }, [_c('h1', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "icon-th-large menuHeader"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
    staticClass: "icon-shopping-cart message"
  })])])
},staticRenderFns: []}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "star"
  }, _vm._l((_vm.itemClasses), function(item) {
    return _c('span', {
      staticClass: "star-item",
      class: 'star-' + item
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner"
  }, [(_vm.bannerData) ? _c('ul', [_c('transition-group', {
    attrs: {
      "name": "fade"
    }
  }, _vm._l((_vm.bannerData), function(item, index) {
    return (_vm.currentShow == index) ? _c('li', {
      key: index,
      on: {
        "touchstart": _vm.onTouchStart,
        "touchend": _vm.onTouchEnd
      }
    }, [_c('router-link', {
      staticClass: "bannerLink",
      attrs: {
        "to": {
          name: 'detail',
          params: {
            dataId: item.dataId
          }
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.text))])])], 1) : _vm._e()
  }))], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "bannerPonit"
  }, _vm._l((_vm.bannerData), function(item, index) {
    return _c('span', {
      class: {
        active: index === _vm.currentShow
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "register"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('h1', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "icon-chevron-left goBack",
    on: {
      "click": _vm.back
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("注册")])])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('ul', {
    staticClass: "userInfo"
  }, [_c('li', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "couter"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userPhoneNumber),
      expression: "userPhoneNumber"
    }],
    staticClass: "phoneNumber",
    attrs: {
      "type": "text",
      "placeholder": "请输入手机号码"
    },
    domProps: {
      "value": (_vm.userPhoneNumber)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userPhoneNumber = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.phoneState) ? _c('span', {
    staticClass: "icon-ok okSpan"
  }) : _vm._e()])]), _vm._v(" "), _c('li', [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "getCode"
  }, [_c('input', {
    class: {
      codeRequest: _vm.codeState
    },
    attrs: {
      "type": "button",
      "value": _vm.confrimCodeText,
      "disabled": _vm.codeState
    },
    on: {
      "click": _vm.confirmCode
    }
  })])]), _vm._v(" "), _c('li', [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "couter"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userPassWard),
      expression: "userPassWard"
    }],
    staticClass: "passWord",
    attrs: {
      "type": "password",
      "placeholder": "6-12位以字母数字组成"
    },
    domProps: {
      "value": (_vm.userPassWard)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userPassWard = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.passWardState) ? _c('span', {
    staticClass: "icon-ok okSpan"
  }) : _vm._e()])]), _vm._v(" "), _c('li', [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "couter"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.confirmPassWard),
      expression: "confirmPassWard"
    }],
    staticClass: "passWord",
    attrs: {
      "type": "password",
      "placeholder": "请再次输入密码"
    },
    domProps: {
      "value": (_vm.confirmPassWard)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.confirmPassWard = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.passWardConfirm) ? _c('span', {
    staticClass: "icon-ok okSpan"
  }) : _vm._e()])])]), _vm._v(" "), _c('p', {
    staticClass: "clause"
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    },
    on: {
      "click": function($event) {
        _vm.checkState = !_vm.checkState
      }
    }
  }), _vm._v("\n            注册后美美将按照《**********》条款为您服务\n        ")]), _vm._v(" "), _c('p', {
    staticClass: "register_p"
  }, [_c('input', {
    staticClass: "registerBtn",
    attrs: {
      "type": "button",
      "value": "注册"
    },
    on: {
      "click": _vm.registerConfirm
    }
  })])]), _vm._v(" "), _c('v-triangle'), _vm._v(" "), (_vm.registerOk) ? _c('div', {
    staticClass: "registerOk"
  }, [_c('p', [_vm._v("注册成功，马上转到登录！")])]) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter_text"
  }, [_c('span', {
    staticClass: "icon-user"
  }), _vm._v(" "), _c('span', [_vm._v("手机号码")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter_text"
  }, [_c('span', {
    staticClass: "icon-mobile-phone"
  }), _vm._v(" "), _c('span', [_vm._v("验证码")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "couter intCode"
  }, [_c('input', {
    staticClass: "verificationCode",
    attrs: {
      "type": "text",
      "placeholder": "请输入验证码"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter_text"
  }, [_c('span', {
    staticClass: "icon-wrench"
  }), _vm._v(" "), _c('span', [_vm._v("密码")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter_text"
  }, [_c('span', {
    staticClass: "icon-wrench"
  }), _vm._v(" "), _c('span', [_vm._v("确认密码")])])
}]}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "indexList"
  }, [_c('p', {
    staticClass: "listName"
  }, [_c('span', {
    staticClass: "icon-fire"
  }), _vm._v("最热\n        "), _c('router-link', {
    staticClass: "moreHotList",
    attrs: {
      "to": ""
    }
  }, [_vm._v("更多 "), _c('span', {
    staticClass: " icon-hand-right"
  })])], 1), _vm._v(" "), _c('ul', _vm._l((_vm.indexListData), function(item, index) {
    return _c('li', {
      staticClass: "list_Li"
    }, [_c('router-link', {
      staticClass: "list_link",
      attrs: {
        "to": {
          name: 'detail',
          params: {
            dataId: item.dataId
          }
        }
      }
    }, [_c('div', {
      staticClass: "itemPic"
    }, [_c('img', {
      attrs: {
        "src": item.listPic,
        "data-src": item.listPic
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "itemInfo"
    }, [_c('span', {
      staticClass: " icon-eye-open"
    }), _c('span', [_vm._v(_vm._s(item.browseTime))]), _vm._v(" "), _c('span', {
      staticClass: "icon-heart-empty"
    }), _c('span', [_vm._v(_vm._s(item.collection))])])]), _vm._v(" "), _c('div', {
      staticClass: "itemTitle"
    }, [_c('h3', [_vm._v(_vm._s(item.listTitle) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "userInfo"
    }, [_c('span', {
      staticClass: "userheadPhoto"
    }, [_c('img', {
      attrs: {
        "src": item.listPic
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "userName"
    }, [_vm._v(_vm._s(item.user))])])]), _vm._v(" "), _c('p', {
      staticClass: "itemText"
    }, [_vm._v(_vm._s(item.listText))])])], 1)
  }))])
},staticRenderFns: []}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.sideMenu) ? _c('div', {
    staticClass: "indexSideMenu",
    class: {
      border: _vm.sideMenu.borderNeed
    }
  }, _vm._l((_vm.sideMenu.mainData), function(item, index) {
    return _c('router-link', {
      key: index,
      staticClass: "sideMenuBar",
      attrs: {
        "to": {
          name: 'menuDetail',
          params: {
            dataId: item.dataId,
            title: item.text
          }
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.text))])])
  })) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    attrs: {
      "id": "menuTab"
    }
  }, [_c('div', {
    class: {
      active: _vm.currentIndex == 0
    },
    on: {
      "click": function($event) {
        _vm.currentIndex = 0
      }
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/home/index"
    }
  }, [_c('span', {
    staticClass: "icon-home"
  }), _vm._v(" "), _c('span', [_vm._v("主页")])])], 1), _vm._v(" "), _c('div', {
    class: {
      active: _vm.currentIndex == 1
    },
    on: {
      "click": function($event) {
        _vm.currentIndex = 1
      }
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/home/recomendation"
    }
  }, [_c('span', {
    staticClass: "icon-food"
  }), _vm._v(" "), _c('span', [_vm._v("精选")])])], 1), _vm._v(" "), _c('div', {
    class: {
      active: _vm.currentIndex == 2
    },
    on: {
      "click": function($event) {
        _vm.currentIndex = 2
      }
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/home/message"
    }
  }, [_c('span', {
    staticClass: "icon-comments-alt"
  }), _vm._v(" "), _c('span', [_vm._v("圈子")])])], 1), _vm._v(" "), _c('div', {
    class: {
      active: _vm.currentIndex == 3
    },
    on: {
      "click": function($event) {
        _vm.currentIndex = 3
      }
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/home/userCenter"
    }
  }, [_c('span', {
    staticClass: " icon-user"
  }), _vm._v(" "), _c('span', [_vm._v("坊主")])])], 1)]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 80 */,
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

// import home from "./home/home.vue"
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    data() {
        return {
            currentIndex: 0
        };
    }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            currentShow: 0,
            ponitActive: 0,
            startX: 0,
            autoScroll: null
        };
    },
    props: {
        bannerData: [Array]
    },
    watch: {
        "bannerData": function () {
            this.$nextTick(function () {
                this.autoPlay();
            });
        }
    },
    methods: {
        autoPlay() {
            let self = this;
            let len = this.bannerData.length;
            this.autoScroll = setInterval(function () {
                self.currentShow++;
                if (self.currentShow > len - 1) {
                    self.currentShow = 0;
                }
            }, 5000);
        },
        onTouchStart(event) {
            clearInterval(this.autoScroll);
            let touch = event.changedTouches[0];
            this.startX = touch.clientX;
        },
        onTouchEnd() {
            let touch = event.changedTouches[0];
            let endX = touch.clientX;
            let distance = Math.abs(this.startX - endX);
            let len = this.bannerData.length;
            //往右
            if (distance > 20) {
                if (this.startX < endX) {
                    this.currentShow--;
                    if (this.currentShow < 0) {
                        this.currentShow = len - 1;
                    }
                } else {
                    this.currentShow++;
                    if (this.currentShow > len - 1) {
                        this.currentShow = 0;
                    }
                }
            }
            this.autoPlay();
        }

    }

});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__star_star_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'detail',
    data() {
        return {
            followState: false,
            dataAll: {}
        };
    },
    components: {
        "v-star": __WEBPACK_IMPORTED_MODULE_0__star_star_vue___default.a
    },
    beforeRouteEnter(to, from, next) {
        let dataId = to.params.dataId;
        next(function (vm) {
            vm.$http.get('./api/index').then(function (data) {
                let dataList = data.data.data.indexListData;
                for (var i = 0; i < dataList.length; i++) {
                    if (dataId == dataList[i].dataId) {
                        vm.dataAll = dataList[i];
                    }
                }
            });
        });
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            oTitle: null
        };
    },
    beforeRouteEnter(to, from, next) {
        let dataId = to.params.dataId;
        let title = to.params.title;
        next(function (vm) {
            vm.oTitle = title;
        });
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            currentActive: 0
        };
    }
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userCenter_userCenter_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userCenter_userCenter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__userCenter_userCenter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            userCenterState: false
        };
    },
    components: {
        "v-userCenter": __WEBPACK_IMPORTED_MODULE_0__userCenter_userCenter_vue___default.a
    }
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            currentIndex: 0
        };
    }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            dataAll: {},
            autoScroll: null,
            startX: null,
            scrollX: null
        };
    },
    mounted() {
        this.$nextTick(function () {
            let self = this;
            setTimeout(function () {
                self.setWidth();
            }, 50);
        });
    },
    props: {
        hotGoods: {
            type: Object
        }
    },
    methods: {
        setWidth() {
            let oUl = this.$refs.hotScroll;
            let oLi = this.hotGoods.goods.length;
            oUl.style.width = oLi * 5 + "rem";
        },
        autoPlay() {
            let oUl = this.$refs.hotScroll;
            if (oUl.style) {
                oUl.style.transform = "translateX(" + this.scrollX + "px)";
            }
        },
        onTouchStart(event) {
            let touch = event.changedTouches[0];
            this.startX = touch.clientX;
            let oUl = this.$refs.hotScroll;
            let currentTranX = oUl.style.transform;
            if (currentTranX) {
                this.scrollX = -parseInt(currentTranX.replace(/[^0-9]/ig, ""));
            } else {
                this.scrollX = 0;
            }
        },
        onTouchMove(event) {
            let touch = event.changedTouches[0];
            let moveX = touch.clientX;
            let distance = parseInt(this.startX - moveX);
            let oUl = this.$refs.hotScroll;
            if (distance >= 10) {
                this.scrollX += -5;
            }
            if (distance <= -10) {
                this.scrollX += 5;
            }
            let oLi = this.hotGoods.goods.length * 5;
            if (this.scrollX > 0) {
                this.scrollX = 0;
            } else if (-this.scrollX > oLi - 18.75) {
                this.scrollX = -oLi + 18.75;
            }

            oUl.style.transform = "translateX(" + this.scrollX + "rem)";

            this.startX = moveX;
        }

    }

});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            defalutPic: "/static/img/indexList/indexList01.png"
        };
    },
    props: {
        indexListData: {
            type: Array
        }
    }
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            currentShow: 0,
            startX: 0,
            autoScroll: null,
            sideBanner: [{
                title: "秀早餐",
                text: "一日之计在于晨",
                details: [{
                    img: "/static/img/indexSideBanner/indexSideBanner01.png",
                    dataId: "01"
                }, {
                    img: "/static/img/indexSideBanner/indexSideBanner02.png",
                    dataId: "02"
                }, {
                    img: "/static/img/indexSideBanner/indexSideBanner03.png",
                    dataId: "03"
                }, {
                    img: "/static/img/indexSideBanner/indexSideBanner04.png",
                    dataId: "04"
                }]
            }, {
                title: "秀午餐",
                text: "正在给身体充电",
                details: [{
                    img: "/static/img/indexSideBanner/indexSideBanner01.png",
                    dataId: "02"
                }, {
                    img: "/static/img/indexSideBanner/indexSideBanner02.png",
                    dataId: "02"
                }, {
                    img: "/static/img/indexSideBanner/indexSideBanner03.png",
                    dataId: "02"
                }, {
                    img: "/static/img/indexSideBanner/indexSideBanner04.png",
                    dataId: "01"
                }]
            }, {
                title: "秀晚餐",
                text: "让夜晚更有味道",
                details: [{
                    img: "/static/img/indexSideBanner/indexSideBanner01.png",
                    dataId: "03"
                }, {
                    img: "/static/img/indexSideBanner/indexSideBanner02.png",
                    dataId: "03"
                }, {
                    img: "/static/img/indexSideBanner/indexSideBanner03.png",
                    dataId: "03"
                }, {
                    img: "/static/img/indexSideBanner/indexSideBanner04.png",
                    dataId: "04"
                }]
            }]
        };
    },
    mounted() {
        this.autoPlay();
    },
    methods: {
        autoPlay() {
            let self = this;
            let len = this.sideBanner.length;
            this.autoScroll = setInterval(function () {
                self.currentShow++;
                if (self.currentShow > len - 1) {
                    self.currentShow = 0;
                }
            }, 4000);
        },
        onTouchStart(event) {
            clearInterval(this.autoScroll);
            let touch = event.changedTouches[0];
            this.startX = touch.clientX;
        },
        onTouchEnd() {
            let touch = event.changedTouches[0];
            let endX = touch.clientX;
            let distance = Math.abs(this.startX - endX);
            let len = this.sideBanner.length;
            //往右
            if (distance > 20) {
                if (this.startX < endX) {
                    this.currentShow++;
                    if (this.currentShow > len - 1) {
                        this.currentShow = 0;
                    }
                } else {
                    this.currentShow--;
                    if (this.currentShow < 0) {
                        this.currentShow = len - 1;
                    }
                }
            }
            this.autoPlay();
            console.log(222);
        }
    }

});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            dataAll: {}
        };
    },
    props: {
        sideMenu: [Object, Array]
    }

});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_banner_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__banner_banner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__footer_footer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__indexSideMenu_indexSideMenu_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__indexSideMenu_indexSideMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__indexSideMenu_indexSideMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scrollNews_scrollNews_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scrollNews_scrollNews_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scrollNews_scrollNews_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__indexSideBanner_indexSideBanner_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__indexSideBanner_indexSideBanner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__indexSideBanner_indexSideBanner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__indexList_indexList_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__indexList_indexList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__indexList_indexList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__public_js_tools_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__public_js_tools_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__public_js_tools_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









const err_ok = 0;

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            currentIndex: 0,
            dataAll: {},
            indexList: [],
            indexListLength: 5,
            refreshState: false,
            reLoadState: false,
            timer1: null,
            refreshText: "拼命加载中。。。",
            reLoadText: "拼命刷新中。。。",
            startY: null
        };
    },
    created() {
        this.reload();
    },
    components: {
        "v-banner": __WEBPACK_IMPORTED_MODULE_0__banner_banner_vue___default.a,
        "v-header": __WEBPACK_IMPORTED_MODULE_1__header_header_vue___default.a,
        "v-sideMenu": __WEBPACK_IMPORTED_MODULE_3__indexSideMenu_indexSideMenu_vue___default.a,
        "v-sideBanner": __WEBPACK_IMPORTED_MODULE_5__indexSideBanner_indexSideBanner_vue___default.a,
        "v-scrollNews": __WEBPACK_IMPORTED_MODULE_4__scrollNews_scrollNews_vue___default.a,
        "v-indexList": __WEBPACK_IMPORTED_MODULE_6__indexList_indexList_vue___default.a,
        "v-footer": __WEBPACK_IMPORTED_MODULE_2__footer_footer_vue___default.a
    },
    mounted() {
        let self = this;
        window.onscroll = function () {
            __WEBPACK_IMPORTED_MODULE_7__public_js_tools_js___default.a.scrollUp(self, self.refreshState);
        };
    },
    methods: {
        addList() {
            let self = this;
            this.indexListLength += 5;
            if (this.indexListLength > this.dataAll.indexListData.length) {
                this.refreshText = "加载完毕哦";
                setTimeout(function () {
                    self.refreshState = false;
                }, 300);
            } else {
                this.refreshText = "已更新！";
                setTimeout(function () {
                    self.refreshState = false;
                    self.refreshText = "拼命加载中。。。";
                    self.indexList = self.dataAll.indexListData.slice(0, self.indexListLength);
                }, 300);
            }
        },
        reLoadStart() {
            let touch = event.changedTouches[0];
            this.startY = touch.clientY;
        },
        reLoadMove() {
            let scrollTop = document.body.scrollTop;
            let touch = event.changedTouches[0];
            let moveY = touch.clientY;
            let distance = parseInt(this.startY - moveY);
            if (distance < -20 && scrollTop == 0) {
                this.reLoadText = "拼命刷新中。。。。";
                this.reLoadState = true;
            }
        },
        reLoadEnd() {
            if (this.reLoadState) {
                this.reload();
                let self = this;
                setTimeout(function () {
                    self.reLoadText = "刷新完成！";
                    setTimeout(function () {
                        self.reLoadState = false;
                    }, 300);
                }, 800);
            }
        },
        reload() {
            this.$http.get("./api/index").then(res => {
                let data = res.data;
                if (data.errno === err_ok) {
                    this.dataAll = data.data;
                    this.indexList = this.dataAll.indexListData.slice(0, this.indexListLength);
                }
            });
        }
    }
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_js_tools__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_js_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_js_tools__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            userCount: null,
            userPassWard: null,
            loginOk: false
        };
    },
    methods: {
        login() {
            let username = this.userCount,
                passward = this.userPassWard;
            //                ***********查找本地用户*****
            let userState = __WEBPACK_IMPORTED_MODULE_0__public_js_tools___default.a.locationGetUser(username, "locationUser");
            if (userState) {
                if (passward === userState.passWard) {
                    this.loginOk = true;
                    let self = this;
                    __WEBPACK_IMPORTED_MODULE_0__public_js_tools___default.a.locationPushUser(userState, "currentUser");
                    console.log(localStorage);
                    setTimeout(function () {
                        self.$router.replace("/home/index");
                    }, 3000);
                } else {
                    alert("密码错误，重新输入");
                }
            } else {
                alert("请注册");
            }
        }
    }
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__triangle_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__triangle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__triangle_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    mounted() {
        console.log(localStorage);
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    },
    components: {
        "v-form": __WEBPACK_IMPORTED_MODULE_0__form_vue___default.a,
        "v-triangle": __WEBPACK_IMPORTED_MODULE_1__triangle_vue___default.a
    }
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            triangleState: false,
            dataTriangle: [{
                "dataId": "QQ",
                "icon": "../../../static/img/triangle/qq.png"
            }, {
                "dataId": "zhifubao",
                "icon": "../../../static/img/triangle/zhifubao.png"
            }, {
                "dataId": "sina",
                "icon": "../../../static/img/triangle/sina.png"
            }, {
                "dataId": "taobao",
                "icon": "../../../static/img/triangle/taobao.png"
            }, {
                "dataId": "weixin",
                "icon": "../../../static/img/triangle/weixin.png"
            }]
        };
    }
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recommendation_header_header_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recommendation_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__recommendation_header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_banner_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__banner_banner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msgListItem_msgListItem_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msgListItem_msgListItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__msgListItem_msgListItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_js_tools_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_js_tools_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__public_js_tools_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const err_ok = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            dataAll: {},
            oTitle: "圈子",
            messageList: [],
            messageListLength: 5,
            refreshState: false,
            reLoadState: false,
            timer1: null,
            refreshText: "拼命加载中。。。",
            reLoadText: "拼命刷新中。。。",
            startY: null
        };
    },
    beforeMount() {
        this.$nextTick(function () {
            this.$http.get("./api/message").then(res => {
                let data = res.data;
                if (data.errno === err_ok) {
                    this.dataAll = data.data;
                    this.addList();
                }
            });
        });
    },
    components: {
        "v-header": __WEBPACK_IMPORTED_MODULE_0__recommendation_header_header_vue___default.a,
        "v-banner": __WEBPACK_IMPORTED_MODULE_1__banner_banner_vue___default.a,
        "v-listItem": __WEBPACK_IMPORTED_MODULE_2__msgListItem_msgListItem_vue___default.a
    },
    mounted() {
        let self = this;
        window.onscroll = function () {
            __WEBPACK_IMPORTED_MODULE_3__public_js_tools_js___default.a.scrollUp(self, self.refreshState);
        };
    },
    methods: {
        addList() {
            let self = this;
            this.messageListLength += 5;
            if (this.messageListLength > this.dataAll.messageList.length) {
                this.refreshText = "加载完毕哦";
                setTimeout(function () {
                    self.refreshState = false;
                }, 300);
            } else {
                this.refreshText = "已更新！";
                setTimeout(function () {
                    self.refreshState = false;
                    self.refreshText = "拼命加载中。。。";
                    self.messageList = self.dataAll.messageList.slice(0, self.messageListLength);
                }, 300);
            }
        },
        reLoadStart() {
            let touch = event.changedTouches[0];
            this.startY = touch.clientY;
        },
        reLoadMove() {
            let scrollTop = document.body.scrollTop;
            let touch = event.changedTouches[0];
            let moveY = touch.clientY;
            let distance = parseInt(this.startY - moveY);
            if (distance < -20 && scrollTop == 0) {
                this.reLoadState = true;
            }
        },
        reLoadEnd() {
            if (this.reLoadState) {
                this.reload();
                let self = this;
                setTimeout(function () {
                    self.reLoadText = "刷新完成！";
                    setTimeout(function () {
                        self.reLoadState = false;
                        self.reLoadText = "拼命刷新中。。。。";
                    }, 300);
                }, 800);
            }
        },
        reload() {
            this.$http.get("./api/message").then(res => {
                let data = res.data;
                if (data.errno === err_ok) {
                    this.dataAll = data.data;
                }
            });
        }
    }

});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__star_star_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    props: {
        listData: [Object, Array]
    },
    components: {
        "v-star": __WEBPACK_IMPORTED_MODULE_0__star_star_vue___default.a
    }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    props: {
        title: [String, Object]
    }
});

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_banner_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__banner_banner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indexSideMenu_indexSideMenu_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indexSideMenu_indexSideMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__indexSideMenu_indexSideMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotSell_hotSell_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotSell_hotSell_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__hotSell_hotSell_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__indexList_indexList_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__indexList_indexList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__indexList_indexList_vue__);
//
//
//
//
//
//
//
//
//
//

const err_ok = 0;





/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            recData: {},
            oTitle: "精选",
            indexData: {},
            indexList: []
        };
    },
    beforeMount() {
        this.$nextTick(function () {
            this.$http.get("./api/recommendation").then(res => {
                let data = res.data;
                if (data.errno === err_ok) {
                    this.recData = data.data;
                }
            });

            this.$http.get("./api/index").then(response => {
                let indexData = response.data;
                if (indexData.errno === err_ok) {
                    this.indexData = indexData.data;
                    this.indexList = this.indexData.indexListData.slice(0, 10);
                }
            });
        });
    },
    components: {
        "v-rec-header": __WEBPACK_IMPORTED_MODULE_0__header_header_vue___default.a,
        "v-banner": __WEBPACK_IMPORTED_MODULE_1__banner_banner_vue___default.a,
        "v-sideMenu": __WEBPACK_IMPORTED_MODULE_2__indexSideMenu_indexSideMenu_vue___default.a,
        "v-hotSell": __WEBPACK_IMPORTED_MODULE_3__hotSell_hotSell_vue___default.a,
        "v-listItem": __WEBPACK_IMPORTED_MODULE_4__indexList_indexList_vue___default.a
    }
});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_triangle_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_triangle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__login_triangle_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_tools__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_js_tools__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            confrimCodeText: "获取验证码",
            codeState: false,
            codeRequestTime: 60,
            codeTime: null,
            userPhoneNumber: null,
            phoneState: false,
            userPassWard: null,
            confirmPassWard: null,
            passWardState: false,
            passWardConfirm: false,
            checkState: false,
            modelState: false,
            modelText: null,
            userQuantity: null,
            registerOk: false
        };
    },
    watch: {
        userPhoneNumber: function () {
            this.test();
        },
        userPassWard() {
            this.test();
        },
        confirmPassWard() {
            this.test();
        },
        codeRequestTime() {
            if (this.codeRequestTime >= 60) {
                this.confrimCodeText = "重新获取";
            } else {
                this.confrimCodeText = this.codeRequestTime + "s后重新获取";
            }
        }
    },
    mounted() {
        if (localStorage.locationUser) {
            this.userQuantity = localStorage.locationUser.length;
        } else {
            this.userQuantity = 0;
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        test() {
            let phoneReg = /^1[34578]\d{9}$/;
            if (phoneReg.test(this.userPhoneNumber)) {
                this.phoneState = true;
            } else {
                this.phoneState = false;
            }
            let passWardReg = /^[a-zA-Z0-9]{6,12}$/;
            if (passWardReg.test(this.userPassWard)) {
                this.passWardState = true;
            } else {
                this.passWardState = false;
            }
            if (this.confirmPassWard && this.userPassWard === this.confirmPassWard) {
                this.passWardConfirm = true;
            } else {
                this.passWardConfirm = false;
            }
        },
        confirmCode() {
            this.codeState = true;
            let self = this;
            this.codeTime = setInterval(function () {
                self.codeRequestTime -= 1;
                if (!self.codeRequestTime) {
                    clearInterval(self.codeTime);
                    self.codeState = false;
                    self.codeRequestTime = 60;
                }
            }, 100);
        },
        registerConfirm() {
            if (this.phoneState) {
                if (this.passWardState) {
                    if (this.passWardConfirm) {
                        if (this.checkState) {
                            this.register();
                        } else {
                            alert("请阅读《***》条款，确认无误后，请选择同意");
                        }
                    } else {
                        alert("两次输入的密码不一致，请重新输入");
                        this.confirmPassWard = null;
                    }
                } else {
                    alert("请输入正确的密码");
                    this.userPassWard = null;
                }
            } else {
                alert("请输入正确的手机号");
                this.userPhoneNumber = null;
            }
        },
        register() {
            let userNumber = this.userPhoneNumber;
            let userExist = __WEBPACK_IMPORTED_MODULE_1__public_js_tools___default.a.locationGetUser(userNumber, "locationUser");
            if (userExist) {
                alert("用户已经注册，请登录");
            } else {
                this.userQuantity++;
                if (this.userQuantity < 10) {
                    this.userQuantity = "0" + this.userQuantity;
                }
                let user = {};
                user.userId = this.userQuantity;
                user.phoneNumber = this.userPhoneNumber;
                user.passWard = this.userPassWard;
                //                **************加入到location中***********
                __WEBPACK_IMPORTED_MODULE_1__public_js_tools___default.a.locationPushUser(user, "locationUser");
                //                *******跳转到登录页面******
                this.registerOk = true;
                let self = this;
                setTimeout(function () {
                    self.$router.replace("/login");
                }, 1000);
            }
        },
        getUser(userName) {
            let userData = null;
            let storage = window.localStorage.getItem('locationUser');
            storage = eval(storage);
            for (let i = 0; i < storage.length; i++) {
                if (userName == storage[i].phoneNumber) {
                    userData = storage[i];
                    return userData;
                }
            }
        }
    },
    components: {
        "v-triangle": __WEBPACK_IMPORTED_MODULE_0__login_triangle_vue___default.a
    }
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            currentItem: 0,
            autoTimer: null
        };
    },
    props: {
        newsData: {
            type: Array
        }
    },
    mounted() {
        this.autoTimer = setInterval(() => {
            this.autoPlay();
        }, 2000);
    },
    methods: {
        changIcon(n) {
            let idx = parseInt(n);
            let className = "icon-coffee";
            switch (idx) {
                case 0:
                    className = "icon-coffee";
                    return className;
                    break;
                case 1:
                    className = "icon-bullhorn";
                    return className;
                    break;
                case 2:
                    className = "icon-thumbs-up";
                    return className;
                    break;
                case 3:
                    className = "icon-leaf";
                    return className;
                    break;
                default:
                    return className;
            }
        },
        autoPlay() {
            let newsLength = this.newsData.length;
            if (this.currentItem >= newsLength - 2) {
                this.currentItem = 0;
            } else {
                this.currentItem += 2;
            }
        }

    }
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

// 定义星星的数量，通过分数来控制result数组中的字符串，
// 给对应的字符拼接好类名写好样式，通过控制数组的变化来控制最总的样式
const starLength = 5;
const starOn = "on";
const starHalf = "half";
const starOff = "off";

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    props: {
        score: {
            type: Number
        }
    },
    computed: {
        itemClasses() {
            let result = [];
            let score = Math.floor(this.score * 2) / 2; //分数0.5取整，0.1-0.5就舍弃，0.5-0.9就加上
            let halfHas = score % 1 !== 0; //判断有无半星
            let integer = Math.floor(score); //全星的数量
            for (let i = 0; i < integer; i++) {
                result.push(starOn);
            }
            if (halfHas) {
                result.push(starHalf); //有半星就加上
            }
            while (result.length < starLength) {
                result.push(starOff); //最后补上空白的星星
            }
            return result;
        }
    }
});

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    props: {
        menuListData: [Array]
    }
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuList_menuList_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuList_menuList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menuList_menuList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_tools__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_js_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_js_tools__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const err_ok = 0;


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            userData: {},
            userId: 1,
            loginState: false,
            userName: null
        };
    },
    components: {
        "v-menuList": __WEBPACK_IMPORTED_MODULE_0__menuList_menuList_vue___default.a
    },
    beforeMount() {
        this.$nextTick(function () {
            this.$http.get("/api/userCenter").then(res => {
                let data = res.data;
                if (data.errno === err_ok) {
                    this.userData = data.data;
                }
            });
            let userState = localStorage.getItem("currentUser");
            if (userState) {
                userState = eval(userState);
                this.userName = userState[0].phoneNumber;
                console.log(this.userName, userState);
                this.loginState = true;
            } else {
                this.loginState = false;
            }
        });
    },
    methods: {
        logoutF() {
            console.log(666);
            window.localStorage.removeItem("currentUser");
            let self = this;
            setTimeout(function () {
                self.loginState = false;
            }, 1000);
        }
    }
});

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_js_tools_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_js_tools_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__public_js_tools_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_css_reset_css__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_css_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__public_css_reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_css_font_awesome_min_css__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__public_css_font_awesome_min_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.










//注意，现在1rem=20px,因为谷歌浏览器字体最小为12px,所以不能设置10px;
__WEBPACK_IMPORTED_MODULE_4__public_js_tools_js___default.a.setFontSize(18.75);
//在Vue中加入$http方法，来使用AJAX请求数据；
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$http = __WEBPACK_IMPORTED_MODULE_3_axios___default.a;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ })
],[131]);
//# sourceMappingURL=app.68440278f926cb743b49.js.map
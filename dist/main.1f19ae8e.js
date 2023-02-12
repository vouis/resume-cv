// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/trans.png":[function(require,module,exports) {
module.exports = "/trans.0abd4dae.png";
},{}],"images/contact.png":[function(require,module,exports) {
module.exports = "/contact.ec107fa4.png";
},{}],"images/educate.png":[function(require,module,exports) {
module.exports = "/educate.e2bfb9cc.png";
},{}],"images/skill.png":[function(require,module,exports) {
module.exports = "/skill.124f87a8.png";
},{}],"images/work.png":[function(require,module,exports) {
module.exports = "/work.6d0ebee3.png";
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _trans = _interopRequireDefault(require("./images/trans.png"));

var _contact = _interopRequireDefault(require("./images/contact.png"));

var _educate = _interopRequireDefault(require("./images/educate.png"));

var _skill = _interopRequireDefault(require("./images/skill.png"));

var _work = _interopRequireDefault(require("./images/work.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isEn = localStorage.getItem('isEn') || '0';
console.log(isEn, _typeof(isEn));
var pageCn = "<article>\n    <div class=\"language\"> \n    <img src=".concat(_trans.default, " alt=\"\">\n    English\n    </div>\n    <section class=\"bio\">\n      <h1 class='mid'>\u4E01\u5B81</h1>\n      <p class=\"mid1\">\n        \u5973 | 25\u5C81 | \u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08 | \u6DF1\u5733\n      </p >\n    </section>\n\n    <section class=\"contact\">\n      <br>\n      <h2>\n        <img src=").concat(_contact.default, " alt=\"\">\n        \u8054\u7CFB\u65B9\u5F0F\n      </h2>\n        <p>\n          \u624B\u673A\uFF1A<a class=\"ab\" href=\"tel:13267790335\">13267790335</a> | \u5FAE\u4FE1\uFF1Anding16 | \u90AE\u7BB1\uFF1A<a class=\"ab\" href=\"mailto:16nding@stu.edu.cn\">16nding@gmail.com</a>\n        </p>\n\n        <p>\u7B80\u5386\u5730\u5740\uFF1A<a class='ab' href=\"https://vouis.github.io/resume-cv/dist/index.html\">https://vouis.github.io/resume-cv/dist/index.html</a></p>\n\n        <div class=\"page\">\n          <p class=\"github\">\n            <span>Github\uFF1A</span>\n            <a class='ab' href=\"https://github.com/vouis\">https://github.com/vouis</a>\n          </p>\n          <p class=\"juejin\">\n            <span>\u535A\u5BA2\uFF1A</span>\n            <a class='ab'\n               href=\"https://juejin.im/user/5e6766836fb9a07ca90c3d0d\">https://juejin.im/user/5e6766836fb9a07ca90c3d0d</a>\n          </p>\n        </div>\n      </h2>\n\n\n    </section>\n\n    <section class=\"education\">\n      <br>\n      <h2>\n        <img src=").concat(_educate.default, " alt=\"\">\n        \u6559\u80B2\u7ECF\u5386\n      </h2>\n      <p>\n      <div>\n        <h3>\u6C55\u5934\u5927\u5B66\uFF082016\u5E74~2020\u5E74\uFF09</h3>\n      </div>\n      \u8BA1\u7B97\u673A\u7CFB \u672C\u79D1</p>\n        \u82F1\u8BED\u80FD\u529B\uFF1A CET-6\n    </section>\n\n    <section class=\"skills\">\n      <br />\n      <h2>\n        <img src=").concat(_skill.default, " alt=\"\">\n        \u6280\u80FD\n      </h2>\n      <p>\n        \u719F\u6089HTML5\u548CCSS\u9875\u9762\u5E03\u5C40\u6280\u5DE7\uFF0CFlex\u5E03\u5C40\uFF0C\u80FD\u5C06\u8BBE\u8BA1\u7A3F<strong>\u5B8C\u7F8E\u8FD8\u539F</strong>\n      </p>\n      <p>\n        \u719F\u6089<strong>JavaScript</strong>\u6280\u672F\uFF0C\u638C\u63E1\u95ED\u5305\uFF0C\u539F\u578B\uFF0C\u7EE7\u627F\uFF0CDOM\u7B49\u7279\u6027,\u719F\u6089 ES6\uFF0C \u5305\u62EC let / Promise / await / \u6790\u6784\u8D4B\u503C\u7B49\n      </p>\n      <p>\n        \u719F\u6089<strong>\u524D\u540E\u7AEF\u5206\u79BB</strong>\u6280\u672F\uFF0C\u5305\u62EC AJAX\u3001\u8DE8\u57DF\u3001\u524D\u7AEF\u8DEF\u7531\u3001Cookie\u3001Session \u7B49\n      </p>\n      <p>\u719F\u7EC3\u638C\u63E1 <strong>React</strong> \u548C <strong>React Native</strong>\u7684\u4F7F\u7528\uFF0C\u5305\u62EC Hooks\u3001\u76F8\u5173\u7EC4\u4EF6 antd\u7B49</p>\n      <p>\u719F\u6089 <strong>git</strong> \u4EE3\u7801\u53D1\u5E03\u90E8\u7F72\u6D41\u7A0B</p>\n      <p>\u826F\u597D\u7684\u4EBA\u9645\u5173\u7CFB\u548C<strong>\u56E2\u961F\u5408\u4F5C</strong>\u7CBE\u795E\uFF0C\u6211\u53EF\u4EE5\u4E0E\u6765\u81EA\u4E0D\u540C\u80CC\u666F\u7684\u4EBA\u878D\u6D3D\u4E92\u52A8\uFF0C\u4FC3\u8FDB\u5E76\u786E\u4FDD\u9879\u76EE\u8FDB\u5C55 </p>\n      <br>\n      <br>\n    </section>\n\n    <section class=\"projects\">\n      <h2>\n        <img src=").concat(_work.default, " alt=\"\">\n        \u5DE5\u4F5C\u7ECF\u5386\n      </h2>\n      <ol>\n        <li>\n          <header>\n            <h2>1.QTrade\u503A\u5238\u4EA4\u6613\u5E73\u53F0</h2>\n            <br>\n          </header>\n          <p><strong>2020.06--2021.07 </strong></p>\n          <br>\n          <h4>\u5DE5\u4F5C\u63CF\u8FF0</h4>\n          <p>\n            \u57FA\u4E8E<strong>\u817E\u8BAF\u4F01\u70B9</strong>\u4E92\u52A8\u5E73\u53F0\uFF0C\u5F00\u53D1\u4E8C\u7EA7\u503A\u5238\u4EA4\u6613\u7CFB\u7EDF\u3002\n          </p>\n          <h4>\u53C2\u4E0E\u4EE5\u4E0B\u9879\u76EE\uFF1A</h4>\n          <li><em>\u8FD0\u8425\u6D3B\u52A8</em></li>\n          <p>\u5F00\u53D1H5\u62BD\u5956\u6D3B\u52A8\u9875\u9762\uFF0C\u5E76\u517C\u5BB9IE\u6D4F\u89C8\u5668\uFF0C\u6210\u529F\u63A8\u5E7F\u65B0\u529F\u80FD\u5E76\u4E3A\u65B0\u529F\u80FD\u589E\u52A0\u65E5\u6D3B\u3002</p><strong>\u6280\u672F\u6808\uFF1Avue</strong>\n        <div class=\"page2\"></div>\n          <li><em>\u524D\u7AEF\u7EC4\u4EF6\u5E93\u7F51\u9875\u90E8\u7F72</em></li>\n          <p>\u7EC4\u4EF6\u5E93\u5B98\u7F51\u9875\u9762\u4F18\u5316\u4E0EJenkins\u6784\u5EFA\uFF0C\u4F7F\u7EC4\u4EF6\u5E93\u5B98\u7F51\u53EF\u4EE5\u5728\u5F00\u53D1\u73AF\u5883\u5C55\u793A\uFF0C\u52A0\u5F3A\u524D\u7AEF\u5F00\u53D1\u4E0EUI\u7684\u6C9F\u901A\u6548\u7387\u3002</p><strong>\u6280\u672F\u6808\uFF1Awebpack+Jenkins+gatsby+react</strong>\n          <li><em>\u4F01\u70B9\u9996\u9875\u503A\u5238\u63A8\u8350\u4F18\u5316</em></li>\n          <p>\u7528\u6237\u9996\u9875\u63A8\u8350\u7684\u503A\u5238\u652F\u6301\u67E5\u770B\u8BE5\u6295\u6807\u7684\u5386\u53F2\u6295\u6807\u6570\u636E\uFF0C\u8FDB\u884C\u65B0\u5EFA\u548C\u4FEE\u6539\uFF0C\u5E76\u5B9E\u65F6\u540C\u6B65\u6570\u636E\u66F4\u65B0\u3002</p><strong>\u6280\u672F\u6808\uFF1Areact+ant design\u7EC4\u4EF6</strong>\n          <li><em>\u914D\u9002\u5E76\u4F18\u5316nlp(\u81EA\u7136\u8BED\u8A00\u7B97\u6CD5\u5904\u7406)\u8BC6\u522B\u5F39\u7A97</em></li>\n          <p>\u4E0E\u540C\u4E8B\u5408\u4F5C\uFF0C\u901A\u8FC7\u540E\u53F0\u65B0\u63A5\u5165\u7684\u8BED\u8A00\u7B97\u6CD5\u7CFB\u7EDF\uFF0C\u53EF\u5C06\u81EA\u7136\u8BED\u8A00\u8F6C\u6362\u6210\u503A\u5238\u4EA4\u6613\u6570\u636E\u3002\n          \u4E3A\u6B64\uFF0C\u7528\u6237\u53EF\u901A\u8FC7\u8BE5\u754C\u9762\u8F93\u5165\u81EA\u7136\u8BED\u8A00\uFF1B\u5185\u5BB9\u5F39\u7A97\u4F1A\u6839\u636E\u7B97\u6CD5\u7ED3\u679C\uFF0C\u5C55\u793A\u591A\u6837\u7684nlp\u8BC6\u522B\u7684\u591A\u6761\u6295\u6807\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u8BED\u4E49\u5BF9\u591A\u6761\u6295\u6807\u8FDB\u884C\u65B0\u5EFA\u4E0E\u4FEE\u6539\uFF0C\u8BE5\u529F\u80FD\u4F5C\u4E3A\u516C\u53F8\u4E1A\u52A1\u6838\u5FC3\u529F\u80FD\u5E7F\u53D7\u597D\u8BC4\u3002</p><strong>\u6280\u672F\u6808\uFF1Areact+ant design\u7EC4\u4EF6</strong>\n        </li>\n\n      </ol>\n      <ol>\n        <li>\n          <header>\n            <h2>2.\u6D82\u9E26\u667A\u80FD</h2>\n            <br>\n          </header>\n          <p><strong>2021.07--2022.10 </strong></p>\n<br>\n          <h4>\u5DE5\u4F5C\u63CF\u8FF0</h4>\n          <p>\n            \u57FA\u4E8E<strong>React Native</strong>\u548C<strong>\u516C\u53F8\u81EA\u7814\u5C0F\u7A0B\u5E8F</strong>\uFF0C\u7814\u53D1<strong>iot\u79FB\u52A8\u7AEF</strong>\u4FE1\u606F\u63A7\u5236\u7CFB\u7EDF\uFF0C\u5E76\u5B8C\u7F8E\u914D\u9002\u5B89\u5353\u7AEF\u548Cios\u7AEF\u3002\n          <p>\u8D1F\u8D23\u516C\u53F8<strong>iot\u8BBE\u5907\u79FB\u52A8\u7AEF\u9875\u9762</strong>\u5F00\u53D1 </p>\n         <p> \u548C\u5B89\u5353\uFF0Cios\uFF0C\u5D4C\u5165\u5F0F\uFF0C\u4E91\u7AEF\u8FDB\u884C<strong>\u591A\u7AEF\u8054\u8C03</strong></p>\n          </p>\n          <h4>\u53C2\u4E0E\u4EE5\u4E0B\u9879\u76EE\uFF1A</h4>\n          <li><em>\u53CC\u6A21\u84DD\u7259\u8033\u673A</em></li>\n          <p>\u7814\u53D1<strong>\u63A7\u5236\u8033\u673A\u7684app\u9875\u9762</strong>\u3002</p>\n          <p>\u53EF\u63A7\u5236\u8033\u673A\u97F3\u91CF\uFF0Ceq\u9891\u7387\u66F2\u7EBF\u8C03\u6574\uFF0C\u8033\u673A\u5730\u7406\u4F4D\u7F6E\u5C55\u793A\uFF0C\u65AD\u94FE\u5BFB\u56DE\uFF0C\u84DD\u7259\u6539\u540D\uFF0C\u84DD\u7259\u914D\u5BF9\uFF0C\u91CD\u7F6E\u84DD\u7259\u7B49<strong>\u57FA\u7840\u529F\u80FD</strong>\u3002</p>\n          <p>\u5E76\u5728\u4EE5\u4E0A\u57FA\u7840\u529F\u80FD\u4E0A\u5B9E\u73B0\u4E86\u4F20\u7EDF\u6DF1\u84DD\uFF0C\u79D1\u6280\u767D\uFF0C\u9177\u70AB\u9ED1\u7D2B\uFF0C<strong>\u4E09\u79CD\u7248\u672CUI</strong>\u3002</p>\n          <p>\u8BE5\u9879\u76EE\u4ECE0\u5F00\u59CB\u5F00\u53D1\uFF0C\u4E0E\u5B89\u5353\uFF0Cios\uFF0C\u5D4C\u5165\u5F0F\uFF0C\u4E91\u7AEF<strong>\u591A\u7AEF\u7814\u53D1</strong>\u4E00\u8D77\u53C2\u4E0E\u6B64\u9879\u76EE\u7684\u6280\u672F\u5B9E\u73B0\u7814\u8BA8\u3002</p>\n          <p>\u6280\u672F\u7EC6\u8282\u5305\u62EC\uFF1A\u4F7F\u7528<strong\u53CC\u6A21\u84DD\u7259</strong>\u63A7\u5236Ble\u548CBT\u84DD\u7259\u8BC6\u522B\uFF0C\u53CA\u540D\u5B57\u66F4\u6539\u4E09\u65B9\u540C\u6B65\u7B49\u903B\u8F91\u3002\u516C\u53F8\u5185\u90E8\u9996\u6B21<strong>\u4E32\u53E3\u901A\u4FE1</strong>\u4F20\u8F93\u4E2D\u6587\u5B57\u7B26\u4E32\u7ED9\u5D4C\u5165\u5F0F\uFF0C\u4F7F\u7528Unicode\u7F16\u7801\u53CA\u5341\u516D\u8FDB\u5236\u8F6C\u6362\u4F20\u8F93\u3002\n          </p><strong>\u6280\u672F\u6808\uFF1AReact Native</strong>\n       \n          <li><em>\u5B9A\u4F4D\u5668\u57FA\u7840\u6A21\u677F</em></li>\n          <p>\u7814\u53D1<strong>\u5B9A\u4F4D\u5668app\u529F\u80FD</strong>\uFF0C\u6269\u5C55\u5B9A\u4F4D\u80FD\u529B\u3002</p>\n          <p>\u8BE5\u6A21\u677F\u4E4B\u540E\u7528\u4E8E\u513F\u7AE5/\u8001\u4EBA\u7B49\u5BFB\u4EBA\u5B9A\u4F4D\u5668\uFF0C\u53CA\u5BA0\u7269/\u7269\u54C1\u5B9A\u4F4D\u5668\uFF0C\u548C\u8F66\u8F7D\u5B9A\u4F4D\u5668\uFF0C\u4EE5\u53CA\u5176\u5B83\u9700\u8981\u5B9A\u4F4D\u529F\u80FD\u7684iot\u8BBE\u5907\uFF0C\u6BD4\u5982\u5B9A\u4F4D\u8033\u673A\u3002</p>\n          <p>\u901A\u8FC7GPS\uFF0CLBS\uFF08\u57FA\u7AD9\u5750\u6807\uFF09\uFF0CWIFI\u5730\u5740\u7B49\u591A\u79CD\u65B9\u5F0F\u83B7\u53D6<strong>\u7ECF\u7EAC\u5EA6</strong>\u3002\u5E76\u63D0\u4F9B\u641C\u7D22\u4F4D\u7F6E\u80FD\u529B\uFF0C\u5E76\u53EF\u8DF3\u8F6C\u5B9A\u4F4D\u5BFC\u822A\u7B2C\u4E09\u65B9\uFF0C\u5982\u9AD8\u5FB7\uFF0C\u767E\u5EA6\uFF0C\u8C37\u6B4C\u5BFC\u822A\uFF0C\u65B9\u4FBF\u5BFC\u822A\u5E76\u5BFB\u56DE\u8BBE\u5907\u4F4D\u7F6E\u3002</p>\n          <p>\u901A\u8FC7<strong>cat1\u8702\u7A9D\u7F51\u7EDC\u548C\u84DD\u7259</strong>\u4E24\u79CD\u901A\u8BAF\u65B9\u5F0F\uFF0C\u4E0Eiot\u8BBE\u5907\u8FDB\u884C\u4EA4\u4E92\u3002\u5E76\u63D0\u4F9B\u84DD\u7259\u4FE1\u53F7\u5F3A\u5EA6\uFF0C\u65B9\u4FBF\u8FD1\u8DDD\u79BB\u8BBE\u5907\u4F4D\u7F6E\u5B9A\u4F4D\u3002</p>\n          <p>\u5E76\u63D0\u4F9B\u8BBE\u5907\u65AD\u8054\u548C\u91CD\u8FDE\u63D0\u9192\u94C3\u58F0\u9009\u53D6\uFF0C\u5B89\u5168\u533A\u57DF\u5185\u4E0D\u4F1A\u8FDB\u884C<strong>\u91CD\u8054\u65AD\u8054\u63D0\u9192</strong>\u3002</p>\n          <p>\u5E38\u7528\u4F4D\u7F6E\u4F1A\u901A\u8FC7\u667A\u80FD\u8BA1\u7B97\uFF0C\u663E\u793A\u51FA\u6765\uFF0C\u63D0\u793A\u7528\u6237\u53EF\u5C06\u8BE5\u533A\u57DF\u8BBE\u4E3A<strong>\u5B89\u5168\u533A\u57DF</strong>\u3002</p>\n          <p>\u53EF\u5C55\u793A\u5B9A\u4F4D\u5668\u5386\u53F2\u4F4D\u7F6E\u6570\u636E\uFF0C\u5E76\u63D0\u4F9B\u5730\u56FE\u4E0A\u7684<strong>\u884C\u52A8\u8F68\u8FF9\u56DE\u6EAF</strong>\u529F\u80FD\u3002</p>\n          <p>\u513F\u7AE5/\u8001\u4EBA/\u5BA0\u7269\u7B49\u5B9A\u4F4D\u5668\u63D0\u4F9B\u751F\u7269\u72EC\u6709\u7684\u8DEF\u7A0B\u53CA\u5361\u8DEF\u91CC\u7B49\u76F8\u5173<strong>\u8FD0\u52A8\u8BA1\u7B97\u6570\u636E</strong>\u548C\u76F8\u5173\u8FD0\u52A8\u5EFA\u8BAE\uFF0C\u8F66\u8F7D\u5B9A\u4F4D\u5668\u72EC\u6709\u8FC7\u5F80\u91CC\u7A0B\u8BA1\u7B97\u53CA\u663E\u793A\u529F\u80FD\u3002</p>\n          <p>\u6574\u7406<strong>\u5B9A\u4F4D\u7684\u76F8\u5173\u80FD\u529Bapi</strong>\uFF0C\u63D0\u4F9B\u5176\u4F59\u9700\u8981\u66F4\u591A\u5B9A\u4F4D\u529F\u80FD\u7684iot\u9879\u76EE\u53C2\u8003\u3002</p>\n          </p><strong>\u6280\u672F\u6808\uFF1AReact Native</strong>\n          <li><em>\u57FA\u4E8E\u6D82\u9E26\u81EA\u7814\u5C0F\u7A0B\u5E8F\u7814\u53D1\u8212\u9002\u7A7A\u95F4\u5C0F\u7A0B\u5E8F</em></li>\n          <p>\n          \u8BE5\u5C0F\u7A0B\u5E8F\u662F\u516C\u53F8\uFF0C\u57FA\u4E8E\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u57FA\u7840\uFF0C\u81EA\u7814\u7684\u6D82\u9E26\u5C0F\u7A0B\u5E8F\u3002</p>\n          <p>\u5F00\u53D1\u8BE5\u5C0F\u7A0B\u5E8F\u65F6\uFF0C<strong>\u6D82\u9E26\u5C0F\u7A0B\u5E8F</strong>\u7684\u8BED\u6CD5\u6A21\u677F\u521A\u5EFA\u8BBE\u597D\u3002\n          \u4F5C\u4E3A2021\u5E74<strong>\u516C\u53F8\u9996\u6B21\u5C1D\u8BD5\u81EA\u7814\u5C0F\u7A0B\u5E8F</strong>\u91CD\u70B9kpi\u5B9E\u9A8C\u6027\u9879\u76EE\uFF0C\u53D7\u5230\u91CD\u70B9\u5173\u6CE8\u3002</p>\n          <p>\u8212\u9002\u7A7A\u95F4\u5C0F\u7A0B\u5E8F\uFF0C\u53EF\u5BF9\u516C\u53F8\u65D7\u4E0B<strong>\u6240\u6709iot\u8BBE\u5907</strong>\u8FDB\u884C\u63A7\u5236\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u5165\u53E3\u5728\u516C\u53F8\u7814\u53D1app\u6700\u4E0A\u65B9\u3002</p>\n          <p>\u5C0F\u7A0B\u5E8F\u5BF9\u8D26\u6237\u5185\uFF0C\u5177\u6709<strong>\u4F20\u611F\u5668\u7684iot\u8BBE\u5907</strong>\uFF0C\u91C7\u96C6\u5230\u7684\u4FE1\u606F\u8FDB\u884C\u5C55\u793A\uFF0C\u5982\u6E29\u6E7F\u5EA6\u4FE1\u606F\u7B49\u3002</p>\n          <p>\u4E5F\u63D0\u4F9B<strong>\u8D26\u6237\u8BBE\u5907\u7684\u5FEB\u6377\u64CD\u63A7</strong>\uFF0C\u5982\u5F00\u5173\u5173\u95ED\uFF0C\u706F\u5149\u989C\u8272\u5207\u6362\uFF0C\u8033\u673A\u97F3\u91CF\u8C03\u6574\uFF0C\u7B49\u591A\u79CD\u4E0D\u540C\u8BBE\u5907\u4E0D\u540C\u9700\u6C42\u7684\u63A7\u5236\u3002</p>\n          <p>\u5E76\u63D0\u4F9B\u6309\u7167\u6BCF\u65E5\uFF0C\u6BCF\u5468\uFF0C\u6BCF\u6708\uFF0C\u6BCF\u5E74\u7B49\u5BF9\u8BBE\u5907\u7684<strong>\u5B9A\u65F6\u63A7\u5236</strong>\u529F\u80FD\u3002</p>\n          <p>\u7531\u4E8E\u662F\u65E9\u671F\u63A5\u5165\u8BE5\u5C0F\u7A0B\u5E8F\uFF0C\u6CA1\u6709\u4EFB\u4F55\u53EF\u4F7F\u7528\u7684\u6A21\u677F\uFF0C\u5982ray\uFF1B\u57FA\u7840\u7EC4\u5BF9\u4E8E<strong>\u76F8\u5173\u7EC4\u4EF6\u5F00\u53D1</strong>\u4E5F\u5341\u5206\u4E0D\u5B8C\u5584\u3002</p>\n          <p>\u56E0\u6B64\uFF0C\u8BE5\u9879\u76EE\u8017\u8D39\u4E86\u5927\u91CF\u65F6\u95F4\u7528\u4E8E\u6EDA\u52A8\u6761\uFF0C\u65E5\u5386\u7EC4\u4EF6\u76F8\u5173<strong>\u57FA\u7840\u7EC4\u4EF6\u5F00\u53D1</strong>\u3002</p>\n</p><strong>\u6280\u672F\u6808\uFF1A\u6D82\u9E26\u5C0F\u7A0B\u5E8F</strong>\n          <li><em>\u591A\u5217\u7AD6\u76F4\u6EDA\u52A8\u6761RN\u7EC4\u4EF6\u6574\u7406</em></li>\n          <p>\u5C06<strong>\u591A\u5217</strong>\u5782\u76F4\u6EDA\u52A8\u6761<strong>\u7EC4\u4EF6\u6574\u7406</strong>\u8F93\u51FA\uFF0C\u4F20\u5230\u516C\u53F8\u7EC4\u4EF6\u4EE3\u7801\u5E93\uFF0C\u63D0\u4F9B\u53EF\u590D\u7528\u7684\u7EC4\u4EF6\u3002\n          \u8BE5\u7EC4\u4EF6\u57FA\u4E8ERN\u7684<strong>\u5355\u5217</strong>\u7AD6\u76F4\u6EDA\u52A8\u6761\u6269\u5C55\uFF0C\u989D\u5916\u63D0\u4F9B\u4FBF\u6377\u914D\u7F6E\u5217\u6570\uFF0C\u53CA\u6A2A\u7EB5\u5750\u6807\u6570\u636E\uFF0C\u5355\u4F4D\u5C55\u793A\u914D\u7F6E\u3002\u5E76\u53EF\u57FA\u4E8E\u6EDA\u52A8\u6761\u4F4D\u7F6E<strong>\u751F\u6210\u80CC\u666F\u66F2\u7EBF</strong>\u3002\n          \u5E76\u4E14\u63D0\u4F9B\u66F4\u6362\u6EDA\u52A8\u6761\u6837\u5F0F\uFF08CSS\u6216\u8005\u56FE\u7247\uFF09\uFF0C\u7AD6\u76F4\u6EDA\u52A8\u6761\u95F4\u8DDD\uFF0C\u66F2\u7EBF\u989C\u8272\u548C\u6E10\u53D8\u7B49\u76F8\u5173<strong>\u6837\u5F0F\u914D\u7F6E</strong>\u3002\n         </p><strong>\u6280\u672F\u6808\uFF1AReact Native + svg</strong>\n        </li>\n\n      </ol>\n    </section>\n\n\n<!--    <section class=\"projects\">-->\n<!--      <br>-->\n<!--      <br>-->\n<!--      <h2>-->\n<!--        <img src=\"./images/project.png\" alt=\"\">-->\n<!--        \u9879\u76EE\u7ECF\u5386</h2>-->\n<!--      <ol>-->\n<!--        <li>-->\n<!--          <header>-->\n<!--            <h3>Js\u8BFB\u53D6json\u6570\u636E\u5B9E\u73B0\u52A8\u6001\u6C14\u6CE1\u56FE</h3>-->\n<!--            <span>-->\n<!--              <a href=\"https://github.com/vouis/D3-project-motion-chart\">\u6E90\u7801\u94FE\u63A5</a>-->\n<!--              <a href=\"https://vouis.github.io/D3-project-motion-chart/motion_chart.html\">\u9879\u76EE\u9884\u89C8</a>-->\n<!--            </span>-->\n<!--          </header>-->\n<!--          <img src=\"./images/motion.png\" alt=\"\" height=\"200\" class=\"mimg\">-->\n<!--          <p>\u8BF7\u4E0B\u8F7D<strong>data1.json</strong>\u4F5C\u4E3A\u6570\u636E\u6E90\u8FDB\u884C\u9884\u89C8</p>-->\n<!--          <p>-->\n<!--            \u4E00\u6B3E\u57FA\u4E8E <strong>JavaScript</strong> \u7684/ <strong>D3\u5E93</strong> / \u7684\u6570\u636E\u53EF\u89C6\u5316\u5C55\u793A\u3002-->\n\n<!--          </p>-->\n<!--          <p>-->\n<!--            \u4E3B\u8981\u529F\u80FD\u6709\u6309\u7167\u5E74\u4EFD\u65F6\u95F4\u987A\u5E8F\uFF0C<strong>\u52A8\u6001\u663E\u793A\u6C14\u6CE1\u56FE</strong>\u3002-->\n\n<!--          </p>-->\n<!--          <p>-->\n<!--            \u8BE5\u56FE\u5305\u62EC<strong>\u6C14\u6CE1\u534A\u5F84\uFF0Cx\uFF0Cy\u8F74\uFF0C\u65F6\u95F4\u53CA\u6C14\u6CE1\u540D\u79F0</strong>\u7B49\u9700\u8981\u4ECEjson\u6587\u4EF6\u83B7\u53D6\u7684\u5185\u5BB9\uFF0C\u901A\u8FC7SVG\u6E32\u67D3\u5230HTML-->\n\n<!--          </p>-->\n<!--          <p>-->\n<!--            \u53EF<strong>\u989D\u5916\u914D\u7F6E</strong>\u6C14\u6CE1\u8FD0\u884C\u901F\u5EA6\uFF0C\u56FE\u5F62\u6BD4\u4F8B\u5927\u5C0F\uFF0C\u5750\u6807\u5185\u5BB9\u7B49-->\n<!--          </p>-->\n<!--          <p><strong>\u6280\u672F\u6808\uFF1A JavaScript+HTML5+CSS3+D3+json</strong></p>-->\n<!--        </li>-->\n<!--        <li>-->\n<!--          <br>-->\n<!--          <br>-->\n\n<!--&lt;!&ndash;          <header>&ndash;&gt;-->\n<!--&lt;!&ndash;            <h3>\u76D2\u5B50\u5BFC\u822A</h3>&ndash;&gt;-->\n<!--&lt;!&ndash;            <span>&ndash;&gt;-->\n<!--&lt;!&ndash;              <a href=\"https://github.com/vouis/box-nav\" target=\"_blank\">\u6E90\u7801\u94FE\u63A5</a>&ndash;&gt;-->\n<!--&lt;!&ndash;              <a href=\"https://vouis.github.io/box-nav/dist/index.html\" target=\"_blank\">\u9879\u76EE\u9884\u89C8</a>&ndash;&gt;-->\n<!--&lt;!&ndash;            </span>&ndash;&gt;-->\n<!--&lt;!&ndash;          </header>&ndash;&gt;-->\n<!--&lt;!&ndash;          <img src=\"./images/box-nav.png\" alt=\"\" height=\"200\" class=\"mimg\">&ndash;&gt;-->\n<!--&lt;!&ndash;          <p>&ndash;&gt;-->\n<!--&lt;!&ndash;            \u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E <strong>\u539F\u751FJavaScript</strong> \u9875\u9762\u5BFC\u822A\u3002&ndash;&gt;-->\n<!--&lt;!&ndash;          </p>&ndash;&gt;-->\n<!--&lt;!&ndash;          <p>&ndash;&gt;-->\n<!--&lt;!&ndash;            \u52A0\u5165\u4E86\u767E\u5EA6\u7684<strong>\u641C\u7D22\u529F\u80FD</strong>&ndash;&gt;-->\n<!--&lt;!&ndash;          </p>&ndash;&gt;-->\n<!--&lt;!&ndash;          <p>&ndash;&gt;-->\n<!--&lt;!&ndash;            \u8BE5\u7CFB\u7EDF\u901A\u8FC7\u6D4F\u89C8\u5668<strong>Storage</strong>\uFF0C\u672C\u5730<strong>\u4FDD\u5B58\u7F51\u5740\u6570\u636E</strong>\u3002&ndash;&gt;-->\n<!--&lt;!&ndash;          </p>&ndash;&gt;-->\n<!--&lt;!&ndash;          <p><strong>\u6280\u672F\u6808\uFF1A JavaScript+HTML5+LocalStorage+CSS3</strong></p>&ndash;&gt;-->\n<!--        </li>-->\n\n<!--      </ol>-->\n<!--    </section>-->\n\n    <br>\n    <br>\n\n  </article>");
var pageEn = "<article>\n    <div class=\"language\"> \n    <img src=".concat(_trans.default, " alt=\"\">\n    \u4E2D\u6587\n    </div>\n    <section class=\"bio\">\n      <h1 class='mid'>ding ning</h1>\n      <p class=\"mid1\">\n        female | 23 years | Front-end developer | shenzhen\n      </p >\n    </section>\n\n    <section class=\"contact\">\n      <br>\n      <h2>\n        <img src=").concat(_contact.default, " alt=\"\">\n        Contact\n      </h2>\n        <p>\n          phone\uFF1A<a class=\"ab\" href=\"tel:13267790335\">13267790335</a> | wechat\uFF1Anding16 | mail\uFF1A<a class=\"ab\" href=\"mailto:16nding@stu.edu.cn\">16nding@gmail.com</a>\n        </p>\n\n        <p>resume link\uFF1A<a class='ab' href=\"https://vouis.github.io/resume-cv/dist/index.html\">https://vouis.github.io/resume-cv/dist/index.html</a></p>\n\n        <div class=\"page\">\n          <p class=\"github\">\n            <span>Github\uFF1A</span>\n            <a class='ab' href=\"https://github.com/vouis\">https://github.com/vouis</a>\n          </p>\n          <p class=\"juejin\">\n            <span>blog\uFF1A</span>\n            <a class='ab'\n               href=\"https://juejin.im/user/5e6766836fb9a07ca90c3d0d\">https://juejin.im/user/5e6766836fb9a07ca90c3d0d</a>\n          </p>\n        </div>\n      </h2>\n\n\n    </section>\n\n    <section class=\"education\">\n      <br>\n      <h2>\n        <img src=").concat(_educate.default, " alt=\"\">\n        education\n      </h2>\n      <p>\n      <div>\n        <h3>Shantou University\uFF082016 ~ 2020\uFF09</h3>\n      </div>\n      computer science bachelor</p>\n        english language ability\uFF1A CET-6\n    </section>\n\n    <section class=\"skills\">\n      <br />\n      <h2>\n        <img src=").concat(_skill.default, " alt=\"\">\n        Skill\n      </h2>\n      <p>\n        Familiar with HTML5 and CSS page layout skills, Flex layout, can <strong>restore the design draft perfectly</strong> \n      </p>\n      <p>\n        Familiar with <strong>JavaScript</strong> technology, master closures, prototypes, inheritance, DOM and other features, familiar with ES6, including let / Promise / await / destructuring assignment, etc.\n      </p>\n      <p>\n        Familiar with <strong>Front-end and back-end separation</strong> technology, including AJAX, cross-domain, front-end routing, Cookie, Session, etc.\n      </p>\n      <p>\n      Familiar with the use of <strong>React</strong>, <strong>React Native</strong> including Hooks, related components antd, etc.\n      </p>\n      <p>\n      Familiar with the <strong>git</strong> code release and deployment process\n      </p>\n      <p>\n      With good interpersonal relationships and <strong>teamwork</strong> spirit, I can successfully interact with people from different backgrounds to promote and ensure the progress of the project\n      </p>\n      <br>\n      <br>\n    </section>\n\n    <section class=\"projects\">\n      <h2>\n        <img src=\"./images/work.png\" alt=\"\">\n        work experience\n      </h2>\n      <ol>\n        <li>\n          <header>\n            <h3>Companies since the internship--QTrade</h3>\n            <br>\n          </header>\n          <p><strong>2020.06--to date </strong></p>\n\n          <h4>work description</h4>\n          <p>\n            The company took the lead in developing a bidding system based on Tencent's enterprise point interactive platform, which is convenient and quick to identify nlp.\n          <p>Responsible for the company's <strong>page requirements</strong> development </p>\n          </p>\n          <h4>Participate in the following projects:</h4>\n          <li><em>Operational activities</em></li>\n          <p>Developed the H5 lottery event page, compatible with IE browser, successfully promoted new features and added daily activities to the new features. </p><strong>Technology: vue</strong>\n        <div class=\"page2\"></div>\n          <li><em>A joint platform for cooperation between Yichuang Exhibition Industry Platform</em></li>\n          <p>Develop the cooperation page between our company and Yichuang Zhanye platform, so that users can invest in Yichuang's platform on our platform. </p><strong>Technology: flex+react+ant design component</strong>\n          <li><em>Front-end component library web page deployment</em></li>\n          <p>Component library official website page optimization and Jenkins construction, so that the component library official website can be displayed in the development environment, and enhance the communication efficiency between front-end development and UI.</p><strong>Technology\uFF1Awebpack+Jenkins+gatsby+react</strong>\n          <li><em>Enterprise Point Homepage Bond Recommendation Optimization</em></li>\n          <p>The bond recommended by the user homepage supports viewing the historical bid data of the bid, making new creation and modification, and real-time synchronization of data updates.</p><strong>Technology\uFF1Aflex+react+ant design+websocket</strong>\n          <li><em>Adapt and optimize the nlp recognition pop-up window</em></li>\n          <p>Cooperate with colleagues to display multiple bidding content pop-ups identified by nlp, so that users can create and modify multiple bids through semantics. This function is widely praised as the core function of the company's business.</p><strong>Technology\uFF1Aflex+react+ant design</strong>\n          <li><em>nlp manual input pop-up window</em></li>\n          <p>The user manually enters the corpus and displays the corpus after nlp recognition.</p><strong>Technology\uFF1Aflex+react+ant design</strong>\n\n        </li>\n\n      </ol>\n    </section>\n\n\n    <section class=\"projects\">\n      <br>\n      <br>\n      <h2>\n        <img src=\"./images/project.png\" alt=\"\">\n        Project experience</h2>\n      <ol>\n        <li>\n          <header>\n            <h3>Js reads json data to realize dynamic bubble chart</h3>\n            <span>\n              <a href=\"https://github.com/vouis/D3-project-motion-chart\">Source link</a>\n              <a href=\"https://vouis.github.io/D3-project-motion-chart/motion_chart.html\">Project preview</a>\n            </span>\n          </header>\n          <img src=\"./images/motion.png\" alt=\"\" height=\"200\" class=\"mimg\">\n          <p>Please download<strong>data1.json</strong>Preview as a data source</p>\n          <p>\n           A data visualization display based on <strong>JavaScript</strong> / <strong>D3 library</strong> /.\n\n          </p>\n          <p>\n            The main function is to <strong>dynamically display bubble graphs</strong> in the order of year and time.\n\n          </p>\n          <p>\n            The graph includes content that needs to be obtained from the json file, such as <strong>bubble radius, x, y axis, time and bubble name</strong>, and rendered to HTML through SVG\n\n          </p>\n          <p>\n            <strong>Additional configuration</strong> bubble running speed, graphic scale size, coordinate content, etc.\n          </p>\n          <p><strong>Technology\uFF1A JavaScript+HTML5+CSS3+D3+json</strong></p>\n        </li>\n        <li>\n          <br>\n          <br>\n        </li>\n\n      </ol>\n    </section>\n\n    <br>\n    <br>\n\n  </article>");
document.getElementById('app').innerHTML = isEn === '0' ? pageCn : pageEn;
$('.language').on('click', function () {
  if (isEn === '0') {
    localStorage.setItem('isEn', '1');
  } else {
    localStorage.setItem('isEn', '0');
  }

  window.location.reload();
});
},{"./images/trans.png":"images/trans.png","./images/contact.png":"images/contact.png","./images/educate.png":"images/educate.png","./images/skill.png":"images/skill.png","./images/work.png":"images/work.png"}],"C:/Users/zmm/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63778" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/zmm/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map
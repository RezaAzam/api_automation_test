webpackJsonp([23],{163:function(e,t,n){n(842);var r=n(71)(n(519),n(874),"data-v-52c85e07",null);e.exports=r.exports},187:function(e,t,n){"use strict";function r(e){return"[object Array]"===_.call(e)}function o(e){return"[object ArrayBuffer]"===_.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===_.call(e)}function d(e){return"[object File]"===_.call(e)}function l(e){return"[object Blob]"===_.call(e)}function h(e){return"[object Function]"===_.call(e)}function m(e){return f(e)&&h(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function b(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)b(arguments[n],e);return t}function j(e,t,n){return b(t,function(t,r){e[r]=n&&"function"==typeof t?x(t,n):t}),e}var x=n(195),_=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isFormData:a,isArrayBufferView:i,isString:s,isNumber:u,isObject:f,isUndefined:c,isDate:p,isFile:d,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:b,merge:w,extend:j,trim:y}},190:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(187),a=n(212),i=/^\)\]\}',?\n/,s={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(191):void 0!==t&&(e=n(191)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(i,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){u.headers[e]={}}),o.forEach(["post","put","patch"],function(e){u.headers[e]=o.merge(s)}),e.exports=u}).call(t,n(72))},191:function(e,t,n){"use strict";var r=n(187),o=n(204),a=n(207),i=n(213),s=n(211),u=n(194),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(206);e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||s(e.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var g=e.auth.username||"",y=e.auth.password||"";d.Authorization="Basic "+c(g+":"+y)}if(l.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?i(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,a={data:r,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};o(t,f,a),l=null}},l.onerror=function(){f(u("Network Error",e)),l=null},l.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),l=null},r.isStandardBrowserEnv()){var v=n(209),b=(e.withCredentials||s(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(e){if("json"!==l.responseType)throw e}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},192:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},193:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},194:function(e,t,n){"use strict";var r=n(203);e.exports=function(e,t,n,o){var a=new Error(e);return r(a,t,n,o)}},195:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},197:function(e,t,n){e.exports=n(198)},198:function(e,t,n){"use strict";function r(e){var t=new i(e),n=a(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(187),a=n(195),i=n(200),s=n(190),u=r(s);u.Axios=i,u.create=function(e){return r(o.merge(s,e))},u.Cancel=n(192),u.CancelToken=n(199),u.isCancel=n(193),u.all=function(e){return Promise.all(e)},u.spread=n(214),e.exports=u,e.exports.default=u},199:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(192);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},200:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(190),a=n(187),i=n(201),s=n(202),u=n(210),c=n(208);r.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},201:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(187);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},202:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(187),a=n(205),i=n(193),s=n(190);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},203:function(e,t,n){"use strict";e.exports=function(e,t,n,r){return e.config=t,n&&(e.code=n),e.response=r,e}},204:function(e,t,n){"use strict";var r=n(194);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n)):e(n)}},205:function(e,t,n){"use strict";var r=n(187);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},206:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),i="",s=0,u=a;o.charAt(0|s)||(u="=",s%1);i+=u.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},207:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(187);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},208:function(e,t,n){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},209:function(e,t,n){"use strict";var r=n(187);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},210:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},211:function(e,t,n){"use strict";var r=n(187);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},212:function(e,t,n){"use strict";var r=n(187);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},213:function(e,t,n){"use strict";var r=n(187);e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(a[t]=a[t]?a[t]+", "+n:n)}),a):a}},214:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delApiGroup=t.updateApiGroup=t.addApiGroup=t.getApiGroupList=t.addApiDetail=t.getTestTenResult=t.getTestTenTime=t.getTestResultList=t.addEmailConfig=t.delEmailConfig=t.getEmailConfigDetail=t.getProjectMemberList=t.getProjectDynamicList=t.addHost=t.updateHost=t.enableHost=t.disableHost=t.delHost=t.getHost=t.getProjectDetail=t.addProject=t.updateProject=t.enableProject=t.disableProject=t.delProject=t.getProject=t.recordVisitor=t.requestLogin=t.test=void 0;var r=n(197),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=t.test="http://120.79.232.23:8000";t.requestLogin=function(e){return o.default.post(a+"/api/user/login",e).then(function(e){return e.data})},t.recordVisitor=function(e){return o.default.post(a+"/api/user/VisitorRecord",e).then(function(e){return e.data})},t.getProject=function(e,t){return o.default.get(a+"/api/project/project_list",{params:t,headers:e}).then(function(e){return e.data})},t.delProject=function(e,t){return o.default.post(a+"/api/project/del_project",t,{headers:e}).then(function(e){return e.data})},t.disableProject=function(e,t){return o.default.post(a+"/api/project/disable_project",t,{headers:e}).then(function(e){return e.data})},t.enableProject=function(e,t){return o.default.post(a+"/api/project/enable_project",t,{headers:e}).then(function(e){return e.data})},t.updateProject=function(e,t){return o.default.post(a+"/api/project/update_project",t,{headers:e}).then(function(e){return e.data})},t.addProject=function(e,t){return o.default.post(a+"/api/project/add_project",t,{headers:e}).then(function(e){return e.data})},t.getProjectDetail=function(e,t){return o.default.get(a+"/api/title/project_info",{params:t,headers:e}).then(function(e){return e.data})},t.getHost=function(e,t){return o.default.get(a+"/api/global/host_total",{params:t,headers:e}).then(function(e){return e.data})},t.delHost=function(e,t){return o.default.post(a+"/api/global/del_host",t,{headers:e}).then(function(e){return e.data})},t.disableHost=function(e,t){return o.default.post(a+"/api/global/disable_host",t,{headers:e}).then(function(e){return e.data})},t.enableHost=function(e,t){return o.default.post(a+"/api/global/enable_host",t,{headers:e}).then(function(e){return e.data})},t.updateHost=function(e,t){return o.default.post(a+"/api/global/update_host",t,{headers:e}).then(function(e){return e.data})},t.addHost=function(e,t){return o.default.post(a+"/api/global/add_host",t,{headers:e}).then(function(e){return e.data})},t.getProjectDynamicList=function(e,t){return o.default.get(a+"/api/dynamic/dynamic",{params:t,headers:e}).then(function(e){return e.data})},t.getProjectMemberList=function(e,t){return o.default.get(a+"/api/member/project_member",{params:t,headers:e}).then(function(e){return e.data})},t.getEmailConfigDetail=function(e,t){return o.default.get(a+"/api/member/get_email",{params:t,headers:e}).then(function(e){return e.data})},t.delEmailConfig=function(e,t){return o.default.post(a+"/api/member/del_email",t,{headers:e}).then(function(e){return e.data})},t.addEmailConfig=function(e,t){return o.default.post(a+"/api/member/email_config",t,{headers:e}).then(function(e){return e.data})},t.getTestResultList=function(e,t){return o.default.get(a+"/api/report/auto_test_report",{params:t,headers:e}).then(function(e){return e.data})},t.getTestTenTime=function(e,t){return o.default.get(a+"/api/report/test_time",{params:t,headers:e}).then(function(e){return e.data})},t.getTestTenResult=function(e,t){return o.default.get(a+"/api/report/lately_ten",{params:t,headers:e}).then(function(e){return e.data})},t.addApiDetail=function(e,t){return o.default.post(a+"/api/api/add_api",t,{headers:e}).then(function(e){return e.data})},t.getApiGroupList=function(e,t){return o.default.get(a+"/api/api/group",{params:t,headers:e}).then(function(e){return e.data})},t.addApiGroup=function(e,t){return o.default.post(a+"/api/api/add_group",t,{headers:e}).then(function(e){return e.data})},t.updateApiGroup=function(e,t){return o.default.post(a+"/api/api/update_name_group",t,{headers:e}).then(function(e){return e.data})},t.delApiGroup=function(e,t){return o.default.post(a+"/api/api/del_group",t,{headers:e}).then(function(e){return e.data})}},519:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(215);t.default={data:function(){return{tableData:[],total:0,page:1,listLoading:!1}},methods:{handleCurrentChange:function(e){this.page=e,this.getProjectDynamic()},getProjectDynamic:function(){this.listLoading=!0;var e=this,t={project_id:Number(this.$route.params.project_id),page:e.page},n={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,r.getProjectDynamicList)(n,t).then(function(t){var n=t.msg,r=t.code,o=t.data;e.listLoading=!1,"999999"===r?(e.total=o.total,e.tableData=o.data):e.$message.error({message:n,center:!0})})}},mounted:function(){this.getProjectDynamic()}}},562:function(e,t,n){t=e.exports=n(155)(!1),t.push([e.i,".dynamic-manage[data-v-52c85e07]{margin:35px}",""])},842:function(e,t,n){var r=n(562);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(156)("d04f14bc",r,!0)},874:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"dynamic-manage"},[n("el-col",{attrs:{span:24}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[n("el-table-column",{attrs:{prop:"time",label:"操作时间","min-width":"13%"}}),e._v(" "),n("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"10%"}}),e._v(" "),n("el-table-column",{attrs:{prop:"operationObject",label:"操作对象","min-width":"15%"}}),e._v(" "),n("el-table-column",{attrs:{prop:"operationUser",label:"操作人","min-width":"15%"}}),e._v(" "),n("el-table-column",{attrs:{prop:"description",label:"描述","min-width":"47%"}})],1),e._v(" "),n("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,"page-count":e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}}});
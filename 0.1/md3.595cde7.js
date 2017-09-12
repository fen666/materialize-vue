webpackJsonp([2],{154:function(t,s,a){t.exports=a(168)},160:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{value4:!0,value1:!0,value2:!0}},methods:{test:function(t){console.log(t)}}}},168:function(t,s,a){var v=a(1)(a(160),a(172),null,null,null);t.exports=v.exports},172:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[t._m(0),t._v(" "),a("p",[t._v("表示两种相互对立的状态间的切换，多用于触发「开/关」。")]),t._v(" "),t._m(1),t._v(" "),a("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-switch v-model="value1"></mv-switch>\n<mv-switch v-model="value2" off-color="#ff4949" on-color="#13ce66"></mv-switch>\n\n\n',script:"\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true\n      }\n    }\n  };\n",style:null}}},[a("div",{staticClass:"source",slot:"source"},[a("mv-switch",{model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}}),t._v(" "),a("mv-switch",{attrs:{"off-color":"#ff4949","on-color":"#13ce66"},model:{value:t.value2,callback:function(s){t.value2=s},expression:"value2"}})],1),t._v(" "),a("p",[t._v("绑定"),a("code",[t._v("v-model")]),t._v("到一个"),a("code",[t._v("Boolean")]),t._v("类型的变量。可以使用"),a("code",[t._v("on-text")]),t._v("属性与"),a("code",[t._v("off-text")]),t._v("属性来设置开关的文字描述，使用"),a("code",[t._v("on-color")]),t._v("属性与"),a("code",[t._v("off-color")]),t._v("属性来设置开关的背景色。")]),t._v(" "),a("div",{staticClass:"highlight",slot:"highlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-switch")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value1"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-switch")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-switch")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value2"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("off-color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#ff4949"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("on-color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#13ce66"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-switch")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value1")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value2")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      }\n    }\n  };\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(2),t._v(" "),a("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-switch v-model="value4" disabled></mv-switch>\n<mv-switch v-model="value4" off-color="#ff4949" on-color="#13ce66" disabled></mv-switch>\n\n\n',script:"\n  export default {\n    data() {\n      return {\n        value4: true,\n        value1: true,\n        value2: true\n      }\n    },\n     methods: {\n       test (res) {\n         console.log(res)\n       }\n     }\n  };\n",style:null}}},[a("div",{staticClass:"source",slot:"source"},[a("mv-switch",{attrs:{disabled:""},model:{value:t.value4,callback:function(s){t.value4=s},expression:"value4"}}),t._v(" "),a("mv-switch",{attrs:{"off-color":"#ff4949","on-color":"#13ce66",disabled:""},model:{value:t.value4,callback:function(s){t.value4=s},expression:"value4"}})],1),t._v(" "),a("p",[t._v("设置"),a("code",[t._v("disabled")]),t._v("属性，接受一个"),a("code",[t._v("Boolean")]),t._v("，设置"),a("code",[t._v("true")]),t._v("即可禁用。。")]),t._v(" "),a("div",{staticClass:"highlight",slot:"highlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-switch")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value4"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-switch")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-switch")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value4"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("off-color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#ff4949"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("on-color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#13ce66"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mv-switch")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value4")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value1")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value2")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      }\n    },\n     "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n       test (res) {\n         "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(res)\n       }\n     }\n  };\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",{attrs:{id:"switch-kai-guan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch-kai-guan","aria-hidden":"true"}},[t._v("¶")]),t._v(" Switch 开关")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"ji-ben-yong-fa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa","aria-hidden":"true"}},[t._v("¶")]),t._v(" 基本用法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"jin-yong-zhuang-tai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-zhuang-tai","aria-hidden":"true"}},[t._v("¶")]),t._v(" 禁用状态")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("是否禁用")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("on-text")]),t._v(" "),a("td",[t._v("switch 打开时的文字")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("ON")])]),t._v(" "),a("tr",[a("td",[t._v("off-text")]),t._v(" "),a("td",[t._v("switch 关闭时的文字")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("OFF")])]),t._v(" "),a("tr",[a("td",[t._v("on-value")]),t._v(" "),a("td",[t._v("switch 打开时的值")]),t._v(" "),a("td",[t._v("boolean / string / number")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("off-value")]),t._v(" "),a("td",[t._v("switch 关闭时的值")]),t._v(" "),a("td",[t._v("boolean / string / number")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("on-color")]),t._v(" "),a("td",[t._v("switch 打开时的背景色")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("#20A0FF")])]),t._v(" "),a("tr",[a("td",[t._v("off-color")]),t._v(" "),a("td",[t._v("switch 关闭时的背景色")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("#C0CCDA")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("switch 对应的 name 属性")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("switch 状态发生变化时的回调函数")]),t._v(" "),a("td",[t._v("新状态的值")])])])])}]}}});
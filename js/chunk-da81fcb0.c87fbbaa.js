(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da81fcb0"],{"0fd1":function(s,e,t){},"1d11":function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"message"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"title"},[s._v("\n      给我留言\n    ")]),t("div",{staticClass:"main"},[t("div",{staticClass:"write"},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入留言内容...",maxlength:"200","show-word-limit":"",rows:"4"},model:{value:s.userInfo.message,callback:function(e){s.$set(s.userInfo,"message",e)},expression:"userInfo.message"}}),t("div",{staticClass:"submit"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:s.message}},[s._v("提交")])],1)],1),t("div",{staticClass:"title"},[s._v("\n        最新留言\n      ")]),t("ul",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"message-ul",attrs:{"element-loading-text":"玩命加载中","element-loading-background":"rgba(255, 255, 255, 0)"}},[t("message-list",{attrs:{arrayList:s.messageList}})],1)])])])},n=[],i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"messageList"}},s._l(s.arrayList,function(e){return t("li",{staticClass:"messageList-li"},[t("div",{staticClass:"myInfo"},[s._m(0,!0),t("div",{staticClass:"name-time"},[t("div",{staticClass:"name"},[s._v(s._s(e.nickname))]),t("div",{staticClass:"time"},[s._v(s._s(e.time))])])]),t("p",{staticClass:"words"},[s._v(s._s(e.message))])])}),0)},r=[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t("3810")}})])}],c={name:"messageList",props:{arrayList:Array}},o=c,l=(t("3cae"),t("2877")),u=Object(l["a"])(o,i,r,!1,null,null,null),m=u.exports,f=t("bdaa"),g=t("a9cb"),d={name:"message",data:function(){return{loading:!0,text:"",messageList:[],userInfo:{}}},components:{MessageList:m},methods:{getMessageList:function(){var s=this;Object(f["b"])().then(function(e){console.log(e),s.messageList=e.data.messages.reverse(),s.loading=!1})},message:function(){var s=this;s.$store.state.userInfo.username?s.userInfo.message?(s.userInfo.username=s.$store.state.userInfo.username,s.userInfo.nickname=s.$store.state.userInfo.nickname,s.userInfo.time=Object(g["a"])(),Object(f["a"])(s.userInfo).then(function(e){console.log(e),0===e.data.code?(s.success(),s.getMessageList()):s.fail()}).catch(function(){s.fail()})):s.info("留言内容不能为空哦~"):s.info("请登录后再留言哦~")},info:function(s){this.$message({message:s,type:"warning"})},success:function(){this.$message({message:"留言成功",type:"success"})},fail:function(){this.$message({message:"留言失败",type:"error"})}},beforeMount:function(){this.getMessageList()}},v=d,p=(t("9d02"),Object(l["a"])(v,a,n,!1,null,null,null));e["default"]=p.exports},3810:function(s,e,t){s.exports=t.p+"img/user.9150c8f0.jpg"},"3cae":function(s,e,t){"use strict";var a=t("98d3"),n=t.n(a);n.a},"98d3":function(s,e,t){},"9d02":function(s,e,t){"use strict";var a=t("0fd1"),n=t.n(a);n.a}}]);
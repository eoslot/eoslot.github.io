(function(t){function e(e){for(var i,s,r=e[0],c=e[1],u=e[2],d=0,f=[];d<r.length;d++)s=r[d],o[s]&&f.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("c21b"),o=n.n(i);o.a},"055e":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=new URL(location.href),o=i.searchParams.get("test");e["a"]={dicer:o?"eosbetdice22":"eoslotgodice",core_symbol_str:o?"SYS":"EOS",core_symbol:o?/\sSYS/:/\sEOS/}},"0b1f":function(t,e,n){},"1bd8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"slider-container"},[n("div",{staticClass:"slider"},[n("span",[t._v("1")]),n("div",{ref:"slide",staticClass:"slider-bg",on:{click:t.slide}},[n("div",{ref:"range",staticClass:"slider-range",style:{right:t.rangeDistance}}),n("div",{ref:"tooltip",staticClass:"slider-tooltip",style:{right:t.rangeDistance}},[t._v(t._s(t.current))]),n("div",{ref:"handle",staticClass:"slider-handle",class:{active:t.isDraging},style:{right:t.rangeDistance},on:{mousedown:t.dragStart}})]),n("span",[t._v("100")])])])},o=[],a=(n("c5f6"),n("cadf"),n("551c"),n("097d"),n("42a5")),s={props:{initial:{type:Number,default:50},max:{type:Number,default:100},min:{type:Number,default:1}},mounted:function(){var t=this.$refs.slide.offsetWidth,e=this.$refs.slide.getBoundingClientRect(),n=e.left;this.left=n,this.slideWidth=t,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("mouseleave",this.dragEnd)},data:function(){return{current:this.initial,isDraging:!1,left:0,slideWidth:0}},computed:{rangeDistance:function(){return this.slideWidth-this.offsetX+"px"},offsetX:function(){return this.current/100*this.slideWidth}},methods:{slide:function(t){var e=t.offsetX,n=Math.floor(e/this.slideWidth*100);switch(!0){case n<this.min:this.current=this.min;break;case n>this.max:this.current=this.max;break;default:this.current=n}a["a"].$emit("ROLLUNDER_CHANGE",this.current)},drag:function(t){var e=t.screenX;t.offsetX,t.pageX;this.isDraging&&this.slide({offsetX:e-this.left})},dragStart:function(){this.isDraging=!0},dragEnd:function(){this.isDraging=!1}},destroyed:function(){document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseleave",this.dragEnd),document.removeEventListener("mouseup",this.dragEnd)}},r=s,c=(n("72ce"),n("2877")),u=Object(c["a"])(r,i,o,!1,null,"f76cabc0",null);u.options.__file="slider.vue";e["default"]=u.exports},"26ab":function(t,e,n){},"2f77":function(t,e,n){t.exports=n.p+"img/bet-token.f602b663.png"},"38c8":function(t,e,n){},4:function(t,e){},"42a5":function(t,e,n){"use strict";var i=n("2b0e");e["a"]=new i["default"]},5:function(t,e){},"531e":function(t,e,n){},5335:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"app"}},[n("dice-header"),n("dice-game",{attrs:{orders:t.apporders}}),n("dice-orders",{attrs:{orders:t.apporders}})],1)},a=[],s=(n("c5f6"),n("6b54"),n("7514"),new Promise(function(t){document.addEventListener("scatterLoaded",t)})),r={mounted:function(){var t=this;s.then(function(){if(scatter.identity){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&t.$store.commit("UPDATE_ACCOUNT",e)}}),this.fetchOrders()},components:{diceHeader:n("71c2").default,diceGame:n("f252").default,diceOrders:n("bed5").default},data:function(){return{apporders:[]}},methods:{fetchOrders:function(){var t=this;Pusher.logToConsole=!0;var e=new Pusher("df97ed45f323bb2d64d5",{cluster:"ap1",forceTLS:!0}),n=e.subscribe("my-channel");n.bind("my-event",function(e){var n=200;"eosbetcasino"!==e.referral&&(n=150);var i="0.0000 EOS";e.roll_under>e.random_roll&&(i=e.bet_amt*(100*(1e4-n)/(e.roll_under-1))/1e8,i=new Number(i).toFixed(4).toString()+" EOS");var o=new Number(e.bet_amt/1e4).toFixed(4).toString()+" EOS";e.bet_amt=o,e.payout=i,t.apporders.splice(0,0,e)})}}},c=r,u=(n("034f"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,f=n("5c96"),_=n.n(f),h=n("2f62");i["default"].use(h["a"]);var T=new h["a"].Store({state:{account:{}},mutations:{UPDATE_ACCOUNT:function(t,e){t.account=e}}}),E=n("ecee"),m=n("c074"),p=n("7a55"),v=n("42b9"),g=(n("f5df"),n("450d"),n("a7cc"),n("915d"),n("0fb7"),n("46a1"),n("38c8"),n("a925"));E["library"].add(m["a"],v["a"]),i["default"].use(_.a),i["default"].config.productionTip=!1,i["default"].component("font-awesome-icon",p["FontAwesomeIcon"]),i["default"].use(g["a"]);var b={en:{how:{TITLE:"How To Play",CONTENT:"1. Make sure you have an EOS account. For more information on how to create one, click here.\n2. If you haven’t already, download and install Scatter, an EOS wallet that facilitates interaction between users and dApps.\n3. Set your BET AMOUNT. This is the amount of EOS you will be wagering.\n4. Adjust the slider to change your chance of winning.\n5. Click ROLL DICE to place your bet.\n6. If your number is lower than your ROLL UNDER TO WIN number, you win!\n7. If you get a notice that your transaction failed, please check that you have enough CPU & bandwidth to make the transaction! Please use EOSToolkit to make any changes to your account!\nYou can view your EOS balance next to the ROLL DICE button. The table below the slider bar shows recent bets from all players across the world.\n\nStill have questions? Reach out to us at Discord and we’ll be happy to help!"},referral:{TITLE:"Get Rewarded With Referrals!",CONTENT:"Refer a friend and receive 0.5% of their bets! Additionally, the receiver of the referral will get a 0.5% bonus towards their wins. There's no reason not to get referred and receive bigger wins for each bet placed, so join our Telegram chat and hunt for a link."},index:{TEXT_A2:"REFERRALS",TEXT_A3:"LOGIN",TEXT_A4:"HOW TO PLAY",TEXT_B0:"BET AMOUNT",TEXT_B1:"PAYOUT ON WIN",TEXT_C0:"ROLL UNDER TO WIN",TEXT_C1:"PAYOUT",TEXT_C2:"WIN CHANCE",TEXT_D0:"LOGIN",TEXT_E0:"ALL BETS",TEXT_E0_A0:"Time",TEXT_E0_A1:"Bettor",TEXT_E0_A2:"Roll Under",TEXT_E0_A3:"Bet",TEXT_E0_A4:"Roll",TEXT_E0_A5:"Payout",TEXT_E1:"YOUR BETS",TEXT_E2:"TEXT_E2",TEXT_E3:"TEXT_E2"}},zh:{how:{TITLE:"怎么玩",CONTENT:"刘德华（Andy Lau），1961年9月27日出生于中国香港，中国香港男演员、歌手、作词人、制片人。 1981年出演电影处女作《彩云曲》 [1] 。1983年主演的武侠剧《神雕侠侣》在香港获得62点的收视纪录 [2-3] 。1991年创办天幕电影公司 [4] 。1992年，凭借传记片《五亿探长雷洛传》获得第11届香港电影金像奖最佳男主角提名 [5] 。1994年担任剧情片《天与地》的制片人 [6] 。2000年凭借警匪片《暗战》获得第19届香港电影金像奖最佳男主角奖 [7] 。2004年凭借警匪片《无间道3：终极无间》获得第41届台湾金马奖最佳男主角奖 [8] 。2005年获得香港UA院线颁发的全港最高累积票房香港男演员”奖 [9] 。2006年获得釜山国际电影节亚洲最有贡献电影人奖 [10] 。2011年主演剧情片《桃姐》，并凭借该片先后获得台湾金马奖最佳男主角奖、香港电影金像奖最佳男主角奖 [11] ；同年担任第49届台湾电影金马奖评审团主席 [12] 。2017年主演警匪动作片《拆弹专家》 [13] 。"},referral:{TITLE:"转发",CONTENT:"1981年，刘德华出演电影处女作《彩云曲》，在片中扮演一个音乐班\n刘德华电视剧剧照\n刘德华电视剧剧照(9张)\n 的学员 [40]  。1982年，在剧情片《投奔怒海》中饰演美军翻译官祖名，并凭借该片获得第2届香港电影金像奖最佳新演员提名 [40]  。\n1983年，与张曼玉搭档主演剧情片《家在香港》，在片中饰演急功近利的青年人亚伦 [41]  ；同年，主演动作片《毁灭号地车》，在片中与一个越南少女演绎了一段爱情故事 [42]  。1984年，在爱情片《停不了的爱》中饰演富家公子Eric [43]  。"},index:{TEXT_A3:"登录",TEXT_A4:"怎么玩",TEXT_A2:"转发",TEXT_B0:"投注金额",TEXT_B1:"赢取奖金",TEXT_C0:"小于该数获胜",TEXT_C1:"赔率",TEXT_C2:"中奖概率",TEXT_D0:"登录",TEXT_E0:"所有投注",TEXT_E0_A0:"中文TEXT_E0_A0",TEXT_E0_A1:"中文TEXT_E0_A1",TEXT_E0_A2:"中文TEXT_E0_A2",TEXT_E0_A3:"中文TEXT_E0_A3",TEXT_E0_A4:"中文TEXT_E0_A4",TEXT_E0_A5:"中文TEXT_E0_A5",TEXT_E1:"您的投注",TEXT_E2:"巨额奖金",TEXT_E3:"顶级投注者"}},ja:{index:{TEXT_A2:"日语TEXT_A2",TEXT_A3:"日语TEXT_A3",TEXT_A4:"日语TEXT_A4",TEXT_B0:"日语TEXT_B0",TEXT_B1:"日语TEXT_B1",TEXT_C0:"日语TEXT_C0",TEXT_C1:"日语TEXT_C1",TEXT_C2:"日语TEXT_C2",TEXT_D0:"日语TEXT_D0",TEXT_E0:"日语TEXT_E0",TEXT_E0_A0:"日语TEXT_E0_A0",TEXT_E0_A1:"日语TEXT_E0_A1",TEXT_E0_A2:"日语TEXT_E0_A2",TEXT_E0_A3:"日语TEXT_E0_A3",TEXT_E0_A4:"日语TEXT_E0_A4",TEXT_E0_A5:"日语TEXT_E0_A5",TEXT_E1:"日语TEXT_E1",TEXT_E2:"日语TEXT_E2",TEXT_E3:"日语TEXT_E3"}}},w=new g["a"]({locale:"zh",messages:b});new i["default"]({i18n:w,store:T,render:function(t){return t(d)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},"71c2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",[n("img",{staticClass:"dice-logo",attrs:{src:t.diceLogo}}),n("a",{attrs:{href:"JavaScript:;"},on:{click:t.showSocial}},[t._v("COMMUNITIY ")])]),n("nav",[n("ul",[n("li",[n("div",{staticClass:"lang"},[n("a",[t._v(t._s(t.lang))]),n("div",{staticClass:"list animated-fade-in"},[n("p",{on:{click:function(e){t.changeLang("en","English")}}},[n("img",{attrs:{src:"https://oss-image.mifengkong.cn/fr_public_6666/_507bdb096d3ba3dfb3e3f9059339711f.png"}}),t._v("\n                            English")]),n("p",{on:{click:function(e){t.changeLang("zh","中文")}}},[n("img",{attrs:{src:"https://oss-image.mifengkong.cn/fr_public_6666/_e4e78933a293176441c11660cc85b709.png"}}),t._v("\n                            中文")]),n("p",{on:{click:function(e){t.changeLang("ja","Japanese")}}},[n("img",{attrs:{src:"https://oss-image.mifengkong.cn/fr_public_6666/_b9d70debcf8ab0a6e8eea5c184679203.png"}}),t._v("\n                            Japanese")])])])]),n("li",[n("a",{attrs:{href:"JavaScript:;"},on:{click:t.showReferral}},[t._v(t._s(t.$t("index['TEXT_A2']")))])]),n("li",[n("a",{attrs:{href:"JavaScript:;"},on:{click:t.showAbout}},[t._v(t._s(t.$t("index['TEXT_A4']")))])]),n("li",[t.account.name?n("div",{staticClass:"account-cell",attrs:{href:"JavaScript:;"}},[n("span",[t._v(t._s(t.account.name))]),n("font-awesome-icon",{staticClass:"icon-logout",attrs:{icon:"sign-out-alt"},on:{click:t.logout}})],1):n("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.$t("index['TEXT_A3']")))])])])])])},o=[],a=(n("7514"),n("cadf"),n("551c"),n("097d"),n("c290")),s=n("42a5"),r=n("e40d"),c=n.n(r),u=(n("26ab"),n("5335"),{methods:{login:function(){var t=this;scatter.getIdentity({accounts:[a["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&t.$store.commit("UPDATE_ACCOUNT",e)}).catch(function(e){t.$message.warning(e.message)})},logout:function(){var t=this;scatter.forgetIdentity().then(function(){t.$message.success("User logout success"),t.$store.commit("UPDATE_ACCOUNT",{})})},toggleLanguage:function(){this.$i18n.locale="en"},showAbout:function(){s["a"].$emit("SHOW_ABOUT")},showReferral:function(){s["a"].$emit("SHOW_REFERRALS")},showSocial:function(){s["a"].$emit("SHOW_SOCIAL")},changeLang:function(t,e){this.$i18n.locale=t,this.lang=e}},data:function(){return{diceLogo:c.a,lang:"中文"}},computed:{account:function(){return this.$store.state.account}}}),l=u,d=(n("cbb0"),n("2877")),f=Object(d["a"])(l,i,o,!1,null,"2462af32",null);f.options.__file="header.vue";e["default"]=f.exports},"72ce":function(t,e,n){"use strict";var i=n("7680"),o=n.n(i);o.a},7680:function(t,e,n){},bad0:function(t,e,n){},bbd4:function(t,e,n){"use strict";var i=n("531e"),o=n.n(i);o.a},be79:function(t,e,n){t.exports=n.p+"img/eos.90a08310.png"},bed5:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"orders-container"},[n("header",{staticClass:"orders-tab"},[n("ul",[t._l(t.tabs,function(e){return n("li",[t._v("\n        "+t._s(t.$t("index['TEXT_E0']"))+"\n      ")])}),n("li",[t._v(t._s(t.$t("index['TEXT_E0']")))]),n("li",[t._v(t._s(t.$t("index['TEXT_E1']")))]),n("li",{staticClass:"active"},[t._v(t._s(t.$t("index['TEXT_E2']")))]),n("li",[t._v(t._s(t.$t("index['TEXT_E3']")))])],2)]),n("table",{staticClass:"orders-table"},[n("thead",[n("tr",[n("th",[t._v(t._s(t.$t("index['TEXT_E0_A0']")))]),n("th",[t._v(t._s(t.$t("index['TEXT_E0_A1']")))]),n("th",[t._v(t._s(t.$t("index['TEXT_E0_A2']")))]),n("th",[t._v(t._s(t.$t("index['TEXT_E0_A3']")))]),n("th",[t._v(t._s(t.$t("index['TEXT_E0_A4']")))]),n("th",[t._v(t._s(t.$t("index['TEXT_E0_A5']")))])])]),n("tbody",t._l(t.orders,function(e,i){return n("tr",{key:i},[n("td",[t._v(t._s(t.dateFormat(e.bet_time)))]),n("td",[t._v(t._s(e.bettor))]),n("td",[t._v(t._s(e.roll_under))]),n("td",[t._v(t._s(e.bet_amt))]),n("td",[t._v(t._s(e.random_roll))]),n("td",{staticClass:"payout"},[t._v("\n          "+t._s("0.0000 EOS"!==e.payout&&e.payout||"")+"\n        ")])])}))])])},o=[],a=(n("0b1f"),n("055e"),{props:["orders"],methods:{dateFormat:function(t){return new Date(t+"Z").toLocaleTimeString()}}}),s=a,r=(n("de6a"),n("2877")),c=Object(r["a"])(s,i,o,!1,null,"0adc887d",null);c.options.__file="orders.vue";e["default"]=c.exports},c21b:function(t,e,n){},c290:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=new URL(location.href),o=i.searchParams.get("test");e["a"]={blockchain:"eos",host:o?"47.92.175.5":"api1.eosasia.one",port:o?7777:443,protocol:o?"http":"https",chainId:o?"cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f":"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}},cbb0:function(t,e,n){"use strict";var i=n("d377"),o=n.n(i);o.a},d377:function(t,e,n){},de6a:function(t,e,n){"use strict";var i=n("bad0"),o=n.n(i);o.a},e40d:function(t,e,n){t.exports=n.p+"img/dice.89cc9385.svg"},f252:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"game"},[n("div",{staticClass:"form"},[n("div",{staticClass:"form-group"},[n("div",[n("label",[t._v(t._s(t.$t("index['TEXT_B0']")))]),n("div",{staticClass:"input-amount-group"},[n("div",{staticClass:"input-group"},[n("img",{staticClass:"eos-logo",attrs:{src:t.eosLogo}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.eos,expression:"eos"}],domProps:{value:t.eos},on:{change:t.checkBetamount,input:function(e){e.target.composing||(t.eos=e.target.value)}}})]),n("ul",{staticClass:"amount-rate"},[n("li",{on:{click:function(e){t.setEOS(.5)}}},[t._v("1/2")]),n("li",{on:{click:function(e){t.setEOS(2)}}},[t._v("2X")]),n("li",{on:{click:function(e){t.setEOS()}}},[t._v("MAX")])])])]),n("div",[n("label",[t._v(t._s(t.$t("index['TEXT_B1']")))]),n("div",{staticClass:"bet-cell"},[n("img",{staticClass:"eos-logo",attrs:{src:t.eosLogo}}),n("span",[t._v(t._s(t.payWin))])])])]),n("div",{staticClass:"info-container"},[n("ul",[n("li",[n("label",[t._v(t._s(t.$t("index['TEXT_C0']")))]),n("span",[t._v(t._s(t.rollUnder))])]),n("li",[n("label",[t._v(t._s(t.$t("index['TEXT_C1']")))]),n("span",[t._v(t._s(Number(t.payOut).toFixed(2))+"x")])]),n("li",[n("label",[t._v(t._s(t.$t("index['TEXT_C2']")))]),n("span",[t._v(t._s(t.winChance)+"%")])])])]),n("footer",{staticClass:"game-footer"},[n("div",{staticClass:"currenteos-container"},[n("img",{staticClass:"eos-lg",attrs:{src:t.eosLogo}}),n("span",{staticClass:"eos-animation",class:{animateUp:this.showUpAnimation,animateDown:this.showDownAnimation}},[t._v(t._s(t.animationTxt))]),n("span",[t._v(t._s(Number(t.currentEOS).toFixed(4)))])]),t.account.name?n("el-button",{staticClass:"btn-action",on:{click:t.doAction}},[t._v(t._s(t.actionTxt))]):n("button",{staticClass:"btn-action",on:{click:t.login}},[t._v(t._s(t.$t("index['TEXT_D0']")))]),n("div",{staticClass:"bet-balance"},[n("img",{staticClass:"token-logo",attrs:{src:t.tokenLogo}}),n("span",[t._v("0.0000")])])],1)]),n("dice-slider",{attrs:{initial:t.rollUnder,max:96,min:2}}),n("el-dialog",{attrs:{width:"30%",visible:t.showAbout},on:{"update:visible":function(e){t.showAbout=e}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("how['TITLE']")))]),n("p",[t._v(t._s(t.$t("how['CONTENT']")))])]),n("el-dialog",{attrs:{width:"30%",visible:t.showReferrals},on:{"update:visible":function(e){t.showReferrals=e}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("referral['TITLE']")))]),n("p",[t._v(t._s(t.$t("referral['CONTENT']")))])]),n("el-dialog",{attrs:{visible:t.showSocial},on:{"update:visible":function(e){t.showSocial=e}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("Join the EOSBet Community")]),n("ul",{staticClass:"social-links"},[n("li",{on:{click:function(e){t.navigate("twitter")}}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),n("li",{on:{click:function(e){t.navigate("github")}}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),n("li",{on:{click:function(e){t.navigate("medium")}}},[n("font-awesome-icon",{attrs:{icon:["fab","medium-m"]}})],1),n("li",{on:{click:function(e){t.navigate("discord")}}},[n("font-awesome-icon",{attrs:{icon:["fab","discord"]}})],1)])])],1)},o=[],a=(n("7514"),n("87f3"),n("a481"),n("c5f6"),n("7f7f"),n("be79")),s=n.n(a),r=n("2f77"),c=n.n(r),u=n("d3b7"),l=n.n(u),d=n("42a5"),f=n("c290"),_=(n("cadf"),n("551c"),n("097d"),l()({httpEndpoint:"".concat(f["a"].protocol,"://").concat(f["a"].host,":").concat(f["a"].port),chainId:f["a"].chainId})),h=n("98e6"),T=n.n(h),E=n("055e"),m=n("4487"),p={props:["orders"],mounted:function(){var t=this;d["a"].$on("ROLLUNDER_CHANGE",function(e){return t.rollUnder=e}),d["a"].$on("SHOW_ABOUT",function(){return t.showAbout=!0}),d["a"].$on("SHOW_REFERRALS",function(){return t.showReferrals=!0}),d["a"].$on("SHOW_SOCIAL",function(){return t.showSocial=!0}),this.getEOS(),this.getPool()},data:function(){return{eosLogo:s.a,tokenLogo:c.a,eos:1,rollUnder:50,currentEOS:0,poolBalance:0,timer:0,animationTxt:0,actionTxt:"ROLL DICE",showAbout:!1,showReferrals:!1,showSocial:!1,animating:!1,showUpAnimation:!1,showDownAnimation:!1}},methods:{getEOS:function(){var t=this;if(this.account.name)return _.getAccount(this.account.name).then(function(e){var n=e.core_liquid_balance;t.currentEOS=Number(n.replace(E["a"].core_symbol,""))});this.currentEOS=0},getPool:function(){this.poolBalance=1e5},floor:function(t,e){return Number(Math.floor(t+"e"+e)+"e-"+e)},maxBetAmount:function(){return 1e4},setEOS:function(t){var e=this.currentEOS,n=t?this.eos*t:this.currentEOS;switch(!0){case n<.1:n=.1;break;case n>e:n=e;break;case n>this.maxBetAmount():n=this.maxBetAmount();break}this.eos=Number(n).toFixed(4)},getClientSeed:function(){var t=Math.floor(Math.random()*Math.floor(Number.MAX_SAFE_INTEGER));return T()("sha1").update(this.account.name+Date.now()+t).digest("hex")},doAction:function(){var t=this,e=this.maxBetAmount();if(this.eos>e)this.$notify({title:"Bet Failed",message:"Bet Amount should not be more than "+e.toFixed(4)+" "+E["a"].core_symbol_str,duration:2e3,showClose:!1,type:"error"});else{var n=.1;if(this.eos<n)this.$notify({title:"Bet Failed",message:"Bet Amount should be more than "+n.toFixed(4)+" "+E["a"].core_symbol_str,duration:2e3,showClose:!1,type:"error"});else{var i=new FormData,o=scatter.eos(f["a"],l.a,{});this.showEOSAnimation=!0,this.$message.info("Waiting for Scatter to confirm transfer...");var a="eoslotgodice";i.append("roll_under",this.rollUnder),i.append("referrer",a);var s=m.generate(8);o.transfer({from:this.account.name,to:E["a"].dicer,quantity:Number(this.eos).toFixed(4)+" "+E["a"].core_symbol_str,memo:"".concat(this.rollUnder,"-").concat(a,"-").concat(s)}).then(function(){t.getEOS(),setTimeout(function(){t.fetchResult(s)},1e3),t.animating=!0,t.$notify({title:"Bet success",message:"Waiting for bet result",duration:2e3,showClose:!1,type:"info"})}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}}},fetchResult:function(t){var e=this;if(this.orders!=[]){for(var n=0;n<this.orders.length;n++)if(this.orders[n].user_seed==t){var i=this.orders[n].bet_amt,o=this.orders[n].payout;return o==="0.0000 "+E["a"].core_symbol_str?(this.showDownAnimation=!0,this.animationTxt=i):(this.showUpAnimation=!0,this.animationTxt=o),setTimeout(function(){e.showDownAnimation=!1,e.showUpAnimation=!1},3100),this.animating=!1,void this.getEOS()}setTimeout(function(){e.fetchResult(t)},1e3)}},login:function(){var t=this;scatter.getIdentity({accounts:[f["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&t.$store.commit("UPDATE_ACCOUNT",e)}).catch(function(e){t.$message.warning(e.message)})},checkBetamount:function(){},navigate:function(t){switch(t){case"twitter":window.open("//twitter.com/dappPub");break;case"medium":window.open("//medium.com/dapppub");break;case"github":window.open("//github.com/dappub");break;case"discord":window.open("//discordapp.com/channels/482077322070196225/487187255065313292");break}}},watch:{account:function(){this.getEOS()},animating:function(){var t=this,e=this.animating;if(!e)return clearInterval(this.timer),void(this.actionTxt="ROLL DICE");this.timer=setInterval(function(){t.actionTxt=(100*Math.random()).toFixed(0)},100)}},components:{diceSlider:n("1bd8").default},computed:{winChance:function(){return this.rollUnder-1},payOut:function(){return 98/this.winChance},payWin:function(){return(this.eos*this.payOut).toFixed(4)},account:function(){return this.$store.state.account}}},v=p,g=(n("bbd4"),n("2877")),b=Object(g["a"])(v,i,o,!1,null,"4390171c",null);b.options.__file="game.vue";e["default"]=b.exports}});
//# sourceMappingURL=app.60c9ad5c.js.map
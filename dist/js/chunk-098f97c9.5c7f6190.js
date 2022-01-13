(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-098f97c9"],{"1bf8":function(e,t,c){},"878d":function(e,t,c){"use strict";c("1bf8")},"91d7":function(e,t,c){},afa7:function(e,t,c){},dfc7:function(e,t,c){"use strict";c("91d7")},fc5a:function(e,t,c){"use strict";c("afa7")},ff3b:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o={class:"flex-col items-center"},i=Object(n.createVNode)("span",{class:"ivo-txt"},"IVO - Vesting Voucher",-1),a={class:"flex-row ivomenu"},r={class:"ivo-list"};var s=c("d317");var l=c("c729"),d=c("6c02"),b=(c("d3b7"),c("25f0"),c("99af"),c("a9e3"),c("4895")),u=c.n(b),O={key:0},j={class:"flex-col items-center"},p=Object(n.createVNode)("img",{src:u.a,class:"no-data-icon"},null,-1),m={class:"flex-col items-center no-data-txt"},v={key:1,class:"ivolist"},f={class:"item__header justify-between"},g=Object(n.createVNode)("i",null,null,-1),y={class:"flex-row"},k={class:"inner-right-group flex-col"},V={class:"title"},N={class:"txt"},h={class:"right-group flex-col items-end"},D={class:"livetxt"},C={class:"livedate"},T={class:"item__body"},B={class:"justify-center price-group"},x={class:"flex-row"},S={class:"equal-division-item flex-col items-center"},w={class:"title"},L={class:"txt"},I={class:"equal-division-item flex-col items-center"},A={class:"title"},M={key:0,class:"txt"},H={key:1,class:"ivo-sold-out txt"},U={class:"equal-division-item flex-col items-center"},P={class:"title"},$={class:"txt"};var _=c("265f"),F=Object(n.defineComponent)({name:"VestingCard",components:{Loading:_.a},props:{list:{type:Array,default:function(){return[]}},showTimeType:{type:String,default:"endTime"}},emits:["tap"],setup:function(e,t){var c=t.emit,o=Object(l.a)(),i=o.t,a=o.isLoading,r=o.solvMisc,s=Object(n.toRefs)(e).list;return{vestinglist:Object(n.computed)((function(){return s.value})),isLoading:a,t:i,solvMisc:r,handleDetail:function(e){c("tap",e)}}}});F.render=function(e,t,c,o,i,a){var r=Object(n.resolveComponent)("Loading");return e.isLoading?(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:1},[e.isLoading?(Object(n.openBlock)(),Object(n.createBlock)(r,{key:0})):Object(n.createCommentVNode)("",!0)],64)):(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:0},[0==e.vestinglist.length?(Object(n.openBlock)(),Object(n.createBlock)("section",O,[Object(n.createVNode)("div",j,[p,Object(n.createVNode)("span",m,Object(n.toDisplayString)(e.t("No IVO Available")),1)])])):Object(n.createCommentVNode)("",!0),e.vestinglist.length>0?(Object(n.openBlock)(),Object(n.createBlock)("div",v,[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(e.vestinglist,(function(t){return Object(n.openBlock)(),Object(n.createBlock)("div",{class:"vesting-item",key:t.offeringId.toString(),onClick:function(c){return e.handleDetail(t)}},[Object(n.createVNode)("div",f,[g,Object(n.createVNode)("div",y,[Object(n.createVNode)("img",{src:t.voucher.underlyingToken.logoURI,class:"icon"},null,8,["src"]),Object(n.createVNode)("div",k,[Object(n.createVNode)("span",V,Object(n.toDisplayString)(t.voucher.underlyingToken.symbol),1),Object(n.createVNode)("span",{class:"subtitle ".concat(t.voucher.type.toLowerCase())},[Object(n.createVNode)("span",N,Object(n.toDisplayString)(e.t(t.voucher.type))+" Date",1)],2)])]),Object(n.createVNode)("div",h,[Object(n.createVNode)("span",D,Object(n.toDisplayString)(e.t("endTime"===e.showTimeType?"PrimaryMarketEndTime":"PrimaryMarketStartTime")+" (UTC)"),1),Object(n.createVNode)("span",C,Object(n.toDisplayString)(e.$filters.dayjsUTCFormat("endTime"===e.showTimeType?1e3*t.endTime:1e3*t.startTime,"YYYY-MM-DD HH:mm")),1)])]),Object(n.createVNode)("div",T,[Object(n.createVNode)("div",B,[Object(n.createVNode)("span",{class:"price","data-symbol":"".concat(t.currency.symbol,"/").concat(t.voucher.underlyingToken.symbol)},Object(n.toDisplayString)(e.solvMisc.formatOrderPrice(t.price,t.currency.decimals)),9,["data-symbol"])]),Object(n.createVNode)("div",x,[Object(n.createVNode)("div",S,[Object(n.createVNode)("span",w,Object(n.toDisplayString)(e.t("PrimaryMarketTotal")),1),Object(n.createVNode)("span",L,Object(n.toDisplayString)(e.$filters.beautyAmount(e.$filters.tokenDivDecimals(t.totalUnits,t.voucher.underlyingToken.decimals,2),"token",2)),1)]),Object(n.createVNode)("div",I,[Object(n.createVNode)("span",A,Object(n.toDisplayString)(Number(t.units)>0?e.t("PrimaryMarketAvailable"):" "),1),Number(t.units)>0?(Object(n.openBlock)(),Object(n.createBlock)("span",M,Object(n.toDisplayString)(e.$filters.beautyAmount(e.$filters.tokenDivDecimals(t.units,t.voucher.underlyingToken.decimals,2),"token",2)),1)):(Object(n.openBlock)(),Object(n.createBlock)("span",H,Object(n.toDisplayString)(e.t("Sold Out")),1))]),Object(n.createVNode)("div",U,[Object(n.createVNode)("span",P,Object(n.toDisplayString)(e.t("Progress")),1),Object(n.createVNode)("span",$,Object(n.toDisplayString)(t.percentage)+"%",1)])])])],8,["onClick"])})),128))])):Object(n.createCommentVNode)("",!0)],64))};var Y=F,q=Object(n.defineComponent)({name:"H5Live",components:{VestingCard:Y},setup:function(){var e=Object(l.a)().liveOrders,t=Object(d.d)().push;return{liveOrders:e,handleDetail:function(e){"Vesting"==e.marketSchema.type&&t({name:"H5IVOVestingDetail",params:{offeringId:e.offeringId}})}}}});c("878d");q.render=function(e,t,c,o,i,a){var r=Object(n.resolveComponent)("VestingCard");return Object(n.openBlock)(),Object(n.createBlock)(r,{list:e.liveOrders.list,onTap:e.handleDetail},null,8,["list","onTap"])};var E=q;var J=Object(n.defineComponent)({name:"H5Live",components:{VestingCard:Y},setup:function(){var e=Object(l.a)().upcomingOrders;Object(d.d)().push;return{upcomingOrders:e,handleDetail:function(e){"Vesting"==e.marketSchema.type&&console.log("ivo upcoming offeringId",e.offeringId)}}}});c("fc5a");J.render=function(e,t,c,o,i,a){var r=Object(n.resolveComponent)("VestingCard");return Object(n.openBlock)(),Object(n.createBlock)(r,{list:e.upcomingOrders.list,onTap:e.handleDetail},null,8,["list","onTap"])};var R=J,W=Object(n.defineComponent)({name:"H5IvoIndex",components:{H5Wrapper:s.a,Live:E,Upcoming:R},setup:function(){var e=Object(n.ref)(!0);return Object(n.onMounted)((function(){document.body.classList.add("vesting-bg")})),Object(n.onUnmounted)((function(){document.body.classList.remove("vesting-bg")})),{isActive:e}}});c("dfc7");W.render=function(e,t,c,s,l,d){var b=Object(n.resolveComponent)("Live"),u=Object(n.resolveComponent)("Upcoming"),O=Object(n.resolveComponent)("H5Wrapper");return Object(n.openBlock)(),Object(n.createBlock)(O,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)("div",o,[i,Object(n.createVNode)("div",a,[Object(n.createVNode)("span",{class:["item items-center justify-center live-con",{active:e.isActive}],onClick:t[1]||(t[1]=function(t){return e.isActive=!0})}," LIVE",2),Object(n.createVNode)("span",{class:["item items-center justify-center upcoming-con",{active:!e.isActive}],onClick:t[2]||(t[2]=function(t){return e.isActive=!1})},"UPCOMING",2)]),Object(n.createVNode)("div",r,[Object(n.withDirectives)(Object(n.createVNode)("section",null,[Object(n.createVNode)(b)],512),[[n.vShow,e.isActive]]),Object(n.withDirectives)(Object(n.createVNode)("section",null,[Object(n.createVNode)(u)],512),[[n.vShow,!e.isActive]])])])]})),_:1})};t.default=W}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-520c6897"],{"1bf8":function(e,t,c){},"559b":function(e,t,c){},"82dd":function(e,t,c){"use strict";c("559b")},"878d":function(e,t,c){"use strict";c("1bf8")},"91d7":function(e,t,c){},c0b1:function(e,t,c){},dfc7:function(e,t,c){"use strict";c("91d7")},f080:function(e,t,c){"use strict";c("c0b1")},ff3b:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),i={class:"flex-col items-center"},o=Object(n.createVNode)("span",{class:"ivo-txt"},"IVO - Vesting Voucher",-1),a={class:"flex-row ivomenu"},r={class:"ivo-list"};var s=c("d317");var l=c("c729"),d=c("6c02"),u=(c("d3b7"),c("25f0"),c("99af"),c("a9e3"),c("4895")),b=c.n(u),p=Object(n.withScopeId)("data-v-1a4a7e6d");Object(n.pushScopeId)("data-v-1a4a7e6d");var O={key:0},m={class:"flex-col items-center"},j=Object(n.createVNode)("img",{src:b.a,class:"no-data-icon"},null,-1),v={class:"flex-col items-center no-data-txt"},f={key:1,class:"ivolist"},g={class:"item__header justify-between"},y=Object(n.createVNode)("i",null,null,-1),V={class:"flex-row"},k={class:"inner-right-group flex-col"},N={class:"title"},h={class:"txt"},D={class:"right-group flex-col items-end"},T={class:"livetxt"},S={class:"livedate"},C={class:"item__body"},B={class:"justify-center price-group"},x={key:0,class:"unit-price-content big-size"},I={key:1,class:"middle-module"},w={class:"middle-module__item"},A={class:"unit-price-content"},_={class:"middle-module__item--value"},L=Object(n.createVNode)("div",{class:"middle-module__item"},null,-1),P={class:"middle-module__item"},M={class:"unit-price-content"},U=Object(n.createVNode)("p",{class:"middle-module__item--value"},Object(n.toDisplayString)("APR"),-1),H={class:"flex-row"},F={class:"equal-division-item flex-col items-center"},R={class:"title"},$={class:"txt"},q={class:"equal-division-item flex-col items-center"},Y={class:"title"},E={key:0,class:"txt"},J={key:1,class:"ivo-sold-out txt"},W={class:"equal-division-item flex-col items-center"},z={class:"title"},G={class:"txt"};Object(n.popScopeId)();var K=p((function(e,t,c,i,o,a){var r=Object(n.resolveComponent)("APR"),s=Object(n.resolveComponent)("Loading");return e.isLoading?(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:1},[e.isLoading?(Object(n.openBlock)(),Object(n.createBlock)(s,{key:0})):Object(n.createCommentVNode)("",!0)],64)):(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:0},[0==e.vestinglist.length?(Object(n.openBlock)(),Object(n.createBlock)("section",O,[Object(n.createVNode)("div",m,[j,Object(n.createVNode)("span",v,Object(n.toDisplayString)(e.t("No IVO Available")),1)])])):Object(n.createCommentVNode)("",!0),e.vestinglist.length>0?(Object(n.openBlock)(),Object(n.createBlock)("div",f,[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(e.vestinglist,(function(t){return Object(n.openBlock)(),Object(n.createBlock)("div",{class:"vesting-item",key:t.offeringId.toString(),onClick:function(c){return e.handleDetail(t)}},[Object(n.createVNode)("div",g,[y,Object(n.createVNode)("div",V,[Object(n.createVNode)("img",{src:t.voucher.underlyingToken.logoURI,class:"icon"},null,8,["src"]),Object(n.createVNode)("div",k,[Object(n.createVNode)("span",N,Object(n.toDisplayString)(t.voucher.underlyingToken.symbol),1),Object(n.createVNode)("span",{class:"subtitle ".concat(t.voucher.type.toLowerCase())},[Object(n.createVNode)("span",h,Object(n.toDisplayString)(e.t(e.getTagName(t.voucher.type))),1)],2)])]),Object(n.createVNode)("div",D,[Object(n.createVNode)("span",T,Object(n.toDisplayString)(e.t("endTime"===e.showTimeType?"PrimaryMarketEndTime":"PrimaryMarketStartTime")+" (UTC)"),1),Object(n.createVNode)("span",S,Object(n.toDisplayString)(e.$filters.dayjsUTCFormat("endTime"===e.showTimeType?1e3*t.endTime:1e3*t.startTime,"YYYY-MM-DD HH:mm")),1)])]),Object(n.createVNode)("div",C,[Object(n.createVNode)("div",B,[e.$utils.equal(t.price,"0")?(Object(n.openBlock)(),Object(n.createBlock)("span",x,Object(n.toDisplayString)(e.t("Airdrop")),1)):(Object(n.openBlock)(),Object(n.createBlock)("div",I,[Object(n.createVNode)("div",w,[Object(n.createVNode)("p",A,Object(n.toDisplayString)(e.solvMisc.formatOrderPrice(t.price,t.currency.decimals)),1),Object(n.createVNode)("p",_,Object(n.toDisplayString)("".concat(t.currency.symbol,"/").concat(t.voucher.underlyingToken.symbol)),1)]),L,Object(n.createVNode)("div",P,[Object(n.createVNode)("p",M,[Object(n.createVNode)(r,{item:t},null,8,["item"])]),U])]))]),Object(n.createVNode)("div",H,[Object(n.createVNode)("div",F,[Object(n.createVNode)("span",R,Object(n.toDisplayString)(e.t("PrimaryMarketTotal")),1),Object(n.createVNode)("span",$,Object(n.toDisplayString)(e.$filters.beautyAmount(e.$filters.tokenDivDecimals(t.totalUnits,t.voucher.underlyingToken.decimals,2),"token",2)),1)]),Object(n.createVNode)("div",q,[Object(n.createVNode)("span",Y,Object(n.toDisplayString)(Number(t.units)>0?e.t("PrimaryMarketAvailable"):" "),1),Number(t.units)>0?(Object(n.openBlock)(),Object(n.createBlock)("span",E,Object(n.toDisplayString)(e.$filters.beautyAmount(e.$filters.tokenDivDecimals(t.units,t.voucher.underlyingToken.decimals,2),"token",2)),1)):(Object(n.openBlock)(),Object(n.createBlock)("span",J,Object(n.toDisplayString)(e.t("Sold Out")),1))]),Object(n.createVNode)("div",W,[Object(n.createVNode)("span",z,Object(n.toDisplayString)(e.t("Progress")),1),Object(n.createVNode)("span",G,Object(n.toDisplayString)(t.percentage)+"%",1)])])])],8,["onClick"])})),128))])):Object(n.createCommentVNode)("",!0)],64))})),Q=c("265f");c("159b");var X=c("9ab4"),Z=c("9707"),ee=c("cd95"),te=c("1d85"),ce=c("8e83"),ne=Object(n.defineComponent)({props:{item:{type:Object,default:function(){}}},setup:function(e){var t=Object(n.toRefs)(e).item.value,c=t.voucher,i=t.price,o=t.currency,a=t.offeringId,r=t.totalUnits,s=t.units,l=Object(ce.a)(c.underlyingToken.symbol),d=Object(ce.a)(o.symbol),u=Object(n.ref)("0");return Z.a.comp(i,0)&&function(){Object(X.b)(this,void 0,void 0,(function(){var e;return Object(X.e)(this,(function(t){switch(t.label){case 0:return[4,Object(te.f)().mintParameters(a)];case 1:return e=t.sent(),b=[],(n=e).terms.forEach((function(e){b.push(n.latestStartTime+e)})),u.value="manual"==l.tokenValueInfo.source?Object(ee.a)({voucher:{maturities:b,underlyingDecimals:c.underlyingToken.decimals,underlyingSymbol:c.underlyingToken.symbol,releaseType:n.claimType,percentages:n.percentages,totalUnits:Number(r)},order:{unitPrice:i,currencyDecimals:o.decimals,currencySymbol:o.symbol,units:s,tokenValue:l.tokenValueInfo.price,unitPriceCurrencyValue:d.tokenValueInfo.price},isStart:!0}).toString():"",[2]}var n,b}))}))}(),{apr:u}}});ne.render=function(e,t,c,i,o,a){return Object(n.toDisplayString)("".concat(e.apr?e.apr+"%":"N/A"))};var ie=ne,oe=Object(n.defineComponent)({name:"VestingCard",components:{Loading:Q.a,APR:ie},props:{list:{type:Array,default:function(){return[]}},showTimeType:{type:String,default:"endTime"}},emits:["tap"],setup:function(e,t){var c=t.emit,i=Object(l.a)(),o=i.t,a=i.isLoading,r=i.solvMisc,s=Object(n.toRefs)(e).list;return{vestinglist:Object(n.computed)((function(){return s.value})),isLoading:a,t:o,solvMisc:r,handleDetail:function(e){c("tap",e)},getTagName:function(e){return"Flexible"==e?"Flexible Date":"Vesting"==e?"Fixed Date":e}}}});c("82dd");oe.render=K,oe.__scopeId="data-v-1a4a7e6d";var ae=oe,re=Object(n.defineComponent)({name:"H5Live",components:{VestingCard:ae},setup:function(){var e=Object(l.a)().liveOrders,t=Object(d.d)().push;return{liveOrders:e,handleDetail:function(e){"Vesting"==e.marketSchema.type&&t({name:"H5IVOVestingDetail",params:{offeringId:e.offeringId}})}}}});c("878d");re.render=function(e,t,c,i,o,a){var r=Object(n.resolveComponent)("VestingCard");return Object(n.openBlock)(),Object(n.createBlock)(r,{list:e.liveOrders.list,onTap:e.handleDetail},null,8,["list","onTap"])};var se=re;var le=Object(n.defineComponent)({name:"H5Live",components:{VestingCard:ae},setup:function(){var e=Object(l.a)().upcomingOrders,t=Object(d.d)().push;return{upcomingOrders:e,handleDetail:function(e){t({name:"H5IVOVestingDetail",params:{offeringId:e.offeringId}})}}}});c("f080");le.render=function(e,t,c,i,o,a){var r=Object(n.resolveComponent)("VestingCard");return Object(n.openBlock)(),Object(n.createBlock)(r,{list:e.upcomingOrders.list,onTap:e.handleDetail},null,8,["list","onTap"])};var de=le,ue=Object(n.defineComponent)({name:"H5IvoIndex",components:{H5Wrapper:s.a,Live:se,Upcoming:de},setup:function(){var e=Object(n.ref)(!0);return Object(n.onMounted)((function(){document.body.classList.add("vesting-bg")})),Object(n.onUnmounted)((function(){document.body.classList.remove("vesting-bg")})),{isActive:e}}});c("dfc7");ue.render=function(e,t,c,s,l,d){var u=Object(n.resolveComponent)("Live"),b=Object(n.resolveComponent)("Upcoming"),p=Object(n.resolveComponent)("H5Wrapper");return Object(n.openBlock)(),Object(n.createBlock)(p,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)("div",i,[o,Object(n.createVNode)("div",a,[Object(n.createVNode)("span",{class:["item items-center justify-center live-con",{active:e.isActive}],onClick:t[1]||(t[1]=function(t){return e.isActive=!0})}," LIVE",2),Object(n.createVNode)("span",{class:["item items-center justify-center upcoming-con",{active:!e.isActive}],onClick:t[2]||(t[2]=function(t){return e.isActive=!1})},"UPCOMING",2)]),Object(n.createVNode)("div",r,[Object(n.withDirectives)(Object(n.createVNode)("section",null,[Object(n.createVNode)(u)],512),[[n.vShow,e.isActive]]),Object(n.withDirectives)(Object(n.createVNode)("section",null,[Object(n.createVNode)(b)],512),[[n.vShow,!e.isActive]])])])]})),_:1})};t.default=ue}}]);
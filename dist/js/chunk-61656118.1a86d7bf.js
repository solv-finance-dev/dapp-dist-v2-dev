(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-61656118"],{"09b1":function(e,t,c){e.exports=c.p+"img/allocation-banner.5b0eb7c3.png"},"1ead":function(e,t,c){"use strict";c("e5f8")},"3e5a":function(e,t,c){e.exports=c.p+"img/2.c6705ec5.svg"},"4a5e":function(e,t,c){"use strict";c("955d")},"4f31":function(e,t,c){"use strict";c("6e77")},"6e77":function(e,t,c){},7527:function(e,t,c){},"7ca8":function(e,t,c){"use strict";c("ce8e")},"7d20":function(e,t,c){"use strict";c("9406")},9406:function(e,t,c){},"955d":function(e,t,c){},"9b40":function(e,t,c){},b39d:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=Object(n.withScopeId)("data-v-55e67936");Object(n.pushScopeId)("data-v-55e67936");var o={class:"voucher-tab"},r=Object(n.createVNode)("div",{class:"selected-pane"},null,-1),i=Object(n.createVNode)("div",{class:"voucher-tab__pane",disabled:""},null,-1),l={class:"filter-module"},s={class:"filter-voucher__module"},u={class:"price-type-module"},d={key:0};Object(n.popScopeId)();var b=a((function(e,t,c,b,m,p){var v=Object(n.resolveComponent)("SelectVoucher"),O=Object(n.resolveComponent)("VestingOrder"),j=Object(n.resolveComponent)("PageWrapper");return Object(n.openBlock)(),Object(n.createBlock)(j,{overlay:!1,showBanner:!0,banner:e.AllocationMarketBannerImg,bannerTitle:"MARKETPLACE"},{banner:a((function(){return[Object(n.createVNode)("div",o,[Object(n.createVNode)("div",{class:["voucher-tab__pane",{"voucher-tab__pane--active":"MarketplaceVesting"===e.$route.meta.pageTabPane}]},[Object(n.createVNode)("span",null,Object(n.toDisplayString)(e.t("Vesting Vouchers")),1),r],2),i])]})),default:a((function(){return[Object(n.createVNode)("div",l,[Object(n.createVNode)("div",s,[Object(n.createVNode)(v,{tokenList:e.commonData.tokenList,onSelected:e.handleSymbolSelect,visible:e.commonData.visibleSelectVoucher},null,8,["tokenList","onSelected","visible"])]),Object(n.createVNode)("div",u,[(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)([{label:"Fixed price",value:"0"},{label:"Variable price",value:"1"}],(function(t){return Object(n.createVNode)("div",{class:"price-type__item",key:t.label,active:e.commonData.priceType==t.value,onClick:function(c){return e.handleSelectedPriceType(t.value)}},Object(n.toDisplayString)(e.t(t.label)),9,["active","onClick"])})),64))])]),"MarketplaceVesting"===e.$route.meta.pageTabPane?(Object(n.openBlock)(),Object(n.createBlock)("div",d,[Object(n.createVNode)(O,{tokenInfo:e.selectTokenInfo.tokenInfo,priceType:e.commonData.priceType},null,8,["tokenInfo","priceType"])])):Object(n.createCommentVNode)("",!0)]})),_:1},8,["banner"])})),m=(c("159b"),c("09b1")),p=c.n(m),v=c("233a"),O=c("f41c"),j=c("1c5c"),h=c("9af8"),f=c("47e2"),y=c("6c02"),g=c("4895"),V=c.n(g),k=Object(n.withScopeId)("data-v-7b680cca");Object(n.pushScopeId)("data-v-7b680cca");var D={class:"vesting-order"},N={key:1,class:"voucher-lists-no-data"},S=Object(n.createVNode)("img",{src:V.a,class:"no-data-icon"},null,-1),B={class:"no-data-text"},I={key:0,class:"load-pending"},w=Object(n.createVNode)("svg",{t:"1631514183271",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1916"},[Object(n.createVNode)("path",{d:"M512.000427 1024c-69.12 0-136.192-13.482667-199.296-40.192a510.293333 510.293333 0 0 1-162.688-109.824A510.293333 510.293333 0 0 1 0.000427 512a35.968 35.968 0 1 1 72.021333 0 439.338667 439.338667 0 0 0 128.896 311.210667A437.717333 437.717333 0 0 0 512.000427 951.978667a439.338667 439.338667 0 0 0 311.210666-128.896A437.717333 437.717333 0 0 0 951.979093 512c0-59.392-11.562667-116.992-34.56-171.306667a440.448 440.448 0 0 0-94.293333-139.904A437.717333 437.717333 0 0 0 512.000427 71.978667 35.968 35.968 0 1 1 512.000427 0c69.12 0 136.192 13.482667 199.296 40.192a510.293333 510.293333 0 0 1 162.688 109.824 511.104 511.104 0 0 1 109.696 162.688c26.709333 63.104 40.234667 130.176 40.234666 199.296s-13.525333 136.192-40.234666 199.296a508.373333 508.373333 0 0 1-109.653334 162.688A511.104 511.104 0 0 1 512.000427 1024z","p-id":"1917",fill:"rgba(255, 255, 255, 0.7)"})],-1);Object(n.popScopeId)();var T=k((function(e,t,c,a,o,r){var i=Object(n.resolveComponent)("VestingOrderCard"),l=Object(n.resolveComponent)("el-col"),s=Object(n.resolveComponent)("el-row"),u=Object(n.resolveComponent)("VestingOrderCardSkeleton"),d=Object(n.resolveDirective)("infinite-scroll");return Object(n.withDirectives)((Object(n.openBlock)(),Object(n.createBlock)("div",D,[e.loadListFinished?(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:0},[Object(n.createVNode)(s,{gutter:24,class:"order-list"},{default:k((function(){return[e.orderData.list&&e.orderData.list.length>0?(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,{key:0},Object(n.renderList)(e.orderData.list,(function(e,t){return Object(n.openBlock)(),Object(n.createBlock)(l,{key:e.orderId,sm:8,md:8,lg:6,class:"order-list__item"},{default:k((function(){return[Object(n.createVNode)(i,{row:e,key:e.voucher.voucherId+e.orderId+t+""},null,8,["row"])]})),_:2},1024)})),128)):(Object(n.openBlock)(),Object(n.createBlock)("div",N,[S,Object(n.createVNode)("p",B,Object(n.toDisplayString)(e.t("No Data")),1)]))]})),_:1}),e.isLoadMore?(Object(n.openBlock)(),Object(n.createBlock)("div",I,[w,Object(n.createTextVNode)(" "+Object(n.toDisplayString)(e.$t("Loading"))+"... ",1)])):Object(n.createCommentVNode)("",!0)],64)):(Object(n.openBlock)(),Object(n.createBlock)(s,{key:1,gutter:24,class:"order-list"},{default:k((function(){return[(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(8,(function(e){return Object(n.createVNode)(l,{key:e+"skeleton",sm:8,md:8,lg:6,class:"order-list__item"},{default:k((function(){return[Object(n.createVNode)(u)]})),_:1})})),64))]})),_:1}))],512)),[[d,e.loadMore]])})),_=(c("d3b7"),c("99af"),c("9ab4")),C=(c("a9e3"),Object(n.withScopeId)("data-v-c8f4fca6"));Object(n.pushScopeId)("data-v-c8f4fca6");var A={class:"order-card__header"},x={class:"header-left"},P={class:"header-right"},L={class:"arr-show"},$=Object(n.createVNode)("p",{class:"arr-show-title"},Object(n.toDisplayString)("ARR"),-1),F={class:"arr-show-text"},U={class:"order-card__img"},M={class:"voucher-img"},R={class:"order-card__content"},W={class:"content-item"},E={class:"content-item__inner"},z={class:"item-label"},J={class:"item-value eras-font font-family2"},q={class:"content-item__desc"},K={class:"desc-value"},Y={class:"content-item"},G={class:"content-item__inner"},H={class:"item-label"},Q={class:"item-value"},X={class:"content-item"},Z={class:"content-item__inner"},ee={class:"item-label"},te={class:"item-value"},ce={class:"content-item"},ne={class:"action-module"},ae={key:0,class:"start-time"},oe={class:"start-label"},re={class:"start-value"};Object(n.popScopeId)();var ie=C((function(e,t,c,a,o,r){var i,l=Object(n.resolveComponent)("TextTip"),s=Object(n.resolveComponent)("UnitPrice"),u=Object(n.resolveComponent)("DaButton"),d=Object(n.resolveComponent)("BuyVestingVoucher"),b=Object(n.resolveComponent)("CancelVestingOrder");return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,[Object(n.createVNode)("div",{class:"order-card",onClick:t[3]||(t[3]=function(){return e.pushListDetails&&e.pushListDetails.apply(e,arguments)})},[Object(n.createVNode)("div",A,[Object(n.createVNode)("div",x,[Object(n.createVNode)("img",{src:e.$filters.getTokenLocalLogo(null===(i=e.row.voucher.voucherTokenSchema)||void 0===i?void 0:i.logoURI,e.row.voucher.underlyingSymbol),class:"token-icon"},null,8,["src"]),Object(n.createVNode)("span",null,"#"+Object(n.toDisplayString)(e.row.voucher.voucherId),1)]),Object(n.createVNode)("div",P,[Object(n.createVNode)(l,{showIcon:!1},{content:C((function(){return[Object(n.createVNode)("div",L,[$,Object(n.createVNode)("p",F,Object(n.toDisplayString)(e.t("Estimated Annualized Rate Of Return")),1)])]})),text:C((function(){return["Vesting"===e.row.voucher.voucherType&&e.arrData.arr+""!=""?(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:0},[Object(n.createTextVNode)(Object(n.toDisplayString)("n/a"!=e.arrData.arr?"ARR: "+e.arrData.arr+"%":""),1)],64)):Object(n.createCommentVNode)("",!0)]})),_:1})])]),Object(n.createVNode)("div",U,[Object(n.createVNode)("div",M,[Object(n.createVNode)("img",{src:"Flexible"==e.row.voucher.voucherType?e.$filters.base64Decode(e.commonData.tokenURI).image:e.$filters.viewVoucherImg(e.commonData.tokenURI),class:"voucher-img__entry"},null,8,["src"])])]),Object(n.createVNode)("div",R,[Object(n.createVNode)("div",W,[Object(n.createVNode)("div",E,[Object(n.createVNode)("div",z,[Object(n.createVNode)(s,{row:e.row,icon:[e.commonData.variablePriceIcon,e.commonData.variablePriceIcon2],showCustomText:!0,key:"unit-price1",showTip:1==e.row.price.priceType},{default:C((function(){return[Object(n.createVNode)("span",null,Object(n.toDisplayString)(1==e.row.price.priceType?e.t("Current Price"):e.t("Unit Price")),1)]})),_:1},8,["row","icon","showTip"])]),Object(n.createVNode)("div",J,[Object(n.createVNode)(s,{row:e.row,showTip:!1,key:"unit-price2"},null,8,["row"])])]),Object(n.createVNode)("div",q,[Object(n.createVNode)("div",K,[Object(n.createVNode)(s,{row:e.row,showTip:!1,showPrice:!1,showValue:!0,key:"unit-price3"},null,8,["row"])])])]),Object(n.createVNode)("div",Y,[Object(n.createVNode)("div",G,[Object(n.createVNode)("div",H,Object(n.toDisplayString)(e.$t("Available")),1),Object(n.createVNode)("div",Q,Object(n.toDisplayString)(e.$filters.hideMantissa(e.$filters.beautyAmount(e.$filters.viewTokenDivDecimals(e.row.voucher.units,e.row.voucher.underlyingDecimals),"token")))+" "+Object(n.toDisplayString)(e.row.voucher.underlyingSymbol),1)])]),Object(n.createVNode)("div",X,[Object(n.createVNode)("div",Z,[Object(n.createVNode)("div",ee,Object(n.toDisplayString)(e.$t("Remaining")),1),Object(n.createVNode)("div",te,Object(n.toDisplayString)(e.$filters.percentage(1-(Number(e.row.voucher.totalUnits)-Number(e.row.voucher.units))/Number(e.row.voucher.totalUnits),2)),1)])]),Object(n.createVNode)("div",ce,[Object(n.createVNode)("div",ne,[e.$filters.compCurrentTime(e.$filters.getTime(1e3*e.row.order.startTime))?(Object(n.openBlock)(),Object(n.createBlock)("div",ae,[Object(n.createVNode)("p",oe,Object(n.toDisplayString)(e.$t("Start Time(UTC)")),1),Object(n.createVNode)("p",re,Object(n.toDisplayString)(e.$filters.dateTimeUTCFormat(e.$filters.getTime(1e3*e.row.order.startTime))),1)])):(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:1},[e.isSelfVoucher?(Object(n.openBlock)(),Object(n.createBlock)(u,{key:1,plain:"",class:"card-btn",onClick:t[2]||(t[2]=function(t){return e.commonData.visibleCancel=!0})},{default:C((function(){return[Object(n.createTextVNode)(Object(n.toDisplayString)(e.$t("Cancel")),1)]})),_:1})):(Object(n.openBlock)(),Object(n.createBlock)(u,{key:0,plain:"",class:"card-btn",onClick:t[1]||(t[1]=function(t){return e.handleVisibleBuy(e.row)})},{default:C((function(){return[Object(n.createTextVNode)(Object(n.toDisplayString)(e.$t("Buy")),1)]})),_:1}))],64))])])])]),e.commonData.visibleBuy?(Object(n.openBlock)(),Object(n.createBlock)(d,{key:0,visible:e.commonData.visibleBuy,instance:e.commonData.orderItem,onClose:t[4]||(t[4]=function(t){return e.commonData.visibleBuy=!1})},null,8,["visible","instance"])):Object(n.createCommentVNode)("",!0),e.commonData.visibleCancel?(Object(n.openBlock)(),Object(n.createBlock)(b,{key:1,instance:e.row,visible:e.commonData.visibleCancel,onClose:t[5]||(t[5]=function(t){return e.commonData.visibleCancel=!1})},null,8,["instance","visible"])):Object(n.createCommentVNode)("",!0)],64)})),le=(c("d81d"),c("25f0"),c("e651")),se=c.n(le),ue=c("3e5a"),de=c.n(ue),be=c("e205"),me=c("e672"),pe=Object(n.withScopeId)("data-v-73e7499c");Object(n.pushScopeId)("data-v-73e7499c");var ve={class:"da-container"},Oe={class:"ic-form__item item-module__top"},je={class:"item-module__top--label"},he={class:"item-module__top--body"},fe=Object(n.createVNode)("span",{class:"amount-text"},"1",-1),ye={class:"amount-unit"},ge=Object(n.createVNode)("p",{class:"amount-line"},"=",-1),Ve={class:"amount-text"},ke={class:"amount-unit"},De={class:"pur-tabs content ic-form__item"},Ne={class:"pur-tab__body"},Se={class:"body-item"},Be={class:"amount-module__suffix"},Ie={class:"unit"},we=Object(n.createVNode)("template",null,[Object(n.createTextVNode)("0.00")],-1),Te=Object(n.createVNode)("div",{class:"or-txt"},"OR",-1),_e={class:"body-item"},Ce={class:"amount-module__suffix"},Ae={class:"unit"},xe={key:0,class:"allowlist-tip"};Object(n.popScopeId)();var Pe=pe((function(e,t,c,a,o,r){var i=Object(n.resolveComponent)("DaInput"),l=Object(n.resolveComponent)("DaItem"),s=Object(n.resolveComponent)("DaDialog");return Object(n.openBlock)(),Object(n.createBlock)(s,{visible:e.visible,title:e.$t("Buy"),"show-cancel":!e.commonData.isApprove,"confirm-text":e.disabledBuyByWalletBalance&&e.commonData.isApprove?e.$t("Insufficient Wallet Balance"):e.$t("Confirm"),"disabled-confirm":e.disabledConfirm||e.disabledBuyByWalletBalance,"loading-confirm":e.commonData.loadingSubmit,"cancel-text":e.$t("Approve"),"disabled-cancel":e.commonData.submitLoading,"loading-cancel":e.commonData.submitLoading,onClose:e.handleClose,onConfirm:e.handleConfirm,onCancel:e.bindApprove,width:e.$filters.pxToRem(540)},{footer:pe((function(){return[!e.commonData.isBuyerAllowed&&e.commonData.loadIsBuyerAllowed?(Object(n.openBlock)(),Object(n.createBlock)("p",xe,Object(n.toDisplayString)(e.$t("Your address is not in the whitelist")),1)):Object(n.createCommentVNode)("",!0)]})),default:pe((function(){return[Object(n.createVNode)("div",ve,[Object(n.createVNode)("div",Oe,[Object(n.createVNode)("div",je,[Object(n.createVNode)("span",null,Object(n.toDisplayString)(e.t("Unit Price")),1)]),Object(n.createVNode)("div",he,[Object(n.createVNode)("p",null,[fe,Object(n.createVNode)("span",ye,Object(n.toDisplayString)(e.instance.underlyingSymbol),1)]),ge,Object(n.createVNode)("p",null,[Object(n.createVNode)("span",Ve,Object(n.toDisplayString)(e.getPrice),1),Object(n.createVNode)("span",ke,Object(n.toDisplayString)(e.instance.currencySymbol),1)])])]),Object(n.createVNode)("div",De,[Object(n.createVNode)("div",Ne,[Object(n.createVNode)("div",Se,[Object(n.createVNode)(l,{label:e.t("Purchase By Amount")},{value:pe((function(){return[Object(n.createVNode)(i,{mode:"decimal",decimals:"unit"===e.commonData.selectedActive?e.instance.underlyingDecimals:e.instance.currencyDecimals,modelValue:e.purForm.amount,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.purForm.amount=t}),class:"input-entry",maxlength:"32",onInput:e.handleInputAmount,onFocus:e.handleInputAmountFocus,onBlur:e.handleInputAmountBlur,border:!0},{suffix:pe((function(){return[Object(n.createVNode)("div",Be,[Object(n.createVNode)("p",{class:"paste",onClick:t[1]||(t[1]=function(){return e.handleMaxAvailableAmount&&e.handleMaxAvailableAmount.apply(e,arguments)})},Object(n.toDisplayString)(e.$t("Max")),1),Object(n.createVNode)("span",Ie,Object(n.toDisplayString)(e.instance&&e.instance.underlyingSymbol),1)])]})),_:1},8,["decimals","modelValue","onInput","onFocus","onBlur"])]})),descLabel:pe((function(){var t,c,a;return[Object(n.createTextVNode)(Object(n.toDisplayString)(e.t("Purchase limit"))+": ",1),e.commonData.voucherInfo?(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:0},[Object(n.createTextVNode)(Object(n.toDisplayString)(e.isAllowBuy?"unlimit"!=e.$filters.parseLimitAvailable(e.instance.minUnits,e.instance.maxUnits,(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.units)+"",e.commonData.purchasedUnits,e.instance.underlyingDecimals)?e.$filters.parseLimitAvailable(e.instance.minUnits,e.instance.maxUnits,(null===(c=e.commonData.voucherInfo)||void 0===c?void 0:c.units)+"",e.commonData.purchasedUnits,e.instance.underlyingDecimals):e.$filters.beautyAmount(e.maxLimitPurchasingAmount,"token")+" "+(null===(a=e.commonData.voucherInfo)||void 0===a?void 0:a.underlyingSymbol):"0.00"),1)],64)):Object(n.createCommentVNode)("",!0),we]})),_:1},8,["label"])]),Te,Object(n.createVNode)("div",_e,[Object(n.createVNode)(l,{label:e.t("Purchase By Value")},{value:pe((function(){return[Object(n.createVNode)(i,{mode:"decimal",decimals:e.instance.currencyDecimals,modelValue:e.purForm.value,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.purForm.value=t}),class:"input-entry",maxlength:"32",border:!0,onInput:e.handleInputValue,onFocus:e.handleInputValueFocus,onBlur:e.handleInputValueBlur},{suffix:pe((function(){return[Object(n.createVNode)("div",Ce,[Object(n.createVNode)("p",{class:"paste",onClick:t[3]||(t[3]=function(){return e.handleMaxAvailableValue&&e.handleMaxAvailableValue.apply(e,arguments)})},Object(n.toDisplayString)(e.$t("Max")),1),Object(n.createVNode)("p",Ae,Object(n.toDisplayString)(e.instance&&e.instance.currencySymbol),1)])]})),_:1},8,["decimals","modelValue","onInput","onFocus","onBlur"])]})),descLabel:pe((function(){return[Object(n.createTextVNode)(Object(n.toDisplayString)(e.t("Wallet Balance"))+": "+Object(n.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.$filters.viewTokenDivDecimals(e.walletData.walletBalance,e.instance.currencyDecimals))))+" "+Object(n.toDisplayString)(e.instance?e.instance.currencySymbol:""),1)]})),_:1},8,["label"])])])])])]})),_:1},8,["visible","title","show-cancel","confirm-text","disabled-confirm","loading-confirm","cancel-text","disabled-cancel","loading-cancel","onClose","onConfirm","onCancel","width"])})),Le=c("7a47"),$e=c("4be1"),Fe=c("5aec"),Ue=c("27a7"),Me=Object(n.defineComponent)({props:{visible:{type:Boolean,required:!0},instance:{type:Object,default:function(){}},type:{type:String,default:""}},emits:["close","txEnd","onFinished"],components:{DaDialog:Le.a,DaInput:$e.a,DaItem:Fe.a},setup:function(e,t){var c=t.emit,a=Object(n.toRefs)(e).instance,o=Object(Ue.a)(a,c,"dialog");return{t:o.t,commonData:o.commonData,walletData:o.walletData,purForm:o.purForm,disabledConfirm:o.disabledConfirm,getPrice:o.getPrice,isAllowBuy:o.isAllowBuy,maxLimitPurchasingAmount:o.maxLimitPurchasingAmount,tokenValueInfo:o.tokenValueInfo,disabledBuyByWalletBalance:o.disabledBuyByWalletBalance,handleClose:o.handleClose,handleConfirm:o.handleConfirm,bindApprove:o.bindApprove,handleInputAmount:o.handleInputAmount,handleInputAmountFocus:o.handleInputAmountFocus,handleInputAmountBlur:o.handleInputAmountBlur,handleMaxAvailableAmount:o.handleMaxAvailableAmount,handleInputValue:o.handleInputValue,handleInputValueFocus:o.handleInputValueFocus,handleInputValueBlur:o.handleInputValueBlur,handleMaxAvailableValue:o.handleMaxAvailableValue}}});c("c889"),c("7ca8");Me.render=Pe,Me.__scopeId="data-v-73e7499c";var Re=Me,We=c("6789"),Ee=c("cd95"),ze=(c("b680"),c("901e")),Je=c.n(ze),qe=c("9707");var Ke=c("1d85"),Ye=c("3015"),Ge=Object(n.defineComponent)({components:{UnitPrice:Ye.a,DaButton:be.a,BuyVestingVoucher:Re,CancelVestingOrder:We.a,TextTip:me.a},props:{row:{type:Object,default:function(){}}},setup:function(e){var t=Object(n.toRefs)(e).row,c=Object(f.b)().t,a=Object(y.d)().push,o=Object(j.a)().getters,r=Object(n.reactive)({tokenURI:"",visibleBuy:!1,visibleCancel:!1,variablePriceIcon:se.a,variablePriceIcon2:de.a}),i=Object(n.reactive)({voucher:{maturities:[],releaseType:-1,underlyingDecimals:0,underlyingSymbol:"",percentages:[],totalUnits:0},order:{unitPrice:0,currencyDecimals:0,currencySymbol:"",units:""},isStart:!1}),l=Object(Ee.b)(i).arrData,s=Object(n.computed)((function(){return e={unitPrice:t.value.price.unitPrice,unitTokenValue:"1",unitTokenDecimals:t.value.currency.currencyDecimals,underlyingValue:"1"},c=e.unitPrice,n=e.unitTokenValue,a=e.unitTokenDecimals,o=e.underlyingValue,r=new Je.a(qe.a.tokenDivDecimals(c,a)).multipliedBy(new Je.a(n)),i=new Je.a("1").minus(r.dividedBy(new Je.a(o))).toFixed(2,1),Number(i);var e,c,n,a,o,r,i})),u=Object(n.computed)((function(){return t.value.order.seller.toLowerCase()===o.getAccount.toLowerCase()}));function d(){return h.a.solvUtils.getTokenSchemaByVoucherAddress(t.value.voucher.voucherAddress)}return function(){Object(_.b)(this,void 0,void 0,(function(){var e;return Object(_.e)(this,(function(c){switch(c.label){case 0:return[4,Object(Ke.c)().getTokenURI(d(),t.value.voucher.voucherId)];case 1:return e=c.sent(),r.tokenURI=e,[2]}}))}))}(),"Vesting"===d().type&&function(){Object(_.b)(this,void 0,void 0,(function(){var e,c,n;return Object(_.e)(this,(function(a){switch(a.label){case 0:return[4,Object(Ke.c)().getSnapshot(d(),t.value.voucher.voucherId)];case 1:return e=a.sent(),c=e.maturities.map((function(e){return e.toString()})),n=e.percentages.map((function(e){return e.toString()})),i.voucher.maturities=c,i.voucher.percentages=n,i.voucher.underlyingDecimals=t.value.voucher.underlyingDecimals,i.voucher.releaseType=e.claimType,i.voucher.totalUnits=e.vestingAmount,i.voucher.underlyingSymbol=t.value.voucher.underlyingSymbol,i.order.currencySymbol=t.value.currency.currencySymbol,i.order.currencyDecimals=t.value.currency.currencyDecimals,i.order.unitPrice=0==t.value.price.priceType?t.value.price.unitPrice:t.value.price.lowest,i.order.units=t.value.voucher.units,i.isStart=!0,[2]}}))}))}(),{off:s,commonData:r,isSelfVoucher:u,useArrParams:i,arrData:l,t:c,pushListDetails:function(){a({name:"VestingOrderDetail",params:{voucherId:t.value.voucher.voucherId,voucherSymbol:t.value.voucher.voucherSymbol,orderId:t.value.orderId}})},handleVisibleBuy:function(e){r.orderItem={voucherId:e.voucher.voucherId,voucherSymbol:e.voucher.voucherSymbol,voucherAddress:e.voucher.voucherAddress,underlyingSymbol:e.voucher.underlyingSymbol,underlyingDecimals:e.voucher.underlyingDecimals,underlyingAddress:e.voucher.underlyingAddress,currencyAddress:e.currency.currencyAddress,currencySymbol:e.currency.currencySymbol,currencyDecimals:e.currency.currencyDecimals,minUnits:e.order.minLimit,maxUnits:e.order.maxLimit,highest:e.price.highest,lowest:e.price.lowest,useAllowList:e.order.useAllowList,interval:e.price.interval,duration:e.price.duration,startTime:e.order.startTime,orderId:e.orderId,priceType:e.price.priceType,currentPrice:e.price.unitPrice,seller:e.order.seller},r.visibleBuy=!0}}}});c("1ead"),c("cccf");Ge.render=ie,Ge.__scopeId="data-v-c8f4fca6";var He=Ge,Qe=Object(n.withScopeId)("data-v-41031f0c");Object(n.pushScopeId)("data-v-41031f0c");var Xe={class:"order-card"},Ze={class:"order-card__header"},et={class:"order-card__img"},tt={class:"voucher-img"},ct={class:"order-card__content"},nt={class:"content-item"},at={class:"content-item"},ot={class:"content-item__inner"},rt={class:"content-item"},it={class:"content-item__inner"},lt={class:"content-item"},st={class:"action-module"};Object(n.popScopeId)();var ut=Qe((function(e,t,c,a,o,r){var i=Object(n.resolveComponent)("DaSkeleton");return Object(n.openBlock)(),Object(n.createBlock)("div",Xe,[Object(n.createVNode)("div",Ze,[Object(n.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(28)},null,8,["height"])]),Object(n.createVNode)("div",et,[Object(n.createVNode)("div",tt,[Object(n.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(196)},null,8,["height"])])]),Object(n.createVNode)("div",ct,[Object(n.createVNode)("div",nt,[Object(n.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(28)},null,8,["height"])]),Object(n.createVNode)("div",at,[Object(n.createVNode)("div",ot,[Object(n.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(28)},null,8,["height"])])]),Object(n.createVNode)("div",rt,[Object(n.createVNode)("div",it,[Object(n.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(28)},null,8,["height"])])]),Object(n.createVNode)("div",lt,[Object(n.createVNode)("div",st,[Object(n.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(28)},null,8,["height"])])])])])})),dt=c("9998"),bt=Object(n.defineComponent)({components:{DaSkeleton:dt.a},setup:function(){}});c("4a5e");bt.render=ut,bt.__scopeId="data-v-41031f0c";var mt=bt,pt=c("fe86"),vt=c("9ca1"),Ot=Object(n.defineComponent)({components:{VestingOrderCard:He,VestingOrderCardSkeleton:mt},props:{tokenInfo:{type:Object,default:function(){}},priceType:{type:String,default:""}},setup:function(e){var t,c=Object(j.a)().getters,a=Object(n.toRefs)(e),o=a.tokenInfo,r=a.priceType,i=Object(f.b)().t,l=Object(n.reactive)({list:[]}),s=Object(n.reactive)({nextPageNo:0,isLastPage:!1,pageSize:12}),u=Object(n.ref)(!0),d=Object(n.ref)(!1);function b(){t=h.a.solvUtils.getAllocationMarket(),p()}function m(e){return void 0===e&&(e=!0),Object(_.b)(this,void 0,Promise,(function(){var c,n,a,i;return Object(_.e)(this,(function(b){switch(b.label){case 0:return c=[],o.value.address?c.push(o.value.address):t.markets.forEach((function(e){"string"!=typeof e&&c.push(e.underlyingToken.address)})),u.value=!0,n={underlyings:c,market:t.address,nextSaleId:s.nextPageNo,size:s.pageSize},r.value+""!=""&&(n.priceType=r.value),[4,Object(vt.a)().getMarketOrderList(n)];case 1:return a=b.sent(),d.value=!0,i=Object(pt.a)(a.data,t.address,"Secondary"),l.list=e?i:l.list.concat(i),s=a.page,u.value=!1,[2]}}))}))}function p(){d.value=!1,u.value=!1,s.nextPageNo=0,l.list=[],m()}return Object(n.watch)((function(){return c.getChangeFlag}),(function(e){e&&b()})),Object(n.watch)((function(){return[o.value,r.value]}),(function(){p()}),{deep:!0}),Object(n.onMounted)((function(){c.getChangeFlag&&b()})),{orderData:l,loadListFinished:d,isLoadMore:u,t:i,loadMore:function(){s.isLastPage||u.value||m(!1)}}}});c("4f31");Ot.render=T,Ot.__scopeId="data-v-7b680cca";var jt=Ot,ht=Object(n.defineComponent)({name:"MarketplaceVesting",components:{PageWrapper:O.a,VestingOrder:jt,SelectVoucher:v.a},setup:function(){var e=Object(f.b)().t,t=Object(j.a)().getters,a=Object(y.c)().meta,o=Object(n.reactive)({priceType:"",visibleSelectVoucher:!1,tokenList:[]}),r=p.a,i=Object(n.reactive)({tokenInfo:{address:"",symbol:"All",decimals:0,logoURI:""}});function l(){o.visibleSelectVoucher=!0,"MarketplaceVesting"===a.pageTabPane&&function(){try{h.a.solvUtils.getAllocationMarket().markets.forEach((function(e){var t=e;o.tokenList.push({symbol:t.underlyingToken.symbol,address:t.underlyingToken.address,decimals:t.underlyingToken.decimals,logoURI:t.logoURI+""})})),o.tokenList.unshift({address:"",symbol:"All Vouchers",decimals:0,logoURI:c("7df6")}),i.tokenInfo=o.tokenList[0]}catch(e){}}()}return Object(n.watch)((function(){return t.getChangeFlag}),(function(e){e&&l()})),Object(n.onMounted)((function(){t.getChangeFlag&&l()})),{AllocationMarketBannerImg:r,selectTokenInfo:i,commonData:o,t:e,handleSelectedPriceType:function(e){o.priceType!==e?o.priceType=e:o.priceType=""},handleSymbolSelect:function(e){i.tokenInfo=e}}}});c("7d20");ht.render=b,ht.__scopeId="data-v-55e67936";t.default=ht},c889:function(e,t,c){"use strict";c("7527")},cccf:function(e,t,c){"use strict";c("9b40")},ce8e:function(e,t,c){},e5f8:function(e,t,c){},e651:function(e,t,c){e.exports=c.p+"img/1.1cd88e81.svg"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0ad86122"],{"192e":function(e,t,o){"use strict";o("bc29")},2817:function(e,t,o){},"3c70":function(e,t,o){"use strict";o("b932")},"3e58":function(e,t,o){"use strict";o("8a5b")},"620c":function(e,t,o){"use strict";o.r(t);o("b0c0"),o("99af");var c=o("7a23"),a=Object(c.withScopeId)("data-v-4a4f9c94");Object(c.pushScopeId)("data-v-4a4f9c94");var n={class:"order-details"},i={class:"order-details__header"},r={class:"header-left"},l={class:"header-right"},s={class:"order-details__body"},d={class:"infos-module m-72"},u={class:"voucher-img da-flex justify-center items-center da-padding-32 da-border-bottom"},b={class:"da-paddingy-24 da-paddingx-32"},m={class:"info-label"},v={class:"info-value da-flex items-center",style:{"align-items":"flex-end"}},O={class:"storage"},p={class:"unit"},j={class:"flex justify-between da-margint-12"},h={class:"info-label"},f={key:1,class:"info-value"},y={class:"info-label"},g={key:1,class:"info-value font-variant-numeric"},D={class:"buy-module"},V={class:"voucher-info m-72"},k={class:"flex-col order-information"},N={class:"flex-col equal-division-item"},S={class:"vesting-group"},I={class:"flex-row"},B={class:"flex-col vesting-right-group"},T={class:"detail-title"},C={class:"order-information-content order-information-content-right"},x={class:"info-item-module"},w={class:"info-item-module__body"},_={class:"info-item-module__body--item"},A={class:"spot-price"},F={class:"info-item-module__body--item"},R={class:"body-item-label"},$=Object(c.createVNode)("div",{class:"item-point item-point-up"},null,-1),P={class:"body-item-value"},M={class:"body-item-label"},U=Object(c.createVNode)("div",{class:"item-point item-point-normal"},null,-1),L={class:"body-item-value"},W={class:"equivalent-value"},Y={class:"body-item-label"},E=Object(c.createVNode)("div",{class:"item-point item-point-down"},null,-1),H={class:"body-item-value"},J=Object(c.createVNode)("div",{class:"learn-more"},null,-1);Object(c.popScopeId)();var q=a((function(e,t,o,q,z,X){var G=Object(c.resolveComponent)("DaSkeleton"),K=Object(c.resolveComponent)("OutputHref"),Q=Object(c.resolveComponent)("DaItem"),Z=Object(c.resolveComponent)("BuyVoucher"),ee=Object(c.resolveComponent)("BuyVoucherSkeleton"),te=Object(c.resolveComponent)("PageWrapper"),oe=Object(c.resolveComponent)("CancelConvertibleOrder");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)(te,{showBreadcrumbs:!0},{default:a((function(){var t,o,q,z,X,te,oe,ce,ae,ne,ie,re;return[Object(c.createVNode)("div",n,[Object(c.createVNode)("div",i,[Object(c.createVNode)(G,{visible:!(null!==(t=e.commonData.voucherTokenSchema)&&void 0!==t&&t.name),height:e.$filters.pxToRem(36),width:e.$filters.pxToRem(320),parentWidth:"auto"},{default:a((function(){var t,o,a;return[Object(c.createVNode)("div",r,[Object(c.createVNode)("img",{src:e.$filters.getTokenLocalLogo(null===(t=e.commonData.voucherTokenSchema)||void 0===t?void 0:t.logoURI,null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol),class:"token-logo"},null,8,["src"]),Object(c.createVNode)("span",null," Order NO."+Object(c.toDisplayString)(e.commonData.orderId)+" - "+Object(c.toDisplayString)(null===(a=e.commonData.voucherTokenSchema)||void 0===a?void 0:a.name),1)])]})),_:1},8,["visible","height","width"]),Object(c.createVNode)("div",l,[Object(c.createVNode)(K,{voucherId:e.commonData.voucherId,voucherAddress:null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.address,underlyingSymbol:null===(q=e.commonData.voucherTokenSchema)||void 0===q?void 0:q.underlyingToken.symbol,underlyingAddress:null===(z=e.commonData.voucherTokenSchema)||void 0===z?void 0:z.underlyingToken.address,visibleOpensea:!1},null,8,["voucherId","voucherAddress","underlyingSymbol","underlyingAddress"])])]),Object(c.createVNode)("div",s,[Object(c.createVNode)("div",null,[Object(c.createVNode)("div",d,[Object(c.createVNode)("div",u,[e.commonData.voucherImage?(Object(c.openBlock)(),Object(c.createBlock)("img",{key:0,src:e.commonData.voucherImage,alt:""},null,8,["src"])):Object(c.createCommentVNode)("",!0)]),Object(c.createVNode)("div",b,[Object(c.createVNode)(Q,{class:"da-marginb-24 infos-item"},{label:a((function(){return[Object(c.createVNode)("span",m,Object(c.toDisplayString)(e.t("Face Value")),1)]})),value:a((function(){var t,o,a,n;return[Object(c.createVNode)("p",v,[e.commonData.orderInfo&&e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("span",O,Object(c.toDisplayString)(e.$filters.viewTokenDivDecimals((null===(t=e.commonData.orderInfo)||void 0===t?void 0:t.order.units)||0,null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.underlyingDecimals)),1),Object(c.createVNode)("span",p,Object(c.toDisplayString)(null===(a=e.commonData.voucherInfo)||void 0===a||null===(n=a.fundCurrencyInfo)||void 0===n?void 0:n.currencySymbol),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)(G,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(24)},null,8,["width","height"]))])]})),_:1}),Object(c.createVNode)("div",j,[Object(c.createVNode)(Q,{class:"da-margin-0 infos-item"},{label:a((function(){return[Object(c.createVNode)("span",h,Object(c.toDisplayString)(e.t("Bond Range"))+" ("+Object(c.toDisplayString)(e.usdUnit)+")",1)]})),value:a((function(){var t,o;return[e.commonData.orderInfo&&e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)("span",f,Object(c.toDisplayString)("".concat(e.solvMisc.formatOrderPrice((null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.lowestPrice)+"",8,2),"  ~ ").concat(e.solvMisc.formatOrderPrice((null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.highestPrice)+"",8,2))),1)):(Object(c.openBlock)(),Object(c.createBlock)(G,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(18)},null,8,["width","height"]))]})),_:1}),Object(c.createVNode)(Q,{class:"da-margin-0 infos-item"},{label:a((function(){return[Object(c.createVNode)("span",y,Object(c.toDisplayString)(e.t("Maturity Date (UTC)")),1)]})),value:a((function(){var t;return[e.commonData.orderInfo&&e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)("span",g,Object(c.toDisplayString)(e.$filters.dayjsUTCFormat(1e3*((null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.maturity)||0),"YYYY-MM-DD")),1)):(Object(c.openBlock)(),Object(c.createBlock)(G,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(18)},null,8,["width","height"]))]})),_:1})])])])]),Object(c.createVNode)("div",D,[e.commonData.orderItem&&e.loadVoucherDetailFinish?(Object(c.openBlock)(),Object(c.createBlock)(Z,{key:0,instance:e.commonData.orderItem,maturity:(null===(X=e.commonData.voucherInfo)||void 0===X?void 0:X.maturity)||0,onUnlist:e.bindCancel},null,8,["instance","maturity","onUnlist"])):(Object(c.openBlock)(),Object(c.createBlock)(ee,{key:1}))]),Object(c.createVNode)("div",V,[Object(c.createVNode)("div",k,[Object(c.createVNode)("div",N,[Object(c.createVNode)("div",null,[Object(c.createVNode)("div",S,[Object(c.createVNode)("div",I,[Object(c.createVNode)("div",B,[Object(c.createVNode)("span",T,Object(c.toDisplayString)(e.t("Settlement Condition")),1)])])]),Object(c.createVNode)("div",C,[Object(c.createVNode)("div",x,[Object(c.createVNode)("div",w,[Object(c.createVNode)("div",_,[Object(c.createVNode)("div",A,[Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Spot Price"))+": "+Object(c.toDisplayString)(7.88)+" "+Object(c.toDisplayString)(e.usdUnit),1)])]),Object(c.createVNode)("div",F,[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Settlement Price")),1),Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Claimable")),1)]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"up"===e.priceRangeInfo.status?"up":""},[e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",R,[$,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Above"))+" "+Object(c.toDisplayString)(e.solvMisc.formatOrderPrice((null===(te=e.commonData.voucherInfo)||void 0===te?void 0:te.highestPrice)||0,8,2))+" "+Object(c.toDisplayString)(e.usdUnit),1)]),Object(c.createVNode)("p",P,[Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.priceRangeInfo.highestClaimable),1),Object(c.createTextVNode)(" "+Object(c.toDisplayString)(null===(oe=e.commonData.voucherInfo)||void 0===oe?void 0:oe.underlyingSymbol),1)])],64)):(Object(c.openBlock)(),Object(c.createBlock)(G,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"normal"===e.priceRangeInfo.status?"normal":""},[e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",M,[U,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("In Range")),1)]),Object(c.createVNode)("div",L,[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.priceRangeInfo.normalClaimable)))+" "+Object(c.toDisplayString)(null===(ce=e.commonData.voucherInfo)||void 0===ce||null===(ae=ce.fundCurrencyInfo)||void 0===ae?void 0:ae.currencySymbol),1),Object(c.createVNode)("p",W,Object(c.toDisplayString)(e.t("or equivalent value in")+" ".concat(null===(ne=e.commonData.voucherInfo)||void 0===ne?void 0:ne.underlyingSymbol)),1)])],64)):(Object(c.openBlock)(),Object(c.createBlock)(G,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"down"===e.priceRangeInfo.status?"down":""},[e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",Y,[E,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Below"))+" "+Object(c.toDisplayString)(e.solvMisc.formatOrderPrice((null===(ie=e.commonData.voucherInfo)||void 0===ie?void 0:ie.lowestPrice)||0,8,2))+" "+Object(c.toDisplayString)(e.usdUnit),1)]),Object(c.createVNode)("p",H,Object(c.toDisplayString)(e.priceRangeInfo.lowestClaimable)+" "+Object(c.toDisplayString)(null===(re=e.commonData.voucherInfo)||void 0===re?void 0:re.underlyingSymbol),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)(G,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),J])])])])])])])])])]})),_:1}),e.commonData.visibleCancel?(Object(c.openBlock)(),Object(c.createBlock)(oe,{key:0,instance:e.commonData.orderCancelInfo,visible:e.commonData.visibleCancel,onClose:t[1]||(t[1]=function(t){return e.commonData.visibleCancel=!1}),onOnFinished:e.handleCancelFinished},null,8,["instance","visible","onOnFinished"])):Object(c.createCommentVNode)("",!0)],64)})),z=o("19b2"),X=o("9998"),G=o("6789"),K=o("a6f3"),Q=o("f41c"),Z=o("5214"),ee=(o("159b"),o("a9e3"),o("d3b7"),o("25f0"),o("b680"),o("9ab4")),te=o("2739"),oe=o("9707"),ce=o("1d85"),ae=o("1c5c"),ne=o("8e83"),ie=o("9af8"),re=o("901e"),le=o.n(re),se=o("47e2"),de=o("6c02"),ue=o("5cc2");function be(e){var t=Object(se.b)().t,o=Object(ae.a)().getters,a=Object(de.d)().back,n=Object(c.computed)((function(){return o.getChainId})),i=Object(c.reactive)({orderId:e.orderId+"",voucherId:e.voucherId+"",voucherSymbol:e.voucherSymbol+"",voucherImage:"",reloadImage:!1,visibleCancel:!1}),r=Object(c.ref)(!1),l=Object(c.ref)(!0),s=Object(c.ref)(!1),d=Object(c.ref)(""),u=Object(c.reactive)({list:[]}),b=Object(c.reactive)({currencySymbol:""}),m=Object(ne.c)(b).tokenValueInfo,v=te.a;function O(){var e,t;return Object(ee.b)(this,void 0,void 0,(function(){var o,c,a;return Object(ee.e)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),o=ie.a.solvUtils.getAllocationMarket(),[4,Object(ce.b)().getOrderInfo(i.orderId)];case 1:return c=n.sent(),a={order:c.order,currency:c.order.currencyAddress.toLowerCase()!=(null===(e=i.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.address.toLowerCase())?ie.a.solvUtils.getCurrenciesByAddress(o.address,"Secondary",c.order.currencyAddress):null===(t=i.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken,voucher:ie.a.solvUtils.getTokenSchemaByVoucherAddress(c.order.voucherAddress),price:c.price},i.orderInfo=a,i.orderInfo.order.totalUnits=a.order.total,c.order.isValid&&function(e){i.orderItem={voucherId:e.order.tokenId,voucherSymbol:e.voucher.symbol,voucherAddress:e.voucher.address,underlyingSymbol:e.voucher.underlyingToken.symbol,underlyingDecimals:e.voucher.underlyingToken.decimals,underlyingAddress:e.voucher.underlyingToken.address,currencyAddress:e.currency.address,currencySymbol:e.currency.symbol,currencyDecimals:e.currency.decimals,minUnits:e.order.min.toString(),maxUnits:e.order.max.toString(),highest:e.price.highest.toString(),lowest:e.price.lowest.toString(),useAllowList:e.order.useAllowList,interval:e.price.interval,duration:e.price.duration,startTime:e.order.startTime,orderId:e.order.saleId,priceType:e.order.priceType,currentPrice:0==e.order.priceType?e.price.lowest:0,seller:e.order.seller,units:e.order.units.toString()},b.currencySymbol=i.orderItem.underlyingSymbol}(a),[3,3];case 2:return n.sent(),[3,3];case 3:return[2]}}))}))}function p(t){void 0===t&&(t=!0),s.value=!t,i.voucherTokenSchema=ie.a.solvUtils.getTokenSchemaByVoucherSymbol(e.voucherSymbol+""),function(e){var t;void 0===e&&(e=!1),Object(ee.b)(this,void 0,void 0,(function(){var o,c;return Object(ee.e)(this,(function(a){switch(a.label){case 0:return i.voucherTokenSchema?(u.list=[],[4,Object(ce.d)().getVoucherInfo(i.voucherTokenSchema,i.voucherId)]):[2];case 1:o=a.sent(),c=JSON.parse(JSON.stringify(o)),i.voucherInfo=c,s.value=!0,i.voucherInfo=Object(ue.a)([c])[0];try{i.voucherImage=oe.a.base64Decode((null===(t=i.voucherInfo)||void 0===t?void 0:t.URI)+"").image}catch(e){console.log(e)}return 2==i.voucherInfo.releaseType&&i.voucherInfo.maturities.forEach((function(e,t){var o,c=new le.a((null===(o=i.voucherInfo)||void 0===o?void 0:o.percentages[t])+"").dividedBy(new le.a(100)).toNumber(),a=oe.a.dateUTCFormat(1e3*Number(e.toString()));u.list.push({radio:c,date:a})})),i.reloadImage=e,[2]}}))}))}(),O()}var j=Object(c.computed)((function(){var e,t;return i.voucherInfo?new le.a(oe.a.tokenDivDecimals((null===(e=i.voucherInfo)||void 0===e?void 0:e.units)||0,null===(t=i.voucherInfo)||void 0===t?void 0:t.underlyingDecimals)).multipliedBy(new le.a(m.price)):"0"})),h=Object(c.computed)((function(){var e={status:"",highestClaimable:"0",lowestClaimable:"0",normalClaimable:"0"};if(i.voucherInfo){var t=oe.a.tokenDivDecimals(i.voucherInfo.lowestPrice,8),o=oe.a.tokenDivDecimals(i.voucherInfo.highestPrice,8);oe.a.comp("0.123456",o)?e.status="up":oe.a.comp(t,"0.123456")?e.status="down":e.status="normal",e.highestClaimable=oe.a.parseThousandsValue(oe.a.hideMantissa(new le.a("0").dividedBy(new le.a(o)).toFixed(2,1))),e.lowestClaimable=oe.a.parseThousandsValue(oe.a.hideMantissa(new le.a("0").dividedBy(new le.a(t)).toFixed(2,1))),e.normalClaimable=v.formatTokenValue(oe.a.tokenMulDecimals("0",i.voucherInfo.underlyingDecimals),i.voucherInfo.underlyingDecimals,6)}return e}));return Object(c.watch)((function(){return o.getChangeFlag}),(function(e){e&&p()}),{immediate:!0}),Object(c.watch)((function(){return o.getLastTxReceipt}),(function(e){e&&p(!1)}),{deep:!0}),{t:t,commonData:i,visibleShare:r,visibleOpensea:l,loadVoucherDetailFinish:s,originalVoucherImgUrl:d,stagedData:u,chainId:n,unitValue:j,solvMisc:v,priceRangeInfo:h,bindCancel:function(){i.orderCancelInfo={orderId:i.orderId,voucherId:i.voucherId,voucher:{units:i.orderItem.units,totalUnits:i.orderInfo.order.totalUnits,underlyingDecimals:i.orderItem.underlyingDecimals,underlyingSymbol:i.orderItem.underlyingSymbol}},i.visibleCancel=!0},handleCancelFinished:function(){a()}}}var me=Object(c.withScopeId)("data-v-3951a7db");Object(c.pushScopeId)("data-v-3951a7db");var ve={class:"order-buy-voucher"},Oe={class:"order-buy-voucher__header"},pe={class:"order-buy-header__content"},je={class:"header-center"},he={class:"amount-item"},fe=Object(c.createVNode)("span",{class:"da-weight-400"},Object(c.toDisplayString)("APR"),-1),ye={class:"da-weight-600 header-item-value"},ge={class:"amount-item"},De={class:"da-weight-600 header-item-value"},Ve={class:"order-buy-voucher__body"},ke={class:"card-form-item"},Ne={class:"suffix-item"},Se={class:"info-module"},Ie={key:0,class:"purchase-limit info-item"},Be={key:1,class:"purchase-limit info-item"},Te={key:0,class:"desc-text"},Ce={key:1,class:"desc-text"},xe={class:"info-module"},we={class:"desc-text"},_e={class:"card-form-item"},Ae={class:"face-value-content info-item info-item-flex"},Fe={class:"info-item-label"},Re={class:"info-item-value"},$e={class:"action-btn-module"},Pe={key:0,class:"order-no-buy"},Me={class:"start-label"},Ue={class:"start-value"},Le={key:0,class:"order-no-buy"},We={class:"start-value"};Object(c.popScopeId)();var Ye=me((function(e,t,o,a,n,i){var r,l=Object(c.resolveComponent)("TextTip"),s=Object(c.resolveComponent)("DaItem"),d=Object(c.resolveComponent)("DaInput"),u=Object(c.resolveComponent)("DaSkeleton"),b=Object(c.resolveComponent)("DaButton"),m=Object(c.resolveComponent)("DaCard"),v=Object(c.resolveComponent)("Loading"),O=Object(c.resolveComponent)("TxFinish");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)("div",ve,[Object(c.createVNode)("div",Oe,[Object(c.createVNode)("div",{class:["order-buy-header__icon",{"order-buy-fixed__icon":0==e.instance.priceType}]},[Object(c.createVNode)("span",null,Object(c.toDisplayString)(0==e.instance.priceType?e.t("Fixed price"):e.t("Variable price")),1)],2),Object(c.createVNode)("div",pe,[Object(c.createVNode)("div",je,[Object(c.createVNode)("div",he,[Object(c.createVNode)(s,null,{label:me((function(){return[Object(c.createVNode)(l,null,{content:me((function(){return[Object(c.createVNode)("div",{style:{width:e.$filters.pxToRem(300),lineHeight:1.4}},[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Expected annual percentage rate within the bond range.")),1),Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Settlement price is outside of bond range, please refer to the settlement conditions to see the final tokens received.")),1)],4)]})),default:me((function(){return[fe]})),_:1})]})),value:me((function(){return[Object(c.createVNode)("span",ye,Object(c.toDisplayString)(e.getAPR)+" %",1)]})),_:1})]),Object(c.createVNode)("div",ge,[Object(c.createVNode)(s,null,{label:me((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Total Price")),1)]})),value:me((function(){return[Object(c.createVNode)("span",De,Object(c.toDisplayString)(e.getTotalPrice)+" "+Object(c.toDisplayString)(e.instance.currencySymbol),1)]})),_:1})])])])]),Object(c.createVNode)("div",Ve,[Object(c.createVNode)(m,{class:"order-buy-voucher__card"},{default:me((function(){return[Object(c.createVNode)("div",ke,[Object(c.createVNode)(s,{label:e.t("Purchase By Value")},{value:me((function(){return[Object(c.createVNode)(d,{mode:"decimal",decimals:e.instance.currencyDecimals,modelValue:e.purForm.value,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.purForm.value=t}),class:"input-entry",maxlength:"32",border:!0,placeholder:"0.0",disabled:!1,onInput:e.handleInputValue},{suffix:me((function(){return[Object(c.createVNode)("span",{onClick:t[1]||(t[1]=function(){return e.handleMaxAvailableAmount&&e.handleMaxAvailableAmount.apply(e,arguments)}),class:"suffix-item"},Object(c.toDisplayString)(e.t("MAX")),1),Object(c.createVNode)("span",Ne,Object(c.toDisplayString)(e.instance.currencySymbol),1)]})),_:1},8,["decimals","modelValue","onInput"])]})),descLabel:me((function(){return[Object(c.createVNode)("div",Se,[e.commonData.loadOrderInfoFinished?(Object(c.openBlock)(),Object(c.createBlock)("label",Be,[e.buyLimitInfo.limit?(Object(c.openBlock)(),Object(c.createBlock)("p",Te,Object(c.toDisplayString)(e.t("Purchase limit"))+": "+Object(c.toDisplayString)(e.minLimitValue)+" - "+Object(c.toDisplayString)(e.maxLimitValue)+" "+Object(c.toDisplayString)(e.instance.currencySymbol),1)):(Object(c.openBlock)(),Object(c.createBlock)("p",Ce,Object(c.toDisplayString)(e.t("Max Available"))+": "+Object(c.toDisplayString)(e.maxLimitValue)+" "+Object(c.toDisplayString)(e.instance.currencySymbol),1))])):(Object(c.openBlock)(),Object(c.createBlock)("span",Ie,[Object(c.createVNode)(u,{visible:!0,width:"120px",height:e.$filters.pxToRem(14)},null,8,["height"])]))]),Object(c.createVNode)("div",xe,[Object(c.createVNode)("span",we,[Object(c.createVNode)(u,{visible:!e.commonData.loadOrderInfoFinished,width:"120px",height:e.$filters.pxToRem(14)},{default:me((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Wallet Balance"))+": "+Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.$filters.viewTokenDivDecimals(e.walletData.walletBalance,e.instance.currencyDecimals))))+" "+Object(c.toDisplayString)(e.instance?e.instance.currencySymbol:""),1)]})),_:1},8,["visible","height"])])])]})),_:1},8,["label"])]),Object(c.createVNode)("div",_e,[Object(c.createVNode)("div",Ae,[Object(c.createVNode)("div",Fe,[Object(c.createVNode)(l,null,{content:me((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Estimated claimable value at maturity.")),1)]})),default:me((function(){return[Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.t("Face Value")),1)]})),_:1})]),Object(c.createVNode)("div",Re,Object(c.toDisplayString)(e.purForm.amount?e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.$filters.viewTokenDivDecimals(e.$filters.tokenMulDecimals(e.purForm.amount,e.instance.underlyingDecimals),e.instance.underlyingDecimals,6))):"0")+" "+Object(c.toDisplayString)(e.instance.currencySymbol),1)]),Object(c.createVNode)("div",$e,[e.$filters.compCurrentTime(e.$filters.getTime(1e3*e.instance.startTime))?(Object(c.openBlock)(),Object(c.createBlock)("div",Pe,[Object(c.createVNode)("span",Me,Object(c.toDisplayString)(e.$t("Start Time(UTC)"))+": ",1),Object(c.createVNode)("span",Ue,Object(c.toDisplayString)(e.$filters.dateTimeUTCFormat(e.$filters.getTime(1e3*e.instance.startTime))),1)])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.commonData.isBuyerAllowed||1!=e.instance.useAllowList?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.isSelfOrder?(Object(c.openBlock)(),Object(c.createBlock)(b,{key:0,size:"medium",full:!0,onClick:e.bindCancel,class:"action-btn"},{default:me((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Cancel")),1)]})),_:1},8,["onClick"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.commonData.isApprove?Object(c.createCommentVNode)("",!0):(Object(c.openBlock)(),Object(c.createBlock)(b,{key:0,size:"medium",full:!0,onClick:e.bindApprove,disabled:e.commonData.submitLoading,loading:e.commonData.submitLoading,class:"action-btn m-16"},{default:me((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Approve")),1)]})),_:1},8,["onClick","disabled","loading"])),Object(c.createVNode)(b,{size:"medium",full:!0,onClick:e.handleConfirm,disabled:e.disabledConfirm||e.disabledBuyByWalletBalance,loading:e.commonData.loadingSubmit,class:"action-btn"},{default:me((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.disabledBuyByWalletBalance&&e.commonData.isApprove?e.t("Insufficient Wallet Balance"):e.t("Buy")),1)]})),_:1},8,["onClick","disabled","loading"])],64))],64)):(Object(c.openBlock)(),Object(c.createBlock)("div",Le,[Object(c.createVNode)("span",We,Object(c.toDisplayString)(e.t("Your address is not in the whitelist")),1)]))],64))])])]})),_:1})])]),e.commonData.visibleLoading?(Object(c.openBlock)(),Object(c.createBlock)(v,{key:0,visible:e.commonData.visibleLoading,onClose:t[3]||(t[3]=function(t){return e.commonData.visibleLoading=!1}),onTxDone:e.handleTxDone,needDone:!0},null,8,["visible","onTxDone"])):Object(c.createCommentVNode)("",!0),e.commonData.visibleTxFinish?(Object(c.openBlock)(),Object(c.createBlock)(O,{key:1,visible:e.commonData.visibleTxFinish,hash:e.commonData.txHash,title:"Purchase Completed",onClose:t[4]||(t[4]=function(t){return e.commonData.visibleTxFinish=!1}),pathName:"Flexible"===(null===(r=e.commonData.tokenSchema)||void 0===r?void 0:r.type)?"MyStandardFlexibleVoucher":""},null,8,["visible","hash","pathName"])):Object(c.createCommentVNode)("",!0)],64)})),Ee=o("e205"),He=o("6363"),Je=o("4be1"),qe=o("5aec"),ze=o("6dff"),Xe=o("52f9"),Ge=o("9ddb"),Ke=o("958d"),Qe=Object(c.defineComponent)({components:{DaCard:He.a,DaItem:qe.a,DaInput:Je.a,DaButton:Ee.a,Loading:Ge.a,TxFinish:Xe.a,DaSkeleton:X.a,TextTip:ze.a},props:{instance:{type:Object,default:function(){}},maturity:{type:Number,default:0}},emits:["close","txEnd","onFinished","unlist"],setup:function(e,t){var o=t.emit,a=Object(c.toRefs)(e),n=a.instance,i=a.maturity,r=Object(Ke.a)(n,i.value,o);return{t:r.t,commonData:r.commonData,walletData:r.walletData,purForm:r.purForm,disabledConfirm:r.disabledConfirm,getPrice:r.getPrice,isAllowBuy:r.isAllowBuy,tokenValueInfo:r.tokenValueInfo,disabledBuyByWalletBalance:r.disabledBuyByWalletBalance,isSelfOrder:r.isSelfOrder,buyLimitInfo:r.buyLimitInfo,getAPR:r.getAPR,getTotalPrice:r.getTotalPrice,maxLimitValue:r.maxLimitValue,minLimitValue:r.minLimitValue,parseUnitsValue:r.parseUnitsValue,handleClose:r.handleClose,handleConfirm:r.handleConfirm,bindApprove:r.bindApprove,handleInputAmount:r.handleInputAmount,handleMaxAvailableAmount:r.handleMaxAvailableAmount,handleInputValue:r.handleInputValue,handleTxDone:r.handleTxDone,handleMaxAvailableValue:r.handleMaxAvailableValue,bindCancel:function(){o("unlist")}}}});o("8e5c"),o("d0e3");Qe.render=Ye,Qe.__scopeId="data-v-3951a7db";var Ze=Qe,et=Object(c.withScopeId)("data-v-28c09a15");Object(c.pushScopeId)("data-v-28c09a15");var tt={class:"order-buy-voucher"},ot={class:"order-buy-voucher__header"},ct=Object(c.createVNode)("div",{class:"order-buy-header__icon"},null,-1),at={class:"order-buy-header__content"},nt={class:"header-center"},it={class:"order-buy-voucher__body"},rt={class:"card-form-item"},lt={class:"card-form-item"},st={class:"card-form-item"},dt={class:"card-form-item"},ut={class:"action-btn-module"};Object(c.popScopeId)();var bt=et((function(e,t,o,a,n,i){var r=Object(c.resolveComponent)("DaSkeleton"),l=Object(c.resolveComponent)("DaCard");return Object(c.openBlock)(),Object(c.createBlock)("div",tt,[Object(c.createVNode)("div",ot,[ct,Object(c.createVNode)("div",at,[Object(c.createVNode)("div",nt,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]),Object(c.createVNode)("div",it,[Object(c.createVNode)(l,{class:"order-buy-voucher__card"},{default:et((function(){return[Object(c.createVNode)("div",rt,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",lt,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",st,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",dt,[Object(c.createVNode)("div",ut,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]})),_:1})])])})),mt=Object(c.defineComponent)({components:{DaCard:He.a,DaSkeleton:X.a},setup:function(){}});o("3e58");mt.render=bt,mt.__scopeId="data-v-28c09a15";var vt=mt,Ot=Object(c.defineComponent)({components:{PageWrapper:Q.a,DaSkeleton:X.a,BuyVoucher:Ze,OutputHref:K.a,BuyVoucherSkeleton:vt,CancelConvertibleOrder:G.a,DaItem:z.a},setup:function(){var e=Object(de.c)().params,t=Z.e,o=be(e);return{t:o.t,commonData:o.commonData,loadVoucherDetailFinish:o.loadVoucherDetailFinish,usdUnit:t,priceRangeInfo:o.priceRangeInfo,solvMisc:o.solvMisc,bindCancel:o.bindCancel,handleCancelFinished:o.handleCancelFinished}}});o("192e"),o("3c70"),o("c426");Ot.render=q,Ot.__scopeId="data-v-4a4f9c94";t.default=Ot},"813f":function(e,t,o){},"8a5b":function(e,t,o){},"8e5c":function(e,t,o){"use strict";o("cdbf")},b932:function(e,t,o){},bc29:function(e,t,o){},c426:function(e,t,o){"use strict";o("2817")},cdbf:function(e,t,o){},d0e3:function(e,t,o){"use strict";o("813f")}}]);
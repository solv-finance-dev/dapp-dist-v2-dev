(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-24c0245f"],{"0f96":function(e,t,o){},"2ed5":function(e,t,o){"use strict";o("0f96")},"34c9":function(e,t,o){},"3e58":function(e,t,o){"use strict";o("8a5b")},"42ec":function(e,t,o){"use strict";o("9065")},"620c":function(e,t,o){"use strict";o.r(t);o("b0c0"),o("99af");var c=o("7a23"),a=Object(c.withScopeId)("data-v-1133ea66");Object(c.pushScopeId)("data-v-1133ea66");var n={class:"order-details"},i={class:"order-details__header"},r={class:"header-left"},l={class:"header-right"},s={class:"order-details__body"},d={class:"infos-module m-72"},u={class:"voucher-img da-flex justify-center items-center da-padding-32 da-border-bottom"},b={class:"da-paddingy-24 da-paddingx-32"},m={class:"info-label"},v={class:"info-value da-flex items-center",style:{"align-items":"flex-end"}},O={key:1,class:"storage"},p={class:"flex justify-between da-margint-12"},h={class:"info-label"},j={key:1,class:"info-value"},f={class:"info-label"},y={key:1,class:"info-value font-variant-numeric"},g={class:"buy-module"},D={class:"voucher-info m-72"},V={class:"flex-col order-information"},k={class:"flex-col equal-division-item"},S={class:"vesting-group"},N={class:"flex-row"},I={class:"flex-col vesting-right-group"},C={class:"detail-title"},B={class:"order-information-content order-information-content-right"},T={class:"info-item-module"},x={class:"info-item-module__body"},w={class:"info-item-module__body--item"},_={class:"spot-price"},A={class:"info-item-module__body--item"},F={class:"body-item-label"},R=Object(c.createVNode)("div",{class:"item-point item-point-up"},null,-1),$={class:"body-item-value"},P={class:"body-item-label"},U=Object(c.createVNode)("div",{class:"item-point item-point-normal"},null,-1),L={class:"body-item-value"},M={class:"equivalent-value"},W={class:"body-item-label"},Y=Object(c.createVNode)("div",{class:"item-point item-point-down"},null,-1),H={class:"body-item-value"},J=Object(c.createVNode)("div",{class:"learn-more"},null,-1);Object(c.popScopeId)();var q=a((function(e,t,o,q,z,E){var X=Object(c.resolveComponent)("DaSkeleton"),G=Object(c.resolveComponent)("OutputHref"),K=Object(c.resolveComponent)("DaItem"),Q=Object(c.resolveComponent)("BuyVoucher"),Z=Object(c.resolveComponent)("BuyVoucherSkeleton"),ee=Object(c.resolveComponent)("PageWrapper"),te=Object(c.resolveComponent)("CancelConvertibleOrder");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)(ee,{showBreadcrumbs:!0},{default:a((function(){var t,o,q,z,E,ee,te,oe,ce,ae,ne,ie;return[Object(c.createVNode)("div",n,[Object(c.createVNode)("div",i,[Object(c.createVNode)(X,{visible:!(null!==(t=e.commonData.voucherTokenSchema)&&void 0!==t&&t.name),height:e.$filters.pxToRem(36),width:e.$filters.pxToRem(320),parentWidth:"auto"},{default:a((function(){var t,o,a;return[Object(c.createVNode)("div",r,[Object(c.createVNode)("img",{src:e.$filters.getTokenLocalLogo(null===(t=e.commonData.voucherTokenSchema)||void 0===t?void 0:t.logoURI,null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol),class:"token-logo"},null,8,["src"]),Object(c.createVNode)("span",null," Order NO."+Object(c.toDisplayString)(e.commonData.orderId)+" - "+Object(c.toDisplayString)(null===(a=e.commonData.voucherTokenSchema)||void 0===a?void 0:a.name),1)])]})),_:1},8,["visible","height","width"]),Object(c.createVNode)("div",l,[Object(c.createVNode)(G,{voucherId:e.commonData.voucherId,voucherAddress:null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.address,underlyingSymbol:null===(q=e.commonData.voucherTokenSchema)||void 0===q?void 0:q.underlyingToken.symbol,underlyingAddress:null===(z=e.commonData.voucherTokenSchema)||void 0===z?void 0:z.underlyingToken.address,visibleOpensea:!1},null,8,["voucherId","voucherAddress","underlyingSymbol","underlyingAddress"])])]),Object(c.createVNode)("div",s,[Object(c.createVNode)("div",null,[Object(c.createVNode)("div",d,[Object(c.createVNode)("div",u,[e.commonData.voucherImage?(Object(c.openBlock)(),Object(c.createBlock)("img",{key:0,src:e.commonData.voucherImage,alt:""},null,8,["src"])):Object(c.createCommentVNode)("",!0)]),Object(c.createVNode)("div",b,[Object(c.createVNode)(K,{class:"da-marginb-24 infos-item"},{label:a((function(){var t,o;return[Object(c.createVNode)("span",m,Object(c.toDisplayString)(e.t("Face Value"))+" "+Object(c.toDisplayString)(e.commonData.voucherInfo?"(".concat(null===(t=e.commonData.voucherInfo)||void 0===t||null===(o=t.fundCurrencyInfo)||void 0===o?void 0:o.currencySymbol,")"):""),1)]})),value:a((function(){var t,o;return[Object(c.createVNode)("p",v,[e.commonData.orderInfo&&e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)("span",O,Object(c.toDisplayString)(e.$filters.viewTokenDivDecimals((null===(t=e.commonData.orderInfo)||void 0===t?void 0:t.order.units)||0,null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.underlyingDecimals)),1)):(Object(c.openBlock)(),Object(c.createBlock)(X,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(24)},null,8,["width","height"]))])]})),_:1}),Object(c.createVNode)("div",p,[Object(c.createVNode)(K,{class:"da-margin-0 infos-item"},{label:a((function(){return[Object(c.createVNode)("span",h,Object(c.toDisplayString)(e.t("Bond Range"))+" ("+Object(c.toDisplayString)(e.usdUnit)+")",1)]})),value:a((function(){var t,o;return[e.commonData.orderInfo&&e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)("span",j,Object(c.toDisplayString)("".concat(e.solvMisc.formatOrderPrice((null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.lowestPrice)+"",8,2),"  ~ ").concat(e.solvMisc.formatOrderPrice((null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.highestPrice)+"",8,2))),1)):(Object(c.openBlock)(),Object(c.createBlock)(X,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(18)},null,8,["width","height"]))]})),_:1}),Object(c.createVNode)(K,{class:"da-margin-0 infos-item"},{label:a((function(){return[Object(c.createVNode)("span",f,Object(c.toDisplayString)(e.t("Maturity Date (UTC)")),1)]})),value:a((function(){var t;return[e.commonData.orderInfo&&e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)("span",y,Object(c.toDisplayString)(e.$filters.dayjsUTCFormat(1e3*((null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.maturity)||0),"YYYY-MM-DD")),1)):(Object(c.openBlock)(),Object(c.createBlock)(X,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(18)},null,8,["width","height"]))]})),_:1})])])])]),Object(c.createVNode)("div",g,[e.commonData.orderItem&&e.loadVoucherDetailFinish?(Object(c.openBlock)(),Object(c.createBlock)(Q,{key:0,instance:e.commonData.orderItem,maturity:(null===(E=e.commonData.voucherInfo)||void 0===E?void 0:E.maturity)||0,onUnlist:e.bindCancel,onOnCall:e.onCall},null,8,["instance","maturity","onUnlist","onOnCall"])):(Object(c.openBlock)(),Object(c.createBlock)(Z,{key:1}))]),Object(c.createVNode)("div",D,[Object(c.createVNode)("div",V,[Object(c.createVNode)("div",k,[Object(c.createVNode)("div",null,[Object(c.createVNode)("div",S,[Object(c.createVNode)("div",N,[Object(c.createVNode)("div",I,[Object(c.createVNode)("span",C,Object(c.toDisplayString)(e.t("Settlement Condition")),1)])])]),Object(c.createVNode)("div",B,[Object(c.createVNode)("div",T,[Object(c.createVNode)("div",x,[Object(c.createVNode)("div",w,[Object(c.createVNode)("div",_,[Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Spot Price"))+": "+Object(c.toDisplayString)(7.88)+" "+Object(c.toDisplayString)(e.usdUnit),1)])]),Object(c.createVNode)("div",A,[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Settlement Price")),1),Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Claimable")),1)]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"up"===e.priceRangeInfo.status?"up":""},[e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",F,[R,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Above"))+" "+Object(c.toDisplayString)(e.solvMisc.formatOrderPrice((null===(ee=e.commonData.voucherInfo)||void 0===ee?void 0:ee.highestPrice)||0,8,2))+" "+Object(c.toDisplayString)(e.usdUnit),1)]),Object(c.createVNode)("p",$,[Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.priceRangeInfo.highestClaimable),1),Object(c.createTextVNode)(" "+Object(c.toDisplayString)(null===(te=e.commonData.voucherInfo)||void 0===te?void 0:te.underlyingSymbol),1)])],64)):(Object(c.openBlock)(),Object(c.createBlock)(X,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"normal"===e.priceRangeInfo.status?"normal":""},[e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",P,[U,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("In Range")),1)]),Object(c.createVNode)("div",L,[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.priceRangeInfo.normalClaimable)))+" "+Object(c.toDisplayString)(null===(oe=e.commonData.voucherInfo)||void 0===oe||null===(ce=oe.fundCurrencyInfo)||void 0===ce?void 0:ce.currencySymbol),1),Object(c.createVNode)("p",M,Object(c.toDisplayString)(e.t("or equivalent value in")+" ".concat(null===(ae=e.commonData.voucherInfo)||void 0===ae?void 0:ae.underlyingSymbol)),1)])],64)):(Object(c.openBlock)(),Object(c.createBlock)(X,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"down"===e.priceRangeInfo.status?"down":""},[e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",W,[Y,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Below"))+" "+Object(c.toDisplayString)(e.solvMisc.formatOrderPrice((null===(ne=e.commonData.voucherInfo)||void 0===ne?void 0:ne.lowestPrice)||0,8,2))+" "+Object(c.toDisplayString)(e.usdUnit),1)]),Object(c.createVNode)("p",H,Object(c.toDisplayString)(e.priceRangeInfo.lowestClaimable)+" "+Object(c.toDisplayString)(null===(ie=e.commonData.voucherInfo)||void 0===ie?void 0:ie.underlyingSymbol),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)(X,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),J])])])])])])])])])]})),_:1}),e.commonData.visibleCancel?(Object(c.openBlock)(),Object(c.createBlock)(te,{key:0,instance:e.commonData.orderCancelInfo,visible:e.commonData.visibleCancel,onClose:t[1]||(t[1]=function(t){return e.commonData.visibleCancel=!1}),onOnFinished:e.handleCancelFinished},null,8,["instance","visible","onOnFinished"])):Object(c.createCommentVNode)("",!0)],64)})),z=o("19b2"),E=o("9998"),X=o("6789"),G=o("a6f3"),K=o("f41c"),Q=o("5214"),Z=(o("159b"),o("a9e3"),o("d3b7"),o("25f0"),o("b680"),o("9ab4")),ee=o("2739"),te=o("9707"),oe=o("1d85"),ce=o("1c5c"),ae=o("8e83"),ne=o("9af8"),ie=o("901e"),re=o.n(ie),le=o("47e2"),se=o("6c02"),de=o("5cc2");function ue(e,t){var o=Object(le.b)().t,a=Object(ce.a)().getters,n=Object(se.d)().back,i=Object(c.computed)((function(){return a.getChainId})),r=Object(c.reactive)({orderId:e.orderId+"",voucherId:e.voucherId+"",voucherSymbol:e.voucherSymbol+"",voucherImage:"",reloadImage:!1,visibleCancel:!1}),l=Object(c.ref)(!1),s=Object(c.ref)(!0),d=Object(c.ref)(!1),u=Object(c.ref)(""),b=Object(c.reactive)({list:[]}),m=Object(c.reactive)({currencySymbol:""}),v=Object(ae.c)(m).tokenValueInfo,O=ee.a;function p(){var e,t;return Object(Z.b)(this,void 0,void 0,(function(){var o,c,a;return Object(Z.e)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),o=ne.a.solvUtils.getAllocationMarket(),[4,Object(oe.b)().getOrderInfo(r.orderId)];case 1:return c=n.sent(),a={order:c.order,currency:c.order.currencyAddress.toLowerCase()!=(null===(e=r.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.address.toLowerCase())?ne.a.solvUtils.getCurrenciesByAddress(o.address,"Secondary",c.order.currencyAddress):null===(t=r.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken,voucher:ne.a.solvUtils.getTokenSchemaByVoucherAddress(c.order.voucherAddress),price:c.price},r.orderInfo=a,r.orderInfo.order.totalUnits=a.order.total,c.order.isValid&&function(e){r.orderItem={voucherId:e.order.tokenId,voucherSymbol:e.voucher.symbol,voucherAddress:e.voucher.address,underlyingSymbol:e.voucher.underlyingToken.symbol,underlyingDecimals:e.voucher.underlyingToken.decimals,underlyingAddress:e.voucher.underlyingToken.address,currencyAddress:e.currency.address,currencySymbol:e.currency.symbol,currencyDecimals:e.currency.decimals,minUnits:e.order.min.toString(),maxUnits:e.order.max.toString(),highest:e.price.highest.toString(),lowest:e.price.lowest.toString(),useAllowList:e.order.useAllowList,interval:e.price.interval,duration:e.price.duration,startTime:e.order.startTime,orderId:e.order.saleId,priceType:e.order.priceType,currentPrice:0==e.order.priceType?e.price.lowest:0,seller:e.order.seller,units:e.order.units.toString()},m.currencySymbol=r.orderItem.underlyingSymbol}(a),[3,3];case 2:return n.sent(),[3,3];case 3:return[2]}}))}))}function h(t){void 0===t&&(t=!0),d.value=!t,r.voucherTokenSchema=ne.a.solvUtils.getTokenSchemaByVoucherSymbol(e.voucherSymbol+""),function(e){var t;void 0===e&&(e=!1),Object(Z.b)(this,void 0,void 0,(function(){var o,c;return Object(Z.e)(this,(function(a){switch(a.label){case 0:return r.voucherTokenSchema?(b.list=[],[4,Object(oe.d)().getVoucherInfo(r.voucherTokenSchema,r.voucherId)]):[2];case 1:o=a.sent(),c=JSON.parse(JSON.stringify(o)),r.voucherInfo=c,d.value=!0,r.voucherInfo=Object(de.a)([c])[0];try{r.voucherImage=te.a.base64Decode((null===(t=r.voucherInfo)||void 0===t?void 0:t.URI)+"").image}catch(e){console.log(e)}return 2==r.voucherInfo.releaseType&&r.voucherInfo.maturities.forEach((function(e,t){var o,c=new re.a((null===(o=r.voucherInfo)||void 0===o?void 0:o.percentages[t])+"").dividedBy(new re.a(100)).toNumber(),a=te.a.dateUTCFormat(1e3*Number(e.toString()));b.list.push({radio:c,date:a})})),r.reloadImage=e,[2]}}))}))}(),p()}var j=Object(c.computed)((function(){var e,t;return r.voucherInfo?new re.a(te.a.tokenDivDecimals((null===(e=r.voucherInfo)||void 0===e?void 0:e.units)||0,null===(t=r.voucherInfo)||void 0===t?void 0:t.underlyingDecimals)).multipliedBy(new re.a(v.price)):"0"})),f=Object(c.computed)((function(){var e={status:"",highestClaimable:"0",lowestClaimable:"0",normalClaimable:"0"};if(r.voucherInfo){var o=te.a.tokenDivDecimals(r.voucherInfo.lowestPrice,8),c=te.a.tokenDivDecimals(r.voucherInfo.highestPrice,8),a=(null==t?void 0:t.value)||"0";te.a.comp("0.123456",c)?e.status="up":te.a.comp(o,"0.123456")?e.status="down":e.status="normal",e.highestClaimable=te.a.parseThousandsValue(te.a.hideMantissa(new re.a(a).dividedBy(new re.a(c)).toFixed(2,1))),e.lowestClaimable=te.a.parseThousandsValue(te.a.hideMantissa(new re.a(a).dividedBy(new re.a(o)).toFixed(2,1))),e.normalClaimable=O.formatTokenValue(te.a.tokenMulDecimals(a,r.voucherInfo.underlyingDecimals),r.voucherInfo.underlyingDecimals,6)}return e}));return Object(c.watch)((function(){return a.getChangeFlag}),(function(e){e&&h()}),{immediate:!0}),Object(c.watch)((function(){return a.getLastTxReceipt}),(function(e){e&&h(!1)}),{deep:!0}),{t:o,commonData:r,visibleShare:l,visibleOpensea:s,loadVoucherDetailFinish:d,originalVoucherImgUrl:u,stagedData:b,chainId:i,unitValue:j,solvMisc:O,priceRangeInfo:f,bindCancel:function(){r.orderCancelInfo={orderId:r.orderId,voucherId:r.voucherId,voucher:{units:r.orderItem.units,totalUnits:r.orderInfo.order.totalUnits,underlyingDecimals:r.orderItem.underlyingDecimals,underlyingSymbol:r.orderItem.underlyingSymbol}},r.visibleCancel=!0},handleCancelFinished:function(){n()}}}var be=Object(c.withScopeId)("data-v-236938c0");Object(c.pushScopeId)("data-v-236938c0");var me={class:"order-buy-voucher"},ve={class:"order-buy-voucher__header"},Oe={class:"order-buy-header__content"},pe={class:"header-center"},he={class:"amount-item"},je={class:"da-weight-600 header-item-value"},fe={class:"amount-item"},ye=Object(c.createVNode)("span",{class:"da-weight-400"},Object(c.toDisplayString)("APR"),-1),ge={class:"da-weight-600 header-item-value"},De={class:"order-buy-voucher__body"},Ve={class:"card-form-item"},ke={class:"suffix-item"},Se={class:"info-module"},Ne={key:0,class:"purchase-limit info-item"},Ie={key:1,class:"purchase-limit info-item"},Ce={key:0,class:"desc-text"},Be={key:1,class:"desc-text"},Te={class:"info-module"},xe={class:"desc-text"},we={class:"card-form-item"},_e={class:"action-btn-module"},Ae={key:0,class:"order-no-buy"},Fe={class:"start-label"},Re={class:"start-value"},$e={key:0,class:"order-no-buy"},Pe={class:"start-value"};Object(c.popScopeId)();var Ue=be((function(e,t,o,a,n,i){var r,l=Object(c.resolveComponent)("DaItem"),s=Object(c.resolveComponent)("TextTip"),d=Object(c.resolveComponent)("DaInput"),u=Object(c.resolveComponent)("DaSkeleton"),b=Object(c.resolveComponent)("DaButton"),m=Object(c.resolveComponent)("DaCard"),v=Object(c.resolveComponent)("Loading"),O=Object(c.resolveComponent)("TxFinish");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)("div",me,[Object(c.createVNode)("div",ve,[Object(c.createVNode)("div",{class:["order-buy-header__icon",{"order-buy-fixed__icon":0==e.instance.priceType}]},[Object(c.createVNode)("span",null,Object(c.toDisplayString)(0==e.instance.priceType?e.t("Fixed price"):e.t("Variable price")),1)],2),Object(c.createVNode)("div",Oe,[Object(c.createVNode)("div",pe,[Object(c.createVNode)("div",he,[Object(c.createVNode)(l,null,{label:be((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Total Price")),1)]})),value:be((function(){return[Object(c.createVNode)("span",je,Object(c.toDisplayString)(e.getTotalPrice)+" "+Object(c.toDisplayString)(e.instance.currencySymbol),1)]})),_:1})]),Object(c.createVNode)("div",fe,[Object(c.createVNode)(l,null,{label:be((function(){return[Object(c.createVNode)(s,{class:"da-text-tip-apr"},{content:be((function(){return[Object(c.createVNode)("div",{style:{width:e.$filters.pxToRem(300),lineHeight:1.4}},[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Expected annual percentage rate within the bond range.")),1),Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Settlement price is outside of bond range, please refer to the settlement conditions to see the final tokens received.")),1)],4)]})),default:be((function(){return[ye]})),_:1})]})),value:be((function(){return[Object(c.createVNode)("span",ge,Object(c.toDisplayString)(e.getAPR)+" %",1)]})),_:1})])])])]),Object(c.createVNode)("div",De,[Object(c.createVNode)(m,{class:"order-buy-voucher__card"},{default:be((function(){return[Object(c.createVNode)("div",Ve,[Object(c.createVNode)(l,{label:e.t("Purchase Value")},{value:be((function(){return[Object(c.createVNode)(d,{mode:"decimal",decimals:e.instance.currencyDecimals,modelValue:e.purForm.value,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.purForm.value=t}),class:"input-entry",maxlength:"32",border:!0,placeholder:"0.0",disabled:!1,onInput:e.handleInputValue},{suffix:be((function(){return[Object(c.createVNode)("span",{onClick:t[1]||(t[1]=function(){return e.handleMaxAvailableAmount&&e.handleMaxAvailableAmount.apply(e,arguments)}),class:"suffix-item"},Object(c.toDisplayString)(e.t("MAX")),1),Object(c.createVNode)("span",ke,Object(c.toDisplayString)(e.instance.currencySymbol),1)]})),_:1},8,["decimals","modelValue","onInput"])]})),descLabel:be((function(){return[Object(c.createVNode)("div",Se,[e.commonData.loadOrderInfoFinished?(Object(c.openBlock)(),Object(c.createBlock)("label",Ie,[e.buyLimitInfo.limit?(Object(c.openBlock)(),Object(c.createBlock)("p",Ce,Object(c.toDisplayString)(e.t("Purchase limit"))+": "+Object(c.toDisplayString)(e.minLimitValue)+" - "+Object(c.toDisplayString)(e.maxLimitValue)+" "+Object(c.toDisplayString)(e.instance.currencySymbol),1)):(Object(c.openBlock)(),Object(c.createBlock)("p",Be,Object(c.toDisplayString)(e.t("Max Available"))+": "+Object(c.toDisplayString)(e.maxLimitValue)+" "+Object(c.toDisplayString)(e.instance.currencySymbol),1))])):(Object(c.openBlock)(),Object(c.createBlock)("span",Ne,[Object(c.createVNode)(u,{visible:!0,width:"120px",height:e.$filters.pxToRem(14)},null,8,["height"])]))]),Object(c.createVNode)("div",Te,[Object(c.createVNode)("span",xe,[Object(c.createVNode)(u,{visible:!e.commonData.loadOrderInfoFinished,width:"120px",height:e.$filters.pxToRem(14)},{default:be((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Wallet Balance"))+": "+Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.$filters.viewTokenDivDecimals(e.walletData.walletBalance,e.instance.currencyDecimals))))+" "+Object(c.toDisplayString)(e.instance?e.instance.currencySymbol:""),1)]})),_:1},8,["visible","height"])])])]})),_:1},8,["label"])]),Object(c.createVNode)("div",we,[Object(c.createCommentVNode)("",!0),Object(c.createVNode)("div",_e,[e.$filters.compCurrentTime(e.$filters.getTime(1e3*e.instance.startTime))?(Object(c.openBlock)(),Object(c.createBlock)("div",Ae,[Object(c.createVNode)("span",Fe,Object(c.toDisplayString)(e.$t("Start Time(UTC)"))+": ",1),Object(c.createVNode)("span",Re,Object(c.toDisplayString)(e.$filters.dateTimeUTCFormat(e.$filters.getTime(1e3*e.instance.startTime))),1)])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.commonData.isBuyerAllowed||1!=e.instance.useAllowList?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.isSelfOrder?(Object(c.openBlock)(),Object(c.createBlock)(b,{key:0,size:"medium",full:!0,onClick:e.bindCancel,class:"action-btn"},{default:be((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Cancel")),1)]})),_:1},8,["onClick"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.commonData.isApprove?Object(c.createCommentVNode)("",!0):(Object(c.openBlock)(),Object(c.createBlock)(b,{key:0,size:"medium",full:!0,onClick:e.bindApprove,disabled:e.commonData.submitLoading,loading:e.commonData.submitLoading,class:"action-btn m-16"},{default:be((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Approve")),1)]})),_:1},8,["onClick","disabled","loading"])),Object(c.createVNode)(b,{size:"medium",full:!0,onClick:e.handleConfirm,disabled:e.disabledConfirm||e.disabledBuyByWalletBalance,loading:e.commonData.loadingSubmit,class:"action-btn"},{default:be((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.disabledBuyByWalletBalance&&e.commonData.isApprove?e.t("Insufficient Wallet Balance"):e.t("Buy")),1)]})),_:1},8,["onClick","disabled","loading"])],64))],64)):(Object(c.openBlock)(),Object(c.createBlock)("div",$e,[Object(c.createVNode)("span",Pe,Object(c.toDisplayString)(e.t("Your address is not in the whitelist")),1)]))],64))])])]})),_:1})])]),e.commonData.visibleLoading?(Object(c.openBlock)(),Object(c.createBlock)(v,{key:0,visible:e.commonData.visibleLoading,onClose:t[3]||(t[3]=function(t){return e.commonData.visibleLoading=!1}),onTxDone:e.handleTxDone,needDone:!0},null,8,["visible","onTxDone"])):Object(c.createCommentVNode)("",!0),e.commonData.visibleTxFinish?(Object(c.openBlock)(),Object(c.createBlock)(O,{key:1,visible:e.commonData.visibleTxFinish,hash:e.commonData.txHash,title:"Purchase Completed",onClose:t[4]||(t[4]=function(t){return e.commonData.visibleTxFinish=!1}),pathName:"Flexible"===(null===(r=e.commonData.tokenSchema)||void 0===r?void 0:r.type)?"MyStandardFlexibleVoucher":""},null,8,["visible","hash","pathName"])):Object(c.createCommentVNode)("",!0)],64)})),Le=o("e205"),Me=o("6363"),We=o("4be1"),Ye=o("5aec"),He=o("6dff"),Je=o("52f9"),qe=o("9ddb"),ze=o("958d"),Ee=Object(c.defineComponent)({components:{DaCard:Me.a,DaItem:Ye.a,DaInput:We.a,DaButton:Le.a,Loading:qe.a,TxFinish:Je.a,DaSkeleton:E.a,TextTip:He.a},props:{instance:{type:Object,default:function(){}},maturity:{type:Number,default:0}},emits:["close","txEnd","onFinished","unlist","onCall"],setup:function(e,t){var o=t.emit,a=Object(c.toRefs)(e),n=a.instance,i=a.maturity,r=Object(ze.a)(n,i.value,o),l=r.t,s=r.commonData,d=r.walletData,u=r.purForm,b=r.disabledConfirm,m=r.getPrice,v=r.isAllowBuy,O=r.disabledBuyByWalletBalance,p=r.isSelfOrder,h=r.buyLimitInfo,j=r.getAPR,f=r.getTotalPrice,y=r.maxLimitValue,g=r.minLimitValue,D=r.parseUnitsValue,V=r.handleClose,k=r.handleConfirm,S=r.bindApprove,N=r.handleInputAmount,I=r.handleMaxAvailableAmount,C=r.handleInputValue,B=r.handleTxDone,T=r.handleMaxAvailableValue;Object(c.watch)((function(){return u.amount}),(function(){o("onCall",u.amount)}));return{t:l,commonData:s,walletData:d,purForm:u,disabledConfirm:b,getPrice:m,isAllowBuy:v,disabledBuyByWalletBalance:O,isSelfOrder:p,buyLimitInfo:h,getAPR:j,getTotalPrice:f,maxLimitValue:y,minLimitValue:g,parseUnitsValue:D,handleClose:V,handleConfirm:k,bindApprove:S,handleInputAmount:N,handleMaxAvailableAmount:I,handleInputValue:C,handleTxDone:B,handleMaxAvailableValue:T,bindCancel:function(){o("unlist")}}}});o("42ec"),o("d5b5");Ee.render=Ue,Ee.__scopeId="data-v-236938c0";var Xe=Ee,Ge=Object(c.withScopeId)("data-v-28c09a15");Object(c.pushScopeId)("data-v-28c09a15");var Ke={class:"order-buy-voucher"},Qe={class:"order-buy-voucher__header"},Ze=Object(c.createVNode)("div",{class:"order-buy-header__icon"},null,-1),et={class:"order-buy-header__content"},tt={class:"header-center"},ot={class:"order-buy-voucher__body"},ct={class:"card-form-item"},at={class:"card-form-item"},nt={class:"card-form-item"},it={class:"card-form-item"},rt={class:"action-btn-module"};Object(c.popScopeId)();var lt=Ge((function(e,t,o,a,n,i){var r=Object(c.resolveComponent)("DaSkeleton"),l=Object(c.resolveComponent)("DaCard");return Object(c.openBlock)(),Object(c.createBlock)("div",Ke,[Object(c.createVNode)("div",Qe,[Ze,Object(c.createVNode)("div",et,[Object(c.createVNode)("div",tt,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]),Object(c.createVNode)("div",ot,[Object(c.createVNode)(l,{class:"order-buy-voucher__card"},{default:Ge((function(){return[Object(c.createVNode)("div",ct,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",at,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",nt,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",it,[Object(c.createVNode)("div",rt,[Object(c.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]})),_:1})])])})),st=Object(c.defineComponent)({components:{DaCard:Me.a,DaSkeleton:E.a},setup:function(){}});o("3e58");st.render=lt,st.__scopeId="data-v-28c09a15";var dt=st,ut=Object(c.defineComponent)({components:{PageWrapper:K.a,DaSkeleton:E.a,BuyVoucher:Xe,OutputHref:G.a,BuyVoucherSkeleton:dt,CancelConvertibleOrder:X.a,DaItem:z.a},setup:function(){var e=Object(se.c)().params,t=Q.e,o=Object(c.ref)("0"),a=ue(e,o);return{t:a.t,commonData:a.commonData,loadVoucherDetailFinish:a.loadVoucherDetailFinish,usdUnit:t,priceRangeInfo:a.priceRangeInfo,onCall:function(e){o.value=e},solvMisc:a.solvMisc,bindCancel:a.bindCancel,handleCancelFinished:a.handleCancelFinished}}});o("b6394"),o("2ed5"),o("6924");ut.render=q,ut.__scopeId="data-v-1133ea66";t.default=ut},6924:function(e,t,o){"use strict";o("bbd5")},"8a5b":function(e,t,o){},9065:function(e,t,o){},b6394:function(e,t,o){"use strict";o("ee18")},bbd5:function(e,t,o){},d5b5:function(e,t,o){"use strict";o("34c9")},ee18:function(e,t,o){}}]);
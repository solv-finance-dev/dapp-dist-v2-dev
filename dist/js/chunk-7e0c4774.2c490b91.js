(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7e0c4774"],{"0708":function(e,t,o){"use strict";o("ee6c")},"0a3d":function(e,t,o){},"20ee":function(e,t,o){},"3e58":function(e,t,o){"use strict";o("8a5b")},"554a":function(e,t,o){},"620c":function(e,t,o){"use strict";o.r(t);o("b0c0"),o("99af");var a=o("7a23"),c=Object(a.withScopeId)("data-v-36e767e5");Object(a.pushScopeId)("data-v-36e767e5");var n={class:"order-details"},i={class:"order-details__header"},r={class:"header-left"},l={class:"header-right"},s={class:"order-details__body"},d={class:"infos-module m-72"},u={class:"voucher-img da-flex justify-center items-center da-padding-32 da-border-bottom"},m={class:"da-paddingy-24 da-paddingx-32"},b={class:"info-label"},v={class:"info-value da-flex items-center",style:{"align-items":"flex-end"}},p={key:1,class:"storage"},h={class:"flex justify-between da-margint-12"},O={class:"info-label"},j={key:1,class:"info-value"},f={class:"info-label"},g={key:1,class:"info-value font-variant-numeric"},y={class:"buy-module"},D={class:"voucher-info m-72"},V={class:"flex-col order-information"},k={class:"flex-col equal-division-item"},I={class:"vesting-group"},S={class:"flex-row"},N={class:"flex-col vesting-right-group"},B={class:"detail-title"},T={class:"order-information-content order-information-content-right"},C={class:"info-item-module"},w={class:"info-item-module__body"},x={class:"info-item-module__body--item"},_={class:"spot-price"},P={class:"info-item-module__body--item info-item-module__body--label"},F={class:"body-item-label"},A=Object(a.createVNode)("div",{class:"item-point item-point-up"},null,-1),R={class:"body-item-value"},L={class:"body-item-label"},$=Object(a.createVNode)("div",{class:"item-point item-point-normal"},null,-1),M={class:"body-item-value"},U={class:"equivalent-value"},E={class:"body-item-label"},W=Object(a.createVNode)("div",{class:"item-point item-point-down"},null,-1),q={class:"body-item-value"},Y={class:"learn-more"};Object(a.popScopeId)();var H=c((function(e,t,o,H,J,z){var X=Object(a.resolveComponent)("DaSkeleton"),G=Object(a.resolveComponent)("OutputHref"),K=Object(a.resolveComponent)("DaItem"),Q=Object(a.resolveComponent)("BuyVoucher"),Z=Object(a.resolveComponent)("BuyVoucherSkeleton"),ee=Object(a.resolveComponent)("PageWrapper"),te=Object(a.resolveComponent)("CancelConvertibleOrder");return Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,null,[Object(a.createVNode)(ee,{showBreadcrumbs:!0},{default:c((function(){var o,H,J,z,ee,te,oe,ae,ce,ne,ie,re;return[Object(a.createVNode)("div",n,[Object(a.createVNode)("div",i,[Object(a.createVNode)(X,{visible:!(null!==(o=e.commonData.voucherTokenSchema)&&void 0!==o&&o.name),height:e.$filters.pxToRem(36),width:e.$filters.pxToRem(320),parentWidth:"auto"},{default:c((function(){var t,o,c;return[Object(a.createVNode)("div",r,[Object(a.createVNode)("img",{src:e.$filters.getTokenLocalLogo(null===(t=e.commonData.voucherTokenSchema)||void 0===t?void 0:t.logoURI,null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol),class:"token-logo"},null,8,["src"]),Object(a.createVNode)("span",null," Order NO."+Object(a.toDisplayString)(e.commonData.orderId)+" - "+Object(a.toDisplayString)(null===(c=e.commonData.voucherTokenSchema)||void 0===c?void 0:c.name),1)])]})),_:1},8,["visible","height","width"]),Object(a.createVNode)("div",l,[Object(a.createVNode)(G,{voucherId:e.commonData.voucherId,voucherAddress:null===(H=e.commonData.voucherTokenSchema)||void 0===H?void 0:H.address,underlyingSymbol:null===(J=e.commonData.voucherTokenSchema)||void 0===J?void 0:J.underlyingToken.symbol,underlyingAddress:null===(z=e.commonData.voucherTokenSchema)||void 0===z?void 0:z.underlyingToken.address,visibleOpensea:!1},null,8,["voucherId","voucherAddress","underlyingSymbol","underlyingAddress"])])]),Object(a.createVNode)("div",s,[Object(a.createVNode)("div",null,[Object(a.createVNode)("div",d,[Object(a.createVNode)("div",u,[e.commonData.voucherImage?(Object(a.openBlock)(),Object(a.createBlock)("img",{key:0,src:e.commonData.voucherImage,alt:""},null,8,["src"])):Object(a.createCommentVNode)("",!0)]),Object(a.createVNode)("div",m,[Object(a.createVNode)(K,{class:"da-marginb-24 infos-item"},{label:c((function(){var t,o;return[Object(a.createVNode)("span",b,Object(a.toDisplayString)(e.t("Face Value"))+" "+Object(a.toDisplayString)(e.commonData.voucherInfo?"(".concat(null===(t=e.commonData.voucherInfo)||void 0===t||null===(o=t.fundCurrencyInfo)||void 0===o?void 0:o.currencySymbol,")"):""),1)]})),value:c((function(){var t,o;return[Object(a.createVNode)("p",v,[e.commonData.orderInfo&&e.commonData.voucherInfo?(Object(a.openBlock)(),Object(a.createBlock)("span",p,Object(a.toDisplayString)(e.$filters.viewTokenDivDecimals((null===(t=e.commonData.orderInfo)||void 0===t?void 0:t.order.units)||0,null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.underlyingDecimals)),1)):(Object(a.openBlock)(),Object(a.createBlock)(X,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(24)},null,8,["width","height"]))])]})),_:1}),Object(a.createVNode)("div",h,[Object(a.createVNode)(K,{class:"da-margin-0 infos-item"},{label:c((function(){return[Object(a.createVNode)("span",O,Object(a.toDisplayString)(e.t("Bond Range"))+" ("+Object(a.toDisplayString)(e.usdUnit)+")",1)]})),value:c((function(){var t,o;return[e.commonData.orderInfo&&e.commonData.voucherInfo?(Object(a.openBlock)(),Object(a.createBlock)("span",j,Object(a.toDisplayString)("".concat(e.solvMisc.formatOrderPrice((null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.lowestPrice)+"",8,2),"  ~ ").concat(e.solvMisc.formatOrderPrice((null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.highestPrice)+"",8,2))),1)):(Object(a.openBlock)(),Object(a.createBlock)(X,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(18)},null,8,["width","height"]))]})),_:1}),Object(a.createVNode)(K,{class:"da-margin-0 infos-item"},{label:c((function(){return[Object(a.createVNode)("span",f,Object(a.toDisplayString)(e.t("Maturity Date (UTC)")),1)]})),value:c((function(){var t;return[e.commonData.orderInfo&&e.commonData.voucherInfo?(Object(a.openBlock)(),Object(a.createBlock)("span",g,Object(a.toDisplayString)(e.$filters.dayjsUTCFormat(1e3*((null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.maturity)||0),"YYYY-MM-DD")),1)):(Object(a.openBlock)(),Object(a.createBlock)(X,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(18)},null,8,["width","height"]))]})),_:1})])])])]),Object(a.createVNode)("div",y,[e.commonData.orderItem&&e.loadVoucherDetailFinish?(Object(a.openBlock)(),Object(a.createBlock)(Q,{key:0,instance:e.commonData.orderItem,maturity:(null===(ee=e.commonData.voucherInfo)||void 0===ee?void 0:ee.maturity)||0,onUnlist:e.bindCancel,onOnCall:e.onCall},null,8,["instance","maturity","onUnlist","onOnCall"])):(Object(a.openBlock)(),Object(a.createBlock)(Z,{key:1}))]),Object(a.createVNode)("div",D,[Object(a.createVNode)("div",V,[Object(a.createVNode)("div",k,[Object(a.createVNode)("div",null,[Object(a.createVNode)("div",I,[Object(a.createVNode)("div",S,[Object(a.createVNode)("div",N,[Object(a.createVNode)("span",B,Object(a.toDisplayString)(e.t("Settlement Condition")),1)])])]),Object(a.createVNode)("div",T,[Object(a.createVNode)("div",C,[Object(a.createVNode)("div",w,[Object(a.createVNode)("div",x,[Object(a.createVNode)("div",_,[Object(a.createVNode)("span",null,Object(a.toDisplayString)(e.commonData.isExpired?e.t("Settlement Price"):e.t("Spot Price"))+": "+Object(a.toDisplayString)(e.commonData.isExpired?e.claimableInfo.settlePrice:e.tokenValueInfo.price)+" "+Object(a.toDisplayString)(e.usdUnit),1)])]),Object(a.createVNode)("div",P,[Object(a.createVNode)("p",null,Object(a.toDisplayString)(e.t("Settlement Price")),1),Object(a.createVNode)("p",null,Object(a.toDisplayString)(e.t("Claimable")),1)]),Object(a.createVNode)("div",{class:"info-item-module__body--item",status:"up"===e.priceRangeInfo.status?"up":""},[e.commonData.voucherInfo?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[Object(a.createVNode)("div",F,[A,Object(a.createVNode)("span",null,Object(a.toDisplayString)(e.t("Above"))+" "+Object(a.toDisplayString)(e.solvMisc.formatOrderPrice((null===(te=e.commonData.voucherInfo)||void 0===te?void 0:te.highestPrice)||0,8,2))+" "+Object(a.toDisplayString)(e.usdUnit),1)]),Object(a.createVNode)("p",R,[Object(a.createVNode)("span",null,Object(a.toDisplayString)(e.priceRangeInfo.highestClaimable),1),Object(a.createTextVNode)(" "+Object(a.toDisplayString)(null===(oe=e.commonData.voucherInfo)||void 0===oe?void 0:oe.underlyingSymbol),1)])],64)):(Object(a.openBlock)(),Object(a.createBlock)(X,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),Object(a.createVNode)("div",{class:"info-item-module__body--item",status:"normal"===e.priceRangeInfo.status?"normal":""},[e.commonData.voucherInfo?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[Object(a.createVNode)("div",L,[$,Object(a.createVNode)("span",null,Object(a.toDisplayString)(e.t("In Range")),1)]),Object(a.createVNode)("div",M,[Object(a.createVNode)("p",null,Object(a.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.priceRangeInfo.normalClaimable)))+" "+Object(a.toDisplayString)(null===(ae=e.commonData.voucherInfo)||void 0===ae||null===(ce=ae.fundCurrencyInfo)||void 0===ce?void 0:ce.currencySymbol),1),Object(a.createVNode)("p",U,Object(a.toDisplayString)(e.t("or equivalent value in")+" ".concat(null===(ne=e.commonData.voucherInfo)||void 0===ne?void 0:ne.underlyingSymbol)),1)])],64)):(Object(a.openBlock)(),Object(a.createBlock)(X,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),Object(a.createVNode)("div",{class:"info-item-module__body--item",status:"down"===e.priceRangeInfo.status?"down":""},[e.commonData.voucherInfo?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[Object(a.createVNode)("div",E,[W,Object(a.createVNode)("span",null,Object(a.toDisplayString)(e.t("Below"))+" "+Object(a.toDisplayString)(e.solvMisc.formatOrderPrice((null===(ie=e.commonData.voucherInfo)||void 0===ie?void 0:ie.lowestPrice)||0,8,2))+" "+Object(a.toDisplayString)(e.usdUnit),1)]),Object(a.createVNode)("p",q,Object(a.toDisplayString)(e.priceRangeInfo.lowestClaimable)+" "+Object(a.toDisplayString)(null===(re=e.commonData.voucherInfo)||void 0===re?void 0:re.underlyingSymbol),1)],64)):(Object(a.openBlock)(),Object(a.createBlock)(X,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),Object(a.createVNode)("div",Y,[Object(a.createVNode)("span",{onClick:t[1]||(t[1]=function(){return e.openLearnMore&&e.openLearnMore.apply(e,arguments)})},Object(a.toDisplayString)(e.t("Learn more"))+" >>",1)])])])])])])])])])])]})),_:1}),e.commonData.visibleCancel?(Object(a.openBlock)(),Object(a.createBlock)(te,{key:0,instance:e.commonData.orderCancelInfo,visible:e.commonData.visibleCancel,onClose:t[2]||(t[2]=function(t){return e.commonData.visibleCancel=!1}),onOnFinished:e.handleCancelFinished},null,8,["instance","visible","onOnFinished"])):Object(a.createCommentVNode)("",!0)],64)})),J=o("19b2"),z=o("9998"),X=o("6789"),G=o("a6f3"),K=o("f41c"),Q=o("fec4"),Z=o("5214"),ee=(o("d3b7"),o("25f0"),o("a9e3"),o("b680"),o("9ab4")),te=o("58d7"),oe=o("2739"),ae=o("2020"),ce=o("9707"),ne=o("1d85"),ie=o("1c5c"),re=o("8e83"),le=o("9af8"),se=o("901e"),de=o.n(se),ue=o("47e2"),me=o("6c02"),be=o("5cc2");function ve(e,t){var o=Object(ue.b)().t,c=Object(ie.a)().getters,n=Object(me.d)().back,i=Object(a.computed)((function(){return c.getChainId})),r=Object(a.reactive)({orderId:e.orderId+"",voucherId:e.voucherId+"",voucherSymbol:e.voucherSymbol+"",voucherImage:"",reloadImage:!1,visibleCancel:!1,isExpired:!1,oraclePrice:0}),l=Object(a.ref)(!1),s=Object(a.ref)(!0),d=Object(a.ref)(!1),u=Object(a.ref)(""),m=Object(a.reactive)({list:[]}),b=Object(a.reactive)({currencySymbol:""}),v=Object(re.c)(b).tokenValueInfo,p=oe.a;function h(e){var t;return void 0===e&&(e=!1),Object(ee.b)(this,void 0,void 0,(function(){var o,a;return Object(ee.e)(this,(function(n){switch(n.label){case 0:return r.voucherTokenSchema?(m.list=[],[4,Object(ne.d)().getVoucherInfo(r.voucherTokenSchema,r.voucherId)]):[2];case 1:o=n.sent(),a=JSON.parse(JSON.stringify(o)),r.voucherInfo=a,d.value=!0,r.voucherInfo=Object(be.a)([a])[0];try{r.voucherImage=ce.a.base64Decode((null===(t=r.voucherInfo)||void 0===t?void 0:t.URI)+"").image}catch(e){console.log(e)}return r.isExpired=ce.a.compOrEqual(ce.a.getCurrentTime(),r.voucherInfo.maturity),r.reloadImage=e,function(){var e;Object(ee.b)(this,void 0,void 0,(function(){var t,o;return Object(ee.e)(this,(function(a){switch(a.label){case 0:if(!r.voucherInfo&&r.voucherTokenSchema)return[2];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,new ae.Oracle(te.a[c.getChainId].address,c.getProvider).getPriceOfTokenId((null===(e=r.voucherTokenSchema)||void 0===e?void 0:e.address)+"",r.voucherId)];case 2:return t=a.sent(),r.oraclePrice=Number(t),[3,4];case 3:return o=a.sent(),console.error(o),[3,4];case 4:return[2]}}))}))}(),[2]}}))}))}function O(){var e,t;return Object(ee.b)(this,void 0,void 0,(function(){var o,a,c;return Object(ee.e)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),o=le.a.solvUtils.getAllocationMarket(),[4,Object(ne.b)().getOrderInfo(r.orderId)];case 1:return a=n.sent(),c={order:a.order,currency:a.order.currencyAddress.toLowerCase()!=(null===(e=r.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.address.toLowerCase())?le.a.solvUtils.getCurrenciesByAddress(o.address,"Secondary",a.order.currencyAddress):null===(t=r.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken,voucher:le.a.solvUtils.getTokenSchemaByVoucherAddress(a.order.voucherAddress),price:a.price},r.orderInfo=c,r.orderInfo.order.totalUnits=c.order.total,a.order.isValid&&function(e){r.orderItem={voucherId:e.order.tokenId,voucherSymbol:e.voucher.symbol,voucherAddress:e.voucher.address,underlyingSymbol:e.voucher.underlyingToken.symbol,underlyingDecimals:e.voucher.underlyingToken.decimals,underlyingAddress:e.voucher.underlyingToken.address,currencyAddress:e.currency.address,currencySymbol:e.currency.symbol,currencyDecimals:e.currency.decimals,minUnits:e.order.min.toString(),maxUnits:e.order.max.toString(),highest:e.price.highest.toString(),lowest:e.price.lowest.toString(),useAllowList:e.order.useAllowList,interval:e.price.interval,duration:e.price.duration,startTime:e.order.startTime,orderId:e.order.saleId,priceType:e.order.priceType,currentPrice:0==e.order.priceType?e.price.lowest:0,seller:e.order.seller,units:e.order.units.toString()},b.currencySymbol=r.orderItem.underlyingSymbol}(c),[3,3];case 2:return n.sent(),[3,3];case 3:return[2]}}))}))}function j(t){void 0===t&&(t=!0),d.value=!t,r.voucherTokenSchema=le.a.solvUtils.getTokenSchemaByVoucherSymbol(e.voucherSymbol+""),h(),O()}var f=Object(a.computed)((function(){var e,t;return r.voucherInfo?new de.a(ce.a.tokenDivDecimals((null===(e=r.voucherInfo)||void 0===e?void 0:e.units)||0,null===(t=r.voucherInfo)||void 0===t?void 0:t.underlyingDecimals)).multipliedBy(new de.a(v.price)):"0"}));var g=Object(a.computed)((function(){var e,t,o,a,c={isExpire:!1,value:"0",settlePrice:0,range:{label:"",value:""},isRefreshOraclePrice:!1};if(r.voucherInfo&&r.voucherTokenSchema){var n=ce.a.tokenDivDecimals(r.voucherInfo.units,r.voucherInfo.underlyingDecimals),i=ce.a.tokenDivDecimals(r.voucherInfo.highestPrice,r.voucherInfo.underlyingDecimals-(null===(e=r.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.decimals)),l=ce.a.tokenDivDecimals(r.voucherInfo.lowestPrice,r.voucherInfo.underlyingDecimals-(null===(t=r.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken.decimals)),s=ce.a.comp(r.voucherInfo.settlePrice,"0")?r.voucherInfo.settlePrice+"":r.oraclePrice+"";ce.a.compOrEqual(ce.a.getCurrentTime(),new Date(1e3*r.voucherInfo.maturity).getTime()/1e3)?(s=ce.a.tokenDivDecimals(s,r.voucherInfo.underlyingDecimals-(null===(o=r.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.decimals)),c.isExpire=!0,c.isRefreshOraclePrice="0"==s):s=v.price+"",c.settlePrice=Number(s),c.settlePrice=0===c.settlePrice?v.price:c.settlePrice,ce.a.comp(s,i)?c.value=new de.a(n).dividedBy(i).toString():ce.a.comp(l,s)?c.value=new de.a(n).dividedBy(l).toString():c.value=new de.a(n).dividedBy(s).toString(),ce.a.comp(s,i)?(c.range.label="Above range",c.range.value="up"):ce.a.comp(l,s)?(c.range.label="Below range",c.range.value="down"):(c.range.label="In range",c.range.value="normal"),c.value=ce.a.tokenMulDecimals(c.value,null===(a=r.voucherTokenSchema)||void 0===a?void 0:a.underlyingToken.decimals)}return c})),y=Object(a.computed)((function(){var e,t,o={status:"",highestClaimable:"0",lowestClaimable:"0",normalClaimable:"0"};if(r.voucherInfo){var a=ce.a.tokenDivDecimals(r.voucherInfo.lowestPrice,8),c=ce.a.tokenDivDecimals(r.voucherInfo.highestPrice,8),n=ce.a.tokenDivDecimals(r.voucherInfo.units,r.voucherInfo.underlyingDecimals)||"0";ce.a.comp(g.value.settlePrice,c)?o.status="up":ce.a.comp(a,g.value.settlePrice)?o.status="down":o.status="normal",o.highestClaimable=ce.a.parseThousandsValue(ce.a.hideMantissa(new de.a(n).dividedBy(new de.a(c)).toFixed(2,1))),o.lowestClaimable=ce.a.parseThousandsValue(ce.a.hideMantissa(new de.a(n).dividedBy(new de.a(a)).toFixed(2,1))),o.normalClaimable=p.formatTokenValue(ce.a.tokenMulDecimals(n,null===(e=r.voucherInfo)||void 0===e?void 0:e.underlyingDecimals),null===(t=r.voucherInfo)||void 0===t?void 0:t.underlyingDecimals,6)}return console.log("claimableInfo.value.settlePrice ===> ",g.value.settlePrice),o}));return Object(a.watch)((function(){return c.getChangeFlag}),(function(e){e&&j()}),{immediate:!0}),Object(a.watch)((function(){return c.getLastTxReceipt}),(function(e){e&&j(!1)}),{deep:!0}),{t:o,commonData:r,visibleShare:l,visibleOpensea:s,loadVoucherDetailFinish:d,originalVoucherImgUrl:u,stagedData:m,chainId:i,unitValue:f,solvMisc:p,priceRangeInfo:y,tokenValueInfo:v,claimableInfo:g,bindCancel:function(){r.orderCancelInfo={orderId:r.orderId,voucherId:r.voucherId,voucher:{units:r.orderItem.units,totalUnits:r.orderInfo.order.totalUnits,underlyingDecimals:r.orderItem.underlyingDecimals,underlyingSymbol:r.orderItem.underlyingSymbol}},r.visibleCancel=!0},handleCancelFinished:function(){n()}}}var pe=Object(a.withScopeId)("data-v-68adce54");Object(a.pushScopeId)("data-v-68adce54");var he={class:"order-buy-voucher"},Oe={class:"order-buy-voucher__header"},je={class:"order-buy-header__content"},fe={class:"header-center"},ge={class:"amount-item"},ye={class:"da-weight-600 header-item-value"},De={class:"amount-item"},Ve=Object(a.createVNode)("span",{class:"da-weight-400"},Object(a.toDisplayString)("APR"),-1),ke={class:"da-weight-600 header-item-value"},Ie={class:"order-buy-voucher__body"},Se={class:"card-form-item"},Ne={class:"suffix-item"},Be={class:"info-module"},Te={key:0,class:"purchase-limit info-item"},Ce={key:1,class:"purchase-limit info-item"},we={class:"info-module"},xe={class:"desc-text"},_e={class:"card-form-item"},Pe={class:"action-btn-module"},Fe={key:0,class:"order-no-buy"},Ae={class:"start-label"},Re={class:"start-value"},Le={key:0,class:"order-no-buy"},$e={class:"start-value"};Object(a.popScopeId)();var Me=pe((function(e,t,o,c,n,i){var r,l=Object(a.resolveComponent)("DaItem"),s=Object(a.resolveComponent)("TextTip"),d=Object(a.resolveComponent)("DaInput"),u=Object(a.resolveComponent)("DaSkeleton"),m=Object(a.resolveComponent)("DaButton"),b=Object(a.resolveComponent)("DaCard"),v=Object(a.resolveComponent)("Loading"),p=Object(a.resolveComponent)("TxFinish");return Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,null,[Object(a.createVNode)("div",he,[Object(a.createVNode)("div",Oe,[Object(a.createVNode)("div",{class:["order-buy-header__icon",{"order-buy-fixed__icon":0==e.instance.priceType}]},[Object(a.createVNode)("span",null,Object(a.toDisplayString)(0==e.instance.priceType?e.t("Fixed price"):e.t("Variable price")),1)],2),Object(a.createVNode)("div",je,[Object(a.createVNode)("div",fe,[Object(a.createVNode)("div",ge,[Object(a.createVNode)(l,null,{label:pe((function(){return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Total Price")),1)]})),value:pe((function(){return[Object(a.createVNode)("span",ye,Object(a.toDisplayString)(e.getTotalPrice)+" "+Object(a.toDisplayString)(e.instance.currencySymbol),1)]})),_:1})]),Object(a.createVNode)("div",De,[Object(a.createVNode)(l,null,{label:pe((function(){return[Object(a.createVNode)(s,{class:"da-text-tip-apr"},{content:pe((function(){return[Object(a.createVNode)("div",{style:{width:e.$filters.pxToRem(300),lineHeight:1.4}},[Object(a.createVNode)("p",null,Object(a.toDisplayString)(e.t("Expected annual percentage rate within the bond range.")),1),Object(a.createVNode)("p",null,Object(a.toDisplayString)(e.t("Settlement price is outside of bond range, please refer to the settlement conditions to see the final tokens received.")),1)],4)]})),default:pe((function(){return[Ve]})),_:1})]})),value:pe((function(){return[Object(a.createVNode)("span",ke,Object(a.toDisplayString)(e.getAPR)+" %",1)]})),_:1})])])])]),Object(a.createVNode)("div",Ie,[Object(a.createVNode)(b,{class:"order-buy-voucher__card"},{default:pe((function(){return[Object(a.createVNode)("div",Se,[Object(a.createVNode)(l,{label:e.t("Purchase Value")},{value:pe((function(){return[Object(a.createVNode)(d,{mode:"decimal",decimals:e.instance.currencyDecimals,modelValue:e.purForm.value,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.purForm.value=t}),class:"input-entry",maxlength:"32",border:!0,placeholder:"0.0",disabled:!1,onInput:e.handleInputValue,warning:e.warningInputValueForLimit||e.warningInputValueForBalance},{suffix:pe((function(){return[Object(a.createVNode)("span",{onClick:t[1]||(t[1]=function(){return e.handleMaxAvailableAmount&&e.handleMaxAvailableAmount.apply(e,arguments)}),class:"suffix-item"},Object(a.toDisplayString)(e.t("MAX")),1),Object(a.createVNode)("span",Ne,Object(a.toDisplayString)(e.instance.currencySymbol),1)]})),_:1},8,["decimals","modelValue","onInput","warning"])]})),descLabel:pe((function(){return[Object(a.createVNode)("div",Be,[e.commonData.loadOrderInfoFinished?(Object(a.openBlock)(),Object(a.createBlock)("label",Ce,[e.buyLimitInfo.limit?(Object(a.openBlock)(),Object(a.createBlock)("p",{key:0,class:["desc-text",{warning_color:e.warningInputValueForLimit}]},Object(a.toDisplayString)(e.t("Purchase limit"))+": "+Object(a.toDisplayString)(e.minLimitValue)+" - "+Object(a.toDisplayString)(e.maxLimitValue)+" "+Object(a.toDisplayString)(e.instance.currencySymbol),3)):(Object(a.openBlock)(),Object(a.createBlock)("p",{key:1,class:["desc-text",{warning_color:e.warningInputValueForLimit}]},Object(a.toDisplayString)(e.t("Max Available"))+": "+Object(a.toDisplayString)(e.maxLimitValue)+" "+Object(a.toDisplayString)(e.instance.currencySymbol),3))])):(Object(a.openBlock)(),Object(a.createBlock)("span",Te,[Object(a.createVNode)(u,{visible:!0,width:"120px",height:e.$filters.pxToRem(14)},null,8,["height"])]))]),Object(a.createVNode)("div",we,[Object(a.createVNode)("span",xe,[Object(a.createVNode)(u,{visible:!e.commonData.loadOrderInfoFinished,width:"120px",height:e.$filters.pxToRem(14)},{default:pe((function(){return[Object(a.createVNode)("span",{class:{warning_color:e.warningInputValueForBalance}},Object(a.toDisplayString)(e.t("Wallet Balance"))+": "+Object(a.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.$filters.viewTokenDivDecimals(e.walletData.walletBalance,e.instance.currencyDecimals))))+" "+Object(a.toDisplayString)(e.instance?e.instance.currencySymbol:""),3)]})),_:1},8,["visible","height"])])])]})),_:1},8,["label"])]),Object(a.createVNode)("div",_e,[Object(a.createCommentVNode)("",!0),Object(a.createVNode)("div",Pe,[e.$filters.compCurrentTime(e.$filters.getTime(1e3*e.instance.startTime))?(Object(a.openBlock)(),Object(a.createBlock)("div",Fe,[Object(a.createVNode)("span",Ae,Object(a.toDisplayString)(e.$t("Start Time(UTC)"))+": ",1),Object(a.createVNode)("span",Re,Object(a.toDisplayString)(e.$filters.dateTimeUTCFormat(e.$filters.getTime(1e3*e.instance.startTime))),1)])):(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[e.commonData.isBuyerAllowed||1!=e.instance.useAllowList?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[e.isSelfOrder?(Object(a.openBlock)(),Object(a.createBlock)(m,{key:0,size:"medium",full:!0,onClick:e.bindCancel,class:"action-btn"},{default:pe((function(){return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Cancel")),1)]})),_:1},8,["onClick"])):(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[e.commonData.isApprove?Object(a.createCommentVNode)("",!0):(Object(a.openBlock)(),Object(a.createBlock)(m,{key:0,size:"medium",full:!0,onClick:e.bindApprove,disabled:e.commonData.submitLoading,loading:e.commonData.submitLoading,class:"action-btn m-16"},{default:pe((function(){return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Approve")),1)]})),_:1},8,["onClick","disabled","loading"])),Object(a.createVNode)(m,{size:"medium",full:!0,onClick:e.handleConfirm,disabled:e.disabledConfirm||e.disabledBuyByWalletBalance,loading:e.commonData.loadingSubmit,class:"action-btn"},{default:pe((function(){return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.disabledBuyByWalletBalance&&e.commonData.isApprove?e.t("Insufficient Wallet Balance"):e.t("Buy")),1)]})),_:1},8,["onClick","disabled","loading"])],64))],64)):(Object(a.openBlock)(),Object(a.createBlock)("div",Le,[Object(a.createVNode)("span",$e,Object(a.toDisplayString)(e.t("Your address is not in the whitelist")),1)]))],64))])])]})),_:1})])]),e.commonData.visibleLoading?(Object(a.openBlock)(),Object(a.createBlock)(v,{key:0,visible:e.commonData.visibleLoading,onClose:t[3]||(t[3]=function(t){return e.commonData.visibleLoading=!1}),onTxDone:e.handleTxDone,needDone:!0},null,8,["visible","onTxDone"])):Object(a.createCommentVNode)("",!0),e.commonData.visibleTxFinish?(Object(a.openBlock)(),Object(a.createBlock)(p,{key:1,visible:e.commonData.visibleTxFinish,hash:e.commonData.txHash,title:"Purchase Completed",onClose:t[4]||(t[4]=function(t){return e.commonData.visibleTxFinish=!1}),pathName:"Flexible"===(null===(r=e.commonData.tokenSchema)||void 0===r?void 0:r.type)?"MyStandardFlexibleVoucher":""},null,8,["visible","hash","pathName"])):Object(a.createCommentVNode)("",!0)],64)})),Ue=o("e205"),Ee=o("6363"),We=o("4be1"),qe=o("5aec"),Ye=o("6dff"),He=o("52f9"),Je=o("9ddb"),ze=o("958d"),Xe=Object(a.defineComponent)({components:{DaCard:Ee.a,DaItem:qe.a,DaInput:We.a,DaButton:Ue.a,Loading:Je.a,TxFinish:He.a,DaSkeleton:z.a,TextTip:Ye.a},props:{instance:{type:Object,default:function(){}},maturity:{type:Number,default:0}},emits:["close","txEnd","onFinished","unlist","onCall"],setup:function(e,t){var o=t.emit,c=Object(a.toRefs)(e),n=c.instance,i=c.maturity,r=Object(ze.a)(n,i.value,o),l=r.t,s=r.commonData,d=r.walletData,u=r.purForm,m=r.disabledConfirm,b=r.getPrice,v=r.isAllowBuy,p=r.disabledBuyByWalletBalance,h=r.isSelfOrder,O=r.buyLimitInfo,j=r.getAPR,f=r.getTotalPrice,g=r.maxLimitValue,y=r.minLimitValue,D=r.warningInputValueForLimit,V=r.warningInputValueForBalance,k=r.parseUnitsValue,I=r.handleClose,S=r.handleConfirm,N=r.bindApprove,B=r.handleMaxAvailableAmount,T=r.handleInputValue,C=r.handleTxDone,w=r.handleMaxAvailableValue;Object(a.watch)((function(){return u.amount}),(function(){o("onCall",u.amount)}));return{t:l,commonData:s,walletData:d,purForm:u,disabledConfirm:m,getPrice:b,isAllowBuy:v,disabledBuyByWalletBalance:p,isSelfOrder:h,buyLimitInfo:O,getAPR:j,getTotalPrice:f,maxLimitValue:g,minLimitValue:y,warningInputValueForLimit:D,warningInputValueForBalance:V,parseUnitsValue:k,handleClose:I,handleConfirm:S,bindApprove:N,handleMaxAvailableAmount:B,handleInputValue:T,handleTxDone:C,handleMaxAvailableValue:w,bindCancel:function(){o("unlist")}}}});o("8f43"),o("95d2");Xe.render=Me,Xe.__scopeId="data-v-68adce54";var Ge=Xe,Ke=Object(a.withScopeId)("data-v-28c09a15");Object(a.pushScopeId)("data-v-28c09a15");var Qe={class:"order-buy-voucher"},Ze={class:"order-buy-voucher__header"},et=Object(a.createVNode)("div",{class:"order-buy-header__icon"},null,-1),tt={class:"order-buy-header__content"},ot={class:"header-center"},at={class:"order-buy-voucher__body"},ct={class:"card-form-item"},nt={class:"card-form-item"},it={class:"card-form-item"},rt={class:"card-form-item"},lt={class:"action-btn-module"};Object(a.popScopeId)();var st=Ke((function(e,t,o,c,n,i){var r=Object(a.resolveComponent)("DaSkeleton"),l=Object(a.resolveComponent)("DaCard");return Object(a.openBlock)(),Object(a.createBlock)("div",Qe,[Object(a.createVNode)("div",Ze,[et,Object(a.createVNode)("div",tt,[Object(a.createVNode)("div",ot,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]),Object(a.createVNode)("div",at,[Object(a.createVNode)(l,{class:"order-buy-voucher__card"},{default:Ke((function(){return[Object(a.createVNode)("div",ct,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(a.createVNode)("div",nt,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(a.createVNode)("div",it,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(a.createVNode)("div",rt,[Object(a.createVNode)("div",lt,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]})),_:1})])])})),dt=Object(a.defineComponent)({components:{DaCard:Ee.a,DaSkeleton:z.a},setup:function(){}});o("3e58");dt.render=st,dt.__scopeId="data-v-28c09a15";var ut=dt,mt=Object(a.defineComponent)({components:{PageWrapper:K.a,DaSkeleton:z.a,BuyVoucher:Ge,OutputHref:G.a,BuyVoucherSkeleton:ut,CancelConvertibleOrder:X.a,DaItem:J.a},setup:function(){var e=Object(me.c)().params,t=Z.e,o=Object(a.ref)("0"),c=ve(e);return{t:c.t,commonData:c.commonData,loadVoucherDetailFinish:c.loadVoucherDetailFinish,usdUnit:t,priceRangeInfo:c.priceRangeInfo,tokenValueInfo:c.tokenValueInfo,claimableInfo:c.claimableInfo,openLearnMore:function(){window.open(Q.b,"_blank")},onCall:function(e){o.value=e},solvMisc:c.solvMisc,bindCancel:c.bindCancel,handleCancelFinished:c.handleCancelFinished}}});o("0708"),o("a633"),o("ddd7");mt.render=H,mt.__scopeId="data-v-36e767e5";t.default=mt},"8a5b":function(e,t,o){},"8cc6":function(e,t,o){},"8f43":function(e,t,o){"use strict";o("20ee")},"95d2":function(e,t,o){"use strict";o("0a3d")},a633:function(e,t,o){"use strict";o("554a")},ddd7:function(e,t,o){"use strict";o("8cc6")},ee6c:function(e,t,o){}}]);
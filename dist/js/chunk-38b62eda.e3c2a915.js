(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-38b62eda"],{"1bc7":function(e,t,o){"use strict";o("ce10")},"3dc8":function(e,t,o){},"5df4":function(e,t,o){"use strict";o.r(t);o("b0c0"),o("a9e3");var a=o("7a23"),c=Object(a.withScopeId)("data-v-18e0af7c");Object(a.pushScopeId)("data-v-18e0af7c");var n={class:"order-details"},l={class:"order-details__header"},r={class:"header-left"},i={class:"header-right"},s={class:"order-details__body"},d={class:"m-72 infos-module"},u={class:"infos-module__top"},m={class:"infos-module__content"},b={class:"ava-text"},v={class:"flex-row group_12"},p={class:"text_14"},O={class:"flex-row group_12"},j={class:"text_left"},h={class:"text_29"},f={class:"text_left"},y=Object(a.createVNode)("span",{class:"text_29"},null,-1),g={class:"flex-row group_13"},D={class:"text_left"},V={class:"text_29"},k={key:1,class:"text_left_flexible"},N={class:"buy-module"},B={class:"voucher-info m-72"},I={class:"voucher-info__inner"},S={class:"voucher-wrapper"},x={key:0,class:"flex-col items-center justify-center  pag"},T=Object(a.createVNode)("i",{class:"inner"},null,-1),C={class:"voucher-module__top"},_=Object(a.createVNode)("span",{"data-v-386cf73a":"",class:"text_45"},"Vesting Information",-1),F={class:"unlock-txt flex-row"},w={class:"unlock-txt flex-row"},A={key:1,class:"unlock-txt flex-row"},$={key:0,class:"unlock-txt flex-row"},L={key:1,class:"unlock-txt flex-row"},R={class:"font-variant-numeric m-right-6"},U={class:" m-right-6"},M={class:"font-variant-numeric"},P=Object(a.createTextVNode)("% "),W={class:"voucher-module__content"},z={class:"text_50"};Object(a.popScopeId)();var H=c((function(e,t,o,H,E,J){var X=Object(a.resolveComponent)("DaSkeleton"),Y=Object(a.resolveComponent)("OutputHref"),q=Object(a.resolveComponent)("DaImage"),G=Object(a.resolveComponent)("BuyVoucher"),K=Object(a.resolveComponent)("BuyVoucherSkeleton"),Q=Object(a.resolveComponent)("PageWrapper"),Z=Object(a.resolveComponent)("CancelVestingOrder");return Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,null,[Object(a.createVNode)(Q,{showBreadcrumbs:!0},{default:c((function(){var o,H,E,J,Q,Z;return[Object(a.createVNode)("div",n,[Object(a.createVNode)("div",l,[Object(a.createVNode)(X,{visible:!(null!==(o=e.commonData.voucherTokenSchema)&&void 0!==o&&o.name),height:e.$filters.pxToRem(36),width:e.$filters.pxToRem(320),parentWidth:"auto"},{default:c((function(){var t,o,c;return[Object(a.createVNode)("div",r,[Object(a.createVNode)("img",{src:e.$filters.getTokenLocalLogo(null===(t=e.commonData.voucherTokenSchema)||void 0===t?void 0:t.logoURI,null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol),class:"token-logo"},null,8,["src"]),Object(a.createVNode)("span",null," Order NO."+Object(a.toDisplayString)(e.commonData.orderId)+" - "+Object(a.toDisplayString)(null===(c=e.commonData.voucherTokenSchema)||void 0===c?void 0:c.name),1)])]})),_:1},8,["visible","height","width"]),Object(a.createVNode)("div",i,[Object(a.createVNode)(Y,{voucherId:e.commonData.voucherId,voucherAddress:null===(H=e.commonData.voucherTokenSchema)||void 0===H?void 0:H.address,underlyingSymbol:null===(E=e.commonData.voucherTokenSchema)||void 0===E?void 0:E.underlyingToken.symbol,underlyingAddress:null===(J=e.commonData.voucherTokenSchema)||void 0===J?void 0:J.underlyingToken.address,visibleOpensea:!1},null,8,["voucherId","voucherAddress","underlyingSymbol","underlyingAddress"])])]),Object(a.createVNode)("div",s,[Object(a.createVNode)("div",d,[Object(a.createVNode)("div",u,["Vesting"===(null===(Q=e.commonData.voucherInfo)||void 0===Q?void 0:Q.voucherType)?(Object(a.openBlock)(),Object(a.createBlock)(q,{key:0,src:e.commonData.voucherImage,urlList:[e.originalVoucherImgUrl],showReload:!0,showPreview:!0,reload:e.commonData.reloadImage,onLoadFinished:t[1]||(t[1]=function(t){return e.commonData.reloadImage=!1}),class:"cher-image__entry"},null,8,["src","urlList","reload"])):(Object(a.openBlock)(),Object(a.createBlock)(X,{key:1,visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(212)},{default:c((function(){return[e.commonData.voucherImage?(Object(a.openBlock)(),Object(a.createBlock)("img",{key:0,src:e.commonData.voucherImage,class:"cher-image__entry"},null,8,["src"])):Object(a.createCommentVNode)("",!0)]})),_:1},8,["visible","height"]))]),Object(a.createVNode)("div",m,[Object(a.createVNode)("span",b,[Object(a.createVNode)(X,{visible:!e.commonData.orderInfo,height:e.$filters.pxToRem(18),width:e.$filters.pxToRem(120)},{default:c((function(){var t;return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Available"))+" ("+Object(a.toDisplayString)(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.underlyingSymbol)+") ",1)]})),_:1},8,["visible","height","width"])]),Object(a.createVNode)("div",v,[Object(a.createVNode)("span",p,[Object(a.createVNode)(X,{visible:!e.commonData.orderInfo,height:e.$filters.pxToRem(18),width:e.$filters.pxToRem(64)},{default:c((function(){var t,o;return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.solvMisc.formatOrderPrice((null===(t=e.commonData.orderInfo.order)||void 0===t?void 0:t.units)+"",(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.underlyingDecimals)+"")),1)]})),_:1},8,["visible","height","width"])])]),Object(a.createVNode)("div",O,[Object(a.createVNode)(X,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(18)},{default:c((function(){var t,o,c;return["Vesting"===(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:0},[Object(a.createVNode)("span",j,Object(a.toDisplayString)(e.t("Claimable"))+" ("+Object(a.toDisplayString)(null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol)+") ",1),Object(a.createVNode)("span",h,Object(a.toDisplayString)(e.t("Locked"))+" ("+Object(a.toDisplayString)(null===(c=e.commonData.voucherTokenSchema)||void 0===c?void 0:c.underlyingToken.symbol)+") ",1)],64)):(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[Object(a.createVNode)("span",f,Object(a.toDisplayString)(e.t("Release Start Date")),1),y],64))]})),_:1},8,["visible","height"])]),Object(a.createVNode)("div",g,[Object(a.createVNode)(X,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(18)},{default:c((function(){var t,o,c,n,l,r,i,s,d;return["Vesting"===(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:0},[Object(a.createVNode)("span",D,Object(a.toDisplayString)(e.solvMisc.formatOrderPrice((null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.availableClaimAmount)+"",(null===(c=e.commonData.voucherInfo)||void 0===c?void 0:c.underlyingDecimals)+"")),1),Object(a.createVNode)("span",V,Object(a.toDisplayString)(e.solvMisc.formatOrderPrice((null===(n=e.commonData.voucherInfo)||void 0===n?void 0:n.lockAmount)+"",(null===(l=e.commonData.voucherInfo)||void 0===l?void 0:l.underlyingDecimals)+"")),1)],64)):(Object(a.openBlock)(),Object(a.createBlock)("span",k,Object(a.toDisplayString)(null!==(r=e.commonData.voucherInfo)&&void 0!==r&&r.tgeTime&&(null===(i=e.commonData.voucherInfo)||void 0===i?void 0:i.tgeTime)>0?e.$filters.dateUTCFormat(1e3*Number(null===(s=e.commonData.voucherInfo)||void 0===s?void 0:s.tgeTime)):e.t("To be determined, no later than ")+e.$filters.dateUTCFormat(1e3*Number(null===(d=e.commonData.voucherInfo)||void 0===d?void 0:d.latestStartTime))),1))]})),_:1},8,["visible","height"])])])]),Object(a.createVNode)("div",N,[e.commonData.orderItem&&e.loadVoucherDetailFinish?(Object(a.openBlock)(),Object(a.createBlock)(G,{key:0,instance:e.commonData.orderItem,onUnlist:e.bindCancel},null,8,["instance","onUnlist"])):(Object(a.openBlock)(),Object(a.createBlock)(K,{key:1}))]),Object(a.createVNode)("div",B,[Object(a.createVNode)("div",I,[Object(a.createVNode)("div",S,[e.commonData.voucherInfo?(Object(a.openBlock)(),Object(a.createBlock)("div",x,[Object(a.createVNode)("span",null,Object(a.toDisplayString)(e.t(e.$filters.formatReleaseType((null===(Z=e.commonData.voucherInfo)||void 0===Z?void 0:Z.releaseType)+""))),1),T])):Object(a.createCommentVNode)("",!0)]),Object(a.createVNode)("div",C,[Object(a.createVNode)(X,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(72),parentWidth:"auto"},{default:c((function(){var t,o,c,n,l,r,i,s,d,u;return[_,e.commonData.voucherInfo?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:0},[0==(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.releaseType)?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:0},["Vesting"===e.commonData.voucherInfo.voucherType?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:0},[Object(a.createVNode)("span",F,Object(a.toDisplayString)(e.$t("Start From (UTC)"))+" : "+Object(a.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.startFrom))),1),Object(a.createVNode)("span",w,Object(a.toDisplayString)(e.$t("Finish At (UTC)"))+" : "+Object(a.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(c=e.commonData.voucherInfo)||void 0===c?void 0:c.finishAt))),1)],64)):(Object(a.openBlock)(),Object(a.createBlock)("span",A,Object(a.toDisplayString)(e.$t("Vesting Period"))+" : "+Object(a.toDisplayString)(null!==(n=e.commonData.voucherInfo)&&void 0!==n&&n.terms?(null===(l=e.commonData.voucherInfo)||void 0===l?void 0:l.terms[0])/86400:0)+" "+Object(a.toDisplayString)(e.t("Days")),1))],64)):Object(a.createCommentVNode)("",!0),1==(null===(r=e.commonData.voucherInfo)||void 0===r?void 0:r.releaseType)?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},["Vesting"===e.commonData.voucherInfo.voucherType?(Object(a.openBlock)(),Object(a.createBlock)("span",$,Object(a.toDisplayString)(e.$t("Vesting Date (UTC)"))+": "+Object(a.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(i=e.commonData.voucherInfo)||void 0===i?void 0:i.startFrom))),1)):(Object(a.openBlock)(),Object(a.createBlock)("span",L,Object(a.toDisplayString)(e.$t("Vesting Period"))+" : "+Object(a.toDisplayString)(null!==(s=e.commonData.voucherInfo)&&void 0!==s&&s.terms?(null===(d=e.commonData.voucherInfo)||void 0===d?void 0:d.terms[0])/86400:0)+" "+Object(a.toDisplayString)(e.t("Days")),1))],64)):Object(a.createCommentVNode)("",!0),2==(null===(u=e.commonData.voucherInfo)||void 0===u?void 0:u.releaseType)?(Object(a.openBlock)(!0),Object(a.createBlock)(a.Fragment,{key:2},Object(a.renderList)(e.stagedData.list,(function(t,o){return Object(a.openBlock)(),Object(a.createBlock)("p",{class:"unlock-txt flex-row",key:o},[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Unlock"))+" "+Object(a.toDisplayString)(o+1)+"： ",1),Object(a.createVNode)("span",R,Object(a.toDisplayString)(null==t?void 0:t.date)+", ",1),Object(a.createVNode)("span",U,Object(a.toDisplayString)(e.t("Unlock")),1),Object(a.createVNode)("span",M,Object(a.toDisplayString)(null==t?void 0:t.radio),1),P])})),128)):Object(a.createCommentVNode)("",!0)],64)):Object(a.createCommentVNode)("",!0)]})),_:1},8,["visible","height"])]),Object(a.createVNode)("div",W,[Object(a.createVNode)(X,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(72),parentWidth:"auto"},{default:c((function(){var t,o,c,n;return[Object(a.createVNode)("span",z,["Vesting"===(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:0},[0==(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.releaseType)?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:0},[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Unlock when vesting starts, and linearly unlock during the vesting period")),1)],64)):Object(a.createCommentVNode)("",!0),1==(null===(c=e.commonData.voucherInfo)||void 0===c?void 0:c.releaseType)?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("One-time unlock on vesting date")),1)],64)):Object(a.createCommentVNode)("",!0),2==(null===(n=e.commonData.voucherInfo)||void 0===n?void 0:n.releaseType)?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:2},[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Staged unlock based on vesting date")),1)],64)):Object(a.createCommentVNode)("",!0)],64)):(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Date and time are all UTC. Vouchers from IVO will be converted to vesting vouchers at public sale and tokens will start to be unlocked then.")),1)],64))])]})),_:1},8,["visible","height"])])])])])])]})),_:1}),e.commonData.visibleCancel?(Object(a.openBlock)(),Object(a.createBlock)(Z,{key:0,instance:e.commonData.orderCancelInfo,visible:e.commonData.visibleCancel,onClose:t[2]||(t[2]=function(t){return e.commonData.visibleCancel=!1}),onOnFinished:e.handleCancelFinished},null,8,["instance","visible","onOnFinished"])):Object(a.createCommentVNode)("",!0)],64)})),E=o("e904"),J=o("9998"),X=o("6789"),Y=o("a6f3"),q=o("f41c"),G=o("abc1c"),K=o("6c02"),Q=Object(a.withScopeId)("data-v-0d29d628");Object(a.pushScopeId)("data-v-0d29d628");var Z={class:"order-buy-voucher"},ee={class:"order-buy-voucher__header"},te={class:"order-buy-header__content"},oe={class:"header-center"},ae={class:"amount-item"},ce=Object(a.createVNode)("span",{class:"amount-text"},"1",-1),ne=Object(a.createVNode)("p",{class:"amount-text-line amount-item"},"=",-1),le={class:"amount-item"},re={class:"amount-text"},ie={class:"order-buy-voucher__body"},se={class:"suffix-item"},de=Object(a.createVNode)("div",{class:"or-txt"},"OR",-1),ue={class:"card-form-item"},me={class:"suffix-item"},be={class:"desc-text"},ve={class:"card-form-item m-65"},pe={class:"action-btn-module"},Oe={key:0,class:"order-no-buy"},je={class:"start-label"},he={class:"start-value"},fe={key:0,class:"order-no-buy"},ye={class:"start-value"};Object(a.popScopeId)();var ge=Q((function(e,t,o,c,n,l){var r,i=Object(a.resolveComponent)("DaInput"),s=Object(a.resolveComponent)("DaSkeleton"),d=Object(a.resolveComponent)("DaItem"),u=Object(a.resolveComponent)("DaButton"),m=Object(a.resolveComponent)("DaCard"),b=Object(a.resolveComponent)("Loading"),v=Object(a.resolveComponent)("TxFinish");return Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,null,[Object(a.createVNode)("div",Z,[Object(a.createVNode)("div",ee,[Object(a.createVNode)("div",{class:["order-buy-header__icon",{"order-buy-fixed__icon":0==e.instance.priceType}]},[Object(a.createVNode)("span",null,Object(a.toDisplayString)(0==e.instance.priceType?e.t("Fixed price"):e.t("Variable price")),1)],2),Object(a.createVNode)("div",te,[Object(a.createVNode)("div",oe,[Object(a.createVNode)("p",ae,[ce,Object(a.createTextVNode)(" "+Object(a.toDisplayString)(e.instance.underlyingSymbol),1)]),ne,Object(a.createVNode)("p",le,[Object(a.createVNode)("span",re,Object(a.toDisplayString)(e.getPrice),1),Object(a.createTextVNode)(" "+Object(a.toDisplayString)(e.instance.currencySymbol),1)])])])]),Object(a.createVNode)("div",ie,[Object(a.createVNode)(m,{class:"order-buy-voucher__card"},{default:Q((function(){return[Object(a.createVNode)(d,{label:e.t("Purchase By Amount")},{value:Q((function(){return[Object(a.createVNode)(i,{mode:"decimal",decimals:"unit"===e.commonData.selectedActive?e.instance.underlyingDecimals:e.instance.currencyDecimals,modelValue:e.purForm.amount,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.purForm.amount=t}),class:"input-entry",maxlength:"32",onInput:e.handleInputAmount,onFocus:e.handleInputAmountFocus,onBlur:e.handleInputAmountBlur,border:!0,disabled:e.isSelfOrder||"0"==e.buyLimitInfo.maxBuyAmount,warning:e.purForm.warningAmount},{suffix:Q((function(){return[Object(a.createVNode)("span",{onClick:t[1]||(t[1]=function(){return e.handleMaxAvailableAmount&&e.handleMaxAvailableAmount.apply(e,arguments)}),class:"suffix-item"},Object(a.toDisplayString)(e.t("MAX")),1),Object(a.createVNode)("span",se,Object(a.toDisplayString)(e.instance.underlyingSymbol),1)]})),_:1},8,["decimals","modelValue","onInput","onFocus","onBlur","disabled","warning"])]})),descLabel:Q((function(){return[Object(a.createVNode)(s,{visible:!e.commonData.loadOrderInfoFinished,width:"120px"},{default:Q((function(){var t,o;return[e.buyLimitInfo.limit?(Object(a.openBlock)(),Object(a.createBlock)("p",{key:0,class:["desc-text",[e.purForm.warningAmount?"warning_color":""]]},Object(a.toDisplayString)(e.t("Purchase limit"))+": "+Object(a.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.buyLimitInfo.minBuyAmount)))+" - "+Object(a.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.buyLimitInfo.maxBuyAmount)))+" "+Object(a.toDisplayString)(e.commonData.voucherInfo?null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.underlyingSymbol:""),3)):(Object(a.openBlock)(),Object(a.createBlock)("p",{key:1,class:["desc-text",[e.purForm.warningAmount?"warning_color":""]]},Object(a.toDisplayString)(e.t("Max Available"))+": "+Object(a.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.buyLimitInfo.maxBuyAmount)))+" "+Object(a.toDisplayString)(e.commonData.voucherInfo?null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.underlyingSymbol:""),3))]})),_:1},8,["visible"])]})),_:1},8,["label"]),de,Object(a.createVNode)("div",ue,[Object(a.createVNode)(d,{label:e.t("Purchase By Value")},{value:Q((function(){return[Object(a.createVNode)(i,{mode:"decimal",decimals:e.instance.currencyDecimals,modelValue:e.purForm.value,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.purForm.value=t}),class:"input-entry",maxlength:"32",border:!0,onInput:e.handleInputValue,onFocus:e.handleInputValueFocus,onBlur:e.handleInputValueBlur,disabled:e.isSelfOrder||"0"==e.buyLimitInfo.maxBuyAmount,warning:e.purForm.warningValue},{suffix:Q((function(){return[Object(a.createVNode)("span",{onClick:t[3]||(t[3]=function(){return e.handleMaxAvailableValue&&e.handleMaxAvailableValue.apply(e,arguments)}),class:"suffix-item"},Object(a.toDisplayString)(e.t("MAX")),1),Object(a.createVNode)("span",me,Object(a.toDisplayString)(e.instance&&e.instance.currencySymbol),1)]})),_:1},8,["decimals","modelValue","onInput","onFocus","onBlur","disabled","warning"])]})),descLabel:Q((function(){return[Object(a.createVNode)("span",be,[Object(a.createVNode)(s,{visible:!e.commonData.loadWalletBalanceFinished,width:"120px"},{default:Q((function(){return[Object(a.createVNode)("span",{class:[e.purForm.warningValue?"warning_color":""]},Object(a.toDisplayString)(e.t("Wallet Balance"))+": "+Object(a.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.$filters.viewTokenDivDecimals(e.walletData.walletBalance,e.instance.currencyDecimals))))+" "+Object(a.toDisplayString)(e.instance?e.instance.currencySymbol:""),3)]})),_:1},8,["visible"])])]})),_:1},8,["label"])]),Object(a.createVNode)("div",ve,[Object(a.createVNode)("div",pe,[e.$filters.compCurrentTime(e.$filters.getTime(1e3*e.instance.startTime))?(Object(a.openBlock)(),Object(a.createBlock)("div",Oe,[Object(a.createVNode)("span",je,Object(a.toDisplayString)(e.$t("Start Time(UTC)"))+": ",1),Object(a.createVNode)("span",he,Object(a.toDisplayString)(e.$filters.dateTimeUTCFormat(e.$filters.getTime(1e3*e.instance.startTime))),1)])):(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[e.commonData.isBuyerAllowed||1!=e.instance.useAllowList?(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[e.isSelfOrder?(Object(a.openBlock)(),Object(a.createBlock)(u,{key:0,size:"medium",full:!0,onClick:e.bindCancel,class:"action-btn"},{default:Q((function(){return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Cancel")),1)]})),_:1},8,["onClick"])):(Object(a.openBlock)(),Object(a.createBlock)(a.Fragment,{key:1},[e.commonData.isApprove?Object(a.createCommentVNode)("",!0):(Object(a.openBlock)(),Object(a.createBlock)(u,{key:0,size:"medium",full:!0,onClick:e.bindApprove,disabled:e.commonData.submitLoading,loading:e.commonData.submitLoading,class:"action-btn m-16"},{default:Q((function(){return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.t("Approve")),1)]})),_:1},8,["onClick","disabled","loading"])),Object(a.createVNode)(u,{size:"medium",full:!0,onClick:e.handleConfirm,disabled:e.disabledConfirm||e.disabledBuyByWalletBalance,loading:e.commonData.loadingSubmit,class:"action-btn"},{default:Q((function(){return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.disabledBuyByWalletBalance?e.t("buy"):e.t("Buy")),1)]})),_:1},8,["onClick","disabled","loading"])],64))],64)):(Object(a.openBlock)(),Object(a.createBlock)("div",fe,[Object(a.createVNode)("span",ye,Object(a.toDisplayString)(e.t("Your address is not in the whitelist")),1)]))],64))])])]})),_:1})])]),e.commonData.visibleLoading?(Object(a.openBlock)(),Object(a.createBlock)(b,{key:0,visible:e.commonData.visibleLoading,onClose:t[5]||(t[5]=function(t){return e.commonData.visibleLoading=!1}),onTxDone:e.handleTxDone,needDone:!0},null,8,["visible","onTxDone"])):Object(a.createCommentVNode)("",!0),e.commonData.visibleTxFinish?(Object(a.openBlock)(),Object(a.createBlock)(v,{key:1,visible:e.commonData.visibleTxFinish,hash:e.commonData.txHash,title:"Purchase Completed",onClose:t[6]||(t[6]=function(t){return e.commonData.visibleTxFinish=!1}),pathName:"Flexible"===(null===(r=e.commonData.tokenSchema)||void 0===r?void 0:r.type)?"MyStandardFlexibleVoucher":""},null,8,["visible","hash","pathName"])):Object(a.createCommentVNode)("",!0)],64)})),De=o("e205"),Ve=o("6363"),ke=o("4be1"),Ne=o("5aec"),Be=o("52f9"),Ie=o("9ddb"),Se=o("27a7"),xe=Object(a.defineComponent)({components:{DaCard:Ve.a,DaItem:Ne.a,DaInput:ke.a,DaButton:De.a,Loading:Ie.a,TxFinish:Be.a,DaSkeleton:J.a},props:{instance:{type:Object,default:function(){}}},emits:["close","txEnd","onFinished","unlist"],setup:function(e,t){var o=t.emit,c=Object(a.toRefs)(e).instance,n=Object(Se.a)(c,o);return{t:n.t,commonData:n.commonData,walletData:n.walletData,purForm:n.purForm,disabledConfirm:n.disabledConfirm,getPrice:n.getPrice,isAllowBuy:n.isAllowBuy,maxLimitPurchasingAmount:n.maxLimitPurchasingAmount,tokenValueInfo:n.tokenValueInfo,disabledBuyByWalletBalance:n.disabledBuyByWalletBalance,isSelfOrder:n.isSelfOrder,buyLimitInfo:n.buyLimitInfo,handleClose:n.handleClose,handleConfirm:n.handleConfirm,bindApprove:n.bindApprove,handleInputAmount:n.handleInputAmount,handleInputAmountFocus:n.handleInputAmountFocus,handleInputAmountBlur:n.handleInputAmountBlur,handleMaxAvailableAmount:n.handleMaxAvailableAmount,handleInputValue:n.handleInputValue,handleInputValueFocus:n.handleInputValueFocus,handleInputValueBlur:n.handleInputValueBlur,handleTxDone:n.handleTxDone,handleMaxAvailableValue:n.handleMaxAvailableValue,bindCancel:function(){o("unlist")}}}});o("ea2c");xe.render=ge,xe.__scopeId="data-v-0d29d628";var Te=xe,Ce=Object(a.withScopeId)("data-v-dc970c3c");Object(a.pushScopeId)("data-v-dc970c3c");var _e={class:"order-buy-voucher"},Fe={class:"order-buy-voucher__header"},we=Object(a.createVNode)("div",{class:"order-buy-header__icon"},null,-1),Ae={class:"order-buy-header__content"},$e={class:"header-center"},Le={class:"order-buy-voucher__body"},Re={class:"card-form-item"},Ue={class:"card-form-item"},Me={class:"card-form-item"},Pe={class:"card-form-item"},We={class:"action-btn-module"};Object(a.popScopeId)();var ze=Ce((function(e,t,o,c,n,l){var r=Object(a.resolveComponent)("DaSkeleton"),i=Object(a.resolveComponent)("DaCard");return Object(a.openBlock)(),Object(a.createBlock)("div",_e,[Object(a.createVNode)("div",Fe,[we,Object(a.createVNode)("div",Ae,[Object(a.createVNode)("div",$e,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]),Object(a.createVNode)("div",Le,[Object(a.createVNode)(i,{class:"order-buy-voucher__card"},{default:Ce((function(){return[Object(a.createVNode)("div",Re,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(a.createVNode)("div",Ue,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(a.createVNode)("div",Me,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(a.createVNode)("div",Pe,[Object(a.createVNode)("div",We,[Object(a.createVNode)(r,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]})),_:1})])])})),He=Object(a.defineComponent)({components:{DaCard:Ve.a,DaSkeleton:J.a},setup:function(){}});o("fe76");He.render=ze,He.__scopeId="data-v-dc970c3c";var Ee=He,Je=Object(a.defineComponent)({components:{PageWrapper:q.a,DaSkeleton:J.a,BuyVoucher:Te,OutputHref:Y.a,BuyVoucherSkeleton:Ee,DaImage:E.a,CancelVestingOrder:X.b},setup:function(){var e=Object(K.c)().params,t=Object(G.a)(e),o=t.t,a=t.commonData,c=t.loadVoucherDetailFinish,n=t.originalVoucherImgUrl,l=t.stagedData,r=t.solvMisc,i=t.bindCancel,s=t.handleCancelFinished;return document.body.scrollTop=document.documentElement.scrollTop=0,{t:o,commonData:a,loadVoucherDetailFinish:c,originalVoucherImgUrl:n,stagedData:l,solvMisc:r,bindCancel:i,handleCancelFinished:s}}});o("1bc7");Je.render=H,Je.__scopeId="data-v-18e0af7c";t.default=Je},"9d82":function(e,t,o){},ce10:function(e,t,o){},ea2c:function(e,t,o){"use strict";o("3dc8")},fe76:function(e,t,o){"use strict";o("9d82")}}]);
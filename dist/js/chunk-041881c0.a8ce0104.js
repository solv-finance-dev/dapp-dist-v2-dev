(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-041881c0"],{5938:function(e,t,o){},"5df4":function(e,t,o){"use strict";o.r(t);o("b0c0"),o("a9e3");var c=o("7a23"),n=Object(c.withScopeId)("data-v-4f7c963f");Object(c.pushScopeId)("data-v-4f7c963f");var a={class:"order-details"},r={class:"order-details__header"},l={class:"header-left"},i={class:"header-right"},s={class:"order-details__body"},d={class:"m-72 infos-module"},u={class:"infos-module__top"},m={class:"infos-module__content"},b={class:"ava-text"},v={class:"flex-row group_12"},h={class:"text_14"},O={class:"flex-row group_12"},p={class:"text_left"},j={class:"text_29"},f={class:"text_left"},y=Object(c.createVNode)("span",{class:"text_29"},null,-1),g={class:"flex-row group_13"},D={class:"text_left"},k={class:"text_29"},V={key:1,class:"text_left_flexible"},I={class:"buy-module"},S={class:"voucher-info m-72"},B={class:"voucher-info__inner"},N={class:"voucher-wrapper"},T={key:0,class:"flex-col items-center justify-center  pag"},x=Object(c.createVNode)("i",{class:"inner"},null,-1),C={class:"voucher-module__top"},_=Object(c.createVNode)("span",{"data-v-386cf73a":"",class:"text_45"},"Vesting Information",-1),w={class:"unlock-txt flex-row"},A={class:"unlock-txt flex-row"},F={key:1,class:"unlock-txt flex-row"},$={key:0,class:"unlock-txt flex-row"},U={key:1,class:"unlock-txt flex-row"},L={class:"voucher-module__content"},R={class:"text_50"};Object(c.popScopeId)();var M=n((function(e,t,o,M,P,W){var z=Object(c.resolveComponent)("DaSkeleton"),H=Object(c.resolveComponent)("OutputHref"),E=Object(c.resolveComponent)("DaImage"),J=Object(c.resolveComponent)("BuyVoucher"),X=Object(c.resolveComponent)("BuyVoucherSkeleton"),Y=Object(c.resolveComponent)("PageWrapper"),q=Object(c.resolveComponent)("CancelVestingOrder");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)(Y,{showBreadcrumbs:!0},{default:n((function(){var o,M,P,W,Y,q;return[Object(c.createVNode)("div",a,[Object(c.createVNode)("div",r,[Object(c.createVNode)(z,{visible:!(null!==(o=e.commonData.voucherTokenSchema)&&void 0!==o&&o.name),height:e.$filters.pxToRem(36),width:e.$filters.pxToRem(320),parentWidth:"auto"},{default:n((function(){var t,o,n;return[Object(c.createVNode)("div",l,[Object(c.createVNode)("img",{src:e.$filters.getTokenLocalLogo(null===(t=e.commonData.voucherTokenSchema)||void 0===t?void 0:t.logoURI,null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol),class:"token-logo"},null,8,["src"]),Object(c.createVNode)("span",null," Order NO."+Object(c.toDisplayString)(e.commonData.orderId)+" - "+Object(c.toDisplayString)(null===(n=e.commonData.voucherTokenSchema)||void 0===n?void 0:n.name),1)])]})),_:1},8,["visible","height","width"]),Object(c.createVNode)("div",i,[Object(c.createVNode)(H,{voucherId:e.commonData.voucherId,voucherAddress:null===(M=e.commonData.voucherTokenSchema)||void 0===M?void 0:M.address,underlyingSymbol:null===(P=e.commonData.voucherTokenSchema)||void 0===P?void 0:P.underlyingToken.symbol,underlyingAddress:null===(W=e.commonData.voucherTokenSchema)||void 0===W?void 0:W.underlyingToken.address,visibleOpensea:!1},null,8,["voucherId","voucherAddress","underlyingSymbol","underlyingAddress"])])]),Object(c.createVNode)("div",s,[Object(c.createVNode)("div",d,[Object(c.createVNode)("div",u,["Vesting"===(null===(Y=e.commonData.voucherInfo)||void 0===Y?void 0:Y.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(E,{key:0,src:e.commonData.voucherImage,urlList:[e.originalVoucherImgUrl],showReload:!0,showPreview:!0,reload:e.commonData.reloadImage,onLoadFinished:t[1]||(t[1]=function(t){return e.commonData.reloadImage=!1}),class:"cher-image__entry"},null,8,["src","urlList","reload"])):(Object(c.openBlock)(),Object(c.createBlock)(z,{key:1,visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(212)},{default:n((function(){return[e.commonData.voucherImage?(Object(c.openBlock)(),Object(c.createBlock)("img",{key:0,src:e.commonData.voucherImage,class:"cher-image__entry"},null,8,["src"])):Object(c.createCommentVNode)("",!0)]})),_:1},8,["visible","height"]))]),Object(c.createVNode)("div",m,[Object(c.createVNode)("span",b,[Object(c.createVNode)(z,{visible:!e.commonData.orderInfo,height:e.$filters.pxToRem(18),width:e.$filters.pxToRem(120)},{default:n((function(){var t;return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Available"))+" ("+Object(c.toDisplayString)(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.underlyingSymbol)+") ",1)]})),_:1},8,["visible","height","width"])]),Object(c.createVNode)("div",v,[Object(c.createVNode)("span",h,[Object(c.createVNode)(z,{visible:!e.commonData.orderInfo,height:e.$filters.pxToRem(18),width:e.$filters.pxToRem(64)},{default:n((function(){var t,o;return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.solvMisc.formatOrderPrice((null===(t=e.commonData.orderInfo.order)||void 0===t?void 0:t.units)+"",(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.underlyingDecimals)+"")),1)]})),_:1},8,["visible","height","width"])])]),Object(c.createVNode)("div",O,[Object(c.createVNode)(z,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(18)},{default:n((function(){var t,o,n;return["Vesting"===(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("span",p,Object(c.toDisplayString)(e.t("Claimable"))+" ("+Object(c.toDisplayString)(null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol)+") ",1),Object(c.createVNode)("span",j,Object(c.toDisplayString)(e.t("Locked"))+" ("+Object(c.toDisplayString)(null===(n=e.commonData.voucherTokenSchema)||void 0===n?void 0:n.underlyingToken.symbol)+") ",1)],64)):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("span",f,Object(c.toDisplayString)(e.t("Release Start Date")),1),y],64))]})),_:1},8,["visible","height"])]),Object(c.createVNode)("div",g,[Object(c.createVNode)(z,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(18)},{default:n((function(){var t,o,n,a,r,l,i,s,d;return["Vesting"===(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("span",D,Object(c.toDisplayString)(e.solvMisc.formatOrderPrice((null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.availableClaimAmount)+"",(null===(n=e.commonData.voucherInfo)||void 0===n?void 0:n.underlyingDecimals)+"")),1),Object(c.createVNode)("span",k,Object(c.toDisplayString)(e.solvMisc.formatOrderPrice((null===(a=e.commonData.voucherInfo)||void 0===a?void 0:a.lockAmount)+"",(null===(r=e.commonData.voucherInfo)||void 0===r?void 0:r.underlyingDecimals)+"")),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)("span",V,Object(c.toDisplayString)(null!==(l=e.commonData.voucherInfo)&&void 0!==l&&l.tgeTime&&(null===(i=e.commonData.voucherInfo)||void 0===i?void 0:i.tgeTime)>0?e.$filters.dateUTCFormat(1e3*Number(null===(s=e.commonData.voucherInfo)||void 0===s?void 0:s.tgeTime)):e.t("To be determined, no later than ")+e.$filters.dateUTCFormat(1e3*Number(null===(d=e.commonData.voucherInfo)||void 0===d?void 0:d.latestStartTime))),1))]})),_:1},8,["visible","height"])])])]),Object(c.createVNode)("div",I,[e.commonData.orderItem&&e.loadVoucherDetailFinish?(Object(c.openBlock)(),Object(c.createBlock)(J,{key:0,instance:e.commonData.orderItem,onUnlist:e.bindCancel},null,8,["instance","onUnlist"])):(Object(c.openBlock)(),Object(c.createBlock)(X,{key:1}))]),Object(c.createVNode)("div",S,[Object(c.createVNode)("div",B,[Object(c.createVNode)("div",N,[e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)("div",T,[Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t(e.$filters.formatReleaseType((null===(q=e.commonData.voucherInfo)||void 0===q?void 0:q.releaseType)+""))),1),x])):Object(c.createCommentVNode)("",!0)]),Object(c.createVNode)("div",C,[Object(c.createVNode)(z,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(72),parentWidth:"auto"},{default:n((function(){var t,o,n,a,r,l,i,s,d,u;return[_,e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[0==(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},["Vesting"===e.commonData.voucherInfo.voucherType?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("span",w,Object(c.toDisplayString)(e.$t("Start From (UTC)"))+" : "+Object(c.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.startFrom))),1),Object(c.createVNode)("span",A,Object(c.toDisplayString)(e.$t("Finish At (UTC)"))+" : "+Object(c.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(n=e.commonData.voucherInfo)||void 0===n?void 0:n.finishAt))),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)("span",F,Object(c.toDisplayString)(e.$t("Vesting Period"))+" : "+Object(c.toDisplayString)(null!==(a=e.commonData.voucherInfo)&&void 0!==a&&a.terms?(null===(r=e.commonData.voucherInfo)||void 0===r?void 0:r.terms[0])/86400:0)+" "+Object(c.toDisplayString)(e.t("Days")),1))],64)):Object(c.createCommentVNode)("",!0),1==(null===(l=e.commonData.voucherInfo)||void 0===l?void 0:l.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},["Vesting"===e.commonData.voucherInfo.voucherType?(Object(c.openBlock)(),Object(c.createBlock)("span",$,Object(c.toDisplayString)(e.$t("Vesting Date (UTC)"))+": "+Object(c.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(i=e.commonData.voucherInfo)||void 0===i?void 0:i.startFrom))),1)):(Object(c.openBlock)(),Object(c.createBlock)("span",U,Object(c.toDisplayString)(e.$t("Vesting Period"))+" : "+Object(c.toDisplayString)(null!==(s=e.commonData.voucherInfo)&&void 0!==s&&s.terms?(null===(d=e.commonData.voucherInfo)||void 0===d?void 0:d.terms[0])/86400:0)+" "+Object(c.toDisplayString)(e.t("Days")),1))],64)):Object(c.createCommentVNode)("",!0),2==(null===(u=e.commonData.voucherInfo)||void 0===u?void 0:u.releaseType)?(Object(c.openBlock)(!0),Object(c.createBlock)(c.Fragment,{key:2},Object(c.renderList)(e.stagedData.list,(function(t,o){return Object(c.openBlock)(),Object(c.createBlock)("span",{class:"unlock-txt flex-row",key:o},Object(c.toDisplayString)(e.t("Unlock"))+" "+Object(c.toDisplayString)(o+1)+"："+Object(c.toDisplayString)(null==t?void 0:t.date)+" , "+Object(c.toDisplayString)(e.t("Unlock"))+" "+Object(c.toDisplayString)(null==t?void 0:t.radio)+"% ",1)})),128)):Object(c.createCommentVNode)("",!0)],64)):Object(c.createCommentVNode)("",!0)]})),_:1},8,["visible","height"])]),Object(c.createVNode)("div",L,[Object(c.createVNode)(z,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(72),parentWidth:"auto"},{default:n((function(){var t,o,n,a;return[Object(c.createVNode)("span",R,["Vesting"===(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[0==(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Unlock when vesting starts, and linearly unlock during the vesting period")),1)],64)):Object(c.createCommentVNode)("",!0),1==(null===(n=e.commonData.voucherInfo)||void 0===n?void 0:n.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("One-time unlock on vesting date")),1)],64)):Object(c.createCommentVNode)("",!0),2==(null===(a=e.commonData.voucherInfo)||void 0===a?void 0:a.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:2},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Staged unlock based on vesting date")),1)],64)):Object(c.createCommentVNode)("",!0)],64)):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Date and time are all UTC. Vouchers from IVO will be converted to vesting vouchers at public sale and tokens will start to be unlocked then.")),1)],64))])]})),_:1},8,["visible","height"])])])])])])]})),_:1}),e.commonData.visibleCancel?(Object(c.openBlock)(),Object(c.createBlock)(q,{key:0,instance:e.commonData.orderCancelInfo,visible:e.commonData.visibleCancel,onClose:t[2]||(t[2]=function(t){return e.commonData.visibleCancel=!1}),onOnFinished:e.handleCancelFinished},null,8,["instance","visible","onOnFinished"])):Object(c.createCommentVNode)("",!0)],64)})),P=(o("159b"),o("d3b7"),o("25f0"),o("9ab4")),W=o("e904"),z=o("9998"),H=o("6789"),E=o("a6f3"),J=o("f41c"),X=o("2739"),Y=o("9707"),q=o("1d85"),G=o("1c5c"),K=o("8e83"),Q=o("7d14"),Z=o("9af8"),ee=o("901e"),te=o.n(ee),oe=o("47e2"),ce=o("6c02"),ne=Object(c.withScopeId)("data-v-49b27018");Object(c.pushScopeId)("data-v-49b27018");var ae={class:"order-buy-voucher"},re={class:"order-buy-voucher__header"},le={class:"order-buy-header__content"},ie={class:"header-center"},se={class:"amount-item"},de=Object(c.createVNode)("span",{class:"amount-text"},"1",-1),ue=Object(c.createVNode)("p",{class:"amount-text-line amount-item"},"=",-1),me={class:"amount-item"},be={class:"amount-text"},ve={class:"order-buy-voucher__body"},he={class:"suffix-item"},Oe={key:0,class:"desc-text"},pe={key:1,class:"desc-text"},je=Object(c.createVNode)("div",{class:"or-txt"},"OR",-1),fe={class:"card-form-item"},ye={class:"suffix-item"},ge={class:"desc-text"},De={class:"card-form-item m-65"},ke={class:"action-btn-module"},Ve={key:0,class:"order-no-buy"},Ie={class:"start-label"},Se={class:"start-value"},Be={key:0,class:"order-no-buy"},Ne={class:"start-value"};Object(c.popScopeId)();var Te=ne((function(e,t,o,n,a,r){var l=Object(c.resolveComponent)("DaInput"),i=Object(c.resolveComponent)("DaSkeleton"),s=Object(c.resolveComponent)("DaItem"),d=Object(c.resolveComponent)("DaButton"),u=Object(c.resolveComponent)("DaCard"),m=Object(c.resolveComponent)("Loading"),b=Object(c.resolveComponent)("TxFinish");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)("div",ae,[Object(c.createVNode)("div",re,[Object(c.createVNode)("div",{class:["order-buy-header__icon",{"order-buy-fixed__icon":0==e.instance.priceType}]},[Object(c.createVNode)("span",null,Object(c.toDisplayString)(0==e.instance.priceType?e.t("Fixed price"):e.t("Variable price")),1)],2),Object(c.createVNode)("div",le,[Object(c.createVNode)("div",ie,[Object(c.createVNode)("p",se,[de,Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.instance.underlyingSymbol),1)]),ue,Object(c.createVNode)("p",me,[Object(c.createVNode)("span",be,Object(c.toDisplayString)(e.getPrice),1),Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.instance.currencySymbol),1)])])])]),Object(c.createVNode)("div",ve,[Object(c.createVNode)(u,{class:"order-buy-voucher__card"},{default:ne((function(){return[Object(c.createVNode)(s,{label:e.t("Purchase By Amount")},{value:ne((function(){return[Object(c.createVNode)(l,{mode:"decimal",decimals:"unit"===e.commonData.selectedActive?e.instance.underlyingDecimals:e.instance.currencyDecimals,modelValue:e.purForm.amount,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.purForm.amount=t}),class:"input-entry",maxlength:"32",onInput:e.handleInputAmount,onFocus:e.handleInputAmountFocus,onBlur:e.handleInputAmountBlur,border:!0,disabled:e.isSelfOrder||"0"==e.buyLimitInfo.maxBuyAmount},{suffix:ne((function(){return[Object(c.createVNode)("span",{onClick:t[1]||(t[1]=function(){return e.handleMaxAvailableAmount&&e.handleMaxAvailableAmount.apply(e,arguments)}),class:"suffix-item"},Object(c.toDisplayString)(e.t("MAX")),1),Object(c.createVNode)("span",he,Object(c.toDisplayString)(e.instance.underlyingSymbol),1)]})),_:1},8,["decimals","modelValue","onInput","onFocus","onBlur","disabled"])]})),descLabel:ne((function(){return[Object(c.createVNode)(i,{visible:!e.commonData.loadOrderInfoFinished,width:"120px"},{default:ne((function(){var t,o;return[e.buyLimitInfo.limit?(Object(c.openBlock)(),Object(c.createBlock)("p",Oe,Object(c.toDisplayString)(e.t("Purchase limit"))+": "+Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.buyLimitInfo.minBuyAmount)))+" - "+Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.buyLimitInfo.maxBuyAmount)))+" "+Object(c.toDisplayString)(e.commonData.voucherInfo?null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.underlyingSymbol:""),1)):(Object(c.openBlock)(),Object(c.createBlock)("p",pe,Object(c.toDisplayString)(e.t("Max Available"))+": "+Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.buyLimitInfo.maxBuyAmount)))+" "+Object(c.toDisplayString)(e.commonData.voucherInfo?null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.underlyingSymbol:""),1))]})),_:1},8,["visible"])]})),_:1},8,["label"]),je,Object(c.createVNode)("div",fe,[Object(c.createVNode)(s,{label:e.t("Purchase By Value")},{value:ne((function(){return[Object(c.createVNode)(l,{mode:"decimal",decimals:e.instance.currencyDecimals,modelValue:e.purForm.value,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.purForm.value=t}),class:"input-entry",maxlength:"32",border:!0,onInput:e.handleInputValue,onFocus:e.handleInputValueFocus,onBlur:e.handleInputValueBlur,disabled:e.isSelfOrder||"0"==e.buyLimitInfo.maxBuyAmount},{suffix:ne((function(){return[Object(c.createVNode)("span",{onClick:t[3]||(t[3]=function(){return e.handleMaxAvailableValue&&e.handleMaxAvailableValue.apply(e,arguments)}),class:"suffix-item"},Object(c.toDisplayString)(e.t("MAX")),1),Object(c.createVNode)("span",ye,Object(c.toDisplayString)(e.instance&&e.instance.currencySymbol),1)]})),_:1},8,["decimals","modelValue","onInput","onFocus","onBlur","disabled"])]})),descLabel:ne((function(){return[Object(c.createVNode)("span",ge,[Object(c.createVNode)(i,{visible:!e.commonData.loadWalletBalanceFinished,width:"120px"},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Wallet Balance"))+": "+Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.$filters.viewTokenDivDecimals(e.walletData.walletBalance,e.instance.currencyDecimals))))+" "+Object(c.toDisplayString)(e.instance?e.instance.currencySymbol:""),1)]})),_:1},8,["visible"])])]})),_:1},8,["label"])]),Object(c.createVNode)("div",De,[Object(c.createVNode)("div",ke,[e.$filters.compCurrentTime(e.$filters.getTime(1e3*e.instance.startTime))?(Object(c.openBlock)(),Object(c.createBlock)("div",Ve,[Object(c.createVNode)("span",Ie,Object(c.toDisplayString)(e.$t("Start Time(UTC)"))+": ",1),Object(c.createVNode)("span",Se,Object(c.toDisplayString)(e.$filters.dateTimeUTCFormat(e.$filters.getTime(1e3*e.instance.startTime))),1)])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.commonData.isBuyerAllowed||1!=e.instance.useAllowList?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.isSelfOrder?(Object(c.openBlock)(),Object(c.createBlock)(d,{key:0,size:"medium",full:!0,onClick:e.bindCancel,class:"action-btn"},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Cancel")),1)]})),_:1},8,["onClick"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.commonData.isApprove?Object(c.createCommentVNode)("",!0):(Object(c.openBlock)(),Object(c.createBlock)(d,{key:0,size:"medium",full:!0,onClick:e.bindApprove,disabled:e.commonData.submitLoading,loading:e.commonData.submitLoading,class:"action-btn m-16"},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Approve")),1)]})),_:1},8,["onClick","disabled","loading"])),Object(c.createVNode)(d,{size:"medium",full:!0,onClick:e.handleConfirm,disabled:e.disabledConfirm||e.disabledBuyByWalletBalance,loading:e.commonData.loadingSubmit,class:"action-btn"},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.disabledBuyByWalletBalance?e.t("Insufficient Wallet Balance"):e.t("Buy")),1)]})),_:1},8,["onClick","disabled","loading"])],64))],64)):(Object(c.openBlock)(),Object(c.createBlock)("div",Be,[Object(c.createVNode)("span",Ne,Object(c.toDisplayString)(e.t("Your address is not in the whitelist")),1)]))],64))])])]})),_:1})])]),e.commonData.visibleLoading?(Object(c.openBlock)(),Object(c.createBlock)(m,{key:0,visible:e.commonData.visibleLoading,onClose:t[5]||(t[5]=function(t){return e.commonData.visibleLoading=!1}),onTxDone:e.handleTxDone,needDone:!0},null,8,["visible","onTxDone"])):Object(c.createCommentVNode)("",!0),e.commonData.visibleTxFinish?(Object(c.openBlock)(),Object(c.createBlock)(b,{key:1,visible:e.commonData.visibleTxFinish,hash:e.commonData.txHash,title:"Purchase Completed",onClose:t[6]||(t[6]=function(t){return e.commonData.visibleTxFinish=!1})},null,8,["visible","hash"])):Object(c.createCommentVNode)("",!0)],64)})),xe=o("e205"),Ce=o("6363"),_e=o("4be1"),we=o("5aec"),Ae=o("52f9"),Fe=o("9ddb"),$e=o("27a7"),Ue=Object(c.defineComponent)({components:{DaCard:Ce.a,DaItem:we.a,DaInput:_e.a,DaButton:xe.a,Loading:Fe.a,TxFinish:Ae.a,DaSkeleton:z.a},props:{instance:{type:Object,default:function(){}}},emits:["close","txEnd","onFinished","unlist"],setup:function(e,t){var o=t.emit,n=Object(c.toRefs)(e).instance,a=Object($e.a)(n,o);return{t:a.t,commonData:a.commonData,walletData:a.walletData,purForm:a.purForm,disabledConfirm:a.disabledConfirm,getPrice:a.getPrice,isAllowBuy:a.isAllowBuy,maxLimitPurchasingAmount:a.maxLimitPurchasingAmount,tokenValueInfo:a.tokenValueInfo,disabledBuyByWalletBalance:a.disabledBuyByWalletBalance,isSelfOrder:a.isSelfOrder,buyLimitInfo:a.buyLimitInfo,handleClose:a.handleClose,handleConfirm:a.handleConfirm,bindApprove:a.bindApprove,handleInputAmount:a.handleInputAmount,handleInputAmountFocus:a.handleInputAmountFocus,handleInputAmountBlur:a.handleInputAmountBlur,handleMaxAvailableAmount:a.handleMaxAvailableAmount,handleInputValue:a.handleInputValue,handleInputValueFocus:a.handleInputValueFocus,handleInputValueBlur:a.handleInputValueBlur,handleTxDone:a.handleTxDone,handleMaxAvailableValue:a.handleMaxAvailableValue,bindCancel:function(){o("unlist")}}}});o("fddf");Ue.render=Te,Ue.__scopeId="data-v-49b27018";var Le=Ue,Re=Object(c.withScopeId)("data-v-dc970c3c");Object(c.pushScopeId)("data-v-dc970c3c");var Me={class:"order-buy-voucher"},Pe={class:"order-buy-voucher__header"},We=Object(c.createVNode)("div",{class:"order-buy-header__icon"},null,-1),ze={class:"order-buy-header__content"},He={class:"header-center"},Ee={class:"order-buy-voucher__body"},Je={class:"card-form-item"},Xe={class:"card-form-item"},Ye={class:"card-form-item"},qe={class:"card-form-item"},Ge={class:"action-btn-module"};Object(c.popScopeId)();var Ke=Re((function(e,t,o,n,a,r){var l=Object(c.resolveComponent)("DaSkeleton"),i=Object(c.resolveComponent)("DaCard");return Object(c.openBlock)(),Object(c.createBlock)("div",Me,[Object(c.createVNode)("div",Pe,[We,Object(c.createVNode)("div",ze,[Object(c.createVNode)("div",He,[Object(c.createVNode)(l,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]),Object(c.createVNode)("div",Ee,[Object(c.createVNode)(i,{class:"order-buy-voucher__card"},{default:Re((function(){return[Object(c.createVNode)("div",Je,[Object(c.createVNode)(l,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",Xe,[Object(c.createVNode)(l,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",Ye,[Object(c.createVNode)(l,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",qe,[Object(c.createVNode)("div",Ge,[Object(c.createVNode)(l,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]})),_:1})])])})),Qe=Object(c.defineComponent)({components:{DaCard:Ce.a,DaSkeleton:z.a},setup:function(){}});o("fe76");Qe.render=Ke,Qe.__scopeId="data-v-dc970c3c";var Ze=Qe,et=Object(c.defineComponent)({components:{PageWrapper:J.a,DaSkeleton:z.a,BuyVoucher:Le,OutputHref:E.a,BuyVoucherSkeleton:Ze,DaImage:W.a,CancelVestingOrder:H.a},props:{},setup:function(e){var t=Object(oe.b)().t,o=Object(ce.c)().params,n=Object(G.a)().getters,a=Object(ce.d)().back,r=Object(c.computed)((function(){return n.getChainId})),l=Object(c.reactive)({orderId:o.orderId+"",voucherId:o.voucherId+"",voucherSymbol:o.voucherSymbol+"",voucherImage:"",reloadImage:!1,visibleCancel:!1}),i=Object(c.ref)(!1),s=Object(c.ref)(!0),d=Object(c.ref)(!1),u=Object(c.ref)(""),m=Object(c.reactive)({list:[]}),b=Object(c.reactive)({currencySymbol:""}),v=Object(K.b)(b).tokenValueInfo,h=X.a;function O(e){return void 0===e&&(e=!1),Object(P.b)(this,void 0,void 0,(function(){var t;return Object(P.e)(this,(function(o){switch(o.label){case 0:return l.voucherTokenSchema?(m.list=[],[4,Object(q.e)().getVoucherInfo(l.voucherTokenSchema,l.voucherId)]):[2];case 1:return t=o.sent(),d.value=!0,l.voucherInfo=Object(Q.a)([t])[0],l.voucherImage=Y.a.viewVoucherImg(t.URI),u.value=l.voucherImage,"Vesting"===l.voucherTokenSchema.type?(2==l.voucherInfo.releaseType&&l.voucherInfo.maturities.forEach((function(e,t){var o,c=new te.a((null===(o=l.voucherInfo)||void 0===o?void 0:o.percentages[t])+"").dividedBy(new te.a(100)).toNumber(),n=Y.a.dateUTCFormat(1e3*Number(e.toString()));m.list.push({radio:c,date:n})})),l.reloadImage=e):function(){var e,t,o;Object(P.b)(this,void 0,void 0,(function(){var c,n,a,r,i,s,d,b,v;return Object(P.e)(this,(function(h){if(l.voucherImage=Y.a.base64Decode((null===(e=l.voucherInfo)||void 0===e?void 0:e.URI)+"").image,u.value=l.voucherImage,2==(null===(t=l.voucherInfo)||void 0===t?void 0:t.releaseType)){for(c=0;c<5;c++)m.list.push(null);if(l.voucherInfo.terms){n=0;try{for(a=Object(P.f)(l.voucherInfo.terms),r=a.next();!r.done;r=a.next())i=r.value,s=new te.a((null===(o=l.voucherInfo)||void 0===o?void 0:o.percentages[n])+"").dividedBy(new te.a(100)).toNumber(),d=Number(i)/86400+"",m.list[n]={radio:s,date:d},n++}catch(e){b={error:e}}finally{try{r&&!r.done&&(v=a.return)&&v.call(a)}finally{if(b)throw b.error}}}}return[2]}))}))}(),[2]}}))}))}function p(){var e,t;return Object(P.b)(this,void 0,void 0,(function(){var o,c,n;return Object(P.e)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),o=Z.a.solvUtils.getAllocationMarket(),[4,Object(q.a)().getOrderInfo(l.orderId)];case 1:return c=a.sent(),n={order:c.order,currency:c.order.currencyAddress.toLowerCase()!=(null===(e=l.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.address.toLowerCase())?Z.a.solvUtils.getCurrenciesByAddress(o.address,"Secondary",c.order.currencyAddress):null===(t=l.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken,voucher:Z.a.solvUtils.getTokenSchemaByVoucherAddress(c.order.voucherAddress),price:c.price},l.orderInfo=n,l.orderInfo.order.totalUnits=n.order.total,c.order.isValid&&function(e){l.orderItem={voucherId:e.order.tokenId,voucherSymbol:e.voucher.symbol,voucherAddress:e.voucher.address,underlyingSymbol:e.voucher.underlyingToken.symbol,underlyingDecimals:e.voucher.underlyingToken.decimals,underlyingAddress:e.voucher.underlyingToken.address,currencyAddress:e.currency.address,currencySymbol:e.currency.symbol,currencyDecimals:e.currency.decimals,minUnits:e.order.min.toString(),maxUnits:e.order.max.toString(),highest:e.price.highest.toString(),lowest:e.price.lowest.toString(),useAllowList:e.order.useAllowList,interval:e.price.interval,duration:e.price.duration,startTime:e.order.startTime,orderId:e.order.saleId,priceType:e.order.priceType,currentPrice:0==e.order.priceType?e.price.lowest:0,seller:e.order.seller,units:e.order.units.toString()},b.currencySymbol=l.orderItem.underlyingSymbol}(n),[3,3];case 2:return a.sent(),[3,3];case 3:return[2]}}))}))}function j(e){void 0===e&&(e=!0),d.value=!e,l.voucherTokenSchema=Z.a.solvUtils.getTokenSchemaByVoucherSymbol(o.voucherSymbol+""),O(),p()}var f=Object(c.computed)((function(){var e,t;return l.voucherInfo?new te.a(Y.a.tokenDivDecimals((null===(e=l.voucherInfo)||void 0===e?void 0:e.units)||0,null===(t=l.voucherInfo)||void 0===t?void 0:t.underlyingDecimals)).multipliedBy(new te.a(v.price)):"0"}));return Object(c.watch)((function(){return n.getChangeFlag}),(function(e){e&&j()}),{immediate:!0}),Object(c.watch)((function(){return n.getLastTxReceipt}),(function(e){e&&j(!1)}),{deep:!0}),{t:t,commonData:l,visibleShare:i,visibleOpensea:s,loadVoucherDetailFinish:d,originalVoucherImgUrl:u,stagedData:m,chainId:r,unitValue:f,solvMisc:h,bindCancel:function(){l.orderCancelInfo={orderId:l.orderId,voucherId:l.voucherId,voucher:{units:l.orderItem.units,totalUnits:l.orderInfo.order.totalUnits,underlyingDecimals:l.orderItem.underlyingDecimals,underlyingSymbol:l.orderItem.underlyingSymbol}},l.visibleCancel=!0},handleCancelFinished:function(){a()}}}});o("cdb8");et.render=M,et.__scopeId="data-v-4f7c963f";t.default=et},"76cbc":function(e,t,o){},"9d82":function(e,t,o){},cdb8:function(e,t,o){"use strict";o("5938")},fddf:function(e,t,o){"use strict";o("76cbc")},fe76:function(e,t,o){"use strict";o("9d82")}}]);
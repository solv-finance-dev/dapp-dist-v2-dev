(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1561c699"],{"0111":function(e,t,o){},3604:function(e,t,o){"use strict";o("0111")},"5df4":function(e,t,o){"use strict";o.r(t);o("b0c0"),o("a9e3");var c=o("7a23"),n=Object(c.withScopeId)("data-v-50d20980");Object(c.pushScopeId)("data-v-50d20980");var a={class:"order-details"},r={class:"order-details__header"},i={class:"header-left"},l={class:"header-right"},s={class:"order-details__body"},d={class:"m-72 infos-module"},u={class:"infos-module__top"},m={class:"infos-module__content"},b={class:"ava-text"},v={class:"flex-row group_12"},h={class:"text_14"},p={class:"text_15"},O={class:"flex-row group_12"},j={class:"text_left"},f={class:"text_29"},y={class:"text_left"},g=Object(c.createVNode)("span",{class:"text_29"},null,-1),D={class:"flex-row group_13"},k={class:"text_left"},V={class:"text_29"},I={key:1,class:"text_left_flexible"},S={class:"buy-module"},T={class:"voucher-info m-72"},N={class:"voucher-info__inner"},B={class:"voucher-wrapper"},x={key:0,class:"flex-col items-center justify-center  pag"},C=Object(c.createVNode)("i",{class:"inner"},null,-1),_={class:"voucher-module__top"},w=Object(c.createVNode)("span",{"data-v-386cf73a":"",class:"text_45"},"Vesting Information",-1),A={class:"unlock-txt flex-row"},F={class:"unlock-txt flex-row"},$={key:1,class:"unlock-txt flex-row"},U={key:0,class:"unlock-txt flex-row"},R={key:1,class:"unlock-txt flex-row"},L={class:"voucher-module__content"},P={class:"text_50"};Object(c.popScopeId)();var M=n((function(e,t,o,M,W,z){var H=Object(c.resolveComponent)("DaSkeleton"),E=Object(c.resolveComponent)("OutputHref"),J=Object(c.resolveComponent)("DaImage"),X=Object(c.resolveComponent)("BuyVoucher"),Y=Object(c.resolveComponent)("BuyVoucherSkeleton"),q=Object(c.resolveComponent)("PageWrapper"),G=Object(c.resolveComponent)("CancelVestingOrder");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)(q,{showBreadcrumbs:!0},{default:n((function(){var o,M,W,z,q,G;return[Object(c.createVNode)("div",a,[Object(c.createVNode)("div",r,[Object(c.createVNode)(H,{visible:!(null!==(o=e.commonData.voucherTokenSchema)&&void 0!==o&&o.name),height:e.$filters.pxToRem(36),width:e.$filters.pxToRem(320),parentWidth:"auto"},{default:n((function(){var t,o,n;return[Object(c.createVNode)("div",i,[Object(c.createVNode)("img",{src:e.$filters.getTokenLocalLogo(null===(t=e.commonData.voucherTokenSchema)||void 0===t?void 0:t.logoURI,null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol),class:"token-logo"},null,8,["src"]),Object(c.createVNode)("span",null,Object(c.toDisplayString)(null===(n=e.commonData.voucherTokenSchema)||void 0===n?void 0:n.name)+" #"+Object(c.toDisplayString)(e.commonData.voucherId),1)])]})),_:1},8,["visible","height","width"]),Object(c.createVNode)("div",l,[Object(c.createVNode)(E,{voucherId:e.commonData.voucherId,voucherAddress:null===(M=e.commonData.voucherTokenSchema)||void 0===M?void 0:M.address,underlyingSymbol:null===(W=e.commonData.voucherTokenSchema)||void 0===W?void 0:W.underlyingToken.symbol,underlyingAddress:null===(z=e.commonData.voucherTokenSchema)||void 0===z?void 0:z.underlyingToken.address,visibleOpensea:!1},null,8,["voucherId","voucherAddress","underlyingSymbol","underlyingAddress"])])]),Object(c.createVNode)("div",s,[Object(c.createVNode)("div",d,[Object(c.createVNode)("div",u,["Vesting"===(null===(q=e.commonData.voucherInfo)||void 0===q?void 0:q.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(J,{key:0,src:e.commonData.voucherImage,urlList:[e.originalVoucherImgUrl],showReload:!0,showPreview:!0,reload:e.commonData.reloadImage,onLoadFinished:t[1]||(t[1]=function(t){return e.commonData.reloadImage=!1}),class:"cher-image__entry"},null,8,["src","urlList","reload"])):(Object(c.openBlock)(),Object(c.createBlock)(H,{key:1,visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(212)},{default:n((function(){return[e.commonData.voucherImage?(Object(c.openBlock)(),Object(c.createBlock)("img",{key:0,src:e.commonData.voucherImage,class:"cher-image__entry"},null,8,["src"])):Object(c.createCommentVNode)("",!0)]})),_:1},8,["visible","height"]))]),Object(c.createVNode)("div",m,[Object(c.createVNode)("span",b,[Object(c.createVNode)(H,{visible:!e.commonData.orderInfo,height:e.$filters.pxToRem(18),width:e.$filters.pxToRem(120)},{default:n((function(){var t;return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Available"))+" ("+Object(c.toDisplayString)(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.underlyingSymbol)+") ",1)]})),_:1},8,["visible","height","width"])]),Object(c.createVNode)("div",v,[Object(c.createVNode)("span",h,[Object(c.createVNode)(H,{visible:!e.commonData.orderInfo,height:e.$filters.pxToRem(18),width:e.$filters.pxToRem(64)},{default:n((function(){var t,o;return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.$filters.beautyAmount(e.$filters.viewTokenDivDecimals((null===(t=e.commonData.orderInfo.order)||void 0===t?void 0:t.units)+"",(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.underlyingDecimals)+""),"token")),1)]})),_:1},8,["visible","height","width"])]),Object(c.createVNode)("span",p,[Object(c.createVNode)(H,{visible:!e.commonData.orderInfo,height:e.$filters.pxToRem(18),width:e.$filters.pxToRem(64)},{default:n((function(){var t,o;return[Object(c.createTextVNode)(" ≈ "+Object(c.toDisplayString)(e.$filters.beautyAmount(e.$filters.viewTokenDivDecimals((null===(t=e.commonData.orderInfo.order)||void 0===t?void 0:t.units)+"",(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.underlyingDecimals)+""))),1)]})),_:1},8,["visible","height","width"])])]),Object(c.createVNode)("div",O,[Object(c.createVNode)(H,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(18)},{default:n((function(){var t,o,n;return["Vesting"===(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("span",j,Object(c.toDisplayString)(e.t("Claimable"))+" ("+Object(c.toDisplayString)(null===(o=e.commonData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol)+") ",1),Object(c.createVNode)("span",f,Object(c.toDisplayString)(e.t("Locked"))+" ("+Object(c.toDisplayString)(null===(n=e.commonData.voucherTokenSchema)||void 0===n?void 0:n.underlyingToken.symbol)+") ",1)],64)):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("span",y,Object(c.toDisplayString)(e.t("Release Start Date")),1),g],64))]})),_:1},8,["visible","height"])]),Object(c.createVNode)("div",D,[Object(c.createVNode)(H,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(18)},{default:n((function(){var t,o,n,a,r,i,l,s,d;return["Vesting"===(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("span",k,Object(c.toDisplayString)(e.$filters.beautyAmount(e.$filters.viewTokenDivDecimals((null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.availableClaimAmount)+"",(null===(n=e.commonData.voucherInfo)||void 0===n?void 0:n.underlyingDecimals)+""),"token")),1),Object(c.createVNode)("span",V,Object(c.toDisplayString)(e.$filters.beautyAmount(e.$filters.viewTokenDivDecimals((null===(a=e.commonData.voucherInfo)||void 0===a?void 0:a.lockAmount)+"",(null===(r=e.commonData.voucherInfo)||void 0===r?void 0:r.underlyingDecimals)+""),"token")),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)("span",I,Object(c.toDisplayString)(null!==(i=e.commonData.voucherInfo)&&void 0!==i&&i.tgeTime&&(null===(l=e.commonData.voucherInfo)||void 0===l?void 0:l.tgeTime)>0?e.$filters.dateUTCFormat(1e3*Number(null===(s=e.commonData.voucherInfo)||void 0===s?void 0:s.tgeTime)):e.t("To be determined, no later than ")+e.$filters.dateUTCFormat(1e3*Number(null===(d=e.commonData.voucherInfo)||void 0===d?void 0:d.latestStartTime))),1))]})),_:1},8,["visible","height"])])])]),Object(c.createVNode)("div",S,[e.commonData.orderItem?(Object(c.openBlock)(),Object(c.createBlock)(X,{key:0,instance:e.commonData.orderItem,onUnlist:e.bindCancel},null,8,["instance","onUnlist"])):(Object(c.openBlock)(),Object(c.createBlock)(Y,{key:1}))]),Object(c.createVNode)("div",T,[Object(c.createVNode)("div",N,[Object(c.createVNode)("div",B,[e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)("div",x,[Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t(e.$filters.formatReleaseType((null===(G=e.commonData.voucherInfo)||void 0===G?void 0:G.releaseType)+""))),1),C])):Object(c.createCommentVNode)("",!0)]),Object(c.createVNode)("div",_,[Object(c.createVNode)(H,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(72),parentWidth:"auto"},{default:n((function(){var t,o,n,a,r,i,l,s,d,u;return[w,e.commonData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[0==(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},["Vesting"===e.commonData.voucherInfo.voucherType?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("span",A,Object(c.toDisplayString)(e.$t("Start From (UTC)"))+" : "+Object(c.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.startFrom))),1),Object(c.createVNode)("span",F,Object(c.toDisplayString)(e.$t("Finish At (UTC)"))+" : "+Object(c.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(n=e.commonData.voucherInfo)||void 0===n?void 0:n.finishAt))),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)("span",$,Object(c.toDisplayString)(e.$t("Vesting Period"))+" : "+Object(c.toDisplayString)(null!==(a=e.commonData.voucherInfo)&&void 0!==a&&a.terms?(null===(r=e.commonData.voucherInfo)||void 0===r?void 0:r.terms[0])/86400:0)+" "+Object(c.toDisplayString)(e.t("Days")),1))],64)):Object(c.createCommentVNode)("",!0),1==(null===(i=e.commonData.voucherInfo)||void 0===i?void 0:i.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},["Vesting"===e.commonData.voucherInfo.voucherType?(Object(c.openBlock)(),Object(c.createBlock)("span",U,Object(c.toDisplayString)(e.$t("Vesting Date (UTC)"))+": "+Object(c.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(l=e.commonData.voucherInfo)||void 0===l?void 0:l.startFrom))),1)):(Object(c.openBlock)(),Object(c.createBlock)("span",R,Object(c.toDisplayString)(e.$t("Vesting Period"))+" : "+Object(c.toDisplayString)(null!==(s=e.commonData.voucherInfo)&&void 0!==s&&s.terms?(null===(d=e.commonData.voucherInfo)||void 0===d?void 0:d.terms[0])/86400:0)+" "+Object(c.toDisplayString)(e.t("Days")),1))],64)):Object(c.createCommentVNode)("",!0),2==(null===(u=e.commonData.voucherInfo)||void 0===u?void 0:u.releaseType)?(Object(c.openBlock)(!0),Object(c.createBlock)(c.Fragment,{key:2},Object(c.renderList)(e.stagedData.list,(function(t,o){return Object(c.openBlock)(),Object(c.createBlock)("span",{class:"unlock-txt flex-row",key:o},Object(c.toDisplayString)(e.t("Unlock"))+" "+Object(c.toDisplayString)(o+1)+"："+Object(c.toDisplayString)(null==t?void 0:t.date)+" ，"+Object(c.toDisplayString)(e.t("Unlock"))+" "+Object(c.toDisplayString)(null==t?void 0:t.radio)+"% ",1)})),128)):Object(c.createCommentVNode)("",!0)],64)):Object(c.createCommentVNode)("",!0)]})),_:1},8,["visible","height"])]),Object(c.createVNode)("div",L,[Object(c.createVNode)(H,{visible:!e.commonData.voucherInfo,height:e.$filters.pxToRem(72),parentWidth:"auto"},{default:n((function(){var t,o,n,a;return[Object(c.createVNode)("span",P,["Vesting"===(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[0==(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Unlock when vesting starts, and linearly unlock during the vesting period")),1)],64)):Object(c.createCommentVNode)("",!0),1==(null===(n=e.commonData.voucherInfo)||void 0===n?void 0:n.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("One-time unlock on vesting date")),1)],64)):Object(c.createCommentVNode)("",!0),2==(null===(a=e.commonData.voucherInfo)||void 0===a?void 0:a.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:2},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Staged unlock based on vesting date")),1)],64)):Object(c.createCommentVNode)("",!0)],64)):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Date and time are all UTC. Vouchers from IVO will be converted to vesting vouchers at public sale and tokens will start to be unlocked then.")),1)],64))])]})),_:1},8,["visible","height"])])])])])])]})),_:1}),e.commonData.visibleCancel?(Object(c.openBlock)(),Object(c.createBlock)(G,{key:0,instance:e.commonData.orderCancelInfo,visible:e.commonData.visibleCancel,onClose:t[2]||(t[2]=function(t){return e.commonData.visibleCancel=!1}),onOnFinished:e.handleCancelFinished},null,8,["instance","visible","onOnFinished"])):Object(c.createCommentVNode)("",!0)],64)})),W=(o("159b"),o("d3b7"),o("25f0"),o("9ab4")),z=o("e904"),H=o("9998"),E=o("6789"),J=o("a6f3"),X=o("f41c"),Y=o("9707"),q=o("1d85"),G=o("1c5c"),K=o("8e83"),Q=o("7d14"),Z=o("9af8"),ee=o("901e"),te=o.n(ee),oe=o("47e2"),ce=o("6c02"),ne=Object(c.withScopeId)("data-v-75ea095b");Object(c.pushScopeId)("data-v-75ea095b");var ae={class:"order-buy-voucher"},re={class:"order-buy-voucher__header"},ie={class:"order-buy-header__content"},le={class:"header-center"},se={class:"amount-item"},de=Object(c.createVNode)("span",{class:"amount-text"},"1",-1),ue=Object(c.createVNode)("p",{class:"amount-text-line amount-item"},"=",-1),me={class:"amount-item"},be={class:"amount-text"},ve={key:0,class:"header-bottom"},he={class:"header-bottom__content"},pe={class:"order-buy-voucher__body"},Oe={class:"suffix-item"},je={class:"desc-text"},fe=Object(c.createVNode)("div",{class:"or-txt"},"OR",-1),ye={class:"card-form-item"},ge={class:"suffix-item"},De={class:"desc-text"},ke={class:"card-form-item m-65"},Ve={class:"action-btn-module"},Ie={key:0,class:"order-no-buy"},Se={class:"start-label"},Te={class:"start-value"},Ne={key:0,class:"order-no-buy"},Be={class:"start-value"};Object(c.popScopeId)();var xe=ne((function(e,t,o,n,a,r){var i,l=Object(c.resolveComponent)("DaInput"),s=Object(c.resolveComponent)("DaItem"),d=Object(c.resolveComponent)("DaButton"),u=Object(c.resolveComponent)("DaCard"),m=Object(c.resolveComponent)("Loading"),b=Object(c.resolveComponent)("TxFinish");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)("div",ae,[Object(c.createVNode)("div",re,[Object(c.createVNode)("div",{class:["order-buy-header__icon",{"order-buy-fixed__icon":0==e.instance.priceType}]},[Object(c.createVNode)("span",null,Object(c.toDisplayString)(0==e.instance.priceType?e.t("Fixed price"):e.t("Variable price")),1)],2),Object(c.createVNode)("div",ie,[Object(c.createVNode)("div",le,[Object(c.createVNode)("p",se,[de,Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.instance.underlyingSymbol),1)]),ue,Object(c.createVNode)("p",me,[Object(c.createVNode)("span",be,Object(c.toDisplayString)(e.getPrice),1),Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.instance.currencySymbol),1)])]),"Vesting"===(null===(i=e.commonData.voucherInfo)||void 0===i?void 0:i.voucherType)&&e.arrData.arr+""!=""&&"n/a"!=e.arrData.arr?(Object(c.openBlock)(),Object(c.createBlock)("div",ve,[Object(c.createVNode)("div",he,Object(c.toDisplayString)("n/a"!=e.arrData.arr?"ARR: "+e.arrData.arr+"%":""),1)])):Object(c.createCommentVNode)("",!0)])]),Object(c.createVNode)("div",pe,[Object(c.createVNode)(u,{class:"order-buy-voucher__card"},{default:ne((function(){return[Object(c.createVNode)(s,{label:e.t("Purchase By Amount")},{value:ne((function(){return[Object(c.createVNode)(l,{mode:"decimal",decimals:"unit"===e.commonData.selectedActive?e.instance.underlyingDecimals:e.instance.currencyDecimals,modelValue:e.purForm.amount,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.purForm.amount=t}),class:"input-entry",maxlength:"32",onInput:e.handleInputAmount,onFocus:e.handleInputAmountFocus,onBlur:e.handleInputAmountBlur,border:!0,disabled:e.isSelfOrder},{suffix:ne((function(){return[Object(c.createVNode)("span",{onClick:t[1]||(t[1]=function(){return e.handleMaxAvailableAmount&&e.handleMaxAvailableAmount.apply(e,arguments)}),class:"suffix-item"},Object(c.toDisplayString)(e.t("MAX")),1),Object(c.createVNode)("span",Oe,Object(c.toDisplayString)(e.instance.underlyingSymbol),1)]})),_:1},8,["decimals","modelValue","onInput","onFocus","onBlur","disabled"])]})),descLabel:ne((function(){var t,o,n,a;return[Object(c.createVNode)("span",je,Object(c.toDisplayString)(e.t("Purchase limit"))+": "+Object(c.toDisplayString)(e.isAllowBuy?"unlimit"!=e.$filters.parseLimitAvailable(e.instance.minUnits,e.instance.maxUnits,(null===(t=e.commonData.voucherInfo)||void 0===t?void 0:t.units)+"",e.commonData.purchasedUnits,e.instance.underlyingDecimals)?e.$filters.parseLimitAvailable(e.instance.minUnits,e.instance.maxUnits,(null===(o=e.commonData.voucherInfo)||void 0===o?void 0:o.units)+"",e.commonData.purchasedUnits,e.instance.underlyingDecimals)+" "+(null===(n=e.commonData.voucherInfo)||void 0===n?void 0:n.underlyingSymbol):"0 - "+e.$filters.beautyAmount(e.maxLimitPurchasingAmount,"token")+" "+(null===(a=e.commonData.voucherInfo)||void 0===a?void 0:a.underlyingSymbol):"0.00"),1)]})),_:1},8,["label"]),fe,Object(c.createVNode)("div",ye,[Object(c.createVNode)(s,{label:e.t("Purchase By Value")},{value:ne((function(){return[Object(c.createVNode)(l,{mode:"decimal",decimals:e.instance.currencyDecimals,modelValue:e.purForm.value,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.purForm.value=t}),class:"input-entry",maxlength:"32",border:!0,onInput:e.handleInputValue,onFocus:e.handleInputValueFocus,onBlur:e.handleInputValueBlur,disabled:e.isSelfOrder},{suffix:ne((function(){return[Object(c.createVNode)("span",{onClick:t[3]||(t[3]=function(){return e.handleMaxAvailableValue&&e.handleMaxAvailableValue.apply(e,arguments)}),class:"suffix-item"},Object(c.toDisplayString)(e.t("MAX")),1),Object(c.createVNode)("span",ge,Object(c.toDisplayString)(e.instance&&e.instance.currencySymbol),1)]})),_:1},8,["decimals","modelValue","onInput","onFocus","onBlur","disabled"])]})),descLabel:ne((function(){return[Object(c.createVNode)("span",De,Object(c.toDisplayString)(e.t("Wallet Balance"))+": "+Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.$filters.viewTokenDivDecimals(e.walletData.walletBalance,e.instance.currencyDecimals))))+" "+Object(c.toDisplayString)(e.instance?e.instance.currencySymbol:""),1)]})),_:1},8,["label"])]),Object(c.createVNode)("div",ke,[Object(c.createVNode)("div",Ve,[e.$filters.compCurrentTime(e.$filters.getTime(1e3*e.instance.startTime))?(Object(c.openBlock)(),Object(c.createBlock)("div",Ie,[Object(c.createVNode)("span",Se,Object(c.toDisplayString)(e.$t("Start Time(UTC)"))+": ",1),Object(c.createVNode)("span",Te,Object(c.toDisplayString)(e.$filters.dateTimeUTCFormat(e.$filters.getTime(1e3*e.instance.startTime))),1)])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.commonData.isBuyerAllowed||1!=e.instance.useAllowList?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.isSelfOrder?(Object(c.openBlock)(),Object(c.createBlock)(d,{key:0,size:"medium",full:!0,onClick:e.bindCancel,class:"action-btn m-16"},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Cancel")),1)]})),_:1},8,["onClick"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.commonData.isApprove?Object(c.createCommentVNode)("",!0):(Object(c.openBlock)(),Object(c.createBlock)(d,{key:0,size:"medium",full:!0,onClick:e.bindApprove,disabled:e.commonData.submitLoading,loading:e.commonData.submitLoading,class:"action-btn m-16"},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Approve")),1)]})),_:1},8,["onClick","disabled","loading"])),Object(c.createVNode)(d,{size:"medium",full:!0,onClick:e.handleConfirm,disabled:e.disabledConfirm||e.disabledBuyByWalletBalance,loading:e.commonData.loadingSubmit,class:"action-btn"},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.disabledBuyByWalletBalance?e.t("Insufficient Wallet Balance"):e.t("Buy")),1)]})),_:1},8,["onClick","disabled","loading"])],64))],64)):(Object(c.openBlock)(),Object(c.createBlock)("div",Ne,[Object(c.createVNode)("span",Be,Object(c.toDisplayString)(e.t("Your address is not in the whitelist")),1)]))],64))])])]})),_:1})])]),e.commonData.visibleLoading?(Object(c.openBlock)(),Object(c.createBlock)(m,{key:0,visible:e.commonData.visibleLoading,onClose:t[5]||(t[5]=function(t){return e.commonData.visibleLoading=!1}),onTxDone:e.handleTxDone,needDone:!0},null,8,["visible","onTxDone"])):Object(c.createCommentVNode)("",!0),e.commonData.visibleTxFinish?(Object(c.openBlock)(),Object(c.createBlock)(b,{key:1,visible:e.commonData.visibleTxFinish,hash:e.commonData.txHash,title:"Purchase Completed",onClose:t[6]||(t[6]=function(t){return e.commonData.visibleTxFinish=!1})},null,8,["visible","hash"])):Object(c.createCommentVNode)("",!0)],64)})),Ce=o("e205"),_e=o("6363"),we=o("4be1"),Ae=o("5aec"),Fe=o("52f9"),$e=o("9ddb"),Ue=o("cd95"),Re=o("27a7"),Le=Object(c.defineComponent)({components:{DaCard:_e.a,DaItem:Ae.a,DaInput:we.a,DaButton:Ce.a,Loading:$e.a,TxFinish:Fe.a},props:{instance:{type:Object,default:function(){}}},emits:["close","txEnd","onFinished","unlist"],setup:function(e,t){var o=t.emit,n=Object(c.toRefs)(e).instance,a=Object(Re.a)(n,o),r=a.t,i=a.commonData,l=a.walletData,s=a.purForm,d=a.disabledConfirm,u=a.getPrice,m=a.isAllowBuy,b=a.maxLimitPurchasingAmount,v=a.tokenValueInfo,h=a.disabledBuyByWalletBalance,p=a.isSelfOrder,O=a.handleClose,j=a.handleConfirm,f=a.bindApprove,y=a.handleInputAmount,g=a.handleInputAmountFocus,D=a.handleInputAmountBlur,k=a.handleMaxAvailableAmount,V=a.handleInputValue,I=a.handleInputValueFocus,S=a.handleInputValueBlur,T=a.handleTxDone,N=a.handleMaxAvailableValue,B=Object(c.reactive)({voucher:{maturities:[],releaseType:-1,underlyingDecimals:0,underlyingSymbol:"",percentages:[],totalUnits:0},order:{unitPrice:0,currencyDecimals:0,currencySymbol:"",units:""},isStart:!1});Object(c.watch)((function(){return i.voucherInfo}),(function(){var e,t;i.voucherInfo&&(B.voucher.maturities=null===(e=i.voucherInfo)||void 0===e?void 0:e.maturities,B.voucher.percentages=null===(t=i.voucherInfo)||void 0===t?void 0:t.percentages,B.voucher.underlyingDecimals=i.voucherInfo.underlyingDecimals,B.voucher.releaseType=i.voucherInfo.releaseType,B.voucher.totalUnits=Number(i.voucherInfo.totalUnits),B.voucher.underlyingSymbol=i.voucherInfo.underlyingSymbol,B.order.currencySymbol=n.value.currencySymbol,B.order.currencyDecimals=n.value.currencyDecimals,B.order.unitPrice=n.value.lowest,B.order.units=i.voucherInfo.units,B.isStart=!0)}));var x=Object(Ue.b)(B).arrData;return{t:r,commonData:i,walletData:l,purForm:s,disabledConfirm:d,getPrice:u,isAllowBuy:m,maxLimitPurchasingAmount:b,tokenValueInfo:v,arrData:x,disabledBuyByWalletBalance:h,isSelfOrder:p,handleClose:O,handleConfirm:j,bindApprove:f,handleInputAmount:y,handleInputAmountFocus:g,handleInputAmountBlur:D,handleMaxAvailableAmount:k,handleInputValue:V,handleInputValueFocus:I,handleInputValueBlur:S,handleTxDone:T,handleMaxAvailableValue:N,bindCancel:function(){o("unlist")}}}});o("3604");Le.render=xe,Le.__scopeId="data-v-75ea095b";var Pe=Le,Me=Object(c.withScopeId)("data-v-dc970c3c");Object(c.pushScopeId)("data-v-dc970c3c");var We={class:"order-buy-voucher"},ze={class:"order-buy-voucher__header"},He=Object(c.createVNode)("div",{class:"order-buy-header__icon"},null,-1),Ee={class:"order-buy-header__content"},Je={class:"header-center"},Xe={class:"order-buy-voucher__body"},Ye={class:"card-form-item"},qe={class:"card-form-item"},Ge={class:"card-form-item"},Ke={class:"card-form-item"},Qe={class:"action-btn-module"};Object(c.popScopeId)();var Ze=Me((function(e,t,o,n,a,r){var i=Object(c.resolveComponent)("DaSkeleton"),l=Object(c.resolveComponent)("DaCard");return Object(c.openBlock)(),Object(c.createBlock)("div",We,[Object(c.createVNode)("div",ze,[He,Object(c.createVNode)("div",Ee,[Object(c.createVNode)("div",Je,[Object(c.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]),Object(c.createVNode)("div",Xe,[Object(c.createVNode)(l,{class:"order-buy-voucher__card"},{default:Me((function(){return[Object(c.createVNode)("div",Ye,[Object(c.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",qe,[Object(c.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",Ge,[Object(c.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])]),Object(c.createVNode)("div",Ke,[Object(c.createVNode)("div",Qe,[Object(c.createVNode)(i,{visible:!0,height:e.$filters.pxToRem(42)},null,8,["height"])])])]})),_:1})])])})),et=Object(c.defineComponent)({components:{DaCard:_e.a,DaSkeleton:H.a},setup:function(){}});o("fe76");et.render=Ze,et.__scopeId="data-v-dc970c3c";var tt=et,ot=Object(c.defineComponent)({components:{PageWrapper:X.a,DaSkeleton:H.a,BuyVoucher:Pe,OutputHref:J.a,BuyVoucherSkeleton:tt,DaImage:z.a,CancelVestingOrder:E.a},props:{},setup:function(e){var t=Object(oe.b)().t,o=Object(ce.c)().params,n=Object(G.a)().getters,a=Object(ce.d)().back,r=Object(c.computed)((function(){return n.getChainId})),i=Object(c.reactive)({orderId:o.orderId+"",voucherId:o.voucherId+"",voucherSymbol:o.voucherSymbol+"",voucherImage:"",reloadImage:!1,visibleCancel:!1}),l=Object(c.ref)(!1),s=Object(c.ref)(!0),d=Object(c.ref)(!1),u=Object(c.ref)(""),m=Object(c.reactive)({list:[]}),b=Object(c.reactive)({currencySymbol:""}),v=Object(K.b)(b).tokenValueInfo;function h(e){return void 0===e&&(e=!1),Object(W.b)(this,void 0,void 0,(function(){var t;return Object(W.e)(this,(function(o){switch(o.label){case 0:return i.voucherTokenSchema?(m.list=[],[4,Object(q.c)().getVoucherInfo(i.voucherTokenSchema,i.voucherId)]):[2];case 1:return t=o.sent(),d.value=!0,i.voucherInfo=Object(Q.a)([t])[0],i.voucherImage=Y.a.viewVoucherImg(t.URI),u.value=i.voucherImage,"Vesting"===i.voucherTokenSchema.type?(2==i.voucherInfo.releaseType&&i.voucherInfo.maturities.forEach((function(e,t){var o,c=new te.a((null===(o=i.voucherInfo)||void 0===o?void 0:o.percentages[t])+"").dividedBy(new te.a(100)).toNumber(),n=Y.a.dateUTCFormat(1e3*Number(e.toString()));m.list.push({radio:c,date:n})})),i.reloadImage=e):function(){var e,t,o;Object(W.b)(this,void 0,void 0,(function(){var c,n,a,r,l,s,d,b,v;return Object(W.e)(this,(function(h){if(i.voucherImage=Y.a.base64Decode((null===(e=i.voucherInfo)||void 0===e?void 0:e.URI)+"").image,u.value=i.voucherImage,2==(null===(t=i.voucherInfo)||void 0===t?void 0:t.releaseType)){for(c=0;c<5;c++)m.list.push(null);if(i.voucherInfo.terms){n=0;try{for(a=Object(W.f)(i.voucherInfo.terms),r=a.next();!r.done;r=a.next())l=r.value,s=new te.a((null===(o=i.voucherInfo)||void 0===o?void 0:o.percentages[n])+"").dividedBy(new te.a(100)).toNumber(),d=Number(l)/86400+"",m.list[n]={radio:s,date:d},n++}catch(e){b={error:e}}finally{try{r&&!r.done&&(v=a.return)&&v.call(a)}finally{if(b)throw b.error}}}}return[2]}))}))}(),[2]}}))}))}function p(){var e,t;return Object(W.b)(this,void 0,void 0,(function(){var o,c,n;return Object(W.e)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),o=Z.a.solvUtils.getAllocationMarket(),[4,Object(q.a)().getOrderInfo(i.orderId)];case 1:return c=a.sent(),n={order:c.order,currency:c.order.currencyAddress.toLowerCase()!=(null===(e=i.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.address.toLowerCase())?Z.a.solvUtils.getCurrenciesByAddress(o.address,"Secondary",c.order.currencyAddress):null===(t=i.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken,voucher:Z.a.solvUtils.getTokenSchemaByVoucherAddress(c.order.voucherAddress),price:c.price},i.orderInfo=n,i.orderInfo.order.totalUnits=n.order.total,function(e){i.orderItem={voucherId:e.order.tokenId,voucherSymbol:e.voucher.symbol,voucherAddress:e.voucher.address,underlyingSymbol:e.voucher.underlyingToken.symbol,underlyingDecimals:e.voucher.underlyingToken.decimals,underlyingAddress:e.voucher.underlyingToken.address,currencyAddress:e.currency.address,currencySymbol:e.currency.symbol,currencyDecimals:e.currency.decimals,minUnits:e.order.min.toString(),maxUnits:e.order.max.toString(),highest:e.price.highest.toString(),lowest:e.price.lowest.toString(),useAllowList:e.order.useAllowList,interval:e.price.interval,duration:e.price.duration,startTime:e.order.startTime,orderId:e.order.saleId,priceType:e.order.priceType,currentPrice:0==e.order.priceType?e.price.lowest:0,seller:e.order.seller,units:e.order.units.toString()},b.currencySymbol=i.orderItem.underlyingSymbol}(n),[3,3];case 2:return a.sent(),[3,3];case 3:return[2]}}))}))}var O=Object(c.computed)((function(){var e,t;return i.voucherInfo?new te.a(Y.a.tokenDivDecimals((null===(e=i.voucherInfo)||void 0===e?void 0:e.units)||0,null===(t=i.voucherInfo)||void 0===t?void 0:t.underlyingDecimals)).multipliedBy(new te.a(v.price)):"0"}));return Object(c.watch)((function(){return n.getChangeFlag}),(function(e){e&&(d.value=!1,i.voucherTokenSchema=Z.a.solvUtils.getTokenSchemaByVoucherSymbol(o.voucherSymbol+""),h(),p())}),{immediate:!0}),Object(c.watch)((function(){return n.getLastTxReceipt}),(function(e){e&&(h(!0),p())}),{deep:!0}),{t:t,commonData:i,visibleShare:l,visibleOpensea:s,loadVoucherDetailFinish:d,originalVoucherImgUrl:u,stagedData:m,chainId:r,unitValue:O,bindCancel:function(){i.orderCancelInfo={orderId:i.orderId,voucherId:i.voucherId,voucher:{units:i.orderItem.units,totalUnits:i.orderInfo.order.totalUnits,underlyingDecimals:i.orderItem.underlyingDecimals,underlyingSymbol:i.orderItem.underlyingSymbol}},i.visibleCancel=!0},handleCancelFinished:function(){a()}}}});o("b2d3");ot.render=M,ot.__scopeId="data-v-50d20980";t.default=ot},"9d82":function(e,t,o){},a7ad:function(e,t,o){},b2d3:function(e,t,o){"use strict";o("a7ad")},fe76:function(e,t,o){"use strict";o("9d82")}}]);
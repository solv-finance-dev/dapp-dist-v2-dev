(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dbb592e0"],{"2d44":function(e,t,o){"use strict";o("3348")},3348:function(e,t,o){},8286:function(e,t,o){"use strict";o("d146")},b70f:function(e,t,o){"use strict";o.r(t);o("b0c0"),o("ac1f"),o("1276");var c=o("7a23"),a=Object(c.withScopeId)("data-v-1229b056");Object(c.pushScopeId)("data-v-1229b056");var i={class:"voucher-details-top"},r={class:"voucher-details-top__header"},l={class:"header-left"},n={class:"header-right"},s={class:"voucher-details-top__body"},d={class:"voucher-image__inner"},u={class:"voucher-info__inner"},b={class:"base-info"},v={class:"base-info__top"},h={class:"amount-label"},m={class:"amount-text"},O={class:"voucher-symbol"},j={class:"amount-label text-right"},f={class:"text-right"},p={class:"base-value maturity-date"},g={class:"base-info__bottom base-info-border-top"},y={class:"vesting-group"},D={class:"detail-title"},V={class:"spot-settlement-price"},k={key:0,class:"spot-settlement-price__label"},N={class:"base-value"},I=Object(c.createVNode)("path",{d:"M815.36 184.96V128a36.48 36.48 0 0 1 10.24-26.88 37.76 37.76 0 0 1 52.48 0 40.96 40.96 0 0 1 11.52 26.88v172.16a40.32 40.32 0 0 1-37.12 37.12h-173.44a40.32 40.32 0 0 1-26.88-11.52 37.76 37.76 0 0 1 0-52.48 35.84 35.84 0 0 1 26.88-10.24h108.8a372.48 372.48 0 0 0-453.12-75.52A367.36 367.36 0 0 0 170.24 364.8a374.4 374.4 0 0 0-19.84 242.56 369.92 369.92 0 0 0 132.48 202.24A375.04 375.04 0 0 0 512 888.32a368.64 368.64 0 0 0 263.68-108.8A376.32 376.32 0 0 0 885.12 512H960A448 448 0 1 1 136.32 270.08a438.4 438.4 0 0 1 192-164.48 444.16 444.16 0 0 1 256-32 455.68 455.68 0 0 1 230.4 111.36z","p-id":"2148",fill:"#ffffff"},null,-1),S={class:"refresh-oracle-price__text"},C={class:"order-information-content order-information-content-right"},_={class:"info-item-module"},B={class:"info-item-module__body"},T={class:"info-item-module__body--item"},w={class:"body-item-label"},x=Object(c.createVNode)("div",{class:"item-point item-point-up"},null,-1),R={class:"body-item-value"},P={class:"body-item-label"},A=Object(c.createVNode)("div",{class:"item-point item-point-normal"},null,-1),F={class:"body-item-value"},M={class:"equivalent-value"},$={class:"body-item-label"},U=Object(c.createVNode)("div",{class:"item-point item-point-down"},null,-1),z={class:"body-item-value"},H={class:"voucher-details-action__inner"},L={class:"action-item action-left"},W={class:"action-item action-right"};Object(c.popScopeId)();var q=a((function(e,t,o,q,J,E){var G,K,Q,X,Y,Z,ee,te,oe=Object(c.resolveComponent)("DaSkeleton"),ce=Object(c.resolveComponent)("OutputHref"),ae=Object(c.resolveComponent)("DaCard"),ie=Object(c.resolveComponent)("el-col"),re=Object(c.resolveComponent)("DaItem"),le=Object(c.resolveComponent)("IssueTag"),ne=Object(c.resolveComponent)("el-row"),se=Object(c.resolveComponent)("DaButton"),de=Object(c.resolveComponent)("PageWrapper"),ue=Object(c.resolveComponent)("ClaimConvertibleVoucher"),be=Object(c.resolveComponent)("TransferConvertibleVoucher"),ve=Object(c.resolveComponent)("SplitConvertibleVoucher"),he=Object(c.resolveComponent)("MergeConvertibleVoucher"),me=Object(c.resolveComponent)("DeleteVoucher");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)(de,{showBreadcrumbs:!0},{default:a((function(){var o,q,J,E;return[Object(c.createVNode)("div",i,[Object(c.createVNode)("div",r,[Object(c.createVNode)(oe,{visible:!(null!==(o=e.voucherData.voucherTokenSchema)&&void 0!==o&&o.name),height:e.$filters.pxToRem(36),width:e.$filters.pxToRem(320),parentWidth:"auto"},{default:a((function(){var t,o,a;return[Object(c.createVNode)("div",l,[Object(c.createVNode)("img",{src:e.$filters.getTokenLocalLogo(null===(t=e.voucherData.voucherTokenSchema)||void 0===t?void 0:t.logoURI,null===(o=e.voucherData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol),class:"token-logo"},null,8,["src"]),Object(c.createVNode)("span",null,Object(c.toDisplayString)(null===(a=e.voucherData.voucherTokenSchema)||void 0===a?void 0:a.name)+" #"+Object(c.toDisplayString)(e.voucherData.voucherId),1)])]})),_:1},8,["visible","height","width"]),Object(c.createVNode)("div",n,[Object(c.createVNode)(ce,{voucherId:e.voucherData.voucherId,voucherAddress:null===(q=e.voucherData.voucherTokenSchema)||void 0===q?void 0:q.address,underlyingSymbol:null===(J=e.voucherData.voucherTokenSchema)||void 0===J?void 0:J.underlyingToken.symbol,underlyingAddress:null===(E=e.voucherData.voucherTokenSchema)||void 0===E?void 0:E.underlyingToken.address},null,8,["voucherId","voucherAddress","underlyingSymbol","underlyingAddress"])])]),Object(c.createVNode)("div",s,[Object(c.createVNode)(ne,{gutter:32,class:"voucher-info-module"},{default:a((function(){return[Object(c.createVNode)(ie,{span:12},{default:a((function(){return[Object(c.createVNode)(ae,{class:"voucher-image"},{default:a((function(){return[Object(c.createVNode)("div",d,[e.voucherData.voucherImage?(Object(c.openBlock)(),Object(c.createBlock)("img",{key:0,src:e.voucherData.voucherImage,alt:"cher-image__entry"},null,8,["src"])):Object(c.createCommentVNode)("",!0)])]})),_:1})]})),_:1}),Object(c.createVNode)(ie,{span:12},{default:a((function(){return[Object(c.createVNode)(ae,{class:"voucher-info"},{default:a((function(){var o,i,r,l,n;return[Object(c.createVNode)("div",u,[Object(c.createVNode)("div",b,[Object(c.createVNode)("div",v,[Object(c.createVNode)(re,null,{label:a((function(){return[Object(c.createVNode)("span",h,Object(c.toDisplayString)(e.t("Face Value")),1)]})),value:a((function(){return[Object(c.createVNode)(oe,{visible:!e.loadFinish,width:e.$filters.pxToRem(160),height:e.$filters.pxToRem(32)},{default:a((function(){var t,o,a;return[Object(c.createVNode)("span",m,Object(c.toDisplayString)(e.solvMisc.formatOrderPrice((null===(t=e.voucherData.voucherInfo)||void 0===t?void 0:t.units)||0,(null===(o=e.voucherData.voucherInfo)||void 0===o?void 0:o.underlyingDecimals)||"0")),1),Object(c.createVNode)("span",O,Object(c.toDisplayString)(e.voucherData.voucherInfo?null===(a=e.voucherData.voucherInfo.fundCurrencyInfo)||void 0===a?void 0:a.currencySymbol:"--"),1)]})),_:1},8,["visible","width","height"])]})),_:1}),e.disabledClaim((null===(o=e.voucherData.voucherInfo)||void 0===o?void 0:o.maturity)||0)?(Object(c.openBlock)(),Object(c.createBlock)(re,{key:0},{label:a((function(){return[Object(c.createVNode)("span",j,Object(c.toDisplayString)(e.t("Maturity Date (UTC)")),1)]})),value:a((function(){return[Object(c.createVNode)("div",f,[Object(c.createVNode)(oe,{visible:!e.loadFinish,width:e.$filters.pxToRem(200),height:e.$filters.pxToRem(32)},{default:a((function(){var t;return[Object(c.createVNode)("span",p,Object(c.toDisplayString)(e.voucherData.voucherInfo?e.$filters.dateUTCFormat(1e3*(null===(t=e.voucherData.voucherInfo)||void 0===t?void 0:t.maturity)):"--"),1)]})),_:1},8,["visible","width","height"])])]})),_:1})):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.loadFinish?(Object(c.openBlock)(),Object(c.createBlock)(le,{key:0,bottomText:"Matured",bottomBg:"linear-gradient(270deg, #593794 0%, #8849eb 100%)",showTopArea:!1,triangleColor:"rgba(#8849eb, 0.6)",class:"issue-expired-tag"},null,8,["bottomBg"])):Object(c.createCommentVNode)("",!0)],64))]),Object(c.createVNode)("div",g,[Object(c.createVNode)("div",y,[Object(c.createVNode)("span",D,Object(c.toDisplayString)(e.t("Settlement Condition")),1),Object(c.createVNode)("div",V,[e.loadFinish?(Object(c.openBlock)(),Object(c.createBlock)("p",k,Object(c.toDisplayString)(e.t(e.claimableInfo.isExpire?"Settlement Price":"Current Price"))+": ",1)):Object(c.createCommentVNode)("",!0),Object(c.createVNode)("div",null,[Object(c.createVNode)(oe,{visible:!e.loadFinish,width:e.$filters.pxToRem(200),height:e.$filters.pxToRem(16)},{default:a((function(){var o;return[Object(c.createVNode)("div",N,[e.claimableInfo.isRefreshOraclePrice?(Object(c.openBlock)(),Object(c.createBlock)("div",{key:0,class:"refresh-oracle-price",onClick:t[1]||(t[1]=function(){return e.refreshUnderlyingPriceOfTokenId&&e.refreshUnderlyingPriceOfTokenId.apply(e,arguments)})},[(Object(c.openBlock)(),Object(c.createBlock)("svg",{t:"1641461850279",class:["refresh-oracle-price__icon",{"refresh-oracle-price__loading":!e.commonData.loadRefreshOraclePriceFinished}],viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2147"},[I],2)),Object(c.createVNode)("span",S,Object(c.toDisplayString)(e.t("Refresh")),1)])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.claimableInfo.settlePrice)+" "+Object(c.toDisplayString)(e.voucherData.voucherInfo?null===(o=e.voucherData.voucherInfo.fundCurrencyInfo)||void 0===o?void 0:o.currencySymbol:"--"),1)],64))])]})),_:1},8,["visible","width","height"])])])]),Object(c.createVNode)("div",C,[Object(c.createVNode)("div",_,[Object(c.createVNode)("div",B,[Object(c.createVNode)("div",T,[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Settlement Price")),1),Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Claimable")),1)]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"up"===e.priceRangeInfo.status?"up":""},[e.voucherData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",w,[x,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Above"))+" "+Object(c.toDisplayString)(e.solvMisc.formatOrderPrice((null===(i=e.voucherData.voucherInfo)||void 0===i?void 0:i.highestPrice)+"",8,2))+" "+Object(c.toDisplayString)(null===(r=e.voucherData.voucherInfo.fundCurrencyInfo)||void 0===r?void 0:r.currencySymbol),1)]),Object(c.createVNode)("p",R,[Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.priceRangeInfo.highestClaimable),1),Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.voucherData.voucherInfo.underlyingSymbol),1)])],64)):(Object(c.openBlock)(),Object(c.createBlock)(oe,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"normal"===e.priceRangeInfo.status?"normal":""},[e.voucherData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",P,[A,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("In Range")),1)]),Object(c.createVNode)("div",F,[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.priceRangeInfo.normalClaimable)))+" "+Object(c.toDisplayString)(null===(l=e.voucherData.voucherInfo.fundCurrencyInfo)||void 0===l?void 0:l.currencySymbol),1),Object(c.createVNode)("p",M,Object(c.toDisplayString)(e.t("or equivalent value in")+" ".concat(e.voucherData.voucherInfo.underlyingSymbol)),1)])],64)):(Object(c.openBlock)(),Object(c.createBlock)(oe,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"down"===e.priceRangeInfo.status?"down":""},[e.voucherData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",$,[U,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Below"))+" "+Object(c.toDisplayString)(e.solvMisc.formatOrderPrice(e.voucherData.voucherInfo.lowestPrice+"",8,2))+" "+Object(c.toDisplayString)(null===(n=e.voucherData.voucherInfo.fundCurrencyInfo)||void 0===n?void 0:n.currencySymbol),1)]),Object(c.createVNode)("p",z,Object(c.toDisplayString)(e.priceRangeInfo.lowestClaimable)+" "+Object(c.toDisplayString)(e.voucherData.voucherInfo.underlyingSymbol),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)(oe,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"]))],8,["status"])])])])])])])]})),_:1})]})),_:1})]})),_:1})]),e.showAction?(Object(c.openBlock)(),Object(c.createBlock)(ae,{key:0,class:"voucher-details-action"},{default:a((function(){var o;return[Object(c.createVNode)("div",H,[Object(c.createVNode)("div",L,[Object(c.createVNode)(se,{class:"action-btn action-btn-extend",size:"mini",onClick:t[2]||(t[2]=function(t){return e.visibleDialog.transfer=!0})},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Transfer")),1)]})),_:1}),Object(c.createVNode)(se,{class:"action-btn action-btn-extend",size:"mini",onClick:e.handleMergeDialog},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Merge")),1)]})),_:1},8,["onClick"]),Object(c.createVNode)(se,{class:"action-btn action-btn-extend",size:"mini",onClick:e.handleSplitDialog},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Split")),1)]})),_:1},8,["onClick"])]),Object(c.createVNode)("div",W,[Object(c.createVNode)(se,{class:"action-btn action-btn-extend",size:"mini",onClick:e.bindClaim,disabled:e.disabledClaim((null===(o=e.voucherData.voucherInfo)||void 0===o?void 0:o.maturity)||0)||e.claimableInfo.isRefreshOraclePrice},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Claim")),1)]})),_:1},8,["onClick","disabled"]),Object(c.createVNode)(se,{class:"action-btn",size:"mini",disabled:!0,onClick:e.handleAction},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("List")),1)]})),_:1},8,["onClick"])])])]})),_:1})):Object(c.createCommentVNode)("",!0)])]})),_:1}),e.visibleDialog.claim?(Object(c.openBlock)(),Object(c.createBlock)(ue,{key:0,voucherId:(null===(G=e.voucherData)||void 0===G?void 0:G.voucherId)+"",voucherSymbol:null===(K=e.voucherData)||void 0===K?void 0:K.voucherSymbol,visible:e.visibleDialog.claim,onClose:t[3]||(t[3]=function(t){return e.visibleDialog.claim=!1})},null,8,["voucherId","voucherSymbol","visible"])):Object(c.createCommentVNode)("",!0),e.visibleDialog.transfer?(Object(c.openBlock)(),Object(c.createBlock)(be,{key:1,visible:e.visibleDialog.transfer,instance:e.voucherData.voucherInfo,onClose:t[4]||(t[4]=function(t){return e.visibleDialog.transfer=!1})},null,8,["visible","instance"])):Object(c.createCommentVNode)("",!0),e.visibleDialog.split?(Object(c.openBlock)(),Object(c.createBlock)(ve,{key:2,voucherId:(null===(Q=e.voucherData)||void 0===Q?void 0:Q.voucherId)+"",voucherSymbol:null===(X=e.voucherData)||void 0===X?void 0:X.voucherSymbol,visible:e.visibleDialog.split,onClose:t[5]||(t[5]=function(t){return e.visibleDialog.split=!1})},null,8,["voucherId","voucherSymbol","visible"])):Object(c.createCommentVNode)("",!0),e.visibleDialog.merge?(Object(c.openBlock)(),Object(c.createBlock)(he,{key:3,voucherId:(null===(Y=e.voucherData)||void 0===Y?void 0:Y.voucherId)+"",voucherSymbol:null===(Z=e.voucherData)||void 0===Z?void 0:Z.voucherSymbol,visible:e.visibleDialog.merge,onClose:t[6]||(t[6]=function(t){return e.visibleDialog.merge=!1})},null,8,["voucherId","voucherSymbol","visible"])):Object(c.createCommentVNode)("",!0),e.visibleDialog.delete?(Object(c.openBlock)(),Object(c.createBlock)(me,{key:4,voucherId:(null===(ee=e.voucherData)||void 0===ee?void 0:ee.voucherId)+"",voucherSymbol:null===(te=e.voucherData)||void 0===te?void 0:te.voucherSymbol,visible:e.visibleDialog.delete,onClose:t[7]||(t[7]=function(t){return e.visibleDialog.delete=!1}),needBack:!0},null,8,["voucherId","voucherSymbol","visible"])):Object(c.createCommentVNode)("",!0)],64)})),J=o("e205"),E=o("6363"),G=o("5aec"),K=o("9998"),Q=o("73cf"),X=o("46e5"),Y=o("5fbb"),Z=o("0114"),ee=o("a6f3"),te=o("d0f3"),oe=o("54e4"),ce=o("f41c"),ae=o("5614"),ie=Object(c.defineComponent)({components:{PageWrapper:ce.a,DaSkeleton:K.a,DaCard:E.a,DaItem:G.a,DaButton:J.a,ClaimConvertibleVoucher:X.a,TransferConvertibleVoucher:oe.a,SplitConvertibleVoucher:te.a,MergeConvertibleVoucher:Z.a,OutputHref:ee.a,DeleteVoucher:Y.a,IssueTag:Q.a},setup:function(){var e=Object(ae.a)();return{t:e.t,loadFinish:e.loadFinish,voucherData:e.voucherData,originalVoucherImgUrl:e.originalVoucherImgUrl,visibleDialog:e.visibleDialog,commonData:e.commonData,showAction:e.showAction,tokenValueInfo:e.tokenValueInfo,claimableInfo:e.claimableInfo,priceRangeInfo:e.priceRangeInfo,disabledClaim:e.disabledClaim,solvMisc:e.solvMisc,handleAction:e.handleAction,bindClaim:e.bindClaim,handleMergeDialog:e.handleMergeDialog,handleSplitDialog:e.handleSplitDialog,refreshUnderlyingPriceOfTokenId:e.refreshUnderlyingPriceOfTokenId}}});o("8286"),o("2d44");ie.render=q,ie.__scopeId="data-v-1229b056";t.default=ie},d146:function(e,t,o){}}]);
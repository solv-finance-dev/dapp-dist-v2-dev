(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3b11d92a"],{"1b03":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o=Object(c.withScopeId)("data-v-04ca4218");Object(c.pushScopeId)("data-v-04ca4218");var i={class:"detail-group ivo-order-details"},n={class:"voucher-aria"},r={class:"m-order-detail__info--label"},l={class:"m-order-detail__info--content info-item-area"},s={class:"info-item-area__module border-bottom"},d={class:"content-item"},b={class:"content-label"},u={class:"content-value"},m={class:"order-info-remaining-value-text remaining-text"},O={class:"remaining-symbol"},f={class:"content-item"},p={class:"content-label"},j={class:"content-value"},g={class:"info-item-area__module"},v={class:"content-item",style:{"align-items":"flex-start"}},y={class:"content-label"},h={class:"content-value"},V={key:0,class:"order-info-duration"},N={key:1,class:"order-info-duration"},k={class:"text-item-value"},D={class:"content-item",style:{"align-items":"flex-start"}},x={class:"content-label"},S={class:"content-value"},B={key:0,class:"order-info-duration"},T={key:1,class:"order-info-duration"},C={class:"text-item-value"},_={class:"content-item"},I={class:"content-label"},w={class:"content-value"},R={class:"m-order-detail__info--label"},M={class:"m-order-detail__info--content"},P={class:"content-item"},A={class:"content-label"},U={class:"content-value"},F={key:1,class:"order-info-remaining-value-text font-variant-numeric"},$={class:"m-order-detail__info--content info-item-area"},L={class:"info-item-module"},Y={class:"info-item-module__label"},W={class:"info-item-module__body"},z={class:"info-item-module__body--item"},E={class:"body-item-label"},H=Object(c.createVNode)("div",{class:"item-point item-point-up"},null,-1),J={class:"body-item-value"},q={class:"body-item-label"},X=Object(c.createVNode)("div",{class:"item-point item-point-normal"},null,-1),G={class:"body-item-value"},K={class:"body-item-label"},Q=Object(c.createVNode)("div",{class:"item-point item-point-down"},null,-1),Z={class:"body-item-value"},ee={class:"m-order-detail__info--desc"},te=Object(c.createVNode)("br",null,null,-1);Object(c.popScopeId)();var ae=o((function(e,t,a,ae,ce,oe){var ie=Object(c.resolveComponent)("DaSkeleton"),ne=Object(c.resolveComponent)("BuyIVOConvertibleVoucher"),re=Object(c.resolveComponent)("DaCard"),le=Object(c.resolveComponent)("Wrapper");return Object(c.openBlock)(),Object(c.createBlock)(le,{showFooter:!1},{default:o((function(){return[Object(c.createVNode)("div",i,[Object(c.createVNode)(ie,{visible:!e.offering.data,width:"60%",height:e.$filters.mpxToRem(16),class:"ivo-order-details__top"},{default:o((function(){return[Object(c.createVNode)("img",{src:e.offering.data.voucher.underlyingToken.logoURI,class:"voucher-icon"},null,8,["src"]),Object(c.createVNode)("span",n,Object(c.toDisplayString)(e.offering.data.voucher.underlyingToken.symbol)+" IVO Order NO."+Object(c.toDisplayString)(e.offeringId),1)]})),_:1},8,["visible","height"]),Object(c.createVNode)(ne,{offeringId:e.offeringId+"",onFaceValueCall:e.handleFaceValueCall},null,8,["offeringId","onFaceValueCall"]),e.offering.data?(Object(c.openBlock)(),Object(c.createBlock)(re,{key:0,class:"m-order-detail__info"},{default:o((function(){return[Object(c.createVNode)("div",r,Object(c.toDisplayString)(e.t("Issuance"))+" "+Object(c.toDisplayString)(e.t("Information")),1),Object(c.createVNode)("div",l,[Object(c.createVNode)("div",s,[Object(c.createVNode)("div",d,[Object(c.createVNode)("div",b,Object(c.toDisplayString)(e.t("Remaining")),1),Object(c.createVNode)("div",u,[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)(ie,{key:0,visible:!0,width:e.$filters.mpxToRem(60),height:e.$filters.mpxToRem(14)},null,8,["width","height"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("span",m,Object(c.toDisplayString)(e.parseUnitsValue(e.offering.data.units)),1),Object(c.createVNode)("span",O,Object(c.toDisplayString)(" ".concat(e.offering.data.currency.symbol)),1)],64))])]),Object(c.createVNode)("div",f,[Object(c.createVNode)("div",p,Object(c.toDisplayString)(e.t("Total")),1),Object(c.createVNode)("div",j,[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)(ie,{key:0,visible:!0,width:e.$filters.mpxToRem(60),height:e.$filters.mpxToRem(14)},null,8,["width","height"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.parseUnitsValue(e.offering.data.totalUnits))+" "+Object(c.toDisplayString)(e.offering.data.currency.symbol),1)],64))])])]),Object(c.createVNode)("div",g,[Object(c.createVNode)("div",v,[Object(c.createVNode)("div",y,Object(c.toDisplayString)(e.t("Sale Start Time (UTC)")),1),Object(c.createVNode)("div",h,[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)("span",V,[Object(c.createVNode)(ie,{visible:!0,width:e.$filters.mpxToRem(60),height:e.$filters.mpxToRem(14)},null,8,["width","height"])])):(Object(c.openBlock)(),Object(c.createBlock)("label",N,[Object(c.createVNode)("div",k,[Object(c.createVNode)("p",null,Object(c.toDisplayString)(" ".concat(e.$filters.dayjsUTCFormat(1e3*e.offering.data.startTime,"YYYY-MM-DD HH:mm")," ")),1)])]))])]),Object(c.createVNode)("div",D,[Object(c.createVNode)("div",x,Object(c.toDisplayString)(e.t("Sale End Time (UTC)")),1),Object(c.createVNode)("div",S,[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)("span",B,[Object(c.createVNode)(ie,{visible:!0,width:e.$filters.mpxToRem(60),height:e.$filters.mpxToRem(14)},null,8,["width","height"])])):(Object(c.openBlock)(),Object(c.createBlock)("label",T,[Object(c.createVNode)("div",C,[Object(c.createVNode)("p",null,Object(c.toDisplayString)(" ".concat(e.$filters.dayjsUTCFormat(1e3*e.offering.data.endTime,"YYYY-MM-DD HH:mm")," ")),1)])]))])]),Object(c.createVNode)("div",_,[Object(c.createVNode)("div",I,Object(c.toDisplayString)(e.t("Participating Condition")),1),Object(c.createVNode)("div",w,Object(c.toDisplayString)(e.offering.data.useAllowList?" ".concat(e.t("Project Whitelist")):" ".concat(e.t("None"))),1)])])])]})),_:1})):Object(c.createCommentVNode)("",!0),e.offering.data?(Object(c.openBlock)(),Object(c.createBlock)(re,{key:1,class:"m-order-detail__info"},{default:o((function(){return[Object(c.createVNode)("div",R,Object(c.toDisplayString)(e.offering.data.voucher.underlyingToken.type)+" "+Object(c.toDisplayString)(e.t("Voucher"))+" "+Object(c.toDisplayString)(e.t("Information")),1),Object(c.createVNode)("div",M,[Object(c.createVNode)("div",P,[Object(c.createVNode)("div",A,Object(c.toDisplayString)(e.t("Maturity Date (UTC)")),1),Object(c.createVNode)("div",U,[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)(ie,{key:0,visible:!0,width:e.$filters.pxToRem(120),height:e.$filters.pxToRem(14)},null,8,["width","height"])):(Object(c.openBlock)(),Object(c.createBlock)("span",F,Object(c.toDisplayString)(e.$filters.dayjsUTCFormat(1e3*e.offering.mintParams.maturity,"YYYY-MM-DD")),1))])])]),Object(c.createVNode)("div",$,[Object(c.createVNode)("div",L,[Object(c.createVNode)("div",Y,Object(c.toDisplayString)(e.t("Settlement Conditions")),1),Object(c.createVNode)("div",W,[Object(c.createVNode)("div",z,[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Settlement Price")),1),Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Claimable")),1)]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"up"===e.priceRangeInfo.status?"up":""},[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)(ie,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",E,[H,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Over"))+" "+Object(c.toDisplayString)(e.solvMisc.formatOrderPrice(e.offering.mintParams.highestPrice,8,2))+" "+Object(c.toDisplayString)(e.offering.data.currency.symbol),1)]),Object(c.createVNode)("p",J,[Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.priceRangeInfo.highestClaimable),1),Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.offering.data.voucher.underlyingToken.symbol),1)])],64))],8,["status"]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"normal"===e.priceRangeInfo.status?"normal":""},[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)(ie,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",q,[X,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("In Range")),1)]),Object(c.createVNode)("p",G,Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.priceRangeInfo.normalClaimable)))+" "+Object(c.toDisplayString)(e.offering.data.currency.symbol),1)],64))],8,["status"]),Object(c.createVNode)("div",{class:"info-item-module__body--item",status:"down"===e.priceRangeInfo.status?"down":""},[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)(ie,{key:0,visible:!0,height:e.$filters.pxToRem(16)},null,8,["height"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createVNode)("div",K,[Q,Object(c.createVNode)("span",null,Object(c.toDisplayString)(e.t("Under"))+" "+Object(c.toDisplayString)(e.solvMisc.formatOrderPrice(e.offering.mintParams.lowestPrice,8,2))+" "+Object(c.toDisplayString)(e.offering.data.currency.symbol),1)]),Object(c.createVNode)("p",Z,Object(c.toDisplayString)(e.priceRangeInfo.lowestClaimable)+" "+Object(c.toDisplayString)(e.offering.data.voucher.underlyingToken.symbol),1)],64))],8,["status"])])])]),Object(c.createVNode)("div",ee,[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("If settlement price is within the set price range, the holder can redeem the face value of the convertible bond in dollars or the equivalent value in tokens."))+" ",1),te,Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.t("If settlement price is outside the set price range, the holder can only redeem the designated fixed number of tokens.")),1)])]})),_:1})):Object(c.createCommentVNode)("",!0)])]})),_:1})})),ce=a("6363"),oe=a("9998"),ie=a("d317"),ne=(a("99af"),Object(c.withScopeId)("data-v-38719617"));Object(c.pushScopeId)("data-v-38719617");var re={class:"order-buy-voucher"},le={class:"order-buy-voucher__header"},se={class:"order-buy-header__content"},de={class:"header-center"},be={class:"range-rate-of-return-with-range"},ue={class:"range-rate-label"},me={class:"range-rate-value"},Oe={class:"range-rate-unit"},fe={class:"range-rate-of-return-with-range"},pe={class:"range-rate-label"},je={class:"range-rate-value range-rate-value__right"},ge={class:"range-rate-unit"},ve={class:"order-buy-voucher__body"},ye={class:"card-form-item"},he={class:"suffix-item"},Ve={class:"info-module"},Ne={key:0,class:"purchase-limit info-item"},ke={key:1,class:"purchase-limit info-item"},De={class:"info-module"},xe={class:"desc-text"},Se={class:"card-form-item"},Be={class:"face-value-content info-item info-item-flex"},Te={class:"info-item-label"},Ce={class:"info-item-value"},_e={class:"action-btn-module"},Ie={key:0,class:"single-button-container"},we={key:0,class:"muti-button-container"},Re={class:"button-item pd-right-10"},Me={class:"button-item"},Pe={key:1,class:"single-button-container"};Object(c.popScopeId)();var Ae=ne((function(e,t,a,o,i,n){var r=Object(c.resolveComponent)("TextTip"),l=Object(c.resolveComponent)("DaSkeleton"),s=Object(c.resolveComponent)("DaInput"),d=Object(c.resolveComponent)("DaItem"),b=Object(c.resolveComponent)("DaButton"),u=Object(c.resolveComponent)("DaCard"),m=Object(c.resolveComponent)("Loading");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)("div",re,[e.offering.data?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("div",le,[Object(c.createVNode)("div",se,[Object(c.createVNode)("div",de,[e.offering.mintParams?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("div",be,[Object(c.createVNode)("p",ue,Object(c.toDisplayString)(e.t("Settlement Price Range")),1),Object(c.createVNode)("p",me,[Object(c.createTextVNode)(Object(c.toDisplayString)("".concat(e.solvMisc.formatOrderPrice(e.offering.mintParams.lowestPrice,8,2),"  ~ ").concat(e.solvMisc.formatOrderPrice(e.offering.mintParams.highestPrice,8,2)))+" ",1),Object(c.createVNode)("span",Oe,Object(c.toDisplayString)(e.offering.data.currency.symbol),1)])]),Object(c.createVNode)("div",fe,[Object(c.createVNode)("p",pe,[Object(c.createVNode)(r,null,{content:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Expected rate of return within the price range")),1)]})),default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Rate Of Return")),1)]})),_:1})]),Object(c.createVNode)("p",je,[Object(c.createTextVNode)(Object(c.toDisplayString)(e.parseRateOfReturn?e.parseRateOfReturn:"")+" ",1),Object(c.createVNode)("span",ge,Object(c.toDisplayString)(e.parseRateOfReturn?" %":""),1)])])],64)):(Object(c.openBlock)(),Object(c.createBlock)(l,{key:1,visible:!0,height:e.$filters.pxToRem(32)},null,8,["height"]))])])]),Object(c.createVNode)("div",ve,[Object(c.createVNode)(u,{class:"order-buy-voucher__card"},{default:ne((function(){return[Object(c.createVNode)("div",ye,[Object(c.createVNode)(d,{label:e.t("Purchase By Value")},{value:ne((function(){return[Object(c.createVNode)(s,{mode:"decimal",decimals:e.offering.data.currency.decimal,modelValue:e.submitForm.payment,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.submitForm.payment=t}),class:"input-entry",maxlength:"32",border:!0,placeholder:"0.0",disabled:!e.allowPurchase||e.isUpcomingOffering||e.purchaseMaxUnits||e.isTimeOutOffering,onInput:e.handlePaymentInput},{suffix:ne((function(){return[Object(c.createVNode)("span",{onClick:t[1]||(t[1]=function(){return e.handleMaxAvailableAmount&&e.handleMaxAvailableAmount.apply(e,arguments)}),class:"suffix-item"},Object(c.toDisplayString)(e.t("MAX")),1),Object(c.createVNode)("span",he,Object(c.toDisplayString)(e.offering.data?e.offering.data.currency.symbol:""),1)]})),_:1},8,["decimals","modelValue","disabled","onInput"])]})),descLabel:ne((function(){return[Object(c.createVNode)("div",Ve,[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)("span",Ne,[Object(c.createVNode)(l,{visible:!0,width:"120px",height:e.$filters.mpxToRem(14)},null,8,["height"])])):(Object(c.openBlock)(),Object(c.createBlock)("label",ke,[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("".concat(e.calMaxAvailableAmount.title)))+": ",1),"Purchase Limit"==e.calMaxAvailableAmount.title?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.parseUnitsValue(e.calMaxAvailableAmount.min))+" - "+Object(c.toDisplayString)(e.parseUnitsValue(e.calMaxAvailableAmount.max)),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.parseUnitsValue(e.calMaxAvailableAmount.value)),1)],64)),Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.offering.data.currency.symbol),1)]))]),Object(c.createVNode)("div",De,[Object(c.createVNode)("span",xe,[Object(c.createVNode)(l,{visible:e.isLoading,width:"120px",height:e.$filters.mpxToRem(14)},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Wallet Balance"))+": "+Object(c.toDisplayString)(e.$filters.parseThousandsValue(e.$filters.tokenDivDecimals(e.account.currencyBalance,e.offering.data.currency.decimals,6)))+" "+Object(c.toDisplayString)(e.offering.data.currency.symbol),1)]})),_:1},8,["visible","height"])])])]})),_:1},8,["label"])]),Object(c.createVNode)("div",Se,[Object(c.createVNode)("div",Be,[Object(c.createVNode)("div",Te,[Object(c.createVNode)(r,null,{content:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Estimated claimable after maturity")),1)]})),default:ne((function(){return[Object(c.createTextVNode)(" "+Object(c.toDisplayString)(e.t("Face Value")),1)]})),_:1})]),Object(c.createVNode)("div",Ce,Object(c.toDisplayString)(e.submitForm.amount?e.$filters.parseThousandsValue(e.$filters.hideMantissa(e.submitForm.amount)):"0")+" "+Object(c.toDisplayString)(e.offering.data?e.offering.data.currency.symbol:""),1)]),Object(c.createVNode)("div",_e,[e.isLoading?(Object(c.openBlock)(),Object(c.createBlock)("div",Ie,[Object(c.createVNode)(b,{size:"medium",full:!0,plain:"",loading:e.isConfirming,disabled:!e.allowConfirm,onClick:e.handleConfirm},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Buy")),1)]})),_:1},8,["loading","disabled","onClick"])])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.needApprove?(Object(c.openBlock)(),Object(c.createBlock)("div",we,[Object(c.createVNode)("div",Re,[Object(c.createVNode)(b,{size:"medium",full:!0,plain:"",onClick:e.handleApprove,disabled:e.isApproving,loading:e.isApproving},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Approve")),1)]})),_:1},8,["onClick","disabled","loading"])]),Object(c.createVNode)("div",Me,[Object(c.createVNode)(b,{size:"medium",full:!0,loading:e.isConfirming,disabled:!e.allowConfirm||!e.allowPurchase||e.isUpcomingOffering||e.purchaseMaxUnits||e.calPurchaseMaxUnits||e.isTimeOutOffering,onClick:e.handleConfirm},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Buy")),1)]})),_:1},8,["loading","disabled","onClick"])])])):(Object(c.openBlock)(),Object(c.createBlock)("div",Pe,[Object(c.createVNode)(b,{size:"medium",full:!0,loading:e.isConfirming,disabled:!e.allowConfirm||!e.allowPurchase||e.isUpcomingOffering||e.purchaseMaxUnits||e.calPurchaseMaxUnits||e.isTimeOutOffering,plain:"",onClick:e.handleConfirm},{default:ne((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("".concat(e.confirmButtonText))),1)]})),_:1},8,["loading","disabled","onClick"])]))],64))])])]})),_:1})])],64)):Object(c.createCommentVNode)("",!0)]),e.commonData.visibleLoading?(Object(c.openBlock)(),Object(c.createBlock)(m,{key:0,visible:e.commonData.visibleLoading,onClose:t[3]||(t[3]=function(t){return e.commonData.visibleLoading=!1}),onTxDone:e.handleTxDone,needDone:!0},null,8,["visible","onTxDone"])):Object(c.createCommentVNode)("",!0)],64)})),Ue=a("e205"),Fe=a("4be1"),$e=a("5aec"),Le=a("e672"),Ye=a("9ddb"),We=a("c6bc"),ze=Object(c.defineComponent)({components:{DaCard:ce.a,DaItem:$e.a,DaInput:Fe.a,DaButton:Ue.a,Loading:Ye.a,DaSkeleton:oe.a,TextTip:Le.a},props:{offeringId:{type:String,default:""}},emits:["close","txEnd","onFinished","unlist","faceValueCall"],setup:function(e,t){var a=t.emit,o=Object(We.a)(e.offeringId),i=o.offering,n=o.isLoading,r=o.t,l=o.availablePercent,s=o.availablePercentText,d=o.useVestingPeriodUnit,b=o.submitForm,u=o.account,m=o.handlePaymentInput,O=o.handleAmountInput,f=o.needApprove,p=o.isApproving,j=o.isConfirming,g=o.handleApprove,v=o.allowConfirm,y=o.handleConfirm,h=o.handleMaxAvailableAmount,V=o.allowPurchase,N=o.isUpcomingOffering,k=o.purchaseMaxUnits,D=o.calPurchaseMaxUnits,x=o.isTimeOutOffering,S=o.isInsufficientWalletBalance,B=o.confirmButtonText,T=o.commonData,C=o.handleTxDone,_=o.isShowNoLimit,I=o.solvMisc,w=o.parseUnlockDate,R=o.calMaxAvailableAmount,M=o.parseUnitsValue,P=o.parseRateOfReturn;return Object(c.watch)((function(){return b.amount}),(function(){a("faceValueCall",b.amount)})),{offering:i,isLoading:n,t:r,availablePercent:l,availablePercentText:s,useVestingPeriodUnit:d,submitForm:b,account:u,handlePaymentInput:m,handleAmountInput:O,needApprove:f,isApproving:p,isConfirming:j,handleApprove:g,allowConfirm:v,handleConfirm:y,handleMaxAvailableAmount:h,allowPurchase:V,isUpcomingOffering:N,purchaseMaxUnits:k,calPurchaseMaxUnits:D,isTimeOutOffering:x,isInsufficientWalletBalance:S,confirmButtonText:B,commonData:T,handleTxDone:C,isShowNoLimit:_,solvMisc:I,parseUnlockDate:w,calMaxAvailableAmount:R,parseUnitsValue:M,parseRateOfReturn:P}}});a("5d1d");ze.render=Ae,ze.__scopeId="data-v-38719617";var Ee=ze,He=a("6c02"),Je=Object(c.defineComponent)({components:{Wrapper:ie.a,DaSkeleton:oe.a,BuyIVOConvertibleVoucher:Ee,DaCard:ce.a},setup:function(){var e=Object(He.c)().params.offeringId,t=Object(We.a)(e),a=t.offering,c=t.isLoading,o=t.t,i=t.commonData,n=t.handleTxDone,r=t.solvMisc,l=t.rate,s=t.parseUnitsValue,d=t.priceRangeInfo,b=t.submitForm;return{offering:a,isLoading:c,t:o,commonData:i,handleTxDone:n,solvMisc:r,rate:l,parseUnitsValue:s,offeringId:e,priceRangeInfo:d,handleFaceValueCall:function(e){b.amount=e}}}});a("3ee9"),a("3df5");Je.render=ae,Je.__scopeId="data-v-04ca4218";t.default=Je},"3df5":function(e,t,a){"use strict";a("968a")},"3ee9":function(e,t,a){"use strict";a("ec41")},"5d1d":function(e,t,a){"use strict";a("f040")},"968a":function(e,t,a){},ec41:function(e,t,a){},f040:function(e,t,a){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7cb3f14b"],{"0574":function(e,t,a){},1954:function(e,t,a){"use strict";a("0574")},"2ba9":function(e,t,a){},"8c8c":function(e,t,a){"use strict";a.r(t);a("a9e3");var o=a("7a23"),c=Object(o.withScopeId)("data-v-0a2c052f");Object(o.pushScopeId)("data-v-0a2c052f");var n={key:0,class:"ivo-convertible-issue"},r={class:"ivo-convertible-issue__item"},i={class:"ivo-convertible-issue__inner ivo-convertible-issue__left"},s={class:"ivo-convertible-issue__item"},l={class:"ivo-convertible-issue__inner ivo-convertible-issue__right"},d={class:"ivo-convertible-issue__inner ivo-convertible-issue__right"},u={class:"view-info-module"},m={class:"view-info-module__item"},b={class:"view-info-module__inner"},p={class:"label"},v={class:"value"},O=Object(o.createTextVNode)("--"),j={class:"view-info-module__item view-info-module__border"},f={class:"view-info-module__inner"},h={class:"label"},V={class:"value"},g=Object(o.createTextVNode)("--"),y={class:"view-info-module__item"},D={class:"view-info-module__inner"},k={class:"label"},T={class:"value"},N=Object(o.createTextVNode)("--"),w={class:"view-info-module__item"},S={class:"view-info-module__inner"},_={class:"label"},F=Object(o.createTextVNode)("--"),x={key:0,class:"view-info-module__desc"},A={class:"danger-tip-module"},C={class:"danger-tip"},P={class:"view-info-module"},B={class:"view-info-module__item"},I={class:"view-info-module__inner"},L={class:"action-module"};Object(o.popScopeId)();var U=c((function(e,t,a,U,M,H){var R=Object(o.resolveComponent)("Setup1"),E=Object(o.resolveComponent)("Setup3"),$=Object(o.resolveComponent)("DaButton"),q=Object(o.resolveComponent)("PageWrapper"),W=Object(o.resolveComponent)("Loading"),J=Object(o.resolveComponent)("TxFinish");return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[Object(o.createVNode)(q,{showBreadcrumbs:!0},{default:c((function(){var t,a;return[e.commonData.loadFinished?(Object(o.openBlock)(),Object(o.createBlock)("div",n,[Object(o.createVNode)("div",r,[Object(o.createVNode)("div",i,[Object(o.createVNode)(R,{onNext:e.bindSetup1Next},null,8,["onNext"])])]),Object(o.createVNode)("div",s,[Object(o.createVNode)("div",l,[Object(o.createVNode)(E,{onNext:e.bindSetup3Next,setup1Data:e.commonData.setup1.data},null,8,["onNext","setup1Data"])]),Object(o.createVNode)("div",d,[Object(o.createVNode)("div",u,[Object(o.createVNode)("div",m,[Object(o.createVNode)("div",b,[Object(o.createVNode)("div",p,Object(o.toDisplayString)(e.t("Maturity Date (UTC)")),1),Object(o.createVNode)("div",v,[e.commonData.setup1.data.maturity?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$filters.dateUTCFormat(1e3*Number(e.commonData.setup1.data.maturity))),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[O],64))])])]),Object(o.createVNode)("div",j,[Object(o.createVNode)("div",f,[Object(o.createVNode)("div",h,Object(o.toDisplayString)(e.t("Fee")),1),Object(o.createVNode)("div",V,[e.commonData.setup1.data.voucherTokenSchema?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$filters.viewTokenDivDecimals(e.commonData.listFeeRate,2,2)+"%"),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[g],64))])])]),Object(o.createVNode)("div",y,[Object(o.createVNode)("div",D,[Object(o.createVNode)("div",k,Object(o.toDisplayString)(e.t("Deposit Token"))+" "+Object(o.toDisplayString)(e.commonData.setup1.data&&e.commonData.setup1.data.voucherTokenSchema?"(".concat(null===(t=e.commonData.setup1.data.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken.symbol,")"):""),1),Object(o.createVNode)("div",T,[e.commonData.setup1.finished?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$filters.viewFixed(e.commonData.setup1.data.tokenInAmount)),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[N],64))])])]),Object(o.createVNode)("div",w,[Object(o.createVNode)("div",S,[Object(o.createVNode)("div",_,Object(o.toDisplayString)(e.t("Wallet Balance"))+" "+Object(o.toDisplayString)(e.commonData.setup1.data&&e.commonData.setup1.data.voucherTokenSchema?"(".concat(null===(a=e.commonData.setup1.data.voucherTokenSchema)||void 0===a?void 0:a.underlyingToken.symbol,")"):""),1),Object(o.createVNode)("div",{class:["value",{"danger-tip":!e.accountInfo.compTokenInAmount&&e.commonData.setup1.finished}]},[e.commonData.setup1.data.voucherTokenSchema?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$filters.parseThousandsValue(e.accountInfo.balance)),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[F],64))],2)]),!e.accountInfo.compTokenInAmount&&e.commonData.setup1.finished?(Object(o.openBlock)(),Object(o.createBlock)("div",x,[Object(o.createVNode)("div",A,[Object(o.createVNode)("span",C,Object(o.toDisplayString)(e.t("Wallet balance required"))+" ≥ "+Object(o.toDisplayString)(e.commonData.setup1.data?e.commonData.setup1.data.tokenInAmount:"--"),1)])])):Object(o.createCommentVNode)("",!0)])]),Object(o.createVNode)("div",P,[Object(o.createVNode)("div",B,[Object(o.createVNode)("div",I,[Object(o.createVNode)("div",L,[!e.commonData.isApprove&&e.accountInfo.isVoucherManager?(Object(o.openBlock)(),Object(o.createBlock)($,{key:0,disabled:e.commonData.visibleApproveLoading,loading:e.commonData.visibleApproveLoading,onClick:e.bindApprove,class:"action-btn"},{default:c((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Approve")),1)]})),_:1},8,["disabled","loading","onClick"])):Object(o.createCommentVNode)("",!0),Object(o.createVNode)($,{disabled:e.disabledConfirm||e.commonData.visibleIssueLoading||!e.accountInfo.isVoucherManager||!e.commonData.isApprove,loading:e.commonData.visibleIssueLoading,onClick:e.bindIssue,class:"action-btn"},{default:c((function(){return[e.accountInfo.isVoucherManager?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Confirm")),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("You do not have permission to issue.")),1)],64))]})),_:1},8,["disabled","loading","onClick"])])])])])])])])):Object(o.createCommentVNode)("",!0)]})),_:1}),e.commonData.visibleLoading?(Object(o.openBlock)(),Object(o.createBlock)(W,{key:0,visible:e.commonData.visibleLoading,onClose:t[1]||(t[1]=function(t){return e.commonData.visibleLoading=!1}),onTxDone:e.handleTxDone,needDone:!0},null,8,["visible","onTxDone"])):Object(o.createCommentVNode)("",!0),e.commonData.visibleTxFinish?(Object(o.openBlock)(),Object(o.createBlock)(J,{key:1,visible:e.commonData.visibleTxFinish,hash:e.commonData.txHash,title:"IVO Issued",onClose:e.handleTxFinishedClose,pathName:"IssuanceConvertible"},null,8,["visible","hash","onClose"])):Object(o.createCommentVNode)("",!0)],64)})),M=(a("d3b7"),a("b680"),a("9ab4")),H=a("e205"),R=a("52f9"),E=a("9ddb"),$=a("f41c"),q=a("2020"),W=a("9707"),J=a("f94c"),K=a("1d85"),X=a("1c5c"),Y=a("88c6"),z=a("901e"),G=a.n(z),Q=a("6573"),Z=a.n(Q),ee=a("47e2"),te=a("6c02"),ae=Object(o.withScopeId)("data-v-07101620");Object(o.pushScopeId)("data-v-07101620");var oe={class:"ivo-convertible-setup1"},ce={class:"token-content"},ne={class:"token-content__text"},re={key:1},ie={class:"token-content"},se={class:"token-content__text"},le={class:"total-value-module"},de={class:"currency-select-module"},ue={class:"token-content"},me={class:"token-content__text"},be={key:1},pe={class:"token-content"},ve={class:"token-content__text"},Oe={class:"setup-form"},je={class:"setup-form__inner"},fe=Object(o.createVNode)("span",null,"APR",-1),he=Object(o.createTextVNode)("%"),Ve={class:"face-value"},ge={class:"desc-module desc-value-right"},ye={class:"action-area"},De={class:"bond-range-module"},ke={key:0},Te={class:"price-range"},Ne={class:"price-range-item__label"},we={class:"price-range-item__value"},Se={key:0,class:"bond-range-module__bottom"},_e={class:"bond-range-module__value"},Fe={class:"bond-range-module__unit"},xe={class:"price-range-item__label"},Ae={class:"price-range-item__value"},Ce={key:0,class:"bond-range-module__bottom"},Pe={class:"bond-range-module__value"},Be={class:"bond-range-module__unit"},Ie={class:"price-range-desc"};Object(o.popScopeId)();var Le=ae((function(e,t,a,c,n,r){var i=Object(o.resolveComponent)("DaSelect"),s=Object(o.resolveComponent)("DaItem"),l=Object(o.resolveComponent)("DaInput");return Object(o.openBlock)(),Object(o.createBlock)("div",oe,[Object(o.createVNode)(s,{label:e.t("Select Token"),class:"setup-form-item"},{value:ae((function(){return[Object(o.createVNode)(i,{modelValue:e.setup1Form.voucherAddress,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.setup1Form.voucherAddress=t}),options:e.commonData.tokenList,selectedKey:"symbol",selectedValue:"address",onChange:e.handleSelectToken,class:["module-form__node",{"module-form__node__0":!e.setup1Form.voucherAddress}],disabled:!e.commonData.tokenList||e.commonData.tokenList&&0==e.commonData.tokenList.length},{content:ae((function(){var t,a;return[Object(o.createVNode)("div",ce,[e.setup1Form.voucherAddress?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createVNode)("img",{src:null===(t=e.setup1Form.voucherTokenSchema)||void 0===t?void 0:t.logoURI,class:"token-content__icon"},null,8,["src"]),Object(o.createVNode)("span",ne,Object(o.toDisplayString)(null===(a=e.setup1Form.voucherTokenSchema)||void 0===a?void 0:a.underlyingToken.symbol),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)("span",re,Object(o.toDisplayString)(e.t("Select Token")),1))])]})),option:ae((function(t){var a=t.row;return[Object(o.createVNode)("div",ie,[Object(o.createVNode)("img",{src:e.$filters.getTokenLocalLogo(a.logoURI,a.symbol),class:"token-content__icon"},null,8,["src"]),Object(o.createVNode)("span",se,Object(o.toDisplayString)(a.symbol),1)])]})),_:1},8,["modelValue","options","onChange","class","disabled"])]})),_:1},8,["label"]),Object(o.createVNode)(s,{label:e.t("Total Issuance Value"),class:"setup-form-item"},{value:ae((function(){return[Object(o.createVNode)("div",le,[Object(o.createVNode)(l,{mode:"decimal",decimals:6,modelValue:e.setup1Form.totalValue,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.setup1Form.totalValue=t}),placeholder:"0.0",border:!0,disabled:!e.setup1Form.voucherAddress},null,8,["modelValue","disabled"]),Object(o.createVNode)("div",de,[Object(o.createVNode)(i,{modelValue:e.setup1Form.currencyAddress,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.setup1Form.currencyAddress=t}),options:e.commonData.currencyList,selectedKey:"symbol",selectedValue:"address",onChange:e.handleSelectCurrencyToken,disabled:!e.commonData.currencyList||e.commonData.currencyList&&0==e.commonData.currencyList.length||!e.setup1Form.voucherAddress},{content:ae((function(){var t;return[Object(o.createVNode)("div",ue,[e.setup1Form.currencyAddress?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createVNode)("img",{src:null===(t=e.commonData.selectCurrencyInfo)||void 0===t?void 0:t.logoURI,class:"token-content__icon",alt:""},null,8,["src"]),Object(o.createVNode)("span",me,Object(o.toDisplayString)(e.setup1Form.currencySymbol),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)("span",be,Object(o.toDisplayString)(e.t("Select Token")),1))])]})),option:ae((function(t){var a=t.row;return[Object(o.createVNode)("div",pe,[Object(o.createVNode)("img",{src:e.$filters.getTokenLocalLogo(a.logoURI,a.symbol),class:"token-content__icon",alt:""},null,8,["src"]),Object(o.createVNode)("span",ve,Object(o.toDisplayString)(a.symbol),1)])]})),_:1},8,["modelValue","options","onChange","disabled"])])])]})),_:1},8,["label"]),Object(o.createVNode)("div",Oe,[Object(o.createVNode)("div",je,[Object(o.createVNode)(s,{class:"setup-form-item"},{label:ae((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Duration")),1)]})),value:ae((function(){return[Object(o.createVNode)(l,{mode:"integer",modelValue:e.setup1Form.duration,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.setup1Form.duration=t}),border:!0,placeholder:"0",disabled:!e.setup1Form.voucherAddress},{suffix:ae((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Days")),1)]})),_:1},8,["modelValue","disabled"])]})),_:1}),Object(o.createVNode)(s,{class:"setup-form-item"},{label:ae((function(){return[fe]})),value:ae((function(){return[Object(o.createVNode)(l,{mode:"decimal",decimals:2,modelValue:e.setup1Form.apr,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.setup1Form.apr=t}),border:!0,placeholder:"0.0",disabled:!e.setup1Form.voucherAddress},{suffix:ae((function(){return[he]})),_:1},8,["modelValue","disabled"])]})),_:1})])]),Object(o.createVNode)(s,{label:e.t("Repayment")+" (".concat(e.t("Face Value"),")"),class:"setup-form-item price-value-module__item"},{value:ae((function(){return[Object(o.createVNode)("div",Ve,[Object(o.createVNode)("span",null,Object(o.toDisplayString)(e.faceValue?e.handleAmountFixed(e.faceValue):"0.0"),1),Object(o.createVNode)("span",null,Object(o.toDisplayString)(e.setup1Form.currencySymbol),1)])]})),descLabel:ae((function(){return[Object(o.createVNode)("p",ge,Object(o.toDisplayString)(e.t("Repayment value after sold out")),1)]})),_:1},8,["label"]),Object(o.createVNode)("div",ye,[Object(o.createVNode)(s,{class:"setup-form-item"},{label:ae((function(){return[Object(o.createVNode)("div",De,[Object(o.createVNode)("div",null,Object(o.toDisplayString)(e.t("Bond Range")),1),e.setup1Form.voucherAddress?(Object(o.openBlock)(),Object(o.createBlock)("div",ke,Object(o.toDisplayString)(e.t("Spot Price"))+": $"+Object(o.toDisplayString)(e.commonData.spotPrice),1)):Object(o.createCommentVNode)("",!0)])]})),value:ae((function(){var a,c;return[Object(o.createVNode)("div",Te,[Object(o.createVNode)("div",{class:"price-range-item",disabled:!e.setup1Form.voucherAddress},[Object(o.createVNode)("div",Ne,Object(o.toDisplayString)(e.t("Min Price"))+" ("+Object(o.toDisplayString)(e.spotPriceSymbol)+") ",1),Object(o.createVNode)("div",we,[Object(o.createVNode)("div",{class:"action-btn",onClick:t[6]||(t[6]=function(t){return e.reducePriceRange("lowest")})},"-"),Object(o.createVNode)("div",null,[Object(o.createVNode)(l,{mode:"decimal",decimals:6,modelValue:e.setup1Form.lowestPrice,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.setup1Form.lowestPrice=t}),placeholder:"0.0",class:"price-range-input",disabled:!e.setup1Form.voucherAddress},null,8,["modelValue","disabled"])]),Object(o.createVNode)("div",{class:"action-btn",onClick:t[8]||(t[8]=function(t){return e.addPriceRange("lowest")})},"+")]),e.tokenInAmount?(Object(o.openBlock)(),Object(o.createBlock)("div",Se,[Object(o.createVNode)("span",_e,Object(o.toDisplayString)(e.handleAmountFixed(e.tokenInAmount)),1),Object(o.createVNode)("span",Fe,Object(o.toDisplayString)(null===(a=e.setup1Form.voucherTokenSchema)||void 0===a?void 0:a.underlyingToken.symbol),1)])):Object(o.createCommentVNode)("",!0)],8,["disabled"]),Object(o.createVNode)("div",{class:"price-range-item",disabled:!e.setup1Form.voucherAddress},[Object(o.createVNode)("div",xe,Object(o.toDisplayString)(e.t("Max Price"))+" ("+Object(o.toDisplayString)(e.spotPriceSymbol)+") ",1),Object(o.createVNode)("div",Ae,[Object(o.createVNode)("div",{class:"action-btn",onClick:t[9]||(t[9]=function(t){return e.reducePriceRange("highest")})},"-"),Object(o.createVNode)("div",null,[Object(o.createVNode)(l,{mode:"decimal",decimals:6,modelValue:e.setup1Form.highestPrice,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.setup1Form.highestPrice=t}),placeholder:"0.0",class:"price-range-input",disabled:!e.setup1Form.voucherAddress},null,8,["modelValue","disabled"])]),Object(o.createVNode)("div",{class:"action-btn",onClick:t[11]||(t[11]=function(t){return e.addPriceRange("highest")})},"+")]),e.maxPriceToken?(Object(o.openBlock)(),Object(o.createBlock)("div",Ce,[Object(o.createVNode)("span",Pe,Object(o.toDisplayString)(e.handleAmountFixed(e.maxPriceToken)),1),Object(o.createVNode)("span",Be,Object(o.toDisplayString)(null===(c=e.setup1Form.voucherTokenSchema)||void 0===c?void 0:c.underlyingToken.symbol),1)])):Object(o.createCommentVNode)("",!0)],8,["disabled"])]),Object(o.createVNode)("div",Ie,Object(o.toDisplayString)(e.t("Bond range: Set the upper and lower limits of the unit price of the currency, and the bond value is constant within the bond range.")),1)]})),_:1})])])})),Ue=(a("159b"),a("25f0"),a("4be1")),Me=a("5aec"),He=a("e96c"),Re=a("5214"),Ee=a("dd19");var $e=a("8e83"),qe=a("9af8"),We=Object(o.defineComponent)({components:{DaItem:Me.a,DaSelect:He.a,DaInput:Ue.a},props:{},emits:["next"],setup:function(e,t){var a=t.emit,c=Object(ee.b)().t,n=Object(X.a)().getters,r=Object(o.reactive)({currencyList:[],tokenList:[],rangeStride:"0.1",spotPrice:0}),i=Object(o.reactive)({voucherAddress:"",lowestPrice:"",highestPrice:"",currencyAddress:"",currencySymbol:"",currencyDecimals:0,totalValue:"",duration:"",apr:"",faceValue:"",maturity:"",unitPrice:"",tokenInAmount:"",priceType:0,effectiveTime:Math.floor(new Date(W.a.dateUTCFormat(1e3*((new Date).getTime()/1e3+60))).getTime()/1e3)+""}),s=Re.d,l=Object(o.computed)((function(){return!!(W.a.comp(i.lowestPrice,"0")&&W.a.comp(i.highestPrice,"0")&&W.a.comp(i.highestPrice,i.lowestPrice)&&i.voucherAddress&&i.currencyAddress&&u.value&&i.unitPrice&&i.duration&&Number(i.duration)>0&&i.apr&&Number(i.apr)>0)})),d=Object(o.computed)((function(){return i.maturity&&i.totalValue&&i.apr?W.a.hideMantissa((e={apr:Number(i.apr),totalValue:Number(i.totalValue),maturityDate:Number(i.maturity)},t=e.apr,a=e.totalValue,o=Math.floor(new Date(W.a.dateFormat(new Date)).getTime()/1e3),c=(e.maturityDate-o)/86400,(c=Math.floor(c))>=1?a+a*t/100/365*c+"":"0")):"";var e,t,a,o,c})),u=Object(o.computed)((function(){var e;return W.a.comp(i.lowestPrice,"0")&&W.a.comp(d.value,"0")?W.a.hideMantissa(new G.a(d.value).dividedBy(i.lowestPrice).toFixed((null===(e=i.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.decimals)||0,2)):""})),m=Object(o.computed)((function(){var e;return W.a.comp(i.highestPrice,"0")&&W.a.comp(d.value,"0")?W.a.hideMantissa(new G.a(d.value).dividedBy(i.highestPrice).toFixed((null===(e=i.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.decimals)||0,2)):""}));Object(o.watch)((function(){return[n.getSaleStartTime,i.duration]}),(function(){i.maturity=n.getSaleStartTime&&i.duration&&Number(i.duration)>0?Number(n.getSaleStartTime)+86400*Number(i.duration||0)+"":""})),Object(o.watch)((function(){return[i.maturity,i.apr,i.totalValue,d.value]}),(function(e){e[0]&&e[1]&&e[2]&&e[3]&&(i.unitPrice=new G.a(i.totalValue).dividedBy(d.value).toFixed(i.currencyDecimals,1))}));var b=function(){l.value&&(i.tokenInAmount=u.value),a("next",{data:i,finished:l.value})};return Object(o.watchEffect)((function(){n.getChangeFlag&&(r.tokenList=[],qe.a.solvUtils.getTokenListByType(Ee.a[3]).forEach((function(e){r.tokenList.push({symbol:e.underlyingToken.symbol,address:e.underlyingToken.address,decimals:e.underlyingToken.decimals,logoURI:e.logoURI,tokenSchema:e})})),function(){try{var e=qe.a.solvUtils.getOfferingMarket("Convertible");if(!e)return;r.currencyList=qe.a.solvUtils.getCurrencies(e.address,"Primary"),r.currencyList[0]&&(i.currencyAddress=r.currencyList[0].address,i.currencySymbol=r.currencyList[0].symbol,i.currencyDecimals=r.currencyList[0].decimals,r.selectCurrencyInfo=r.currencyList[0])}catch(e){console.log(e)}}())})),Object(o.watchEffect)((function(){i&&b()})),{commonData:r,setup1Form:i,spotPriceSymbol:s,faceValue:d,maxPriceToken:m,tokenInAmount:u,handleAmountFixed:function(e){return new G.a(e).toFixed(6,1)},handleSelectCurrencyToken:function(e){i.currencyAddress=e.address,i.currencySymbol=e.symbol,i.currencyDecimals=e.decimals,r.selectCurrencyInfo=e},t:c,reducePriceRange:function(e){if(i.voucherAddress){if("lowest"===e)return i.lowestPrice=new G.a(i.lowestPrice||"0").minus(new G.a(r.rangeStride)).toString(),void(i.lowestPrice=W.a.compOrEqual("0",i.lowestPrice)?"0":i.lowestPrice);i.highestPrice=new G.a(i.highestPrice||"0").minus(new G.a(r.rangeStride)).toString(),i.highestPrice=W.a.compOrEqual("0",i.highestPrice)?"0":i.highestPrice}},addPriceRange:function(e){"lowest"!==e?i.highestPrice=new G.a(i.highestPrice||"0").plus(new G.a(r.rangeStride)).toString():i.lowestPrice=new G.a(i.lowestPrice||"0").plus(new G.a(r.rangeStride)).toString()},handleSelectToken:function(e){var t,a;i.voucherTokenSchema=e.tokenSchema,i.voucherAddress=(null===(t=i.voucherTokenSchema)||void 0===t?void 0:t.address)||"",r.spotPrice=Object($e.b)((null===(a=i.voucherTokenSchema)||void 0===a?void 0:a.underlyingToken.symbol)||"").price},bindNext:b}}});a("d266");We.render=Le,We.__scopeId="data-v-07101620";var Je=We,Ke=a("409f"),Xe=a.n(Ke),Ye=Object(o.withScopeId)("data-v-6716c348");Object(o.pushScopeId)("data-v-6716c348");var ze={class:"ivo-convertible-setup3"},Ge={class:"setup-form"},Qe={class:"setup-form__inner"},Ze={class:"start-time-entry"},et={class:"start-time-view"},tt=Object(o.createVNode)("div",{class:"choose-date-btn"},[Object(o.createVNode)("img",{src:Xe.a,class:"down-icon",alt:""})],-1),at={class:"sell-now"},ot={class:"sell-now-label"},ct={class:"start-time-entry"},nt={class:"setup-form"},rt={class:"setup-form__inner"},it={class:"start-time-entry"},st=Object(o.createVNode)("div",{class:"choose-date-btn"},[Object(o.createVNode)("img",{src:Xe.a,class:"down-icon",alt:""})],-1),lt=Object(o.createVNode)("span",{style:{opacity:"0"}},"1",-1),dt={class:"start-time-entry"},ut={class:"setup-form"},mt={class:"setup-form__inner"},bt=Object(o.createVNode)("span",{style:{opacity:"0"}},"1",-1);Object(o.popScopeId)();var pt=Ye((function(e,t,a,c,n,r){var i=Object(o.resolveComponent)("DaDatePicker"),s=Object(o.resolveComponent)("DaItem"),l=Object(o.resolveComponent)("ElSwitch"),d=Object(o.resolveComponent)("DaTimeSelect"),u=Object(o.resolveComponent)("TextTip"),m=Object(o.resolveComponent)("DaInput"),b=Object(o.resolveComponent)("el-radio");return Object(o.openBlock)(),Object(o.createBlock)("div",ze,[Object(o.createVNode)("div",Ge,[Object(o.createVNode)("div",Qe,[Object(o.createVNode)(s,{label:e.t("Sale Start Time (UTC)"),class:"setup-form-item"},{value:Ye((function(){return[Object(o.createVNode)("div",Ze,[Object(o.createVNode)("div",{class:"start-time-module__entry form-item__entry start-time-entry__item",style:{opacity:1},active:!e.commonData.isCurrentDate&&!!e.setup1Data.voucherAddress},[Object(o.createVNode)("p",et,Object(o.toDisplayString)(e.setup2Form.startTimeView),1),Object(o.createVNode)(i,{modelValue:e.setup2Form.startTimeView,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.setup2Form.startTimeView=t}),type:"date",class:"start-time",onChange:e.handleStartTime,disabled:e.commonData.isCurrentDate},null,8,["modelValue","onChange","disabled"]),tt],8,["active"])])]})),_:1},8,["label"]),Object(o.createVNode)(s,{class:"setup-form-item"},{label:Ye((function(){return[Object(o.createVNode)("div",at,[Object(o.createVNode)(l,{modelValue:e.commonData.isCurrentDate,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.commonData.isCurrentDate=t}),"active-color":"var(--d-primary1)",disabled:!e.setup1Data.voucherAddress},null,8,["modelValue","disabled"]),Object(o.createVNode)("span",ot,Object(o.toDisplayString)(e.t("Sell Now")),1)])]})),value:Ye((function(){return[Object(o.createVNode)("div",ct,[Object(o.createVNode)("div",{class:"start-time-module__entry form-item__entry start-time-entry__item",style:{opacity:1},active:!e.commonData.isCurrentDate&&!!e.setup1Data.voucherAddress},[Object(o.createVNode)(d,{modelValue:e.setup2Form.startHourVal,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.setup2Form.startHourVal=t}),start:"00:00",step:"01:00",end:"23:00",class:"ic-time-select",style:{opacity:e.commonData.isCurrentDate?.6:1},clearable:!1,editable:!1,disabled:e.commonData.isCurrentDate},null,8,["modelValue","style","disabled"])],8,["active"])])]})),_:1})])]),Object(o.createVNode)("div",nt,[Object(o.createVNode)("div",rt,[Object(o.createVNode)(s,{label:e.t("Sale End Time (UTC)"),class:"setup-form-item"},{value:Ye((function(){return[Object(o.createVNode)("div",it,[Object(o.createVNode)("div",{class:"start-time-module__entry form-item__entry start-time-entry__item",style:{opacity:1},active:!!e.setup1Data.voucherAddress},[Object(o.createVNode)("p",{class:["start-time-view",{"opacity-font2":!e.setup2Form.endTime}]},Object(o.toDisplayString)(e.setup2Form.endTime?e.setup2Form.endTimeView:"Select"),3),Object(o.createVNode)(i,{modelValue:e.setup2Form.endTimeView,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.setup2Form.endTimeView=t}),type:"date",class:"start-time",onChange:e.handleEndTime,disabledDate:e.disabledDate,disabled:!e.setup1Data.voucherAddress},null,8,["modelValue","onChange","disabledDate","disabled"]),st],8,["active"])])]})),_:1},8,["label"]),Object(o.createVNode)(s,{class:"setup-form-item"},{label:Ye((function(){return[lt]})),value:Ye((function(){return[Object(o.createVNode)("div",dt,[Object(o.createVNode)("div",{class:"start-time-module__entry form-item__entry start-time-entry__item",active:!!e.setup1Data.voucherAddress},[Object(o.createVNode)(d,{modelValue:e.setup2Form.endHourVal,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.setup2Form.endHourVal=t}),start:"00:00",step:"01:00",end:"23:00",class:"ic-time-select",clearable:!1,editable:!1,disabled:!e.setup1Data.voucherAddress},null,8,["modelValue","disabled"])],8,["active"])])]})),_:1})])]),Object(o.createVNode)("div",ut,[Object(o.createVNode)("div",mt,[Object(o.createVNode)(s,{class:"setup-form-item"},{label:Ye((function(){return[Object(o.createVNode)(u,null,{content:Ye((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Minimum and maximum value that can be purchased by a single address")),1)]})),default:Ye((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Purchase Limit"))+" ",1)]})),_:1})]})),value:Ye((function(){return[Object(o.createVNode)(m,{mode:"decimal",decimals:6,modelValue:e.setup2Form.min,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.setup2Form.min=t}),border:!0,placeholder:"MIN",disabled:!e.setup1Data.voucherAddress},{suffix:Ye((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.commonData.setup1Data?e.commonData.setup1Data.currencySymbol:""),1)]})),_:1},8,["modelValue","disabled"])]})),_:1}),Object(o.createVNode)(s,{class:"setup-form-item"},{label:Ye((function(){return[bt]})),value:Ye((function(){return[Object(o.createVNode)(m,{mode:"decimal",decimals:6,modelValue:e.setup2Form.max,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.setup2Form.max=t}),border:!0,placeholder:"MAX",disabled:!e.setup1Data.voucherAddress},{suffix:Ye((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.commonData.setup1Data?e.commonData.setup1Data.currencySymbol:""),1)]})),_:1},8,["modelValue","disabled"])]})),_:1})])]),Object(o.createVNode)(s,{label:e.t("Restrictions on purchasing address"),class:"whitelist-module"},{value:Ye((function(){return[Object(o.createVNode)(b,{modelValue:e.setup2Form.useAllowList,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.setup2Form.useAllowList=t}),label:!0},{default:Ye((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$t("Project Whitelist")),1)]})),_:1},8,["modelValue"]),Object(o.createVNode)(b,{modelValue:e.setup2Form.useAllowList,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.setup2Form.useAllowList=t}),label:!1},{default:Ye((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$t("Unlimited")),1)]})),_:1},8,["modelValue"])]})),_:1},8,["label"])])})),vt=(a("24da"),a("70b5")),Ot=a.n(vt),jt=a("65d4"),ft=a("d7d3"),ht=a("e672"),Vt={min:"",max:"",startTime:"",endTime:"",useAllowList:!0,startTimeView:W.a.dateUTCFormat((new Date).getTime()),startHourVal:"00:00",endTimeView:W.a.dateUTCFormat((new Date).getTime()),endHourVal:""},gt=Object(o.defineComponent)({components:{DaItem:Me.a,DaInput:Ue.a,ElSwitch:Ot.a,DaDatePicker:jt.a,TextTip:ht.a,DaTimeSelect:ft.a},props:{setup1Data:{type:Object,default:function(){}},finished:{type:Boolean,default:!1}},emits:["next"],setup:function(e,t){var a=t.emit,c=Object(o.toRefs)(e).setup1Data,n=Object(ee.b)().t,r=Object(X.a)(),i=r.getters,s=r.commit,l=Object(o.reactive)({isCurrentDate:!0,setup1Data:c.value}),d=Object(o.reactive)(W.a.deepCopyData(Vt)),u=Object(o.computed)((function(){var e=!(!d.endHourVal||W.a.compOrEqual(d.startTime||0,d.endTime||0));return d.endHourVal&&new Date(d.startTimeView+" "+d.startHourVal+":00").getTime()<new Date(d.endTimeView+" "+(d.endHourVal||"00:00")+":00").getTime()&&(e=!0),(!W.a.comp(d.min,"0")||!W.a.comp(d.min,l.setup1Data.totalValue))&&((!W.a.comp(d.max,"0")||!W.a.comp(d.max,l.setup1Data.totalValue))&&(!(W.a.comp(d.min,"0")&&W.a.comp(d.max,"0")&&W.a.comp(d.min,d.max)||!e)&&!(W.a.comp(d.min,"0")&&W.a.comp(d.max,"0")&&W.a.comp(d.min,d.max)||!e)))})),m=function(){d.startTimeView=W.a.dateFormat(new Date(d.startTimeView).getTime()),d.startHourVal=l.isCurrentDate?W.a.dayjsUTCFormat(i.getBlockTimestamp?1e3*i.getBlockTimestamp:(new Date).getTime(),"HH:00"):d.startHourVal;var e=d.startTimeView+" "+d.startHourVal+":00 UTC",t=new Date(e).getTime();d.startTime=Math.floor(t/1e3)+"",s("setSaleStartTime",d.startTime)};m();var b=function(){d.endTimeView=W.a.dateFormat(new Date(d.endTimeView).getTime());var e=d.endTimeView+" "+(d.endHourVal?d.endHourVal:"00:00")+":00 UTC",t=new Date(e).getTime();d.endTime=Math.floor(t/1e3)+""};Object(o.watch)((function(){return l.isCurrentDate}),(function(){l.isCurrentDate&&(d.startTimeView=W.a.dateUTCFormat((new Date).getTime()),m())}));var p=function(e){e&&(m(),b()),a("next",{data:d,finished:e})};return Object(o.watchEffect)((function(){l.setup1Data=c.value})),Object(o.watch)((function(){return[u.value,l.setup1Data]}),(function(){u.value&&l.setup1Data?p(!0):p(!1)})),{commonData:l,setup2Form:d,t:n,handleStartTime:m,handleEndTime:b,bindNext:p,disabledDate:function(e){var t=new Date(d.startTimeView+" 00:00:00").getTime()/1e3;return e.getTime()<1e3*t}}}});a("e357");gt.render=pt,gt.__scopeId="data-v-6716c348";var yt=gt,Dt=Object(o.defineComponent)({components:{PageWrapper:$.a,Setup1:Je,Setup3:yt,DaButton:H.a,TxFinish:R.a,Loading:E.a},props:{},setup:function(){var e=this,t=Object(ee.b)().t,a=Object(X.a)().getters,c=Object(te.d)().back;function n(e){return new G.a("10").pow(new G.a(e))}var r=Object(o.reactive)({visibleIssueLoading:!1,isApprove:!0,allowance:0,visibleApproveLoading:!1,visibleLoading:!1,visibleTxFinish:!1,txHash:"",loadFinished:!0,listFeeRate:"0",setup1:{data:{voucherAddress:"",lowestPrice:"",highestPrice:"",currencyAddress:"",currencySymbol:"",currencyDecimals:0,totalValue:"",duration:"",apr:"",faceValue:"",maturity:"",unitPrice:"",tokenInAmount:"",priceType:0,effectiveTime:""},finished:!1},setup2:{data:{min:"",max:"",startTime:"",endTime:"",useAllowList:!0,startTimeView:"",startHourVal:"",endTimeView:"",endHourVal:""},finished:!1}}),i=Object(o.reactive)({loadFinished:!1,balance:"0",allowance:"0",compTokenInAmount:!1,isVoucherManager:!0});function s(){var e;return Object(M.b)(this,void 0,void 0,(function(){var t;return Object(M.e)(this,(function(o){switch(o.label){case 0:return r.setup1.data&&r.setup1.data.voucherTokenSchema?[4,Object(K.b)().underlyingAllowance(a.getAccount,null===(e=r.setup1.data.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.address)]:[3,2];case 1:t=o.sent(),r.allowance=t,r.isApprove=t>0,o.label=2;case 2:return[2]}}))}))}function l(){if(!r.setup1.data||!r.setup1.data.voucherTokenSchema||!r.setup2.finished)return 0;var e=r.setup1.data.voucherTokenSchema;return new G.a(r.setup1.data.totalValue).dividedBy(new G.a(r.setup1.data.unitPrice)).dividedBy(new G.a(r.setup1.data.lowestPrice)).multipliedBy(n(e.underlyingToken.decimals)).toFixed(0,2)}var d=Object(o.computed)((function(){var e=!0;return!(e=!(r.setup1.finished&&r.setup2.finished&&i.compTokenInAmount))&&r.setup1.finished&&r.setup2.data&&(W.a.comp(r.setup2.data.min,r.setup1.data.totalValue)&&(e=!0),W.a.comp(r.setup2.data.max,r.setup1.data.totalValue)&&(e=!0)),e}));return Object(o.watchEffect)((function(){i.compTokenInAmount=!(!r.setup1.finished||!W.a.compOrEqual(i.balance,r.setup1.data.tokenInAmount||0)),r.setup1.finished&&r.setup1.data.voucherTokenSchema&&(r.isApprove=W.a.compOrEqual(W.a.tokenDivDecimals(r.allowance,r.setup1.data.voucherTokenSchema.underlyingToken.decimals),r.setup1.data.tokenInAmount))})),{commonData:r,disabledConfirm:d,accountInfo:i,bindSetup1Next:function(e){r.setup1.data=e.data,r.setup1.finished=e.finished,e.data.voucherAddress&&a.getChangeFlag&&(function(){var e,t;Object(M.b)(this,void 0,void 0,(function(){var o,c;return Object(M.e)(this,(function(n){switch(n.label){case 0:return r.setup1.data.voucherTokenSchema?(i.loadFinished=!1,[4,new q.Erc20Token((null===(e=r.setup1.data.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.address)||"",a.getProvider).balanceOf(a.getAccount)]):[2];case 1:if(o=n.sent(),void 0===r.setup1.data.voucherTokenSchema)throw new Error("Wrong voucher token schema");return c=i,[4,Object(K.b)().isVoucherManager(r.setup1.data.voucherTokenSchema.address,a.getAccount)];case 2:return c.isVoucherManager=n.sent(),i.loadFinished=!0,i.balance=W.a.hideMantissa(W.a.tokenDivDecimals(o||"0",(null===(t=r.setup1.data.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken.decimals)+"",6)),i.isVoucherManager&&s(),[2]}}))}))}(),function(){var e;Object(M.b)(this,void 0,Promise,(function(){var t;return Object(M.e)(this,(function(a){switch(a.label){case 0:return r.setup1.data.voucherTokenSchema?[4,Object(K.b)().getMarkets((null===(e=r.setup1.data)||void 0===e?void 0:e.voucherAddress)+"")]:[2];case 1:return t=a.sent(),r.listFeeRate=t.feeRate+"",[2]}}))}))}())},bindSetup3Next:function(e){r.setup2.data=e.data,r.setup2.finished=e.finished},t:t,bindIssue:function(){return Object(M.b)(e,void 0,void 0,(function(){var e,a,o,c,i,s,d,u,m,b,p;return Object(M.e)(this,(function(v){switch(v.label){case 0:r.visibleIssueLoading=!0,v.label=1;case 1:return v.trys.push([1,3,,4]),e=l(),a=W.a.tokenMulDecimals(r.setup1.data.lowestPrice,8),o=W.a.tokenMulDecimals(r.setup1.data.highestPrice,8),c=new G.a(r.setup2.data.min||0).dividedBy(new G.a(r.setup1.data.unitPrice)),i=new G.a(r.setup2.data.max||0).dividedBy(new G.a(r.setup1.data.unitPrice)),s=c.multipliedBy(new G.a("10").pow(new G.a("26"))).toFixed(0,1),d=i.multipliedBy(new G.a("10").pow(new G.a("26"))).toFixed(0,2),r.setup2.data.max&&r.setup2.data.max==r.setup1.data.totalValue&&(d=function(){var e,t,a;if(!(null===(e=r.setup1)||void 0===e?void 0:e.data)||!(null===(t=r.setup2)||void 0===t?void 0:t.data)||!(null===(a=r.setup1)||void 0===a?void 0:a.data.voucherTokenSchema))return"0";var o=r.setup1.data.voucherTokenSchema;return new G.a(l()).dividedBy(n(o.underlyingToken.decimals)).multipliedBy(new G.a(r.setup1.data.lowestPrice).multipliedBy(n(8))).multipliedBy(n(o.underlyingToken.decimals)).toFixed(0)}()),u="",0==r.setup1.data.priceType&&(u=q.VestingOfferingMarket.encodeOfferPriceData(["uint128"],[W.a.tokenMulDecimals(r.setup1.data.unitPrice,r.setup1.data.currencyDecimals)])),m={commonParams:{voucherAddress:r.setup1.data.voucherAddress,currencyAddress:r.setup1.data.currencyAddress,min:s,max:d,startTime:r.setup2.data.startTime,endTime:r.setup2.data.endTime,useAllowwList:r.setup2.data.useAllowList,priceType:0,priceData:u},mintVestingParams:{lowestPrice:a,highestPrice:o,tokenInAmount:e,effectiveTime:r.setup1.data.effectiveTime,maturity:r.setup1.data.maturity}},console.log("params ===> ",m,r.setup1.data,r.setup2.data),[4,Object(K.b)().offer(m)];case 2:return b=v.sent(),r.visibleIssueLoading=!1,Object(Y.b)(b),r.visibleLoading=!0,[3,4];case 3:return p=v.sent(),r.visibleIssueLoading=!1,Z.a.error(t(Object(J.a)().parseErrorInfo(p))),[3,4];case 4:return[2]}}))}))},bindApprove:function(){return Object(M.b)(this,void 0,void 0,(function(){return Object(M.e)(this,(function(e){switch(e.label){case 0:if(!r.setup1.data||!r.setup1.data.voucherTokenSchema)return[3,6];e.label=1;case 1:return e.trys.push([1,5,,6]),r.visibleApproveLoading=!0,[4,Object(K.b)().underlyingApprove(r.setup1.data.voucherTokenSchema.underlyingToken.address)];case 2:return[4,e.sent().wait()];case 3:return e.sent(),[4,s()];case 4:return e.sent(),r.visibleApproveLoading=!1,[3,6];case 5:return e.sent(),r.visibleApproveLoading=!1,[3,6];case 6:return[2]}}))}))},handleTxDone:function(e,t){r.txHash=t,r.visibleTxFinish=!0},handleTxFinishedClose:function(){r.visibleTxFinish=!1,c()}}}});a("1954"),a("bf1b");Dt.render=U,Dt.__scopeId="data-v-0a2c052f";t.default=Dt},"8fbe":function(e,t,a){},a6a4:function(e,t,a){},bf1b:function(e,t,a){"use strict";a("8fbe")},d266:function(e,t,a){"use strict";a("2ba9")},e357:function(e,t,a){"use strict";a("a6a4")}}]);
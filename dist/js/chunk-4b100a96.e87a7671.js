(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4b100a96"],{2275:function(e,t,a){"use strict";a("3f19")},"308b":function(e,t,a){"use strict";a("db8b")},"3f19":function(e,t,a){},4731:function(e,t,a){},"5c5c":function(e,t,a){"use strict";a("9088")},9088:function(e,t,a){},b173:function(e,t,a){"use strict";a.r(t);a("a9e3");var o=a("7a23"),n=Object(o.withScopeId)("data-v-7474c1c5");Object(o.pushScopeId)("data-v-7474c1c5");var c={class:"ivo-bond-label"},r={key:0,class:"ivo-convertible-issue"},i={class:"ivo-convertible-issue__item"},s={class:"ivo-convertible-issue__inner ivo-convertible-issue__left"},l={class:"ivo-convertible-issue__item"},u={class:"ivo-convertible-issue__inner ivo-convertible-issue__right"},d={class:"ivo-convertible-issue__inner ivo-convertible-issue__right"},m={class:"view-info-module"},b={class:"view-info-module__item"},p={class:"view-info-module__inner"},v={class:"label"},O={class:"value"},j=Object(o.createTextVNode)("--"),h={class:"view-info-module__item view-info-module__border"},f={class:"view-info-module__inner"},V={class:"label"},g={class:"value"},y=Object(o.createTextVNode)("--"),T={class:"view-info-module__item"},D={class:"view-info-module__inner"},k={class:"label"},w={class:"value"},N=Object(o.createTextVNode)("--"),S={class:"view-info-module__item"},_={class:"view-info-module__inner"},F=Object(o.createTextVNode)("--"),x={class:"view-info-module"},A={class:"view-info-module__item"},C={class:"view-info-module__inner"},B={class:"action-module"};Object(o.popScopeId)();var I=n((function(e,t,a,I,M,P){var L=Object(o.resolveComponent)("Setup1"),U=Object(o.resolveComponent)("Setup3"),H=Object(o.resolveComponent)("DaButton"),R=Object(o.resolveComponent)("PageWrapper"),E=Object(o.resolveComponent)("Loading"),$=Object(o.resolveComponent)("TxFinish");return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[Object(o.createVNode)(R,{showBreadcrumbs:!0},{default:n((function(){var t,a;return[Object(o.createVNode)("div",null,[Object(o.createVNode)("p",c,Object(o.toDisplayString)(e.t("Issue Bond voucher IVO")),1)]),e.commonData.loadFinished?(Object(o.openBlock)(),Object(o.createBlock)("div",r,[Object(o.createVNode)("div",i,[Object(o.createVNode)("div",s,[Object(o.createVNode)(L,{onNext:e.bindSetup1Next,isVoucherManager:e.accountInfo.isVoucherManager},null,8,["onNext","isVoucherManager"])])]),Object(o.createVNode)("div",l,[Object(o.createVNode)("div",u,[Object(o.createVNode)(U,{onNext:e.bindSetup3Next,isVoucherManager:e.accountInfo.isVoucherManager,setup1Data:e.commonData.setup1.data},null,8,["onNext","isVoucherManager","setup1Data"])]),Object(o.createVNode)("div",d,[Object(o.createVNode)("div",m,[Object(o.createVNode)("div",b,[Object(o.createVNode)("div",p,[Object(o.createVNode)("div",v,Object(o.toDisplayString)(e.t("Maturity Date (UTC)")),1),Object(o.createVNode)("div",O,[e.commonData.setup1.data.maturity?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$filters.dateUTCFormat(1e3*Number(e.commonData.setup1.data.maturity))),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[j],64))])])]),Object(o.createVNode)("div",h,[Object(o.createVNode)("div",f,[Object(o.createVNode)("div",V,Object(o.toDisplayString)(e.t("Fee")),1),Object(o.createVNode)("div",g,[e.commonData.setup1.data.voucherTokenSchema?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$filters.viewTokenDivDecimals(e.commonData.listFeeRate,2,2)+"%"),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[y],64))])])]),Object(o.createVNode)("div",T,[Object(o.createVNode)("div",D,[Object(o.createVNode)("div",k,Object(o.toDisplayString)(e.t("Total Collateral"))+" "+Object(o.toDisplayString)(e.commonData.setup1.data&&e.commonData.setup1.data.voucherTokenSchema?"(".concat(null===(t=e.commonData.setup1.data.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken.symbol,")"):""),1),Object(o.createVNode)("div",w,[e.commonData.setup1.finished?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$filters.viewFixed(e.commonData.setup1.data.tokenInAmount)),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[N],64))])])]),Object(o.createVNode)("div",S,[Object(o.createVNode)("div",_,[Object(o.createVNode)("div",{class:["label",[e.warningWalletBalance?"warning_color":""]]},Object(o.toDisplayString)(e.t("Wallet Balance"))+" "+Object(o.toDisplayString)(e.commonData.setup1.data&&e.commonData.setup1.data.voucherTokenSchema?"(".concat(null===(a=e.commonData.setup1.data.voucherTokenSchema)||void 0===a?void 0:a.underlyingToken.symbol,")"):""),3),Object(o.createVNode)("div",{class:["value",{"danger-tip":!e.accountInfo.compTokenInAmount&&e.commonData.setup1.finished}]},[e.commonData.setup1.data.voucherTokenSchema?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$filters.parseThousandsValue(e.accountInfo.balance)),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[F],64))],2)])])]),Object(o.createVNode)("div",x,[Object(o.createVNode)("div",A,[Object(o.createVNode)("div",C,[Object(o.createVNode)("div",B,[!e.commonData.isApprove&&e.accountInfo.isVoucherManager?(Object(o.openBlock)(),Object(o.createBlock)(H,{key:0,disabled:e.commonData.visibleApproveLoading,loading:e.commonData.visibleApproveLoading,onClick:e.bindApprove,class:"action-btn"},{default:n((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Approve")),1)]})),_:1},8,["disabled","loading","onClick"])):Object(o.createCommentVNode)("",!0),Object(o.createVNode)(H,{disabled:e.disabledConfirm||e.commonData.visibleIssueLoading||!e.accountInfo.isVoucherManager||!e.commonData.isApprove,loading:e.commonData.visibleIssueLoading,onClick:e.bindIssue,class:"action-btn"},{default:n((function(){return[e.accountInfo.isVoucherManager?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Confirm")),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:1},[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("You do not have permission to issue.")),1)],64))]})),_:1},8,["disabled","loading","onClick"])])])])])])])])):Object(o.createCommentVNode)("",!0)]})),_:1}),e.commonData.visibleLoading?(Object(o.openBlock)(),Object(o.createBlock)(E,{key:0,visible:e.commonData.visibleLoading,onClose:t[1]||(t[1]=function(t){return e.commonData.visibleLoading=!1}),onTxDone:e.handleTxDone,needDone:!0},null,8,["visible","onTxDone"])):Object(o.createCommentVNode)("",!0),e.commonData.visibleTxFinish?(Object(o.openBlock)(),Object(o.createBlock)($,{key:1,visible:e.commonData.visibleTxFinish,hash:e.commonData.txHash,title:"IVO Issued",onClose:e.handleTxFinishedClose,pathName:"IssuanceBond"},null,8,["visible","hash","onClose"])):Object(o.createCommentVNode)("",!0)],64)})),M=(a("d3b7"),a("b680"),a("9ab4")),P=a("e205"),L=a("52f9"),U=a("9ddb"),H=a("f41c"),R=a("dd19"),E=a("2020"),$=a("9707"),W=a("f94c"),q=a("1d85"),J=a("1c5c"),K=a("88c6"),X=a("901e"),Y=a.n(X),z=a("6573"),G=a.n(z),Q=a("47e2"),Z=a("6c02"),ee=(a("99af"),Object(o.withScopeId)("data-v-130d5fec"));Object(o.pushScopeId)("data-v-130d5fec");var te={class:"ivo-convertible-setup1"},ae={class:"total-value-module"},oe={class:"currency-select-module"},ne={class:"token-content"},ce={class:"token-content__text"},re={key:1},ie={class:"token-content"},se={class:"token-content__text"},le={class:"setup-form"},ue={class:"setup-form__inner"},de=Object(o.createVNode)("span",null,"APR",-1),me=Object(o.createTextVNode)("%"),be={class:"face-value"},pe={class:"desc-module desc-value-right"},ve={class:"bond-range-module"},Oe={class:"total-value-module"},je={class:"currency-select-module"},he={class:"token-content"},fe={class:"token-content__text"},Ve={key:1},ge={class:"token-content"},ye={class:"token-content__text"},Te={class:"desc-module desc-value-right white-color"},De={class:"desc-module desc-value-right margin-top"};Object(o.popScopeId)();var ke=ee((function(e,t,a,n,c,r){var i=Object(o.resolveComponent)("DaInput"),s=Object(o.resolveComponent)("DaSelect"),l=Object(o.resolveComponent)("DaItem");return Object(o.openBlock)(),Object(o.createBlock)("div",te,[Object(o.createVNode)(l,{label:e.t("Total Issuance Value"),class:"setup-form-item"},{value:ee((function(){return[Object(o.createVNode)("div",ae,[Object(o.createVNode)(i,{mode:"decimal",decimals:6,modelValue:e.setup1Form.totalValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.setup1Form.totalValue=t}),placeholder:"0.0",border:!0,disabled:!e.isVoucherManager},null,8,["modelValue","disabled"]),Object(o.createVNode)("div",oe,[Object(o.createVNode)(s,{modelValue:e.setup1Form.currencyAddress,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.setup1Form.currencyAddress=t}),options:e.commonData.currencyList,selectedKey:"symbol",selectedValue:"address",onChange:e.handleSelectCurrencyToken,disabled:!e.commonData.currencyList||e.commonData.currencyList&&0==e.commonData.currencyList.length||!e.isVoucherManager},{content:ee((function(){var t;return[Object(o.createVNode)("div",ne,[e.setup1Form.currencyAddress?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createVNode)("img",{src:null===(t=e.commonData.selectCurrencyInfo)||void 0===t?void 0:t.logoURI,class:"token-content__icon",alt:""},null,8,["src"]),Object(o.createVNode)("span",ce,Object(o.toDisplayString)(e.setup1Form.currencySymbol),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)("span",re,Object(o.toDisplayString)(e.t("Select Token")),1))])]})),option:ee((function(t){var a=t.row;return[Object(o.createVNode)("div",ie,[Object(o.createVNode)("img",{src:e.$filters.getTokenLocalLogo(a.logoURI,a.symbol),class:"token-content__icon",alt:""},null,8,["src"]),Object(o.createVNode)("span",se,Object(o.toDisplayString)(a.symbol),1)])]})),_:1},8,["modelValue","options","onChange","disabled"])])])]})),_:1},8,["label"]),Object(o.createVNode)("div",le,[Object(o.createVNode)("div",ue,[Object(o.createVNode)(l,{class:"setup-form-item"},{label:ee((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Duration")),1)]})),value:ee((function(){return[Object(o.createVNode)(i,{mode:"integer",modelValue:e.setup1Form.duration,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.setup1Form.duration=t}),border:!0,placeholder:"0",disabled:!e.isVoucherManager},{suffix:ee((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Days")),1)]})),_:1},8,["modelValue","disabled"])]})),_:1}),Object(o.createVNode)(l,{class:"setup-form-item"},{label:ee((function(){return[de]})),value:ee((function(){return[Object(o.createVNode)(i,{mode:"decimal",decimals:2,modelValue:e.setup1Form.apr,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.setup1Form.apr=t}),border:!0,placeholder:"0.0",disabled:!e.isVoucherManager},{suffix:ee((function(){return[me]})),_:1},8,["modelValue","disabled"])]})),_:1})])]),Object(o.createVNode)(l,{label:e.t("Repayment")+" (".concat(e.t("Face Value"),")"),class:"setup-form-item price-value-module__item"},{value:ee((function(){return[Object(o.createVNode)("div",be,[Object(o.createVNode)("span",null,Object(o.toDisplayString)(e.faceValue?e.handleAmountFixed(e.faceValue):"0.0"),1),Object(o.createVNode)("span",null,Object(o.toDisplayString)(e.setup1Form.currencySymbol),1)])]})),descLabel:ee((function(){return[Object(o.createVNode)("p",pe,Object(o.toDisplayString)(e.t("Repayment value after sold out")),1)]})),_:1},8,["label"]),Object(o.createVNode)(l,{class:"setup-form-item price-value-module__item"},{label:ee((function(){return[Object(o.createVNode)("div",ve,[Object(o.createVNode)("div",null,Object(o.toDisplayString)(e.t("Total Collateral")),1),Object(o.withDirectives)(Object(o.createVNode)("div",{class:{"warn-info":e.collateralRatio.warn}},Object(o.toDisplayString)(e.t("Collateral Ratio"))+": "+Object(o.toDisplayString)(e.collateralRatio.valid?e.collateralRatio.value:"--"),3),[[o.vShow,e.collateralRatio.valid]])])]})),value:ee((function(){var a;return[Object(o.createVNode)("div",Oe,[Object(o.createVNode)(i,{mode:"decimal",decimals:null===(a=e.setup1Form.voucherTokenSchema)||void 0===a?void 0:a.underlyingToken.decimals,modelValue:e.setup1Form.tokenInAmount,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.setup1Form.tokenInAmount=t}),placeholder:"0.0",border:!0,disabled:!e.setup1Form.voucherAddress||!e.isVoucherManager},null,8,["decimals","modelValue","disabled"]),Object(o.createVNode)("div",je,[Object(o.createVNode)(s,{modelValue:e.setup1Form.voucherAddress,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.setup1Form.voucherAddress=t}),options:e.commonData.tokenList,selectedKey:"symbol",selectedValue:"address",onChange:e.handleSelectToken,disabled:!e.commonData.tokenList||e.commonData.tokenList&&0==e.commonData.tokenList.length},{content:ee((function(){var t,a;return[Object(o.createVNode)("div",he,[e.setup1Form.voucherAddress?(Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,{key:0},[Object(o.createVNode)("img",{src:null===(t=e.setup1Form.voucherTokenSchema)||void 0===t?void 0:t.logoURI,class:"token-content__icon"},null,8,["src"]),Object(o.createVNode)("span",fe,Object(o.toDisplayString)(null===(a=e.setup1Form.voucherTokenSchema)||void 0===a?void 0:a.underlyingToken.symbol),1)],64)):(Object(o.openBlock)(),Object(o.createBlock)("span",Ve,Object(o.toDisplayString)(e.t("Select")),1))])]})),option:ee((function(t){var a=t.row;return[Object(o.createVNode)("div",ge,[Object(o.createVNode)("img",{src:e.$filters.getTokenLocalLogo(a.logoURI,a.symbol),class:"token-content__icon"},null,8,["src"]),Object(o.createVNode)("span",ye,Object(o.toDisplayString)(a.symbol),1)])]})),_:1},8,["modelValue","options","onChange","disabled"])])])]})),descLabel:ee((function(){return[Object(o.createVNode)("p",Te,Object(o.toDisplayString)(e.t("Total Value"))+": "+Object(o.toDisplayString)(e.collateralTotalValue?"".concat(e.collateralTotalValue," ").concat(e.setup1Form.currencySymbol):"--"),1)]})),_:1}),Object(o.createVNode)(l,{label:e.t("Conversion Price"),class:"setup-form-item price-value-module__item"},{value:ee((function(){return[Object(o.createVNode)(i,{mode:"decimal",decimals:8,modelValue:e.setup1Form.highestPrice,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.setup1Form.highestPrice=t}),placeholder:"0.0",border:!0,disabled:!e.setup1Form.voucherAddress||!e.isVoucherManager,warning:e.$filters.comp(e.settlementAmount,e.setup1Form.tokenInAmount)},{suffix:ee((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.setup1Form.currencySymbol),1)]})),_:1},8,["modelValue","disabled","warning"])]})),descLabel:ee((function(){var t;return[Object(o.createVNode)("p",{class:["desc-module desc-value-right",e.$filters.comp(e.settlementAmount,e.setup1Form.tokenInAmount)?"warning_color":"white-color"]},Object(o.toDisplayString)(e.t("Settlement Amount"))+": "+Object(o.toDisplayString)(e.setup1Form.voucherAddress&&e.isVoucherManager?e.settlementAmount+" ".concat(null===(t=e.setup1Form.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken.symbol):"--"),3),Object(o.createVNode)("p",De,Object(o.toDisplayString)(e.t("The settlement amount must be lower than the collateral amount")),1)]})),_:1},8,["label"])])})),we=(a("159b"),a("4be1")),Ne=a("5aec"),Se=a("e96c"),_e=a("5214"),Fe=a("7fdf"),xe=a("af8d"),Ae=a("8e83"),Ce=a("9af8"),Be=Object(o.defineComponent)({components:{DaItem:Ne.a,DaSelect:Se.a,DaInput:we.a},props:{isVoucherManager:{type:Boolean,default:!1}},emits:["next"],setup:function(e,t){var a=t.emit,n=Object(Q.b)().t,c=Object(J.a)().getters,r=Object(o.toRefs)(e).isVoucherManager,i=Object(o.reactive)({currencyList:[],tokenList:[],rangeStride:"0.1",spotPrice:0,repayTokenPrice:0}),s=Object(o.reactive)({voucherAddress:"",lowestPrice:"",highestPrice:"",currencyAddress:"",currencySymbol:"",currencyDecimals:0,totalValue:"",duration:"",apr:"",faceValue:"",maturity:"",unitPrice:"",tokenInAmount:"",priceType:0,effectiveTime:Math.floor(new Date($.a.dateUTCFormat(1e3*((new Date).getTime()/1e3+60))).getTime()/1e3)+"",warningPrice:!1}),l=_e.d,u=Object(o.computed)((function(){return!!($.a.comp(s.lowestPrice,"0")&&$.a.comp(s.highestPrice,"0")&&$.a.comp(s.highestPrice,s.lowestPrice)&&s.voucherAddress&&s.currencyAddress&&s.tokenInAmount&&s.unitPrice&&s.duration&&Number(s.duration)>0&&s.apr&&Number(s.apr)>0)})),d=Object(o.computed)((function(){return(s.duration||"0"==s.duration)&&s.totalValue&&s.apr?$.a.hideMantissa(Object(Fe.a)({apr:Number(s.apr),totalValue:Number(s.totalValue),duration:Number(s.duration)})):""})),m=Object(o.computed)((function(){var e;return $.a.comp(s.highestPrice,"0")&&$.a.comp(d.value,"0")?$.a.hideMantissa(new Y.a(d.value).dividedBy(s.highestPrice).toFixed((null===(e=s.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.decimals)||0,2)):""}));Object(o.watch)((function(){return[c.getSaleStartTime,s.duration]}),(function(){s.maturity=c.getSaleStartTime&&s.duration&&Number(s.duration)>0?Number(c.getSaleStartTime)+86400*Number(s.duration||0)+"":""})),Object(o.watch)((function(){return[s.maturity,s.apr,s.totalValue,d.value]}),(function(e){e[0]&&e[1]&&e[2]&&e[3]&&(s.unitPrice=new Y.a(s.totalValue).dividedBy(d.value).toFixed(s.currencyDecimals,1))}));function b(){var e,t;s.warningPrice=(e=s.lowestPrice+"",t=s.highestPrice+"",!(""==e||!$.a.comp(e,t)))}var p=Object(o.computed)((function(){return d.value&&s.tokenInAmount?new Y.a(d.value).dividedBy(new Y.a(s.tokenInAmount)).toFixed(8,1):""})),v=Object(o.computed)((function(){if(s.voucherAddress&&r.value){var e=Object(Ae.b)(s.currencySymbol||"");return new Y.a(s.tokenInAmount||0).multipliedBy(new Y.a(i.spotPrice||0)).dividedBy(new Y.a(e.price||1)).toFixed(2,1)}return""})),O=Object(o.computed)((function(){if(s.voucherAddress&&r.value&&d.value&&s.tokenInAmount&&i.spotPrice){var e=Object(xe.a)(d.value,s.tokenInAmount,i.spotPrice,s.currencySymbol);return{valid:!0,warn:!!$.a.comp("100",e),value:(e||0)+"%"}}return{valid:!1,warn:!1,value:""}})),j=Object(o.computed)((function(){return s.voucherAddress&&r.value&&d.value&&s.highestPrice&&Number(s.highestPrice)>0?new Y.a(d.value).dividedBy(new Y.a(s.highestPrice)).toFixed(6,1):"0"}));function h(){c.getChangeFlag&&(i.tokenList=[],Ce.a.solvUtils.getTokenListByType(R.c[4]).forEach((function(e){i.tokenList.push({symbol:e.underlyingToken.symbol,address:e.underlyingToken.address,decimals:e.underlyingToken.decimals,logoURI:e.logoURI,tokenSchema:e})})),function(){try{var e=Ce.a.solvUtils.getOfferingMarket(R.c[4]);if(!e)return;i.currencyList=Ce.a.solvUtils.getCurrenciesByMarketType(e.type,"Primary"),i.currencyList[0]&&(s.currencyAddress=i.currencyList[0].address,s.currencySymbol=i.currencyList[0].symbol,s.currencyDecimals=i.currencyList[0].decimals,i.selectCurrencyInfo=i.currencyList[0])}catch(e){console.log(e)}}())}return Object(o.watch)((function(){return p.value}),(function(e){s.lowestPrice=e})),Object(o.watch)((function(){return s}),(function(e){e&&a("next",{data:s,finished:u.value})}),{deep:!0}),h(),Object(o.watch)((function(){return c.getChangeFlag}),(function(){h()})),{commonData:i,setup1Form:s,spotPriceSymbol:l,faceValue:d,maxPriceToken:m,collateralTotalValue:v,collateralRatio:O,settlementAmount:j,handleAmountFixed:function(e){return $.a.hideMantissa(new Y.a(e).toFixed(6,1))},handleSelectCurrencyToken:function(e){s.currencyAddress=e.address,s.currencySymbol=e.symbol,s.currencyDecimals=e.decimals,i.selectCurrencyInfo=e},t:n,handleSelectToken:function(e){var t,a;s.voucherTokenSchema=e.tokenSchema,s.voucherAddress=(null===(t=s.voucherTokenSchema)||void 0===t?void 0:t.address)||"";var o=Object(Ae.b)((null===(a=s.voucherTokenSchema)||void 0===a?void 0:a.underlyingToken.symbol)||"");i.spotPrice=(null==o?void 0:o.price)||0},handleInputPriceRange:function(e){b()}}}});a("2275");Be.render=ke,Be.__scopeId="data-v-130d5fec";var Ie=Be,Me=a("409f"),Pe=a.n(Me),Le=Object(o.withScopeId)("data-v-9f1dd91e");Object(o.pushScopeId)("data-v-9f1dd91e");var Ue={class:"ivo-convertible-setup3"},He={class:"setup-form"},Re={class:"setup-form__inner"},Ee={class:"start-time-entry"},$e={class:"start-time-view"},We=Object(o.createVNode)("div",{class:"choose-date-btn"},[Object(o.createVNode)("img",{src:Pe.a,class:"down-icon",alt:""})],-1),qe={class:"sell-now"},Je={class:"sell-now-label"},Ke={class:"start-time-entry"},Xe={class:"setup-form"},Ye={class:"setup-form__inner"},ze={class:"start-time-entry"},Ge=Object(o.createVNode)("div",{class:"choose-date-btn"},[Object(o.createVNode)("img",{src:Pe.a,class:"down-icon",alt:""})],-1),Qe=Object(o.createVNode)("span",{style:{opacity:"0"}},"1",-1),Ze={class:"start-time-entry"},et={class:"setup-form"},tt={class:"setup-form__inner"},at=Object(o.createVNode)("span",{style:{opacity:"0"}},"1",-1);Object(o.popScopeId)();var ot=Le((function(e,t,a,n,c,r){var i=Object(o.resolveComponent)("DaDatePicker"),s=Object(o.resolveComponent)("DaItem"),l=Object(o.resolveComponent)("ElSwitch"),u=Object(o.resolveComponent)("DaTimeSelect"),d=Object(o.resolveComponent)("TextTip"),m=Object(o.resolveComponent)("DaInput"),b=Object(o.resolveComponent)("el-radio");return Object(o.openBlock)(),Object(o.createBlock)("div",Ue,[Object(o.createVNode)("div",He,[Object(o.createVNode)("div",Re,[Object(o.createVNode)(s,{label:e.t("Sale Start Time (UTC)"),class:"setup-form-item"},{value:Le((function(){return[Object(o.createVNode)("div",Ee,[Object(o.createVNode)("div",{class:"start-time-module__entry form-item__entry start-time-entry__item",style:{opacity:1},active:!e.commonData.isCurrentDate&&!!e.setup1Data.voucherAddress&&e.isVoucherManager},[Object(o.createVNode)("p",$e,Object(o.toDisplayString)(e.setup2Form.startTimeView),1),Object(o.createVNode)(i,{modelValue:e.setup2Form.startTimeView,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.setup2Form.startTimeView=t}),type:"date",class:"start-time",onChange:e.handleStartTime,disabled:e.commonData.isCurrentDate||!e.isVoucherManager},null,8,["modelValue","onChange","disabled"]),We],8,["active"])])]})),_:1},8,["label"]),Object(o.createVNode)(s,{class:"setup-form-item"},{label:Le((function(){return[Object(o.createVNode)("div",qe,[Object(o.createVNode)(l,{modelValue:e.commonData.isCurrentDate,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.commonData.isCurrentDate=t}),"active-color":"var(--d-primary1)",disabled:!e.setup1Data.voucherAddress||!e.isVoucherManager},null,8,["modelValue","disabled"]),Object(o.createVNode)("span",Je,Object(o.toDisplayString)(e.t("Sell Now")),1)])]})),value:Le((function(){return[Object(o.createVNode)("div",Ke,[Object(o.createVNode)("div",{class:"start-time-module__entry form-item__entry start-time-entry__item",style:{opacity:1},active:!e.commonData.isCurrentDate&&!!e.setup1Data.voucherAddress&&e.isVoucherManager},[Object(o.createVNode)(u,{modelValue:e.setup2Form.startHourVal,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.setup2Form.startHourVal=t}),start:"00:00",step:"01:00",end:"23:00",class:"ic-time-select",style:{opacity:e.commonData.isCurrentDate?.6:1},clearable:!1,editable:!1,disabled:e.commonData.isCurrentDate||!e.isVoucherManager},null,8,["modelValue","style","disabled"])],8,["active"])])]})),_:1})])]),Object(o.createVNode)("div",Xe,[Object(o.createVNode)("div",Ye,[Object(o.createVNode)(s,{label:e.t("Sale End Time (UTC)"),class:"setup-form-item"},{value:Le((function(){return[Object(o.createVNode)("div",ze,[Object(o.createVNode)("div",{class:["start-time-module__entry form-item__entry start-time-entry__item",[e.warningTime?"warning_border":""]],style:{opacity:1},active:!!e.setup1Data.voucherAddress&&e.isVoucherManager},[Object(o.createVNode)("p",{class:["start-time-view",{"opacity-font2":!e.setup2Form.endTime}]},Object(o.toDisplayString)(e.setup2Form.endTime?e.setup2Form.endTimeView:"Select"),3),Object(o.createVNode)(i,{modelValue:e.setup2Form.endTimeView,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.setup2Form.endTimeView=t}),type:"date",class:"start-time",onChange:e.handleEndTime,disabledDate:e.disabledDate,disabled:!e.setup1Data.voucherAddress||!e.isVoucherManager},null,8,["modelValue","onChange","disabledDate","disabled"]),Ge],10,["active"])])]})),_:1},8,["label"]),Object(o.createVNode)(s,{class:"setup-form-item"},{label:Le((function(){return[Qe]})),value:Le((function(){return[Object(o.createVNode)("div",Ze,[Object(o.createVNode)("div",{class:["start-time-module__entry form-item__entry start-time-entry__item",[e.warningTime?"warning_border":""]],active:!!e.setup1Data.voucherAddress&&e.isVoucherManager},[Object(o.createVNode)(u,{modelValue:e.setup2Form.endHourVal,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.setup2Form.endHourVal=t}),start:"00:00",step:"01:00",end:"23:00",class:"ic-time-select",clearable:!1,editable:!1,disabled:!e.setup1Data.voucherAddress||!e.isVoucherManager},null,8,["modelValue","disabled"])],10,["active"])])]})),_:1})])]),Object(o.createVNode)("div",et,[Object(o.createVNode)("div",tt,[Object(o.createVNode)(s,{class:"setup-form-item"},{label:Le((function(){return[Object(o.createVNode)(d,null,{content:Le((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Minimum and maximum value that can be purchased by a single address")),1)]})),default:Le((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.t("Purchase Limit"))+" ",1)]})),_:1})]})),value:Le((function(){return[Object(o.createVNode)(m,{mode:"decimal",decimals:6,modelValue:e.setup2Form.min,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.setup2Form.min=t}),border:!0,placeholder:"MIN",disabled:!e.setup1Data.voucherAddress||!e.isVoucherManager,warning:e.warningMin||e.warningTips},{suffix:Le((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.commonData.setup1Data?e.commonData.setup1Data.currencySymbol:""),1)]})),_:1},8,["modelValue","disabled","warning"])]})),_:1}),Object(o.createVNode)(s,{class:"setup-form-item"},{label:Le((function(){return[at]})),value:Le((function(){return[Object(o.createVNode)(m,{mode:"decimal",decimals:6,modelValue:e.setup2Form.max,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.setup2Form.max=t}),border:!0,placeholder:"MAX",disabled:!e.setup1Data.voucherAddress||!e.isVoucherManager,warning:e.warningMax||e.warningTips},{suffix:Le((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.commonData.setup1Data?e.commonData.setup1Data.currencySymbol:""),1)]})),_:1},8,["modelValue","disabled","warning"])]})),_:1})]),e.warningTips?(Object(o.openBlock)(),Object(o.createBlock)("p",{key:0,class:["text-tip__inner",[e.warningTips?"warning_color":""]]},Object(o.toDisplayString)(e.t("The Minimum amount must be lower than the Maximum amount")),3)):Object(o.createCommentVNode)("",!0)]),Object(o.createVNode)(s,{label:e.t("Restrictions on purchasing address"),class:"whitelist-module"},{value:Le((function(){return[Object(o.createVNode)(b,{modelValue:e.setup2Form.useAllowList,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.setup2Form.useAllowList=t}),label:!0},{default:Le((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$t("Project Whitelist")),1)]})),_:1},8,["modelValue"]),Object(o.createVNode)(b,{modelValue:e.setup2Form.useAllowList,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.setup2Form.useAllowList=t}),label:!1},{default:Le((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.$t("Unlimited")),1)]})),_:1},8,["modelValue"])]})),_:1},8,["label"])])})),nt=(a("24da"),a("70b5")),ct=a.n(nt),rt=a("65d4"),it=a("d7d3"),st=a("e672"),lt={min:"",max:"",startTime:"",endTime:"",useAllowList:!0,startTimeView:$.a.dateUTCFormat((new Date).getTime()),startHourVal:"00:00",endTimeView:$.a.dateUTCFormat((new Date).getTime()),endHourVal:""},ut=Object(o.defineComponent)({components:{DaItem:Ne.a,DaInput:we.a,ElSwitch:ct.a,DaDatePicker:rt.a,TextTip:st.a,DaTimeSelect:it.a},props:{setup1Data:{type:Object,default:function(){}},finished:{type:Boolean,default:!1},isVoucherManager:{type:Boolean,default:!1}},emits:["next"],setup:function(e,t){var a=t.emit,n=Object(o.toRefs)(e).setup1Data,c=Object(Q.b)().t,r=Object(J.a)(),i=r.getters,s=r.commit,l=Object(o.reactive)({isCurrentDate:!0,setup1Data:n.value}),u=Object(o.reactive)($.a.deepCopyData(lt)),d=Object(o.computed)((function(){var e=!(!u.endHourVal||$.a.compOrEqual(u.startTime||0,u.endTime||0));return u.endHourVal&&new Date(u.startTimeView+" "+u.startHourVal+":00").getTime()<new Date(u.endTimeView+" "+(u.endHourVal||"00:00")+":00").getTime()&&(e=!0),(!$.a.comp(u.min,"0")||!$.a.comp(u.min,l.setup1Data.totalValue))&&((!$.a.comp(u.max,"0")||!$.a.comp(u.max,l.setup1Data.totalValue))&&(!($.a.comp(u.min,"0")&&$.a.comp(u.max,"0")&&$.a.comp(u.min,u.max)||!e)&&!($.a.comp(u.min,"0")&&$.a.comp(u.max,"0")&&$.a.comp(u.min,u.max)||!e)))})),m=Object(o.computed)((function(){var e=!1;return u.endHourVal&&new Date(u.startTimeView+" "+u.startHourVal+":00").getTime()>new Date(u.endTimeView+" "+(u.endHourVal||"00:00")+":00").getTime()&&(e=!0),e})),b=Object(o.computed)((function(){return!(!$.a.comp(u.min,"0")||!$.a.comp(u.min,l.setup1Data.totalValue)&&!$.a.comp(u.min,u.max))})),p=Object(o.computed)((function(){return!(!$.a.comp(u.max,"0")||!$.a.comp(u.max,l.setup1Data.totalValue))})),v=Object(o.computed)((function(){return $.a.comp(u.min,u.max)})),O=function(){u.startTimeView=$.a.dateFormat(new Date(u.startTimeView).getTime()),u.startHourVal=l.isCurrentDate?$.a.dayjsUTCFormat(i.getBlockTimestamp?1e3*i.getBlockTimestamp:(new Date).getTime(),"HH:00"):u.startHourVal;var e=u.startTimeView+" "+u.startHourVal+":00 UTC",t=new Date(e).getTime();u.startTime=Math.floor(t/1e3)+"";var a=Math.floor(new Date(u.startTimeView+" 00:00:00 UTC").getTime()/1e3)+"";s("setSaleStartTime",a)};O();var j=function(){u.endTimeView=$.a.dateFormat(new Date(u.endTimeView).getTime());var e=u.endTimeView+" "+(u.endHourVal?u.endHourVal:"00:00")+":00 UTC",t=new Date(e).getTime();u.endTime=Math.floor(t/1e3)+""};Object(o.watch)((function(){return l.isCurrentDate}),(function(){l.isCurrentDate&&(u.startTimeView=$.a.dateUTCFormat((new Date).getTime()),O())}));var h=function(e){e&&(O(),j()),a("next",{data:u,finished:e})};return Object(o.watchEffect)((function(){l.setup1Data=n.value})),Object(o.watch)((function(){return[d.value,l.setup1Data]}),(function(){d.value&&l.setup1Data?h(!0):h(!1)})),{commonData:l,setup2Form:u,warningTime:m,warningMin:b,warningMax:p,warningTips:v,t:c,handleStartTime:O,handleEndTime:j,bindNext:h,disabledDate:function(e){var t=new Date(u.startTimeView+" 00:00:00").getTime()/1e3;return e.getTime()<1e3*t}}}});a("f622");ut.render=ot,ut.__scopeId="data-v-9f1dd91e";var dt=ut,mt=Object(o.defineComponent)({components:{PageWrapper:H.a,Setup1:Ie,Setup3:dt,DaButton:P.a,TxFinish:L.a,Loading:U.a},props:{},setup:function(){var e=this,t=Object(Q.b)().t,a=Object(J.a)().getters,n=Object(Z.d)().back;function c(e){return new Y.a("10").pow(new Y.a(e))}var r=Object(o.reactive)({visibleIssueLoading:!1,isApprove:!0,allowance:0,visibleApproveLoading:!1,visibleLoading:!1,visibleTxFinish:!1,txHash:"",loadFinished:!0,listFeeRate:"0",setup1:{data:{voucherAddress:"",lowestPrice:"",highestPrice:"",currencyAddress:"",currencySymbol:"",currencyDecimals:0,totalValue:"",duration:"",apr:"",faceValue:"",maturity:"",unitPrice:"",tokenInAmount:"",priceType:0,effectiveTime:""},finished:!1},setup2:{data:{min:"",max:"",startTime:"",endTime:"",useAllowList:!0,startTimeView:"",startHourVal:"",endTimeView:"",endHourVal:""},finished:!1}}),i=Object(o.reactive)({loadFinished:!1,balance:"0",allowance:"0",compTokenInAmount:!1,isVoucherManager:!0});function s(){var e;return Object(M.b)(this,void 0,void 0,(function(){var t;return Object(M.e)(this,(function(o){switch(o.label){case 0:return r.setup1.data&&r.setup1.data.voucherTokenSchema?[4,Object(q.c)(R.c[4]).underlyingAllowance(a.getAccount,null===(e=r.setup1.data.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.address)]:[3,2];case 1:t=o.sent(),r.allowance=t,r.isApprove=t>0,o.label=2;case 2:return[2]}}))}))}function l(){if(!r.setup1.data||!r.setup1.data.voucherTokenSchema||!r.setup2.finished)return 0;var e=r.setup1.data.voucherTokenSchema;return new Y.a(r.setup1.data.totalValue).dividedBy(new Y.a(r.setup1.data.unitPrice)).dividedBy(new Y.a(r.setup1.data.lowestPrice)).multipliedBy(c(e.underlyingToken.decimals)).toFixed(0,2)}var u=Object(o.computed)((function(){var e=!0;return!(e=!(r.setup1.finished&&r.setup2.finished&&i.compTokenInAmount))&&r.setup1.finished&&r.setup2.data&&($.a.comp(r.setup2.data.min,r.setup1.data.totalValue)&&(e=!0),$.a.comp(r.setup2.data.max,r.setup1.data.totalValue)&&(e=!0)),e})),d=Object(o.computed)((function(){return!!$.a.comp($.a.viewFixed(r.setup1.data.tokenInAmount),i.balance)}));return Object(o.watchEffect)((function(){i.compTokenInAmount=!(!r.setup1.finished||!$.a.compOrEqual(i.balance,r.setup1.data.tokenInAmount||0)),r.setup1.finished&&r.setup1.data.voucherTokenSchema&&(r.isApprove=$.a.compOrEqual($.a.tokenDivDecimals(r.allowance,r.setup1.data.voucherTokenSchema.underlyingToken.decimals),r.setup1.data.tokenInAmount))})),{commonData:r,disabledConfirm:u,accountInfo:i,warningWalletBalance:d,bindSetup1Next:function(e){r.setup1.data=e.data,r.setup1.finished=e.finished,e.data.voucherAddress&&a.getChangeFlag&&(function(){var e,t;Object(M.b)(this,void 0,void 0,(function(){var o,n;return Object(M.e)(this,(function(c){switch(c.label){case 0:return r.setup1.data.voucherTokenSchema?(i.loadFinished=!1,[4,new E.Erc20Token((null===(e=r.setup1.data.voucherTokenSchema)||void 0===e?void 0:e.underlyingToken.address)||"",a.getProvider).balanceOf(a.getAccount)]):[2];case 1:if(o=c.sent(),void 0===r.setup1.data.voucherTokenSchema)throw new Error("Wrong voucher token schema");return n=i,[4,Object(q.c)(R.c[4]).isVoucherManager(r.setup1.data.voucherTokenSchema.address,a.getAccount)];case 2:return n.isVoucherManager=c.sent(),i.loadFinished=!0,i.balance=$.a.hideMantissa($.a.tokenDivDecimals(o||"0",(null===(t=r.setup1.data.voucherTokenSchema)||void 0===t?void 0:t.underlyingToken.decimals)+"",6)),i.isVoucherManager&&s(),[2]}}))}))}(),function(){var e;Object(M.b)(this,void 0,Promise,(function(){var t;return Object(M.e)(this,(function(a){switch(a.label){case 0:return r.setup1.data.voucherTokenSchema?[4,Object(q.c)(R.c[4]).getMarkets((null===(e=r.setup1.data)||void 0===e?void 0:e.voucherAddress)+"")]:[2];case 1:return t=a.sent(),r.listFeeRate=t.feeRate+"",[2]}}))}))}())},bindSetup3Next:function(e){r.setup2.data=e.data,r.setup2.finished=e.finished},t:t,bindIssue:function(){return Object(M.b)(e,void 0,void 0,(function(){var e,a,o,n,i,s,u,d,m,b,p,v,O;return Object(M.e)(this,(function(j){switch(j.label){case 0:r.visibleIssueLoading=!0,j.label=1;case 1:return j.trys.push([1,4,,5]),(e=r.setup1.data.voucherTokenSchema)?[4,Object(q.d)().getPriceDecimals(e)]:[2];case 2:return a=j.sent(),o=l(),n=$.a.tokenMulDecimals(r.setup1.data.lowestPrice,a),i=$.a.tokenMulDecimals(r.setup1.data.highestPrice,a),s=new Y.a(r.setup2.data.min||0).dividedBy(new Y.a(r.setup1.data.unitPrice)),u=new Y.a(r.setup2.data.max||0).dividedBy(new Y.a(r.setup1.data.unitPrice)),d=s.multipliedBy(new Y.a("10").pow(new Y.a(e.underlyingToken.decimals+a))).toFixed(0,1),m=u.multipliedBy(new Y.a("10").pow(new Y.a(e.underlyingToken.decimals+a))).toFixed(0,2),r.setup2.data.max&&r.setup2.data.max==r.setup1.data.totalValue&&(m=function(){var e,t,a;if(!(null===(e=r.setup1)||void 0===e?void 0:e.data)||!(null===(t=r.setup2)||void 0===t?void 0:t.data)||!(null===(a=r.setup1)||void 0===a?void 0:a.data.voucherTokenSchema))return"0";var o=r.setup1.data.voucherTokenSchema;return new Y.a(l()).dividedBy(c(o.underlyingToken.decimals)).multipliedBy(new Y.a(r.setup1.data.lowestPrice).multipliedBy(c(8))).multipliedBy(c(o.underlyingToken.decimals)).toFixed(0)}()),b="",0==r.setup1.data.priceType&&(b=E.VestingOfferingMarket.encodeOfferPriceData(["uint128"],[$.a.tokenMulDecimals(r.setup1.data.unitPrice,r.setup1.data.currencyDecimals)])),p={commonParams:{voucherAddress:r.setup1.data.voucherAddress,currencyAddress:r.setup1.data.currencyAddress,min:d,max:m,startTime:r.setup2.data.startTime,endTime:r.setup2.data.endTime,useAllowwList:r.setup2.data.useAllowList,priceType:0,priceData:b},mintVestingParams:{lowestPrice:n,highestPrice:i,tokenInAmount:o,effectiveTime:r.setup1.data.effectiveTime,maturity:r.setup1.data.maturity}},[4,Object(q.c)(R.c[4]).offer(p)];case 3:return v=j.sent(),r.visibleIssueLoading=!1,Object(K.b)(v),r.visibleLoading=!0,[3,5];case 4:return O=j.sent(),r.visibleIssueLoading=!1,G.a.error(t(Object(W.a)().parseErrorInfo(O))),[3,5];case 5:return[2]}}))}))},bindApprove:function(){return Object(M.b)(this,void 0,void 0,(function(){return Object(M.e)(this,(function(e){switch(e.label){case 0:if(!r.setup1.data||!r.setup1.data.voucherTokenSchema)return[3,6];e.label=1;case 1:return e.trys.push([1,5,,6]),r.visibleApproveLoading=!0,[4,Object(q.c)(R.c[4]).underlyingApprove(r.setup1.data.voucherTokenSchema.underlyingToken.address)];case 2:return[4,e.sent().wait()];case 3:return e.sent(),[4,s()];case 4:return e.sent(),r.visibleApproveLoading=!1,[3,6];case 5:return e.sent(),r.visibleApproveLoading=!1,[3,6];case 6:return[2]}}))}))},handleTxDone:function(e,t){r.txHash=t,r.visibleTxFinish=!0},handleTxFinishedClose:function(){r.visibleTxFinish=!1,n()}}}});a("5c5c"),a("308b");mt.render=I,mt.__scopeId="data-v-7474c1c5";t.default=mt},db8b:function(e,t,a){},f622:function(e,t,a){"use strict";a("4731")}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-37b38cec"],{"148c":function(e,t,o){"use strict";o.r(t);o("b0c0"),o("a9e3"),o("ac1f"),o("1276");var c=o("7a23"),a=Object(c.withScopeId)("data-v-ebfd0f2c");Object(c.pushScopeId)("data-v-ebfd0f2c");var i={class:"voucher-details-top"},r={class:"voucher-details-top__header"},n={class:"header-left"},l={class:"header-right"},u={class:"voucher-details-top__body"},v={key:1,class:"voucher-image__inner"},s={class:"voucher-info__inner"},d={class:"base-info"},b={class:"amount-label"},h={class:"amount-text"},m={class:"voucher-symbol"},O={class:"base-info__bottom"},f={key:0,class:"base-label"},j={class:"base-value"},p={key:0,class:"base-label"},g={class:"base-value"},D={class:"release-type-info"},y={class:"release-mode"},k={class:"label"},V={class:"mode"},I={key:0,class:"value"},T={key:1},S={key:1,class:"value single-module"},N={key:2,class:"value staged-module"},C={class:"radio"},B={class:"date"},x={class:"date-value font-variant-numeric"},w={class:"voucher-details-action__inner"},_={class:"action-item action-left"},F={class:"action-item action-right"};Object(c.popScopeId)();var R=a((function(e,t,o,R,$,A){var U,L,z,E,P,G,M,W,q,H,J=Object(c.resolveComponent)("DaSkeleton"),K=Object(c.resolveComponent)("OutputHref"),Q=Object(c.resolveComponent)("DaImage"),X=Object(c.resolveComponent)("DaCard"),Y=Object(c.resolveComponent)("el-col"),Z=Object(c.resolveComponent)("DaItem"),ee=Object(c.resolveComponent)("el-row"),te=Object(c.resolveComponent)("DaButton"),oe=Object(c.resolveComponent)("PageWrapper"),ce=Object(c.resolveComponent)("ClaimVestingVoucher"),ae=Object(c.resolveComponent)("ClaimFlexibleVoucher"),ie=Object(c.resolveComponent)("TransferVestingVoucher"),re=Object(c.resolveComponent)("SplitVestingVoucher"),ne=Object(c.resolveComponent)("MergeVestingVoucher"),le=Object(c.resolveComponent)("DeleteVoucher");return Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,null,[Object(c.createVNode)(oe,{showBreadcrumbs:!0},{default:a((function(){var o,R,$,A;return[Object(c.createVNode)("div",i,[Object(c.createVNode)("div",r,[Object(c.createVNode)(J,{visible:!(null!==(o=e.voucherData.voucherTokenSchema)&&void 0!==o&&o.name),height:e.$filters.pxToRem(36),width:e.$filters.pxToRem(320),parentWidth:"auto"},{default:a((function(){var t,o,a;return[Object(c.createVNode)("div",n,[Object(c.createVNode)("img",{src:e.$filters.getTokenLocalLogo(null===(t=e.voucherData.voucherTokenSchema)||void 0===t?void 0:t.logoURI,null===(o=e.voucherData.voucherTokenSchema)||void 0===o?void 0:o.underlyingToken.symbol),class:"token-logo"},null,8,["src"]),Object(c.createVNode)("span",null,Object(c.toDisplayString)(null===(a=e.voucherData.voucherTokenSchema)||void 0===a?void 0:a.name)+" #"+Object(c.toDisplayString)(e.voucherData.voucherId),1)])]})),_:1},8,["visible","height","width"]),Object(c.createVNode)("div",l,[Object(c.createVNode)(K,{voucherId:e.voucherData.voucherId,voucherAddress:null===(R=e.voucherData.voucherTokenSchema)||void 0===R?void 0:R.address,underlyingSymbol:null===($=e.voucherData.voucherTokenSchema)||void 0===$?void 0:$.underlyingToken.symbol,underlyingAddress:null===(A=e.voucherData.voucherTokenSchema)||void 0===A?void 0:A.underlyingToken.address},null,8,["voucherId","voucherAddress","underlyingSymbol","underlyingAddress"])])]),Object(c.createVNode)("div",u,[Object(c.createVNode)(ee,{gutter:32,class:"voucher-info-module"},{default:a((function(){return[Object(c.createVNode)(Y,{span:12},{default:a((function(){return[Object(c.createVNode)(X,{class:"voucher-image"},{default:a((function(){var t;return["Vesting"===(null===(t=e.voucherData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(Q,{key:0,src:e.voucherData.voucherImage,urlList:[e.originalVoucherImgUrl],showReload:!0,showPreview:!0},null,8,["src","urlList"])):(Object(c.openBlock)(),Object(c.createBlock)("div",v,[e.voucherData.voucherImage?(Object(c.openBlock)(),Object(c.createBlock)("img",{key:0,src:e.voucherData.voucherImage,alt:"cher-image__entry"},null,8,["src"])):Object(c.createCommentVNode)("",!0)]))]})),_:1})]})),_:1}),Object(c.createVNode)(Y,{span:12},{default:a((function(){return[Object(c.createVNode)(X,{class:"voucher-info"},{default:a((function(){return[Object(c.createVNode)("div",s,[Object(c.createVNode)("div",d,[Object(c.createVNode)(Z,{class:"base-info__top"},{label:a((function(){return[Object(c.createVNode)("span",b,Object(c.toDisplayString)(e.t("Amount")),1)]})),value:a((function(){return[Object(c.createVNode)(J,{visible:!e.loadFinish,width:e.$filters.pxToRem(160),height:e.$filters.pxToRem(32)},{default:a((function(){var t,o,a;return[Object(c.createVNode)("span",h,Object(c.toDisplayString)(e.$filters.beautyAmount(e.$filters.viewTokenDivDecimals((null===(t=e.voucherData.voucherInfo)||void 0===t?void 0:t.units)||0,(null===(o=e.voucherData.voucherInfo)||void 0===o?void 0:o.underlyingDecimals)||0),"token")),1),Object(c.createVNode)("span",m,Object(c.toDisplayString)(null===(a=e.voucherData.voucherInfo)||void 0===a?void 0:a.underlyingSymbol),1)]})),_:1},8,["visible","width","height"])]})),_:1}),Object(c.createVNode)("div",O,[Object(c.createVNode)(Z,null,{label:a((function(){return[e.voucherData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)("span",f,Object(c.toDisplayString)(e.t(e.parseVoucherType.label1)),1)):Object(c.createCommentVNode)("",!0)]})),value:a((function(){return[Object(c.createVNode)(J,{visible:!e.loadFinish,width:e.$filters.pxToRem(100),height:e.$filters.pxToRem(18)},{default:a((function(){var t,o,a,i,r;return[Object(c.createVNode)("span",j,["Vesting"===(null===(t=e.voucherData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.$filters.beautyAmount(e.$filters.viewTokenDivDecimals((null===(o=e.voucherData.voucherInfo)||void 0===o?void 0:o.availableClaimAmount)||0,(null===(a=e.voucherData.voucherInfo)||void 0===a?void 0:a.underlyingDecimals)||0),"token"))+" "+Object(c.toDisplayString)(null===(i=e.voucherData.voucherInfo)||void 0===i?void 0:i.underlyingSymbol),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createTextVNode)(Object(c.toDisplayString)("TGE Date"!=e.commonData.tgeTimeView?e.commonData.tgeTimeView||"TGE Date":e.t("To be determined, no later than ")+e.$filters.dateUTCFormat(1e3*Number(null===(r=e.voucherData.voucherInfo)||void 0===r?void 0:r.latestStartTime))),1)],64))])]})),_:1},8,["visible","width","height"])]})),_:1}),Object(c.createVNode)(Z,null,{label:a((function(){return[e.voucherData.voucherInfo?(Object(c.openBlock)(),Object(c.createBlock)("span",p,Object(c.toDisplayString)(e.parseVoucherType.label2?e.t(e.parseVoucherType.label2):""),1)):Object(c.createCommentVNode)("",!0)]})),value:a((function(){return[Object(c.createVNode)(J,{visible:!e.loadFinish,width:e.$filters.pxToRem(100),height:e.$filters.pxToRem(18)},{default:a((function(){var t,o,a,i;return[Object(c.createVNode)("span",g,["Vesting"===(null===(t=e.voucherData.voucherInfo)||void 0===t?void 0:t.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.$filters.beautyAmount(e.$filters.viewTokenDivDecimals((null===(o=e.voucherData.voucherInfo)||void 0===o?void 0:o.lockAmount)||0,(null===(a=e.voucherData.voucherInfo)||void 0===a?void 0:a.underlyingDecimals)||0),"token"))+" "+Object(c.toDisplayString)(null===(i=e.voucherData.voucherInfo)||void 0===i?void 0:i.underlyingSymbol),1)],64)):Object(c.createCommentVNode)("",!0)])]})),_:1},8,["visible","width","height"])]})),_:1})])]),Object(c.createVNode)("div",D,[Object(c.createVNode)(J,{visible:!e.loadFinish,width:"100%",center:!0,class:"operation-module"},{default:a((function(){var t,o,a,i,r,n,l,u,v;return[Object(c.createVNode)("div",y,[Object(c.createVNode)("p",k,[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Vesting Type"))+": ",1),Object(c.createVNode)("span",V,Object(c.toDisplayString)(e.t(e.$filters.formatReleaseType((null===(t=e.voucherData.voucherInfo)||void 0===t?void 0:t.releaseType)+""))),1)]),0==(null===(o=e.voucherData.voucherInfo)||void 0===o?void 0:o.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)("div",I,["Vesting"===(null===(a=e.voucherData.voucherInfo)||void 0===a?void 0:a.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Start From (UTC)"))+" : "+Object(c.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(i=e.voucherData.voucherInfo)||void 0===i?void 0:i.startFrom))),1),Object(c.createVNode)("p",null,Object(c.toDisplayString)(e.t("Finish At (UTC)"))+" : "+Object(c.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(r=e.voucherData.voucherInfo)||void 0===r?void 0:r.finishAt))),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)("p",T,Object(c.toDisplayString)(e.t("Vesting Period"))+": "+Object(c.toDisplayString)(e.commonData.flexibleReleaseTerm)+" "+Object(c.toDisplayString)(e.commonData.flexibleReleaseTerm<=1?e.t("Day"):e.t("Days")),1))])):Object(c.createCommentVNode)("",!0),1==(null===(n=e.voucherData.voucherInfo)||void 0===n?void 0:n.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)("div",S,[Object(c.createVNode)("p",null,["Vesting"===(null===(l=e.voucherData.voucherInfo)||void 0===l?void 0:l.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Vesting Date (UTC)"))+": "+Object(c.toDisplayString)(e.$filters.dateUTCFormat(1e3*(null===(u=e.voucherData.voucherInfo)||void 0===u?void 0:u.startFrom))),1)],64)):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Vesting Period"))+": "+Object(c.toDisplayString)(e.commonData.flexibleReleaseTerm)+" "+Object(c.toDisplayString)(e.commonData.flexibleReleaseTerm<=1?e.t("Day"):e.t("Days")),1)],64))])])):Object(c.createCommentVNode)("",!0),2==(null===(v=e.voucherData.voucherInfo)||void 0===v?void 0:v.releaseType)?(Object(c.openBlock)(),Object(c.createBlock)("div",N,[(Object(c.openBlock)(!0),Object(c.createBlock)(c.Fragment,null,Object(c.renderList)(e.stagedData.list,(function(t,o){return Object(c.openBlock)(),Object(c.createBlock)("div",{class:"staged-module__item",key:o},[t?(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:0},[Object(c.createVNode)("p",C,Object(c.toDisplayString)(t.radio)+"%",1),Object(c.createVNode)("div",B,[Object(c.createVNode)("p",x,Object(c.toDisplayString)(t.date)+" "+Object(c.toDisplayString)("Flexible"===e.voucherData.voucherInfo.voucherType?e.t("Days"):""),1)])],64)):Object(c.createCommentVNode)("",!0)])})),128))])):Object(c.createCommentVNode)("",!0)])]})),_:1},8,["visible"])])])]})),_:1})]})),_:1})]})),_:1})]),e.showAction?(Object(c.openBlock)(),Object(c.createBlock)(X,{key:0,class:"voucher-details-action"},{default:a((function(){var o;return[Object(c.createVNode)("div",w,[Object(c.createVNode)("div",_,[Object(c.createVNode)(te,{class:"action-btn action-btn-extend",size:"mini",onClick:t[1]||(t[1]=function(t){return e.visibleDialog.transfer=!0})},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Transfer")),1)]})),_:1}),Object(c.createVNode)(te,{class:"action-btn action-btn-extend",size:"mini",onClick:t[2]||(t[2]=function(t){return e.visibleDialog.merge=!0})},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Merge")),1)]})),_:1}),Object(c.createVNode)(te,{class:"action-btn action-btn-extend",size:"mini",onClick:t[3]||(t[3]=function(t){return e.visibleDialog.split=!0}),disabled:e.isDeleteVoucher},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Split")),1)]})),_:1},8,["disabled"])]),Object(c.createVNode)("div",F,["Flexible"===(null===(o=e.voucherData.voucherInfo)||void 0===o?void 0:o.voucherType)?(Object(c.openBlock)(),Object(c.createBlock)(te,{key:0,class:"action-btn action-btn-extend",size:"mini",onClick:e.bindClaim,disabled:e.commonData.disabledFlexibleClaim},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Convert")),1)]})),_:1},8,["onClick","disabled"])):(Object(c.openBlock)(),Object(c.createBlock)(c.Fragment,{key:1},[e.isDeleteVoucher?(Object(c.openBlock)(),Object(c.createBlock)(te,{key:0,type:"danger",class:"action-btn action-btn-extend",plain:"",onClick:e.handleDeleteVoucher,size:"mini"},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Delete")),1)]})),_:1},8,["onClick"])):(Object(c.openBlock)(),Object(c.createBlock)(te,{key:1,class:"action-btn action-btn-extend",size:"mini",onClick:e.bindClaim,disabled:e.commonData.disabledFlexibleClaim},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("Claim")),1)]})),_:1},8,["onClick","disabled"]))],64)),Object(c.createVNode)(te,{class:"action-btn",size:"mini",disabled:e.isDeleteVoucher,onClick:e.handleAction},{default:a((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.t("List")),1)]})),_:1},8,["disabled","onClick"])])])]})),_:1})):Object(c.createCommentVNode)("",!0)])]})),_:1}),e.visibleDialog.claim?(Object(c.openBlock)(),Object(c.createBlock)(ce,{key:0,voucherId:(null===(U=e.voucherData)||void 0===U?void 0:U.voucherId)+"",voucherSymbol:null===(L=e.voucherData)||void 0===L?void 0:L.voucherSymbol,visible:e.visibleDialog.claim,onClose:t[4]||(t[4]=function(t){return e.visibleDialog.claim=!1})},null,8,["voucherId","voucherSymbol","visible"])):Object(c.createCommentVNode)("",!0),e.visibleDialog.claimFlexible?(Object(c.openBlock)(),Object(c.createBlock)(ae,{key:1,voucherId:(null===(z=e.voucherData)||void 0===z?void 0:z.voucherId)+"",voucherSymbol:null===(E=e.voucherData)||void 0===E?void 0:E.voucherSymbol,visible:e.visibleDialog.claimFlexible,onClose:t[5]||(t[5]=function(t){return e.visibleDialog.claimFlexible=!1})},null,8,["voucherId","voucherSymbol","visible"])):Object(c.createCommentVNode)("",!0),e.visibleDialog.transfer?(Object(c.openBlock)(),Object(c.createBlock)(ie,{key:2,visible:e.visibleDialog.transfer,instance:e.voucherData.voucherInfo,onClose:t[6]||(t[6]=function(t){return e.visibleDialog.transfer=!1})},null,8,["visible","instance"])):Object(c.createCommentVNode)("",!0),e.visibleDialog.split?(Object(c.openBlock)(),Object(c.createBlock)(re,{key:3,voucherId:(null===(P=e.voucherData)||void 0===P?void 0:P.voucherId)+"",voucherSymbol:null===(G=e.voucherData)||void 0===G?void 0:G.voucherSymbol,visible:e.visibleDialog.split,onClose:t[7]||(t[7]=function(t){return e.visibleDialog.split=!1})},null,8,["voucherId","voucherSymbol","visible"])):Object(c.createCommentVNode)("",!0),e.visibleDialog.merge?(Object(c.openBlock)(),Object(c.createBlock)(ne,{key:4,voucherId:(null===(M=e.voucherData)||void 0===M?void 0:M.voucherId)+"",voucherSymbol:null===(W=e.voucherData)||void 0===W?void 0:W.voucherSymbol,visible:e.visibleDialog.merge,onClose:t[8]||(t[8]=function(t){return e.visibleDialog.merge=!1})},null,8,["voucherId","voucherSymbol","visible"])):Object(c.createCommentVNode)("",!0),e.visibleDialog.delete?(Object(c.openBlock)(),Object(c.createBlock)(le,{key:5,voucherId:(null===(q=e.voucherData)||void 0===q?void 0:q.voucherId)+"",voucherSymbol:null===(H=e.voucherData)||void 0===H?void 0:H.voucherSymbol,visible:e.visibleDialog.delete,onClose:t[9]||(t[9]=function(t){return e.visibleDialog.delete=!1}),needBack:!0},null,8,["voucherId","voucherSymbol","visible"])):Object(c.createCommentVNode)("",!0)],64)})),$=(o("d3b7"),o("159b"),o("25f0"),o("9ab4")),A=o("e205"),U=o("6363"),L=o("e904"),z=o("5aec"),E=o("9998"),P=o("ba45"),G=o("096a"),M=o("5fbb"),W=o("2f19"),q=o("a6f3"),H=o("c398"),J=o("ce37"),K=o("f41c"),Q=o("9707"),X=o("1d85"),Y=o("1c5c"),Z=o("8e83"),ee=o("7d14"),te=o("9af8"),oe=o("901e"),ce=o.n(oe),ae=o("47e2"),ie=o("6c02"),re=Object(c.defineComponent)({components:{PageWrapper:K.a,DaSkeleton:E.a,DaCard:U.a,DaImage:L.a,DaItem:z.a,DaButton:A.a,ClaimVestingVoucher:G.a,ClaimFlexibleVoucher:P.a,TransferVestingVoucher:J.a,SplitVestingVoucher:H.a,MergeVestingVoucher:W.a,OutputHref:q.a,DeleteVoucher:M.a},setup:function(){var e=this,t=Object(ae.b)().t,o=Object(ie.c)().params,a=Object(Y.a)().getters,i=Object(ie.d)().push,r=Object(c.reactive)({flexibleReleaseTerm:0,tgeTimeView:"",disabledFlexibleClaim:!0}),n=Object(c.reactive)({voucherId:o.voucherId+"",voucherSymbol:o.voucherSymbol+"",voucherImage:""}),l=Object(c.ref)(!1),u=Object(c.ref)(""),v=Object(c.reactive)({list:[]}),s=Object(c.reactive)({claim:!1,transfer:!1,split:!1,merge:!1,claimFlexible:!1,delete:!1}),d=Object(c.computed)((function(){var e,t;return{label1:"Vesting"===(null===(e=n.voucherTokenSchema)||void 0===e?void 0:e.type)?"Claimable":"Release Start Date",label2:"Vesting"===(null===(t=n.voucherTokenSchema)||void 0===t?void 0:t.type)?"Locked":""}})),b=Object(c.reactive)({currencySymbol:""}),h=Object(Z.b)(b).tokenValueInfo,m=Object(c.computed)((function(){var e,t;return n.voucherInfo?new ce.a(Q.a.tokenDivDecimals((null===(e=n.voucherInfo)||void 0===e?void 0:e.units)||0,null===(t=n.voucherInfo)||void 0===t?void 0:t.underlyingDecimals)).multipliedBy(new ce.a(h.price)):"0"})),O=Object(c.computed)((function(){return n.voucherInfo&&n.voucherInfo.owner.toLowerCase()===a.getAccount.toLowerCase()})),f=Object(c.computed)((function(){return!n.voucherInfo||!Q.a.comp(n.voucherInfo.units,"0")}));function j(){return Object($.b)(this,void 0,Promise,(function(){return Object($.e)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,te.a.ethereumEvent.ethereum.getBlock()];case 1:return[2,e.sent().timestamp];case 2:return e.sent(),[2,Q.a.getCurrentTime()];case 3:return[2]}}))}))}function p(){return Object($.b)(this,void 0,void 0,(function(){var t,o;return Object($.e)(this,(function(c){switch(c.label){case 0:return n.voucherTokenSchema?[4,Object(X.c)().getVoucherInfo(n.voucherTokenSchema,n.voucherId)]:[2];case 1:if(t=c.sent(),l.value=!0,n.voucherInfo=Object(ee.a)([t])[0],b.currencySymbol=n.voucherInfo.underlyingSymbol,"Vesting"===n.voucherTokenSchema.type){if(n.voucherImage=Q.a.viewVoucherImg(t.URI),u.value=n.voucherImage,r.disabledFlexibleClaim=!1,2==n.voucherInfo.releaseType){for(o=0;o<5;o++)v.list.push(null);n.voucherInfo.maturities.forEach((function(e,t){var o,c=new ce.a((null===(o=n.voucherInfo)||void 0===o?void 0:o.percentages[t])+"").dividedBy(new ce.a(100)).toNumber(),a=Q.a.dateUTCFormat(1e3*Number(e.toString()));v.list[t]={radio:c,date:a}}))}}else!function(){var t,o,c,a;Object($.b)(this,void 0,void 0,(function(){var i,l,s,d,b,h,m,O,f;return Object($.e)(this,(function(p){switch(p.label){case 0:if(r.flexibleReleaseTerm=(null===(t=n.voucherInfo)||void 0===t?void 0:t.terms)?Number(n.voucherInfo.terms[0])/86400:0,n.voucherImage=Q.a.base64Decode((null===(o=n.voucherInfo)||void 0===o?void 0:o.URI)+"").image,u.value=n.voucherImage,2==(null===(c=n.voucherInfo)||void 0===c?void 0:c.releaseType)){for(i=0;i<5;i++)v.list.push(null);if(n.voucherInfo.terms){l=0;try{for(s=Object($.f)(n.voucherInfo.terms),d=s.next();!d.done;d=s.next())b=d.value,h=new ce.a((null===(a=n.voucherInfo)||void 0===a?void 0:a.percentages[l])+"").dividedBy(new ce.a(100)).toNumber(),m=Number(b)/86400+"",v.list[l]={radio:h,date:m},l++}catch(e){O={error:e}}finally{try{d&&!d.done&&(f=s.return)&&f.call(s)}finally{if(O)throw O.error}}}}return[4,Object($.b)(e,void 0,void 0,(function(){var e,t,o,c,a,i,l,u;return Object($.e)(this,(function(v){switch(v.label){case 0:return[4,j()];case 1:return e=v.sent(),t=(null===(o=n.voucherInfo)||void 0===o?void 0:o.tgeTime)&&(null===(c=n.voucherInfo)||void 0===c?void 0:c.tgeTime)>0?null===(a=n.voucherInfo)||void 0===a?void 0:a.tgeTime:Q.a.compOrEqual(e,(null===(i=n.voucherInfo)||void 0===i?void 0:i.latestStartTime)+"")?(null===(l=n.voucherInfo)||void 0===l?void 0:l.latestStartTime)+"":0,r.tgeTimeView=0==t?"TGE Date":Q.a.dateUTCFormat(1e3*Number(t)),r.disabledFlexibleClaim="Flexible"===(null===(u=n.voucherInfo)||void 0===u?void 0:u.voucherType)&&(0==t||!Q.a.compOrEqual(e,t)),[2]}}))}))];case 1:return p.sent(),[2]}}))}))}();return[2]}}))}))}function g(){p()}return Object(c.watch)((function(){return a.getChangeFlag}),(function(e){e&&(l.value=!1,n.voucherTokenSchema=te.a.solvUtils.getTokenSchemaByVoucherSymbol(o.voucherSymbol+""),g())}),{immediate:!0}),Object(c.watch)((function(){return a.getLastTxReceipt}),(function(e){e&&g()}),{deep:!0}),{t:t,loadFinish:l,voucherData:n,originalVoucherImgUrl:u,stagedData:v,visibleDialog:s,parseVoucherType:d,commonData:r,tokenUnitsValue:m,isDeleteVoucher:f,handleAction:function(){var e,t;i({name:"ListVestingVoucher",params:{voucherId:(null===(e=n.voucherInfo)||void 0===e?void 0:e.voucherId)||0,voucherSymbol:(null===(t=n.voucherInfo)||void 0===t?void 0:t.voucherSymbol)||""}})},bindClaim:function(){var e;"Vesting"==(null===(e=n.voucherInfo)||void 0===e?void 0:e.voucherType)?s.claim=!0:s.claimFlexible=!0},showAction:O,handleDeleteVoucher:function(){s.delete=!0}}}});o("fd0a");re.render=R,re.__scopeId="data-v-ebfd0f2c";t.default=re},edef:function(e,t,o){},fd0a:function(e,t,o){"use strict";o("edef")}}]);
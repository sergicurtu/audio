(function(t,v,s){var l=["top","right","bottom","left","opacity","height","width"],u=["top","right","bottom","left"],p=["-webkit-","-moz-","-o-",""],y=["avoidTransforms","useTranslate3d","leaveTransforms"],j=/^([+-]=)?([\d+-.]+)(.*)$/,D=/([A-Z])/g,z={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},g="px",o="jQe",d="cubic-bezier(",C=")",c=null,x=false;var m=document.body||document.documentElement,f=m.style,b="webkitTransitionEnd oTransitionEnd transitionend",B=f.WebkitTransition!==undefined||f.MozTransition!==undefined||f.OTransition!==undefined||f.transition!==undefined,i=("WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix()),h=i;if(t.expr&&t.expr.filters){c=t.expr.filters.animated;t.expr.filters.animated=function(H){return t(H).data("events")&&t(H).data("events")[b]?true:c.call(this,H)}}function G(H){return H.match(/\D+$/)}function k(R,L,I,M){if(I=="d"){return}if(!a(R)){return}var O=j.exec(L),J=R.css(I)==="auto"?0:R.css(I),S=typeof J=="string"?E(J):J,K=typeof L=="string"?E(L):L,Q=M===true?0:S,P=R.is(":hidden"),H=R.translation();if(I=="left"){Q=parseInt(S,10)+H.x}if(I=="right"){Q=parseInt(S,10)+H.x}if(I=="top"){Q=parseInt(S,10)+H.y}if(I=="bottom"){Q=parseInt(S,10)+H.y}if(!O&&L=="show"){Q=1;if(P){R.css({display:A(R.context.tagName),opacity:0})}}else{if(!O&&L=="hide"){Q=0}}if(O){var N=parseFloat(O[2]);if(O[1]){N=((O[1]==="-="?-1:1)*N)+parseInt(Q,10)}if(O[3]=="%"){N=N+"%"}return N}else{return Q}}function w(H,J,I){return((I===true||((h===true&&I!==false))&&i))?"translate3d("+H+"px, "+J+"px, 0)":"translate("+H+"px,"+J+"px)"}function n(P,U,N,Q,T,J,M,H){var I=P.data(o),O=I&&!e(I)?I:t.extend(true,{},z),L=T,S=t.inArray(U,u)>-1;if(S){var V=O.meta,K=E(P.css(U))||0,R=U+"_o";L=T-K;V[U]=L;V[R]=P.css(U)=="auto"?0+L:K+L||0;O.meta=V;if(M&&L===0){L=0-V[R];V[U]=L;V[R]=0}}return P.data(o,F(P,O,U,N,Q,L,J,M,H))}function F(Z,T,M,H,V,W,N,K,J){var R=false,Q=N===true&&K===true;T=T||{};if(!T.original){T.original={};R=true}T.properties=T.properties||{};T.secondary=T.secondary||{};var S=T.meta,X=T.original,O=T.properties,U=T.secondary;for(var Y=p.length-1;Y>=0;Y--){var I=p[Y]+"transition-property",P=p[Y]+"transition-duration",L=p[Y]+"transition-timing-function";M=(Q?p[Y]+"transform":M);if(R){X[I]=Z.css(I)||"";X[P]=Z.css(P)||"";X[L]=Z.css(L)||""}U[M]=Q?w(S.left,S.top,J):W;O[I]=(O[I]?O[I]+",":"")+M;O[P]=(O[P]?O[P]+",":"")+H+"ms";O[L]=(O[L]?O[L]+",":"")+V}return T}function q(I){for(var H in I){if((H=="width"||H=="height")&&(I[H]=="show"||I[H]=="hide"||I[H]=="toggle")){return true}}return false}function e(I){for(var H in I){return false}return true}function A(H){H=H.toUpperCase();var I={LI:"list-item",TR:"table-row",TD:"table-cell",TH:"table-cell",CAPTION:"table-caption",COL:"table-column",COLGROUP:"table-column-group",TFOOT:"table-footer-group",THEAD:"table-header-group",TBODY:"table-row-group"};return typeof I[H]=="string"?I[H]:"block"}function E(H){return parseFloat(H.replace(G(H),""))}function a(H){var I=true;H.each(function(J,K){I=I&&K.ownerDocument;return I});return I}function r(K,J,H){if(!a(H)){return false}var I=t.inArray(K,l)>-1;if((K=="width"||K=="height"||K=="opacity")&&(parseFloat(J)===parseFloat(H.css(K)))){I=false}return I}t.extend({toggle3DByDefault:function(){return h=!h},toggleDisabledByDefault:function(){return x=!x},setDisabledByDefault:function(H){return x=H}});t.fn.translation=function(){if(!this[0]){return null}var L=this[0],I=window.getComputedStyle(L,null),M={x:0,y:0};if(I){for(var K=p.length-1;K>=0;K--){var J=I.getPropertyValue(p[K]+"transform");if(J&&(/matrix/i).test(J)){var H=J.replace(/^matrix\(/i,"").split(/, |\)$/g);M={x:parseInt(H[4],10),y:parseInt(H[5],10)};break}}}return M};t.fn.animate=function(H,I,N,P){H=H||{};var J=!(typeof H.bottom!=="undefined"||typeof H.right!=="undefined"),O=t.speed(I,N,P),M=0,L=function(){M--;if(M===0){if(typeof O.complete==="function"){O.complete.apply(this,arguments)}}},K=(typeof H.avoidCSSTransitions!=="undefined")?H.avoidCSSTransitions:x;if(K===true||!B||e(H)||q(H)||O.duration<=0||O.step){return v.apply(this,arguments)}return this[O.queue===true?"queue":"each"](function(){var aa=t(this),R=t.extend({},O),W=function(ag){var af=aa.data(o)||{original:{}},ae={};if(ag.eventPhase!=2){return}if(H.leaveTransforms!==true){for(var ad=p.length-1;ad>=0;ad--){ae[p[ad]+"transform"]=""}if(J&&typeof af.meta!=="undefined"){for(var ac=0,ab;(ab=u[ac]);++ac){ae[ab]=af.meta[ab+"_o"]+g;t(this).css(ab,ae[ab])}}}aa.unbind(b).css(af.original).css(ae).data(o,null);if(H.opacity==="hide"){aa.css({display:"none",opacity:""})}L.call(this)},T={bounce:d+"0.0, 0.35, .5, 1.3"+C,linear:"linear",swing:"ease-in-out",easeInQuad:d+"0.550, 0.085, 0.680, 0.530"+C,easeInCubic:d+"0.550, 0.055, 0.675, 0.190"+C,easeInQuart:d+"0.895, 0.030, 0.685, 0.220"+C,easeInQuint:d+"0.755, 0.050, 0.855, 0.060"+C,easeInSine:d+"0.470, 0.000, 0.745, 0.715"+C,easeInExpo:d+"0.950, 0.050, 0.795, 0.035"+C,easeInCirc:d+"0.600, 0.040, 0.980, 0.335"+C,easeInBack:d+"0.600, -0.280, 0.735, 0.045"+C,easeOutQuad:d+"0.250, 0.460, 0.450, 0.940"+C,easeOutCubic:d+"0.215, 0.610, 0.355, 1.000"+C,easeOutQuart:d+"0.165, 0.840, 0.440, 1.000"+C,easeOutQuint:d+"0.230, 1.000, 0.320, 1.000"+C,easeOutSine:d+"0.390, 0.575, 0.565, 1.000"+C,easeOutExpo:d+"0.190, 1.000, 0.220, 1.000"+C,easeOutCirc:d+"0.075, 0.820, 0.165, 1.000"+C,easeOutBack:d+"0.175, 0.885, 0.320, 1.275"+C,easeInOutQuad:d+"0.455, 0.030, 0.515, 0.955"+C,easeInOutCubic:d+"0.645, 0.045, 0.355, 1.000"+C,easeInOutQuart:d+"0.770, 0.000, 0.175, 1.000"+C,easeInOutQuint:d+"0.860, 0.000, 0.070, 1.000"+C,easeInOutSine:d+"0.445, 0.050, 0.550, 0.950"+C,easeInOutExpo:d+"1.000, 0.000, 0.000, 1.000"+C,easeInOutCirc:d+"0.785, 0.135, 0.150, 0.860"+C,easeInOutBack:d+"0.680, -0.550, 0.265, 1.550"+C},V={},U=T[R.easing||"swing"]?T[R.easing||"swing"]:R.easing||"swing";for(var Q in H){if(t.inArray(Q,y)===-1){var X=t.inArray(Q,u)>-1,Z=k(aa,H[Q],Q,(X&&H.avoidTransforms!==true));if(r(Q,Z,aa)){n(aa,Q,R.duration,U,Z,X&&H.avoidTransforms!==true,J,H.useTranslate3d)}else{V[Q]=H[Q]}}}aa.unbind(b);var S=aa.data(o);if(S&&!e(S)&&!e(S.secondary)){M++;aa.css(S.properties);var Y=S.secondary;setTimeout(function(){aa.bind(b,W).css(Y)})}else{R.queue=false}if(!e(V)){M++;v.apply(aa,[V,{duration:R.duration,easing:t.easing[R.easing]?R.easing:(t.easing.swing?"swing":"linear"),complete:L,queue:R.queue}])}return true})};t.fn.animate.defaults={};t.fn.stop=function(J,H,I){if(!B){return s.apply(this,[J,H])}if(J){this.queue([])}this.each(function(){var M=t(this),P=M.data(o);if(P&&!e(P)){var N,O={};if(H){O=P.secondary;if(!I&&typeof P.meta.left_o!==undefined||typeof P.meta.top_o!==undefined){O.left=typeof P.meta.left_o!==undefined?P.meta.left_o:"auto";O.top=typeof P.meta.top_o!==undefined?P.meta.top_o:"auto";for(N=p.length-1;N>=0;N--){O[p[N]+"transform"]=""}}}else{if(!e(P.secondary)){var L=window.getComputedStyle(M[0],null);if(L){for(var Q in P.secondary){if(P.secondary.hasOwnProperty(Q)){Q=Q.replace(D,"-$1").toLowerCase();O[Q]=L.getPropertyValue(Q);if(!I&&(/matrix/i).test(O[Q])){var K=O[Q].replace(/^matrix\(/i,"").split(/, |\)$/g);O.left=(parseFloat(K[4])+parseFloat(M.css("left"))+g)||"auto";O.top=(parseFloat(K[5])+parseFloat(M.css("top"))+g)||"auto";for(N=p.length-1;N>=0;N--){O[p[N]+"transform"]=""}}}}}}}M.unbind(b);M.css(P.original).css(O).data(o,null)}else{s.apply(M,[J,H])}});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);
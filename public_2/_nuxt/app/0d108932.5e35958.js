(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{531:function(e,n){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var r=e[n];"object"!=typeof r||Object.isFrozen(r)||t(r)})),e}var r=t,o=t;r.default=o;class l{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const h=e=>!!e.kind;class f{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(text){this.buffer+=c(text)}openNode(e){if(!h(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){h(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class m{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{m._collapse(e)}))}}class x extends m{constructor(e){super(),this.options=e}addKeyword(text,e){""!==text&&(this.openNode(e),this.addText(text),this.closeNode())}addText(text){""!==text&&this.add(text)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new f(this,this.options).value()}finalize(){return!0}}function source(e){return e?"string"==typeof e?e:e.source:null}const E="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w={begin:"\\\\[\\s\\S]",relevance:0},v={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[w]},N={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[w]},R={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},y=function(e,n,t={}){const r=d({className:"comment",begin:e,end:n,contains:[]},t);return r.contains.push(R),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},_=y("//","$"),k=y("/\\*","\\*/"),M=y("#","$"),O={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},A={className:"number",begin:E,relevance:0},L={className:"number",begin:"\\b(0b[01]+)",relevance:0},B={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},I={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[w,{begin:/\[/,end:/\]/,relevance:0,contains:[w]}]}]},T={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},S={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},j={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var P=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:E,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>source(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),d({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:w,APOS_STRING_MODE:v,QUOTE_STRING_MODE:N,PHRASAL_WORDS_MODE:R,COMMENT:y,C_LINE_COMMENT_MODE:_,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:M,NUMBER_MODE:O,C_NUMBER_MODE:A,BINARY_NUMBER_MODE:L,CSS_NUMBER_MODE:B,REGEXP_MODE:I,TITLE_MODE:T,UNDERSCORE_TITLE_MODE:S,METHOD_GUARD:j,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function D(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function C(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=D,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords)}function H(e,n){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map(e=>source(e)).join("|")+")"}(...e.illegal))}function $(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function z(e,n){void 0===e.relevance&&(e.relevance=1)}const U=["of","and","for","in","not","or","if","then","parent","list","value"];function K(e,n){return n?Number(n):function(e){return U.includes(e.toLowerCase())}(e)?0:1}function G(e,{plugins:n}){function t(n,t){return new RegExp(source(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=t(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let r=0,o="";for(let i=0;i<e.length;i++){r+=1;const l=r;let c=source(e[i]);for(i>0&&(o+=n),o+="(";c.length>0;){const e=t.exec(c);if(null==e){o+=c;break}o+=c.substring(0,e.index),c=c.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+l):(o+=e[0],"("===e[0]&&r++)}o+=")"}return o}(e),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const e=this.matcherRe.exec(s);if(!e)return null;const i=e.findIndex((e,i)=>i>0&&void 0!==e),n=this.matchIndexes[i];return e.splice(0,i),Object.assign(e,n)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new r;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(s){const e=this.getMatcher(this.regexIndex);e.lastIndex=this.lastIndex;let n=e.exec(s);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const e=this.getMatcher(0);e.lastIndex=this.lastIndex+1,n=e.exec(s)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=d(e.classNameAliases||{}),function n(r,l){const c=r;if(r.compiled)return c;[$].forEach(e=>e(r,l)),e.compilerExtensions.forEach(e=>e(r,l)),r.__beforeBegin=null,[C,H,z].forEach(e=>e(r,l)),r.compiled=!0;let h=null;if("object"==typeof r.keywords&&(h=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=function(e,n){const t={};return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){r(n,e[n])})),t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){const r=n.split("|");t[r[0]]=[e,K(r[0],r[1])]}))}}(r.keywords,e.case_insensitive)),r.lexemes&&h)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return h=h||r.lexemes||/\w+/,c.keywordPatternRe=t(h,!0),l&&(r.begin||(r.begin=/\B|\b/),c.beginRe=t(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(c.endRe=t(r.end)),c.terminatorEnd=source(r.end)||"",r.endsWithParent&&l.terminatorEnd&&(c.terminatorEnd+=(r.end?"|":"")+l.terminatorEnd)),r.illegal&&(c.illegalRe=t(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return d(e,{variants:null},n)})));if(e.cachedVariants)return e.cachedVariants;if(function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e))return d(e,{starts:e.starts?d(e.starts):null});if(Object.isFrozen(e))return d(e);return e}("self"===e?r:e)}))),r.contains.forEach((function(e){n(e,c)})),r.starts&&n(r.starts,l),c.matcher=function(e){const n=new o;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(c),c}(e)}function V(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,c(this.code);let n={};return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const W={"after:highlightBlock":({block:e,result:n,text:text})=>{const t=Z(e);if(!t.length)return;const r=document.createElement("div");r.innerHTML=n.value,n.value=function(e,n,t){let r=0,o="";const l=[];function d(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function h(e){o+="<"+X(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+c(e.value)+'"'})).join("")+">"}function f(e){o+="</"+X(e)+">"}function m(e){("start"===e.event?h:f)(e.node)}for(;e.length||n.length;){let n=d();if(o+=c(t.substring(r,n[0].offset)),r=n[0].offset,n===e){l.reverse().forEach(f);do{m(n.splice(0,1)[0]),n=d()}while(n===e&&n.length&&n[0].offset===r);l.reverse().forEach(h)}else"start"===n[0].event?l.push(n[0].node):l.pop(),m(n.splice(0,1)[0])}return o+c(t.substr(r))}(t,Z(r),text)}};function X(e){return e.nodeName.toLowerCase()}function Z(e){const n=[];return function e(t,r){for(let o=t.firstChild;o;o=o.nextSibling)3===o.nodeType?r+=o.nodeValue.length:1===o.nodeType&&(n.push({event:"start",offset:r,node:o}),r=e(o,r),X(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:o}));return r}(e,0),n}const F=e=>{console.error(e)},J=(e,...n)=>{console.log("WARN: "+e,...n)},Y=(e,n)=>{console.log(`Deprecated as of ${e}. ${n}`)},Q=c,ee=d,ne=Symbol("nomatch");var te=function(e){const n=Object.create(null),t=Object.create(null),o=[];let c=!0;const d=/(^(<[^>]+>|\t|)+|\n)/gm,h="Could not find the language '{}', did you forget to load/include a language module?",f={disableAutodetect:!0,name:"Plain text",contains:[]};let m={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:x};function E(e){return m.noHighlightRe.test(e)}function w(e,code,n,t){const r={code:code,language:e};B("before:highlight",r);const o=r.result?r.result:v(r.language,r.code,n,t);return o.code=r.code,B("after:highlight",o),o}function v(e,code,t,r){const d=code;function f(e,n){const t=M.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function x(){null!=B.subLanguage?function(){if(""===S)return;let e=null;if("string"==typeof B.subLanguage){if(!n[B.subLanguage])return void T.addText(S);e=v(B.subLanguage,S,!0,I[B.subLanguage]),I[B.subLanguage]=e.top}else e=N(S,B.subLanguage.length?B.subLanguage:null);B.relevance>0&&(j+=e.relevance),T.addSublanguage(e.emitter,e.language)}():function(){if(!B.keywords)return void T.addText(S);let e=0;B.keywordPatternRe.lastIndex=0;let n=B.keywordPatternRe.exec(S),t="";for(;n;){t+=S.substring(e,n.index);const data=f(B,n);if(data){const[e,r]=data;T.addText(t),t="",j+=r;const o=M.classNameAliases[e]||e;T.addKeyword(n[0],o)}else t+=n[0];e=B.keywordPatternRe.lastIndex,n=B.keywordPatternRe.exec(S)}t+=S.substr(e),T.addText(t)}(),S=""}function E(e){return e.className&&T.openNode(M.classNameAliases[e.className]||e.className),B=Object.create(e,{parent:{value:B}}),B}function w(e){return 0===B.matcher.regexIndex?(S+=e[0],1):(C=!0,0)}function R(e){const n=e[0],t=e.rule,r=new l(t),o=[t.__beforeBegin,t["on:begin"]];for(const t of o)if(t&&(t(e,r),r.ignore))return w(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?S+=n:(t.excludeBegin&&(S+=n),x(),t.returnBegin||t.excludeBegin||(S=n)),E(t),t.returnBegin?0:n.length}function y(e){const n=e[0],t=d.substr(e.index),r=function e(n,t,r){let o=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(n.endRe,r);if(o){if(n["on:end"]){const e=new l(n);n["on:end"](t,e),e.ignore&&(o=!1)}if(o){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,r)}(B,e,t);if(!r)return ne;const o=B;o.skip?S+=n:(o.returnEnd||o.excludeEnd||(S+=n),x(),o.excludeEnd&&(S=n));do{B.className&&T.closeNode(),B.skip||B.subLanguage||(j+=B.relevance),B=B.parent}while(B!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),E(r.starts)),o.returnEnd?0:n.length}let _={};function k(n,r){const o=r&&r[0];if(S+=n,null==o)return x(),0;if("begin"===_.type&&"end"===r.type&&_.index===r.index&&""===o){if(S+=d.slice(r.index,r.index+1),!c){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=_.rule,n}return 1}if(_=r,"begin"===r.type)return R(r);if("illegal"===r.type&&!t){const e=new Error('Illegal lexeme "'+o+'" for mode "'+(B.className||"<unnamed>")+'"');throw e.mode=B,e}if("end"===r.type){const e=y(r);if(e!==ne)return e}if("illegal"===r.type&&""===o)return 1;if(D>1e5&&D>3*r.index){throw new Error("potential infinite loop, way more iterations than matches")}return S+=o,o.length}const M=O(e);if(!M)throw F(h.replace("{}",e)),new Error('Unknown language: "'+e+'"');const A=G(M,{plugins:o});let L="",B=r||A;const I={},T=new m.__emitter(m);!function(){const e=[];for(let n=B;n!==M;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>T.openNode(e))}();let S="",j=0,P=0,D=0,C=!1;try{for(B.matcher.considerAll();;){D++,C?C=!1:B.matcher.considerAll(),B.matcher.lastIndex=P;const e=B.matcher.exec(d);if(!e)break;const n=k(d.substring(P,e.index),e);P=e.index+n}return k(d.substr(P)),T.closeAllNodes(),T.finalize(),L=T.toHTML(),{relevance:j,value:L,language:e,illegal:!1,emitter:T,top:B}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:d.slice(P-100,P+100),mode:n.mode},sofar:L,relevance:0,value:Q(d),emitter:T};if(c)return{illegal:!1,relevance:0,value:Q(d),emitter:T,language:e,top:B,errorRaised:n};throw n}}function N(code,e){e=e||m.languages||Object.keys(n);const t=function(code){const e={relevance:0,emitter:new m.__emitter(m),value:Q(code),illegal:!1,top:f};return e.emitter.addText(code),e}(code),r=e.filter(O).filter(L).map(e=>v(e,code,!1));r.unshift(t);const o=r.sort((a,b)=>{if(a.relevance!==b.relevance)return b.relevance-a.relevance;if(a.language&&b.language){if(O(a.language).supersetOf===b.language)return 1;if(O(b.language).supersetOf===a.language)return-1}return 0}),[l,c]=o,d=l;return d.second_best=c,d}const R={"before:highlightBlock":({block:e})=>{m.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightBlock":({result:e})=>{m.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},y=/^(<[^>]+>|\t)+/gm,_={"after:highlightBlock":({result:e})=>{m.tabReplace&&(e.value=e.value.replace(y,e=>e.replace(/\t/g,m.tabReplace)))}};function k(element){let e=null;const n=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=m.languageDetectRe.exec(n);if(t){const n=O(t[1]);return n||(J(h.replace("{}",t[1])),J("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>E(e)||O(e))}(element);if(E(n))return;B("before:highlightBlock",{block:element,language:n}),e=element;const text=e.textContent,r=n?w(n,text,!0):N(text);B("after:highlightBlock",{block:element,result:r,text:text}),element.innerHTML=r.value,function(element,e,n){const r=e?t[e]:n;element.classList.add("hljs"),r&&element.classList.add(r)}(element,n,r.language),element.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(element.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const M=()=>{if(M.called)return;M.called=!0;document.querySelectorAll("pre code").forEach(k)};function O(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function A(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{t[e]=n})}function L(e){const n=O(e);return n&&!n.disableAutodetect}function B(e,n){const t=e;o.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:w,highlightAuto:N,fixMarkup:function(e){return Y("10.2.0","fixMarkup will be removed entirely in v11.0"),Y("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),html=e,m.tabReplace||m.useBR?html.replace(d,e=>"\n"===e?m.useBR?"<br>":e:m.tabReplace?e.replace(/\t/g,m.tabReplace):e):html;var html},highlightBlock:k,configure:function(e){e.useBR&&(Y("10.3.0","'useBR' will be removed entirely in v11.0"),Y("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),m=ee(m,e)},initHighlighting:M,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",M,!1)},registerLanguage:function(t,r){let o=null;try{o=r(e)}catch(e){if(F("Language definition for '{}' could not be registered.".replace("{}",t)),!c)throw e;F(e),o=f}o.name||(o.name=t),n[t]=o,o.rawDefinition=r.bind(null,e),o.aliases&&A(o.aliases,{languageName:t})},listLanguages:function(){return Object.keys(n)},getLanguage:O,registerAliases:A,requireLanguage:function(e){Y("10.4.0","requireLanguage will be removed entirely in v11."),Y("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=O(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:L,inherit:ee,addPlugin:function(e){o.push(e)},vuePlugin:V(e).VuePlugin}),e.debugMode=function(){c=!1},e.safeMode=function(){c=!0},e.versionString="10.5.0";for(const e in P)"object"==typeof P[e]&&r(P[e]);return Object.assign(e,P),e.addPlugin(R),e.addPlugin(W),e.addPlugin(_),e}({});e.exports=te}}]);
import{x as ue,s as D,h as ce,e as fe,o as he}from"./vue.esm-bundler-BeytHvJU.js";import{c as U}from"./_commonjsHelpers-C4iS2aBk.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";function I(){return I=Object.assign||function(d){for(var e=1;e<arguments.length;e++){var u=arguments[e];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(d[c]=u[c])}return d},I.apply(this,arguments)}var ge=13,pe=9,ve=8,me=89,M=90,ye=77,J=57,Q=219,X=222,ee=192,be=27,te=100,xe=3e3,Fe=typeof window<"u"&&navigator&&/Win/i.test(navigator.platform),Z=typeof window<"u"&&navigator&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),Ee=ue({props:{lineNumbers:{type:Boolean,default:!1},autoStyleLineNumbers:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},modelValue:{type:String,default:""},highlight:{type:Function,required:!0},tabSize:{type:Number,default:2},insertSpaces:{type:Boolean,default:!0},ignoreTabKey:{type:Boolean,default:!1},placeholder:{type:String,default:""}},data:function(){return{capture:!0,history:{stack:[],offset:-1},lineNumbersHeight:"20px",codeData:""}},watch:{modelValue:{immediate:!0,handler:function(e){e?this.codeData=e:this.codeData=""}},content:{immediate:!0,handler:function(){var e=this;this.lineNumbers&&this.$nextTick(function(){e.setLineNumbersHeight()})}},lineNumbers:function(){var e=this;this.$nextTick(function(){e.styleLineNumbers(),e.setLineNumbersHeight()})}},computed:{isEmpty:function(){return this.codeData.length===0},content:function(){var e=this.highlight(this.codeData)+"<br />";return e},lineNumbersCount:function(){var e=this.codeData.split(/\r\n|\n/).length;return e}},mounted:function(){this._recordCurrentState(),this.styleLineNumbers()},methods:{setLineNumbersHeight:function(){this.lineNumbersHeight=getComputedStyle(this.$refs.pre).height},styleLineNumbers:function(){if(!(!this.lineNumbers||!this.autoStyleLineNumbers)){var e=this.$refs.pre,u=this.$el.querySelector(".prism-editor__line-numbers"),c=window.getComputedStyle(e);this.$nextTick(function(){var v="border-top-left-radius",m="border-bottom-left-radius";if(u){u.style[v]=c[v],u.style[m]=c[m],e.style[v]="0",e.style[m]="0";var h=["background-color","margin-top","padding-top","font-family","font-size","line-height"];h.forEach(function(a){u.style[a]=c[a]}),u.style["margin-bottom"]="-"+c["padding-top"]}})}},_recordCurrentState:function(){var e=this.$refs.textarea;if(e){var u=e.value,c=e.selectionStart,v=e.selectionEnd;this._recordChange({value:u,selectionStart:c,selectionEnd:v})}},_getLines:function(e,u){return e.substring(0,u).split(`
`)},_applyEdits:function(e){var u=this.$refs.textarea,c=this.history.stack[this.history.offset];c&&u&&(this.history.stack[this.history.offset]=I({},c,{selectionStart:u.selectionStart,selectionEnd:u.selectionEnd})),this._recordChange(e),this._updateInput(e)},_recordChange:function(e,u){u===void 0&&(u=!1);var c=this.history,v=c.stack,m=c.offset;if(v.length&&m>-1){this.history.stack=v.slice(0,m+1);var h=this.history.stack.length;if(h>te){var a=h-te;this.history.stack=v.slice(a,h),this.history.offset=Math.max(this.history.offset-a,0)}}var f=Date.now();if(u){var y=this.history.stack[this.history.offset];if(y&&f-y.timestamp<xe){var _,A,k=/[^a-z0-9]([a-z0-9]+)$/i,C=(_=this._getLines(y.value,y.selectionStart).pop())===null||_===void 0?void 0:_.match(k),L=(A=this._getLines(e.value,e.selectionStart).pop())===null||A===void 0?void 0:A.match(k);if(C&&L&&L[1].startsWith(C[1])){this.history.stack[this.history.offset]=I({},e,{timestamp:f});return}}}this.history.stack.push(I({},e,{timestamp:f})),this.history.offset++},_updateInput:function(e){var u=this.$refs.textarea;u&&(u.value=e.value,u.selectionStart=e.selectionStart,u.selectionEnd=e.selectionEnd,this.$emit("update:modelValue",e.value))},handleChange:function(e){var u=e.target,c=u.value,v=u.selectionStart,m=u.selectionEnd;this._recordChange({value:c,selectionStart:v,selectionEnd:m},!0),this.$emit("update:modelValue",c)},_undoEdit:function(){var e=this.history,u=e.stack,c=e.offset,v=u[c-1];v&&(this._updateInput(v),this.history.offset=Math.max(c-1,0))},_redoEdit:function(){var e=this.history,u=e.stack,c=e.offset,v=u[c+1];v&&(this._updateInput(v),this.history.offset=Math.min(c+1,u.length-1))},handleKeyDown:function(e){var u=this.tabSize,c=this.insertSpaces,v=this.ignoreTabKey;if(this.$emit("keydown",e),!e.defaultPrevented){e.keyCode===be&&(e.target.blur(),this.$emit("blur",e));var m=e.target,h=m.value,a=m.selectionStart,f=m.selectionEnd,y=(c?" ":"	").repeat(u);if(e.keyCode===pe&&!v&&this.capture)if(e.preventDefault(),e.shiftKey){var _=this._getLines(h,a),A=_.length-1,k=this._getLines(h,f).length-1,C=h.split(`
`).map(function(F,$){return $>=A&&$<=k&&F.startsWith(y)?F.substring(y.length):F}).join(`
`);if(h!==C){var L=_[A];this._applyEdits({value:C,selectionStart:L.startsWith(y)?a-y.length:a,selectionEnd:f-(h.length-C.length)})}}else if(a!==f){var S=this._getLines(h,a),K=S.length-1,z=this._getLines(h,f).length-1,r=S[K];this._applyEdits({value:h.split(`
`).map(function(F,$){return $>=K&&$<=z?y+F:F}).join(`
`),selectionStart:/\S/.test(r)?a+y.length:a,selectionEnd:f+y.length*(z-K+1)})}else{var t=a+y.length;this._applyEdits({value:h.substring(0,a)+y+h.substring(f),selectionStart:t,selectionEnd:t})}else if(e.keyCode===ve){var n=a!==f,i=h.substring(0,a);if(i.endsWith(y)&&!n){e.preventDefault();var s=a-y.length;this._applyEdits({value:h.substring(0,a-y.length)+h.substring(f),selectionStart:s,selectionEnd:s})}}else if(e.keyCode===ge){if(a===f){var l=this._getLines(h,a).pop(),g=l==null?void 0:l.match(/^\s+/);if(g&&g[0]){e.preventDefault();var o=`
`+g[0],b=a+o.length;this._applyEdits({value:h.substring(0,a)+o+h.substring(f),selectionStart:b,selectionEnd:b})}}}else if(e.keyCode===J||e.keyCode===Q||e.keyCode===X||e.keyCode===ee){var p;e.keyCode===J&&e.shiftKey?p=["(",")"]:e.keyCode===Q?e.shiftKey?p=["{","}"]:p=["[","]"]:e.keyCode===X?e.shiftKey?p=['"','"']:p=["'","'"]:e.keyCode===ee&&!e.shiftKey&&(p=["`","`"]),a!==f&&p&&(e.preventDefault(),this._applyEdits({value:h.substring(0,a)+p[0]+h.substring(a,f)+p[1]+h.substring(f),selectionStart:a,selectionEnd:f+2}))}else(Z?e.metaKey&&e.keyCode===M:e.ctrlKey&&e.keyCode===M)&&!e.shiftKey&&!e.altKey?(e.preventDefault(),this._undoEdit()):(Z?e.metaKey&&e.keyCode===M&&e.shiftKey:Fe?e.ctrlKey&&e.keyCode===me:e.ctrlKey&&e.keyCode===M&&e.shiftKey)&&!e.altKey?(e.preventDefault(),this._redoEdit()):e.keyCode===ye&&e.ctrlKey&&(!Z||e.shiftKey)&&(e.preventDefault(),this.capture=!this.capture)}}},render:function(){var e=this,u=D("div",{class:"prism-editor__line-width-calc",style:"height: 0px; visibility: hidden; pointer-events: none;"},"999"),c=D("div",{class:"prism-editor__line-numbers",style:{"min-height":this.lineNumbersHeight},"aria-hidden":"true"},[u,Array.from(Array(this.lineNumbersCount).keys()).map(function(a,f){return D("div",{class:"prism-editor__line-number token comment"},""+ ++f)})]),v=D("textarea",{ref:"textarea",onInput:this.handleChange,onKeydown:this.handleKeyDown,onClick:function(f){e.$emit("click",f)},onKeyup:function(f){e.$emit("keyup",f)},onFocus:function(f){e.$emit("focus",f)},onBlur:function(f){e.$emit("blur",f)},class:{"prism-editor__textarea":!0,"prism-editor__textarea--empty":this.isEmpty},spellCheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off","data-gramm":"false",placeholder:this.placeholder,"data-testid":"textarea",readonly:this.readonly,value:this.codeData}),m=D("pre",{ref:"pre",class:"prism-editor__editor","data-testid":"preview",innerHTML:this.content}),h=D("div",{class:"prism-editor__container"},[v,m]);return D("div",{class:"prism-editor-wrapper"},[this.lineNumbers&&c,h])}}),ae={exports:{}};(function(d){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var u=function(c){var v=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,m=0,h={},a={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function r(t){return t instanceof f?new f(t.type,r(t.content),t.alias):Array.isArray(t)?t.map(r):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(r){return Object.prototype.toString.call(r).slice(8,-1)},objId:function(r){return r.__id||Object.defineProperty(r,"__id",{value:++m}),r.__id},clone:function r(t,n){n=n||{};var i,s;switch(a.util.type(t)){case"Object":if(s=a.util.objId(t),n[s])return n[s];i={},n[s]=i;for(var l in t)t.hasOwnProperty(l)&&(i[l]=r(t[l],n));return i;case"Array":return s=a.util.objId(t),n[s]?n[s]:(i=[],n[s]=i,t.forEach(function(g,o){i[o]=r(g,n)}),i);default:return t}},getLanguage:function(r){for(;r;){var t=v.exec(r.className);if(t)return t[1].toLowerCase();r=r.parentElement}return"none"},setLanguage:function(r,t){r.className=r.className.replace(RegExp(v,"gi"),""),r.classList.add("language-"+t)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var r=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(r){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==r)return t[n]}return null}},isActive:function(r,t,n){for(var i="no-"+t;r;){var s=r.classList;if(s.contains(t))return!0;if(s.contains(i))return!1;r=r.parentElement}return!!n}},languages:{plain:h,plaintext:h,text:h,txt:h,extend:function(r,t){var n=a.util.clone(a.languages[r]);for(var i in t)n[i]=t[i];return n},insertBefore:function(r,t,n,i){i=i||a.languages;var s=i[r],l={};for(var g in s)if(s.hasOwnProperty(g)){if(g==t)for(var o in n)n.hasOwnProperty(o)&&(l[o]=n[o]);n.hasOwnProperty(g)||(l[g]=s[g])}var b=i[r];return i[r]=l,a.languages.DFS(a.languages,function(p,F){F===b&&p!=r&&(this[p]=l)}),l},DFS:function r(t,n,i,s){s=s||{};var l=a.util.objId;for(var g in t)if(t.hasOwnProperty(g)){n.call(t,g,t[g],i||g);var o=t[g],b=a.util.type(o);b==="Object"&&!s[l(o)]?(s[l(o)]=!0,r(o,n,null,s)):b==="Array"&&!s[l(o)]&&(s[l(o)]=!0,r(o,n,g,s))}}},plugins:{},highlightAll:function(r,t){a.highlightAllUnder(document,r,t)},highlightAllUnder:function(r,t,n){var i={callback:n,container:r,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),a.hooks.run("before-all-elements-highlight",i);for(var s=0,l;l=i.elements[s++];)a.highlightElement(l,t===!0,i.callback)},highlightElement:function(r,t,n){var i=a.util.getLanguage(r),s=a.languages[i];a.util.setLanguage(r,i);var l=r.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(l,i);var g=r.textContent,o={element:r,language:i,grammar:s,code:g};function b(F){o.highlightedCode=F,a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,a.hooks.run("after-highlight",o),a.hooks.run("complete",o),n&&n.call(o.element)}if(a.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){a.hooks.run("complete",o),n&&n.call(o.element);return}if(a.hooks.run("before-highlight",o),!o.grammar){b(a.util.encode(o.code));return}if(t&&c.Worker){var p=new Worker(a.filename);p.onmessage=function(F){b(F.data)},p.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else b(a.highlight(o.code,o.grammar,o.language))},highlight:function(r,t,n){var i={code:r,grammar:t,language:n};if(a.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),f.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(r,t){var n=t.rest;if(n){for(var i in n)t[i]=n[i];delete t.rest}var s=new A;return k(s,s.head,r),_(r,s,t,s.head,0),L(s)},hooks:{all:{},add:function(r,t){var n=a.hooks.all;n[r]=n[r]||[],n[r].push(t)},run:function(r,t){var n=a.hooks.all[r];if(!(!n||!n.length))for(var i=0,s;s=n[i++];)s(t)}},Token:f};c.Prism=a;function f(r,t,n,i){this.type=r,this.content=t,this.alias=n,this.length=(i||"").length|0}f.stringify=function r(t,n){if(typeof t=="string")return t;if(Array.isArray(t)){var i="";return t.forEach(function(b){i+=r(b,n)}),i}var s={type:t.type,content:r(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},l=t.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(s.classes,l):s.classes.push(l)),a.hooks.run("wrap",s);var g="";for(var o in s.attributes)g+=" "+o+'="'+(s.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+g+">"+s.content+"</"+s.tag+">"};function y(r,t,n,i){r.lastIndex=t;var s=r.exec(n);if(s&&i&&s[1]){var l=s[1].length;s.index+=l,s[0]=s[0].slice(l)}return s}function _(r,t,n,i,s,l){for(var g in n)if(!(!n.hasOwnProperty(g)||!n[g])){var o=n[g];o=Array.isArray(o)?o:[o];for(var b=0;b<o.length;++b){if(l&&l.cause==g+","+b)return;var p=o[b],F=p.inside,$=!!p.lookbehind,R=!!p.greedy,ie=p.alias;if(R&&!p.pattern.global){var se=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,se+"g")}for(var q=p.pattern||p,x=i.next,w=s;x!==t.tail&&!(l&&w>=l.reach);w+=x.value.length,x=x.next){var N=x.value;if(t.length>r.length)return;if(!(N instanceof f)){var T=1,E;if(R){if(E=y(q,w,r,$),!E||E.index>=r.length)break;var B=E.index,le=E.index+E[0].length,P=w;for(P+=x.value.length;B>=P;)x=x.next,P+=x.value.length;if(P-=x.value.length,w=P,x.value instanceof f)continue;for(var O=x;O!==t.tail&&(P<le||typeof O.value=="string");O=O.next)T++,P+=O.value.length;T--,N=r.slice(w,P),E.index-=w}else if(E=y(q,0,N,$),!E)continue;var B=E.index,H=E[0],W=N.slice(0,B),G=N.slice(B+H.length),Y=w+N.length;l&&Y>l.reach&&(l.reach=Y);var j=x.prev;W&&(j=k(t,j,W),w+=W.length),C(t,j,T);var oe=new f(g,F?a.tokenize(H,F):H,ie,H);if(x=k(t,j,oe),G&&k(t,x,G),T>1){var V={cause:g+","+b,reach:Y};_(r,t,n,x.prev,w,V),l&&V.reach>l.reach&&(l.reach=V.reach)}}}}}}function A(){var r={value:null,prev:null,next:null},t={value:null,prev:r,next:null};r.next=t,this.head=r,this.tail=t,this.length=0}function k(r,t,n){var i=t.next,s={value:n,prev:t,next:i};return t.next=s,i.prev=s,r.length++,s}function C(r,t,n){for(var i=t.next,s=0;s<n&&i!==r.tail;s++)i=i.next;t.next=i,i.prev=t,r.length-=s}function L(r){for(var t=[],n=r.head.next;n!==r.tail;)t.push(n.value),n=n.next;return t}if(!c.document)return c.addEventListener&&(a.disableWorkerMessageHandler||c.addEventListener("message",function(r){var t=JSON.parse(r.data),n=t.language,i=t.code,s=t.immediateClose;c.postMessage(a.highlight(i,a.languages[n],n)),s&&c.close()},!1)),a;var S=a.util.currentScript();S&&(a.filename=S.src,S.hasAttribute("data-manual")&&(a.manual=!0));function K(){a.manual||a.highlightAll()}if(!a.manual){var z=document.readyState;z==="loading"||z==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",K):window.requestAnimationFrame?window.requestAnimationFrame(K):window.setTimeout(K,16)}return a}(e);d.exports&&(d.exports=u),typeof U<"u"&&(U.Prism=u)})(ae);var re=ae.exports;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;const ne={name:"SmHtml",components:{PrismEditor:Ee},props:{modelValue:{type:String,default:""}},computed:{tmpl:{get(){return this.modelValue},set(d){this.$emit("update:modelValue",d)}}},methods:{highlighter(d){return re.highlight(d,re.languages.javascript)}}};function we(d,e,u,c,v,m){const h=fe("PrismEditor");return he(),ce(h,{class:"sm-html",modelValue:m.tmpl,"onUpdate:modelValue":e[0]||(e[0]=a=>m.tmpl=a),highlight:m.highlighter,"line-numbers":""},null,8,["modelValue","highlight"])}const Ce=de(ne,[["render",we]]);ne.__docgenInfo={displayName:"SmHtml",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],sourceFiles:["/Users/petr/project/zaymigo/spellbook/src/components/spell-item/sm-prism/sm-prism.vue"]};export{Ce as S};
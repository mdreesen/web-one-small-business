(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3726)}])},3726:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(5893),o=n(9008),a=n.n(o),i=n(5675),s=n.n(i),l=n(1502),c=n.n(l),u=n(1113),d=n(7123),f=n.n(d);function m(e){return(0,r.jsx)("div",{children:(0,r.jsx)(u.Parallax,{className:f().heroImage,bgImage:"/images/".concat(e.heroImage,".webp"),strength:180,children:(0,r.jsxs)("h1",{className:f().content,children:[(0,r.jsx)(s(),{className:f().secondaryImage,src:"/images/logo_inhanced_noBackground.webp",alt:"Mission Mountains handy work of bedroom",position:"relative",width:444,height:216}),"QUALITY-DRIVEN CONSTRUCTION.",(0,r.jsx)("br",{}),"CLIENT-TAILORED EXPERIENCES."]})})})}var h=n(9141),p=n.n(h),g=JSON.parse('{"reviews":[{"name":"Priska Geist","description":"Great, versatile Construction Company that will be doing a few tile showers and a shop build for me this next year. This last summer they poured my front patio. I wanted exposed aggregate and it turned out great. Really pleased with the customer service and it was nice having such a friendly, hardworking crew do the job. Look forward to working with them again."},{"name":"Jason Eckerman","description":"Matt and team were great from start to finish. We had water damage and they clearly communicated what needed to be done, how they would do it and what it would cost. They set a timeframe for when they could start and how long it would take and they more than exceeded expectations there. The quality of the work was great and we’re very pleased. He is professional and communicates well. He is also very honest and kind and we completely trust him."},{"name":"Laura Dickerson","description":"Matt Heidt is an excellent resource and knowledgeable craftsman. He is appreciated and respected in our business circle."}]}');function y(){let e=null==g?void 0:g.reviews.map((e,t)=>(0,r.jsx)("div",{className:p().card,children:(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:p().cardName,children:(0,r.jsx)("b",{children:null==e?void 0:e.name})}),(0,r.jsx)("i",{className:"fal fa-star"}),"                    "]}),(0,r.jsx)("p",{className:p().cardDescription,children:null==e?void 0:e.description})]})},"card-".concat(t)));return e}var b=n(4184),v=n.n(b),x=n(7294),w=n(861),j=n(6792);let _=x.forwardRef(({as:e,bsPrefix:t,variant:n,size:o,active:a,className:i,...s},l)=>{let c=(0,j.vE)(t,"btn"),[u,{tagName:d}]=(0,w.FT)({tagName:e,...s});return(0,r.jsx)(d,{...u,...s,ref:l,className:v()(i,c,a&&"active",n&&`${c}-${n}`,o&&`${c}-${o}`,s.href&&s.disabled&&"disabled")})});_.displayName="Button",_.defaultProps={variant:"primary",active:!1,disabled:!1};var N=n(5697),S=n.n(N);let I={type:S().string,tooltip:S().bool,as:S().elementType},O=x.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:o=!1,...a},i)=>(0,r.jsx)(e,{...a,ref:i,className:v()(t,`${n}-${o?"tooltip":"feedback"}`)}));O.displayName="Feedback",O.propTypes=I;let C=x.createContext({}),E=x.forwardRef(({id:e,bsPrefix:t,className:n,type:o="checkbox",isValid:a=!1,isInvalid:i=!1,as:s="input",...l},c)=>{let{controlId:u}=(0,x.useContext)(C);return t=(0,j.vE)(t,"form-check-input"),(0,r.jsx)(s,{...l,ref:c,type:o,id:e||u,className:v()(n,t,a&&"is-valid",i&&"is-invalid")})});E.displayName="FormCheckInput";let R=x.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...o},a)=>{let{controlId:i}=(0,x.useContext)(C);return e=(0,j.vE)(e,"form-check-label"),(0,r.jsx)("label",{...o,ref:a,htmlFor:n||i,className:v()(t,e)})});R.displayName="FormCheckLabel";let k=x.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:o=!1,reverse:a=!1,disabled:i=!1,isValid:s=!1,isInvalid:l=!1,feedbackTooltip:c=!1,feedback:u,feedbackType:d,className:f,style:m,title:h="",type:p="checkbox",label:g,children:y,as:b="input",...w},_)=>{t=(0,j.vE)(t,"form-check"),n=(0,j.vE)(n,"form-switch");let{controlId:N}=(0,x.useContext)(C),S=(0,x.useMemo)(()=>({controlId:e||N}),[N,e]),I=!y&&null!=g&&!1!==g||x.Children.toArray(y).some(e=>x.isValidElement(e)&&e.type===R),k=(0,r.jsx)(E,{...w,type:"switch"===p?"checkbox":p,ref:_,isValid:s,isInvalid:l,disabled:i,as:b});return(0,r.jsx)(C.Provider,{value:S,children:(0,r.jsx)("div",{style:m,className:v()(f,I&&t,o&&`${t}-inline`,a&&`${t}-reverse`,"switch"===p&&n),children:y||(0,r.jsxs)(r.Fragment,{children:[k,I&&(0,r.jsx)(R,{title:h,children:g}),u&&(0,r.jsx)(O,{type:d,tooltip:c,children:u})]})})})});k.displayName="FormCheck";var P=Object.assign(k,{Input:E,Label:R});n(2473);let M=x.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:o,id:a,className:i,isValid:s=!1,isInvalid:l=!1,plaintext:c,readOnly:u,as:d="input",...f},m)=>{let h;let{controlId:p}=(0,x.useContext)(C);return e=(0,j.vE)(e,"form-control"),h=c?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${n}`]:n},(0,r.jsx)(d,{...f,type:t,size:o,ref:m,readOnly:u,id:a||p,className:v()(i,h,s&&"is-valid",l&&"is-invalid","color"===t&&`${e}-color`)})});M.displayName="FormControl";var H=Object.assign(M,{Feedback:O}),T=(0,n(6611).Z)("form-floating");let L=x.forwardRef(({controlId:e,as:t="div",...n},o)=>{let a=(0,x.useMemo)(()=>({controlId:e}),[e]);return(0,r.jsx)(C.Provider,{value:a,children:(0,r.jsx)(t,{...n,ref:o})})});L.displayName="FormGroup";let D=x.forwardRef((e,t)=>{let[{className:n,...o},{as:a="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,j.vE)(t,"col");let o=(0,j.pi)(),a=(0,j.zG)(),i=[],s=[];return o.forEach(e=>{let n,o,l;let c=r[e];delete r[e],"object"==typeof c&&null!=c?{span:n,offset:o,order:l}=c:n=c;let u=e!==a?`-${e}`:"";n&&i.push(!0===n?`${t}${u}`:`${t}${u}-${n}`),null!=l&&s.push(`order${u}-${l}`),null!=o&&s.push(`offset${u}-${o}`)}),[{...r,className:v()(n,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,r.jsx)(a,{...o,ref:t,className:v()(n,!s.length&&i)})});D.displayName="Col";let B=x.forwardRef(({as:e="label",bsPrefix:t,column:n,visuallyHidden:o,className:a,htmlFor:i,...s},l)=>{let{controlId:c}=(0,x.useContext)(C);t=(0,j.vE)(t,"form-label");let u="col-form-label";"string"==typeof n&&(u=`${u} ${u}-${n}`);let d=v()(a,t,o&&"visually-hidden",n&&u);return(i=i||c,n)?(0,r.jsx)(D,{ref:l,as:"label",className:d,htmlFor:i,...s}):(0,r.jsx)(e,{ref:l,className:d,htmlFor:i,...s})});B.displayName="FormLabel",B.defaultProps={column:!1,visuallyHidden:!1};let F=x.forwardRef(({bsPrefix:e,className:t,id:n,...o},a)=>{let{controlId:i}=(0,x.useContext)(C);return e=(0,j.vE)(e,"form-range"),(0,r.jsx)("input",{...o,type:"range",ref:a,className:v()(t,e),id:n||i})});F.displayName="FormRange";let $=x.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:o,isValid:a=!1,isInvalid:i=!1,id:s,...l},c)=>{let{controlId:u}=(0,x.useContext)(C);return e=(0,j.vE)(e,"form-select"),(0,r.jsx)("select",{...l,size:n,ref:c,className:v()(o,e,t&&`${e}-${t}`,a&&"is-valid",i&&"is-invalid"),id:s||u})});$.displayName="FormSelect";let W=x.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:o,...a},i)=>(e=(0,j.vE)(e,"form-text"),(0,r.jsx)(n,{...a,ref:i,className:v()(t,e,o&&"text-muted")})));W.displayName="FormText";let z=x.forwardRef((e,t)=>(0,r.jsx)(P,{...e,ref:t,type:"switch"}));z.displayName="Switch";var U=Object.assign(z,{Input:P.Input,Label:P.Label});let V=x.forwardRef(({bsPrefix:e,className:t,children:n,controlId:o,label:a,...i},s)=>(e=(0,j.vE)(e,"form-floating"),(0,r.jsxs)(L,{ref:s,className:v()(t,e),controlId:o,...i,children:[n,(0,r.jsx)("label",{htmlFor:o,children:a})]})));V.displayName="FloatingLabel";let A={_ref:S().any,validated:S().bool,as:S().elementType},G=x.forwardRef(({className:e,validated:t,as:n="form",...o},a)=>(0,r.jsx)(n,{...o,ref:a,className:v()(e,t&&"was-validated")}));G.displayName="Form",G.propTypes=A;var J=Object.assign(G,{Group:L,Control:H,Floating:T,Check:P,Switch:U,Label:B,Text:W,Range:F,Select:$,FloatingLabel:V});function K(){return(0,r.jsxs)(J,{action:"https://formsubmit.co/?",method:"POST",children:[(0,r.jsxs)(J.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,r.jsx)(J.Label,{children:"Name"}),(0,r.jsx)(J.Control,{type:"name",placeholder:"Enter name"}),(0,r.jsx)(J.Text,{className:"text-muted",children:"First and last name"})]}),(0,r.jsxs)(J.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,r.jsx)(J.Label,{children:"Email address"}),(0,r.jsx)(J.Control,{type:"email",placeholder:"Enter email"})]}),(0,r.jsxs)(J.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[(0,r.jsx)(J.Label,{children:"Message"}),(0,r.jsx)(J.Control,{as:"textarea",rows:3})]}),(0,r.jsx)(_,{variant:"primary",type:"submit",children:"Submit"})]})}var Q=JSON.parse('{"description":"We\'re a small, local company, specializing in<br/>home repairs, kitchen & bath remodels, garage conversions and much more.<br/> 25 years experience.<br/> Through our ability to deliver strategic and creative<br/>project solutions, we create value, which in turn, help our clients achieve their goals.<br/>No job too big or too small."}');function X(){let e=(0,r.jsx)(m,{heroImage:"image_home"}),t=(0,r.jsxs)("section",{className:c().sectionTwo,children:[(0,r.jsx)("h2",{children:"EXPERIENCE MATTERS."}),(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)("div",{className:c().homeImage,children:(0,r.jsx)(s(),{className:c().secondaryImage,src:"/images/image-outdoor.webp",alt:"Mission Mountains handy work of bedroom",position:"relative",width:350,height:350})}),(0,r.jsx)("span",{className:c().text,dangerouslySetInnerHTML:{__html:null==Q?void 0:Q.description}})]})]}),n=(0,r.jsxs)("section",{className:c().sectionThree,children:[(0,r.jsx)("h2",{children:"THE LATEST REVIEWS"}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"See what our clients are saying about us"}),(0,r.jsx)("div",{className:c().containerCard,children:(0,r.jsx)(y,{})})]}),o=(0,r.jsxs)("section",{className:c().sectionFour,children:[(0,r.jsx)("h2",{children:"Contact Us"}),(0,r.jsxs)("div",{className:c().containerRow,children:[(0,r.jsxs)("div",{className:c().containerContent,children:[(0,r.jsx)("h3",{children:"QUESTIONS? WE HAVE ANSWERS."}),(0,r.jsx)("p",{children:"Location: Kalispell, MT 59901"}),(0,r.jsx)("p",{children:"Phone: (406) 345-6484"}),(0,r.jsx)("p",{children:"Email: mm.heidt@yahoo.com"})]}),(0,r.jsx)(K,{})]})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Mission Mountain Construction | Home"}),(0,r.jsx)("meta",{name:"description",content:"Mission Mountain Construction Homepage"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:c().main,children:[e,t,n,o]})]})}},9141:function(e){e.exports={card:"Card_card__QH1mK",container:"Card_container__rk8zg",cardName:"Card_cardName__TAaQK"}},7123:function(e){e.exports={heroImage:"Hero_heroImage__Ll8Gy",content:"Hero_content__w4JFR"}},1502:function(e){e.exports={sectionTwo:"Home_sectionTwo__li5d0",sectionThree:"Home_sectionThree__sPS75",sectionFour:"Home_sectionFour__Cinxg",container:"Home_container__bCOhY",containerCard:"Home_containerCard__k61Ph",containerRow:"Home_containerRow__ELCn_",containerContent:"Home_containerContent__6E_vR",homeImage:"Home_homeImage__2K49M",text:"Home_text__upzyl"}},9008:function(e,t,n){e.exports=n(3121)},1113:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(7294),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o,a=l(e);if(t){var i=l(this).constructor;o=Reflect.construct(a,arguments,i)}else o=a.apply(this,arguments);return(n=o)&&("object"===r(n)||"function"==typeof n)?n:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var u=c(n(0)),d=function(e){a(n,e);var t=s(n);function n(){return o(this,n),t.apply(this,arguments)}return n}(u.default.Component);t.Parallax=d;var f=function(e){a(n,e);var t=s(n);function n(){return o(this,n),t.apply(this,arguments)}return n}(u.default.Component);t.Background=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||o.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var o=e.getBoundingClientRect().top-n,a=e.getBoundingClientRect().bottom+n;return o<=t.getWindowHeight(r)&&a>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(4));t.Parallax=o.default;var a=r(n(7));t.Background=a.default},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=s(n(0)),c=n(1),u=n(5),d=n(2),f=s(n(6)),m={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(h,e);var t,n,s,c=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n,o=i(h);if(t){var a=i(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(e=n)&&("object"===r(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function h(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h),(t=c.call(this,e)).onWindowResize=function(){t.parentHeight=d.getNodeHeight(t.canUseDOM,t.parent),t.updatePosition()},t.onWindowLoad=function(){t.updatePosition()},t.onScroll=function(){if(t.canUseDOM){var e=Date.now();e-t.timestamp>=10&&d.isScrolledIntoView(t.node,100,t.canUseDOM)&&(window.requestAnimationFrame(t.updatePosition),t.timestamp=e)}},t.onContentMount=function(e){t.content=e},t.updatePosition=function(){if(t.content){var e=!1;t.contentHeight=t.content.getBoundingClientRect().height,t.contentWidth=t.node.getBoundingClientRect().width,t.img&&t.img.naturalWidth/t.img.naturalHeight<t.contentWidth/t.getImageHeight()&&(e=!0);var n=u.getRelativePosition(t.node,t.canUseDOM),r=!!t.img,o=t.bg&&t.state.splitChildren.bgChildren.length>0;r&&t.setImagePosition(n,e),o&&t.setBackgroundPosition(n),r||o||t.setState({percentage:n})}},t.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:m,bgStyle:Object.assign(Object.assign({},m),e.bgStyle),percentage:0,splitChildren:u.getSplitChildren(e)},t.canUseDOM=d.canUseDOM(),t.node=null,t.content=null,t.bgImageLoaded=!1,t.bgImageRef=void 0,t.parent=e.parent,t.parentHeight=d.getNodeHeight(t.canUseDOM,t.parent),t.timestamp=Date.now(),t.isDynamicBlur=u.getHasDynamicBlur(e.blur),t}return n=[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,o=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.parent,r=t.bgImage,o=t.bgImageSrcSet,a=t.bgImageSizes,i=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=d.getNodeHeight(this.canUseDOM,this.parent),i!==r&&this.loadImage(r,o,a)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,r=t.strength,o=Object.assign({},this.state.bgStyle);if(!n){var a="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");o.WebkitTransform=a,o.transform=a}this.setState({bgStyle:o,percentage:e})}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,o=n.strength,a=n.blur,i=t?"auto":"".concat(this.getImageHeight(),"px"),s=t?"".concat(this.contentWidth,"px"):"auto",l=Object.assign(Object.assign({},this.state.imgStyle),{height:i,width:s});if(!r){var c="translate3d(-50%, ".concat((o<0?o:0)-o*e,"px, 0)"),d="none";a&&(d="blur(".concat(u.getBlurValue(this.isDynamicBlur,a,e),"px)")),l.WebkitTransform=c,l.transform=c,l.WebkitFilter=d,l.filter=d}this.setState({imgStyle:l,percentage:e})}},{key:"getImageHeight",value:function(){var e=this.props.strength;return Math.floor(this.contentHeight+(e<0?2.5:1)*Math.abs(e))}},{key:"loadImage",value:function(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(o){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},function(){return r.updatePosition()}),r.props.onLoad&&r.props.onLoad(o)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style,o=t.bgClassName,a=t.contentClassName,i=t.bgImageAlt,s=t.renderLayer,c=t.bgImageStyle,u=t.lazy,d=this.state,m=d.bgImage,h=d.bgImageSrcSet,p=d.bgImageSizes,g=d.percentage,y=d.imgStyle,b=d.bgStyle,v=d.splitChildren;return l.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function(t){e.node=t}},m?l.default.createElement("img",{className:o,src:m,srcSet:h,sizes:p,ref:function(t){e.img=t},alt:i,style:Object.assign(Object.assign({},y),c),loading:u?"lazy":"eager"}):null,s?s(-(g-1)):null,v.bgChildren.length>0?l.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){e.bg=t},style:b},v.bgChildren):null,l.default.createElement(f.default,{onMount:this.onContentMount,className:a},v.children))}}],s=[{key:"getDerivedStateFromProps",value:function(e){return{splitChildren:u.getSplitChildren(e)}}}],n&&o(h.prototype,n),s&&o(h,s),h}(c.Parallax);h.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=h},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var o=n(0),a=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var r=e.getBoundingClientRect(),o=r.top,i=r.height,s=a.getNodeHeight(n),l=i>s?i:s;return t.getPercentage(0,l,Math.round(o>l?l:o))},t.getSplitChildren=function(e){var t=[],n=o.Children.toArray(e.children);return n.forEach(function(e,r){e.type&&e.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))}),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===r(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=function(e){var t=e.children,n=e.onMount,r=e.className;return o.default.createElement("div",{ref:function(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=s(n(0)),c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(c,e);var t,n,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n,o=i(c);if(t){var a=i(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(e=n)&&("object"===r(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function c(){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c),s.apply(this,arguments)}return o(c.prototype,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children;return l.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}]),n&&o(c,n),c}(n(1).Background);c.defaultProps={className:""},c.isParallaxBackground=!0,t.default=c}]))},2473:function(e){"use strict";e.exports=function(){}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
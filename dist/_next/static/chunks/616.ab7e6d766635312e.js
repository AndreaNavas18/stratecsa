(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{1616:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return U}});var o,r,i,l,c,u,a=t(7437),_=t(2265);let s=(0,_.createContext)(null),d=s.Provider;function f(){let e=(0,_.useContext)(s);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var p=t(7691);function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}let m=(0,_.forwardRef)(function({bounds:e,boundsOptions:n,center:t,children:o,className:r,id:i,placeholder:l,style:c,whenReady:u,zoom:a,...s},f){let[m]=(0,_.useState)({className:r,id:i,style:c}),[S,v]=(0,_.useState)(null);(0,_.useImperativeHandle)(f,()=>S?.map??null,[S]);let g=(0,_.useCallback)(o=>{if(null!==o&&null===S){let r=new p.Map(o,s);null!=t&&null!=a?r.setView(t,a):null!=e&&r.fitBounds(e,n),null!=u&&r.whenReady(u),v(Object.freeze({__version:1,map:r}))}},[]);(0,_.useEffect)(()=>()=>{S?.map.remove()},[S]);let b=S?_.createElement(d,{value:S},o):l??null;return _.createElement("div",h({},m,{ref:g}),b)});var S=t(4887);function v(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function g(e,n){return null==n?function(n,t){let o=(0,_.useRef)();return o.current||(o.current=e(n,t)),o}:function(t,o){let r=(0,_.useRef)();r.current||(r.current=e(t,o));let i=(0,_.useRef)(t),{instance:l}=r.current;return(0,_.useEffect)(function(){i.current!==t&&(n(l,t,i.current),i.current=t)},[l,t,o]),r}}function b(e,n){let t=(0,_.useRef)(n);(0,_.useEffect)(function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}function y(e,n){let t=(0,_.useRef)();(0,_.useEffect)(function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}},[e,n])}function I(e,n){let t=e.pane??n.pane;return t?{...e,pane:t}:e}function x(e){return function(n){var t;let o=f(),r=e(I(n,o),o);return b(o.map,n.attribution),y(r.current,n.eventHandlers),t=r.current,(0,_.useEffect)(function(){return(o.layerContainer??o.map).addLayer(t.instance),function(){o.layerContainer?.removeLayer(t.instance),o.map.removeLayer(t.instance)}},[o,t]),r}}let w=(o=x(g(function({url:e,...n},t){return v(new p.TileLayer(e,I(n,t)),t)},function(e,n,t){!function(e,n,t){let{opacity:o,zIndex:r}=n;null!=o&&o!==t.opacity&&e.setOpacity(o),null!=r&&r!==t.zIndex&&e.setZIndex(r)}(e,n,t);let{url:o}=n;null!=o&&o!==t.url&&e.setUrl(o)})),(0,_.forwardRef)(function(e,n){let{instance:t}=o(e).current;return(0,_.useImperativeHandle)(n,()=>t),null})),O=(r=x(g(function({position:e,...n},t){var o;let r=new p.Marker(e,n);return v(r,(o={overlayContainer:r},Object.freeze({...t,...o})))},function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),(0,_.forwardRef)(function(e,n){let{instance:t,context:o}=r(e).current;return(0,_.useImperativeHandle)(n,()=>t),null==e.children?null:_.createElement(d,{value:o},e.children)})),C=(i=function(e,n){return v(new p.Popup(e,n.overlayContainer),n)},l=function(e,n,{position:t},o){(0,_.useEffect)(function(){let{instance:r}=e;function i(e){e.popup===r&&(r.update(),o(!0))}function l(e){e.popup===r&&o(!1)}return n.map.on({popupopen:i,popupclose:l}),null==n.overlayContainer?(null!=t&&r.setLatLng(t),r.openOn(n.map)):n.overlayContainer.bindPopup(r),function(){n.map.off({popupopen:i,popupclose:l}),n.overlayContainer?.unbindPopup(),n.map.removeLayer(r)}},[e,n,o,t])},c=g(i),u=function(e,n){let t=f(),o=c(I(e,t),t);return b(t.map,e.attribution),y(o.current,e.eventHandlers),l(o.current,t,e,n),o},(0,_.forwardRef)(function(e,n){let[t,o]=(0,_.useState)(!1),{instance:r}=u(e,o).current;(0,_.useImperativeHandle)(n,()=>r),(0,_.useEffect)(function(){t&&r.update()},[r,t,e.children]);let i=r._contentNode;return i?(0,S.createPortal)(e.children,i):null}));function M(e,n){var t,o=p.DomUtil.create("div",e,document.body),r=function(e,n){for(var t,o=/url\(['"]?([^"']*?)['"]?\)/gi,r=[],i=o.exec(e);i;)r.push(n?(t=i[1]).substr(t.lastIndexOf("/")+1):i[1]),i=o.exec(e);return r}((t=z(o,"background-image"))&&"none"!==t?t:z(o,"cursor"),n),i=R(o,"width"),l=R(o,"height"),c=R(o,"margin-left"),u=R(o,"margin-top");return o.parentNode.removeChild(o),{Url:r[0],RetinaUrl:r[1],Size:[i,l],Anchor:[-c,-u]}}function k(e){var n=p.DomUtil.create("div",e,document.body),t=R(n,"margin-left"),o=R(n,"margin-top");return n.parentNode.removeChild(n),{Anchor:[t,o]}}function R(e,n){return parseInt(z(e,n),10)}function z(e,n){return p.DomUtil.getStyle(e,n)||p.DomUtil.getStyle(e,n.replace(/-(\w)/g,function(e,n){return n.toUpperCase()}))}t(966),p.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"}),p.Icon.Default.include({_needsInit:!0,_getIconUrl:function(e){var n=this.options.imagePath||p.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(n),n+p.Icon.prototype._getIconUrl.call(this,e)},_initializeOptions:function(e){this._setOptions("icon",M,e),this._setOptions("shadow",M,e),this._setOptions("popup",k),this._setOptions("tooltip",k),this._needsInit=!1},_setOptions:function(e,n,t){var o=this.options,r=n(o.classNamePrefix+e,t);for(var i in r)o[e+i]=o[e+i]||r[i]}}),t(7759);var E=t(3877),L=t.n(E);function U(){let e={lat:3.4586435,lng:-76.5365771};return(0,a.jsxs)(m,{center:e,zoom:15,style:{width:"100%",height:"300px"},scrollWheelZoom:!1,children:[(0,a.jsx)(w,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,a.jsx)(O,{position:e,children:(0,a.jsx)(C,{children:(0,a.jsxs)("div",{className:L().pop,children:[(0,a.jsx)("h2",{children:"Stratecsa"}),(0,a.jsx)("p",{children:"Av 4N # 26N - 18"})]})})})]})}},7759:function(){},966:function(){},3877:function(e){e.exports={section2M:"home_section2M__zASF7",divInfoS2M:"home_divInfoS2M__5xQRQ",titleS2M:"home_titleS2M___FDqC",descripS2M:"home_descripS2M__mb9Hc",divLogoS2M:"home_divLogoS2M__tCfEk",divIconS2M:"home_divIconS2M__k6o35",iconStraS2M:"home_iconStraS2M__ZP7qi",load:"home_load__I2DyK",active:"home_active__fpyzN",gifload:"home_gifload__m6kZe",sectionSlider:"home_sectionSlider__E8l0T",divSlider:"home_divSlider__dpF3e",imagenSlider:"home_imagenSlider__hRRJj",titleSlider:"home_titleSlider__Ye5id",descripSlider:"home_descripSlider__XenM1",buttonSlider:"home_buttonSlider__LyBQ_",btnsSlider:"home_btnsSlider__k7F78",btnBack:"home_btnBack__6_8FS",btnBef:"home_btnBef__Rofi5",backSli:"home_backSli__XMSrh",sigSli:"home_sigSli__LGl5W",section2:"home_section2__phPZJ",divInfoS2:"home_divInfoS2___3YH5",divLogoS2:"home_divLogoS2__trV1u",divIconS2:"home_divIconS2__h4Skm",iconStraS2:"home_iconStraS2___W3Ot",titleS2:"home_titleS2__k2JZQ",descripS2:"home_descripS2__xbhJy",logoS2:"home_logoS2__y605b",seccion3:"home_seccion3__Mdmrg",div1S3:"home_div1S3__5EDcw",titleS3:"home_titleS3__kw3Ov",div2S3:"home_div2S3__y9xQF",card1S3:"home_card1S3__4zYFi",card2S3:"home_card2S3__HTk8T",card3S3:"home_card3S3__9A3fS",card4S3:"home_card4S3__nZrqG",h2G:"home_h2G__yK4oz",pG:"home_pG__sxbR8",btnG:"home_btnG__x2I4b",btnG1:"home_btnG1__m0LYi",buttonS3:"home_buttonS3__cYQSG",seccion4:"home_seccion4__DnQXs",divS4:"home_divS4__MdEXq",imagenS4:"home_imagenS4__dFScC",titleS4:"home_titleS4__RZpdU",descripS4:"home_descripS4__f5vmC",botonesS4:"home_botonesS4__wUCWM",buttonS4:"home_buttonS4__lyMeF",iconoServicioS4:"home_iconoServicioS4__SIw9f",controlesSlider:"home_controlesSlider__reIcR",backS4:"home_backS4__ZGPhD",sigS4:"home_sigS4___xRWX",pop:"home_pop__6NMNI"}}}]);
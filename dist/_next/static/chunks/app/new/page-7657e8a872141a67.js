(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{4795:function(e,i,t){Promise.resolve().then(t.bind(t,4474))},4474:function(e,i,t){"use strict";t.r(i);var o=t(7437),n=t(2265),r=t(6741),c=t.n(r);i.default=function(){let[e,i]=(0,n.useState)(""),[t,r]=(0,n.useState)(""),[s,a]=(0,n.useState)(""),l=async i=>{i.preventDefault();try{(await fetch("http://localhost/phpBackend/index.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:e,edad:t,email:s})})).ok?console.log("Correo enviado correctamente"):console.error("Error al enviar correo")}catch(e){console.error("Error de red:",e)}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"".concat(c().container," ").concat(c().containerM),style:{backgroundImage:"url(/img/service.png)",backgroundPosition:"center",width:"auto",height:"auto"},children:(0,o.jsx)("h1",{className:"".concat(c().titleSR," ").concat(c().titleSRM),children:"Prueba"})}),(0,o.jsx)("div",{children:(0,o.jsxs)("form",{onSubmit:l,children:[(0,o.jsx)("label",{children:"Nombre:"}),(0,o.jsx)("input",{type:"text",name:"nombre",value:e,onChange:e=>i(e.target.value)}),(0,o.jsx)("label",{children:"Edad:"}),(0,o.jsx)("input",{type:"text",name:"edad",value:t,onChange:e=>r(e.target.value)}),(0,o.jsx)("label",{children:"Email:"}),(0,o.jsx)("input",{type:"email",name:"email",value:s,onChange:e=>a(e.target.value)}),(0,o.jsx)("button",{type:"submit",children:"Enviar"})]})})]})}},6741:function(e){e.exports={containerM:"servicios_containerM__MTGzP",titleSRM:"servicios_titleSRM__fy2OG",container:"servicios_container__wOp6u",titleSR:"servicios_titleSR__MmlLg",slideBtn:"servicios_slideBtn__bvQV7",botonesS4:"servicios_botonesS4__IFwXq",buttonS4:"servicios_buttonS4__MhUav",iconoServicioS4:"servicios_iconoServicioS4__BotLR",controlesSlider:"servicios_controlesSlider__IMfar",backS4:"servicios_backS4__XZFJ9",sigS4:"servicios_sigS4__iyk3z",containerServicios:"servicios_containerServicios__q16Tf",servicioSeleccionado:"servicios_servicioSeleccionado__Nl1Hc"}}},function(e){e.O(0,[146,971,23,744],function(){return e(e.s=4795)}),_N_E=e.O()}]);
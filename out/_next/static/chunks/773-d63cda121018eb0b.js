(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[773],{4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(5893),o=n(1120),i=n(5258),a=n(3832),l=n(8358),c=n(2318),s=n(282),d=n(7812),u=n(2516),p=(n(819),(0,o.Z)((function(e){return{chip:{backgroundColor:e.palette.gallery.main,color:e.palette.mountainMist.main,borderRadius:".25rem",padding:"none",marginLeft:15,marginBottom:10}}})),n(917)),h=n(9731),m=(0,o.Z)((function(e){return{logo:{flexGrow:1,marginTop:10},button:{textTransform:"none",color:e.palette.diamondBlack.main}}}));function x(){var e=m();return(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{color:"transparent",position:"static",elevation:0,children:(0,r.jsx)(a.Z,{maxWidth:"lg",children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{variant:"h6",className:e.logo,children:(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{src:"/assets/images/logo.png",alt:"logo",width:"40"})})}),(0,r.jsx)(s.Z,{color:"inherit",href:"/about/",className:e.button,children:(0,h.F)("about")}),(0,r.jsx)(d.Z,{href:"https://github.com/darkkD11/File_encrypti_decrypt",target:"_blank",rel:"noopener",children:(0,r.jsx)(u.Z,{})}),(0,r.jsx)(p.Z,{})]})})})})}},6278:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),o=n(7294),i=n(2318),a=n(1120),l=n(3832),c=n(9659);n(9731);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(9361);var d=(0,a.Z)((function(e){return{root:{marginTop:"auto"},footer:{textAlign:"center",color:e.palette.diamondBlack.main,padding:e.spacing(3,2)},topScrollPaper:{alignItems:"start",marginTop:"10vh"},topPaperScrollBody:{verticalAlign:"middle"},chip:s({marginTop:5,border:"none",borderRadius:8,textTransform:"none",boxShadow:"none",color:e.palette.diamondBlack.main,backgroundColor:e.palette.alto.light,"&:hover":{backgroundColor:e.palette.alto.main},"&:focus":{backgroundColor:e.palette.alto.main,boxShadow:"none"},transition:"background-color 0.2s ease-out"},"transition","color .01s"),monIcon:{color:e.palette.mountainMist.main},qr:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content",marginBottom:20}}}));function u(){var e=d(),t=(0,o.useState)(0),n=(t[0],t[1],(0,o.useState)("xmr")),a=(n[0],n[1]),s=(0,o.useState)(!1),u=(s[0],s[1],(0,o.useState)(!1)),p=(u[0],u[1]),h=[{type:"monero",alt:"xmr",addr:"84zQq4Xt7sq8cmGryuvWsXFMDvBvHjWjnMQXZWQQRXjB1TgoZWS9zBdNcYL7CRbQBqcDdxr4RtcvCgApmQcU6SemVXd7RuG"},{type:"bitcoin",alt:"btc",addr:"bc1qlfnq8nu2k84h3jth7a27khaq0p2l2gvtyl2dv6"},{type:"ethereum",alt:"eth",addr:"0xF6F204B044CC73Fa90d7A7e4C5EC2947b83b917e"}],m=function(){setTimeout((function(){p(!0)}),6e4)};return(0,o.useEffect)((function(){m(),setInterval((function(){a(h[Math.floor(Math.random()*h.length)].alt)}),1e4)}),[]),(0,r.jsx)("div",{className:e.root,children:(0,r.jsx)("footer",{className:e.footer,children:(0,r.jsx)(l.Z,{maxWidth:"sm",children:(0,r.jsxs)(i.Z,{variant:"body1",children:["Built and developed by"," ",(0,r.jsx)(c.Z,{href:"https://github.com/darkkD11/File_encrypti_decrypt",target:"_blank",rel:"noopener",color:"inherit",children:"B.E Student of Theem COE"})]})})})})}},1574:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(1120),i=n(3832),a=n(2318),l=n(9731),c=(0,o.Z)((function(e){return{heroTitle:{color:e.palette.diamondBlack.main,marginTop:20},heroSubTitle:{color:e.palette.diamondBlack.main}}}));function s(){var e=c();return(0,r.jsxs)(i.Z,{maxWidth:"sm",component:"main",className:e.heroContent,children:[(0,r.jsx)(a.Z,{variant:"h5",align:"center",gutterBottom:!0,className:e.heroTitle,children:"File Encryption & Decryption"}),(0,r.jsxs)(a.Z,{variant:"subtitle1",align:"center",component:"p",className:e.heroSubTitle,children:[(0,l.F)("sub_title"),(0,r.jsx)("br",{})]})]})}},9100:function(e,t,n){"use strict";n.d(t,{Z:function(){return q}});var r=n(4051),o=n.n(r),i=n(5893),a=n(7294),l=n(1120),c=n(5046),s=n(7155),d=n(7812),u=n(6037),p=n(282),h=n(366),m=n(2318),x=n(9895),f=n(1749),v=n(7083),g=n(5685),b=n(7078),j=n(3099);function y(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,o)}var Z=n(6869),k=function(){var e,t=(e=o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.ready;case 2:return n=(t=Z).crypto_kx_keypair(),r={publicKey:t.to_base64(n.publicKey),privateKey:t.to_base64(n.privateKey)},e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){y(i,r,o,a,l,"next",e)}function l(e){y(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),_=n(67),w=n(8270),F=n(6642),C=n(9731),S=n(2663),B=n(6856),P=n(9525),T=n(7212),z=n(6083),M=n(7239),N=n(9361),W=(0,l.Z)((function(e){return{form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content",marginBottom:20},topScrollPaper:{alignItems:"start",marginTop:"10vh"},topPaperScrollBody:{verticalAlign:"middle"}}})),V=function(e){var t=W(),n=(0,a.useState)(!1),r=n[0],o=n[1],l=window.location.origin+"/?tab=encryption&publicKey="+e.publicKey,c=function(){o(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.ZP,{title:(0,C.F)("generate_qr_code"),placement:"bottom",children:(0,i.jsx)(d.Z,{onClick:function(){o(!0)},children:(0,i.jsxs)("svg",{enableBackground:"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24",children:[(0,i.jsx)("g",{children:(0,i.jsx)("rect",{fill:"none",height:"24",width:"24"})}),(0,i.jsx)("g",{children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{fill:"#6a6a6a",d:"M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6 8h1.5v1.5H13V13zm1.5 1.5H16V16h-1.5v-1.5zM16 13h1.5v1.5H16V13zm-3 3h1.5v1.5H13V16zm1.5 1.5H16V19h-1.5v-1.5zM16 16h1.5v1.5H16V16zm1.5-1.5H19V16h-1.5v-1.5zm0 3H19V19h-1.5v-1.5zM22 7h-2V4h-3V2h5v5zm0 15v-5h-2v3h-3v2h5zM2 22h5v-2H4v-3H2v5zM2 2v5h2V4h3V2H2z"})})})]})})}),(0,i.jsxs)(S.Z,{scroll:"body",maxWidth:"sm",fullWidth:!0,open:r,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",PaperProps:{elevation:0},classes:{scrollPaper:t.topScrollPaper,paperScrollBody:t.topPaperScrollBody},children:[(0,i.jsx)(z.Z,{id:"alert-dialog-title"}),(0,i.jsxs)(P.Z,{children:[(0,i.jsx)("div",{className:t.form,children:(0,i.jsx)(N,{style:{borderRadius:8,marginTop:15,boxShadow:"0px 0px 35px 2px rgba(0,0,0,0.2)"},value:l,size:200,bgColor:"#ffffff",fgColor:"#000000",level:"M",includeMargin:!0,renderAs:"canvas",imageSettings:{src:"/assets/icons/qr-logo.png",x:null,y:null,height:40,width:40,excavate:!1}})}),(0,i.jsxs)(T.Z,{children:[(0,i.jsxs)("small",{children:["* ",(0,C.F)("qr_code_note_one")]}),(0,i.jsx)("br",{}),(0,i.jsxs)("small",{children:["* ",(0,C.F)("qr_code_note_two")]}),(0,i.jsx)("br",{}),(0,i.jsxs)("small",{children:["* ",(0,C.F)("qr_code_note_three")]})]}),l&&(0,i.jsx)(b.Z,{style:{marginTop:15},defaultValue:l,InputProps:{readOnly:!0,classes:{root:t.textFieldRoot,focused:t.textFieldFocused,notchedOutline:t.textFieldNotchedOutline},endAdornment:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(v.ZP,{title:(0,C.F)("copy_link"),placement:"left",children:(0,i.jsx)(d.Z,{onClick:function(){navigator.clipboard.writeText(l)},children:(0,i.jsx)(M.Z,{})})})})},helperText:(0,C.F)("create_shareable_link_note"),variant:"outlined",fullWidth:!0})]}),(0,i.jsx)(B.Z,{children:(0,i.jsx)(p.Z,{onClick:c,color:"primary",autoFocus:!0,children:(0,C.F)("close")})})]})]})};function R(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,o)}var H=(0,l.Z)((function(e){return{root:{marginTop:50,width:"100%","& > * + *":{marginTop:e.spacing(2)}},generateNowText:{float:"right",color:e.palette.mountainMist.main,cursor:"pointer",textDecoration:"underline",marginLeft:4},caption:{float:"right",color:e.palette.mountainMist.main},keyCaption:{float:"left",color:e.palette.mountainMist.main,marginLeft:4,"&:hover":{cursor:"pointer",textDecoration:"underline"}},button:(t={marginTop:e.spacing(1),marginRight:e.spacing(1),borderRadius:"8px",border:"none",color:e.palette.denim.main,backgroundColor:e.palette.hawkesBlue.light,"&:hover":{backgroundColor:e.palette.hawkesBlue.main},transition:"background-color 0.2s ease-out"},n="transition",r="color .01s",n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t),alertContainer:{padding:e.spacing(3),boxShadow:"rgba(149, 157, 165, 0.4) 0px 8px 24px",borderRadius:"8px"}};var t,n,r})),q=function(e){var t=H(),n=(0,a.useState)(!1),r=n[0],l=n[1],y=(0,a.useState)(),Z=y[0],S=y[1],B=(0,a.useState)(),P=B[0],T=B[1],z=(0,a.useState)((0,C.F)("generate_key_pair_button")),M=z[0],N=z[1],W=(0,a.useState)(!1),q=W[0],D=W[1],K=function(){var e,t=(e=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,S(t.publicKey),T(t.privateKey),N((0,C.F)("generate_another_key_pair_button"));case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){R(i,r,o,a,l,"next",e)}function l(e){R(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),E=function(e,t){var n=new Blob([e],{type:"text/plain"}),r=document.createElement("a"),o=URL.createObjectURL(n);r.href=o,r.download=t,document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(o)}),0)};return(0,i.jsxs)(i.Fragment,{children:[!e.opened&&(0,i.jsxs)("div",{children:[(0,i.jsx)(m.Z,{variant:"caption",className:t.generateNowText,onClick:function(){l(!0)},children:(0,C.F)("generate_now_button")}),(0,i.jsx)(m.Z,{variant:"caption",className:t.caption,children:(0,C.F)("key_pair_question")}),(0,i.jsx)(F.Z,{xsDown:!0,children:(0,i.jsx)("a",{href:"/about/#why-need-private-key",target:"_blank",children:(0,i.jsx)(m.Z,{variant:"caption",className:t.keyCaption,children:(0,C.F)("why_need_private_key")})})})]}),(0,i.jsx)("div",{className:t.root,children:(0,i.jsx)(u.Z,{in:r||e.opened,children:(0,i.jsxs)(x.Z,{elevation:0,className:t.alertContainer,children:[(0,i.jsx)(c.Z,{variant:"outlined",severity:"info",style:{border:"none",marginBottom:"15px"},action:(0,i.jsx)(d.Z,{id:"closeGenBtn","aria-label":"close",color:"inherit",size:"small",onClick:function(){l(!1)},children:(0,i.jsx)(h.Z,{fontSize:"inherit"})}),children:(0,i.jsx)(s.Z,{children:(0,C.F)("key_pair_generation_title")})}),(0,i.jsxs)(f.Z,{container:!0,spacing:1,justifyContent:"center",children:[(0,i.jsx)(f.Z,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{id:"generatedPublicKey",label:(0,C.F)("public_key"),value:Z||"",placeholder:(0,C.F)("generate_public_key"),InputProps:{readOnly:!0,endAdornment:Z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(V,{publicKey:Z}),(0,i.jsx)(v.ZP,{title:(0,C.F)("download_public_key"),placement:"bottom",children:(0,i.jsx)(d.Z,{onClick:function(){return E(Z,"key.public")},children:(0,i.jsx)(j.Z,{})})})]})},variant:"outlined",style:{marginBottom:"15px"},fullWidth:!0})}),(0,i.jsx)(f.Z,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{id:"generatedPrivateKey",type:q?"text":"password",label:(0,C.F)("private_key"),value:P||"",placeholder:(0,C.F)("generate_private_key"),helperText:(0,C.F)("private_key_notice"),InputProps:{readOnly:!0,endAdornment:P&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.ZP,{title:(0,C.F)("show_private_key"),placement:"bottom",children:(0,i.jsx)(d.Z,{onClick:function(){return D(!q)},children:q?(0,i.jsx)(_.Z,{}):(0,i.jsx)(w.Z,{})})}),(0,i.jsx)(v.ZP,{title:(0,C.F)("download_private_key"),placement:"bottom",children:(0,i.jsx)(d.Z,{onClick:function(){return E(P,"key.private")},children:(0,i.jsx)(j.Z,{})})})]})},variant:"outlined",style:{marginBottom:"15px"},fullWidth:!0})}),(0,i.jsx)(f.Z,{item:!0,xs:12,sm:6,children:(0,i.jsx)(p.Z,{onClick:K,className:"".concat(t.button," keyPairGenerateBtn"),variant:"outlined",startIcon:P&&(0,i.jsx)(g.Z,{}),fullWidth:!0,style:{textTransform:"none"},children:M})})]})]})})})]})}},917:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5893),o=n(7294),i=n(1120),a=n(2663),l=n(6856),c=n(9525),s=n(7212),d=n(6083),u=n(282),p=n(7812),h=n(9969),m=n(9731);n(3475);(0,i.Z)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}}));var x=n(8413),f=(0,i.Z)((function(e){return{topScrollPaper:{alignItems:"start",marginTop:"20vh"},topPaperScrollBody:{verticalAlign:"middle"}}})),v=function(){var e=f(),t=(0,o.useState)(!1),n=t[0],i=t[1],v=function(){i(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{onClick:function(){i(!0)},children:(0,r.jsx)(h.Z,{})}),(0,r.jsxs)(a.Z,{maxWidth:"sm",fullWidth:!0,open:n,onClose:v,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",PaperProps:{elevation:0},classes:{scrollPaper:e.topScrollPaper,paperScrollBody:e.topPaperScrollBody},children:[(0,r.jsx)(d.Z,{id:"alert-dialog-title",children:(0,m.F)("settings")}),(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(s.Z,{id:"alert-dialog-description",style:{marginTop:15},children:[(0,m.F)("change_appearance")," :"]}),(0,r.jsx)(x.t7,{})]}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(u.Z,{onClick:v,color:"primary",autoFocus:!0,children:(0,m.F)("close")})})]})]})}},819:function(e,t,n){"use strict";n.d(t,{Tb:function(){return r},kr:function(){return o},G0:function(){return i},g7:function(){return a},xv:function(){return l},J8:function(){return c}});var r=1073741824,o=67108864,i=17,a=new TextEncoder,l=new TextDecoder,c={v1:"Encrypted Using File Encryption & Decryption",v2_symmetric:"zDKO6XYXioc",v2_asymmetric:"hTWKbfoikeg"}},5992:function(){}}]);
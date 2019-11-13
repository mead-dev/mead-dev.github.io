(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{142:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(0),r=t.n(l),c=t(2),i=t.n(c),o=t(9),m=t.n(o),u=t(4),d={tag:u.m,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.active,c=e.tag,i=Object(s.a)(e,["className","cssModule","active","tag"]),o=Object(u.i)(m()(a,!!l&&"active","breadcrumb-item"),t);return r.a.createElement(c,Object(n.a)({},i,{className:o,"aria-current":l?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},a.a=p},143:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(0),r=t.n(l),c=t(2),i=t.n(c),o=t(9),m=t.n(o),u=t(4),d={tag:u.m,listTag:u.m,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,c=e.children,i=e.tag,o=e.listTag,d=e["aria-label"],p=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(u.i)(m()(a),l),b=Object(u.i)(m()("breadcrumb",t),l);return r.a.createElement(i,Object(n.a)({},p,{className:f,"aria-label":d}),r.a.createElement(o,{className:b},c))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},145:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(15),r=t(12),c=t(0),i=t.n(c),o=t(2),m=t.n(o),u=t(9),d=t.n(u),p=t(4),f={children:m.a.node,type:m.a.string,size:m.a.string,bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.m,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,r=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,u=e.addon,f=e.plaintext,b=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),N=m||("select"===l||"textarea"===l?l:"input"),v="form-control";f?(v+="-plaintext",N=m||"input"):"file"===l?v+="-file":h&&(v=u?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(p.i)(d()(a,o&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,v),t);return("input"===N||m&&"function"===typeof m)&&(g.type=l),g.children&&!f&&"select"!==l&&"string"===typeof N&&"select"!==N&&(Object(p.n)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(N,Object(n.a)({},g,{ref:b,className:j}))},a}(i.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},148:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(0),r=t.n(l),c=t(2),i=t.n(c),o=t(9),m=t.n(o),u=t(4),d={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.m,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.row,c=e.disabled,i=e.check,o=e.inline,d=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.i)(m()(a,!!l&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!c)&&"disabled"),t);return r.a.createElement(d,Object(n.a)({},p,{className:f}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},149:function(e,a,t){"use strict";var n=t(5),s=t(7),l=t(0),r=t.n(l),c=t(2),i=t.n(c),o=t(9),m=t.n(o),u=t(58),d=t.n(u),p=t(4),f=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),g={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:p.m,className:i.a.string,cssModule:i.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},N=function(e){var a=e.className,t=e.cssModule,l=e.hidden,c=e.widths,i=e.tag,o=e.check,u=e.size,f=e.for,b=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];c.forEach(function(a,n){var s=e[a];if(delete b[a],s||""===s){var l,r=!n;if(d()(s)){var c,i=r?"-":"-"+a+"-";l=E(r,a,s.size),g.push(Object(p.i)(m()(((c={})[l]=s.size||""===s.size,c["order"+i+s.order]=s.order||0===s.order,c["offset"+i+s.offset]=s.offset||0===s.offset,c))),t)}else l=E(r,a,s),g.push(l)}});var h=Object(p.i)(m()(a,!!l&&"sr-only",!!o&&"form-check-label",!!u&&"col-form-label-"+u,g,!!g.length&&"col-form-label"),t);return r.a.createElement(i,Object(n.a)({htmlFor:f},b,{className:h}))};N.propTypes=g,N.defaultProps=h,a.a=N},152:function(e,a,t){"use strict";var n=t(0),s=t.n(n),l=t(8),r=t(142),c=t(126),i=t(143);a.a=function(e){var a=e.items,t=e.main,n=null;return a&&(n=a.map(function(e,a){return s.a.createElement(r.a,{key:a},s.a.createElement(l.b,{className:"text-info",to:e.to},e.content))})),s.a.createElement("div",{className:"container-fluid bg-light"},s.a.createElement(c.a,{className:"p-0"},s.a.createElement(i.a,{listClassName:"bg-transparent rounded-0"},s.a.createElement(r.a,null,s.a.createElement(l.b,{className:"text-info",to:"/"},"Accueil")),n,s.a.createElement(r.a,{className:"text-danger",active:!0},t))))}},338:function(e,a,t){"use strict";t.r(a);var n=t(16),s=t(25),l=t(26),r=t(28),c=t(27),i=t(29),o=t(0),m=t.n(o),u=t(30),d=t(11),p=t(50),f=t(137),b=t(127),g=t(120),h=t(148),E=t(149),N=t(145),v=t(80),j=t(152),O=t(59),x=t(40),y=t(31),k=function(e){function a(){return Object(s.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.authPage&&this.props.onAuthPageOff(),this.props.auth.userPage&&this.props.onUserPageOff()}},{key:"render",value:function(){return m.a.createElement(p.a,{xs:12,className:"Contact p-0"},m.a.createElement(j.a,{main:"Contact"}),m.a.createElement(x.a,null,this.props.csrf.loading?m.a.createElement("div",{className:"text-center"},m.a.createElement(f.a,{type:"grow",color:"danger",style:{width:"5rem",height:"5rem"},className:"mx-auto",size:"xl"})):m.a.createElement(m.a.Fragment,null,m.a.createElement(O.a,null,"Nous contacter"),m.a.createElement(b.a,null,m.a.createElement(p.a,{lg:7},m.a.createElement(g.a,{className:"p-3 mb-3"},m.a.createElement("form",null,m.a.createElement("input",{type:"hidden",value:this.props.csrf.token||""}),m.a.createElement(b.a,null,m.a.createElement(p.a,{lg:6},m.a.createElement(h.a,null,m.a.createElement(E.a,{for:"firstname"},"Pr\xe9nom ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement(N.a,{type:"text",id:"firstname",name:"firstname",required:!0}))),m.a.createElement(p.a,{lg:6},m.a.createElement(h.a,null,m.a.createElement(E.a,{for:"lastname"},"Nom ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement(N.a,{type:"text",id:"lastname",name:"lastname",required:!0}))),m.a.createElement(p.a,{lg:12},m.a.createElement(h.a,null,m.a.createElement(E.a,{for:"email"},"Adresse mail ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement(N.a,{type:"email",id:"email",name:"email",required:!0})),m.a.createElement(h.a,null,m.a.createElement(E.a,{for:"subject"},"Sujet"),m.a.createElement(N.a,{type:"text",id:"subject",name:"subject"})),m.a.createElement(h.a,null,m.a.createElement(E.a,{for:"message"},"Message"),m.a.createElement(N.a,{type:"textarea",id:"message",name:"message"})),m.a.createElement(h.a,null,m.a.createElement(v.a,{block:!0,color:"danger"},m.a.createElement(d.a,{icon:"paper-plane",className:"mr-1"}),"Envoyer le message"))))))),m.a.createElement(p.a,{lg:5},m.a.createElement(g.a,{className:"p-3 mb-3"},m.a.createElement("h6",{className:"text-uppercase text-info"},"Douala"),m.a.createElement("p",{className:"text-black-50"},"Voici notre emplacement \xe0 Douala")),m.a.createElement(g.a,{className:"p-3 mb-3"},m.a.createElement("h6",{className:"text-uppercase text-info"},"Yaound\xe9"),m.a.createElement("p",{className:"text-black-50"},"Voici notre emplacement \xe0 Yaound\xe9")),m.a.createElement(g.a,{className:"p-3 mb-3"},m.a.createElement("h6",{className:"text-uppercase text-info"},"Buea"),m.a.createElement("p",{className:"text-black-50"},"Voici notre emplacement \xe0 Buea")))))))}}]),a}(o.Component);a.default=Object(u.b)(function(e){return Object(n.a)({},e)},function(e){return{onAuthPageOff:function(){return e(y.y())},onUserPageOff:function(){return e(y.Y())}}})(k)}}]);
//# sourceMappingURL=30.91463394.chunk.js.map
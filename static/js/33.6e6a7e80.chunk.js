(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{138:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.err;return t?o.a.createElement("div",{className:"alert alert-danger"},t.message?t.message:t):null}},253:function(e,t){},265:function(e,t,a){},266:function(e,t,a){e.exports=a.p+"static/media/whatsapp_wall.6a24a468.jpg"},343:function(e,t,a){"use strict";a.r(t);var n=a(16),o=a(163),r=a(57),s=a(25),i=a(26),c=a(28),l=a(27),m=a(29),u=a(0),d=a.n(u),h=a(33),g=a(30),p=a(137),f=a(225),v=a(224),E=a(227),b=a.n(E),y=a(256),w=a.n(y),x=a(31),j=a(69),N=a(128),k=a(223),T=a(132),C=a(154),S=a.n(C),I=function(e){e.photo,e.name;var t=e.communities,a=e.toggle,n=e.activeTab,o=e.onChange,r=e.search,s=t.map(function(e){var t=e.messages.length-1;return d.a.createElement(N.a,{style:{cursor:"pointer"},className:"border-bottom w-100 text-truncate",key:e.owner._id},d.a.createElement(k.a,{className:"py-2 px-3 mw-100 "+(n===e.owner._id?"bg-light":""),onClick:function(){return a(e.owner._id)}},d.a.createElement("div",{className:"d-flex mw-100 justify-content-start align-items-center"},d.a.createElement("div",{className:"mr-2 h-100 align-middle flex-shrink-0"},d.a.createElement("img",{className:"rounded-circle",style:{height:50,width:50},src:"http://localhost:8080/"+e.imageUrl,alt:e.name})),d.a.createElement("div",{className:"flex-grow-1 text-truncate"},d.a.createElement("span",{className:"small float-right"},e.messages[t]?S()(e.messages[t].createdAt).format("LT"):null),d.a.createElement("h5",{className:"m-0"},e.name),d.a.createElement("span",{className:"text-muted"},e.messages[t]?e.messages[t].content:"D\xe9marrer la discussion")))))});return d.a.createElement("aside",{style:{width:"30%",height:"calc(100vh - 56px)",top:56,zIndex:990,fontSize:".9em"},className:"border-right position-fixed"},d.a.createElement("div",{className:"bg-light border-bottom p-2"},d.a.createElement("input",{type:"search",name:"search",onChange:o,value:r,className:"form-control",placeholder:"Rechercher une communaut\xe9"})),d.a.createElement("div",{className:"bg-white px-0",style:{height:"calc(100vh - 110px)",overflowY:"auto"}},d.a.createElement(T.a,null,s)))},O=a(313),_=a(11),A=a(226),P=a(315),z=a(80),H=a(41),L=a.n(H),D=a(257),B=a.n(D),F=a(262),U=a.n(F),M=(a(265),a(266)),W=a.n(M),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).resizedHandler=function(e){var t=document.getElementById("chatbox-"+a.props.id),n=L()("#textarea-"+a.props.id).parent().parent().outerHeight(),o=L()("body").outerHeight();t.style.height=o-n-110+"px",t.scrollTop=t.scrollHeight},a.onKeyDown=function(e){13===+e.which&&(e.preventDefault(),a.props.onClick())},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("chatbox-"+this.props.id);e.scrollTop=e.scrollHeight}},{key:"componentDidUpdate",value:function(e,t){var a=document.getElementById("chatbox-"+this.props.id);a.scrollTop=a.scrollHeight}},{key:"render",value:function(){var e=this,t=this.props,a=t.community,n=t.onChange,o=t.onClick,r=t.value,s=t.profile,i=t.onEmojiToggle,c=null;if(t.emojiPickerShown&&(c=d.a.createElement("div",{className:"position-absolute",style:{zIndex:10,bottom:"calc(100% - 2px)",left:10}},d.a.createElement(U.a,{onEmojiClick:function(t,a){return e.props.onEmojiClick(t,a)}}))),a){var l=a.messages.map(function(e,t){var n="justify-content-start",o="",r=null,i=null;if(e.userId._id.toString()===s.userId.toString()?(o="bg-my-message text-dark",n="justify-content-end"):((a.messages[t-1]&&a.messages[t-1].userId._id.toString()!==a.messages[t].userId._id.toString()||!a.messages[t-1])&&(i=d.a.createElement("strong",null,e.userId.name)),o="bg-white text-dark"),!a.messages[t-1]||S()(a.messages[t].createdAt).format("L")!==S()(a.messages[t-1].createdAt).format("L")){var c=S()(e.createdAt).format("L"),l=S()().format("L").split("/"),m=c.split("/"),u=Object(O.a)(m,3),h=u[0],g=u[1],p=u[2];h===l[0]&&p===l[2]&&g===l[1]?c="Today":h===l[0]&&p===l[2]&&+g===+l[1]-1&&(c="Yesterday"),r=d.a.createElement("div",{className:"d-flex my-2 justify-content-center",key:e.createdAt},d.a.createElement("div",{className:"rounded shadow-sm px-2 py-1 bg-info"},d.a.createElement("div",{className:"text-white small"},c)))}return d.a.createElement("div",{key:e._id,className:"py-1"},r,d.a.createElement("div",{className:"d-flex "+n},d.a.createElement("div",{className:"rounded shadow-sm px-2 py-1 "+o,style:{maxWidth:"80%"}},i,d.a.createElement("div",null,e.content),d.a.createElement("div",{className:"text-right text-muted small"},S()(e.createdAt).format("LT")))))}),m=a.followers.map(function(e){return e.name});return m.sort(),m=m.concat("Vous"),d.a.createElement("div",{className:"h-100 Community",style:{fontSize:".9em"}},d.a.createElement("div",{className:"px-3 d-flex justify-content-start align-items-center py-1 position-absolute bg-light w-100 shadow-sm",style:{top:0,zIndex:1}},d.a.createElement("div",{className:"flex-shrink mr-2"},d.a.createElement("img",{src:"http://localhost:8080/"+a.imageUrl,className:"rounded-circle",style:{height:45,width:45,objectFit:"cover",objectPosition:"center"},alt:a.name})),d.a.createElement("div",{className:"flex-fill"},d.a.createElement("h5",{className:"m-0"},a.name),d.a.createElement("span",{className:"text-muted text-truncate"},m.join(", ")))),d.a.createElement("img",{src:W.a,className:"h-100 w-100 position-absolute",style:{zIndex:0,objectFit:"cover",objectPosition:"center",opacity:.03},alt:"Wall"}),d.a.createElement("div",{id:"chatbox-"+this.props.id,className:"d-flex chatbox position-absolute w-100 py-2 px-5 justify-content-start flex-column",style:{background:"transparent !important",zIndex:1,height:"calc(100vh - 163px)",overflowY:"auto",top:53}},l),d.a.createElement("div",{className:"position-absolute border-top w-100 bg-light py-2 px-3",style:{bottom:0,zIndex:2}},c,d.a.createElement(A.a,null,d.a.createElement(P.a,{addonType:"prepend"},d.a.createElement(z.a,{onClick:i,color:"info"},d.a.createElement(_.a,{icon:"smile-wink"}))),d.a.createElement(B.a,{id:"textarea-"+this.props.id,onResize:function(t){return e.resizedHandler(t)},onKeyDown:function(t){return e.onKeyDown(t)},name:"content",className:"form-control",value:r,placeholder:"Taper un message",onChange:n,rows:1}),d.a.createElement(P.a,{addonType:"append"},d.a.createElement(z.a,{onClick:o,color:"danger"},d.a.createElement(_.a,{icon:"paper-plane"}))))))}}}]),t}(u.Component),J=a(138),K=a(42),R=new w.a;R.img_set="emojione",R.img_sets.emojione.path="https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/",R.supports_css=!1,R.allow_native=!0,R.replace_mode="unified";var G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={activeTab:null,search:"",content:"",communities:null,emojiPickerShown:!1},a.toggle=function(e){a.state.activeTab!==e&&a.setState({activeTab:e})},a.inputChangedHandler=function(e){var t=e.target,n=t.value,o=t.name;a.setState(Object(r.a)({},o,n))},a.submitHandler=function(){var e=a.state,t=e.content,n=e.activeTab,o=a.props.auth.token;a.setState({content:""}),fetch("http://localhost:8080/auth/message",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({content:t,communityId:n})}).then(function(e){if(200!==e.status&&201!==e.status)throw new J.a("Erreur lors de l'envoi du message.");return e.json()}).then(function(e){}).catch(function(e){console.log(e)})},a.onEmojiClick=function(e,t){var n=R.replace_colons(":".concat(t.name,":"));a.setState(function(e){return{content:e.content+n,emojiPickerShown:!1}},function(){return document.getElementById("textarea-"+a.state.activeTab).focus()})},a.onEmojiToggle=function(){a.setState(function(e){return{emojiPickerShown:!e.emojiPickerShown}},function(){return document.getElementById("textarea-"+a.state.activeTab).focus()})},a.logoutHandler=function(){(0,a.props.onAuthLogout)()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onAuthPageOn,a=e.onUserPageOff,n=e.onGetCommunities;t(),a(),n()}},{key:"componentWillReceiveProps",value:function(e){var t=this;null!==e.shop.communities&&this.setState({communities:Object(o.a)(e.shop.communities)},function(){b()("http://localhost:8080").on("message",function(e){if("new"===e.action){var a=t.state.communities.findIndex(function(t){return t.owner._id.toString()===e.message.communityId.toString()}),n=Object(o.a)(t.state.communities);n[a].messages.findIndex(function(t){return t._id.toString()===e.message._id.toString()})<0&&n[a].messages.push(e.message),n.sort(function(e,t){var a=e.messages[e.messages.length-1],n=t.messages[t.messages.length-1];return new Date(n.createdAt).getTime()-new Date(a.createdAt).getTime()}),t.setState({communities:n})}})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeTab,n=t.communities,o=t.search,r=t.emojiPickerShown,s=this.props,i=s.auth,c=i.profile,l=i.authError,m=i.authLoading,u=s.shop,h=u.cart,g=u.shopError,E=u.shopLoading,b=this.logoutHandler,y=this.toggle,w=this.inputChangedHandler,x=this.submitHandler,N=c||{name:null,role:null,photo:null,notifications:null},k=N.name,T=N.role,C=N.photo,S=N.notifications,O=null,_=null;if(E||m)O=d.a.createElement("div",{className:"text-center"},d.a.createElement(p.a,{type:"grow",color:"danger",style:{width:"5rem",height:"5rem"},className:"mx-auto",size:"xl"}));else if(_=d.a.createElement(d.a.Fragment,null,d.a.createElement(J.a,{err:l}),d.a.createElement(J.a,{err:g})),n){var A=n.filter(function(e){return e.name.toLowerCase().includes(o.toLowerCase())}),P=n.map(function(t){return d.a.createElement(f.a,{key:"tab-"+t.owner._id,tabId:t.owner._id},d.a.createElement(Y,{id:t.owner._id,profile:c,onEmojiToggle:e.onEmojiToggle,onEmojiClick:e.onEmojiClick,emojiPickerShown:r,onClick:x,value:e.state.content,onChange:function(e){return w(e)},community:t}))});O=d.a.createElement(d.a.Fragment,null,d.a.createElement(I,{onChange:function(e){return w(e)},activeTab:a,search:o,communities:A,name:k,photo:C,toggle:y}),d.a.createElement("main",{className:"bg-light position-relative",style:{paddingLeft:"30%",height:"calc(100vh - 57px)"}},d.a.createElement("div",{className:"container-fluid bg-light p-0 position-relative h-100"},null!==a?d.a.createElement(v.a,{activeTab:a},P):d.a.createElement("div",{className:"bg-light h-100 d-flex justify-content-center align-items-center"},d.a.createElement("div",{className:"text-center w-75"},d.a.createElement(K.a,{big:!0}),d.a.createElement("h4",{className:"font-weight-light"},"Bienvenue dans l'espace discussion de MEAD"),d.a.createElement("hr",null),d.a.createElement("p",{className:"text-muted"},"Pour commencer, veuillez rechercher la communaut\xe9 de votre choix en utilisant la barre de recherche."))))))}return d.a.createElement(d.a.Fragment,null,d.a.createElement(j.a,{notifications:S,name:k,logoWidth:"30%",role:T,cartItemsNumber:h.length,logoutHandler:b}),_,O)}}]),t}(u.Component);t.default=Object(h.g)(Object(g.b)(function(e){return Object(n.a)({},e)},function(e){return{onAuthPageOn:function(){return e(x.z())},onUserPageOff:function(){return e(x.Y())},onAuthLogout:function(){return e(x.x())},onGetCommunities:function(){return e(x.I())},onSendMessage:function(t){return e(x.T(t))}}})(G))}}]);
//# sourceMappingURL=33.6e6a7e80.chunk.js.map
(this.webpackJsonpaninet=this.webpackJsonpaninet||[]).push([[0],{196:function(e,t,n){e.exports=n(523)},201:function(e,t,n){},205:function(e,t,n){},521:function(e,t,n){},523:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),l=n(15),c=n(16),s=n(18),u=n(17),d=n(177),m=n(22),h=(n(201),n(45)),f=n(38),p=(n(204),n(205),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"page-title"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"topbar"},r.a.createElement("a",{href:"https://github.com/AniNet-Project"},"GitHub"),r.a.createElement("a",{href:"#/about"},"\u5173\u4e8e"),r.a.createElement("a",{href:"#/contribute"},"\u5982\u4f55\u8d21\u732e"))),r.a.createElement("div",{className:"container title"},r.a.createElement("p",{className:"sub"},r.a.createElement("a",{href:"/"},"AniNet")),r.a.createElement("h1",null,this.props.title))))}}]),n}(r.a.Component)),v=n(156),g=n.n(v),E=n(157),b=n.n(E),y=function(){return window.location.href.endsWith("#/")?r.a.createElement("div",{className:"busuanzi"},r.a.createElement("script",{async:!0,src:"//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"}),r.a.createElement("span",{id:"busuanzi_container_site_pv"}," \u672c\u7ad9\u603b\u8bbf\u95ee\u91cf",r.a.createElement("span",{id:"busuanzi_value_site_pv"}),"\u6b21 ")):r.a.createElement("div",{className:"busuanzi"},r.a.createElement("script",{async:!0,src:"//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"}),r.a.createElement("span",{id:"busuanzi_container_page_pv"}," \u672c\u9875\u9762\u8bbf\u95ee\u91cf",r.a.createElement("span",{id:"busuanzi_value_page_pv"}),"\u6b21 "))},O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"https://github.com/AniNet-Project"},r.a.createElement(g.a,null)),r.a.createElement("a",{href:"mailto:nanguage@yahoo.com"},r.a.createElement(b.a,{id:"email-icon"})),r.a.createElement(y,null)))}}]),n}(r.a.Component),k=function(e){var t=document.createElement("input");return t.setAttribute("type","file"),t.setAttribute("multiple","multiple"),t.setAttribute("accept",".json"),t.addEventListener("change",(function(t){var n=t.target.files[0],a=new FileReader;a.onload=function(){e(JSON.parse(a.result))},void 0!==n&&a.readAsText(n)})),t},C=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleFileSelect=function(t){t.preventDefault(),e.state.fileSelector.click()},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({fileSelector:k(this.props.setInfo)})}},{key:"render",value:function(){return r.a.createElement("button",{onClick:this.handleFileSelect},"\u6253\u5f00\u6587\u4ef6 (JSON)")}}]),n}(r.a.Component),w=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"toolbar"},r.a.createElement("div",{className:"rightside"},r.a.createElement(C,{setInfo:this.props.setInfo}),r.a.createElement("button",{onClick:function(){!function(e,t){if(window.navigator&&window.navigator.msSaveOrOpenBlob){var n=new Blob([decodeURIComponent(encodeURI(JSON.stringify(e)))],{type:"application/json;charset=utf-8;"});navigator.msSaveOrOpenBlob(n,t)}else{var a=document.createElement("a");a.download=t,a.href="data:application/json;charset=utf-8;,"+encodeURIComponent(JSON.stringify(e,null,2)),a.target="_blank",document.body.appendChild(a),a.click(),document.body.removeChild(a)}}(e.props.info,"export.json")}},"\u4fdd\u5b58\u6587\u4ef6 (JSON)")))}}]),n}(r.a.Component),S=n(36),j=n(166),N=n.n(j),I=n(165),x=n.n(I),B=n(592),R=n(164),A=n.n(R),F=n(88),P=n.n(F),L=n(578),z=n(593),T=n(577),q=n(575),D=n(576),U=n(574),M=n(65),_=n.n(M),H=n(529),J=n(526),V=n(121),W=n.n(V),G=n(159),$=n.n(G),K=n(591),Y=n(160),Q=n.n(Y),X=n(594),Z=n(124),ee=n(579),te=n(7),ne=n(161),ae=n.n(ne),re=n(580),ie=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={open:!1,content:""},a}return Object(c.a)(n,[{key:"handleClickOpen",value:function(){this.setState({open:!0}),this.setTextArea()}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"setTextArea",value:function(){var e=this.props.getOpt(),t=JSON.stringify(e,null,2);this.setState({content:t})}},{key:"textChanged",value:function(e){this.setState({content:e.target.value})}},{key:"handleClickConfirm",value:function(){var e;try{e=JSON.parse(this.state.content),this.props.setOpt(e),this.setState({open:!1})}catch(a){console.log(a);var t=document.getElementById("edit-options-content");null!==t&&(t.style.border="2px solid #ff3333");var n=document.getElementById("edit-options-tips");console.log(n),null!==n&&(n.innerHTML="JSON \u89e3\u6790\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u3002",n.style.color="#ff3333",n.style.fontSize="10px")}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"EditOptionsDialog"},r.a.createElement(B.a,{title:"\u7f16\u8f91\u89c6\u56fe\u914d\u7f6e",placement:"top"},r.a.createElement(P.a,{onClick:function(){e.handleClickOpen()}})),r.a.createElement(z.a,{open:this.state.open,onClose:function(){e.handleClose()},"aria-labelledby":"form-dialog-title"},r.a.createElement(U.a,{id:"form-dialog-title"},"\u7f16\u8f91\u7f51\u7edc\u89c6\u56fe\u914d\u7f6e"),r.a.createElement(q.a,null,r.a.createElement(D.a,null,"\u76f4\u63a5\u901a\u8fc7 JSON \u5bf9\u7f51\u7edc\u89c6\u56fe\u8fdb\u884c\u914d\u7f6e\uff0c\u53ef\u914d\u7f6e\u9879\u76ee\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003",r.a.createElement("a",{href:"https://visjs.github.io/vis-network/docs/network/"},"vis-network \u6587\u6863")," \u3002"),r.a.createElement("p",{id:"edit-options-tips"}," "),r.a.createElement("textarea",{id:"edit-options-content",rows:18,cols:72,value:this.state.content,onChange:function(t){e.textChanged(t)}})),r.a.createElement(T.a,null,r.a.createElement(L.a,{onClick:function(){e.handleClose()},color:"primary"},"\u53d6\u6d88"),r.a.createElement(L.a,{onClick:function(){e.handleClickConfirm()},color:"primary"},"\u786e\u5b9a"))))}}]),n}(r.a.Component),oe=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={open:!1,queryText:""},a}return Object(c.a)(n,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleClickSearch",value:function(){var e=this.state.queryText;this.props.queryAndFocus(e),this.setState({open:!1,queryText:""})}},{key:"textChanged",value:function(e){this.setState({queryText:e.target.value})}},{key:"handlePressEnter",value:function(e){"Enter"===e.key&&this.handleClickSearch()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{title:"\u641c\u7d22",placement:"top"},r.a.createElement(_.a,{onClick:function(){return e.handleClickOpen()}})),r.a.createElement(z.a,{open:this.state.open,onClose:function(){e.handleClose()},"aria-labelledby":"form-dialog-title"},r.a.createElement(q.a,{id:"searchDialog"},r.a.createElement(H.a,{value:this.state.queryText,onChange:function(t){return e.textChanged(t)},onKeyPress:function(t){return e.handlePressEnter(t)},placeholder:"\u8f93\u5165\u8282\u70b9\u6807\u7b7e\uff08\u5982\uff0clabel:\u82cd\u5d0e\u9752\u5b50\uff09\u6216ID\uff08\u5982\uff0cid:1\uff09"}),r.a.createElement(J.a,{type:"submit",onClick:function(){return e.handleClickSearch()}},r.a.createElement(_.a,null)))))}}]),n}(r.a.Component),le=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={open:!1,queryText:"",reverse:!0},a}return Object(c.a)(n,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleClickFilter",value:function(){var e=this.state.queryText;this.props.queryAndFilter(e,this.state.reverse),this.setState({open:!1,queryText:""})}},{key:"handleClickReset",value:function(){this.props.reset(),this.setState({open:!1,queryText:""})}},{key:"textChanged",value:function(e){this.setState({queryText:e.target.value})}},{key:"handlePressEnter",value:function(e){"Enter"===e.key&&this.handleClickFilter()}},{key:"handleChangeReverse",value:function(e){this.setState({reverse:e.target.checked})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{title:"\u7b5b\u9009",placement:"top"},r.a.createElement(W.a,{onClick:function(){return e.handleClickOpen()}})),r.a.createElement(z.a,{open:this.state.open,onClose:function(){e.handleClose()},"aria-labelledby":"form-dialog-title"},r.a.createElement(q.a,{id:"filterDialog"},r.a.createElement(H.a,{value:this.state.queryText,onChange:function(t){return e.textChanged(t)},onKeyPress:function(t){return e.handlePressEnter(t)},placeholder:"\u7528\u4e8e\u7b5b\u9009\u7684\u5c5e\u6027\u548c\u6b63\u5219\u8868\u8fbe\u5f0f\uff08\u5982\uff1acategorie:person\uff09"}),r.a.createElement(J.a,{type:"submit",onClick:function(){return e.handleClickFilter()}},r.a.createElement(B.a,{title:"\u7b5b\u9009",placement:"top"},r.a.createElement(W.a,null))),r.a.createElement(J.a,{type:"submit",onClick:function(){return e.handleClickReset()}},r.a.createElement(B.a,{title:"\u91cd\u7f6e",placement:"top"},r.a.createElement($.a,null))),r.a.createElement(B.a,{title:"\u53cd\u9009",placement:"top"},r.a.createElement(K.a,{checked:this.state.reverse,onChange:function(t){return e.handleChangeReverse(t)}})))))}}]),n}(r.a.Component),ce=function(e){var t,n=Object.assign({},e);"physics"in n||(n.physics={}),n.physics.solver="forceAtlas2Based","forceAtlas2Based"in n.physics?t=n.physics.forceAtlas2Based:(t={},n.physics.forceAtlas2Based=t);for(var a=0,r=Object.entries({gravitationalConstant:-20,centralGravity:.002,springLength:100,springConstant:.01});a<r.length;a++){var i=Object(S.a)(r[a],2),o=i[0],l=i[1];o in t||(t[o]=l)}return"edges"in n||(n.edges={}),"font"in n.edges||(n.edges.font={}),"size"in n.edges.font||(n.edges.font.size=14),n},se=function(e){var t=ce(e.getOpt()),n=t.physics.forceAtlas2Based,i=Object(a.useState)(n.gravitationalConstant),o=Object(S.a)(i,2),l=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{gutterBottom:!0},"\u5f15\u529b\u5e38\u6570"),r.a.createElement(X.a,{value:l,onChange:function(a,r){n.gravitationalConstant=r,c(r),e.setOpt(t)},min:-100,max:0,valueLabelDisplay:"auto","aria-labelledby":"continuous-slider"}))},ue=function(e){var t=ce(e.getOpt()),n=t.physics.forceAtlas2Based,i=Object(a.useState)(Math.log10(n.springConstant)),o=Object(S.a)(i,2),l=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{gutterBottom:!0},"\u5f39\u7c27\u5e38\u6570"),r.a.createElement(X.a,{value:l,onChange:function(a,r){var i=Math.pow(10,r);n.springConstant=i,c(r),e.setOpt(t)},step:.5,min:-5,max:0,valueLabelDisplay:"auto",valueLabelFormat:function(e){return"1e^"+e},"aria-labelledby":"non-linear-slider"}))},de=Object(te.a)({switchBase:{color:"#3f51b5","&$checked":{color:"#3f51b5"},"&$checked + $track":{backgroundColor:"#3f51b5"}},checked:{},track:{}})(ee.a),me=function(e){var t=ce(e.getOpt()),n=Object(a.useState)(t.physics.enabled),i=Object(S.a)(n,2),o=i[0],l=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{gutterBottom:!0},"\u7269\u7406\u6548\u679c"),r.a.createElement(de,{checked:o,onChange:function(n){var a=n.target.checked;t.physics.enabled=a,l(a),e.setOpt(t)},name:"physicsCheck"}))},he=function(e){var t=ce(e.getOpt()),n=Object(a.useState)(0===t.edges.font.size),i=Object(S.a)(n,2),o=i[0],l=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{gutterBottom:!0},"\u9690\u85cf\u8fb9\u6807\u7b7e"),r.a.createElement(de,{checked:o,onChange:function(n){var a=n.target.checked;t.edges.font.size=a?0:14,l(a),e.setOpt(t),console.log(t)},name:"hiddenEdgeLabelCheck"}))},fe=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(c.a)(n,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{title:"\u89c6\u56fe\u8c03\u6574",placement:"top"},r.a.createElement(Q.a,{onClick:function(){return e.handleClickOpen()}})),r.a.createElement(z.a,{open:this.state.open,onClose:function(){e.handleClose()},"aria-labelledby":"form-dialog-title"},r.a.createElement(U.a,{id:"form-dialog-title"},"\u7f51\u7edc\u89c6\u56fe\u8c03\u6574"),r.a.createElement(q.a,{id:"tuneDialog"},r.a.createElement(me,{setOpt:this.props.setOpt,getOpt:this.props.getOpt}),r.a.createElement(se,{setOpt:this.props.setOpt,getOpt:this.props.getOpt}),r.a.createElement(ue,{setOpt:this.props.setOpt,getOpt:this.props.getOpt}),r.a.createElement(he,{setOpt:this.props.setOpt,getOpt:this.props.getOpt}))))}}]),n}(r.a.Component),pe=function(e){return r.a.createElement(re.a,{control:r.a.createElement(de,{checked:e.switchState,onChange:function(t){var n=t.target.checked;e.setSwitch(n)},name:"inforBoardCheck"}),label:"\u5f39\u51fa\u4fe1\u606f",labelPlacement:"start"})},ve=function(e){return r.a.createElement(re.a,{control:r.a.createElement(de,{checked:e.switchState,onChange:function(t){var n=t.target.checked;e.setSwitch(n)},name:"hiddenUnselectedCheck"}),label:"\u9690\u85cf\u672a\u9009\u4e2d\u8282\u70b9",labelPlacement:"start"})},ge=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(c.a)(n,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{title:"\u8bbe\u7f6e",placement:"top"},r.a.createElement(ae.a,{onClick:function(){return e.handleClickOpen()}})),r.a.createElement(z.a,{open:this.state.open,onClose:function(){e.handleClose()},"aria-labelledby":"form-dialog-title"},r.a.createElement(U.a,{id:"form-dialog-title"},"\u8bbe\u7f6e"),r.a.createElement(q.a,{id:"tuneDialog"},r.a.createElement(pe,{switchState:this.props.inforBoardSwitch,setSwitch:this.props.setInforBoardSwitch}),r.a.createElement(ve,{switchState:this.props.hiddenUnselectedSwitch,setSwitch:this.props.setHiddenUnselectedSwitch}))))}}]),n}(r.a.Component),Ee=n(96),be=n(162),ye=n.n(be),Oe=n(163),ke=n.n(Oe),Ce=function(e){var t=e.node,n=e.pos,a=e.cats[t.categorie],i={top:n.y+"px",left:n.x+"px"},o="color"in a?{color:a.color}:{};return r.a.createElement(ye.a,null,r.a.createElement("div",{className:"infoBoard",style:i},r.a.createElement(ke.a,{className:"closeButton",onClick:function(){return e.close()}}),r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:"image"in t?t.image:"",alt:""}),r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"name"},t.label),r.a.createElement("div",{className:"categorie",style:o},void 0!==a?a.label:"")),r.a.createElement("div",{className:"describe"},function(e,t){var n=""+e;return e.length>t&&(n=e.slice(0,t),n+="..."),n}(t.info,80)),"link"in t&&""!==t.link?r.a.createElement("a",{className:"link",href:t.link},"\u94fe\u63a5"):null)))},we=n(581),Se=n(588),je=function(e){return e.value>=100?r.a.createElement(r.a.Fragment,null):r.a.createElement(Se.a,{position:"relative",display:"inline-flex"},r.a.createElement(we.a,e),r.a.createElement(Se.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(Z.a,{variant:"caption",component:"div",color:"textSecondary"},"".concat(Math.round(e.value),"%"))))},Ne=function(){return document.getElementsByTagName("canvas")[0]},Ie="#66bbff",xe=3,Be=function(e){var t=Object(a.useState)(!1),n=Object(S.a)(t,2),i=n[0],o=n[1],l=300,c=function(){Ne().style.height=l+"px"};return r.a.createElement("div",{className:"viewControl"},r.a.createElement(oe,{queryAndFocus:e.queryAndFocus}),r.a.createElement(le,{queryAndFilter:e.queryAndFilter,reset:e.reset}),r.a.createElement(B.a,{title:"\u622a\u56fe",placement:"top"},r.a.createElement(A.a,{onClick:function(){return e.captureImg()}})),r.a.createElement(fe,{setOpt:e.setOpt,getOpt:e.getOpt}),r.a.createElement(ie,{setOpt:e.setOpt,getOpt:e.getOpt}),r.a.createElement(ge,{inforBoardSwitch:e.inforBoardSwitch,setInforBoardSwitch:e.setInforBoardSwitch,hiddenUnselectedSwitch:e.hiddenUnselectedSwitch,setHiddenUnselectedSwitch:e.setHiddenUnselectedSwitch}),i?r.a.createElement(B.a,{title:"\u9000\u51fa\u5168\u5c4f",placement:"top"},r.a.createElement(x.a,{onClick:function(){document.exitFullscreen(),c(),o(!1)}})):r.a.createElement(B.a,{title:"\u5168\u5c4f",placement:"top"},r.a.createElement(N.a,{onClick:function(){var e=Ne(),t=document.getElementById("full-screen-region");null===t||void 0===t||t.requestFullscreen(),l=e.clientHeight,e.style.height=window.screen.height+"px",o(!0),document.addEventListener("fullscreenchange",(function(e){document.fullscreenElement||(c(),o(!1))}))}})))},Re={autoResize:!1,nodes:{shape:"dot"},physics:{enabled:!0,stabilization:!1,solver:"forceAtlas2Based",forceAtlas2Based:{gravitationalConstant:-20,centralGravity:.002,springLength:100,springConstant:.01}},edges:{width:.3,color:{inherit:"to"}},interaction:{hideEdgesOnDrag:!1,hover:!0,multiselect:!0}},Ae=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={infoBoard:null,loadingRatio:0,inforBoardSwitch:!0,netRef:r.a.createRef(),netOptions:null,oldNodes:e.info.data.nodes,hiddenUnselectedSwitch:!1},a}return Object(c.a)(n,[{key:"setHiddenUnselectedSwitch",value:function(e){var t=this.state.hiddenUnselectedSwitch;!0===t&&!1===e?this.resetNodes():!1===t&&!0===e&&this.hiddenNonSelected(),this.setState({hiddenUnselectedSwitch:e})}},{key:"handlePopup",value:function(e){var t=this,n=this.state.netRef.current.network.getNodeAt(e.pointer.DOM),a="undefined"!==typeof n;console.log(n);var i={x:20,y:20},o=function(){var e=t.props.info.data.nodes.find((function(e){return e.id===n}));return r.a.createElement(Ce,{pos:i,node:e,cats:t.props.info.categories,close:function(){return t.setState({infoBoard:null})}})},l=this.state.infoBoard;a&&null===l&&this.state.inforBoardSwitch||a&&null!==l&&this.state.inforBoardSwitch?this.setState({infoBoard:o()}):null!==l&&this.setState({infoBoard:null})}},{key:"handleHidden",value:function(e){this.state.hiddenUnselectedSwitch&&(e.nodes.length>0?this.hiddenNonSelected():this.resetNodes())}},{key:"handleClick",value:function(e){this.handlePopup(e),this.handleHidden(e)}},{key:"setInforBoardSwitch",value:function(e){this.setState({inforBoardSwitch:e})}},{key:"setNetOptions",value:function(e){this.state.netRef.current.network.setOptions(e),this.setState({netOptions:e})}},{key:"getNetOptions",value:function(){return this.state.netOptions}},{key:"componentDidMount",value:function(){this.setNetOptions(Re),this.registerLoading()}},{key:"createNetwork",value:function(){var e=this,t=this.props.info;return r.a.createElement(r.a.Fragment,null,this.createLoadindBar(),r.a.createElement(Ee.Network,{ref:this.state.netRef,onClick:function(t){e.handleClick(t)}},t.data.nodes.map((function(e){return function(e,t){var n,a=t[e.categorie];return n=a?a.color:Ie,r.a.createElement(Ee.Node,{key:e.id,id:e.id,label:e.label,shape:"circularImage",image:e.image,color:n,borderWidth:xe})}(e,t.categories)})),t.data.edges.map((function(e){return function(e){var t="";return"direction"in e&&!0===e.direction&&(t="to"),r.a.createElement(Ee.Edge,{key:e.id,id:e.id,arrows:t,from:e.from,to:e.to,label:e.label})}(e)}))))}},{key:"createLoadindBar",value:function(){return r.a.createElement("div",{id:"progressBar"},r.a.createElement(je,{variant:"determinate",value:100*this.state.loadingRatio}))}},{key:"registerLoading",value:function(){var e=this,t=this.state.netRef.current.network;t.on("stabilizationProgress",(function(t){var n=t.iterations/t.total;e.setState({loadingRatio:n})})),t.once("stabilizationIterationsDone",(function(){e.setState({loadingRatio:1})}))}},{key:"captureImg",value:function(){var e=Ne(),t=e.getContext("2d");null!==t&&(t.save(),t.globalCompositeOperation="destination-over",t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),t.restore());var n=e.toDataURL("image/png",1).replace(/^data:image\/[^;]/,"data:application/octet-stream"),a=document.createElement("a");a.download="network.png",a.href=n,a.target="_blank",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},{key:"queryNodes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="label",a="",r=e.split(":");if(1===r.length)a=r[0];else{if(2!==r.length)return[];n=r[0],a=r[1].trim()}var i=[],o=this.props.info.data.nodes,l=function(e){return t?!e:e};try{var c,s=new RegExp(a),u=Object(h.a)(o);try{for(u.s();!(c=u.n()).done;){var d=c.value;if(n in d){var m=d[n];"id"===n?l(m===parseInt(a))&&i.push(d):l(s.test(String(m)))&&i.push(d)}}}catch(f){u.e(f)}finally{u.f()}return i}catch(p){return console.log(p),[]}}},{key:"queryNodesAndFocus",value:function(e){var t=this.queryNodes(e);if(!(t.length<=0)){var n=this.state.netRef.current.network;n.selectNodes([]);var a=t.map((function(e){return String(e.id)}));t.length>1?n.fit({nodes:a,animation:!0}):n.focus(a[0],{scale:1,animation:!0}),n.selectNodes(a)}}},{key:"queryNodesAndFilter",value:function(e,t){var n=this.queryNodes(e,t);this.props.setNodes(n)}},{key:"resetNodes",value:function(){this.props.setNodes(this.state.oldNodes)}},{key:"getSelectedClosure",value:function(){var e,t=this.state.netRef.current.network,n=t.getSelectedNodes(),a=new Set,r=Object(h.a)(n);try{for(r.s();!(e=r.n()).done;){var i=e.value;a.add(parseInt(String(i)));var o,l=t.getConnectedNodes(i),c=Object(h.a)(l);try{for(c.s();!(o=c.n()).done;){var s=o.value;a.add(parseInt(String(s)))}}catch(u){c.e(u)}finally{c.f()}}}catch(u){r.e(u)}finally{r.f()}return a}},{key:"hiddenNonSelected",value:function(){this.resetNodes();var e,t=this.getSelectedClosure(),n=[],a=Object(h.a)(this.state.oldNodes);try{for(a.s();!(e=a.n()).done;){var r=e.value;t.has(r.id)&&n.push(r)}}catch(i){a.e(i)}finally{a.f()}this.props.setNodes(n)}},{key:"render",value:function(){return r.a.createElement("div",{className:"netView"},r.a.createElement("div",{className:"canvas-wrap",id:"full-screen-region"},this.createNetwork(),this.state.infoBoard,r.a.createElement(Be,{setOpt:this.setNetOptions.bind(this),getOpt:this.getNetOptions.bind(this),captureImg:this.captureImg.bind(this),queryAndFocus:this.queryNodesAndFocus.bind(this),queryAndFilter:this.queryNodesAndFilter.bind(this),reset:this.resetNodes.bind(this),inforBoardSwitch:this.state.inforBoardSwitch,setInforBoardSwitch:this.setInforBoardSwitch.bind(this),hiddenUnselectedSwitch:this.state.hiddenUnselectedSwitch,setHiddenUnselectedSwitch:this.setHiddenUnselectedSwitch.bind(this)})))}}]),n}(r.a.Component),Fe=n(582),Pe=n(595),Le=Object(Fe.a)((function(e){return Object(Pe.a)({root:{width:400},margin:{height:e.spacing(3)}})})),ze=function(e){if(e.timePoints.length<2)return r.a.createElement(r.a.Fragment,null);var t=Le(),n=-1,a=e.timePoints.map((function(e){return{value:n+=1,label:e.label}}));return r.a.createElement("div",{className:t.root+" timeSlider"},r.a.createElement("div",{className:"label"},"\u65f6\u95f4\u8f74"),r.a.createElement("div",{className:"slider"},r.a.createElement(X.a,{defaultValue:e.time,"aria-labelledby":"discrete-slider-custom",min:0,max:e.timePoints.length-1,step:null,valueLabelDisplay:"off",marks:a,onChange:function(t,n){var a=n;e.setTime(a)}})))},Te=n(67),qe=n(73),De=n(8),Ue=n(37),Me=n(525),_e=n(585),He=n(589),Je=n(586),Ve=n(587),We=n(171),Ge=n.n(We),$e=n(95),Ke=n.n($e),Ye=n(172),Qe=n.n(Ye),Xe={add:function(e){var t=e.onExecute;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(L.a,{color:"primary",onClick:t,title:"Create new row"},"New"))},edit:function(e){var t=e.onExecute;return r.a.createElement(J.a,{onClick:t,title:"Edit row"},r.a.createElement(P.a,null))},delete:function(e){var t=e.onExecute;return r.a.createElement(J.a,{onClick:function(){window.confirm("Are you sure you want to delete this row?")&&t()},title:"Delete row"},r.a.createElement(Ge.a,null))},commit:function(e){var t=e.onExecute;return r.a.createElement(J.a,{onClick:t,title:"Save changes"},r.a.createElement(Ke.a,null))},cancel:function(e){var t=e.onExecute;return r.a.createElement(J.a,{color:"secondary",onClick:t,title:"Cancel changes"},r.a.createElement(Qe.a,null))}},Ze=function(e){var t=e.id,n=e.onExecute,a=Xe[t];return r.a.createElement(a,{onExecute:n})},et={categorie:["person","organization"],direction:["true","false"]},tt=Object(te.a)((function(e){return{lookupEditCell:{padding:e.spacing(1)},dialog:{width:"calc(100% - 16px)"},inputRoot:{width:"100%"},selectMenu:{position:"absolute !important"}}}),{name:"ControlledModeDemo"})((function(e){var t=e.availableColumnValues,n=e.value,a=e.onValueChange,i=e.classes;return r.a.createElement(Ve.a,{className:i.lookupEditCell},r.a.createElement(He.a,{value:n,onChange:function(e){return a(e.target.value)},MenuProps:{className:i.selectMenu},input:r.a.createElement(_e.a,{classes:{root:i.inputRoot}})},t.map((function(e){return r.a.createElement(Je.a,{key:e,value:e},e)}))))})),nt=function(e){var t=e.column,n=et[t.name];return n?r.a.createElement(tt,Object.assign({},e,{availableColumnValues:n})):r.a.createElement(Ue.f.Cell,e)},at=function(e){return e.id},rt=function(e,t,n,a,i,o){return function(d){Object(s.a)(h,d);var m=Object(u.a)(h);function h(r){var i;return Object(l.a)(this,h),(i=m.call(this,r)).state={columns:e,rows:"function"===typeof t?t(r):r[t],tableColumnExtensions:n,sorting:[],editingRowIds:[],addedRows:[],rowChanges:{},currentPage:0,pageSize:5,pageSizes:[5,10,0],columnOrder:a,leftFixedColumns:[Ue.e.COLUMN_TYPE],totalSummaryItems:[]},i}return Object(c.a)(h,[{key:"changeAddedRows",value:function(e){for(var t={},n=0,a=Object.entries(i);n<a.length;n++){var r=Object(S.a)(a[n],2),o=r[0],l=r[1];t[o]="function"===typeof l?l(this.state.rows):l}console.log(t),this.setState({addedRows:e.map((function(e){return Object.keys(e).length?e:t}))})}},{key:"deleteRows",value:function(e){var t=this.state.rows.slice();return e.forEach((function(e){var n=t.findIndex((function(t){return t.id===e}));n>-1&&t.splice(n,1)})),t}},{key:"commitChanges",value:function(e){var t,n=e.added,a=e.changed,r=e.deleted,i=this.state.rows;if(n){var l=i.length>0?i[i.length-1].id+1:0;t=[].concat(Object(qe.a)(i),Object(qe.a)(n.map((function(e,t){return Object(Te.a)({id:l+t},e)}))))}a&&(t=i.map((function(e){return a[e.id]?Object(Te.a)(Object(Te.a)({},e),a[e.id]):e}))),r&&(t=this.deleteRows(r)),this.setState({rows:t}),o(this.props,t)}},{key:"componentWillReceiveProps",value:function(e){var n="function"===typeof t?t(e):e[t];this.setState({rows:n})}},{key:"render",value:function(){var e=this;return r.a.createElement(Me.a,null,r.a.createElement(Ue.a,{rows:this.state.rows,columns:this.state.columns,getRowId:at},r.a.createElement(De.m,{sorting:this.state.sorting,onSortingChange:function(t){e.setState({sorting:t})}}),r.a.createElement(De.k,{currentPage:this.state.currentPage,onCurrentPageChange:function(t){return e.setState({currentPage:t})},pageSize:this.state.pageSize,onPageSizeChange:function(t){return e.setState({pageSize:t})}}),r.a.createElement(De.c,{editingRowIds:this.state.editingRowIds,onEditingRowIdsChange:function(t){e.setState({editingRowIds:t})},rowChanges:this.state.rowChanges,onRowChangesChange:function(t){e.setState({rowChanges:t})},addedRows:this.state.addedRows,onAddedRowsChange:this.changeAddedRows.bind(this),onCommitChanges:this.commitChanges.bind(this)}),r.a.createElement(De.o,{totalItems:this.state.totalSummaryItems}),r.a.createElement(De.i,null),r.a.createElement(De.h,null),r.a.createElement(Ue.c,{columnExtensions:this.state.tableColumnExtensions}),r.a.createElement(Ue.d,{order:this.state.columnOrder,onOrderChange:function(t){return e.setState({columnOrder:t})}}),r.a.createElement(Ue.h,{showSortingControls:!0}),r.a.createElement(Ue.f,{cellComponent:nt}),r.a.createElement(Ue.e,{width:150,showAddCommand:!this.state.addedRows.length,showEditCommand:!0,showDeleteCommand:!0,commandComponent:Ze}),r.a.createElement(Ue.g,{leftColumns:this.state.leftFixedColumns}),r.a.createElement(Ue.b,{pageSizes:this.state.pageSizes})))}}]),h}(r.a.Component)},it=rt([{name:"id",title:"ID"},{name:"label",title:"\u6807\u7b7e"},{name:"categorie",title:"\u7c7b\u522b"},{name:"info",title:"\u4fe1\u606f"},{name:"image",title:"\u56fe\u7247"},{name:"link",title:"\u94fe\u63a5"}],"nodes",[{columnName:"id",width:80},{columnName:"label",width:100},{columnName:"categorie",width:100},{columnName:"info",width:300},{columnName:"image",width:200},{columnName:"link",width:200}],["id","label","categorie","info","image","link"],{id:function(e){return e.length>0?Math.max.apply(Math,Object(qe.a)(e.map((function(e){return e.id}))))+1:0},label:"",categorie:et.categorie[0],info:"",image:"",link:""},(function(e,t){e.setNodes(t.map((function(e){return Object(Te.a)(Object(Te.a)({},e),{},{id:parseInt(String(e.id))})})))})),ot=rt([{name:"id",title:"ID"},{name:"from",title:"from"},{name:"to",title:"to"},{name:"label",title:"\u6807\u7b7e"},{name:"direction",title:"\u6709\u5411\uff1f"}],(function(e){return e.edges.map((function(e){var t=Object.assign({},e);return t.direction=String(t.direction),t}))}),[{columnName:"id",width:100},{columnName:"from",width:100},{columnName:"to",width:100},{columnName:"label",width:120},{columnName:"direction",width:100}],["id","from","to","label","direction"],{id:function(e){return e.length>0?Math.max.apply(Math,Object(qe.a)(e.map((function(e){return e.id}))))+1:0},label:"",direction:et.direction[0],info:"",image:"",link:""},(function(e,t){e.setEdges(t.map((function(e){var t=Object.assign({},e);return t.id=parseInt(String(t.id)),t.direction="false"!==t.direction,t})))})),lt=rt([{name:"id",title:"ID"},{name:"label",title:"\u6807\u7b7e"},{name:"color",title:"\u989c\u8272"}],(function(e){var t=e.cats;return et.categorie=Object.keys(t),function(e){for(var t=[],n=0,a=Object.entries(e);n<a.length;n++){var r=Object(S.a)(a[n],2),i=r[0],o=r[1],l=Object.assign({id:i},o);t.push(l)}return t}(t)}),[{columnName:"id",width:200},{columnName:"label",width:200},{columnName:"color",width:200}],["id","label","color"],{id:"",label:"",color:"#aaaaaa"},(function(e,t){et.categorie=t.map((function(e){return e.id})),e.setCats(function(e){var t,n={},a=Object(h.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value,i=Object.assign({},r);delete i.id,n[r.id]=i}}catch(o){a.e(o)}finally{a.f()}return n}(t))})),ct=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,timesInfo:[],currentTime:0,timePoints:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.item,n=[];"string"===typeof t.url?n.push({label:"common",url:t.url}):n=t.url,this.setState({timesInfo:new Array(n.length)}),Promise.all(n.map((function(e){return fetch(e.url).then((function(e){return e.json()}))}))).then((function(t){e.setState({isLoaded:!0,timesInfo:t.map((function(e){return function(e){var t,n=[],a=Object(h.a)(e.data.nodes);try{for(a.s();!(t=a.n()).done;){var r=t.value;r.id=parseInt(String(r.id)),n.push(r)}}catch(i){a.e(i)}finally{a.f()}return e.data.nodes=n,e}(e)})),timePoints:n})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"setNodes",value:function(e){var t=this.state.timesInfo,n=t[this.state.currentTime];null!==n&&(n.data.nodes=e,this.setState({timesInfo:t}))}},{key:"setEdges",value:function(e){var t=this.state.timesInfo,n=t[this.state.currentTime];null!==n&&(n.data.edges=e,this.setState({timesInfo:t}))}},{key:"setCategories",value:function(e){var t=this.state.timesInfo,n=t[this.state.currentTime];null!=n&&(n.categories=e,this.setState({timesInfo:t}))}},{key:"setInfo",value:function(e){var t=this.state.timesInfo;t[this.state.currentTime]=e,this.setState({timesInfo:t})}},{key:"setCurrentTime",value:function(e){this.setState({currentTime:e})}},{key:"render",value:function(){var e=this.props.item,t=this.state,n=t.error,a=t.isLoaded,i=t.timesInfo,o=t.currentTime;if(n)return r.a.createElement("div",null,"Error: ",n.message);if(a){var l=i[o];return r.a.createElement("div",null,r.a.createElement(p,{title:e.name}),r.a.createElement("div",{className:"container"},r.a.createElement(w,{info:l,setInfo:this.setInfo.bind(this)}),r.a.createElement("div",{className:"tabs"},r.a.createElement(f.d,null,r.a.createElement(f.b,null,r.a.createElement(f.a,null,"\u7f51\u7edc\u89c6\u56fe"),r.a.createElement(f.a,null,"\u8282\u70b9(Nodes)"),r.a.createElement(f.a,null,"\u8fb9(Edges)"),r.a.createElement(f.a,null,"\u8282\u70b9\u7c7b\u522b")),r.a.createElement(f.c,{forceRender:!0},r.a.createElement(Ae,{info:l,setNodes:this.setNodes.bind(this)})),r.a.createElement(f.c,{forceRender:!0},r.a.createElement(it,{nodes:l.data.nodes,setNodes:this.setNodes.bind(this)})),r.a.createElement(f.c,{forceRender:!0},r.a.createElement(ot,{edges:l.data.edges,setEdges:this.setEdges.bind(this)})),r.a.createElement(f.c,{forceRender:!0},r.a.createElement(lt,{cats:l.categories,setCats:this.setCategories.bind(this)})))),r.a.createElement(ze,{time:this.state.currentTime,timePoints:this.state.timePoints,setTime:this.setCurrentTime.bind(this)})),r.a.createElement(O,null))}return r.a.createElement("div",null,"Loading...")}}]),n}(r.a.Component),st=n(176),ut=n.n(st),dt=n(173),mt=n.n(dt),ht=n(590),ft=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.language,n=e.value;return r.a.createElement(ht.a,{language:t},n)}}]),n}(a.PureComponent);ft.defaultProps={language:null};var pt=ft,vt=(n(521),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,content:null},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.sourceUrl;fetch(t).then((function(e){return e.text()})).then((function(t){e.setState({isLoaded:!0,content:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.content;return t?r.a.createElement("div",null,"Error: ",t.message):n?r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:this.props.title}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"doc"},r.a.createElement(mt.a,{source:a,renderers:{code:pt},escapeHtml:!1}))),r.a.createElement(O,null)):r.a.createElement("div",null,"Loading...")}}]),n}(r.a.Component)),gt=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement("a",{href:"#/network/"+e.name},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"titleImg",src:e.titleImg,alt:e.name}),r.a.createElement("p",{className:"name"},e.name)))}}]),n}(r.a.Component),Et=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement("div",{className:"card",id:"newCard"},r.a.createElement("a",{href:"#/network/"+e.name},r.a.createElement(B.a,{title:"\u65b0\u5efa\u7a7a\u767d\u9875",placement:"top"},r.a.createElement(J.a,{type:"submit",id:"newPageButton"},r.a.createElement(ut.a,{id:"newPageIcon"})))))}}]),n}(r.a.Component),bt=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.items;return r.a.createElement("div",{className:"cards"},e.map((function(e){return"\u65b0\u5efa\u7f51\u7edc"===e.name?r.a.createElement(Et,{key:e.name,item:e}):r.a.createElement(gt,{key:e.name,item:e})})))}}]),n}(r.a.Component),yt=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.items;return r.a.createElement("div",{className:"App"},r.a.createElement(p,{title:"ACG\u4eba\u7269\u5173\u7cfb\u53ef\u89c6\u5316"}),r.a.createElement("div",{className:"contents"},r.a.createElement("div",{className:"container"},r.a.createElement(bt,{items:e}))),r.a.createElement(O,null))}}]),n}(r.a.Component),Ot=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("networks.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.items;return a=a.concat([{name:"\u65b0\u5efa\u7f51\u7edc",titleImg:"",url:"data/empty.json"}]),t?r.a.createElement("div",null,"Error: ",t.message):n?r.a.createElement(d.a,{basename:"/"},r.a.createElement(m.a,{key:"home",exact:!0,path:"/",component:function(){return r.a.createElement(yt,{items:a})}}),a.map((function(e){return r.a.createElement(m.a,{key:e.name,path:"/network/"+e.name,component:function(){return r.a.createElement(ct,{item:e})}})})),r.a.createElement(m.a,{key:"contribute",path:"/contribute",component:function(){return r.a.createElement(vt,{title:"\u5982\u4f55\u8d21\u732e",sourceUrl:"docs/contribute.md"})}}),r.a.createElement(m.a,{key:"about",path:"/about",component:function(){return r.a.createElement(vt,{title:"\u5173\u4e8e",sourceUrl:"docs/about.md"})}})):r.a.createElement("div",null,"Loading...")}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[196,1,2]]]);
//# sourceMappingURL=main.a0776144.chunk.js.map
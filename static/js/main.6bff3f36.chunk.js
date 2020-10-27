(this["webpackJsonpquestion-app"]=this["webpackJsonpquestion-app"]||[]).push([[0],{103:function(n,e,t){},104:function(n,e,t){},112:function(n,e,t){"use strict";t.r(e);var a=t(5),r=t(0),i=t(8),c=t.n(i),o=(t(103),t(104),t(61)),s=t.n(o),d=t(73),u=t(22),l=t(15),j=t(14),b=t(35),O=t(165),f=t(57),p=t(166),h=t(172),x=t(173),g=t(174),v=t(177),m=t(58),w=t(84),q=t.n(w),y=t(85),C=t.n(y),S=t(21),k=t(176),D=t(181),E=t(168),Q=t(169),I=t(178),N=t(163),L=t(44),P=t(167),T=t(82),A=t.n(T),R=t(170),_=t(164),z=[{value:"0",label:"May Select"},{value:"1",label:"Must Select"},{value:"2",label:"Terminate if Select"}],F=t(24),V=t(25),M=t(180),W=t(162),H=t(161);function U(){var n=Object(F.a)(["\n  && {\n      width: 120px;\n      background: #f5d568;\n      color: #08767a;\n\n  }\n"]);return U=function(){return n},n}function B(){var n=Object(F.a)(["\n  && {\n      color: #08767a;\n      font-weight: 600;\n  }\n"]);return B=function(){return n},n}function J(){var n=Object(F.a)(["\n  && {\n      text-align: end\n  }\n"]);return J=function(){return n},n}function X(){var n=Object(F.a)(["\n  && {\n      .paper-class {\n        padding: 32px;\n        position: unset;\n        height: 600px;\n        width: 900px;\n        box-shadow: none;\n    }\n  }\n"]);return X=function(){return n},n}var K=Object(V.a)(M.a)(X()),G=Object(V.a)(L.a)(J()),Y=Object(V.a)(H.a)(B()),Z=Object(V.a)(W.a)(U()),$=function(n){var e=n.handleDeleteRespondentItem,t=n.handleEnterAnswerOption,r=n.handleClose,i=n.handleSave,c=n.handleOnchange,o=n.isOpen,s=n.handleChangeRespondent,d=n.isEditMode,u=n.questItem,l=Object(S.a)(),j=Object(N.a)(l.breakpoints.down("sm"));return Object(a.jsx)("div",{children:Object(a.jsxs)(K,{PaperProps:{classes:{root:"paper-class"}},maxWidth:"md",fullScreen:j,scroll:"paper",open:o,onClose:r,children:[Object(a.jsx)(Y,{id:"title",children:d?"Edit Question":"Add New Question"}),Object(a.jsxs)(_.a,{dividers:!0,children:[Object(a.jsxs)(O.a,{container:!0,direction:"row",spacing:2,children:[Object(a.jsx)(O.a,{item:!0,xs:2,children:Object(a.jsx)(L.a,{children:"Question"})}),Object(a.jsx)(O.a,{item:!0,xs:1,children:Object(a.jsx)(G,{children:":"})}),Object(a.jsx)(O.a,{item:!0,xs:9,children:Object(a.jsx)(k.a,{fullWidth:!0,multiline:!0,rows:4,value:u.question,name:"question",onChange:c(!1),variant:"outlined"})})]}),Object(a.jsxs)(O.a,{container:!0,direction:"row",spacing:2,children:[Object(a.jsx)(O.a,{item:!0,xs:2,children:Object(a.jsx)(L.a,{children:"Respondent Options"})}),Object(a.jsx)(O.a,{item:!0,xs:1,children:Object(a.jsx)(G,{children:":"})}),Object(a.jsxs)(O.a,{item:!0,xs:9,children:[Object(a.jsx)(O.a,{container:!0,spacing:2,children:u.respondent.map((function(n,r){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{item:!0,md:4,xs:12,children:Object(a.jsx)(k.a,{fullWidth:!0,select:!0,SelectProps:{native:!0},variant:"outlined",value:n.optionValue,name:"optionValue",onChange:s(r),children:z.map((function(n){return Object(a.jsx)("option",{value:n.value,children:n.label},n.value)}))})},n.id),Object(a.jsx)(O.a,{item:!0,md:8,xs:12,children:Object(a.jsxs)(O.a,{container:!0,spacing:1,direction:"row",children:[Object(a.jsx)(O.a,{item:!0,xs:10,children:Object(a.jsx)(D.a,{arrow:!0,placement:"top-start",title:"please enter to add another option",disableHoverListener:!0,children:Object(a.jsx)(k.a,{autoFocus:0!==r,fullWidth:!0,variant:"outlined",placeholder:"Enter to add more answer option",value:n.answer,name:"answer",onChange:s(r),onKeyDown:function(n){13===n.keyCode&&(window.scrollTo(0,600),n.preventDefault(),t())}})})}),Object(a.jsx)(O.a,{item:!0,xs:2,children:Object(a.jsx)(P.a,{disabled:1===u.respondent.length,id:r,onClick:function(){return e(u.respondent,n.id)},children:Object(a.jsx)(A.a,{})})})]})})]})}))}),Object(a.jsxs)(E.a,{row:!0,children:[Object(a.jsx)(Q.a,{label:Object(a.jsx)("b",{style:{color:"#08767a"},children:'Allow "None of the above"'}),control:Object(a.jsx)(I.a,{name:"allowNone",checked:u.allowNone,onChange:c(!0)})}),Object(a.jsx)(Q.a,{label:Object(a.jsx)("b",{style:{color:"#08767a"},children:"Shuffle the order"}),control:Object(a.jsx)(I.a,{name:"shuffleOrder",checked:u.shuffleOrder,onChange:c(!0)})})]})]})]})]}),Object(a.jsxs)(R.a,{children:[Object(a.jsx)(Z,{onClick:r,variant:"contained",children:"Cancel"}),Object(a.jsx)(Z,{onClick:function(){return i(d,u.id)},variant:"contained",children:"Save"})]})]})})},nn=t(171),en=t(83),tn=t.n(en);function an(){var n=Object(F.a)(["\n  && {\n    margin: -30px auto 0px;\n    width: 95%;\n    display: flex;\n    background: #08767a;\n    border-radius: 5px;\n    > div {\n      align-items: center;\n      display: flex;\n    }\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(F.a)(["\n  && {\n    color: #fff;\n    background: #f5d568;\n    border-radius: 50%;\n    @media (max-width: 480px) {\n      width: 12px;\n      height: 12px;\n      margin-top: -2px;\n    }\n  }\n"]);return rn=function(){return n},n}function cn(){var n=Object(F.a)(["\n  && {\n    > div {\n      width: 80px;\n      text-align: center;\n      color: #08767a;\n      background-color: #f5d568;\n      text-transform: capitalize;\n      border-radius: 16px;\n      font-size: 12px;\n      padding: 8px;\n      margin-right: 8px\n    }\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(F.a)(["\n  && {\n    > span {\n      color: #08767a\n    }\n  }\n"]);return on=function(){return n},n}function sn(){var n=Object(F.a)(["\n  && {\n    color: #08767a;\n    border-color: #fff;\n    background:#fff;\n    text-transform: capitalize;\n    @media (max-width: 480px) {\n      font-size: 12px;\n      padding: 4px 10px;\n    }\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(F.a)(["\n  && {\n    color: #fff;\n    @media (max-width: 480px) {\n      font-size: 14px;\n    }\n  }\n"]);return dn=function(){return n},n}function un(){var n=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  height: 300px;\n  color: #08767a;\n  border-radius: 5px;\n  margin: 16px;\n  @media (max-width: 480px) {\n    flex-direction: column;\n  }\n"]);return un=function(){return n},n}function ln(){var n=Object(F.a)(["\n  background: #fff;\n  max-width: 900px;\n  width: 100%;\n  min-height: 600px;\n  margin: 0 auto;\n  border-radius: 5px;\n    > div {\n      padding: 16px;\n\n    }\n"]);return ln=function(){return n},n}var jn=V.a.div(ln()),bn=V.a.div(un()),On=Object(V.a)(L.a)(dn()),fn=Object(V.a)(W.a)(sn()),pn=Object(V.a)(P.a)(on()),hn=Object(V.a)(nn.a)(cn()),xn=Object(V.a)(tn.a)(rn()),gn=Object(V.a)(O.a)(an()),vn="ADD_QUESTIONS",mn="RESET_QUESTION_LIST",wn=function(n){return{type:vn,payload:n}},qn=function(n){return{type:mn,payload:n}},yn={id:1,question:"",respondent:[{id:0,optionValue:"0",answer:""}],allowNone:!1,shuffleOrder:!1},Cn=Object(b.b)((function(n){return{questionData:n.questionList.questions}}),(function(n){return{addNewQuestion:function(e){return n(function(n){return function(e){return e(wn(n))}}(e))},setQuestionList:function(e){return n(function(n){return function(e){return e(qn(n))}}(e))}}}))((function(n){var e=Object(f.b)().enqueueSnackbar,t=Object(r.useState)(!1),i=Object(j.a)(t,2),c=i[0],o=i[1],b=Object(r.useState)(yn),w=Object(j.a)(b,2),y=w[0],S=w[1],k=Object(r.useState)(!1),D=Object(j.a)(k,2),E=D[0],Q=D[1];Object(r.useEffect)((function(){E||S({id:1,question:"",respondent:[{id:0,optionValue:"0",answer:""}],allowNone:!1,shuffleOrder:!1}),c||Q(!1)}),[E,c]);var I=function(){var t=Object(d.a)(s.a.mark((function t(a,r){var i,c,d,j;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!N()){t.next=3;break}return t.abrupt("return",e("Please fill the empty field",{variant:"error"}));case 3:return a?(i=Object(u.a)(n.questionData),c=n.questionData.findIndex((function(n){return n.id===r})),i[c]=y,n.setQuestionList(i)):(d=Object(l.a)({},y),j=n.questionData.length+1,d.id=j.toString(),n.addNewQuestion(d)),t.next=6,e("Question Added !",{variant:"success"});case 6:o(!1);case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),N=function(){return""===y.question||y.respondent.some((function(n){return""===n.answer}))};return Object(a.jsxs)(jn,{children:[Object(a.jsxs)(gn,{container:!0,justify:"space-between",children:[Object(a.jsx)(O.a,{item:!0,children:Object(a.jsx)(On,{variant:"h5",children:"Question Survey"})}),Object(a.jsx)(O.a,{item:!0,children:Object(a.jsx)(fn,{onClick:function(){o(!0)},variant:"contained",startIcon:Object(a.jsx)(xn,{}),children:"Add Question"})})]}),Object(a.jsx)($,{handleClose:function(){o(!1)},handleChangeRespondent:function(n){return function(e){var t=y.respondent;t[n][e.target.name]=e.target.value,S(Object(l.a)(Object(l.a)({},y),{},{respondent:Object(u.a)(t)}))}},handleDeleteRespondentItem:function(n,e){if(1!==n.length){var t=y.respondent.filter((function(n){return n.id!==e}));return S(Object(l.a)(Object(l.a)({},y),{},{respondent:t}))}},handleEnterAnswerOption:function(){var n={id:(new Date).getTime(),optionValue:"0",answer:""},e=[].concat(Object(u.a)(y.respondent),[n]);S(Object(l.a)(Object(l.a)({},y),{},{respondent:e}))},handleOnchange:function(n){return function(e){var t=e.target,a=t.name,r=t.value,i=t.checked,c=void 0!==i&&i,o=Object(l.a)({},y);o[a]=n?c:r,S(o)}},handleSave:I,isEditMode:E,isOpen:c,questItem:y}),0===n.questionData.length&&Object(a.jsxs)(bn,{children:[Object(a.jsx)("img",{src:"https://assets.getcraft.com/images/asset-q2-2018/not-found-icon.svg",alt:"empty"}),Object(a.jsx)("p",{children:"Question box is empty"})]}),n.questionData.length>0&&Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{handleHasDragged:function(e){if(e.destination){var t=function(n,e,t){var a=Array.from(n),r=a.splice(e,1),i=Object(j.a)(r,1)[0];return a.splice(t,0,i),a}(n.questionData,e.source.index,e.destination.index);n.setQuestionList(t)}},children:Object(a.jsx)(m.c,{droppableId:"droppable",children:function(e,t){return Object(a.jsx)(v.a,{rootRef:e.innerRef,children:Object(a.jsx)(p.a,{children:n.questionData.map((function(e,t){return Object(a.jsx)(m.b,{draggableId:e.id,index:t,children:function(r,i){return Object(a.jsxs)(h.a,Object(l.a)(Object(l.a)(Object(l.a)({alignItems:"center",ContainerComponent:"li",divider:!0,ContainerProps:{ref:r.innerRef}},r.draggableProps),r.dragHandleProps),{},{style:(c=i.isDragging,s=r.draggableProps.style,Object(l.a)(Object(l.a)({},s),c&&{background:"rgb(235,235,235)"})),children:[Object(a.jsx)(hn,{children:Object(a.jsx)("div",{children:"Question #".concat(t+1)})}),Object(a.jsx)(x.a,{primary:e.question,secondary:e.order}),Object(a.jsxs)(g.a,{children:[Object(a.jsx)(pn,{onClick:function(){return function(n){S(n),Q(!0),o(!0)}(e)},children:Object(a.jsx)(q.a,{})}),Object(a.jsx)(pn,{onClick:function(){return function(e){var t=n.questionData.filter((function(n){return n.id!==e}));n.setQuestionList(t)}(e.id)},children:Object(a.jsx)(C.a,{})})]})]}));var c,s}},e.id)}))})})}})})})]})}));var Sn=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(Cn,{})})})},kn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,182)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),a(n),r(n),i(n),c(n)}))},Dn=t(23),En=t(86),Qn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{questions:[]},e=arguments.length>1?arguments[1]:void 0,t=e.type,a=e.payload;switch(t){case vn:return Object(l.a)(Object(l.a)({},n),{},{questions:[].concat(Object(u.a)(n.questions),[a])});case mn:return Object(l.a)(Object(l.a)({},n),{},{questions:a});default:return n}},In=Object(Dn.c)({questionList:Qn}),Nn="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Dn.d,Ln=Object(Dn.e)(In,Nn(Object(Dn.a)(En.a)));c.a.render(Object(a.jsx)(b.a,{store:Ln,children:Object(a.jsx)(f.a,{maxSnack:3,anchorOrigin:{horizontal:"right",vertical:"top"},children:Object(a.jsx)(Sn,{})})}),document.getElementById("root")),kn()}},[[112,1,2]]]);
//# sourceMappingURL=main.6bff3f36.chunk.js.map
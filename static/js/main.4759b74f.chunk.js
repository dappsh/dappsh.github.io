(this["webpackJsonpquestion-app"]=this["webpackJsonpquestion-app"]||[]).push([[0],{101:function(n,e,t){},102:function(n,e,t){},110:function(n,e,t){"use strict";t.r(e);var a=t(5),i=t(0),r=t(8),c=t.n(r),o=(t(101),t(102),t(61)),s=t.n(o),d=t(73),u=t(24),l=t(15),j=t(14),b=t(58),f=t(35),p=t(57),O=t(164),h=t(165),x=t(171),v=t(172),m=t(173),g=t(176),w=t(81),q=t.n(w),y=t(82),C=t.n(y),S=t(23),k=t(175),D=t(179),E=t(167),Q=t(169),I=t(163),N=t(168),P=t(177),T=t(162),L=t(166),R=t(79),z=t.n(R),A=[{value:"0",label:"May Select"},{value:"1",label:"Must Select"},{value:"2",label:"Terminate if Select"}],_=t(21),M=t(22),V=t(180),F=t(44),W=t(161),U=t(160);function B(){var n=Object(_.a)(["\n  && {\n      width: 120px;\n      background: #f5d568;\n      color: #08767a;\n\n  }\n"]);return B=function(){return n},n}function H(){var n=Object(_.a)(["\n  && {\n      color: #08767a;\n      > h2 {\n        font-weight: 600;\n        @media (max-width: 480px) {\n        font-size: 16px;\n      }\n      }\n  }\n"]);return H=function(){return n},n}function J(){var n=Object(_.a)(["\n  && {\n      font-weight: 600;\n      color: #08767a;\n      @media (max-width: 480px) {\n        font-size: 12px;\n      }\n  }\n"]);return J=function(){return n},n}function X(){var n=Object(_.a)(["\n  && {\n      text-align: end;\n      @media (max-width: 480px) {\n        font-size: 12px;\n      }\n  }\n"]);return X=function(){return n},n}function K(){var n=Object(_.a)(["\n  && {\n      .paper-class {\n        padding: 32px;\n        position: unset;\n        height: 600px;\n        width: 900px;\n        box-shadow: none;\n        @media (max-width: 480px) {\n          padding: unset;\n        }\n    }\n  }\n"]);return K=function(){return n},n}var G=Object(M.a)(V.a)(K()),Y=Object(M.a)(F.a)(X()),Z=Object(M.a)(F.a)(J()),$=Object(M.a)(U.a)(H()),nn=Object(M.a)(W.a)(B()),en=function(n){var e,t=n.handleDeleteRespondentItem,i=n.handleEnterAnswerOption,r=n.handleClose,c=n.handleSave,o=n.handleOnchange,s=n.isOpen,d=n.handleChangeRespondent,u=n.isEditMode,l=n.questItem,j=Object(S.a)(),b=Object(T.a)(j.breakpoints.down("sm"));return Object(a.jsx)("div",{children:Object(a.jsxs)(G,{PaperProps:{classes:{root:"paper-class"}},maxWidth:"md",fullScreen:b,scroll:"paper",open:s,onClose:r,children:[Object(a.jsx)($,{id:"title",children:u?"Edit Question":"Add New Question"}),Object(a.jsxs)(I.a,{dividers:!0,children:[Object(a.jsxs)(O.a,{container:!0,direction:"row",spacing:2,children:[Object(a.jsx)(O.a,{item:!0,xs:2,children:Object(a.jsx)(Z,{children:"Question"})}),Object(a.jsx)(O.a,{item:!0,xs:1,children:Object(a.jsx)(Y,{children:":"})}),Object(a.jsx)(O.a,{item:!0,xs:9,children:Object(a.jsx)(k.a,{fullWidth:!0,multiline:!0,rows:4,value:l.question,name:"question",onChange:o(!1),variant:"outlined"})})]}),Object(a.jsxs)(O.a,{container:!0,direction:"row",spacing:2,children:[Object(a.jsx)(O.a,{item:!0,xs:2,children:Object(a.jsx)(Z,{children:"Respondent Options"})}),Object(a.jsx)(O.a,{item:!0,xs:1,children:Object(a.jsx)(Y,{children:":"})}),Object(a.jsxs)(O.a,{item:!0,xs:9,children:[null===l||void 0===l||null===(e=l.respondent)||void 0===e?void 0:e.map((function(n,e){return Object(a.jsxs)(O.a,{container:!0,spacing:2,children:[Object(a.jsx)(O.a,{item:!0,md:4,xs:12,children:Object(a.jsx)(k.a,{select:!0,fullWidth:!0,variant:"outlined",name:"optionValue",className:"respondentOptions",value:n.optionValue,onChange:d(e),SelectProps:{native:!0},children:A.map((function(n){return Object(a.jsx)("option",{value:n.value,children:n.label},n.value)}))})},null===n||void 0===n?void 0:n.id),Object(a.jsx)(O.a,{item:!0,md:8,xs:12,children:Object(a.jsxs)(O.a,{container:!0,spacing:1,direction:"row",children:[Object(a.jsx)(O.a,{item:!0,xs:10,children:Object(a.jsx)(D.a,{arrow:!0,placement:"top-start",title:"please enter to add another option",disableHoverListener:!0,children:Object(a.jsx)(k.a,{autoFocus:!u&&0!==e,fullWidth:!0,variant:"outlined",placeholder:"Enter to add more answer option",value:n.answer,name:"answer",onChange:d(e),onKeyDown:function(n){13===n.keyCode&&(window.scrollTo(0,600),n.preventDefault(),i())}})})}),Object(a.jsx)(O.a,{item:!0,xs:2,children:Object(a.jsx)(L.a,{disabled:1===l.respondent.length,id:e,onClick:function(){return t(l.respondent,n.id)},children:Object(a.jsx)(z.a,{})})})]})})]},e)})),Object(a.jsxs)(E.a,{row:!0,children:[Object(a.jsx)(N.a,{label:Object(a.jsx)(Z,{children:'Allow "None of the above"'}),control:Object(a.jsx)(P.a,{name:"allowNone",checked:l.allowNone,onChange:o(!0)})}),Object(a.jsx)(N.a,{label:Object(a.jsx)(Z,{children:"Shuffle the order"}),control:Object(a.jsx)(P.a,{name:"shuffleOrder",checked:l.shuffleOrder,onChange:o(!0)})})]})]})]})]}),Object(a.jsxs)(Q.a,{children:[Object(a.jsx)(nn,{onClick:r,variant:"contained",children:"Cancel"}),Object(a.jsx)(nn,{onClick:function(){return c(u,l.id)},variant:"contained",children:"Save"})]})]})})};en.defaultProps={handleDeleteRespondentItem:function(){},handleEnterAnswerOption:function(){},questItem:{},handleClose:function(){},handleSave:function(){},handleOnchange:function(){},handleChangeRespondent:function(){},setQuestionText:function(){},isOpen:!1,isEditMode:!1};var tn=en,an=t(170),rn=t(80),cn=t.n(rn);function on(){var n=Object(_.a)(["\n  && {\n    margin: -30px auto 0px;\n    width: 95%;\n    display: flex;\n    background: #08767a;\n    border-radius: 5px;\n    > div {\n      align-items: center;\n      display: flex;\n    }\n  }\n"]);return on=function(){return n},n}function sn(){var n=Object(_.a)(["\n  && {\n    color: #fff;\n    background: #f5d568;\n    border-radius: 50%;\n    @media (max-width: 480px) {\n      width: 12px;\n      height: 12px;\n      margin-top: -2px;\n    }\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(_.a)(["\n  && {\n    > div {\n      width: 80px;\n      text-align: center;\n      color: #08767a;\n      background-color: #f5d568;\n      text-transform: capitalize;\n      border-radius: 16px;\n      font-size: 12px;\n      padding: 8px;\n      margin-right: 8px\n    }\n  }\n"]);return dn=function(){return n},n}function un(){var n=Object(_.a)(["\n  && {\n    > span {\n      color: #08767a\n    }\n  }\n"]);return un=function(){return n},n}function ln(){var n=Object(_.a)(["\n  && {\n    color: #08767a;\n    border-color: #fff;\n    background:#fff;\n    text-transform: capitalize;\n    @media (max-width: 480px) {\n      font-size: 12px;\n      padding: 4px 10px;\n    }\n  }\n"]);return ln=function(){return n},n}function jn(){var n=Object(_.a)(["\n  && {\n    color: #fff;\n    @media (max-width: 480px) {\n      font-size: 14px;\n    }\n  }\n"]);return jn=function(){return n},n}function bn(){var n=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  height: 300px;\n  color: #08767a;\n  border-radius: 5px;\n  margin: 16px;\n  @media (max-width: 480px) {\n    flex-direction: column;\n  }\n"]);return bn=function(){return n},n}function fn(){var n=Object(_.a)(["\n  background: #fff;\n  max-width: 900px;\n  width: 100%;\n  min-height: 600px;\n  margin: 0 auto;\n  border-radius: 5px;\n    > div {\n      padding: 16px;\n\n    }\n"]);return fn=function(){return n},n}var pn=M.a.div(fn()),On=M.a.div(bn()),hn=Object(M.a)(F.a)(jn()),xn=Object(M.a)(W.a)(ln()),vn=Object(M.a)(L.a)(un()),mn=Object(M.a)(an.a)(dn()),gn=Object(M.a)(cn.a)(sn()),wn=Object(M.a)(O.a)(on()),qn="ADD_QUESTIONS",yn="SET_QUESTION_LIST",Cn=function(n){return{type:qn,payload:n}},Sn=function(n){return{type:yn,payload:n}},kn={id:1,question:"",respondent:[{id:0,optionValue:"0",answer:""}],allowNone:!1,shuffleOrder:!1},Dn=Object(f.b)((function(n){return{questionData:n.questionList.questions}}),(function(n){return{addNewQuestion:function(e){return n(function(n){return function(e){return e(Cn(n))}}(e))},setQuestionList:function(e){return n(function(n){return function(e){return e(Sn(n))}}(e))}}}))((function(n){var e=Object(p.b)().enqueueSnackbar,t=Object(i.useState)(!1),r=Object(j.a)(t,2),c=r[0],o=r[1],f=Object(i.useState)(kn),w=Object(j.a)(f,2),y=w[0],S=w[1],k=Object(i.useState)(!1),D=Object(j.a)(k,2),E=D[0],Q=D[1];Object(i.useEffect)((function(){E||S({id:1,question:"",respondent:[{id:0,optionValue:"0",answer:""}],allowNone:!1,shuffleOrder:!1}),c||Q(!1)}),[E,c]);var I=function(){var t=Object(d.a)(s.a.mark((function t(a,i){var r,c,d,j;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!N()){t.next=3;break}return t.abrupt("return",e("Please fill the empty field",{variant:"error"}));case 3:return a?(r=Object(u.a)(n.questionData),c=n.questionData.findIndex((function(n){return n.id===i})),r[c]=y,n.setQuestionList(r)):(d=Object(l.a)({},y),j=n.questionData.length+1,d.id=j.toString(),n.addNewQuestion(d)),t.next=6,e("Question ".concat(a?"updated":"added"," !"),{variant:"success"});case 6:o(!1);case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),N=function(){return""===y.question||y.respondent.some((function(n){return""===n.answer}))};return Object(a.jsxs)(pn,{children:[Object(a.jsxs)(wn,{container:!0,justify:"space-between",children:[Object(a.jsx)(O.a,{item:!0,children:Object(a.jsx)(hn,{variant:"h5",children:"Question Survey"})}),Object(a.jsx)(O.a,{item:!0,children:Object(a.jsx)(xn,{onClick:function(){o(!0)},variant:"contained",startIcon:Object(a.jsx)(gn,{}),children:"Add Question"})})]}),Object(a.jsx)(tn,{handleClose:function(){o(!1)},handleChangeRespondent:function(n){return function(e){var t=y.respondent;t[n][e.target.name]=e.target.value,S(Object(l.a)(Object(l.a)({},y),{},{respondent:Object(u.a)(t)}))}},handleDeleteRespondentItem:function(n,e){if(1!==n.length){var t=y.respondent.filter((function(n){return n.id!==e}));return S(Object(l.a)(Object(l.a)({},y),{},{respondent:t}))}},handleEnterAnswerOption:function(){var n={id:(new Date).getTime(),optionValue:"0",answer:""},e=[].concat(Object(u.a)(y.respondent),[n]);S(Object(l.a)(Object(l.a)({},y),{},{respondent:e}))},handleOnchange:function(n){return function(e){var t=e.target,a=t.name,i=t.value,r=t.checked,c=void 0!==r&&r,o=Object(l.a)({},y);o[a]=n?c:i,S(o)}},handleSave:I,isEditMode:E,isOpen:c,questItem:y}),0===n.questionData.length&&Object(a.jsxs)(On,{children:[Object(a.jsx)("img",{src:"https://assets.getcraft.com/images/asset-q2-2018/not-found-icon.svg",alt:"empty"}),Object(a.jsx)("p",{children:"Question box is empty"})]}),Object(a.jsx)("div",{children:Object(a.jsx)(b.a,{onDragEnd:function(e){if(e.destination){var t=function(n,e,t){var a=Array.from(n),i=a.splice(e,1),r=Object(j.a)(i,1)[0];return a.splice(t,0,r),a}(n.questionData,e.source.index,e.destination.index);n.setQuestionList(t)}},children:Object(a.jsx)(b.c,{droppableId:"droppable",children:function(t,i){return Object(a.jsx)(g.a,{rootRef:t.innerRef,children:Object(a.jsx)(h.a,{children:n.questionData.map((function(t,i){return Object(a.jsx)(b.b,{draggableId:t.id,index:i,children:function(r,c){return Object(a.jsxs)(x.a,Object(l.a)(Object(l.a)(Object(l.a)({alignItems:"center",ContainerComponent:"li",divider:!0,ContainerProps:{ref:r.innerRef}},r.draggableProps),r.dragHandleProps),{},{style:(s=c.isDragging,d=r.draggableProps.style,Object(l.a)(Object(l.a)({},d),s&&{background:"rgb(235,235,235)"})),children:[Object(a.jsx)(mn,{children:Object(a.jsx)("div",{children:"Question #".concat(i+1)})}),Object(a.jsx)(v.a,{primary:t.question,secondary:t.order}),Object(a.jsxs)(m.a,{children:[Object(a.jsx)(vn,{onClick:function(){return function(n){S(n),Q(!0),o(!0)}(t)},children:Object(a.jsx)(q.a,{})}),Object(a.jsx)(vn,{onClick:function(){return function(t){var a=n.questionData.filter((function(n){return n.id!==t}));n.setQuestionList(a),e("Question deleted successfully !",{variant:"success"})}(t.id)},children:Object(a.jsx)(C.a,{})})]})]}));var s,d}},t.id)}))})})}})})})]})}));var En=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(Dn,{})})})},Qn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,181)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))},In=t(25),Nn=t(83),Pn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{questions:[]},e=arguments.length>1?arguments[1]:void 0,t=e.type,a=e.payload;switch(t){case qn:return Object(l.a)(Object(l.a)({},n),{},{questions:[].concat(Object(u.a)(n.questions),[a])});case yn:return Object(l.a)(Object(l.a)({},n),{},{questions:a});default:return n}},Tn=Object(In.c)({questionList:Pn}),Ln="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||In.d,Rn=Object(In.e)(Tn,Ln(Object(In.a)(Nn.a)));c.a.render(Object(a.jsx)(f.a,{store:Rn,children:Object(a.jsx)(p.a,{maxSnack:3,anchorOrigin:{horizontal:"right",vertical:"top"},children:Object(a.jsx)(En,{})})}),document.getElementById("root")),Qn()}},[[110,1,2]]]);
//# sourceMappingURL=main.4759b74f.chunk.js.map
(this.webpackJsonpgitissues=this.webpackJsonpgitissues||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var i=s(3),n=s(1),c=s(11),r=s.n(c),a=s(13),u=s(14),o=s(18),l=s(17),h=s(9),d=(s(36),function(e){return Object(i.jsx)("div",{className:"loadMoreBtn",onClick:e.onClick,children:Object(i.jsx)("p",{children:e.text})})}),j=(s(37),function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={issues:[],isLoading:!1,error:null,currentIssues:5,activeIssue:null},i.loadMore=i.loadMore.bind(Object(h.a)(i)),i.onClickHighlight=i.onClickHighlight.bind(Object(h.a)(i)),i}return Object(u.a)(s,[{key:"onClickHighlight",value:function(e){if(e===this.state.activeIssue)this.setState({activeIssue:null});else{var t=this.state.issues.find((function(t){return t.id===e}));this.props.onAddIssue({Id:t.id,Title:t.title}),this.setState({activeIssue:e})}}},{key:"loadMore",value:function(){this.setState((function(e){return{currentIssues:e.currentIssues+5}}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://api.github.com/repos/rails/rails/issues?page=1").then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong...")})).then((function(t){e.setState({issues:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.issues,n=t.isLoading,c=t.error;return c?Object(i.jsx)("p",{children:c.message}):n?Object(i.jsx)("p",{children:"Loading ..."}):Object(i.jsxs)("div",{children:[Object(i.jsx)("ul",{children:s.slice(0,this.state.currentIssues).map((function(t){return Object(i.jsxs)("li",{className:"segmentsList".concat(e.state.activeIssue===t.id?"Selected":""),onClick:function(){e.onClickHighlight(t.id)},children:[Object(i.jsxs)("p",{children:["ID: ",t.id," "]}),Object(i.jsxs)("p",{children:["Title: ",t.title]})]},t.objectID)}))}),this.state.currentIssues<=this.state.issues.length&&Object(i.jsx)(d,{text:"Next",onClick:this.loadMore})]})}}]),s}(n.Component)),b=s(28),f=(s(38),function(e){var t=Object(n.useState)(!1),s=Object(b.a)(t,2),c=s[0],r=s[1];return Object(i.jsxs)("div",{className:"notification",children:[Object(i.jsxs)("div",{className:"notification-header",children:[Object(i.jsx)("h2",{children:"Github Issues"}),Object(i.jsxs)("div",{className:"notification-button",onClick:function(){return r(!c)},children:[Object(i.jsx)("i",{class:"fas fa-bell fa-3x"}),e.listIssue.length>0&&Object(i.jsx)("span",{className:"notification-count",children:e.listIssue.length})]})]}),Object(i.jsx)("div",{className:!c&&"hidden",children:Object(i.jsx)("div",{className:"show",children:e.listIssue.map((function(e){return Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[e.Id,": ",e.Title]})})}))})})]})}),O=s(16),g="ADD_ISSUE",p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(f,{onClick:this.notification,listIssue:this.props.highlighted})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Github Issues Lists:"}),Object(i.jsx)(j,{onAddIssue:function(t){return e.props.onAddIssue(t)}})]})]})}}]),s}(n.Component),v=Object(O.b)((function(e){return{highlighted:e.issue?e.issue.highlighted:[]}}),(function(e){return{onAddIssue:function(t){e(function(e){return{type:g,issue:e}}(t))}}}))(p),x=s(8),I=s.n(x),k=s(19),m=I.a.mark(C),w=I.a.mark(S);function C(e){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("this is addIssue",1);case 2:case"end":return e.stop()}}),m)}function S(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.b)(g,C);case 2:case"end":return e.stop()}}),w)}var y=I.a.mark(N);function N(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([S()]);case 2:case"end":return e.stop()}}),y)}var L=s(7),A=s(27),M=s.n(A),D=s(24),H=s(29),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log(e,t),t.type){case g:var s=[];return Array.isArray(e.highlighted)&&(s=Object(H.a)(e.highlighted)),s.push(t.issue),Object(D.a)(Object(D.a)({},e),{},{highlighted:s});default:return{highlighted:[]}}},E=Object(L.c)({issue:T}),G=s(30),J=Object(G.a)(),q=Object(L.e)(E,Object(L.a)(J,M.a));r.a.render(Object(i.jsx)(O.a,{store:q,children:Object(i.jsx)(v,{})}),document.querySelector("#root")),J.run(N)}},[[45,1,2]]]);
//# sourceMappingURL=main.068d675b.chunk.js.map
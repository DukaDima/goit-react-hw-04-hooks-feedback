(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{1:function(e,t,c){e.exports={statistics:"FeedbackWidget_statistics__1haNo",text:"FeedbackWidget_text__2p9_p",button:"FeedbackWidget_button__3L8e7",title:"FeedbackWidget_title__3f35Z",FeedbackTitle:"FeedbackWidget_FeedbackTitle__3e0QU",message:"FeedbackWidget_message__3_PP9",notification:"FeedbackWidget_notification__3H0nd",widget:"FeedbackWidget_widget__2vTOU"}},11:function(e,t,c){},12:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(6),i=c.n(s),o=(c(11),c(12),c(4)),d=c(3),r=c.n(d),b=c(1),j=c.n(b),l=c(0),u=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{className:j.a.button,type:"button",onClick:c,children:t})})},g=function(e){var t=e.good,c=e.neutral,a=e.bad,n=e.total,s=e.positivePercentage;return Object(l.jsxs)("div",{className:j.a.statistics,children:[Object(l.jsxs)("p",{className:j.a.text,children:["Good:",t]}),Object(l.jsxs)("p",{className:j.a.text,children:["Neutral:",c]}),Object(l.jsxs)("p",{className:j.a.text,children:["Bad:",a]}),Object(l.jsxs)("p",{className:j.a.text,children:["Total: ",n]}),Object(l.jsxs)("p",{className:j.a.text,children:["Positive feedback: ",s||0," %"]})]})},x=function(e){var t=e.title,c=e.children;return Object(l.jsxs)("div",{className:j.a.FeedbackTitle,children:[Object(l.jsx)("h2",{className:j.a.title,children:t}),c]})},h=function(e){var t=e.message;return Object(l.jsx)("div",{className:j.a.notification,children:Object(l.jsx)("p",{className:j.a.message,children:t})})};function O(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),i=Object(o.a)(s,2),d=i[0],r=i[1],b=Object(a.useState)(0),O=Object(o.a)(b,2),f=O[0],k=O[1],_=c+d+f,m=Math.round(c/_*100);return Object(l.jsxs)("div",{className:j.a.widget,children:[Object(l.jsx)("h1",{children:"Feedback Widget "}),Object(l.jsxs)(x,{title:"Please leave  feedback",children:[Object(l.jsx)(u,{options:"good",onLeaveFeedback:function(){n((function(e){return e+1}))}}),Object(l.jsx)(u,{options:"neutral",onLeaveFeedback:function(){r((function(e){return e+1}))}}),Object(l.jsx)(u,{options:"bad",onLeaveFeedback:function(){k((function(e){return e+1}))}})]}),Object(l.jsx)(x,{title:"Statistics",children:0!==_?Object(l.jsx)(g,{good:c,neutral:d,bad:f,total:_,positivePercentage:m}):Object(l.jsx)(h,{message:"No feedback given"})})]})}function f(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{})})}u.propTypes={good:r.a.number,neutral:r.a.number,bad:r.a.number,onLeaveFeedback:r.a.func.isRequired};var k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.2a9d1670.chunk.js.map
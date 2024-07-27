"use strict";(self.webpackChunkelcengine=self.webpackChunkelcengine||[]).push([[3983],{7334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=n(4848),i=n(8453);const a={sidebar_position:6},o="Maximum",u={id:"querybuilder/update-operations/maximum",title:"Maximum",description:"The Max method can be chained to a query to update the value of a field if the new value is greater than the current value.",source:"@site/docs/querybuilder/update-operations/maximum.md",sourceDirName:"querybuilder/update-operations",slug:"/querybuilder/update-operations/maximum",permalink:"/docs/querybuilder/update-operations/maximum",draft:!1,unlisted:!1,editUrl:"https://github.com/elcengine/elcengine.github.io/tree/main/docs/docs/querybuilder/update-operations/maximum.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docSidebar",previous:{title:"Minimum",permalink:"/docs/querybuilder/update-operations/minimum"},next:{title:"Current Date",permalink:"/docs/querybuilder/update-operations/current-date"}},s={},d=[{value:"Usage",id:"usage",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"maximum",children:"Maximum"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Max"})," method can be chained to a query to update the value of a field if the new value is greater than the current value."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'result := WitcherModel.Where("name", "Vesemir").Max("age", 201).Exec().(*mongo.UpdateResult)\n'})}),"\n",(0,r.jsx)(t.p,{children:"In the example above, we are updating the age of the witcher named Vesemir to 201 if the current age is less than 201."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>u});var r=n(6540);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
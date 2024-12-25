"use strict";(self.webpackChunkelcengine=self.webpackChunkelcengine||[]).push([[1538],{4849:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=i(4848),s=i(8453);const r={sidebar_position:14},o="Is DB Pointer",c={id:"querybuilder/type-checks/is-db-pointer",title:"Is DB Pointer",description:"The IsDBPointer method is chained to the Where method and is used to filter the results of a query to only include documents where the specified field is a db pointer.",source:"@site/docs/querybuilder/type-checks/is-db-pointer.md",sourceDirName:"querybuilder/type-checks",slug:"/querybuilder/type-checks/is-db-pointer",permalink:"/docs/querybuilder/type-checks/is-db-pointer",draft:!1,unlisted:!1,editUrl:"https://github.com/elcengine/elcengine.github.io/tree/main/docs/docs/querybuilder/type-checks/is-db-pointer.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"docSidebar",previous:{title:"Is Regex",permalink:"/docs/querybuilder/type-checks/is-regex"},next:{title:"Is Symbol",permalink:"/docs/querybuilder/type-checks/is-symbol"}},d={},l=[{value:"Usage",id:"usage",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"is-db-pointer",children:"Is DB Pointer"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"IsDBPointer"})," method is chained to the ",(0,n.jsx)(t.code,{children:"Where"})," method and is used to filter the results of a query to only include documents where the specified field is a db pointer."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'witchers := WitcherModel.Where("enemies").IsDBPointer().Exec().([]Witcher)\n'})}),"\n",(0,n.jsx)(t.p,{children:"In the example above, we are filtering the results to only include witchers whose enemies field is a db pointer."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var n=i(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
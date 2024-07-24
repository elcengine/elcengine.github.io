"use strict";(self.webpackChunkelcengine=self.webpackChunkelcengine||[]).push([[7303],{3748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(4848),s=t(8453);const o={sidebar_position:1},r="Single Data Source",i={id:"transactions/single-data-source",title:"Single Data Source",description:"Elemental provides a more user friendly interface for using database transactions compared to the driver by taking care of session management.",source:"@site/docs/transactions/single-data-source.md",sourceDirName:"transactions",slug:"/transactions/single-data-source",permalink:"/docs/transactions/single-data-source",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/transactions/single-data-source.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Transactions",permalink:"/docs/category/transactions"},next:{title:"Multiple Data Sources",permalink:"/docs/transactions/multiple-data-source"}},c={},l=[{value:"Transaction",id:"transaction",level:2},{value:"Client Transaction",id:"client-transaction",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"single-data-source",children:"Single Data Source"}),"\n",(0,a.jsx)(n.p,{children:"Elemental provides a more user friendly interface for using database transactions compared to the driver by taking care of session management."}),"\n",(0,a.jsx)(n.p,{children:"These are standard operations that can be performed on a single data source."}),"\n",(0,a.jsx)(n.h2,{id:"transaction",children:"Transaction"}),"\n",(0,a.jsxs)(n.p,{children:["The simplest method to perform a transaction is to call upon ",(0,a.jsx)(n.code,{children:"elemental.Transaction"})," and pass in a function that will be executed within the transaction."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"elemental.Transaction(func(ctx mongo.SessionContext) (interface{}, error) {\n    // Your transaction code here\n})\n"})}),"\n",(0,a.jsx)(n.h2,{id:"client-transaction",children:"Client Transaction"}),"\n",(0,a.jsxs)(n.p,{children:["If you need to perform a transaction on a specific connection, you can call upon ",(0,a.jsx)(n.code,{children:"elemental.ClientTransaction"})," and pass in the function that will be executed along with the connection alias."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'elemental.ClientTransaction("my-connection", func(ctx mongo.SessionContext) (interface{}, error) {\n    // Your transaction code here\n})\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(6540);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
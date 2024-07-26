"use strict";(self.webpackChunkelcengine=self.webpackChunkelcengine||[]).push([[4092],{817:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=t(4848),s=t(8453);const c={sidebar_position:21},r="Select",l={id:"querybuilder/select",title:"Select",description:"The Select method is used to specify which fields to include in the results.",source:"@site/docs/querybuilder/select.md",sourceDirName:"querybuilder",slug:"/querybuilder/select",permalink:"/docs/querybuilder/select",draft:!1,unlisted:!1,editUrl:"https://github.com/elcengine/elcengine.github.io/tree/main/docs/docs/querybuilder/select.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"docSidebar",previous:{title:"Push",permalink:"/docs/querybuilder/update-operations/push"},next:{title:"Skip",permalink:"/docs/querybuilder/skip"}},a={},d=[{value:"Usage",id:"usage",level:2},{value:"Usage with a string input",id:"usage-with-a-string-input",level:2},{value:"Usage with a map input",id:"usage-with-a-map-input",level:2},{value:"Usage with a slice input",id:"usage-with-a-slice-input",level:2}];function o(e){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"select",children:"Select"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"Select"})," method is used to specify which fields to include in the results."]}),"\n",(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'witchers := WitcherModel.Find().Select("name", "age").Exec().([]Witcher)\n'})}),"\n",(0,n.jsxs)(i.p,{children:["In the example above, we are selecting only the ",(0,n.jsx)(i.code,{children:"name"})," and ",(0,n.jsx)(i.code,{children:"age"})," fields from the ",(0,n.jsx)(i.code,{children:"Witcher"})," documents."]}),"\n",(0,n.jsx)(i.h2,{id:"usage-with-a-string-input",children:"Usage with a string input"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'witchers := WitcherModel.Find().Select("name age").Exec().([]Witcher)\n'})}),"\n",(0,n.jsx)(i.h2,{id:"usage-with-a-map-input",children:"Usage with a map input"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'witchers := WitcherModel.Find().Select(primitive.M{\n    "name": 1,\n    "age":  1,\n}).Exec().([]Witcher)\n'})}),"\n",(0,n.jsx)(i.h2,{id:"usage-with-a-slice-input",children:"Usage with a slice input"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'witchers := WitcherModel.Find().Select([]string{"name", "age"}).Exec().([]Witcher)\n'})})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var n=t(6540);const s={},c=n.createContext(s);function r(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);
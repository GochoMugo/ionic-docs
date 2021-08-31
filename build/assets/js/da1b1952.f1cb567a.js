(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[88970],{16239:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n=i(22122),o=i(19756),r=i(86010),a=i(67294),s="docsButton_2Emz",c="docsButtonRound_3i9G";function l(e){var t,i=e.href,l=e.round,u=void 0!==l&&l,d=(0,o.Z)(e,["href","round"]);return d.className=(0,r.Z)(((t={})[d.className]=Boolean(d.className),t[s]=!0,t["docs-button"]=!0,t[c]=u,t["docs-button--round"]=u,t)),i?a.createElement("a",(0,n.Z)({href:i,className:"docsButton"},d),d.children):a.createElement("button",(0,n.Z)({className:"docsButton"},d),d.children)}},66107:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return g}});var n=i(22122),o=i(19756),r=(i(67294),i(3905)),a=i(28312),s=i(16239),c=i(41395),l=i(58215),u=i(81840),d={title:"Metrix"},p={unversionedId:"native/plugins/metrix",id:"native/plugins/metrix",isDocsHomePage:!1,title:"Metrix",description:"This is the Ionic Cordova SDK of Metrix\u2122. You can read more about Metrix\u2122 at metrix.ir.",source:"@site/docs/native/plugins/metrix.md",sourceDirName:"native/plugins",slug:"/native/plugins/metrix",permalink:"/docs/native/plugins/metrix",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/metrix.md",version:"current",frontMatter:{title:"Metrix"},sidebar:"native",previous:{title:"Media",permalink:"/docs/native/plugins/media"},next:{title:"Mixpanel",permalink:"/docs/native/plugins/mixpanel"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],v={toc:m};function g(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the Ionic Cordova SDK of Metrix\u2122. You can read more about Metrix\u2122 at metrix.ir."),(0,r.kt)("p",null,"Requires Cordova plugin: ",(0,r.kt)("inlineCode",{parentName:"p"},"ir.metrix.sdk"),". For more info, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metrixorg/MetrixSDK-CordovaPlugin"},"Metrix Cordova SDK")),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/metrixorg/MetrixSDK-CordovaPlugin",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/metrixorg/MetrixSDK-CordovaPlugin")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(a.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(c.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install ir.metrix.sdk ","\n","$ npm install @ionic-native/metrix ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add ir.metrix.sdk ","\n","$ npm install @ionic-native/metrix ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," import { Metrix, MetrixConfig } from '@ionic-native/metrix';\n\n constructor(private metrix: Metrix) { }\n\n ...\n\n const config = new MetrixConfig('APP-ID-HERE');\n // Set other config properties.\n metrix.create(config);\n\n")))}g.isMDXComponent=!0}}]);
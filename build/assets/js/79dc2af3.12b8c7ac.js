(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[42989],{47147:function(n,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return b},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=e(22122),o=e(19756),i=(e(67294),e(3905)),l=e(41395),r=e(58215),b={title:"ion-tabs",demoUrl:"/docs/demos/api/tabs/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/tabs/index.html"},p={unversionedId:"api/tabs",id:"api/tabs",isDocsHomePage:!1,title:"ion-tabs",description:"Tabs are a top level navigation component to implement a tab-based navigation.",source:"@site/docs/api/tabs.md",sourceDirName:"api",slug:"/api/tabs",permalink:"/docs/api/tabs",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/api/tabs.md",version:"current",frontMatter:{title:"ion-tabs",demoUrl:"/docs/demos/api/tabs/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/tabs/index.html"},sidebar:"api",previous:{title:"ion-slide",permalink:"/docs/api/slide"},next:{title:"ion-tab",permalink:"/docs/api/tab"}},s=[{value:"Usage",id:"usage",children:[{value:"Router integration",id:"router-integration",children:[]},{value:"Activating Tabs",id:"activating-tabs",children:[]},{value:"Router integration",id:"router-integration-1",children:[]},{value:"Activating Tabs",id:"activating-tabs-1",children:[]},{value:"Router integration",id:"router-integration-2",children:[]}]},{value:"Events",id:"events",children:[]},{value:"Methods",id:"methods",children:[{value:"getSelected",id:"getselected",children:[]},{value:"getTab",id:"gettab",children:[]},{value:"select",id:"select",children:[]}]},{value:"Slots",id:"slots",children:[]}],d={toc:s};function m(n){var t=n.components,e=(0,o.Z)(n,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tabs are a top level navigation component to implement a tab-based navigation.\nThe component is a container of individual ",(0,i.kt)("a",{parentName:"p",href:"../tab/"},"Tab")," components."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs")," component does not have any styling and works as a router outlet in order to handle navigation. It does not provide any UI feedback or mechanism to switch between tabs. In order to do so, an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-bar")," should be provided as a direct child of ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs"),"."),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-bar")," can be used as standalone elements. They don\u2019t depend on each other to work, but they are usually used together in order to implement a tab-based navigation that behaves like a native app."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-bar")," needs a slot defined in order to be projected to the right place in an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs")," component."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(l.Z,{defaultValue:"angular",values:[{value:"angular",label:"ANGULAR"},{value:"javascript",label:"JAVASCRIPT"},{value:"react",label:"REACT"},{value:"stencil",label:"STENCIL"},{value:"vue",label:"VUE"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="schedule">\n      <ion-icon name="calendar"></ion-icon>\n      <ion-label>Schedule</ion-label>\n      <ion-badge>6</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab="speakers">\n      <ion-icon name="person-circle"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="map">\n      <ion-icon name="map"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="about">\n      <ion-icon name="information-circle"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n')),(0,i.kt)("h3",{id:"router-integration"},"Router integration"),(0,i.kt)("p",null,"When used with Angular's router the ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," should be a reference to the route path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="schedule">\n      <ion-icon name="calendar"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Routes } from '@angular/router';\nimport { TabsPage } from './tabs-page';\n\nconst routes: Routes = [\n  {\n    path: 'tabs',\n    component: TabsPage,\n    children: [\n      {\n        path: 'schedule',\n        children: [\n          {\n            path: '',\n            loadChildren: '../schedule/schedule.module#ScheduleModule'\n          }\n        ]\n      },\n      {\n        path: '',\n        redirectTo: '/app/tabs/schedule',\n        pathMatch: 'full'\n      }\n    ]\n  }\n];\n"))),(0,i.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n\n  <ion-tab tab="tab-schedule">\n    <ion-nav></ion-nav>\n  </ion-tab>\n\n  <ion-tab tab="tab-speaker">\n    <ion-nav></ion-nav>\n  </ion-tab>\n\n  <ion-tab tab="tab-map" component="page-map">\n    <ion-nav></ion-nav>\n  </ion-tab>\n\n  <ion-tab tab="tab-about" component="page-about">\n    <ion-nav></ion-nav>\n  </ion-tab>\n\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="tab-schedule">\n      <ion-icon name="calendar"></ion-icon>\n      <ion-label>Schedule</ion-label>\n      <ion-badge>6</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab="tab-speaker">\n      <ion-icon name="person-circle"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="tab-map">\n      <ion-icon name="map"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="tab-about">\n      <ion-icon name="information-circle"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n')),(0,i.kt)("h3",{id:"activating-tabs"},"Activating Tabs"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," will activate one of the tabs when pressed. In order to link the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab")," container, a matching ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property should be set on each component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tab tab="settings">\n  ...\n</ion-tab>\n\n<ion-tab-button tab="settings">\n  ...\n</ion-tab-button>\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab")," above are linked by the common ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property identifies each tab, and it has to be unique within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs"),". It's important to always set the ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button"),", even if one component is not used."),(0,i.kt)("h3",{id:"router-integration-1"},"Router integration"),(0,i.kt)("p",null,"When used with Ionic's router (",(0,i.kt)("inlineCode",{parentName:"p"},"ion-router"),") the ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab")," matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"component")," property of an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-route"),"."),(0,i.kt)("p",null,"The following route within the scope of an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs")," outlet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-route url="/settings-page" component="settings"></ion-route>\n')),(0,i.kt)("p",null,"will match the following tab:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tab tab="settings" component="settings-component"></ion-tab>\n'))),(0,i.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from \'@ionic/react\';\nimport { calendar, personCircle, map, informationCircle } from \'ionicons/icons\';\n\n\nexport const TabsExample: React.FC = () => (\n  <IonTabs>\n    <IonTabBar slot="bottom">\n      <IonTabButton tab="schedule">\n        <IonIcon icon={calendar} />\n        <IonLabel>Schedule</IonLabel>\n        <IonBadge>6</IonBadge>\n      </IonTabButton>\n\n      <IonTabButton tab="speakers">\n        <IonIcon icon={personCircle} />\n        <IonLabel>Speakers</IonLabel>\n      </IonTabButton>\n\n      <IonTabButton tab="map">\n        <IonIcon icon={map} />\n        <IonLabel>Map</IonLabel>\n      </IonTabButton>\n\n      <IonTabButton tab="about">\n        <IonIcon icon={informationCircle} />\n        <IonLabel>About</IonLabel>\n      </IonTabButton>\n    </IonTabBar>\n  </IonTabs>\n);\n'))),(0,i.kt)(r.Z,{value:"stencil",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'tabs-example\',\n  styleUrl: \'tabs-example.css\'\n})\nexport class TabsExample {\n  render() {\n    return [\n     <ion-tabs>\n      <ion-tab tab="tab-schedule">\n        <ion-nav></ion-nav>\n      </ion-tab>\n\n      <ion-tab tab="tab-speaker">\n        <ion-nav></ion-nav>\n      </ion-tab>\n\n      <ion-tab tab="tab-map" component="page-map">\n        <ion-nav></ion-nav>\n      </ion-tab>\n\n      <ion-tab tab="tab-about" component="page-about">\n        <ion-nav></ion-nav>\n      </ion-tab>\n\n      <ion-tab-bar slot="bottom">\n        <ion-tab-button tab="tab-schedule">\n          <ion-icon name="calendar"></ion-icon>\n          <ion-label>Schedule</ion-label>\n          <ion-badge>6</ion-badge>\n        </ion-tab-button>\n\n        <ion-tab-button tab="tab-speaker">\n          <ion-icon name="person-circle"></ion-icon>\n          <ion-label>Speakers</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab="tab-map">\n          <ion-icon name="map"></ion-icon>\n          <ion-label>Map</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab="tab-about">\n          <ion-icon name="information-circle"></ion-icon>\n          <ion-label>About</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n\n    </ion-tabs>\n    ];\n  }\n}\n')),(0,i.kt)("h3",{id:"activating-tabs-1"},"Activating Tabs"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," will activate one of the tabs when pressed. In order to link the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab")," container, a matching ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property should be set on each component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<ion-tab tab="settings">\n  ...\n</ion-tab>\n\n<ion-tab-button tab="settings">\n  ...\n</ion-tab-button>\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab")," above are linked by the common ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property identifies each tab, and it has to be unique within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs"),". It's important to always set the ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button"),", even if one component is not used."),(0,i.kt)("h3",{id:"router-integration-2"},"Router integration"),(0,i.kt)("p",null,"When used with Ionic's router (",(0,i.kt)("inlineCode",{parentName:"p"},"ion-router"),") the ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab")," matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"component")," property of an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-route"),"."),(0,i.kt)("p",null,"The following route within the scope of an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs")," outlet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<ion-route url="/settings-page" component="settings"></ion-route>\n')),(0,i.kt)("p",null,"will match the following tab:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<ion-tab tab="settings" component="settings-component"></ion-tab>\n'))),(0,i.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tabs.vue")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-page>\n    <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">\n      <ion-tab-bar slot="bottom">\n        <ion-tab-button tab="schedule" href="/tabs/schedule">\n          <ion-icon :icon="calendar"></ion-icon>\n          <ion-label>Schedule</ion-label>\n          <ion-badge>6</ion-badge>\n        </ion-tab-button>\n  \n        <ion-tab-button tab="speakers" href="/tabs/speakers">\n          <ion-icon :icon="personCircle"></ion-icon>\n          <ion-label>Speakers</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-page>\n</template>\n\n<script>\nimport { defineComponent } from \'vue\';\nimport { \n  IonIcon, \n  IonLabel, \n  IonPage,\n  IonTabBar, \n  IonTabButton, \n  IonTabs\n} from \'@ionic/vue\';\nimport { calendar, personCircle } from \'ionicons/icons\';\n\nexport default defineComponent({\n  components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs },\n  setup() {\n    const beforeTabChange = () => {\n      // do something before tab change\n    }\n    const afterTabChange = () => {\n      // do something after tab change\n    }\n    return {\n      calendar,\n      personCircle,\n      beforeTabChange,\n      afterTabChange\n    }\n  }\n});\n<\/script>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Schedule.vue")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-page>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Schedule</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content class=\"ion-padding\">Schedule Tab</ion-content>\n  </ion-page>\n</template>\n\n<script>\nimport { defineComponent } from 'vue';\nimport {\n  IonContent,\n  IonHeader,\n  IonPage,\n  IonTitle,\n  IonToolbar\n} from '@ionic/vue';\n\nexport default defineComponent({\n  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar }\n});\n<\/script>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Speakers.vue")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-page>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Speakers</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content class=\"ion-padding\">Speakers Tab</ion-content>\n  </ion-page>\n</template>\n\n<script>\nimport { defineComponent } from 'vue';\nimport {\n  IonContent,\n  IonHeader,\n  IonPage,\n  IonTitle,\n  IonToolbar\n} from '@ionic/vue';\n\nexport default defineComponent({\n  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar }\n});\n<\/script>\n")))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ionTabsDidChange")),(0,i.kt)("td",{parentName:"tr",align:null},"Emitted when the navigation has finished transitioning to a new component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ionTabsWillChange")),(0,i.kt)("td",{parentName:"tr",align:null},"Emitted when the navigation is about to transition to a new component.")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getselected"},"getSelected"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Get the currently selected tab.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Signature")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getSelected() => Promise<string \\| undefined>"))))),(0,i.kt)("h3",{id:"gettab"},"getTab"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Get a specific tab by the value of its ",(0,i.kt)("inlineCode",{parentName:"td"},"tab")," property or an element reference.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Signature")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getTab(tab: string \\| HTMLIonTabElement) => Promise<HTMLIonTabElement \\| undefined>"))))),(0,i.kt)("h3",{id:"select"},"select"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Select a tab by the value of its ",(0,i.kt)("inlineCode",{parentName:"td"},"tab")," property or an element reference.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Signature")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"select(tab: string \\| HTMLIonTabElement) => Promise<boolean>"))))),(0,i.kt)("h2",{id:"slots"},"Slots"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"``"),(0,i.kt)("td",{parentName:"tr",align:null},"Content is placed between the named slots if provided without a slot.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bottom")),(0,i.kt)("td",{parentName:"tr",align:null},"Content is placed at the bottom of the screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"top")),(0,i.kt)("td",{parentName:"tr",align:null},"Content is placed at the top of the screen.")))))}m.isMDXComponent=!0}}]);
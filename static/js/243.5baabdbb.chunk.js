"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[243],{5243:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var s=t(5671),i=t(3144),r=t(136),a=t(8557),l=(t(7313),t(7890)),c=t(2102),o=t(3849),u=t(1616),d=t(3871),h=t(5668),v=t(3283),Z=t(2888),p=t(5033),x=t(2291),j=t(5626),f=t(6417),m=function(e){(0,r.Z)(t,e);var n=(0,a.Z)(t);function t(){return(0,s.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){return p.Z.ready?p.Z.authorized?(0,f.jsxs)("div",{className:"VillageView",children:[(0,f.jsx)("h2",{className:"VillageName",children:"\u062e\u0631\u064a\u0637\u0629"}),(0,f.jsx)(c.Z,{children:(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(u.Z,{children:(0,f.jsx)("div",{children:(0,f.jsx)("svg",{viewBox:"0 0 300 264",className:"feilds",children:(0,f.jsx)(g,{})})})}),(0,f.jsxs)(u.Z,{children:[(0,f.jsx)("div",{className:"movements"}),(0,f.jsx)("div",{className:"productions"}),(0,f.jsx)("div",{className:"troops"})]})]})})]}):(0,f.jsx)(l.Fg,{to:"/Home"}):(0,f.jsx)(f.Fragment,{})}}]),t}(Z.Z),g=function(e){(0,r.Z)(t,e);var n=(0,a.Z)(t);function t(){var e;(0,s.Z)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).state={Content:[]},e}return(0,i.Z)(t,[{key:"onReady",value:function(){var e=this;p.Z.village((function(n){if(n){var t=[],s=n.id,i=n.buildings;t.push((0,f.jsx)("image",{xlinkHref:j.Z.village[n.type]},"FeildsBackground"));for(var r=1;r<=18;r++)t.push(x.Z.FromResponse(i[r-1],s).LinkComponent);t.push((0,f.jsx)(v.Link,{to:"/Center",children:(0,f.jsx)(d.Z,{placement:"top",overlay:(0,f.jsx)(h.Z,{id:"center-tooltip",children:"\u0645\u0631\u0643\u0632 \u0627\u0644\u0642\u0631\u064a\u0629"}),children:(0,f.jsx)("path",{opacity:0,d:"M122 108 148 105 169 108 182 120 184 133 181 143 170 152 160 155 141 157 130 157 114 153 106 145 102 134 104 124 110 115Z"})})},"Center-Building")),e.updateState({Content:t})}}))}},{key:"render",value:function(){return this.state.Content}}]),t}(Z.Z),k=m}}]);
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[903],{3323:function(e,s,r){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=new URLSearchParams(window.location.search).get(e);return r?parseInt(i)||s:i||s}r.d(s,{Z:function(){return i}})},8959:function(e,s){var r=[4,5,5,4,3,3,4,3,1],i=[4,4,3,5,5,4,3,3,1],n=[4,3,4,3,4,5,5,3,1],d=[6,6,6,6,6,6,6,9,15];s.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return[r[e],i[e],n[e],d[e]]}},5903:function(e,s,r){r.r(s),r.d(s,{default:function(){return y}});var i=r(5671),n=r(3144),d=r(136),l=r(8557),t=r(2102),a=r(3849),c=r(1616),h=r(9466),j=r(5033),x=r(466),o=r(7030),u=r(5626),p=r(2888),m=r(3983),v=r(8959),g=r(3323),f=r(6417),b=function(e){(0,d.Z)(r,e);var s=(0,l.Z)(r);function r(){var e;(0,i.Z)(this,r);for(var n=arguments.length,d=new Array(n),l=0;l<n;l++)d[l]=arguments[l];return(e=s.call.apply(s,[this].concat(d))).id=(0,g.Z)("id",j.Z.activeVillageId||1,!0),e.land=new o.Pw,e.capital=(0,f.jsx)(f.Fragment,{}),e.infoTable=(0,f.jsx)(f.Fragment,{}),e.oasisTable=(0,f.jsx)(f.Fragment,{}),e.reportsTable=(0,f.jsx)(f.Fragment,{}),e.imageSource="",e.state={ready:!1},e}return(0,n.Z)(r,[{key:"renderInfoTable",value:function(e){var s=e.playerId>0,r=!e.isVillage,i=e.type,n=(0,f.jsx)(f.Fragment,{}),d=(0,f.jsx)(f.Fragment,{});r&&s||(n=(0,f.jsx)("thead",{children:(0,f.jsx)("tr",{children:(0,f.jsxs)("th",{colSpan:!r&&s?1:3,children:[r?"\u0627\u0644\u0648\u062d\u062f\u0627\u062a":s?"\u0645\u0639\u0644\u0648\u0645\u0627\u062a":"\u062a\u0648\u0632\u064a\u0639 \u0627\u0644\u0623\u0631\u0627\u0636\u064a",":"]})})}));var l=(0,f.jsx)(f.Fragment,{}),t=(0,f.jsx)(f.Fragment,{}),a=(0,f.jsx)(f.Fragment,{}),c=(0,f.jsx)(f.Fragment,{}),j=(0,f.jsx)(f.Fragment,{});if(s)l=(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"\u0627\u0644\u0642\u0628\u064a\u0644\u0629:"}),(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:x.m.Names[e.race]})})]}),t=(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"\u0627\u0644\u062a\u062d\u0627\u0644\u0641:"}),(0,f.jsx)("td",{children:"???"})]}),a=(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"\u0627\u0644\u0645\u0627\u0644\u0643:"}),(0,f.jsx)("td",{children:(0,f.jsx)(h.rU,{to:"/Profile?id="+e.playerId,children:e.playerName})})]}),r?c=(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"\u0627\u0644\u0642\u0631\u064a\u0629:"}),(0,f.jsx)("td",{children:(0,f.jsx)(h.rU,{to:"/View?id="+e.villageId,children:e.villageName})})]}):j=(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"\u0627\u0644\u0633\u0643\u0627\u0646:"}),(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:e.population})})]}),d=(0,f.jsxs)("tbody",{children:[l,t,a,r?c:j]});else if(r){var o=window.screen.availWidth<960,u=function(e,s){return(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[m.M.res(e),o?"":" \u0625\u0646\u062a\u0627\u062c ".concat(m.R.res[e]," ")]}),(0,f.jsxs)("td",{children:[(0,f.jsxs)("b",{children:["+%",s]})," \u0641\u064a \u0627\u0644\u0633\u0627\u0639\u0629"]})]},e)},p=[];i<4?p.push(u("r"+(i+1),"100")):i<7?p.push(u("r"+(i-3),"50"),u("r4","50")):p.push(u("r4","100")),this.oasisTable=(0,f.jsxs)("table",{className:"info oasis",children:[(0,f.jsx)("thead",{children:(0,f.jsx)("tr",{children:(0,f.jsx)("th",{colSpan:2,children:"\u0627\u0644\u0625\u0646\u062a\u0627\u062c:"})})}),(0,f.jsx)("tbody",{children:p})]})}else{var g=(0,v.Z)(i);d=(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:m.M.res("r1")}),(0,f.jsx)("td",{className:"number",children:g[0]}),(0,f.jsx)("td",{children:"\u062d\u0637\u0627\u0628"})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:m.M.res("r2")}),(0,f.jsx)("td",{className:"number",children:g[1]}),(0,f.jsx)("td",{children:"\u062d\u0641\u0631\u0629 \u0637\u064a\u0646"})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:m.M.res("r3")}),(0,f.jsx)("td",{className:"number",children:g[2]}),(0,f.jsx)("td",{children:"\u0645\u0646\u062c\u0645 \u062d\u062f\u064a\u062f"})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:m.M.res("r4")}),(0,f.jsx)("td",{className:"number",children:g[3]}),(0,f.jsx)("td",{children:"\u062d\u0642\u0644 \u0642\u0645\u062d"})]})]})}this.infoTable=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("table",{className:"info",children:[n,d]}),(0,f.jsx)("br",{}),this.oasisTable]})}},{key:"options",value:function(e){var s=[];if(e.id!==j.Z.activeVillageId){var r=e.playerId>0,i=!e.isVillage,n=e.hasRallyPoint;i?s.push((0,f.jsx)("div",{children:n?(0,f.jsx)(h.rU,{to:"#/SendTroops?id"+e.id,children:"\xbb \u0646\u0647\u0628 \u0648\u0627\u062d\u0629 \u0645\u0647\u062c\u0648\u0631\u0629"}):"\xbb \u0646\u0647\u0628 \u0648\u0627\u062d\u0629 \u0645\u0647\u062c\u0648\u0631\u0629 (\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0646\u0642\u0637\u0629 \u0627\u0644\u062a\u062c\u0645\u0639)"},"SendTroops")):r?(s.push((0,f.jsx)("div",{children:n?(0,f.jsx)(h.rU,{to:"#/SendTroops?id"+e.id,children:"\xbb \u0625\u0631\u0633\u0627\u0644 \u0642\u0648\u0627\u062a"}):"\xbb \u0625\u0631\u0633\u0627\u0644 \u0642\u0648\u0627\u062a (\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0646\u0642\u0637\u0629 \u0627\u0644\u062a\u062c\u0645\u0639)"},"SendTroops")),s.push((0,f.jsx)("div",{children:e.hasMarketPlace?(0,f.jsx)(h.rU,{to:"#/SendResources?id"+e.id,children:"\xbb \u0625\u0631\u0633\u0627\u0644 \u062a\u062c\u0627\u0631"}):"\xbb \u0625\u0631\u0633\u0627\u0644 \u062a\u062c\u0627\u0631 (\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u0633\u0648\u0642)"},"SendResources"))):s.push((0,f.jsx)("div",{children:"\xbb \u0628\u0646\u0627\u0621 \u0642\u0631\u064a\u0629 \u062c\u062f\u064a\u062f\u0629"},"SettleVillage"))}return s}},{key:"onReady",value:function(){var e=this;j.Z.viewLand(this.id).then((function(s){Object.assign(e.land,s),s.isCapital&&(e.capital=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("br",{}),(0,f.jsx)("span",{className:"capital",children:"(\u0639\u0627\u0635\u0645\u0629)"})]})),e.imageSource=u.Z[s.isVillage?"village":"oasis"][s.type],e.renderInfoTable(s),e.updateState({ready:!0})}))}},{key:"render",value:function(){if(this.state.ready){var e=this.land,s=window.screen.availWidth<960;return(0,f.jsxs)("div",{id:"ViewLand",children:[(0,f.jsxs)("h4",{className:"title",children:[(0,f.jsx)("span",{className:"VillageName",children:e.name}),"(",e.x," , ",e.y,")",this.capital]}),(0,f.jsxs)(t.Z,{children:[(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(c.Z,{children:(0,f.jsx)("img",{alt:e.isVillage?"\u0642\u0631\u064a\u0629":"\u0648\u0627\u062d\u0629",width:s?150:300,height:s?132:264,src:this.imageSource})}),(0,f.jsx)(c.Z,{children:this.infoTable})]}),(0,f.jsx)(a.Z,{children:(0,f.jsxs)(c.Z,{className:"options",children:[(0,f.jsx)("div",{children:(0,f.jsx)("b",{children:"\u062e\u064a\u0627\u0631\u0627\u062a:"})}),(0,f.jsx)("div",{children:(0,f.jsx)(h.rU,{to:"/Map?id="+e.id,children:"\xbb \u0645\u0631\u0643\u0632 \u0627\u0644\u062e\u0631\u064a\u0637\u0629"})}),this.options(e)]})})]})]})}return(0,f.jsx)(f.Fragment,{})}}]),r}(p.Z),y=b}}]);
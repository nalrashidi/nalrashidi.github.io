"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[466],{6788:function(e,n){var r={validCoordinates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e>=-50&&e<=50&&n>=-50&&n<=50},safeCoordinate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.floor(e<-50?-50:e>50?50:e)},safeId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Math.floor(e<1?1:e>10201?10201:e)},getId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.safeId(101*(e+50)+(n+50+1))},getCoordinates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.safeId(e)-1,r=Math.floor(n/101),t=Math.floor(n-101*r);return{x:r-50,y:t-50}}};n.Z=r},7466:function(e,n,r){r.r(n),r.d(n,{default:function(){return u}});var t=r(5671),d=r(3144),s=r(136),i=r(8557),l=r(2888),a=r(5033),c=r(6788),h=r(466),o=r(3283),x=r(6417),j=function(e){(0,s.Z)(r,e);var n=(0,i.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var d=arguments.length,s=new Array(d),i=0;i<d;i++)s[i]=arguments[i];return(e=n.call.apply(n,[this].concat(s))).state={name:"",rank:0,race:"",allianceId:0,allianceName:"",numberOfVillages:0,population:0,age:0,gender:0,address:"",villages:(0,x.jsx)(x.Fragment,{}),description:["",""]},e}return(0,d.Z)(r,[{key:"onReady",value:function(){var e=this;a.Z.viewProfile(parseInt(new URLSearchParams(window.location.search).get("id")||0)).then((function(n){if(e.componentIsReady){var r=n.villages.map((function(e,n){var r=e[1],t=c.Z.getCoordinates(r);return(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{children:[(0,x.jsx)(o.Link,{to:"/View?id="+r,children:e[0]}),e[2]?(0,x.jsx)("span",{className:"capital",children:"(\u0639\u0627\u0635\u0645\u0629)"}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsx)("td",{children:e[3]}),(0,x.jsx)("td",{children:(0,x.jsxs)(o.Link,{to:"/Map?id="+r,children:["(",t.x," , ",t.y,")"]})})]},n)})),t=n.gender;e.setState({name:n.name,rank:n.rank,race:h.m.Name(n.race),allianceId:n.allianceId||0,allianceName:n.allianceName||"-",numberOfVillages:n.numberOfVillages,population:n.population,age:Math.floor((new Date-new Date(n.dob).getTime())/315576e5),gender:1===t?"M":2===t?"F":"-",address:n.address||"-",villages:r,description:n.description})}}))}},{key:"render",value:function(){var e=this.state;return(0,x.jsxs)("div",{id:"Profile",children:[(0,x.jsxs)("table",{className:"player-info table_collapsed",children:[(0,x.jsx)("thead",{children:(0,x.jsx)("tr",{children:(0,x.jsx)("th",{colSpan:2,children:e.name})})}),(0,x.jsx)("tbody",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"player-data",children:(0,x.jsx)("table",{children:(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"\u0627\u0644\u0631\u062a\u0628\u0629:"}),(0,x.jsx)("td",{children:e.rank})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"\u0627\u0644\u0642\u0628\u064a\u0644\u0629:"}),(0,x.jsx)("td",{children:e.race})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"\u0627\u0644\u062a\u062d\u0627\u0644\u0641:"}),(0,x.jsx)("td",{children:"dev..."})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"\u0627\u0644\u0642\u0631\u0649:"}),(0,x.jsx)("td",{children:e.numberOfVillages})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"\u0627\u0644\u0633\u0643\u0627\u0646:"}),(0,x.jsx)("td",{children:e.population})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"\u0627\u0644\u0639\u0645\u0631:"}),(0,x.jsx)("td",{children:e.age})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"\u0627\u0644\u062c\u0646\u0633:"}),(0,x.jsx)("td",{children:e.gender})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"\u0627\u0644\u0633\u0643\u0646:"}),(0,x.jsx)("td",{children:e.address})]}),(0,x.jsx)("tr",{children:(0,x.jsxs)("td",{colSpan:2,children:[e.description[0],"Desc1"]})})]})})}),(0,x.jsxs)("td",{children:[e.description[1],"Desc2"]})]})})]}),(0,x.jsxs)("table",{className:"player-villages table_collapsed",children:[(0,x.jsx)("thead",{children:(0,x.jsx)("tr",{children:(0,x.jsx)("th",{colSpan:3,children:"\u0627\u0644\u0642\u0631\u0649"})})}),(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"\u0627\u0644\u0627\u0633\u0645"}),(0,x.jsx)("td",{children:"\u0627\u0644\u0633\u0643\u0627\u0646"}),(0,x.jsx)("td",{children:"\u0627\u0644\u0625\u062d\u062f\u0627\u062b\u064a\u0627\u062a"})]}),e.villages]})]})]})}}]),r}(l.Z),u=j}}]);
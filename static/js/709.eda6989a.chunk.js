"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[709],{6691:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var i=n(5671),r=n(3144),a=n(136),l=n(8557),s=n(2791),c=n(7022),o=n(9743),u=n(2677),d=n(3864),h=n(2576),v=n(3504),f=n(569),p=n(6371),Z=n(9585),x=n(5003),j=n(341),g=n(184),m=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).title=s.createRef(),e}return(0,r.Z)(n,[{key:"updateTitle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.title.current.textContent=e}},{key:"render",value:function(){return(0,g.jsxs)("div",{className:"VillageView",children:[(0,g.jsx)("h4",{className:"VillageName title",ref:this.title,children:p.Z.activeVillageName}),(0,g.jsx)(c.Z,{children:(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(u.Z,{children:(0,g.jsx)("div",{children:(0,g.jsx)("svg",{viewBox:"0 0 300 264",className:"feilds",children:(0,g.jsx)(y,{register:"villageView"})})})}),(0,g.jsxs)(u.Z,{children:[(0,g.jsx)("div",{className:"movements"}),(0,g.jsx)("div",{className:"productions"}),(0,g.jsx)("div",{className:"troops"})]})]})})]})}}]),n}(f.Z),y=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).name="",e.state={Content:[]},e}return(0,r.Z)(n,[{key:"onReady",value:function(){var e=this;p.Z.village((function(t){if(t){j.Z.safe("village",(function(e){return e.updateTitle(t.name)}));var n=[],i=t.id,r=t.buildings;n.push((0,g.jsx)("image",{xlinkHref:x.Z.village[t.type]},"FeildsBackground"));for(var a=1;a<=18;a++)n.push(Z.Z.FromResponse(r[a-1],i).LinkComponent);n.push((0,g.jsx)(v.rU,{to:"/Center",children:(0,g.jsx)(d.Z,{placement:"top",overlay:(0,g.jsx)(h.Z,{id:"center-tooltip",children:"\u0645\u0631\u0643\u0632 \u0627\u0644\u0642\u0631\u064a\u0629"}),children:(0,g.jsx)("path",{opacity:0,d:"M122 108 148 105 169 108 182 120 184 133 181 143 170 152 160 155 141 157 130 157 114 153 106 145 102 134 104 124 110 115Z"})})},"Center-Building")),e.updateState({Content:n})}}))}},{key:"render",value:function(){return this.state.Content}}]),n}(f.Z),k=m}}]);
//# sourceMappingURL=709.eda6989a.chunk.js.map
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[793],{6793:function(n,e,i){i.r(e),i.d(e,{default:function(){return f}});var t=i(5671),a=i(3144),r=i(136),d=i(8557),l=(i(2791),i(6871)),u=i(6371),c=i(8011),o=i(569),s=i(9585),h=i(184),v=function(n){(0,r.Z)(i,n);var e=(0,d.Z)(i);function i(){var n;(0,t.Z)(this,i);for(var a=arguments.length,r=new Array(a),d=0;d<a;d++)r[d]=arguments[d];return(n=e.call.apply(e,[this].concat(r))).state={ready:!1},n.building=null,n.id=(0,c.Z)("id",0,!0),n.valid=!isNaN(n.id)&&(n.id>0&&n.id<41),n}return(0,a.Z)(i,[{key:"onReady",value:function(){var n=this;u.Z.building(this.id).then((function(e){n.componentIsReady&&(n.building=s.Z.New(e.id,u.Z.activeVillageId,n.id,e.level),n.setState({ready:!0}))}))}},{key:"render",value:function(){return this.valid?this.state.ready?this.building.renderBuilding():(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(l.Fg,{to:"/Village"})}}]),i}(o.Z),f=v},8011:function(n,e,i){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=new URLSearchParams(window.location.search).get(n);return i?parseInt(t)||e:t||e}i.d(e,{Z:function(){return t}})}}]);
//# sourceMappingURL=793.b79564c9.chunk.js.map
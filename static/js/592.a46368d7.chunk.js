"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{7030:function(u,e,r){var t=r(3144),n=r(5671),s=(0,t.Z)((function u(e){(0,n.Z)(this,u),this.done=1===e[0],this.error=1===e[1],this.unkownError=1===e[2],this.notReady=1===e[3],this.isEnded=1===e[4],this.isFull=1===e[5],this.username_used=1===e[6],this.email_used=1===e[7],this.e_username=e[8],this.e_password=e[9],this.e_email=e[10],this.e_race=e[11]})),i=(0,t.Z)((function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(0,n.Z)(this,u),this.serverNumber=e[0],this.ready=1===e[1],this.ended=1===e[2],this.isFull=1===e[3],this.started=e[4],this.players=e[5]})),a=(0,t.Z)((function u(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(0,n.Z)(this,u),this.servers=[],r.forEach((function(u){return e.servers.push(new i(u))}))})),D=(0,t.Z)((function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(0,n.Z)(this,u),this.players=e[0],this.online=e[1],this.servers=e[2]}));e.Z={Register:s,ListServers:a,Stats:D}},2894:function(u,e,r){r.d(e,{GT:function(){return C},ro:function(){return E},Ru:function(){return F}});var t=r(5671),n=r(3144),s=r(136),i=r(8557),a=r(4978);function D(){var u=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{valid:u,result:e}}function l(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=u.length;return s<e?D(!1,t):s>r?D(!1,n):D(!0)}function o(){for(var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u062a\u0648\u062c\u062f \u0623\u062d\u0631\u0641/\u0631\u0645\u0648\u0632 \u063a\u064a\u0631 \u0635\u0627\u0644\u062d\u0629",r=u.replace(/(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDD-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6])|(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])|\u200D/gi,"$"),t=r.length,n=0;n<t;n++){var s=r.charCodeAt(n);if(!(s>31&&s<127||s>1569&&s<1596||s>1600&&s<1611))return D(!1,e)}return D(!0)}var h={safeLength:l,safeText:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,t="",n=u.replace(/(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])/g,"$"),s=n.length;if(s<e)t="\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 ".concat(e," \u0623\u062d\u0631\u0641");else if(s>r)t="\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 ".concat(r," \u062d\u0631\u0641");else for(var i=0;i<s;i++){var a=n.charCodeAt(i);if(a<31||a>127&&a<1569||a>1595&&a<1601||a>1610){t="\u062a\u0648\u062c\u062f \u0623\u062d\u0631\u0641/\u0631\u0645\u0648\u0632 \u063a\u064a\u0631 \u0635\u0627\u0644\u062d\u0629";break}}return{valid:""===t,result:t}},safeUsername:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=u.replace(/(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])/g,"$").length;return e<3?D(!1,"\u0623\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0642\u0635\u064a\u0631 \u064a\u062c\u0628 \u0627\u0646 \u0644\u0627 \u064a\u0642\u0644 \u0639\u0646 3 \u0623\u062d\u0631\u0641"):e>15?D(!1,"\u0623\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0637\u0648\u064a\u0644 \u064a\u062c\u0628 \u0627\u0646 \u0644\u0627 \u064a\u0632\u064a\u062f \u0639\u0646 15 \u062d\u0631\u0641"):o(u)},safeEmail:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=u.length;if(e<5||e>32)return D(!1,"\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u0627\u0644\u062d");var r=/^[^@]+@[^@]{1,}\.[^@]{2,}$/.test(u);return r?o(u,"\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u0627\u0644\u062d"):D(!1,"\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u0627\u0644\u062d")},safePassword:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(u,5,32,"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0642\u0635\u064a\u0631\u0629 \u064a\u062c\u0628 \u0627\u0646 \u0644\u0627 \u062a\u0642\u0644 \u0639\u0646 5 \u0623\u062d\u0631\u0641","\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0637\u0648\u064a\u0644\u0629 \u064a\u062c\u0628 \u0627\u0646 \u0644\u0627 \u062a\u0632\u064a\u062f \u0639\u0646 32 \u062d\u0631\u0641")},safeCharacters:o},d=h,c=r(2888),v=r(6417),F=function(u){(0,s.Z)(r,u);var e=(0,i.Z)(r);function r(){var u;(0,t.Z)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(u=e.call.apply(e,[this].concat(s))).value="",u.state={error:"",validated:0},u}return(0,n.Z)(r,[{key:"isValid",value:function(){var u=d.safeUsername(this.value);return this.updateState({validated:u.valid?2:1,error:u.result}),u.valid}},{key:"render",value:function(){var u=this;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Z.Control,{autoFocus:"on",tabIndex:this.props.tabIndex||1,name:"name",type:"text",size:"sm",onBlur:function(){return u.isValid()},onChange:function(e){return u.value=e.target.value},placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"}),(0,v.jsx)("div",{className:"error ta-right",children:this.state.error})]})}}]),r}(c.Z),E=function(u){(0,s.Z)(r,u);var e=(0,i.Z)(r);function r(){var u;(0,t.Z)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(u=e.call.apply(e,[this].concat(s))).value="",u.state={error:"",validated:0},u}return(0,n.Z)(r,[{key:"isValid",value:function(){var u=d.safePassword(this.value);return this.updateState({validated:u.valid?2:1,error:u.result}),u.valid}},{key:"render",value:function(){var u=this;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Z.Control,{autoComplete:"on",tabIndex:this.props.tabIndex||1,name:"password",type:"password",size:"sm",onBlur:function(){return u.isValid()},onChange:function(e){return u.value=e.target.value},placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}),(0,v.jsx)("div",{className:"error ta-right",children:this.state.error})]})}}]),r}(c.Z),C=function(u){(0,s.Z)(r,u);var e=(0,i.Z)(r);function r(){var u;(0,t.Z)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(u=e.call.apply(e,[this].concat(s))).value="",u.state={error:"",validated:0},u}return(0,n.Z)(r,[{key:"isValid",value:function(){var u=d.safeEmail(this.value);return this.updateState({validated:u.valid?2:1,error:u.result}),u.valid}},{key:"render",value:function(){var u=this;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Z.Control,{tabIndex:this.props.tabIndex||1,name:"email",type:"text",size:"sm",onBlur:function(){return u.isValid()},onChange:function(e){return u.value=e.target.value},placeholder:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,v.jsx)("div",{className:"error ta-right",children:this.state.error})]})}}]),r}(c.Z)},537:function(u,e,r){r.d(e,{S:function(){return c},F:function(){return d}});var t=r(5671),n=r(3144),s=r(136),i=r(8557),a=(r(7313),r(1027)),D=r(6839),l=r(4058),o=r(2888),h=r(6417),d={open:function(){},close:function(){}},c=function(u){(0,s.Z)(r,u);var e=(0,i.Z)(r);function r(){var u;(0,t.Z)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(u=e.call.apply(e,[this].concat(s))).state={visible:!1},u.message="",u}return(0,n.Z)(r,[{key:"onReady",value:function(){var u=this;d.open=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u.open(e)},d.close=function(){return u.close()}}},{key:"onRemoved",value:function(){d.open=function(){},d.close=function(){}}},{key:"open",value:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.message=u,this.updateState({visible:!0})}},{key:"close",value:function(){this.updateState({visible:!1})}},{key:"render",value:function(){var u=this;return(0,h.jsx)(a.Z,{anchorOrigin:{vertical:this.props.vertical||"bottom",horizontal:this.props.horizontal||"center"},open:this.state.visible,autoHideDuration:6e3,message:this.message,onClose:function(){return u.close()},className:"toast-message",action:(0,h.jsx)(D.Z,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return u.close()},children:(0,h.jsx)(l.Z,{fontSize:"small"})})})}}]),r}(o.Z)},3592:function(u,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t=r(5671),n=r(3144),s=r(136),i=r(8557),a=r(4978),D=r(1616),l=r(3298),o=r(9466),h=r(5033);function d(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return 1e3*(86400*u+3600*e+60*r+t)}function c(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=Date.now()-u;return isNaN(e)?"...":e>d(11)?Math.floor(e/d(1))+" \u064a\u0648\u0645":e>d(3)?Math.floor(e/d(1))+" \u0623\u064a\u0627\u0645":e>d(2)?"\u064a\u0648\u0645\u064a\u0646":e>d(1)?"\u064a\u0648\u0645 \u0648\u0627\u062d\u062f":e>d(0,11)?Math.floor(e/d(0,1))+" \u0633\u0627\u0639\u0629":e>d(0,3)?Math.floor(e/d(0,1))+" \u0633\u0627\u0639\u0627\u062a":e>d(0,2)?"\u0633\u0627\u0639\u062a\u064a\u0646":e>d(0,1)?"\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629":e>d(0,0,11)?Math.floor(e/d(0,0,1))+" \u062f\u0642\u064a\u0642\u0629":e>d(0,0,3)?Math.floor(e/d(0,0,1))+" \u062f\u0642\u0627\u0626\u0642":e>d(0,0,2)?"\u062f\u0642\u064a\u0642\u062a\u064a\u0646":e>d(0,0,1)?"\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629":e>d(0,0,0,11)?Math.floor(e/1e3)+" \u062b\u0627\u0646\u064a\u0629":e>d(0,0,0,3)?Math.floor(e/1e3)+" \u062b\u0648\u0627\u0646\u064a":e>d(0,0,0,2)?"\u062b\u0627\u0646\u064a\u062a\u064a\u0646":"\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629"}var v=r(537),F=r(2894),E=r(2888),C=r(7683),f=r(7030),x=r(6417),m=function(u){(0,s.Z)(r,u);var e=(0,i.Z)(r);function r(){var u;(0,t.Z)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(u=e.call.apply(e,[this].concat(s))).username="",u.email="",u.haveRegistered=!1,u.state={update:0},u}return(0,n.Z)(r,[{key:"register",value:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.haveRegistered=!0,this.username=u,this.email=e,this.setState({update:Date.now()})}},{key:"render",value:function(){var u=this;return h.Z.ready?this.haveRegistered?(0,x.jsx)(g,{username:this.username,email:this.email}):(0,x.jsx)(p,{onRegister:function(e,r){return u.register(e,r)}}):(0,x.jsx)(x.Fragment,{})}}]),r}(E.Z),g=function(u){(0,s.Z)(r,u);var e=(0,i.Z)(r);function r(){return(0,t.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r,[{key:"render",value:function(){return(0,x.jsxs)("div",{className:"game-register",children:[(0,x.jsx)("h1",{children:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644"}),(0,x.jsxs)("div",{className:"game-register-top",children:[(0,x.jsx)("div",{children:(0,x.jsx)("b",{children:"\u062a\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644"})}),(0,x.jsxs)("div",{children:["\u0645\u0631\u062d\u0628\u0627\u064b ",(0,x.jsx)("b",{children:this.props.username})," \u062a\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0641\u064a \u0627\u0644\u0633\u064a\u0631\u0641\u0631"]}),(0,x.jsxs)("div",{children:["\u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0638 \u0641\u064a \u0628\u0631\u064a\u062f\u0643\u0645 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a ",(0,x.jsx)("b",{dir:"ltr",children:this.props.email})," \u0641\u064a \u062d\u0627\u0644 \u0634\u0631\u0627\u0621 \u0627\u0644\u0630\u0647\u0628"]}),(0,x.jsx)("div",{children:"\u062d\u062a\u0649 \u064a\u0645\u0643\u0646\u0643\u0645 \u0625\u0633\u062a\u062e\u062f\u0627\u0645 \u0646\u0641\u0633 \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0645\u0634\u062a\u0631\u0649 \u0641\u064a \u0633\u064a\u0631\u0641\u0631\u0627\u062a \u0623\u062e\u0631\u0649"}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{children:["\u064a\u0645\u0643\u0646\u0643\u0645 \u0627\u0644\u0622\u0646 ",(0,x.jsx)(o.rU,{to:"/Login",children:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644"})," \u0648\u0627\u0644\u0628\u062f\u0623 \u0641\u064a \u0627\u0644\u0644\u0639\u0628"]}),(0,x.jsx)("div",{children:"\u0646\u062a\u0645\u0646\u0649 \u0644\u0643\u0645 \u0623\u0648\u0642\u0627\u062a \u0645\u0645\u062a\u0639\u0629."})]})]})}}]),r}(E.Z),p=function(u){(0,s.Z)(r,u);var e=(0,i.Z)(r);function r(){var u;(0,t.Z)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(u=e.call.apply(e,[this].concat(s))).state={error:!1,ready:!1,update:0},u.error={tribe:"",server:""},u.data={username:"",email:"",password:"",tribe:0,serverNumber:0},u}return(0,n.Z)(r,[{key:"handleOnSubmit",value:function(){var u=this,e=!1,r=C.Z.get("username"),t=C.Z.get("email"),n=C.Z.get("password");return r.isValid()||(e=!0),t.isValid()||(e=!0),n.isValid()||(e=!0),(this.data.tribe<1||this.data.tribe>5)&&(this.error.tribe="(\u0627\u0644\u0631\u062c\u0627\u0621 \u0623\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0642\u0628\u064a\u0644\u0629)",e=!0),(this.data.serverNumber<1||this.data.serverNumber>4)&&(this.error.server="(\u0627\u0644\u0631\u062c\u0627\u0621 \u0623\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0633\u064a\u0631\u0641\u0631)",e=!0),e?(this.setState({error:!0,update:Date.now()}),!1):(this.data.username=r.value,this.data.email=t.value,this.data.password=n.value,h.Z.register(this.data).then((function(e){var r=new f.Z.Register(e);r.done?u.props.onRegister(u.data.username,u.data.email):r.unkownError?v.F.open("\u062a\u0648\u062c\u062f \u0645\u0634\u0643\u0644\u0629 \u0641\u064a \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0647 \u0623\u062e\u0631\u0649."):r.notReady?v.F.open("\u0627\u0644\u0633\u064a\u0631\u0641\u0631 \u0644\u0645 \u064a\u0628\u062f\u0623 \u0628\u0639\u062f."):r.isEnded?v.F.open("\u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0641\u064a \u0633\u064a\u0631\u0641\u0631 \u0645\u0646\u062a\u0647\u064a."):r.isFull?v.F.open("\u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0641\u064a \u0633\u064a\u0631\u0641\u0631 \u0645\u0645\u062a\u0644\u0626."):r.username_used?v.F.open("\u0623\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0633\u062c\u0644 \u0645\u0646 \u0642\u0628\u0644."):r.email_used?v.F.open("\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0623\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0646 \u0642\u0628\u0644."):v.F.open(r.e_username+r.e_password+r.e_email)})),!1)}},{key:"handleOnSelect",value:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.data.serverNumber=u}},{key:"tribeInput",value:function(){var u=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{type:"radio",name:"tribe",value:e,onChange:function(e){return u.data.tribe=Number(e.target.value)}})," ",(0,x.jsx)("span",{children:r})]})}},{key:"render",value:function(){var u=this;return(0,x.jsxs)("div",{className:"game-register",children:[(0,x.jsx)(v.S,{}),(0,x.jsx)("h1",{children:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644"}),(0,x.jsxs)("div",{className:"game-register-top",children:[(0,x.jsx)("div",{children:(0,x.jsx)("span",{className:"green",children:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644"})}),(0,x.jsxs)("p",{children:["\u0642\u0628\u0644 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u064a\u0631\u062c\u0649 \u0642\u0631\u0627\u0621\u0629 ",(0,x.jsx)(o.rU,{to:"/Rules",children:"\u0627\u0644\u062a\u0639\u0644\u064a\u0645\u0627\u062a"})," \u0644\u0645\u0639\u0631\u0641\u0629 \u0645\u0632\u0627\u064a\u0627 \u0648\u0645\u0633\u0627\u0648\u0626 \u0627\u0644\u0642\u0628\u0627\u0626\u0644"]})]}),(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.handleOnSubmit()},children:[(0,x.jsxs)(a.Z.Group,{className:"game-register-form",children:[(0,x.jsxs)(a.Z.Row,{children:[(0,x.jsx)(a.Z.Label,{column:!0,sm:2,children:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"}),(0,x.jsx)(D.Z,{children:(0,x.jsx)(F.Ru,{register:"username"})})]}),(0,x.jsxs)(a.Z.Row,{children:[(0,x.jsx)(a.Z.Label,{column:!0,sm:2,children:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,x.jsx)(D.Z,{children:(0,x.jsx)(F.GT,{register:"email"})})]}),(0,x.jsxs)(a.Z.Row,{children:[(0,x.jsx)(a.Z.Label,{column:!0,sm:2,children:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}),(0,x.jsx)(D.Z,{children:(0,x.jsx)(F.ro,{register:"password"})})]}),(0,x.jsx)(a.Z.Row,{children:(0,x.jsx)(D.Z,{children:(0,x.jsx)("hr",{})})}),(0,x.jsx)(a.Z.Row,{className:"tribe",children:(0,x.jsxs)(D.Z,{style:{textAlign:"right"},children:[(0,x.jsxs)("div",{className:"green",children:["\u0625\u062e\u062a\u0631 \u0627\u0644\u0642\u0628\u064a\u0644\u0629",(0,x.jsx)("div",{className:"error",children:this.error.tribe})]}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{style:{textAlign:"center"},children:[this.tribeInput(1,"\u0627\u0644\u0631\u0648\u0645\u0627\u0646"),this.tribeInput(2,"\u0627\u0644\u062c\u0631\u0645\u0627\u0646"),this.tribeInput(3,"\u0627\u0644\u0627\u063a\u0631\u064a\u0642"),this.tribeInput(4,"\u0627\u0644\u0639\u0631\u0628"),this.tribeInput(5,"\u0627\u0644\u0641\u0631\u0627\u0639\u0646\u0629")]})]})}),(0,x.jsx)(a.Z.Row,{children:(0,x.jsx)(D.Z,{children:(0,x.jsx)("hr",{})})}),(0,x.jsx)(a.Z.Row,{className:"tribe",children:(0,x.jsxs)(D.Z,{style:{textAlign:"right"},children:[(0,x.jsxs)("div",{className:"green",children:["\u0625\u062e\u062a\u0631 \u0627\u0644\u0633\u064a\u0631\u0641\u0631",(0,x.jsx)("div",{className:"error",children:this.error.server})]}),(0,x.jsx)("br",{}),(0,x.jsx)("div",{style:{textAlign:"center",overflowX:"visible"},children:(0,x.jsx)(A,{onSelect:function(e){return u.handleOnSelect(e)}})})]})}),(0,x.jsx)(a.Z.Row,{children:(0,x.jsx)(D.Z,{children:(0,x.jsx)("hr",{})})})]}),(0,x.jsx)(l.Z,{variant:"secondary",type:"submit",children:"\u062a\u0633\u062c\u064a\u0644"})]})]})}}]),r}(E.Z),A=function(u){(0,s.Z)(r,u);var e=(0,i.Z)(r);function r(){var u;(0,t.Z)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(u=e.call.apply(e,[this].concat(s))).state={list:(0,x.jsx)(x.Fragment,{})},u}return(0,n.Z)(r,[{key:"onReady",value:function(){var u=this,e=function(e){return(0,x.jsx)(j,{data:e,onSelect:function(e){return u.props.onSelect(e)}},e.serverNumber+"_"+e.started)};h.Z.listServers((function(r){return u.updateState({list:new f.Z.ListServers(r).servers.map(e)})}))}},{key:"render",value:function(){return this.state.list}}]),r}(E.Z);function j(u){var e=u.data;return(0,x.jsxs)("label",{className:"server-card",children:[(0,x.jsx)("input",{type:"radio",name:"server",value:e.serverNumber,onChange:function(e){return u.onSelect(Number(e.target.value))}}),(0,x.jsxs)("div",{className:"card-holder",children:[(0,x.jsxs)("div",{className:"server-card-header",children:[(0,x.jsx)("input",{type:"checkbox",checked:!0,readOnly:!0}),"\u0627\u0644\u0633\u064a\u0631\u0641\u0631 ",(0,x.jsx)("b",{children:e.serverNumber})]}),(0,x.jsxs)("div",{className:"server-card-content",children:[(0,x.jsxs)("div",{children:["\u0639\u062f\u062f \u0627\u0644\u0644\u0627\u0639\u0628\u064a\u0646: ",(0,x.jsx)("b",{children:e.players})]}),(0,x.jsxs)("div",{children:["\u0628\u062f\u0623 \u0645\u0646\u0630 ",(0,x.jsx)("b",{children:c(e.started)})]}),(0,x.jsx)("div",{children:e.ended?(0,x.jsx)("b",{className:"error",children:"\u0645\u0646\u062a\u0647\u064a"}):e.ready?e.isFull?(0,x.jsx)("b",{className:"error",children:"\u0645\u0645\u062a\u0644\u0626"}):e.ready?(0,x.jsx)("b",{style:{color:"green"},children:"\u062c\u0627\u0647\u0632 \u0644\u0644\u0639\u0628"}):(0,x.jsx)("b",{style:{color:"red"},children:"\u063a\u064a\u0631 \u062c\u0627\u0647\u0632"}):(0,x.jsx)("b",{className:"error",children:"\u0644\u0645 \u064a\u0628\u062f\u0623"})})]})]})]})}var Z=m}}]);
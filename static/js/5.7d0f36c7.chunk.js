(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{161:function(u,e,t){"use strict";t.d(e,"b",(function(){return j})),t.d(e,"a",(function(){return h}));var r=t(4),n=t(5),a=t(9),i=t(8),s=(t(0),t(182)),D=t(183),c=t(164),l=t.n(c),o=(t(162),t(31)),d=t(2),h={open:function(){},close:function(){}},j=function(u){Object(a.a)(t,u);var e=Object(i.a)(t);function t(){var u;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(u=e.call.apply(e,[this].concat(a))).state={visible:!1},u.message="",u}return Object(n.a)(t,[{key:"onReady",value:function(){var u=this;h.open=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u.open(e)},h.close=function(){return u.close()}}},{key:"onRemoved",value:function(){h.open=function(){},h.close=function(){}}},{key:"open",value:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.message=u,this.updateState({visible:!0})}},{key:"close",value:function(){this.updateState({visible:!1})}},{key:"render",value:function(){var u=this;return Object(d.jsx)(s.a,{anchorOrigin:{vertical:this.props.vertical||"bottom",horizontal:this.props.horizontal||"center"},open:this.state.visible,autoHideDuration:6e3,message:this.message,onClose:function(){return u.close()},className:"toast-message",action:Object(d.jsx)(D.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return u.close()},children:Object(d.jsx)(l.a,{fontSize:"small"})})})}}]),t}(o.a)},162:function(u,e,t){},163:function(u,e,t){"use strict";t.d(e,"d",(function(){return b})),t.d(e,"a",(function(){return f})),t.d(e,"c",(function(){return F})),t.d(e,"b",(function(){return v}));var r=t(4),n=t(5),a=t(9),i=t(8),s=(t(0),t(181));function D(){var u=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{valid:u,result:e}}function c(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",a=u.length;return a<e?D(!1,r):a>t?D(!1,n):D(!0)}function l(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u062a\u0648\u062c\u062f \u0623\u062d\u0631\u0641/\u0631\u0645\u0648\u0632 \u063a\u064a\u0631 \u0635\u0627\u0644\u062d\u0629",t=u.replace(/(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDD-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6])|(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])|\u200D/gi,"$"),r=t.length;console.log([u,t,r]);for(var n=0;n<r;n++){var a=t.charCodeAt(n);if(!(a>31&&a<127||a>1569&&a<1596||a>1600&&a<1611))return D(!1,e)}return D(!0)}var o={safeLength:c,safeText:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,r="",n=u.replace(/(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])/g,"$"),a=n.length;if(a<e)r="\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 ".concat(e," \u0623\u062d\u0631\u0641");else if(a>t)r="\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 ".concat(t," \u062d\u0631\u0641");else for(var i=0;i<a;i++){var s=n.charCodeAt(i);if(s<31||s>127&&s<1569||s>1595&&s<1601||s>1610){r="\u062a\u0648\u062c\u062f \u0623\u062d\u0631\u0641/\u0631\u0645\u0648\u0632 \u063a\u064a\u0631 \u0635\u0627\u0644\u062d\u0629";break}}return{valid:""===r,result:r}},safeUsername:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=u.replace(/(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])/g,"$").length;return e<3?D(!1,"\u0623\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0642\u0635\u064a\u0631 \u064a\u062c\u0628 \u0627\u0646 \u0644\u0627 \u064a\u0642\u0644 \u0639\u0646 3 \u0623\u062d\u0631\u0641"):e>15?D(!1,"\u0623\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0637\u0648\u064a\u0644 \u064a\u062c\u0628 \u0627\u0646 \u0644\u0627 \u064a\u0632\u064a\u062f \u0639\u0646 15 \u062d\u0631\u0641"):l(u)},safeEmail:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=u.length;if(e<5||e>32)return D(!1,"\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u0627\u0644\u062d");var t=/^[^@]+@[^@]{1,}\.[^@]{2,}$/.test(u);return t?l(u,"\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u0627\u0644\u062d"):D(!1,"\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u0627\u0644\u062d")},safePassword:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return c(u,5,32,"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0642\u0635\u064a\u0631\u0629 \u064a\u062c\u0628 \u0627\u0646 \u0644\u0627 \u062a\u0642\u0644 \u0639\u0646 5 \u0623\u062d\u0631\u0641","\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0637\u0648\u064a\u0644\u0629 \u064a\u062c\u0628 \u0627\u0646 \u0644\u0627 \u062a\u0632\u064a\u062f \u0639\u0646 32 \u062d\u0631\u0641")},safeCharacters:l},d=o,h=t(31),j=t(2),v={username:{value:"",isValid:function(){return!1}},email:{value:"",isValid:function(){return!1}},password:{value:"",isValid:function(){return!1}},init:function(){this.username.value="",this.email.value="",this.password.value="",this.username.isValid=function(){return!1},this.email.isValid=function(){return!1},this.password.isValid=function(){return!1}},setFeild:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!1};this[u].value="",this[u].isValid=e},set:{username:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1};v.username.value="",v.username.isValid=u},password:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1};v.password.value="",v.password.isValid=u},email:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1};v.email.value="",v.email.isValid=u}}},b=function(u){Object(a.a)(t,u);var e=Object(i.a)(t);function t(){var u;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(u=e.call.apply(e,[this].concat(a))).error="",u.state={validated:0},u}return Object(n.a)(t,[{key:"onReady",value:function(){var u=this;v.set.username((function(){return u.check()}))}},{key:"onRemoved",value:function(){v.set.username((function(){return!1}))}},{key:"check",value:function(){var u=d.safeUsername(v.username.value);return this.error=u.result,this.updateState({validated:u.valid?2:1}),u.valid}},{key:"render",value:function(){var u=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a.Control,{autoFocus:"on",tabIndex:this.props.tabIndex||1,name:"name",type:"text",size:"sm",onBlur:function(){return u.check()},onChange:function(u){return v.username.value=u.target.value},placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"}),Object(j.jsx)("div",{className:"error ta-right",children:this.error})]})}}]),t}(h.a),F=function(u){Object(a.a)(t,u);var e=Object(i.a)(t);function t(){var u;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(u=e.call.apply(e,[this].concat(a))).error="",u.state={validated:0},u}return Object(n.a)(t,[{key:"onReady",value:function(){var u=this;v.set.password((function(){return u.check()}))}},{key:"onRemoved",value:function(){v.set.password((function(){return!1}))}},{key:"check",value:function(){var u=d.safePassword(v.password.value);return this.error=u.result,this.updateState({validated:u.valid?2:1}),u.valid}},{key:"render",value:function(){var u=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a.Control,{autoComplete:"on",tabIndex:this.props.tabIndex||1,name:"password",type:"password",size:"sm",onBlur:function(){return u.check()},onChange:function(u){return v.password.value=u.target.value},placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}),Object(j.jsx)("div",{className:"error ta-right",children:this.error})]})}}]),t}(h.a),f=function(u){Object(a.a)(t,u);var e=Object(i.a)(t);function t(){var u;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(u=e.call.apply(e,[this].concat(a))).error="",u.state={validated:0},u}return Object(n.a)(t,[{key:"onReady",value:function(){var u=this;v.set.email((function(){return u.check()}))}},{key:"onRemoved",value:function(){v.set.email((function(){return!1}))}},{key:"check",value:function(){var u=d.safeEmail(v.email.value);return this.error=u.result,this.updateState({validated:u.valid?2:1}),u.valid}},{key:"render",value:function(){var u=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a.Control,{tabIndex:this.props.tabIndex||1,name:"email",type:"text",size:"sm",onBlur:function(){return u.check()},onChange:function(u){return v.email.value=u.target.value},placeholder:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),Object(j.jsx)("div",{className:"error ta-right",children:this.error})]})}}]),t}(h.a)},170:function(u,e,t){},185:function(u,e,t){"use strict";t.r(e);var r=t(4),n=t(5),a=t(9),i=t(8),s=t(0),D=t.n(s),c=t(181),l=t(137),o=t(154),d=t(14),h=t(23);function j(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return 1e3*(86400*u+3600*e+60*t+r)}function v(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=Date.now()-u;return isNaN(e)?"...":e>j(11)?Math.floor(e/j(1))+" \u064a\u0648\u0645":e>j(3)?Math.floor(e/j(1))+" \u0623\u064a\u0627\u0645":e>j(2)?"\u064a\u0648\u0645\u064a\u0646":e>j(1)?"\u064a\u0648\u0645 \u0648\u0627\u062d\u062f":e>j(0,11)?Math.floor(e/j(0,1))+" \u0633\u0627\u0639\u0629":e>j(0,3)?Math.floor(e/j(0,1))+" \u0633\u0627\u0639\u0627\u062a":e>j(0,2)?"\u0633\u0627\u0639\u062a\u064a\u0646":e>j(0,1)?"\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629":e>j(0,0,11)?Math.floor(e/j(0,0,1))+" \u062f\u0642\u064a\u0642\u0629":e>j(0,0,3)?Math.floor(e/j(0,0,1))+" \u062f\u0642\u0627\u0626\u0642":e>j(0,0,2)?"\u062f\u0642\u064a\u0642\u062a\u064a\u0646":e>j(0,0,1)?"\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629":e>j(0,0,0,11)?Math.floor(e/1e3)+" \u062b\u0627\u0646\u064a\u0629":e>j(0,0,0,3)?Math.floor(e/1e3)+" \u062b\u0648\u0627\u0646\u064a":e>j(0,0,0,2)?"\u062b\u0627\u0646\u064a\u062a\u064a\u0646":"\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629"}var b=t(161),F=(t(170),t(163)),f=t(31),E=t(2),O=function(u){Object(a.a)(t,u);var e=Object(i.a)(t);function t(){var u;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(u=e.call.apply(e,[this].concat(a))).username="",u.email="",u.haveRegistered=!1,u.state={update:0},u}return Object(n.a)(t,[{key:"register",value:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.haveRegistered=!0,this.username=u,this.email=e,this.setState({update:Date.now()})}},{key:"render",value:function(){var u=this;return this.haveRegistered?Object(E.jsx)(m,{username:this.username,email:this.email}):Object(E.jsx)(C,{onRegister:function(e,t){return u.register(e,t)}})}}]),t}(D.a.Component),m=function(u){Object(a.a)(t,u);var e=Object(i.a)(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(E.jsxs)("div",{className:"game-register",children:[Object(E.jsx)("h1",{children:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644"}),Object(E.jsxs)("div",{className:"game-register-top",children:[Object(E.jsx)("div",{children:Object(E.jsx)("b",{children:"\u062a\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644"})}),Object(E.jsxs)("div",{children:["\u0645\u0631\u062d\u0628\u0627\u064b ",Object(E.jsx)("b",{children:this.props.username})," \u062a\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0641\u064a \u0627\u0644\u0633\u064a\u0631\u0641\u0631"]}),Object(E.jsxs)("div",{children:["\u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0638 \u0641\u064a \u0628\u0631\u064a\u062f\u0643\u0645 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a ",Object(E.jsx)("b",{dir:"ltr",children:this.props.email})," \u0641\u064a \u062d\u0627\u0644 \u0634\u0631\u0627\u0621 \u0627\u0644\u0630\u0647\u0628"]}),Object(E.jsx)("div",{children:"\u062d\u062a\u0649 \u064a\u0645\u0643\u0646\u0643\u0645 \u0625\u0633\u062a\u062e\u062f\u0627\u0645 \u0646\u0641\u0633 \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0645\u0634\u062a\u0631\u0649 \u0641\u064a \u0633\u064a\u0631\u0641\u0631\u0627\u062a \u0623\u062e\u0631\u0649"}),Object(E.jsx)("br",{}),Object(E.jsxs)("div",{children:["\u064a\u0645\u0643\u0646\u0643\u0645 \u0627\u0644\u0622\u0646 ",Object(E.jsx)(d.b,{to:"/Login",children:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644"})," \u0648\u0627\u0644\u0628\u062f\u0623 \u0641\u064a \u0627\u0644\u0644\u0639\u0628"]}),Object(E.jsx)("div",{children:"\u0646\u062a\u0645\u0646\u0649 \u0644\u0643\u0645 \u0623\u0648\u0642\u0627\u062a \u0645\u0645\u062a\u0639\u0629."})]})]})}}]),t}(D.a.Component),C=function(u){Object(a.a)(t,u);var e=Object(i.a)(t);function t(){var u;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(u=e.call.apply(e,[this].concat(a))).state={error:!1,ready:!1,update:0},u.error={tribe:"",server:""},u.data={username:"",email:"",password:"",tribe:0,serverNumber:0},u}return Object(n.a)(t,[{key:"handleOnSubmit",value:function(){var u=this,e=!1;return F.b.username.isValid()||(e=!0),F.b.email.isValid()||(e=!0),F.b.password.isValid()||(e=!0),(this.data.tribe<1||this.data.tribe>5)&&(this.error.tribe="(\u0627\u0644\u0631\u062c\u0627\u0621 \u0623\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0642\u0628\u064a\u0644\u0629)",e=!0),(this.data.serverNumber<1||this.data.serverNumber>4)&&(this.error.server="(\u0627\u0644\u0631\u062c\u0627\u0621 \u0623\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0633\u064a\u0631\u0641\u0631)",e=!0),e?(this.setState({error:!0,update:Date.now()}),!1):(this.data.username=F.b.username.value,this.data.email=F.b.email.value,this.data.password=F.b.password.value,h.a.register(this.data).then((function(e){console.log(e),e.done?u.props.onRegister(u.data.username,u.data.email):e.unkownError?b.a.open("\u062a\u0648\u062c\u062f \u0645\u0634\u0643\u0644\u0629 \u0641\u064a \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0647 \u0623\u062e\u0631\u0649."):e.notReady?b.a.open("\u0627\u0644\u0633\u064a\u0631\u0641\u0631 \u0644\u0645 \u064a\u0628\u062f\u0623 \u0628\u0639\u062f."):e.isEnded?b.a.open("\u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0641\u064a \u0633\u064a\u0631\u0641\u0631 \u0645\u0646\u062a\u0647\u064a."):e.isFull?b.a.open("\u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0641\u064a \u0633\u064a\u0631\u0641\u0631 \u0645\u0645\u062a\u0644\u0626."):e.username_used?b.a.open("\u0623\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0633\u062c\u0644 \u0645\u0646 \u0642\u0628\u0644."):e.email_used?b.a.open("\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0623\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0646 \u0642\u0628\u0644."):b.a.open(e.e_username+e.e_password+e.e_email)})),!1)}},{key:"handleOnSelect",value:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.data.serverNumber=u}},{key:"tribeInput",value:function(){var u=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(E.jsxs)("label",{children:[Object(E.jsx)("input",{type:"radio",name:"tribe",value:e,onChange:function(e){return u.data.tribe=Number(e.target.value)}})," ",Object(E.jsx)("span",{children:t})]})}},{key:"render",value:function(){var u=this;return Object(E.jsxs)("div",{className:"game-register",children:[Object(E.jsx)(b.b,{}),Object(E.jsx)("h1",{children:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644"}),Object(E.jsxs)("div",{className:"game-register-top",children:[Object(E.jsx)("div",{children:Object(E.jsx)("span",{className:"green",children:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644"})}),Object(E.jsxs)("p",{children:["\u0642\u0628\u0644 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u064a\u0631\u062c\u0649 \u0642\u0631\u0627\u0621\u0629 ",Object(E.jsx)(d.b,{to:"/Rules",children:"\u0627\u0644\u062a\u0639\u0644\u064a\u0645\u0627\u062a"})," \u0644\u0645\u0639\u0631\u0641\u0629 \u0645\u0632\u0627\u064a\u0627 \u0648\u0645\u0633\u0627\u0648\u0626 \u0627\u0644\u0642\u0628\u0627\u0626\u0644"]})]}),Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.handleOnSubmit()},children:[Object(E.jsxs)(c.a.Group,{className:"game-register-form",children:[Object(E.jsxs)(c.a.Row,{children:[Object(E.jsx)(c.a.Label,{column:!0,sm:2,children:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"}),Object(E.jsx)(l.a,{children:Object(E.jsx)(F.d,{})})]}),Object(E.jsxs)(c.a.Row,{children:[Object(E.jsx)(c.a.Label,{column:!0,sm:2,children:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),Object(E.jsx)(l.a,{children:Object(E.jsx)(F.a,{})})]}),Object(E.jsxs)(c.a.Row,{children:[Object(E.jsx)(c.a.Label,{column:!0,sm:2,children:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}),Object(E.jsx)(l.a,{children:Object(E.jsx)(F.c,{})})]}),Object(E.jsx)(c.a.Row,{children:Object(E.jsx)(l.a,{children:Object(E.jsx)("hr",{})})}),Object(E.jsx)(c.a.Row,{className:"tribe",children:Object(E.jsxs)(l.a,{style:{textAlign:"right"},children:[Object(E.jsxs)("div",{className:"green",children:["\u0625\u062e\u062a\u0631 \u0627\u0644\u0642\u0628\u064a\u0644\u0629",Object(E.jsx)("div",{className:"error",children:this.error.tribe})]}),Object(E.jsx)("br",{}),Object(E.jsxs)("div",{style:{textAlign:"center"},children:[this.tribeInput(1,"\u0627\u0644\u0631\u0648\u0645\u0627\u0646"),this.tribeInput(2,"\u0627\u0644\u062c\u0631\u0645\u0627\u0646"),this.tribeInput(3,"\u0627\u0644\u0627\u063a\u0631\u064a\u0642"),this.tribeInput(4,"\u0627\u0644\u0639\u0631\u0628"),this.tribeInput(5,"\u0627\u0644\u0641\u0631\u0627\u0639\u0646\u0629")]})]})}),Object(E.jsx)(c.a.Row,{children:Object(E.jsx)(l.a,{children:Object(E.jsx)("hr",{})})}),Object(E.jsx)(c.a.Row,{className:"tribe",children:Object(E.jsxs)(l.a,{style:{textAlign:"right"},children:[Object(E.jsxs)("div",{className:"green",children:["\u0625\u062e\u062a\u0631 \u0627\u0644\u0633\u064a\u0631\u0641\u0631",Object(E.jsx)("div",{className:"error",children:this.error.server})]}),Object(E.jsx)("br",{}),Object(E.jsx)("div",{style:{textAlign:"center",overflowX:"visible"},children:Object(E.jsx)(x,{onSelect:function(e){return u.handleOnSelect(e)}})})]})}),Object(E.jsx)(c.a.Row,{children:Object(E.jsx)(l.a,{children:Object(E.jsx)("hr",{})})})]}),Object(E.jsx)(o.a,{variant:"secondary",type:"submit",children:"\u062a\u0633\u062c\u064a\u0644"})]})]})}}]),t}(D.a.PureComponent),x=function(u){Object(a.a)(t,u);var e=Object(i.a)(t);function t(){var u;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(u=e.call.apply(e,[this].concat(a))).state={list:Object(E.jsx)(E.Fragment,{})},u}return Object(n.a)(t,[{key:"onReady",value:function(){var u=this,e=function(e){return Object(E.jsx)(p,{data:e,onSelect:function(e){return u.props.onSelect(e)}},e.serverNumber+"_"+e.started)};h.a.listServers((function(t){return u.updateState({list:t.map(e)})}))}},{key:"render",value:function(){return this.state.list}}]),t}(f.a);function p(u){var e=u.data;return Object(E.jsxs)("label",{className:"server-card",children:[Object(E.jsx)("input",{type:"radio",name:"server",value:e.serverNumber,onChange:function(e){return u.onSelect(Number(e.target.value))}}),Object(E.jsxs)("div",{className:"card-holder",children:[Object(E.jsxs)("div",{className:"server-card-header",children:[Object(E.jsx)("input",{type:"checkbox",checked:!0,readOnly:!0}),"\u0627\u0644\u0633\u064a\u0631\u0641\u0631 ",Object(E.jsx)("b",{children:e.serverNumber})]}),Object(E.jsxs)("div",{className:"server-card-content",children:[Object(E.jsxs)("div",{children:["\u0639\u062f\u062f \u0627\u0644\u0644\u0627\u0639\u0628\u064a\u0646: ",Object(E.jsx)("b",{children:e.players})]}),Object(E.jsxs)("div",{children:["\u0628\u062f\u0623 \u0645\u0646\u0630 ",Object(E.jsx)("b",{children:v(e.started)})]}),Object(E.jsx)("div",{children:e.ended?Object(E.jsx)("b",{className:"error",children:"\u0645\u0646\u062a\u0647\u064a"}):e.ready?e.isFull?Object(E.jsx)("b",{className:"error",children:"\u0645\u0645\u062a\u0644\u0626"}):e.ready?Object(E.jsx)("b",{style:{color:"green"},children:"\u062c\u0627\u0647\u0632 \u0644\u0644\u0639\u0628"}):Object(E.jsx)("b",{style:{color:"red"},children:"\u063a\u064a\u0631 \u062c\u0627\u0647\u0632"}):Object(E.jsx)("b",{className:"error",children:"\u0644\u0645 \u064a\u0628\u062f\u0623"})})]})]})]})}e.default=O}}]);
//# sourceMappingURL=5.7d0f36c7.chunk.js.map
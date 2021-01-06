(this.webpackJsonplol_ddragon=this.webpackJsonplol_ddragon||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l),s=a(8),o=a(2),i=a(11),m=a(1),u=Object(n.createContext)(),p=function(e){var t=Object(n.useState)({isLightTheme:!0,light:{syntax:"#555",ui:"#ddd",bg:"#eee"},dark:{syntax:"#ddd",ui:"#333",bg:"#555"}}),a=Object(m.a)(t,2),l=a[0];a[1];return c.a.createElement(u.Provider,{value:Object(i.a)({},l)},e.children)},d=(a(25),function(){var e=Object(n.useContext)(u),t=e.isLightTheme,a=e.light,l=e.dark,r=t?a:l;return c.a.createElement("div",{className:"nav",style:{background:r.ui,color:r.syntax}},c.a.createElement(s.b,{style:{background:r.ui,color:r.syntax},to:"/"},c.a.createElement("div",null,"Home")),c.a.createElement(s.b,{style:{background:r.ui,color:r.syntax},to:"/Champions"},c.a.createElement("div",null,"Champions")),c.a.createElement(s.b,{style:{background:r.ui,color:r.syntax},to:"/Summoners"},c.a.createElement("div",null,"Summoners")))}),g=function(){return c.a.createElement("div",{className:"pd-top pd-left"},c.a.createElement("h2",null,"A website that uses Riot Games API to display the list and information of the Champions available in the game, and also search for different players and their stats if you have a RIOT Games developer key."),c.a.createElement("div",{className:"pd-top"},c.a.createElement("h2",null,"What I have used:"),c.a.createElement("ul",{className:"pd-top"},c.a.createElement("li",null,"React"),c.a.createElement("li",null,"React-Router"),c.a.createElement("li",null,"Context API"),c.a.createElement("li",null,"Hooks"))))},h=(a(31),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),o=Object(m.a)(r,2),i=o[0],p=o[1],d=Object(n.useState)(!1),g=Object(m.a)(d,2),h=(g[0],g[1]),f=Object(n.useState)(""),v=Object(m.a)(f,2),E=v[0],b=v[1];Object(n.useEffect)((function(){fetch("https://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json").then((function(e){return e.json()})).then((function(e){console.log("not lis",Object.keys(e.data)),l(Object.keys(e.data)),p(Object.keys(e.data)),console.log("list",a),h(!0)}))}),[]),Object(n.useEffect)((function(){p(""===E?a:a.filter((function(e){return e.toLowerCase().includes(E.toLowerCase())})))}),[E]);var j=Object(n.useContext)(u),O=j.isLightTheme,k=j.light,N=j.dark,y=O?k:N;return c.a.createElement("div",{style:{background:y.bg}},c.a.createElement("div",{style:{background:y.ui,color:y.syntax},className:"champlist"},c.a.createElement("div",{className:"searchbar-container"},c.a.createElement("input",{className:"searchbar",type:"text",placeholder:"Champion Name",value:"".concat(E),onChange:function(e){return b(e.target.value)}})),c.a.createElement("div",{className:"champlist-container"},i.map((function(e){return c.a.createElement(s.b,{className:"champlist-item",style:{background:y.ui,color:y.syntax},key:"".concat(e),to:"/Champions/".concat(e)},c.a.createElement("img",{height:"120px",width:"120px",src:"https://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/".concat(e,".png")}),c.a.createElement("h3",null,e))})))))}),f=(a(32),function(e){var t=Object(n.useState)({name:"",title:"",lore:"",stats:{hp:0,hpperlevel:0,mp:0,mpperlevel:0,movespeed:0,armor:0,armorperlevel:0,spellblock:0,spellblockperlevel:0,attackrange:0,hpregen:0,hpregenperlevel:0,mpregen:0,mpregenperlevel:0,attackdamage:0,attackdamageperlevel:0,attackspeed:0,attackspeedperlevel:0},spells:[]}),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)("name"),o=Object(m.a)(s,2),i=o[0],p=o[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),h=g[0],f=g[1],v=Object(n.useState)(""),E=Object(m.a)(v,2),b=E[0],j=E[1],O=Object(n.useState)(""),k=Object(m.a)(O,2),N=k[0],y=k[1],x=Object(n.useState)(!1),S=Object(m.a)(x,2);S[0],S[1];Object(n.useEffect)((function(){var t=e.match.params.id;fetch("https://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion/".concat(t,".json")).then((function(e){return e.json()})).then((function(e){r(e.data["".concat(t)])}))}),[]),Object(n.useEffect)((function(){p(l.name),f(l.title),j(l.lore),y(l.stats),console.log("name",i),console.log("title",h),console.log("lore",b),console.log("stats",N),console.log(typeof i),console.log(l.spells)}),[l,i,h,b,N]);var w=Object(n.useContext)(u);w.isLightTheme,w.light,w.dark;return c.a.createElement("div",{className:"outer_container"},c.a.createElement("div",{className:"level-1-container"},c.a.createElement("div",{className:"level-1-item name-lore"},c.a.createElement("div",{className:"name-title"},c.a.createElement("h1",{className:"name"},c.a.createElement("strong",null,i.toUpperCase())),c.a.createElement("h3",{className:"title"},h)),c.a.createElement("h3",{className:"lore"},b)),c.a.createElement("div",{className:"level-1-item load-screen-image"},c.a.createElement("img",{className:"level-1-image",alt:"".concat(i),src:"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(i,"_0.jpg")}))),c.a.createElement("div",{className:"level-2-container"},c.a.createElement("h2",null,"Stats"),c.a.createElement("div",{className:"stats-container"},c.a.createElement("div",{className:"left-container"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("strong",null,"HP:")," ",N.hp+"+"+N.hpperlevel),c.a.createElement("li",null,c.a.createElement("strong",null,"HP regen:")," ","".concat(N.hpregen,"+").concat(N.hpregenperlevel)),c.a.createElement("li",null,c.a.createElement("strong",null,"Mana:")," ",N.mp+"+"+N.mpperlevel),c.a.createElement("li",null,c.a.createElement("strong",null,"Mana regen:")," ","".concat(N.mpregen,"+").concat(N.mpregenperlevel)),c.a.createElement("li",null,c.a.createElement("strong",null,"Move Speed:")," ","".concat(N.movespeed)))),c.a.createElement("div",{className:"right-container"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("strong",null,"Attack Damage:")," ",N.attackdamage+"+"+N.attackdamageperlevel),c.a.createElement("li",null,c.a.createElement("strong",null,"Attack Speed:")," ","".concat(N.attackspeed,"+").concat(N.attackspeedperlevel)),c.a.createElement("li",null,c.a.createElement("strong",null,"Armor:")," ",N.armor+"+"+N.armorperlevel),c.a.createElement("li",null,c.a.createElement("strong",null,"Magic Resist:")," ","".concat(N.spellblock,"+").concat(N.spellblockperlevel)),c.a.createElement("li",null,c.a.createElement("strong",null,"Attack Range:")," ","".concat(N.attackrange)))),c.a.createElement("div",{className:"right-container"}))),c.a.createElement("div",{className:"level-3-container"},l.spells.map((function(e){return c.a.createElement("div",{className:"ability",key:"".concat(e.id)},c.a.createElement("div",{className:"ability-text"},c.a.createElement("h3",null,e.name),c.a.createElement("p",null,e.description)),c.a.createElement("div",{className:"ability-image"},c.a.createElement("img",{width:"64px",height:"64px",src:"https://ddragon.leagueoflegends.com/cdn/10.22.1/img/spell/".concat(e.image.full)})))}))))}),v=a(6),E=a.n(v),b=a(10),j=(a(34),function(e){var t,a=e.gameId,l=e.summonerName,r=e.apiKey;Object(n.useEffect)((function(){v()}),[a]);var s=Object(n.useState)({participants:[],participantIdentities:[]}),o=Object(m.a)(s,2),u=o[0],p=o[1],d=Object(n.useState)({win:"",spell1Id:"",spell2Id:"",kills:"",deaths:"",assists:"",championName:""}),g=Object(m.a)(d,2),h=g[0],f=g[1];Object(n.useEffect)((function(){v()}),[]),Object(n.useEffect)((function(){j()}),[u]),Object(n.useEffect)((function(){console.log("display",h)}),[h]);var v=function(){var e=Object(b.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://arcane-refuge-25190.herokuapp.com/https://euw1.api.riotgames.com/lol/match/v4/matches/".concat(a,"?api_key=").concat(r));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("parsed Match Data",n),p(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e;void 0!==u.participantIdentities&&(e=u.participantIdentities.filter((function(e){return e.player.summonerName.toLowerCase()===l}))[0]),void 0!==e&&void 0!==e.participantId&&(t=e.participantId,O())},O=function(){var e=u.participants;console.log(e);var a=e.filter((function(e){return t===e.participantId})),n=Object(m.a)(a,1)[0];console.log(n);var c={win:n.stats.win,spell1Id:n.spell1Id,spell2Id:n.spell2Id,kills:n.stats.kills,deaths:n.stats.deaths,assists:n.stats.assists};k(n.championId),N(n.spell1Id,1),N(n.spell2Id,2),f(c)},k=function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n,c,l,r,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,c=Object.values(n.data),l=c.filter((function(e){return e.key==t})),r=Object(m.a)(l,1),s=r[0],console.log(s.id),f((function(e){var t=Object(i.a)({},e);return t.championName=s.id,t}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(E.a.mark((function e(t,a){var n,c,l,r,s,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://arcane-refuge-25190.herokuapp.com/https://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/summoner.json");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,l=Object.values(c.data),r=l.filter((function(e){return e.key==t})),s=Object(m.a)(r,1),o=s[0],console.log("summoner spell Id",o.id),f(1===a?function(e){var t=Object(i.a)({},e);return t.spell1Name=o.id,t}:function(e){var t=Object(i.a)({},e);return t.spell2Name=o.id,t});case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement("div",null,""!==h.championName?c.a.createElement("div",{className:"game-card",style:{backgroundColor:h.win?"springgreen":"rgb(197, 67, 35)"}},c.a.createElement("div",{className:"game-mode"},u.gameMode),c.a.createElement("div",{className:"champion"},c.a.createElement("img",{classname:"gamecard-champ-image",src:"https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/".concat(h.championName,".png")}),c.a.createElement("div",null,h.championName)),c.a.createElement("div",{className:"summoners"},c.a.createElement("img",{width:"40px",height:"40px",src:"https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/".concat(h.spell1Name,".png")}),c.a.createElement("img",{width:"40px",height:"40px",src:"https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/".concat(h.spell2Name,".png")})),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"kda"},c.a.createElement("div",null,"".concat(h.kills,"/").concat(h.deaths,"/").concat(h.assists)),c.a.createElement("div",null,"K/D/A")),c.a.createElement("hr",null),c.a.createElement("div",{className:"duration"},Math.floor(u.gameDuration/60),"m ",u.gameDuration%60,"s"))):c.a.createElement("div",null))}),O=(a(35),function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)("finalbosszeref"),s=Object(m.a)(r,2),o=s[0],i=s[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),d=p[0],g=p[1],h=Object(n.useState)([""]),f=Object(m.a)(h,2),v=f[0],O=f[1];Object(n.useEffect)((function(){N()}),[d]),Object(n.useEffect)((function(){console.log(v)}),[v]);var k=function(){var e=Object(b.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a,o),e.next=3,fetch("https://arcane-refuge-25190.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/".concat(o,"?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log("fetch response",n),g(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://arcane-refuge-25190.herokuapp.com/https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/".concat(d.accountId,"?api_key=").concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("parsed Match History",n.matches),O(n.matches);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"summoner"},c.a.createElement("div",{className:"inputs"},c.a.createElement("input",{type:"text",className:"input-item",placeholder:"Riot Games Developer Key",value:"".concat(a),onChange:function(e){l(e.target.value)}}),c.a.createElement("input",{type:"text",className:"input-item",placeholder:"Summoner Name",onChange:function(e){i(e.target.value)}}),c.a.createElement("button",{className:"input-item",onClick:k},"Search")),c.a.createElement("div",{className:"summoner-data"},void 0!==v?v.filter((function(e,t){return t<10})).map((function(e){return c.a.createElement(j,{gameId:e.gameId,summonerName:o,apiKey:a})})):c.a.createElement("div",null)))}),k=function(){return c.a.createElement(p,null,c.a.createElement(s.a,null,c.a.createElement(d,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/Champions",exact:!0,component:h}),c.a.createElement(o.a,{path:"/Champions/:id",exact:!0,component:f}),c.a.createElement(o.a,{path:"/Summoners",exact:!0,component:O}),c.a.createElement(o.a,{path:"/Summoners/:id",component:O}),c.a.createElement(o.a,{path:"/",component:g}))))};a(36);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c4a0f8a6.chunk.js.map
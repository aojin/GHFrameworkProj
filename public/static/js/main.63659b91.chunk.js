(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/ember-tomster-logo-svg-vector.2504a261.svg"},101:function(e,t,a){e.exports=a.p+"static/media/Code-fork-01.1280480a.svg"},102:function(e,t,a){e.exports=a.p+"static/media/Gold_Star.41100181.svg"},103:function(e,t,a){e.exports=a.p+"static/media/Octicons-eye.3f128bf5.svg"},104:function(e,t,a){e.exports=a.p+"static/media/Octicons-issue-opened.5df1a50d.svg"},105:function(e,t,a){e.exports={Cards:"Cards_Cards__2ZN0t"}},190:function(e,t,a){e.exports=a(314)},195:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),o=a.n(s),c=(a(195),a(19)),i=a(20),l=a(22),u=a(21),p=a(23),d=function(e){return e.children},m=a(91),g=a.n(m),f=a(33),b=a.n(f),h=a(92),v=a.n(h),E=a(93),w=a.n(E),k=function(e){return r.a.createElement("div",{className:w.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:e.logoPath,alt:"github logo"}))},y=a(94),x=a.n(y),C=a(95),j=a.n(C),P=function(e){return r.a.createElement("div",{className:x.a.RefreshButton},r.a.createElement("img",{src:j.a,alt:"github logo"}))},S=function(e){return r.a.createElement("header",{className:b.a.Header},r.a.createElement("div",{className:b.a.Logo},r.a.createElement(k,{logoPath:v.a})),r.a.createElement("div",{className:b.a.Title},r.a.createElement("h2",null,r.a.createElement("span",null,"GitHub Data: "),r.a.createElement("span",null,"War of the Web Frameworks"))),r.a.createElement("nav",{className:b.a.DesktopOnly},r.a.createElement(P,null)))},N=function(e){return r.a.createElement(d,null,r.a.createElement(S,null),r.a.createElement("main",{className:g.a.Content},e.children))},_=a(6),D=a.n(_),I=a(15),O=a(45),R=a.n(O),B=a(46),L=a.n(B),H=a(16),A=a.n(H),q=a(41),T=a.n(q),W=a(31),G=a.n(W),F=a(43),M=a.n(F),U=a(44),z=a.n(U),K=a(17),J=a.n(K),V=a(30),X=a.n(V),Z=a(42),$=a.n(Z),Q=0;function Y(e,t,a,n,r,s,o,c,i){return{id:Q+=1,name:e,dependentRepos:t,dependentPackages:a,activeIssues:n,closedIssues:r,newIssues:s,contributors:o,activePullReqs:c,unresolvedConversations:i}}function ee(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var te=[{id:"name",numeric:!1,disablePadding:!0,label:"Framework"},{id:"dependentRepos",numeric:!0,disablePadding:!1,label:"Dependent Repos"},{id:"dependentPackages",numeric:!0,disablePadding:!1,label:"Dependent Packages"},{id:"activeIssues",numeric:!0,disablePadding:!1,label:"Active Issues"},{id:"closedIssues",numeric:!0,disablePadding:!1,label:"Closed Issues"},{id:"newIssues",numeric:!0,disablePadding:!1,label:"New Issues"},{id:"contributors",numeric:!0,disablePadding:!1,label:"Active Contributors"},{id:"activePullReqs",numeric:!0,disablePadding:!1,label:"Active Pull Requests"},{id:"unresolvedConversations",numeric:!0,disablePadding:!1,label:"Unresolved Conversations"}],ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.order,n=t.orderBy;return r.a.createElement(T.a,null,r.a.createElement(G.a,null,te.map(function(t){return r.a.createElement(A.a,{key:t.id,align:t.numeric?"right":"left",padding:t.disablePadding?"none":"default",sortDirection:n===t.id&&a},r.a.createElement($.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(M.a,{active:n===t.id,direction:a,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(r.a.Component),ne=function(e){var t=e.classes;return r.a.createElement(z.a,{className:D()(t.root)},r.a.createElement("div",{className:t.title},r.a.createElement(J.a,{variant:"h6",id:"tableTitle"},"Last Month On GitHub:")),r.a.createElement("div",{className:t.spacer}))};ne=Object(I.withStyles)(function(e){return{root:{paddingRight:e.spacing.unit},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"}}})(ne);var re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={order:"desc",orderBy:"dependentRepos",data:[Y(a.props.react.frameworkName,a.props.reactDeps.dependentRepos,a.props.reactDeps.dependentPkgs,a.props.react.activeIssues,a.props.react.closedIssues,a.props.react.newIssues,a.props.react.activeContributors,a.props.react.activePullReqs,a.props.react.unresolvedConversations),Y(a.props.angular.frameworkName,a.props.angularDeps.dependentRepos,a.props.angularDeps.dependentPkgs,a.props.angular.activeIssues,a.props.angular.closedIssues,a.props.angular.newIssues,a.props.angular.activeContributors,a.props.angular.activePullReqs,a.props.angular.unresolvedConversations),Y(a.props.vue.frameworkName,a.props.vueDeps.dependentRepos,a.props.vueDeps.dependentPkgs,a.props.vue.activeIssues,a.props.vue.closedIssues,a.props.vue.newIssues,a.props.vue.activeContributors,a.props.vue.activePullReqs,a.props.vue.unresolvedConversations),Y(a.props.ember.frameworkName,a.props.emberDeps.dependentRepos,a.props.emberDeps.dependentPkgs,a.props.ember.activeIssues,a.props.ember.closedIssues,a.props.ember.newIssues,a.props.ember.activeContributors,a.props.ember.activePullReqs,a.props.ember.unresolvedConversations)]},a.handleRequestSort=function(e,t){var n=t,r="desc";a.state.orderBy===t&&"desc"===a.state.order&&(r="asc"),a.setState({order:r,orderBy:n})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.data,n=t.order,s=t.orderBy;return r.a.createElement(X.a,{className:e.root},r.a.createElement(ne,null),r.a.createElement("div",{className:e.tableWrapper},r.a.createElement(R.a,{className:e.table,"aria-labelledby":"tableTitle"},r.a.createElement(ae,{order:n,orderBy:s,onRequestSort:this.handleRequestSort}),r.a.createElement(L.a,null,function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(a,function(e,t){return"desc"===e?function(e,a){return ee(e,a,t)}:function(e,a){return-ee(e,a,t)}}(n,s)).map(function(e){return r.a.createElement(G.a,{hover:!0,key:e.id},r.a.createElement(A.a,{component:"th",scope:"row",padding:"none"},e.name.toUpperCase()),r.a.createElement(A.a,{align:"right"},e.dependentRepos.toLocaleString("en")),r.a.createElement(A.a,{align:"right"},e.dependentPackages.toLocaleString("en")),r.a.createElement(A.a,{align:"right"},e.activeIssues.toLocaleString("en")),r.a.createElement(A.a,{align:"right"},e.closedIssues.toLocaleString("en")),r.a.createElement(A.a,{align:"right"},e.newIssues.toLocaleString("en")),r.a.createElement(A.a,{align:"right"},e.contributors.toLocaleString("en")),r.a.createElement(A.a,{align:"right"},e.activePullReqs.toLocaleString("en")),r.a.createElement(A.a,{align:"right"},e.unresolvedConversations))})))))}}]),t}(r.a.Component),se=Object(I.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:500},tableWrapper:{overflowX:"auto",margin:"10px"}}})(re),oe=a(106),ce=a(32),ie=a.n(ce),le=a(47),ue=a.n(le),pe=a(49),de=a.n(pe),me=a(48),ge=a.n(me),fe=a(97),be=a.n(fe),he=a(98),ve=a.n(he),Ee=a(99),we=a.n(Ee),ke=a(100),ye=a.n(ke),xe=function(e){return r.a.createElement("img",{src:e.icon,alt:"icon",height:"20px",width:"20px"})},Ce=a(101),je=a.n(Ce),Pe=a(102),Se=a.n(Pe),Ne=a(103),_e=a.n(Ne),De=a(104),Ie=a.n(De),Oe=a(34),Re=Object(I.withStyles)(function(e){return{card:{margin:"3.5px",boxSizing:"border-box",maxWidth:"100%",height:"400px"},badge:{top:0,right:-30,justifyContent:"left"},title:{fontSize:24},content:{textAlign:"center"},stat:{marginBottom:10,display:"block"},media:{height:"100px",width:"100px",margin:"auto"},colorKey:{width:"100%",padding:"10px 0",marginBottom:"10px",justifyContent:"space-around",borderRadius:"5px 5px 0 0"}}})(function(e){var t=e.classes,a=null,n=null;switch(e.frameworkName){case"react":a=be.a,n="#61DAFB";break;case"angular.js":a=ve.a,n="#C3002F";break;case"vue":a=we.a,n="#4DBA87";break;case"ember.js":a=ye.a,n="#E24B31";break;default:a=null}return r.a.createElement(ue.a,{className:t.card,key:e.key},r.a.createElement("div",{className:t.logoView},r.a.createElement("div",{className:t.colorKey,style:{backgroundColor:n}}),r.a.createElement(ge.a,{className:t.media,image:a,title:"framework-logo",style:{borderBottom:"2px solid ".concat(n)}})),r.a.createElement(de.a,{className:t.content},r.a.createElement(J.a,{className:t.title,color:"textPrimary",gutterBottom:!0},e.frameworkName.toString().charAt(0).toUpperCase()+e.frameworkName.substr(1)),r.a.createElement(J.a,{color:"textSecondary",gutterBottom:!0},e.desc.toString().charAt(0).toUpperCase()+e.desc.substr(1)),r.a.createElement(J.a,{className:t.stat,color:"textSecondary"},r.a.createElement(Oe.a,{badgeContent:e.forks,classes:{badge:t.badge}},r.a.createElement(xe,{icon:je.a}))),r.a.createElement(J.a,{className:t.stat,color:"textSecondary"},r.a.createElement(Oe.a,{badgeContent:e.stars,classes:{badge:t.badge}},r.a.createElement(xe,{icon:Se.a}))),r.a.createElement(J.a,{className:t.stat,color:"textSecondary"},r.a.createElement(Oe.a,{badgeContent:e.watchers,classes:{badge:t.badge}},r.a.createElement(xe,{icon:_e.a}))),r.a.createElement(J.a,{className:t.stat,color:"textSecondary"},r.a.createElement(Oe.a,{badgeContent:e.openIssues,classes:{badge:t.badge}},r.a.createElement(xe,{icon:Ie.a})))))}),Be=a(105),Le=a.n(Be),He=function(e){var t=Object.keys(e.frameworks).map(function(t){return Object(oe.a)(Array(e.frameworks)).map(function(a,n){return r.a.createElement(ie.a,{item:!0,xs:12,sm:6,md:3,key:e.frameworks[n].id},r.a.createElement(Re,{frameworkName:e.frameworks[t].name,forks:e.frameworks[t].forks,desc:e.frameworks[t].description,stars:e.frameworks[t].stargazers_count,watchers:e.frameworks[t].subscribers_count,openIssues:e.frameworks[t].open_issues_count}))})});return r.a.createElement("div",{className:Le.a.Cards},r.a.createElement(ie.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},t))};function Ae(){return r.a.createElement("div",{style:{margin:"40px"}})}var qe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={frameworks:{}},a.componentWillMount=function(){a.getDepData(),a.getScrapedData(),a.getGitHubAPIData()},a.getGitHubAPIData=function(){try{Promise.all(["https://api.github.com/repos/facebook/react","https://api.github.com/repos/angular/angular.js","https://api.github.com/repos/vuejs/vue","https://api.github.com/repos/emberjs/ember.js"].map(function(e){return fetch(e).then(Te).then(We).catch(function(e){return console.log("There was a problem fetching & parsing data!",e)})})).then(function(e){a.setState({frameworks:e})})}catch(e){console.log(e)}},a.getScrapedData=function(){try{Promise.all(["react","angular","vue","ember"].map(function(e){return fetch("api/frameworks/pulse/".concat(e)).then(Te).then(We).catch(function(e){return console.log("There was a problem fetching & parsing data!",e)})})).then(function(e){a.setState({scraped:e})})}catch(e){console.log(e)}},a.getDepData=function(){try{Promise.all(["react","angular","vue","ember"].map(function(e){return fetch("api/frameworks/deps/".concat(e)).then(Te).then(We).catch(function(e){return console.log("There was a problem fetching & parsing data!",e)})})).then(function(e){a.setState({deps:e})})}catch(e){console.log(e)}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d,null,this.state.scraped?r.a.createElement(se,{react:this.state.scraped[0],reactDeps:this.state.deps[0],angular:this.state.scraped[1],angularDeps:this.state.deps[1],vue:this.state.scraped[2],vueDeps:this.state.deps[2],ember:this.state.scraped[3],emberDeps:this.state.deps[3]}):r.a.createElement("p",null,"Loading..."),r.a.createElement("h1",{style:{textAlign:"center"}},"Lifetime Stats: "),r.a.createElement(He,{frameworks:this.state.frameworks}),r.a.createElement(Ae,null))}}]),t}(n.Component);function Te(e){return e.ok?Promise.resolve(e):Promise.reject(new Error(e.statusText))}function We(e){return e.json()}var Ge=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(qe,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){e.exports={Header:"Header_Header__go5It",Logo:"Header_Logo__338sS",DesktopOnly:"Header_DesktopOnly__20HWu",Title:"Header_Title__2pTKb"}},91:function(e,t,a){e.exports={Content:"Layout_Content__1S_Rv"}},92:function(e,t,a){e.exports=a.p+"static/media/GitHub_logo_2013_padded.b4b0a1ac.svg"},93:function(e,t,a){e.exports={Logo:"Logo_Logo__3GED5"}},94:function(e,t,a){e.exports={RefreshButton:"RefreshButton_RefreshButton__3HFeL"}},95:function(e,t,a){e.exports=a.p+"static/media/refresharrowwhite.4115bd95.svg"},97:function(e,t,a){e.exports=a.p+"static/media/react.8c0e654e.png"},98:function(e,t,a){e.exports=a.p+"static/media/angular.5c69e565.svg"},99:function(e,t,a){e.exports=a.p+"static/media/Vue.js_Logo.938241fe.svg"}},[[190,2,1]]]);
//# sourceMappingURL=main.63659b91.chunk.js.map
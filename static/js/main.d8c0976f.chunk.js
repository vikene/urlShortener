(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(33),r=a.n(c),o=(a(89),a(17)),i=a(18),s=a(20),u=a(19),d=a(21),h=(a(91),a(92),a(174)),m=a(172),f=a(173),b=a(24),p=a(68),E=a(23),v=(a(94),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"lander"},l.a.createElement("h1",null,"Chinna Link"),l.a.createElement("p",null,"Shorten your links at ease!")))}}]),t}(n.Component)),g=a(25),k=a(169),O=a(170),j=a(175),y=a(171),S=(a(96),a(37)),C=a.n(S),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={url:"",buttonEnabled:!0,buttonStyle:"danger",ui:"addurl",redirectionurl:""},e.handleChange=e.handleChange.bind(Object(g.a)(Object(g.a)(e))),e.buttonClick=e.buttonClick.bind(Object(g.a)(Object(g.a)(e))),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"validateUrl",value:function(e){return/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)}},{key:"getValidationState",value:function(){var e=this.state.url;return 1==this.validateUrl(e)?(this.state.buttonEnabled&&this.setState({buttonStyle:"success",buttonEnabled:!1}),"success"):e.length>2?(this.state.buttonEnabled||this.setState({buttonStyle:"danger",buttonEnabled:!0}),"error"):null}},{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"buttonClick",value:function(){var e=this,t={url:this.state.url};JSON.stringify(t);C.a.post("https://8523oudczf.execute-api.us-east-1.amazonaws.com/dev/posturl",t).then(function(t){console.log(t),e.setState({ui:"success",redirectionurl:t.data.message})})}},{key:"render",value:function(){return"addurl"==this.state.ui?l.a.createElement("div",{className:"addUI"},l.a.createElement("form",null,l.a.createElement(k.a,{controlid:"addurl",validationState:this.getValidationState()},l.a.createElement(O.a,null,"URL to shorten"),l.a.createElement(j.a,{type:"text",value:this.state.url,onChange:this.handleChange,placeholder:"Enter URL"}))),l.a.createElement("div",{className:"submitFold"},l.a.createElement(y.a,{onClick:this.buttonClick,bsStyle:this.state.buttonStyle,disabled:this.state.buttonEnabled},"Shorten"))):"success"==this.state.ui?l.a.createElement("div",{className:"successCard"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:"./tick.png",style:{width:"30%"}}),l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Share this link"),l.a.createElement("p",null,this.state.redirectionurl)))):void 0}}]),t}(n.Component),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={timeRemaining:5},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.hashLink;0==e.length&&alert("Please provide a proper link");var t="https://8523oudczf.execute-api.us-east-1.amazonaws.com/dev/u/"+e;C.a.post(t,{}).then(function(e){var t=e.data.message;"No such url exists!"===t?console.log("No such URL exists ? how about creating one ?"):window.location=t}).catch(function(e){console.log("Error occured"+e)})}},{key:"render",value:function(){var e=this.props.match.params.hashLink;return console.log(e),l.a.createElement("div",null,l.a.createElement("h1",null))}}]),t}(n.Component),L=function(){return l.a.createElement(p.a,null,l.a.createElement(E.a,{path:"/",exact:!0,component:v}),l.a.createElement(E.a,{path:"/addlink",exact:!0,component:w}),l.a.createElement(E.a,{path:"/u/:hashLink",component:N}))},x=a(78),z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container"},l.a.createElement(h.a,{fluid:!0,collapseOnSelect:!0},l.a.createElement(h.a.Header,null,l.a.createElement(h.a.Brand,null,l.a.createElement(b.a,{to:"/"},"Chinna Link")),l.a.createElement(h.a.Toggle,null)),l.a.createElement(h.a.Collapse,null,l.a.createElement(m.a,{pullRight:!0},l.a.createElement(x.LinkContainer,{to:"/addlink"},l.a.createElement(f.a,null,"Add Link"))))),l.a.createElement(L,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(65);r.a.render(l.a.createElement(U.a,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a(168)},89:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},92:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){}},[[83,2,1]]]);
//# sourceMappingURL=main.d8c0976f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(143),o=n(150),s=n(148);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"speakers"}),r.a.createElement("div",{className:"about"},r.a.createElement("h2",null,"10th July 2019 Speakers"),r.a.createElement("div",{className:"speaker-container"},r.a.createElement("img",{src:"/lihongyi.png"}),r.a.createElement("p",null,"Li Hong Yi: Public Key Cryptography in Open Government Products"),r.a.createElement("small",null,"Hongyi leads a team of engineers, designers, and product managers who build technology for the public good. Projects they work on include Parking.sg – an app to replace parking coupons, and Data.gov.sg – the government’s open data repository. He believes in working on real problems, building for the user, and pushing for change. Prior to joining the government, Hongyi worked at Google on the distributed databases and image search teams. He previously attended MIT where he obtained degrees in computer science and economics. In his free time he works on personal projects like typographing.com and chatlet.com")),r.a.createElement("h2",null,"We are always on the lookout for speakers to share on the following topics:"),r.a.createElement("p",null,"If you are passionate about these topics, hit us up ",r.a.createElement("a",{href:"https://forms.gle/X7EHj56wYMJ5wv2y6"},"here"),". We welcome (and strongly encourage) first timers as well!"),r.a.createElement("li",null,"Personal Pet projects"),r.a.createElement("li",null,"New technologies you have been playing with"),r.a.createElement("li",null,"Team experiences others might find useful"),r.a.createElement("li",null,"Opinions on design patterns architecture"),r.a.createElement("li",null,"State of XYZ (e.g., Frontend/Backend/Devops/QE/Infosec/Ops/etc)"),r.a.createElement(i.Link,{to:"/"},"Go back")))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(142),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(144),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Engine Room"}}}}},146:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(52),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(149),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(151),l=n.n(c),u=n(143);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Engine Room",description:"A Product-Centric Meetup for Technical Humans",author:"@zephinzer and @stacyyg"}}}}},150:function(e,t,n){"use strict";var a=n(145),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(143),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};n(147);var u=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px"}},i.a.createElement("main",null,t)))},data:a})};u.propTypes={children:s.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-speak-js-a163e5483681a7c34d41.js.map
<<<<<<< HEAD
webpackJsonp([4],{0:function(e,r,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var t=a(3),l=s(t),n=a(15),o=s(n),c=a(21),u=a(22),m=s(u),p=a(556),d={className:"[Optional] - Any className you would like to add to the ProgressBar",progress:"[Optional] - The initial 'fill' of the ProgressBar",showLabel:"[Optional] - Show the progress in % on the ProgressBar",type:"[Optional] - The type of ProgressBar, as a string -  [default | primary | secondary | temperature]"},i={React:l["default"],ReactDOM:o["default"],ProgressBar:c.ProgressBar},g=function(){return l["default"].createElement("div",null,l["default"].createElement("h1",{className:"site-headline"},"Progress Bars ",l["default"].createElement("small",null,"(pssst! click on progress bars!)")),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Progress Bar Types"),l["default"].createElement(c.ProgressBar,{progress:20,className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:40,type:"primary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:60,type:"secondary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:80,type:"temperature",className:"u-m-b"})),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Progress Bar Labels"),l["default"].createElement("p",{className:"site-copy"},"Include ",l["default"].createElement("code",null,"showLabel")," property to create progress bar label."),l["default"].createElement(c.ProgressBar,{progress:60,showLabel:!0,type:"primary"})),l["default"].createElement("section",null,l["default"].createElement("h3",{className:"site-subheadline"},"Playground"),l["default"].createElement(m["default"],{docClass:c.ProgressBar,propDescriptionMap:d,codeText:p,scope:i,noRender:!1})))};o["default"].render(l["default"].createElement(g,null),document.getElementById("js-app"))},556:function(e,r){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n      	<ProgressBar progress={30} className="u-m-b" />\n        <ProgressBar progress={60} showLabel type="primary" className="u-m-b" />\n        <ProgressBar progress={90} showLabel type="temperature" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
||||||| merged common ancestors
webpackJsonp([4],{0:function(e,r,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var t=a(3),l=s(t),n=a(15),o=s(n),c=a(21),u=a(23),m=s(u),p=a(556),d={className:"[Optional] - Any className you would like to add to the ProgressBar",progress:"[Optional] - The initial 'fill' of the ProgressBar",showLabel:"[Optional] - Show the progress in % on the ProgressBar",type:"[Optional] - The type of ProgressBar, as a string -  [default | primary | secondary | temperature]"},i={React:l["default"],ReactDOM:o["default"],ProgressBar:c.ProgressBar},g=function(){return l["default"].createElement("div",null,l["default"].createElement("h1",{className:"site-headline"},"Progress Bars ",l["default"].createElement("small",null,"(pssst! click on progress bars!)")),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Progress Bar Types"),l["default"].createElement(c.ProgressBar,{progress:20,className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:40,type:"primary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:60,type:"secondary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:80,type:"temperature",className:"u-m-b"})),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Progress Bar Labels"),l["default"].createElement("p",{className:"site-copy"},"Include ",l["default"].createElement("code",null,"showLabel")," property to create progress bar label."),l["default"].createElement(c.ProgressBar,{progress:60,showLabel:!0,type:"primary"})),l["default"].createElement("section",null,l["default"].createElement("h3",{className:"site-subheadline"},"Playground"),l["default"].createElement(m["default"],{docClass:c.ProgressBar,propDescriptionMap:d,codeText:p,scope:i,noRender:!1})))};o["default"].render(l["default"].createElement(g,null),document.getElementById("js-app"))},556:function(e,r){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n      	<ProgressBar progress={30} className="u-m-b" />\n        <ProgressBar progress={60} showLabel type="primary" className="u-m-b" />\n        <ProgressBar progress={90} showLabel type="temperature" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
=======
webpackJsonp([6],{0:function(e,a,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var t=r(3),l=s(t),n=r(15),o=s(n),c=r(21),m=r(22),u=s(m),p=r(556),d={className:"[Optional] - Include additional class name(s)",progress:"[Optional] - The initial 'fill' of the ProgressBar",showLabel:"[Optional] - Show the progress in % on the ProgressBar",type:"[Optional] - Type of ProgressBar, as a string -  [default | primary | secondary | temperature]"},i={React:l["default"],ReactDOM:o["default"],ProgressBar:c.ProgressBar},g=function(){return l["default"].createElement("div",null,l["default"].createElement("h1",{className:"site-headline"},"Progress Bars ",l["default"].createElement("small",null,"(pssst! click on progress bars!)")),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Progress Bar Types"),l["default"].createElement(c.ProgressBar,{progress:20,className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:40,type:"primary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:60,type:"secondary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:80,type:"temperature",className:"u-m-b"})),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Progress Bar Labels"),l["default"].createElement("p",{className:"site-copy"},"Include ",l["default"].createElement("code",null,"showLabel")," property to create progress bar label."),l["default"].createElement(c.ProgressBar,{progress:60,showLabel:!0,type:"primary"})),l["default"].createElement("section",null,l["default"].createElement("h3",{className:"site-subheadline"},"Playground"),l["default"].createElement(u["default"],{docClass:c.ProgressBar,propDescriptionMap:d,codeText:p,scope:i,noRender:!1})))};o["default"].render(l["default"].createElement(g,null),document.getElementById("js-app"))},556:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n      	<ProgressBar progress={30} className="u-m-b" />\n        <ProgressBar progress={60} showLabel type="primary" className="u-m-b" />\n        <ProgressBar progress={90} showLabel type="temperature" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
>>>>>>> 7381ddeb10234154c229ca28e03ef73bbf702e91

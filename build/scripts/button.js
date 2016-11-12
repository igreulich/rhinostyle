webpackJsonp([20],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(3),u=l(n),c=a(10),o=l(c),s=a(12),i=a(16),m=l(i),d=a(630),r={active:"[Optional] - Button is active",blankWindow:"[Optional] - Open URL in blank browser window",block:"[Optional] - Button is block level",className:"[Optional] - Include additional class name(s)",onClick:"[Optional] - Include click function for Button",disabled:"[Optional] - Button is disabled",iconOnly:"[Optional] - Button has an icon but no text",route:"[Optional] - React-router route to use for item",size:"[Optional] - Button size -  [small | large]",type:"[Optional] - Button type -  [default | primary | secondary | outline-default | outline-primary | outline-reversed | link]",url:"[Optional] - URL for item"},f={React:u["default"],ReactDOM:o["default"],Button:s.Button,Icon:s.Icon},p=function(){return u["default"].createElement("div",null,u["default"].createElement("h1",{className:"site-headline"},"Buttons"),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Types"),u["default"].createElement("p",{className:"site-copy"},u["default"].createElement("code",null,'type="default | primary | secondary | outline-default | outline-primary | link | danger"')),u["default"].createElement("div",{className:"site-example-buttons u-m-b-md"},u["default"].createElement(s.Button,null,"Default"),u["default"].createElement(s.Button,{type:"primary"},"Primary"),u["default"].createElement(s.Button,{type:"secondary"},"Secondary"),u["default"].createElement(s.Button,{type:"outline-default"},"Outline Default"),u["default"].createElement(s.Button,{type:"outline-primary"},"Outline Primary"),u["default"].createElement(s.Button,{type:"link"},"Link"),u["default"].createElement(s.Button,{type:"danger"},"Danger")),u["default"].createElement("p",{className:"site-copy"},u["default"].createElement("code",null,'type="outline-reversed"')),u["default"].createElement("div",{className:"site-example-buttons u-p-a u-bg-primary"},u["default"].createElement(s.Button,{type:"outline-reversed"},"Outline Reversed"))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Sizes"),u["default"].createElement("div",{className:"u-m-b-md"},u["default"].createElement("h5",{className:"site-miniheadline"},"Large Button"),u["default"].createElement("p",{className:"site-copy"},u["default"].createElement("code",null,'size="large"')),u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(s.Button,{size:"large"},"Large"),u["default"].createElement(s.Button,{size:"large"},u["default"].createElement(s.Icon,{icon:"cog"})," Large"),u["default"].createElement(s.Button,{size:"large",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"cog"})))),u["default"].createElement("div",null,u["default"].createElement("h5",{className:"site-miniheadline"},"Small Button"),u["default"].createElement("p",{className:"site-copy"},u["default"].createElement("code",null,'size="small"')),u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(s.Button,{size:"small"},"Small"),u["default"].createElement(s.Button,{size:"small"},u["default"].createElement(s.Icon,{icon:"cog"})," Small"),u["default"].createElement(s.Button,{size:"small",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"cog"}))))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Modifiers"),u["default"].createElement("div",{className:"u-m-b-md"},u["default"].createElement("h5",{className:"site-miniheadline"},"Block Buttons"),u["default"].createElement("p",{className:"site-copy"},"Include ",u["default"].createElement("code",null,"block")," property to create a block level button."),u["default"].createElement(s.Button,{block:!0},"Block Button")),u["default"].createElement("div",null,u["default"].createElement("h5",{className:"site-miniheadline"},"Icon-Only Buttons"),u["default"].createElement("p",{className:"site-copy"},"Include ",u["default"].createElement("code",null,"iconOnly")," property when creating a button with an icon but no text. This modifier adjusts the padding to give a more square appearance."),u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(s.Button,{iconOnly:!0},u["default"].createElement(s.Icon,{icon:"sms"})),u["default"].createElement(s.Button,{type:"primary",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"email"})),u["default"].createElement(s.Button,{type:"secondary",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"cog"})),u["default"].createElement(s.Button,{type:"outline-default",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"clock"})),u["default"].createElement(s.Button,{type:"outline-primary",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"pencil"}))))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button States"),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(s.Button,null,"Default"),u["default"].createElement(s.Button,{active:!0},"Default Active"),u["default"].createElement(s.Button,{disabled:!0},"Default Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(s.Button,{type:"primary"},"Primary"),u["default"].createElement(s.Button,{type:"primary",active:!0},"Primary Active"),u["default"].createElement(s.Button,{type:"primary",disabled:!0},"Primary Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(s.Button,{type:"secondary"},"Secondary"),u["default"].createElement(s.Button,{type:"secondary",active:!0},"Secondary Active"),u["default"].createElement(s.Button,{type:"secondary",disabled:!0},"Secondary Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(s.Button,{type:"outline-default"},"Outline Default"),u["default"].createElement(s.Button,{type:"outline-default",active:!0},"Outline Default Active"),u["default"].createElement(s.Button,{type:"outline-default",disabled:!0},"Outline Default Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(s.Button,{type:"outline-primary"},"Outline Primary"),u["default"].createElement(s.Button,{type:"outline-primary",active:!0},"Outline Primary Active"),u["default"].createElement(s.Button,{type:"outline-primary",disabled:!0},"Outline Primary Disabled")))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Badges"),u["default"].createElement("h5",{className:"site-miniheadline"},"Badges Inside of Buttons"),u["default"].createElement("p",null,"Include a span with ",u["default"].createElement("code",null,"btn__badge")," class."),u["default"].createElement("div",{className:"site-example-buttons u-m-b-md"},u["default"].createElement(s.Button,null,"Default  ",u["default"].createElement("span",{className:"btn__badge"},"12")),u["default"].createElement(s.Button,{type:"primary"},"Primary  ",u["default"].createElement("span",{className:"btn__badge"},"12")),u["default"].createElement(s.Button,{type:"secondary"},"Secondary  ",u["default"].createElement("span",{className:"btn__badge"},"2")),u["default"].createElement(s.Button,{type:"outline-default"},"Outline Default  ",u["default"].createElement("span",{className:"btn__badge"},"12")),u["default"].createElement(s.Button,{type:"outline-primary"},"Outline Primary  ",u["default"].createElement("span",{className:"btn__badge"},"12")),u["default"].createElement(s.Button,{type:"link"},"Link  ",u["default"].createElement("span",{className:"btn__badge"},"12")),u["default"].createElement(s.Button,{type:"danger"},"Danger  ",u["default"].createElement("span",{className:"btn__badge"},"12"))),u["default"].createElement("div",{className:"site-example-buttons u-p-a u-bg-primary"},u["default"].createElement(s.Button,{type:"outline-reversed"},"Outline Reversed  ",u["default"].createElement("span",{className:"btn__badge"},"12")))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Ellipsis"),u["default"].createElement("h5",{className:"site-miniheadline"},"Long Text Inside of Buttons"),u["default"].createElement("p",null,"Wrap long button text in ",u["default"].createElement("code",null,"u-text-overflow")," utility class in order to allow ellipsis."),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,{className:"u-m-b-sm"},u["default"].createElement("span",{className:"u-text-overflow"},"Button With Really Long Name")),u["default"].createElement("br",null),u["default"].createElement(s.Button,null,u["default"].createElement(s.Icon,{icon:"lock"})," ",u["default"].createElement("span",{className:"u-text-overflow"},"Button With Really Long Name and Icon")))),u["default"].createElement("section",null,u["default"].createElement("h3",{className:"site-subheadline"},"Playground"),u["default"].createElement(m["default"],{docClass:s.Button,propDescriptionMap:r,codeText:d,scope:f,noRender:!1})))};o["default"].render(u["default"].createElement(p,null),document.getElementById("js-app"))},630:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-buttons">\n        <div className="u-m-b u-bg-gray-lightest u-p-a">\n          <Button onClick={() => console.log(\'clicked too\')} url="http://www.rhinogram.com" blankWindow>Default</Button>\n          <Button type="outline-default" route="/home">Outline Default</Button>\n          <Button type="primary">Primary</Button>\n          <Button type="secondary" iconOnly><Icon icon="cog" /></Button>\n        </div>\n        <div className="u-m-b">\n          <Button size="large">Large</Button>\n          <Button size="large"><Icon icon="cog" />&nbsp;Large</Button>\n          <Button size="large" iconOnly><Icon icon="cog" /></Button>\n          <Button>Default</Button>\n          <Button type="outline-primary">Outline Primary with Badge &nbsp;<span className="btn__badge">12</span></Button>\n          <Button><Icon icon="cog" />&nbsp;Default</Button>\n          <Button iconOnly><Icon icon="cog" /></Button>\n          <Button size="small">Small</Button>\n          <Button size="small"><Icon icon="cog" />&nbsp;Small</Button>\n          <Button size="small" iconOnly><Icon icon="cog" /></Button>\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
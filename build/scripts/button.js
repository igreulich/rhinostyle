webpackJsonp([9],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(3),u=l(n),c=a(18),s=l(c),m=a(26),o=a(29),i=l(o),d=a(433),r={React:u["default"],ReactDOM:s["default"],Button:m.Button,Icon:m.Icon},f=function(){return u["default"].createElement("div",null,u["default"].createElement("h1",{className:"site-headline"},"Buttons"),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Types"),u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,null,"Default"),u["default"].createElement(m.Button,{type:"primary"},"Primary"),u["default"].createElement(m.Button,{type:"secondary"},"Secondary"),u["default"].createElement(m.Button,{outline:!0},"Default Outline"),u["default"].createElement(m.Button,{type:"primary",outline:!0},"Primary Outline"),u["default"].createElement(m.Button,{type:"link"},"Link"))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Sizes"),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,{size:"large"},"Large"),u["default"].createElement(m.Button,null,"Default"),u["default"].createElement(m.Button,{size:"small"},"Small"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,{size:"large"},"Large"),u["default"].createElement(m.Button,{size:"large"},u["default"].createElement(m.Icon,{icon:"cog"})," Large"),u["default"].createElement(m.Button,{size:"large",iconOnly:!0},u["default"].createElement(m.Icon,{icon:"cog"})))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,null,"Default"),u["default"].createElement(m.Button,null,u["default"].createElement(m.Icon,{icon:"cog"})," Default"),u["default"].createElement(m.Button,{iconOnly:!0},u["default"].createElement(m.Icon,{icon:"cog"})))),u["default"].createElement("div",null,u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,{size:"small"},"Small"),u["default"].createElement(m.Button,{size:"small"},u["default"].createElement(m.Icon,{icon:"cog"})," Small"),u["default"].createElement(m.Button,{size:"small",iconOnly:!0},u["default"].createElement(m.Icon,{icon:"cog"}))))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Modifiers"),u["default"].createElement("div",{className:"u-m-b-md"},u["default"].createElement("h5",{className:"site-miniheadline"},"Block Buttons"),u["default"].createElement("p",{className:"site-copy"},"Add ",u["default"].createElement("code",null,"block=","{true}")," to create a block level button."),u["default"].createElement(m.Button,{block:!0},"Block Button")),u["default"].createElement("div",null,u["default"].createElement("h5",{className:"site-miniheadline"},"Icon-Only Buttons"),u["default"].createElement("p",{className:"site-copy"},"Add ",u["default"].createElement("code",null,"iconOnly=","{true}")," when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance."),u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,{iconOnly:!0},u["default"].createElement(m.Icon,{icon:"sms"})),u["default"].createElement(m.Button,{type:"primary",iconOnly:!0},u["default"].createElement(m.Icon,{icon:"email"})),u["default"].createElement(m.Button,{type:"secondary",iconOnly:!0},u["default"].createElement(m.Icon,{icon:"cog"})),u["default"].createElement(m.Button,{outline:!0,iconOnly:!0},u["default"].createElement(m.Icon,{icon:"clock"})),u["default"].createElement(m.Button,{outline:!0,type:"primary",iconOnly:!0},u["default"].createElement(m.Icon,{icon:"pencil"}))))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button States"),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,null,"Default"),u["default"].createElement(m.Button,{className:"active"},"Default Active"),u["default"].createElement(m.Button,{className:"disabled"},"Default Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,{type:"primary"},"Primary"),u["default"].createElement(m.Button,{type:"primary",className:"active"},"Primary Active"),u["default"].createElement(m.Button,{type:"primary",className:"disabled"},"Primary Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,{type:"secondary"},"Secondary"),u["default"].createElement(m.Button,{type:"secondary",className:"active"},"Secondary Active"),u["default"].createElement(m.Button,{type:"secondary",className:"disabled"},"Secondary Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,{outline:!0},"Default Outline"),u["default"].createElement(m.Button,{outline:!0,className:"active"},"Default Outline Active"),u["default"].createElement(m.Button,{outline:!0,className:"disabled"},"Default Outline Disabled"))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement("div",{className:"site-example-buttons"},u["default"].createElement(m.Button,{type:"primary",outline:!0},"Primary Outline"),u["default"].createElement(m.Button,{type:"primary",outline:!0,className:"active"},"Primary Outline Active"),u["default"].createElement(m.Button,{type:"primary",outline:!0,className:"disabled"},"Primary Outline Disabled")))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Ellipsis"),u["default"].createElement("h5",{className:"site-miniheadline"},"Long Text Inside Buttons"),u["default"].createElement("p",null,"Wrap long button text in ",u["default"].createElement("code",null,"u-text-overflow")," utility class in order to allow ellipsis. This rule applies to dropdowns as well."),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(m.Button,{className:"u-m-b-sm"},u["default"].createElement("span",{className:"u-text-overflow"},"Button With Really Long Name")),u["default"].createElement("br",null),u["default"].createElement(m.Button,null,u["default"].createElement(m.Icon,{icon:"lock"})," ",u["default"].createElement("span",{className:"u-text-overflow"},"Button With Really Long Name and Icon")))),u["default"].createElement("section",null,u["default"].createElement("h3",{className:"site-subheadline"},"Playground"),u["default"].createElement(i["default"],{codeText:d,scope:r,noRender:!1})))};s["default"].render(u["default"].createElement(f,null),document.getElementById("js-app"))},433:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-buttons">\n        <Button>Default</Button>\n        <Button type="primary">Primary</Button>\n        <Button type="secondary" iconOnly={true}><Icon icon="cog" /></Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
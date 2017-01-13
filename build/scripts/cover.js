webpackJsonp([4],{0:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=t(15),r=a(o),s=t(3),l=a(s),i=t(12),d=a(i),c=t(10),m=t(638),u=t(637),v=t(639),C=t(640),p={className:"[Optional] - Additional class to add to cover div"},f={icon:"[Optional] - Attaches an Icon to the Cover Header",iconClassName:"[Optional] - Adds a class to the Cover Header icon",onClose:"[Optional] - Callback function to execute in addition to closing the cover",title:"[Optional] - Cover Title -  String to represent the Cover Header"},h={size:"[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized cover body"},N={React:l.default,ReactDOM:d.default,Button:c.Button,Input:c.Input,Cover:c.Cover,CoverSystem:c.CoverSystem,CoverHeader:c.CoverHeader,CoverBody:c.CoverBody,CoverFooter:c.CoverFooter,Icon:c.Icon},E=function(){return l.default.createElement("div",null,l.default.createElement("h1",{className:"site-headline"},"Covers"),l.default.createElement("section",{className:"site-section"},l.default.createElement("h3",{className:"site-subheadline"},"Cover Example"),l.default.createElement("p",{className:"site-copy"},"You can inject a cover by calling ",l.default.createElement("code",null,"CoverSystem.addCover(cover)"),", where ",l.default.createElement("code",null,"cover")," can be ",l.default.createElement("code",null,"Cover")," containing ",l.default.createElement("code",null,"CoverHeader"),", ",l.default.createElement("code",null,"CoverBody"),", ",l.default.createElement("code",null,"CoverFooter"),"."),l.default.createElement(r.default,{docClass:c.Cover,propDescriptionMap:p,codeText:u,scope:N,noRender:!1})),l.default.createElement("section",{className:"site-section"},l.default.createElement("h3",{className:"site-subheadline"},"CoverHeader"),l.default.createElement(r.default,{docClass:c.CoverHeader,propDescriptionMap:f,codeText:C,scope:N,noRender:!1})),l.default.createElement("section",{className:"site-section"},l.default.createElement("h3",{className:"site-subheadline"},"CoverBody"),l.default.createElement(r.default,{docClass:c.CoverBody,propDescriptionMap:h,codeText:m,scope:N,noRender:!1})),l.default.createElement("section",{className:"site-section"},l.default.createElement("h3",{className:"site-subheadline"},"CoverFooter"),l.default.createElement(r.default,{docClass:c.CoverFooter,codeText:v,scope:N,noRender:!1})))};d.default.render(l.default.createElement(E,null),document.getElementById("js-app"))},637:function(e,n){e.exports='class ComponentExample extends React.Component {\n  state = {\n    firstName: \'\',\n    lastName: \'\',\n  }\n\n  onClick = () => {\n    CoverSystem.addCover(this.renderContent());\n  };\n\n  closeCover = () => {\n    CoverSystem.removeCover();\n  }\n\n  handleChange = (name, value) => {\n    const newState = {};\n\n    newState[name] = value;\n    this.setState(newState);\n  }\n\n  saveChanges = () => {\n    const errors = {};\n\n    if (!this.state.firstName) {\n      errors.firstName = \'FirstName is required!\';\n    }\n\n    if (!this.state.lastName) {\n      errors.lastName = \'LastName is required!\';\n    }\n\n    const errorCount  = Object.keys(errors).length\n\n    if (errorCount > 0) {\n      CoverSystem.refreshCover(this.renderContent(errors));\n    } else {\n      alert(\'Changes were saved!\');\n      this.closeCover();\n    }\n  }\n\n  renderContent = (errors) => {\n    const errorList = errors || {};\n\n    return (\n      <Cover>\n        <CoverHeader icon="pencil" title="This is a sample Cover" />\n        <CoverBody>\n          <div className="form">\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div>\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n          </div>\n        </CoverBody>\n        <CoverFooter>\n          <div className="u-text-right">\n            <Button type="default" onClick={this.closeCover}>Close</Button>&nbsp;\n            <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n          </div>\n        </CoverFooter>\n      </Cover>\n    );\n  }\n\n  render() {\n    return (\n      <div>\n        <Button type="primary" onClick={this.onClick}>Launch Cover</Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},638:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverBody>\n        <div className="form">\n          <div className="form__group">\n            <Input label="First Name" name="firstName" initialValue="First Name" validationMessage="" required />\n          </div>\n          <div>\n            <Input label="Last Name" name="lastName" initialValue="" validationMessage="LastName is required!" required />\n          </div>\n        </div>\n      </CoverBody>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},639:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverFooter>\n        <div className="u-text-right">\n          <Button type="default" onClick={this.closeCover}>Close</Button><Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n        </div>\n      </CoverFooter>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},640:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverHeader icon="cog" title="This is a sample CoverHeader" />\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});
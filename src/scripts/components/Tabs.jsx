import React        from 'react';
import NavTabs      from './NavTabs';
import TabsContent  from './TabsContent';

class Tabs extends React.Component {
  static displayName = 'RhinoTabs';

  static propTypes = {
    activeKey:        React.PropTypes.number,
    children:         React.PropTypes.node,
    className:        React.PropTypes.string,
    select:           React.PropTypes.func,
  }

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, child => {
      if (child.type === NavTabs) {
        returnChild = React.cloneElement(child, {
          activeKey: this.props.activeKey,
          select: this.props.select,
        });
      } else if (child.type === TabsContent) {
        returnChild = React.cloneElement(child, {
          activeKey: this.props.activeKey,
        });
      } else {
        returnChild = child;
      }
      return returnChild;
    });
  }


  render() {
    return (
      <div className={this.props.className}>
        {this.getChildren()}
      </div>
    );
  }
}

export default Tabs;

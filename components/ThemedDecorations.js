const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithNewClass = React.Children.map(this.props.children, child => {
      debugger
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>
        {childrenWithNewClass}
      </div>
    );
  }
}



module.exports = ThemedDecorations;

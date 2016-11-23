import React from 'react';
import cx    from 'classnames';

class Textarea extends React.Component {
  static displayName = 'RhinoTextarea';

  static propTypes = {
    abbrMaxCharacters:  React.PropTypes.bool,
    className:          React.PropTypes.string,
    explanationMessage: React.PropTypes.string,
    initialValue:       React.PropTypes.string,
    label:              React.PropTypes.string,
    maxCharacters:      React.PropTypes.number,
    name:               React.PropTypes.string,
    onChange:           React.PropTypes.func,
    placeholder:        React.PropTypes.string,
    required:           React.PropTypes.bool,
    rows:               React.PropTypes.number,
  };

  static defaultProps = {
    abbrMaxCharacters: false,
    label:             '',
    maxCharacters:     null,
    name:              '',
    placeholder:       '',
    required:          false,
    rows:              3,
  };

  state = {
    charactersLeft: '',
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue });
    }

    if (this.props.maxCharacters && this.props.initialValue) {
      this.setState({ charactersLeft: this.props.maxCharacters - this.props.initialValue.length });
    } else if (this.props.maxCharacters) {
      this.setState({ charactersLeft: this.props.maxCharacters });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: nextProps.initialValue,
        charactersLeft: this.props.maxCharacters - nextProps.initialValue.length,
      });
    }
  }

  _handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });

    this.setState({ charactersLeft: this.props.maxCharacters - event.target.value.length });

    if (this.props.onChange && typeof (this.props.onChange === 'function')) {
      this.props.onChange(event.target.id, event.target.value);
    }
  }

  render() {
    const { abbrMaxCharacters, className, explanationMessage, label, maxCharacters, name, placeholder, required, rows } = this.props;
    const textAreaClasses = cx('form__control');
    const formGroupClasses = cx('form__group', className);
    const characterCountClasses = cx('form__character-count', {
      'form__character-count--danger': this.state.charactersLeft < 11,
    });

    const showExplanationMessage = () => {
      if (explanationMessage) {
        return <div className="form__explanation-message">{explanationMessage}</div>;
      }

      return false;
    };

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label} {required ? <span className="form__asterisk">*</span> : null}</label>;
      }

      return false;
    };

    const showCharacterCount = () => {
      if (maxCharacters) {
        return <div className={characterCountClasses}>{this.state.charactersLeft} {!abbrMaxCharacters ? <span>characters left</span> : null}</div>;
      }

      return false;
    };

    return (
      <div className={formGroupClasses}>
        {showLabel()}
        <textarea id={name} className={textAreaClasses} rows={rows} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} />
        <div className="form__control-footer">
          {showExplanationMessage()}
          {showCharacterCount()}
        </div>
      </div>
    );
  }
}

export default Textarea;

/* eslint-disable no-lonely-if */
/* eslint-disable operator-linebreak */
import React from 'react';
import InputWrapper from './styles/inputWrapper/inputWrapper';
import OptionWrapper from './styles/Option/optionWrapper';
import MainWrapper from './styles/mainWrapper/wrapper';


class TrailingStopOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trailType: 'Percentage',
      trail: '',
      shares: '',
      expires: 'Good for Day',
      showOptions: false,
      showTrails: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.trailsClickHandler = this.trailsClickHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      let value = 0;
      const { type, price, estimateHandler } = this.props;
      const { trailType, trail, shares } = this.state;

      if (shares !== '' && trail !== '') {
        if (type === 'Buy') {
          if (trailType === 'Percentage') {
            value = ((trail / 100) * price) + (price * shares);
          } else {
            value = Number(trail) + (price * shares);
          }
        } else {
          if (trailType === 'Percentage') {
            value = (price * shares) - ((trail / 100) * price);
          } else {
            value = (price * shares) - Number(trail);
          }
        }
      }
      estimateHandler(value.toFixed(2), shares);
    });
  }

  clickHandler(e) {
    this.setState({
      showOptions: !this.state.showOptions,
      expires: e.target.id,
    });
  }

  toggleOptions() {
    this.setState({
      showOptions: !this.state.showOptions,
    });
  }

  toggle() {
    this.setState({
      showTrails: !this.state.showTrails,
    });
  }

  trailsClickHandler(e) {
    this.setState({
      showTrails: !this.state.showTrails,
      trailType: e.target.id,
      trail: '',
      shares: '',
    });

    this.props.estimateHandler(0);
  }

  render() {
    return (
      <>
        <InputWrapper>
          <InputWrapper.Label>Trail Type</InputWrapper.Label>
            <OptionWrapper.Main onClick={this.toggle} background={this.props.background}>
              <OptionWrapper.Text id={this.state.expires}>
                {this.state.trailType}
              </OptionWrapper.Text>
              <MainWrapper.Arrow src={this.props.background === 'white' ?
                './arrows_black.png' :
                './arrows.png'}/>
            </OptionWrapper.Main>
            {this.state.showTrails &&
            <OptionWrapper background={this.props.background}>
              <OptionWrapper.Option onClick={this.trailsClickHandler} id={'Percentage'}
              expires={this.state.trailType} background={this.props.background}>
                Percentage
              </OptionWrapper.Option>
              <OptionWrapper.Option onClick={this.trailsClickHandler} id={'Amount'}
              expires={this.state.trailType} background={this.props.background}>
                Amount
              </OptionWrapper.Option>
            </OptionWrapper> }
        </InputWrapper>
        <InputWrapper>
          <InputWrapper.Label>Trail ({this.state.trailType === 'Percentage' ?
            '%' : '$'})</InputWrapper.Label>
          <InputWrapper.Dollar type="number" name="trail" placeholder="0"
          step=".01" onChange={this.changeHandler} value={this.state.trail}></InputWrapper.Dollar>
        </InputWrapper>
        <InputWrapper>
            <InputWrapper.Label>Shares</InputWrapper.Label>
            <InputWrapper.Dollar type="number" placeholder="0" name="shares"
            onChange={this.changeHandler} value={this.state.shares}>
            </InputWrapper.Dollar>
        </InputWrapper>
        <InputWrapper>
          <InputWrapper.Label>Expires</InputWrapper.Label>
            <OptionWrapper.Main onClick={this.toggleOptions} background={this.props.background}>
              <OptionWrapper.Text>
                {this.state.expires === 'Good for Day' ? 'Good for Day' : 'Good till Can...'}
              </OptionWrapper.Text>
              <MainWrapper.Arrow src={this.props.background === 'white' ?
                './arrows_black.png' :
                './arrows.png'}/>
            </OptionWrapper.Main>
            {this.state.showOptions &&
            <OptionWrapper background={this.props.background}>
              <OptionWrapper.Option onClick={this.clickHandler} id={'Good for Day'}
              expires={this.state.expires} background={this.props.background}>
                Good for Day
              </OptionWrapper.Option>
              <OptionWrapper.Option onClick={this.clickHandler} id={'Good till Canceled'}
              expires={this.state.expires} background={this.props.background}>
                Good till Canceled
              </OptionWrapper.Option>
            </OptionWrapper> }
        </InputWrapper>
      </>
    );
  }
}

export default TrailingStopOrder;

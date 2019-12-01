import React from 'react';
import InputWrapper from './styles/inputWrapper/inputWrapper';
import Span from './styles/Span/span';

class MarketOrder extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shares: 0
        }

        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        this.props.estimateHandler(e.target.value * this.props.price)

        this.setState({
            shares: e.target.value
        })
    }

    render() {
        return (
            <div>
                <InputWrapper>
                    <InputWrapper.Label htmlFor="shares">Shares</InputWrapper.Label>
                    <InputWrapper.Input type="number" placeholder="0" onChange={this.changeHandler}></InputWrapper.Input>
                </InputWrapper>
                <InputWrapper>
                    <Span.Color>Market Price</Span.Color>
                    <Span.Value>${this.props.price}</Span.Value>
                </InputWrapper>
            </div>
            
        )
    }
}

export default MarketOrder;
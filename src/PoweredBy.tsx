import * as React from 'react';
import { ChatState } from './Store';
import { Dispatch, connect } from 'react-redux';

interface Props {
}

class PoweredByContainer extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className='powered-by-exceed'>
                <span>Powered by exceed.ai</span>
            </div>
        );
    }
}

export const PoweredBy = connect(
    (state: ChatState) => ({
    }), {
    }, (stateProps: any, dispatchProps: any, ownProps: any): Props => ({
    })
)(PoweredByContainer);

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {EMAIL_PROP_TYPE} from './constants'
import './EmailListItem.css';

export default class EmailListItem extends PureComponent {
    static propTypes = { 
        email: EMAIL_PROP_TYPE,
        onSelect: PropTypes.func,
    }

    render() {
        let {email} = this.props;
        let {from, subject} = email;
        // let from = this.props.from;          //es6 style
        // let subject = this.props.subject;

        return (
            <div className="email-list-item" onClick={this._handleClick.bind(this)}>
                <span>{from}</span>
                <span>{subject}</span>
            </div>
        );
    }

    _handleClick(e) {
        let {email, onSelect} = this.props
        console.log(e);

        if (onSelect) {
            onSelect(email.id);
        }
    }
}

//***functional form
// const EmailListItem = (props) => {
//   let {from, subject} = props;

//   return (
//     <div className="email-list-item">
//       <span>{from}</span>
//       <span>{subject}</span>
//     </div>
//   );
// }


//***es6 form of functional form
// const EmailListItem = ({from, subject}) => (
//   <div className="email-list-item">
//   <span>{from}</span>
//   <span>{subject}</span>
// </div>
// )
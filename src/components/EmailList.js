import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EmailListItem from './EmailListItem';
import {EMAIL_PROP_TYPE} from './constants'
import './EmailList.css';


export default class EmailList extends PureComponent {
    static propTypes = {
        emails: PropTypes.arrayOf(EMAIL_PROP_TYPE),
        onItemSelect: PropTypes.func,
    }

    render() {
        let emailComponents = this.props.emails.map((email) => {
            let { from, subject } = email;

            return (
                <li key={email.id}>
                    <EmailListItem email={email} onSelect={this.props.onItemSelect}/>
                </li>
            )
        });

        return (
            <ul className="email-list">
                {emailComponents}
            </ul>
        );
    }
}
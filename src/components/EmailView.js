import React, { PureComponent } from 'react';
import './EmailView.css';

export default class EmailView extends PureComponent {
    render() {
        let {email} = this.props;
        let {subject, from, date, message} = email;
        let rawMessage = {__html: message};
    
        return (
          <section className="email-view">
            <h1>{subject}</h1>
            <h2>From: <a href={`mailto:${from}`}>{from}</a></h2>
            <h3>{date}</h3>
            <div dangerouslySetInnerHTML={rawMessage} />
          </section>
        );

        // return (
        //     <div className="email-view">
        //         <h2>View selected email</h2>
        //     </div>
        // );
    }
}
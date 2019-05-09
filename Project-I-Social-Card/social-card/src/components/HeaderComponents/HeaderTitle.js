import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

class HeaderTitle extends React.Component {
    state = {
        day: "",
        month: "",
    };

    componentDidMount() {
        this.getDate();
    }
    
    getDate = () => {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'];
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        month = months[month];
        this.setState({day});
        this.setState({month});
    }

    render() {
        const {day} = this.state;
        const {month} = this.state;
        return (
            <div>
                <h1>Lambda School @Lambdaschool {day} {month}</h1>
                <HeaderContent/>
            </div>
        );
    }
}

export default HeaderTitle;
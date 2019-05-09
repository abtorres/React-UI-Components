import React from 'react';
import './Header.css';

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
            <h1>Lambda School @Lambdaschool {month} {day}</h1>
        );
    }
}

export default HeaderTitle;
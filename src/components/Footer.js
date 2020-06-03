import React from 'react'
import ReactDOM from 'react-dom';
import "../styles.css"

export default class Footer extends React.Component {

    state = {
        language: ""
    }

    handleChange = event => {
        
        // alert("handle Change was clicked")
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        
        // alert("handle submit was clicked")
        event.preventDefault()
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <div>
                {/* Language Picker */}
                {/* <form onSubmit={this.handleSubmit}>  */}
                
                    <label className="languageForm">Language: </label>
                    <select name="language" value={this.state.language} onChange={this.handleChange}>
                        <option>Select Language</option>
                        <option value="English">English</option>
                        <option value="español">español</option>
                        <option value="中文">中文</option>
                        <option value="русский">русский</option>
                    </select>

                    {/* <input type="submit" /> */}
                {/* </form> */}
            </div>
        )
    }
}

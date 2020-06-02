import React from 'react'
import "../styles.css"

export default class Footer extends React.Component {

    state = {
        language: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <div>
                {/* Language Picker */}
                <form onSubmit={this.handleSubmit}> 
                    <label className="languageForm">Language: </label>
                    <select name="language" value={this.state.language} onChange={this.handleChange}>
                        <option>Select Language</option>
                        <option value="English">English</option>
                        <option value="español">español</option>
                        <option value="中文">中文</option>
                        <option value="русский">русский</option>
                        <option value="עברית">עברית</option>
                        <option value="عربى">عربى</option>
                    </select>

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

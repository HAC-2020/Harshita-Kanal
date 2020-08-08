import React, {Component} from "react";

class QuoteAndAuthor extends Component {
    render() {
        const randomColor = this.props.displayColor();
        const html = document.documentElement;
        // html.style.backgroundColor = randomColor;

        return (
            <div class = "container" >
            <div style={{ backgroundColor: "white" }} className="quotebox">
                <div
                    className="fadeIn"
                    key={Math.random()}
                    style={{ color: randomColor }}
                >
                    <h1 id="quote">"{this.props.quote}"</h1>
                    <h5 id="author">
                        -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
                </div>
                <button
                    style={{ backgroundColor: randomColor,
                    color: "white", padding: "8px", fontFamily: "Montserrat", borderRadius: "20px" }}
                    id="newquote"
                    onClick={this.props.handleClick}
                >
                    New quote
                </button>
            </div>
            </div>
        );
       
    }
}

export default QuoteAndAuthor;
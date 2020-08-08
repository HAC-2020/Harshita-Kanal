import React, { Component } from 'react';
import './CoverPage.css';
import meditate from './assets/inspiration.svg'
import QuoteAndAuthor from "./QuoteAndAuthor";
import quotes from './QuotesDatabase'
import { CardBody, CardHeader, Card } from 'reactstrap';
class Inspire extends Component {
    // render() {
    //     return (
    //         <div className="container">
    //             <h1 className="mt-3"> Get inspired! </h1>
    //             <img src={meditate} className="mt-3" width="200px" alt="" />

    //         </div>
    //     )
    // }
    constructor() {
        super();
        this.state = {
            quote: quotes[0].quote,
            author: quotes[0].author,
        };
    }
    randomQuote() {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        return quotes[randomNumber];

    }
    shuffleQuotes(array) {
        return array.sort(() => Math.random() - 0.5)
    }

    handleClick = () => {
        const generateRandomQuote = this.randomQuote();
        this.setState({
            quote: generateRandomQuote.quote,
            author: generateRandomQuote.author
        });
        this.shuffleQuotes(quotes)
    };

    randomColor() {
        const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
        return color;
    }

    render() {
        return (
            <div>
            <div className="container">
                <h2 className="mt-3"> Get inspired! </h2>
                 <img src={meditate} className="mt-3 mb-5" width="300px" alt="" />

             <Card>
                 <CardBody>
                <QuoteAndAuthor
                    displayColor={this.randomColor}
                    handleClick={this.handleClick}
                    {...this.state}
                />
                </CardBody>
            </Card>
           
                </div>
            </div>

        );
    }
}


export default Inspire;
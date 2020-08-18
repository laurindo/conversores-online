import React from "react";
import axios from "axios";

class SuggestMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            word: this.generateName()
        };
    }

    generateName = () => {
        var result           = '';
        var characters       = 'abcde';
        var charactersLength = characters.length;
        for ( var i = 0; i < 5; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        debugger;
        return result;
    };
    
    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?apikey=27bb6539&s=${this.state.word}&plot=short&page=1`).then(res => this.setState({movies: res.data.Search}));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.movies.map((movie, index) => (
                        <li key={index}>
                            <img src={movie.Poster} alt={movie.Title} />
                            <p>{movie.Name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default SuggestMovie;
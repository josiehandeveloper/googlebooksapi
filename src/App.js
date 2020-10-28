import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bookResults: [],
            searchField: '',
            bookType:'',
            printType:'',
        };
    }
    
    componentDidMount() {
        const url = 'https://www.googleapis.com/books/v1/volumes';
        const apiKey = 'AIzaSyDV9jKlomwDu2iJgABH0zB-eimr1w887ro';
        fetch(`${url}?q=${this.state.searchField}&printType=${this.state.printType}&filter=${this.state.bookType}&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })

    } 
    

}



export default App; 
import React, { Component} from 'react';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import Cards from '../components/Cards';
import Searchbox from '../components/Searchbox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = this.state.robots.filter(item => {
            return item.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return robots.length === 0? <h1>Loading...</h1> :
        (
                <div className='tc'>
                    <h1>Robo-Friends</h1>
                    <h2>Testing GitButler</h2>
                    <Searchbox event={this.onSearchChange} />
                    <Scroll>
                        <Cards robots={filterRobots} />
                    </Scroll>
                </div>
            )
    };
}

export default App;
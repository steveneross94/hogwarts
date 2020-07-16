import React, { Component } from 'react'

export class Hog extends Component {
    // constructor(props){
    //     super()

    // }
    state = {
        showDetails: false,
        hidden: false
    }

    showDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    hideHog = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    render() {
        return (
            <div>
                <div className='hog-tile' key={this.props.index}>
                {!this.state.hidden && 
                    <div>
                        <img src={`/hog-imgs/${this.props.hogImageName}.jpg`}/>
                        <p>{this.props.hog.name}</p>
                    </div>
                }
                <button onClick={this.showDetails}>Show Details</button>
                {this.state.showDetails && 
                    <div>
                        <p>Weight: {this.props.hog.weight}</p>
                        <p>Specialty: {this.props.hog.specialty}</p>
                        <p>Highest Medal Achieved: {Object.values(this.props.hog)[4]}</p>
                        <p>Greased: {this.props.hog.greased ? 'YES' : 'NO'}</p>
                    </div>
                }
                    <button onClick={this.hideHog}>{!this.state.hidden ? 'Hide Hog' : 'Show Hog'}</button>
                </div>
            </div>
        )
    }
}

export default Hog




import React, {Component} from "react";
import ReactDOM from "react-dom";

class LoadingData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: "0%",
      loaded: false
    }
  }

  render () {

    if (this.state.loaded) {
      return <h1>Dane załadowane</h1>
    }

    return (
        <>
            <div className="progress">
                <div className="progress-bar" style={{width: this.state.width}}></div>
            </div>
        </>
    )
  }

  componentDidMount () {

      let counter = 0;
      let int = setInterval(() => {
        
        counter = counter + 1

        console.log(counter)

        this.setState({width: `${counter}%`})

        if (this.state.width == "100%") {
          clearInterval(int)
          this.setState({loaded: true})
        }

      }, 100)
  }

  componentWillUnmount () {
    clearInterval(int)
  }

}

const App = () => {
  return <LoadingData/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  LoadingData
};

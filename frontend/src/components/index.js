import { Component } from "react";


class Aviato extends Component {
    state = {data: []}
    componentDidMount() {
        this.getBlogDetails()
    }
    getBlogDetails = async () => {
        
        const response = await fetch('http://localhost:9000/season')
        console.log("fetch");
        // const dataGot = await response.json()
        const dataGot = await response.json()
        console.log(dataGot["gameId"]["2018"])
        this.setState(
            {data: dataGot["gameId"]["2018"]}
        )
        console.log(dataGot)
    }

    render() {
        const {data} = this.state
        console.log(data)
        return (<div>
            ${data}
        </div>)
    }
}

export default Aviato
import React, { Component } from 'react';
import {Line, Bar, Doughnut, Pie, Scatter, Radar} from 'react-chartjs-2';

export class ChartJs extends Component {

    state = { gameArray: [] };
    componentDidMount() {
      this.getBlogDetails();
    }
    getBlogDetails = async () => {
      const response = await fetch("http://ec2-3-145-123-28.us-east-2.compute.amazonaws.com/gameTimeEastern");
      const dataGot = await response.json();
  
      const { gameId } = dataGot;
      console.log(gameId);
      let gameArray = [];
      for (const [key, value] of Object.entries(gameId)) {
        let temp = {
          year: key,
          score: value,
        };
        gameArray.push(temp);
      }
      this.setState({ gameArray: gameArray });
    };
  
    render() {
      const { gameArray } = this.state;
      var labels = gameArray.map(function (e) {
        return e.year;
      });
  
      var scoreData = gameArray.map(function (e) {
        return e.score;
      });
      const bgcolor =[]
      for(let i = 0; i < labels.length; i++){
            bgcolor.push("rgba(255, 99, 132, 1)")
        }

      const data = {
        labels: labels,
        datasets: [
          {
            data: scoreData,
            label: "Game Played By Eastern Time",
            backgroundColor: bgcolor,
            borderWidth: 3,
          },
        ],
      };
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
  
      console.log(data);
      return (
        <div className="graph">
          <div className="header">
            <h1 className="title">Game Played By Eastern Time</h1>
            <div className="links"></div>
          </div>
          <Line data={data} options={options} />
        </div>
      );
    }
  
}

export default ChartJs
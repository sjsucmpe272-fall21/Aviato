import React, { Component } from 'react';
import {Line, Bar, Doughnut, Pie, Scatter} from 'react-chartjs-2';

export class ChartJs extends Component {

    state = { gameArray: [] };
    componentDidMount() {
      this.getBlogDetails();
    }
    getBlogDetails = async () => {
      const response = await fetch("http://ec2-3-145-123-28.us-east-2.compute.amazonaws.com/players-by-positions");
      const dataGot = await response.json();
  
      const { nflId } = dataGot;
      let gameArray = [];
      for (const [key, value] of Object.entries(nflId)) {
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
      const data = {
        labels: labels,
        datasets: [
          {
            data: scoreData,
            label: "Players by their Position",
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
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
            <h1 className="title">Players Analysis By Position</h1>
            <div className="links"></div>
          </div>
          <Bar data={data} options={options} />
        </div>
      );
    }
  
}

export default ChartJs

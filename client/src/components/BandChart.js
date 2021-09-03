import { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { useSocketIO } from "../state/socket/SocketProvider";
Chart.register(...registerables);

export const BandChart = () => {
  const { socket } = useSocketIO();
  const [bands, setBands] = useState([]);
  useEffect(() => {
    socket.on("currentBands", (res) => setBands(res));
    return () => socket.off("currentBands");
  }, [socket]);

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: bands.map((band) => band.name),
        datasets: [
          {
            label: "# of Votes",
            data: bands.map((band) => band.votes),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: { indexAxis: "y" },
    });
    return () => {
      chart.destroy();
    };
  }, [bands]);

  return <canvas id="myChart"></canvas>;
};

export default BandChart;

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
      type: "doughnut",
      data: {
        labels: bands.map((band) => band.name),
        datasets: [
          {
            label: "# of Votes",
            data: bands.map((band) => band.votes),
            backgroundColor: bands.map((band) => band.color),
            hoverOffset: 4,
          },
        ],
      },
      options: { animation: false },
    });
    return () => {
      chart.destroy();
    };
  }, [bands]);

  return <canvas id="myChart"></canvas>;
};

export default BandChart;

var xyValues = [
    {x:50, y:Math.floor((Math.random() * 10) + 1)},
    {x:60, y:Math.floor((Math.random() * 10) + 1)},
    {x:70, y:Math.floor((Math.random() * 10) + 1)},
    {x:90, y:Math.floor((Math.random() * 10) + 1)},
    {x:80, y:Math.floor((Math.random() * 10) + 1)},
    {x:100, y:Math.floor((Math.random() * 10) + 1)},
    {x:110, y:Math.floor((Math.random() * 10) + 1)},
    {x:120, y:Math.floor((Math.random() * 10) + 1)},
    {x:130, y:Math.floor((Math.random() * 10) + 1)},
    {x:140, y:Math.floor((Math.random() * 10) + 1)},
    {x:150, y:Math.floor((Math.random() * 10) + 1)}
  ];
  
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 0, max:16}}],
      }
    }
  });
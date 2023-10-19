
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['month', 'Total paper consumed in ton', 'Cups made in million'],
    ['april 22', 20, 6],
    ['may 22', 35, 10.5],
    ['june 22', 75, 22.5],
    ['july 22', 81, 24.3],
    ['aug 22', 125, 37.5],
    ['sep 22', 110, 33],
    ['oct 22', 132, 39.6],
    ['nov 22', 140, 42.3],
    ['dec 22', 127, 38.1],
    ['jan 23', 142, 42.6],
    ['feb 23', 151, 45.3],
    ['mar 23', 132, 39.2]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div_one'));

  chart.draw(data, options);

  // Update chart options dynamically
  options.title = 'Analytics Overview';
  options.curveType = 'none';
  options.legend.position = 'top';
  chart.draw(data, options);
}



  
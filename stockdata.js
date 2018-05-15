var days = Object.keys(stocks);

days.forEach(function (day) {
    console.log(stocks[day]);
});

var dataz = days.map(function (day) {
    return stocks[day];
});
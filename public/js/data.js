var request = require('request');
var cheerio = require('cheerio');
var chalk = require('chalk');


request("http://www.seattlefoodtruck.com/index.php/neighborhoods/south-lake-union/", function(error, response, data) {

    var locationArray = [];
    var truckArray = [];
    var timeArray = [];


    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(data);

        $(".entry-content td").each(function(index, element) {
            var link = $(this).find('a');

            if(link.length > 0){
               truckArray.push(link.text().trim());
            }else{
               locationArray.push($(this).contents().eq(0).text());
               timeArray.push($(this).contents().eq(2).text());
            }
        });

for (var i = 0; i < locationArray.length; i++) {
    console.log(chalk.bgBlue(locationArray[i] + truckArray[i] + timeArray[i]));
};

return;

    };
});

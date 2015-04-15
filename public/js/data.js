var request = require('request');
var cheerio = require('cheerio');
var chalk = require('chalk');


request("http://www.seattlefoodtruck.com/index.php/neighborhoods/south-lake-union/", function(error, response, data) {

    // var segregateArray = [];
    var locationArray = [];
    var truckArray = [];
    var timeArray = [];


    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(data);

        $(".entry-content td").each(function(index, element) {
            var link = $(this).find('a');

            if(link.length > 0){
               truckArray.push(link.text().trim());
                //console.log(link.attr('href').trim());
            }else{
               locationArray.push($(this).contents().eq(0).text());
               timeArray.push($(this).contents().eq(2).text());
            }

            // segregateArray.push($(this).text().trim());
        });
        console.log(truckArray[0] + truckArray[1] + truckArray[2])


return;

    // for (var i = 0; i < segregateArray.length; i++) {
    //     if (i%2==1){
    //        locationArray.push(segregateArray[i].replace(/11a – 2p/g, ''));
    //        console.log(chalk.bgBlue(segregateArray[i].replace(/11a – 2p/g, '')));
    //     } else {
    //         truckArray.push(segregateArray[i]);
    //         console.log(chalk.bgGreen(segregateArray[i]))
    //         };
    //     };
    };
});

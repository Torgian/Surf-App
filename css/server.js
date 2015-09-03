var Hapi = require('hapi'),
    msw = require('msw-api'), // https://github.com/justinjmoses/msw-api
    prettyjson = require('prettyjson');

var server = new Hapi.Server("localhost", 3000);
msw.set({
    apiKey: 'KEY#',
    units: 'us'
});

var approvedCities = {Baishawan: '3767', Bashien Dong: '3450', Cheng Gong: '3452', Chu Nan: '3451', Dashi: '2412', Fongbin: '3441', Fulong Beach: '3442', Gongs: '2411', Hualien: '756', Jialeshuei: '2409', Jici Beach: '3440', Jin Shan: '3447', Nanwan: '2407', PD SPOT(Windmill): '1160', Sanshuei: '3449', Shalun: '3446', Sunyatsen Beach: '3448', Taitung: '757', Wushi: '844'};

server.route({
    method: 'GET',
    path: '/city/{cityNumber*}',
    handler: function(req, reply) {
        if (approvedCities.indexOf(req.params.cityNumber) >= 0) {
         var cityNum = parseInt(req.params.cityNumber);
            msw.forecast(cityNum).then(function (forecast) {
                var newForecast = forecast.filter(function(entry, i) {
                    return entry.swell.components.secondary.height < 4;
                });
                reply(newForecast._data[0]);
            }, function(err) {
                reply('Error! City not found!');
            })
        }
        else
        {
         reply('City not found! City not on approved list!');
        }
    }
});

server.start(function() {
    console.log('Now Visit: http://localhost:3000/city/CITYNUMBER')
});
$(document).ready(function () {
    // loading tb list
    //$('#inputGroupSelect00').find("option").size() == 1
    //$('#roleType').empty().append('<option>select</option>');
    if (1 == 1) {

        var csrf_token = $('#filter_form [name="csrfmiddlewaretoken"]').val();

        console.log(csrf_token);
        var values = {};
        values.filter = 'tb';
        values.csrfmiddlewaretoken = csrf_token;

        $.ajax({
            url: "",
            type: "post",
            data: values,
            success: function (response) {

                console.log(response[0]);

                for (var i = 0; i < response.length; i++) {
                    $("#inputGroupSelect00").append('<option value='+ (i + 1) +'>' + response[i].tb + '</option>');
                }

                // You will get response from your PHP page (what you echo or print)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

    // loading region list
    $("#inputGroupSelect00").on('change', function() {
        $('#inputGroupSelect01').empty().append('<option value="0">Выбрать...</option>');
        $('#inputGroupSelect02').empty().append('<option value="0">Выбрать...</option>');
        $('#inputGroupSelect03').empty().append('<option value="0">Выбрать...</option>');
        $('#inputGroupSelect04').empty().append('<option value="0">Выбрать...</option>');

        var tb = $('#inputGroupSelect00 option:selected').text();
        load_regions (tb);
    });

    function load_regions (tb) {
        var csrf_token = $('#filter_form [name="csrfmiddlewaretoken"]').val();

        console.log(csrf_token);
        var values = {};
        values.filter = 'region';
        values.tb = tb;

        values.csrfmiddlewaretoken = csrf_token;

        $.ajax({
            url: "",
            type: "post",
            data: values,
            success: function (response) {

                console.log(response[0]);

                for (var i = 0; i < response.length; i++) {
                    $("#inputGroupSelect01").append('<option value='+ (i + 1) +'>' + response[i].region + '</option>');
                }

                // You will get response from your PHP page (what you echo or print)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

    // loading cities list
    $("#inputGroupSelect01").on('change', function() {
        $('#inputGroupSelect02').empty().append('<option value="0">Выбрать...</option>');
        $('#inputGroupSelect03').empty().append('<option value="0">Выбрать...</option>');
        $('#inputGroupSelect04').empty().append('<option value="0">Выбрать...</option>');

        var tb = $('#inputGroupSelect00 option:selected').text();
        var region = $('#inputGroupSelect01 option:selected').text();

        load_cities (tb, region);
    });

    function load_cities (tb, region) {
        var csrf_token = $('#filter_form [name="csrfmiddlewaretoken"]').val();

        console.log(csrf_token);
        var values = {};
        values.filter = 'city';
        values.tb = tb;
        values.region = region;

        values.csrfmiddlewaretoken = csrf_token;

        $.ajax({
            url: "",
            type: "post",
            data: values,
            success: function (response) {

                console.log(response[0]);

                for (var i = 0; i < response.length; i++) {
                    $("#inputGroupSelect02").append('<option value='+ (i + 1) +'>' + response[i].city + '</option>');
                }

                // You will get response from your PHP page (what you echo or print)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

    // loading klass list
    $("#inputGroupSelect02").on('change', function() {
        $('#inputGroupSelect03').empty().append('<option value="0">Выбрать...</option>');
        $('#inputGroupSelect04').empty().append('<option value="0">Выбрать...</option>');

        var tb = $('#inputGroupSelect00 option:selected').text();
        var region = $('#inputGroupSelect01 option:selected').text();
        var city = $('#inputGroupSelect02 option:selected').text();

        load_klasses (tb, region, city);
    });

    function load_klasses (tb, region, city) {
        var csrf_token = $('#filter_form [name="csrfmiddlewaretoken"]').val();

        console.log(csrf_token);
        var values = {};
        values.filter = 'klass';
        values.tb = tb;
        values.region = region;
        values.city = city;

        values.csrfmiddlewaretoken = csrf_token;

        $.ajax({
            url: "",
            type: "post",
            data: values,
            success: function (response) {

                console.log(response[0]);

                for (var i = 0; i < response.length; i++) {
                    $("#inputGroupSelect03").append('<option value='+ (i + 1) +'>' + response[i].klass + '</option>');
                }

                // You will get response from your PHP page (what you echo or print)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

    // loading pu list
    $("#inputGroupSelect03").on('change', function() {
        $('#inputGroupSelect04').empty().append('<option value="0">Выбрать...</option>');

        var tb = $('#inputGroupSelect00 option:selected').text();
        var region = $('#inputGroupSelect01 option:selected').text();
        var city = $('#inputGroupSelect02 option:selected').text();
        var klass = $('#inputGroupSelect03 option:selected').text();

        load_pu (tb, region, city, klass);
    });

    function load_pu (tb, region, city, klass) {
        var csrf_token = $('#filter_form [name="csrfmiddlewaretoken"]').val();

        console.log(csrf_token);
        var values = {};
        values.filter = 'pu';
        values.tb = tb;
        values.region = region;
        values.city = city;
        values.klass = klass;

        values.csrfmiddlewaretoken = csrf_token;

        $.ajax({
            url: "",
            type: "post",
            data: values,
            success: function (response) {

                console.log(response[0]);

                for (var i = 0; i < response.length; i++) {
                    $("#inputGroupSelect04").append('<option value='+ (i + 1) +'>' + response[i].pu + '</option>');
                }

                // You will get response from your PHP page (what you echo or print)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

    $("#update_btn").click(function (e) {
        e.preventDefault();
        //alert("Hello");
        console.log(map);

        var csrf_token = $('#filter_form [name="csrfmiddlewaretoken"]').val();

        var values = {}

        values.filter = 'load_data';
        values.tb = $('#inputGroupSelect00 option:selected').text().replace('Выбрать...', '');
        values.region = $('#inputGroupSelect01 option:selected').text().replace('Выбрать...', '');
        values.city = $('#inputGroupSelect02 option:selected').text().replace('Выбрать...', '');
        values.klass = $('#inputGroupSelect03 option:selected').text().replace('Выбрать...', '');
        values.pu = $('#inputGroupSelect04 option:selected').text().replace('Выбрать...', '');

        values.csrfmiddlewaretoken = csrf_token;

        $.ajax({
            url: "",
            type: "post",
            data: values,
            success: function (response) {

                var jsonData = JSON.parse(response);
                console.log(jsonData.length);
                console.log(jsonData[0].fields.adress);

                var coords = [];
                var balloonContentHeaderList = [];
                var balloonContentBodyList = [];
                var presetList = [];

                for (var i = 0; i < jsonData.length; i++) {

                    coords.push([jsonData[i].fields.latitude, jsonData[i].fields.longitude]);
                    balloonContentHeaderList.push(jsonData[i].fields.adress);
                    balloonContentBodyList.push(jsonData[i].fields.pu);

                    //console.log(jsonData[i].fields.count_pay / jsonData[i].fields.count_ls);

                    if (jsonData[i].fields.pu == 'Дом без УК') {
                        presetList.push('islands#greyDotIcon');
                        console.log('islands#greyDotIcon');

                    } else {
                        if (jsonData[i].fields.count_pay / jsonData[i].fields.count_ls <= 0.1) {
                            presetList.push('islands#blackDotIcon');
                            console.log('islands#blackDotIcon');
                        } else if (0.1 < jsonData[i].fields.count_pay / jsonData[i].fields.count_ls <= 0.25) {
                            presetList.push('islands#redDotIcon');
                            console.log('islands#redDotIcon');
                        } else if (0.25 < jsonData[i].fields.count_pay / jsonData[i].fields.count_ls <= 0.5) {
                            presetList.push('islands#yellowDotIcon');
                            console.log('islands#yellowDotIcon');
                        } else {
                            presetList.push('islands#greenDotIcon');
                            console.log('islands#greenDotIcon');
                        }
                    }


                    console.log(coords[i], balloonContentHeaderList[i], balloonContentHeaderList[i]);
                }

                var myCollection = new ymaps.GeoObjectCollection({}, {
                    draggable: false // и их можно перемещать
                });

                for (var i = 0; i < coords.length; i++) {

                    //console.log(coords[i], balloonContentHeaderList[i], balloonContentHeaderList[i]);

                    myCollection.add(new ymaps.Placemark(coords[i], {
                        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                        balloonContentHeader: balloonContentHeaderList[i],
                        balloonContentBody: balloonContentBodyList[i]
                    }, {
                        preset: presetList[i]
                    }));
                }

                map.geoObjects.removeAll();
                map.geoObjects.add(myCollection);

                // You will get response from your PHP page (what you echo or print)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });

    });

});
$(document).ready(function () {
    $.getJSON('data.json', function (spots) {
        spots.forEach(function (spot) {
            var maplink = 'https://www.google.com/maps?q=' +
                spot.location[0] + ',' + spot.location[1];

            var row = $('<tr>');

            row.append($('<td>').text(spot.name));
            row.append($('<td>').text(spot.description));

            var link = $('<a>')
                .attr('href', maplink)
                .attr('target', '_blank')
                .attr('rel', 'noopener noreferrer')
                .text('Open in Google Maps');
            row.append($('<td>').append(link));

            $('#top-spots').append(row);
        });
    });
});
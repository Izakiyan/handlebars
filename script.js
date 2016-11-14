var source = $('#post-template').html();
var template = Handlebars.compile(source);
var html = template({text:"lalala"});
$('body').append(html);

$('#temptemp').append(html);


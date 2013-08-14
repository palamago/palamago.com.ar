var template;

$(document).ready(function(){
	init();
});

function init(){
	Handlebars.registerHelper('description', function(items, options) {
		var html = [];
		$.each(items,function(i,e){
			html.push("<p>"+e+"</p>");
		});

	  	return new Handlebars.SafeString(html.join(''));
	});	

	Handlebars.registerHelper('statusBar', function(item, options) {
		var c = '';
		switch(item) {
			case 'Ready':
				c = 'alert-success';
			break;
			case 'In Progress':
				c = 'alert-warning';
			break;
			case 'Beta':
				c = 'alert-info';
			break;
			case 'Deprecated':
				c = 'alert-error';
			break;
		}

		var block = '<div class="alert '+c+'">'+
					'<strong>Status:</strong> '+
					item +
				'</div>';

	  	return new Handlebars.SafeString(block);
	});	

	template = Handlebars.compile($("#list-template").html());
	if(!$('a.brand').is(':visible')){
		$('.navbar ul li a').tooltip();
	}
	loadData();
};

function loadData(){
	$.getJSON('/js/data.json',{})
	.done(function( json ) {
		json.projects.sort(function(a,b){
			return b.order-a.order;
		});
		renderList( json );
	})
	.fail(function( jqxhr, textStatus, error ) {
	 	var err = textStatus + ', ' + error;
	 	console.log( "Request Failed: " + err);
	});
};


function renderList(data){
	$('#container').html(template(data));
	masoneryInit();
};

function masoneryInit(){
	$('#container').masonry({
	  columnWidth: 290,
	  itemSelector: '.item'
	});
};
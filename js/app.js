
$(document).ready(function() {
	$('.sec1-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					variableWidth: false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					variableWidth: false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					variableWidth: false,
					slidesToScroll: 1
				}
			}
		]
	});
	$("a.gallery").fancybox();
});
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
	// Создание экземпляра карты и его привязка к контейнеру с
	// заданным id ("map").
	myMap = new ymaps.Map('map', {
		// При инициализации карты обязательно нужно указать
		// её центр и коэффициент масштабирования.
		center: [55.76, 37.64], // Москва
		zoom: 10
	}, {
		searchControlProvider: 'yandex#search'
	});
}








var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.catNames = ko.observableArray(["Alpha","Beta","Charlie","Delta"]);

	this.level = ko.pureComputed(function () {
		//return this.clickCount() > 3 ? "Baby": "New Born";
		if ( this.clickCount() >= 0 && this.clickCount() <= 3 ) {
			return "New Born";
		} else if (this.clickCount() > 3 && this.clickCount() <= 7) {
			return "Baby";
		} else if (this.clickCount() > 7 && this.clickCount() <= 10){
			return "Kitty";
		};
	},this);
};

var ViewModel = function () {
	this.currentCat = ko.observable(new Cat({
		clickCount:0,
		name:'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		catNames: ["Alpha","Beta","Charlie","Delta"]
		}));

	this.incrementCounter = function () {
		this.clickCount(this.clickCount() +1);
	};
};

ko.applyBindings(new ViewModel());
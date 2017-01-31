var Cat = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.catNames = ["Alpha","Beta","Charlie","Delta"];

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
	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function () {
		this.currentCat().clickCount(this.currentCat().clickCount() +1);
	};
};

ko.applyBindings(new ViewModel());
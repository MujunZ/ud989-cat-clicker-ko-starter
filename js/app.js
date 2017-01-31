var	cats=[
	  {
	     "name":"Alpha",
	     'id':1,
	     "imgSrc":"img/1413379559_412a540d29_z.jpg",
	     'clickCount':0
	  },
	  {
	     "name":"Beta",
	     'id':2,
	     "imgSrc":"img/22252709_010df3379e_z.jpg",
	     'clickCount':0
	  },
	  {
	     "name":"Charlie",
	     'id':3,
	     "imgSrc":"img/4154543904_6e2428c421_z.jpg",
	     'clickCount':0
	  },
	  {
	     "name":"Delta",
	     'id':4,
	     "imgSrc":"img/434164568_fea0ad4013_z.jpg",
	     'clickCount':0
	  },
	  {
	     "name":"Echo",
	     'id':5,
	     "imgSrc":"img/9648464288_2516b35537_z.jpg",
	     'clickCount':0
	  }
	];

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
	var self = this;

	self.catList = ko.observableArray([]);

	cats.forEach( function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	self.currentCat = ko.observable(self.catList()[0]);

	this.incrementCounter = function () {
		this.clickCount(this.clickCount() +1);
	};
};

ko.applyBindings(new ViewModel());
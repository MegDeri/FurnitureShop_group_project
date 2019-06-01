console.log('hello');

console.log('test');

var tabContent = function () {
  let lists = document.querySelectorAll('.accordion a');
  let rowItems = document.getElementsByClassName('items_active');
  let numberOfRowItems = rowItems.length;

  let listClickBack = function (item) {
    this.item = item;
    var self = this.item;
    self.classList.add('active');

    for (var i = 0; i < lists.length; i++) {
      if (lists[i].classList.contains('active') && lists[i] !== self) {
        lists[i].classList.remove('active');
      }
    }
  };

  let showPictures = function (element) {
    let currentHref = element.getAttribute('href');
    // remove all show
    for (var i = 0; i < numberOfRowItems; i++) {
      document.querySelector('#' + rowItems[i].id).classList.remove('show');
    }
    document.querySelector(currentHref).classList.add('show');
  };

  for (var i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', function () {
      listClickBack(this);
      showPictures(this);
    });
  }
};

tabContent();

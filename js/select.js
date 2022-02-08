   if (window.NodeList && !NodeList.prototype.forEach) {
     NodeList.prototype.forEach = function (callback, thisArg) {
       thisArg = thisArg || window;
       for (var i = 0; i < this.length; i++) {
         callback.call(thisArg, this[i], i, this);
       }
     };
   }
   
   document.querySelectorAll('.card__select').forEach(function (dropDownWrapper) {
     const dropDownBtn = dropDownWrapper.querySelector('.card__size');
     const dropDownList = dropDownWrapper.querySelector('.card__list');
     const dropDownListItems = dropDownList.querySelectorAll('.card__item');

     dropDownBtn.addEventListener('click', function (e) {
       dropDownList.classList.toggle('card__list--active');
       this.classList.add('card__size--active');
     });

     dropDownListItems.forEach(function (listItem) {
       listItem.addEventListener('click', function (e) {
         e.stopPropagation();
         dropDownBtn.innerText = this.innerText;
         dropDownList.classList.remove('card__list--active');
         dropDownBtn.classList.remove('card__size--active');
       });
     });

     document.addEventListener('click', function (e) {
       if (e.target !== dropDownBtn) {
         dropDownBtn.classList.remove('dcard__size--active');
         dropDownList.classList.remove('card__list--active');
       }
     });
   });
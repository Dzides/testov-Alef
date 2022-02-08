$(function () {

   // Бургер мобильное меня
   $('.burger').on('click', function () {
      $('.burger').toggleClass('burger--active');
      $('.header__nav').toggleClass('header__nav--active');
      $('.logo, .menu').toggleClass('hidden');
      $('.menu-mobil').toggleClass('menu-mobil--active');
      $('body').toggleClass('lock');
   });

   // Слайдер
   $('.card__thumb').slick({
      asNavFor: '.card__big',
      focusOnSelect: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      vertical: true,
      draggable: false,
   });

   $('.card__big').slick({
      asNavFor: '.card__thumb',
      draggable: false,
      arrows: false,
      fade: true
   });

   // Звездный рейтинг
   $('.star.rating').click(function () {
      $(this).parent().attr('data-stars', $(this).data('rating'));
   });

   // Выбор количества товара
   $(document).ready(function () {
      $('.card__minus').click(function () {
         var $input = $(this).parent().find('input');
         var count = parseInt($input.val()) - 1;
         count = count < 1 ? 1 : count;
         $input.val(count);
         $input.change();
         return false;
      });
      $('.card__plus').click(function () {
         var $input = $(this).parent().find('input');
         $input.val(parseInt($input.val()) + 1);
         $input.change();
         return false;
      });
   });

   //   Активная кнопка избранное
   $('.card__favourites').on('click', function () {
      $('.card__favourites').toggleClass('card__favourites--active');
   });

   // Скролл шапки меню
   $(window).scroll(function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 1 && scrolled > scrollPrev) {
         $(".header").addClass('header__close');
      } else {
         $(".header").removeClass('header__close');
      }
      scrollPrev = scrolled;
   });

   // Валидатор почты
   $(".control").each(function () {
      $(this).validate({
         errorClass: "invalid",
         messages: {
            email: {
               required: "Введите пожалуйста Ваш адрес",
               email: "Введите в формате name@domain.com",
            },
         },
      });
   });

   // Очистка инпута почты
   $('.subscribe__close').on('click', function () {
      $('.subscribe__input').val('');
   });

   // Попап корзина
   $('.card__basket').on('click', function () {
      $('.modal-bag__overlay').addClass('modal__overlay--visible');
      $('.modal-bag__dialog').addClass('modal__dialog--visible');
      $('body').addClass('lock');
   });

   // Попап избранное
   $('.card__favourites').on('click', function () {
      $('.modal-fav__overlay').addClass('modal__overlay--visible');
      $('.modal-fav__dialog').addClass('modal__dialog--visible');
      $('body').addClass('lock');
   });

   // Закрытие попапа
   $('.modal__close').on('click', function () {
      $('.modal__overlay').removeClass('modal__overlay--visible');
      $('.modal__dialog').removeClass('modal__dialog--visible');
      $('body').removeClass('lock');
      return false;
   });

   // Закрытие попапа по ESC
   $(document).keydown(function (e) {
      if (e.keyCode == 27) {
         var modalDialog = $('.modal__dialog');
         $('.modal__overlay').removeClass('modal__overlay--visible');
         $('.modal__dialog').removeClass('modal__dialog--visible');
      }
   });

});
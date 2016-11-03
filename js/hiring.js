/**
 * Created by dshi on 8/12/16.
 */
window.onload = function () {
    var Nav = (function () {

        var
            nav = $('.nav_sub'),
            burger = $('.burger'),
            page = $('.page'),
            section = $('.section'),
            link = nav.find('.nav__link'),
            navH = nav.innerHeight(),
            isOpen = true,
            hasT = false;

        var toggleNav = function () {
            nav.toggleClass('nav--active');
            burger.toggleClass('burger--close');
            shiftPage();
        };

        var shiftPage = function () {
            if (!isOpen) {
                page.css({
                    'transform': 'translateY(' + navH + 'px)',
                    '-webkit-transform': 'translateY(' + navH + 'px)'
                });
                isOpen = true;
            } else {
                page.css({
                    'transform': 'none',
                    '-webkit-transform': 'none'
                });

                isOpen = false;
            }
        };

        var switchPage = function (e) {
            var self = $(this);
            var i = self.parents('.nav__item').index();
            var z = self.parents('.nav__item');
            var zz = self.parents('.nav__item').find('.nav__thumb');
            var x = self.parents('.nav__item').find('.nav__label');
            var s = section.eq(i);
            var a = $('section.section--active');
            var t = $(e.target);
            var sss = "s" + i;
            if (!hasT) {
                if (i == a.index()) {
                    return false;
                }

                $('.nav__item').css({
                    'margin-top': '0'
                });
                $('.nav__thumb').css({
                    'height': '80px'
                });

                $('.nav__label').css({
                    'line-height': '80px'
                });

                // $('.intro-active').addClass('intro-hidden');
                // $('.intro-active').removeClass('intro-active');
                // $('.'+ sss).removeClass('intro-hidden');
                // $('.'+ sss).addClass('intro-active');

                a
                    .addClass('section--hidden')
                    .removeClass('section--active');

                s.addClass('section--active');

                z.css({
                    'margin-top': '4px'
                    // 'border-top': '4px #fff solid'
                });
                zz.css({
                    'height': '76px'
                });

                x.css({
                    'line-height': '76px'
                });

                hasT = true;

                a.on('transitionend webkitTransitionend', function () {
                    $(this).removeClass('section--hidden');
                    hasT = false;
                    a.off('transitionend webkitTransitionend');
                });
            }

            return false;
        };

        // var keyNav = function (e) {
        //     var a = $('section.section--active');
        //     var aNext = a.next();
        //     var aPrev = a.prev();
        //     var i = a.index();
        //
        //
        //     if (!hasT) {
        //         if (e.keyCode === 37) {
        //
        //             if (aPrev.length === 0) {
        //                 aPrev = section.last();
        //             }
        //
        //             hasT = true;
        //
        //             aPrev.addClass('section--active');
        //             a
        //                 .addClass('section--hidden')
        //                 .removeClass('section--active');
        //
        //             a.on('transitionend webkitTransitionend', function () {
        //                 a.removeClass('section--hidden');
        //                 hasT = false;
        //                 a.off('transitionend webkitTransitionend');
        //             });
        //
        //         } else if (e.keyCode === 39) {
        //
        //             if (aNext.length === 0) {
        //                 aNext = section.eq(0)
        //             }
        //
        //
        //             aNext.addClass('section--active');
        //             a
        //                 .addClass('section--hidden')
        //                 .removeClass('section--active');
        //
        //             hasT = true;
        //
        //             aNext.on('transitionend webkitTransitionend', function () {
        //                 a.removeClass('section--hidden');
        //                 hasT = false;
        //                 aNext.off('transitionend webkitTransitionend');
        //             });
        //
        //         } else {
        //             return
        //         }
        //     }
        // };

        var bindActions = function () {
            burger.on('click', toggleNav);
            link.on('click', switchPage);
            $(document).on('ready', function () {
                page.css({
                    'transform': 'translateY(' + navH + 'px)',
                    '-webkit-transform': 'translateY(' + navH + 'px)'
                });
            });
            $('body').on('keydown');
        };

        var init = function () {
            bindActions();
        };

        return {
            init: init
        };

    }());

    Nav.init();



}


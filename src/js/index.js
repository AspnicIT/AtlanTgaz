require('es6-promise').polyfill();

import choose from './modules/choose';
import modal from './modules/modal';
import form from './modules/form';
import slider from './modules/slider';

document.addEventListener('DOMContentLoaded', () => { 

    choose(
        '.choose__buttons_button',
        '.choose__img',
        'choose__activ',
        'choose__hideImg',
        
    );
    modal(
        '.order',
        '.modal__close',
        '.modal',
        '.modal__form',
        '.focus',
        'hide'
    );
    form('.modal__form',
         '.modal__input', 
         'thanks.html', 
         ".form__status",
         '.form__feedback',
         '.form__input',
         'error'
    );
    slider(
        '.review__slider_item',
        '.review__slider',
        '.review__slider_leftBtn',
        '.review__slider_rightBtn',
        '.review__slider_wrapper',
        '.review_slider_inner',
        'review__sliderBtns',
        'review__sliderBtn',
        'choose__activ'
    );

});
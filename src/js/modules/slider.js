function slider(sliderItem,
                Sliderblock,
                toLeft,
                toRight,
                slWrapper,
                slInner,
                buttonsBlock,
                buttons,
                activeClass)
    {

    const slides = document.querySelectorAll(sliderItem),
        slider = document.querySelector(Sliderblock),
        prev = document.querySelector(toLeft),
        next = document.querySelector(toRight),
        slidesWrapper = document.querySelector(slWrapper),
        slidesField = document.querySelector(slInner),
        width = window.getComputedStyle(slidesWrapper).width;

        let slideIndex = 1;
        let offset = 0;
        function fullOffset(str) {
            return +str.replace(/\D/g, '');
        } 

        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';
        slidesWrapper.style.cssText = `
                                        overflow: hidden;
                                        position: relative;
                                        z-index: 1;
        `;

        slides.forEach(slide => {
            slide.style.width = width;
        });

        // slider.style.position = 'relative';

        const indicators = document.createElement('div'),
        dots = [];
        indicators.classList.add(buttonsBlock);

        slider.append(indicators);

        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('button');
            dot.setAttribute('data-slide-to', i + 1);
            dot.classList.add(buttons);
     
            if (i == 0) {
                dot.style.opacity = 1;
            }
            indicators.append(dot);
            dots.push(dot);
            dotsActiv();
        }

        function fieldTransfom() {
            slidesField.style.transform = `translateX(-${offset}px)`;
        }

        next.addEventListener('click', () => {
            if (offset == fullOffset(width) * (slides.length - 1)){//'500px'
                offset = 0;
            } else {
                offset += fullOffset(width);
            }
            fieldTransfom();
    
            
            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }
            dotsActiv();
        });
        prev.addEventListener('click', () => {
            if (offset == 0){//'500px'
                offset = fullOffset(width) * (slides.length - 1);
            } else {
                offset -= fullOffset(width);
            }
            fieldTransfom();
    
            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }
            dotsActiv();
    
        }); 
        dots.forEach(dot => {   
            dot.addEventListener('click', (e) => {              
                const slideTo = e.target.getAttribute('data-slide-to');
    
                slideIndex = slideTo;
                offset = fullOffset(width) * (slideTo - 1);
    
                fieldTransfom();
                dotsActiv();
            });
        });

        function dotsActiv() {
            dots.forEach(item => item.classList.remove(activeClass));
            dots[slideIndex - 1].classList.add(activeClass);
        }
}


export default slider;
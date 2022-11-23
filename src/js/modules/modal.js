
function modal(
    selButtons,
    selCloser,
    selModal,
    selForm,
    selFocusInput,
    selActivClass
) {
    const buttons = document.querySelectorAll(selButtons),
        closer = document.querySelector(selCloser),
        modal = document.querySelector(selModal),
        formModal = document.querySelector(selForm),
        focusInput = document.querySelector(selFocusInput),
        activClass = selActivClass;

    function modalOpen(block, form, cssClass) { 

        block.classList.remove(cssClass);
        document.body.style.overflow = 'hidden';
        focusInput.focus();
        form.reset();

    }

    function modalClose(block, cssClass) {
        block.classList.add(cssClass);
        document.body.style.overflow = '';
    }

    buttons.forEach((item) => {
        item.addEventListener('click' || 'touchstart', () => {
            modalOpen(modal, formModal, activClass);
        });
    });

    closer.addEventListener('click' || 'touchstart', () => {
        modalClose(modal, activClass);
    });

    modal.addEventListener('click' || 'touchstart', (e) => {
        if (e.target === modal) {
            modalClose(modal, activClass);
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            modalClose(modal, activClass);
        }
    });
    // buttons.forEach(item => item.addEventListener('click', ()=> modal.classList.remove('hide')));
}
export default modal;
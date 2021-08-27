let modal = () => {
    function bindModal (btnTrigger, modalTrigger, closeTrigger) {
        let btn = document.querySelector(btnTrigger),
            modal = document.querySelector(modalTrigger),
            close = document.querySelector(closeTrigger);

        btn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    bindModal('.btn', '.modal', '.modal__close');
    bindModal('.start__btn', '.modal', '.modal__close');
};

export default modal;
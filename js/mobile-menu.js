(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-toggle-backdrop-menu]'),
    closeModalBtn: document.querySelector('[data-toggle-backdrop-schedule]'),
    modal: document.querySelector('[data-backdrop-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
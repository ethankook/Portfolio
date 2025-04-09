function openModal(id, modalFile) {
    fetch(`modals/${modalFile}`)
      .then(response => response.text())
      .then(html => {
        const existingModal = document.getElementById(id);
        if (existingModal) existingModal.remove();
  
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        document.body.appendChild(wrapper);
  
        const modal = document.getElementById(id);
        modal.classList.add('show');
      });
  }
  
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
  
    modal.classList.remove('show');
    modal.classList.add('hide');
  
    // Delay removal to allow fade-out to finish
    setTimeout(() => {
      modal.remove();
    }, 300); // same as CSS transition duration
  }
  
  window.onclick = function(event) {
    document.querySelectorAll(".modal").forEach(modal => {
      if (event.target === modal) {
        closeModal(modal.id);
      }
    });
  };
  
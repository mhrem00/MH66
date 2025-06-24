 const toggleBtn = document.getElementById('toggleSearch');
    const searchBar = document.querySelector('.animated-search');
    const searchInput = document.getElementById('searchInput');

    toggleBtn.addEventListener('click', () => {
      searchBar.classList.toggle('active');
      if (searchBar.classList.contains('active')) {
        searchInput.focus();
      } else {
        searchInput.value = "";
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && !searchBar.classList.contains('active')) {
        e.preventDefault();
        searchBar.classList.add('active');
        searchInput.focus();
      }
      if (e.key === 'Escape') {
        searchBar.classList.remove('active');
        searchInput.value = '';
      }
    });
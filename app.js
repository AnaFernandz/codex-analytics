(() => {
  const chapters = [...document.querySelectorAll('#guide-content .chapter')];
  const toc = document.getElementById('toc');
  const search = document.getElementById('guide-search');
  const content = document.getElementById('guide-content');
  if (!toc || !search || !content) return;

  chapters.forEach((chapter) => {
    const title = chapter.querySelector('h2');
    if (!title) return;
    const link = document.createElement('a');
    link.href = `#${chapter.id}`;
    link.textContent = title.textContent;
    toc.append(link);

    chapter.querySelectorAll('h3, h4').forEach((heading, index) => {
      if (!heading.id) heading.id = `${chapter.id}-topic-${index + 1}`;
      const sublink = document.createElement('a');
      sublink.className = 'sub';
      sublink.href = `#${heading.id}`;
      sublink.textContent = heading.textContent;
      toc.append(sublink);
    });
  });

  const empty = document.createElement('p');
  empty.className = 'empty-state';
  empty.setAttribute('role', 'status');
  empty.textContent = 'No matching sections. Try a broader search term.';
  content.prepend(empty);

  search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    chapters.forEach((chapter) => {
      const matches = !query || chapter.textContent.toLocaleLowerCase().includes(query);
      chapter.hidden = !matches;
      if (matches) visible += 1;
    });
    empty.style.display = visible ? 'none' : 'block';
  });
})();

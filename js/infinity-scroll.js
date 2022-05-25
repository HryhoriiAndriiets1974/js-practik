let nextPage = 2;

const io = new IntersectionObserver(
([entry], observer) => {
  // console.log(entry);
  if (entry.isIntersecting) {
    observer.unobserve(entry.target);
    loadRederPosts(nextPage++);
  }
},
  {}
);

const loadRederPosts = (page = 1) => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
  .then(r => r.json())
  .then(posts => {
    posts.forEach(post => {
      const card = document.createElement('div');
      card.innerHTML = `
        <h3>${post.id} Title: ${post.title}</h3>
        <p>${post.body}</p>`;
      card.className = 'card';
      document.body.append(card);
    });

    // TODO: observer logic
    const lastCard = document.querySelector('.card:last-child');

    if (lastCard) {
      io.observe(lastCard);
    }
  })
  .catch(console.error)
}

loadRederPosts();

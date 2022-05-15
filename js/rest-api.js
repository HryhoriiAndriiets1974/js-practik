const fetchUsersBtn = document.querySelector(".btn");
const fetchPostBtn = document.querySelector(".btn-post");
const userList = document.querySelector(".user-list");

// posts

fetchPostBtn.addEventListener("click", () => {
  fetchPosts()
    .then((posts) => renderPostList(posts))
    .catch((error) => console.log(error));
});

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderPostList(posts) {
  userList.innerHTML = "";
  const markup = posts
    .map((post) => {
      return `<li>
          <p><b>UserId</b>: ${post.userId}</p>
          <p><b>Id</b>: ${post.id}</p>
          <p><b>Title</b>: ${post.title}</p>
          <p><b>Body</b>: ${post.body}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}

// users

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUserList(users) {
  userList.innerHTML = "";
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}

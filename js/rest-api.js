const fetchUsersBtn = document.querySelector(".btn");
const fetchPostBtn = document.querySelector(".btn-post");
const fetchCarBtn = document.querySelector(".btn-car");
const userList = document.querySelector(".user-list");

// ==================   pixabay

  // fetch ('https://pixabay.com/api/?key=27420856-25c3041aa641ff2b15189544b&q=car&image_type=photo')
  // .then(r => r.json())
  // .then(console.log);

  fetchCarBtn.addEventListener("click", () => {
    fetchCars()
      .then((results) => renderCarList(results))
      .catch((error) => console.log(error));
  });

  function fetchCars() {
    return fetch("https://pixabay.com/api/?key=27420856-25c3041aa641ff2b15189544b&q=car&image_type=photo").then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    );
  }

  function renderCarList(results) {
    userList.innerHTML = "";
    const {hits} = results;
    console.dir(hits);
    const markup = hits
      .map((hit) => {
        return `<li>
            <p><b>Id</b>: ${hit.id}</p>
            <p><b>URL:</b>: ${hit.pageURL}</p>
            <p><b>Type:</b>: ${hit.type}</p>
            <p><b>Tags:</b>: ${hit.tags}</p>
          </li>`;
      })
      .join("");
    userList.innerHTML = markup;
  }

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

// ======================== builder
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(start) {
//     this.value = start + this.value;
//   }
//   padEnd(end) {
//     this.value += end;
//   }
//   padBoth(both) {
//     this.value = both + this.value + both;
//   }
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// ================================

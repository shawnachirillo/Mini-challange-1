const blogPostsContainer = document.getElementById('blog-posts');
const toggleButton = document.getElementById('toggle');
const backButton = document.getElementById('back');

// Fetch posts from localStorage
const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Render blog posts
if (posts.length === 0) {
  blogPostsContainer.innerHTML = '<p>No blog posts yet...</p>';
} else {
  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <h3>by ${post.username}</h3>
      <p>${post.content}</p>
    `;
    blogPostsContainer.appendChild(postElement);
  });
}

// Toggle light/dark mode
if (toggleButton) {
  // Apply saved dark mode state on page load
  const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false;
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save dark mode state to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('isDarkMode', isDarkMode);
  });
}

// Back button functionality
if (backButton) {
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// Select the form and error message elements
const form = document.getElementById('blog-form');
const formErrorMessage = document.getElementById('error');
console.log('logic.js loaded, and formErrorMessage is:', formErrorMessage);

// Function to read blog posts from localStorage
function readLocalStorage() {
    return JSON.parse(localStorage.getItem('blogPosts')) || [];
}

// Add an event listener to handle form submission
form.addEventListener('submit', (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Get form field values
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    // Validate the form: Check if any field is empty
    if (!username || !title || !content) {
        // Display the error message
        formErrorMessage.style.display = 'block';
        formErrorMessage.textContent = 'Please complete the form.';
        return;
    }

    // Hide the error message if the form is valid
    formErrorMessage.style.display = 'none';

    // Save the form data to localStorage
    const blogPost = { username, title, content };
    const posts = readLocalStorage(); // Use the readLocalStorage function
    posts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(posts));

    // Redirect to the blog page
    window.location.href = 'blog.html';
});
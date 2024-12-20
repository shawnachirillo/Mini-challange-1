function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  
  // Event listener for form submission
  const blogForm = document.querySelector('#blog-form');
  const errorMessage = document.getElementById('error');
  
  if (blogForm) {
    blogForm.addEventListener('submit', (event) => { 
      event.preventDefault();

      const username = document.getElementById('username').value.trim();
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();
  
      if (!username || !title || !content) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please complete the form.';
        return;
      }
  //OBJECT

  const formData ={
user: username,
blogTitle: title,
blogContent: content
  }

  //STORE FORM DATA TO LOCAL STORAGE

  //REDIRECT USER

  window.location.href ="blog.html"
  
      errorMessage.style.display = 'none'
    })}
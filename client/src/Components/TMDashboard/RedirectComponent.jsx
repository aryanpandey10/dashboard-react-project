import React from 'react';

const RedirectComponent = () => {
  // Redirect to another HTML page
  window.location.href = 'http://127.0.0.1:5503/index.html';

  // You can also use window.location.replace to replace the current history entry
  // window.location.replace('/path/to/your/other/page.html');

  // In a real-world application, it's recommended to use React Router for navigation

  // Render null or any other content
  return null;
};

export default RedirectComponent;
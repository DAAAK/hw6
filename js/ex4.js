const addCoBLink = () => {
  const newLink = document.createElement('li');
  newLink.innerHTML = '<a href="https://www.csulb.edu/college-of-business">College of Business</a>';

  const linkList = document.getElementById('links');
  const isLink = document.getElementById('is');
  linkList.insertBefore(newLink, isLink);
};

addCoBLink();

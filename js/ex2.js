const displayText400 = () => {
    const lis = document.querySelectorAll('.iscourses li[class=\'400level\']');
    for (let i = 0; i < lis.length; i++) {
      console.log(lis[i].textContent);
    }
  };
  
  displayText400();
  
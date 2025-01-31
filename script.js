//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
  const num = parseInt(document.getElementById('ip').value, 10);
  
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
      document.getElementById('output').textContent = `Result: ${num}`;
    }, 2000); 
  })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = result * 2;
          document.getElementById('output').textContent = `Result: ${multiplied}`;
          resolve(multiplied);
        }, 1000); 
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const subtracted = result - 3;
          document.getElementById('output').textContent = `Result: ${subtracted}`;
          resolve(subtracted);
        }, 1000); 
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const divided = result / 2;
          document.getElementById('output').textContent = `Result: ${divided}`;
          resolve(divided);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const added = result + 10;
          document.getElementById('output').textContent = `Result: ${added}`;
          resolve(added);
        }, 1000); 
      });
    })
    .then((finalResult) => {
      document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      document.getElementById('output').textContent = 'An error occurred.';
    });
});

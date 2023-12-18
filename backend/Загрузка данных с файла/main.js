function loadFile() {
  const fileInput = document.getElementById('fileInput');
  const outputDiv = document.getElementById('output');

  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const content = e.target.result;

      // Обработайте содержимое файла, например, как JSON
      try {
        const productList = JSON.parse(content);
        displayProducts(productList);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    reader.readAsText(file);
  } else {
    outputDiv.innerHTML = 'Please select a file.';
  }
}

function displayProducts(products) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  if (products && products.length > 0) {
    const ul = document.createElement('ul');

    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `Product: ${product.name}, Price: ${product.price}`;
      ul.appendChild(li);
    });

    outputDiv.appendChild(ul);
  } else {
    outputDiv.innerHTML = 'No products found in the file.';
  }
}

// Этот код позволяет пользователю выбрать файл, загрузить его,
// а затем отобразить список товаров на странице.Обратите внимание,
// что этот пример предполагает, что файл содержит JSON - массив объектов товаров.
// Вы можете настроить обработку содержимого файла в соответствии с вашим форматом данных.
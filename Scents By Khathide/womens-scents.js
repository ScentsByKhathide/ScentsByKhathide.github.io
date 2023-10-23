const fragranceItems = document.querySelectorAll('.fragrance-list .fragrance');

fragranceItems.forEach((fragrance) => {
  fragrance.addEventListener('click', () => {
    // Perform an action when a fragrance item is clicked
    // For example, redirect to a product details page
    window.location.href = 'product-details.html';
  });
});

// Select the fragrance template
const fragranceTemplate = document.getElementById('fragrance-template');

// Select the fragrance list container
const fragranceList = document.querySelector('.fragrance-list');

// Define an array of fragrance data (you can replace this with your actual data)
const fragrancesData = [
  {
    imgSrc: 'fragrance1.jpg',
    name: 'Fragrance 1',
    description: 'Description of Fragrance 1',
  },
  {
    imgSrc: 'fragrance2.jpg',
    name: 'Fragrance 2',
    description: 'Description of Fragrance 2',
  },
  // Add more fragrance data objects here...
];

// Loop through the fragrancesData array and create fragrance items dynamically
fragrancesData.forEach((fragranceData) => {
  // Clone the fragrance template
  const fragranceItem = fragranceTemplate.content.cloneNode(true);

  // Update the cloned elements with fragrance data
  const img = fragranceItem.querySelector('img');
  img.src = fragranceData.imgSrc;
  img.alt = fragranceData.name;

  const h3 = fragranceItem.querySelector('h3');
  h3.textContent = fragranceData.name;

  const p = fragranceItem.querySelector('p');
  p.textContent = fragranceData.description;

  // Append the cloned fragrance item to the fragrance list
  fragranceList.appendChild(fragranceItem);
});

// Remove the original template from the DOM (optional)
fragranceTemplate.remove();

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
    imgSrc: 'Pendora Charuto Mysterious Tobacco 100ml Eau de Parfum.png',
    name: 'Pendora Charuto Mysterious Tobacco 100ml Eau de Parfum',
    description: 'Charuto Mysterious Tobacco EDP by Paris Corner is a praised fragrance with a well-balanced and complex blend. It prominently features authentic organic tobacco notes, combining fresh golden and dark pipe tobacco. The scent is enriched with subtle smokiness, chocolate-like patchouli hints, and a creamy tonka base, providing a linear and captivating olfactory journey, maintaining the focus on tobacco throughout.',
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

document.getElementById('cta-button').addEventListener('click', function() {
  // Define the phone number and message
  var phoneNumber = '+27795047656';
  var message = 'Hi, I am [YOUR NAME], I would like to enquire about one of your products, [PRODUCT NAME].';

  // Encode the phone number and message for the WhatsApp URL
  var encodedPhoneNumber = encodeURIComponent(phoneNumber);
  var encodedMessage = encodeURIComponent(message);

  // Create the WhatsApp URL with the phone number and message
  var whatsappURL = 'https://api.whatsapp.com/send?phone=' + encodedPhoneNumber + '&text=' + encodedMessage;

  // Open WhatsApp in a new tab or window
  window.open(whatsappURL, '_blank');
});

// Remove the original template from the DOM (optional)
fragranceTemplate.remove();
// Shopify Cart Functions
function addToCart(productName, price) {
  // Δημιουργία προσωρινού product για demo
  const lineItem = {
    id: Date.now(), // Θα αντικατασταθεί με product variant ID
    properties: {
      'Product': productName,
      'Price': price + '€'
    }
  };
  
  // Shopify AJAX Cart API
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [{
        id: lineItem.id,
        quantity: 1,
        properties: lineItem.properties
      }]
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Added to cart:', data);
    alert(`${productName} προστέθηκε στο καλάθι!`);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Σφάλμα στην προσθήκη στο καλάθι');
  });
}

// Carousel functionality (already included in section)

document.addEventListener('DOMContentLoaded', async () => {
  const itemsList = document.getElementById('itemsList');
  const addItemForm = document.getElementById('addItemForm');

  // Function to fetch and display items
  const fetchItems = async () => {
    const response = await fetch('http://localhost:3000/items');
    const items = await response.json();

    // Clear existing list items
    itemsList.innerHTML = '';

    // Display each item in the list
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.description || 'No description'}`;
      itemsList.appendChild(li);
    });
  };

  // Fetch and display items on page load
  fetchItems();

  // Add item form submission
  addItemForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;

    // Post new item to the server
    await fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: itemName, description: itemDescription }),
    });

    // Fetch and display updated items
    fetchItems();

    // Clear the form inputs
    addItemForm.reset();
  });
});

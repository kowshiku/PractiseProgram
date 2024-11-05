async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const container = document.getElementById('product-container');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-content">
                <h3 class="card-title">${product.title}</h3>
                <p class="card-description">${product.description}</p>
                <p class="card-price">$${product.price}</p>
                <a href="#" class="btn">Buy Now</a>
            </div>
        `;

        container.appendChild(card);
    });
}

fetchProducts();
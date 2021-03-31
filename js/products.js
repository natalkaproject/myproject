const productsJSON = 
`[
    {"id": "1",
    "image": "space-photo.jpg",
    "title":"Space",
    "description":"Capacity up to 100 people",
    "action": "Book this hall"
    },
    {"id": "2",
    "image": "majestic-photo.jpg",
    "title":"Majestic",
    "description":"Capacity up to 150 people",
    "action": "Book this hall"
    },
    {"id": "3",
    "image": "business-photo.jpg",
    "title":"Business",
    "description":"Capacity up to 80 people",
    "action": "Book this hall"
    },
]``;

function renderProducts(products) {
    const productsContainer = document.querySelector('.product-list');
    for (const product of products) {
        productsContainer.innerHTML += `
                <article>
                    <img src="img/${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <div class="button-container">
                        <button class="button card button">${product.price} - Book this hall →</button>
                </article>`
    }
}

renderProducts(JSON.parse(productsJSON));
// Mobile menu functionality
const mobileMenuButton = document.querySelector('.md\\:hidden button');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'md:hidden';

// Create mobile menu content
mobileMenu.innerHTML = `
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity hidden" id="mobile-overlay"></div>
    <div class="fixed inset-y-0 right-0 max-w-xs w-full bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out" id="mobile-menu">
        <div class="p-6">
            <div class="flex items-center justify-between mb-8">
                <div class="text-xl font-bold text-blue-600">Menu</div>
                <button class="text-gray-600 hover:text-blue-600" id="close-menu">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav class="space-y-4">
                <a href="/" class="block text-gray-600 hover:text-blue-600 py-2">Home</a>
                <a href="/pages/products.html" class="block text-gray-600 hover:text-blue-600 py-2">Products</a>
                <a href="/pages/education.html" class="block text-gray-600 hover:text-blue-600 py-2">Learn</a>
                <a href="/pages/partners.html" class="block text-gray-600 hover:text-blue-600 py-2">Partners</a>
                <a href="/pages/claims.html" class="block text-gray-600 hover:text-blue-600 py-2">Claims</a>
            </nav>
        </div>
    </div>
`;

// Add mobile menu to DOM
document.body.appendChild(mobileMenu);

// Mobile menu toggle functionality
const overlay = document.getElementById('mobile-overlay');
const menu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('close-menu');

function toggleMenu() {
    overlay.classList.toggle('hidden');
    menu.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
}

mobileMenuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Product filtering functionality
const productCategories = document.querySelectorAll('.mb-16'); // All product sections
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search products...';
searchInput.className = 'w-full md:w-96 p-3 border rounded-lg mb-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

// Add search input before products grid
const productsContainer = document.querySelector('.max-w-7xl.mx-auto.px-4.py-12');
productsContainer.insertBefore(searchInput, productsContainer.firstChild);

// Filter products based on search input
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    productCategories.forEach(category => {
        const products = category.querySelectorAll('.bg-white');
        let hasVisibleProducts = false;

        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            const description = product.querySelector('p').textContent.toLowerCase();
            const isVisible = title.includes(searchTerm) || description.includes(searchTerm);
            
            product.style.display = isVisible ? 'block' : 'none';
            if (isVisible) hasVisibleProducts = true;
        });

        // Show/hide category based on whether it has visible products
        category.style.display = hasVisibleProducts ? 'block' : 'none';
    });
});

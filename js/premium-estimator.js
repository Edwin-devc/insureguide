// Premium Calculator Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Create premium calculator HTML and inject it
    const quoteSection = document.querySelector('.max-w-3xl.mx-auto.mt-10');
    
    // Create calculator container before the existing quote form
    const calculatorContainer = document.createElement('div');
    calculatorContainer.className = 'p-4 sm:p-6 bg-white rounded-lg shadow-lg mb-6 sm:mb-10 mx-4 sm:mx-auto max-w-3xl';
    calculatorContainer.innerHTML = `
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Insurance Premium Calculator</h2>
        <form id="premiumCalculatorForm" class="space-y-4 sm:space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                    <label class="block text-gray-700 mb-1 sm:mb-2">Insurance Type</label>
                    <select id="motorInsuranceType" class="w-full p-2 border rounded text-sm sm:text-base" required>
                        <option value="">Select insurance type</option>
                        <option value="motor">Motor Comprehensive</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700 mb-1 sm:mb-2">Car Type</label>
                    <select id="carType" class="w-full p-2 border rounded text-sm sm:text-base" required>
                        <option value="">Select Car Type</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="pickup">Pickup</option>
                        <option value="van">Van</option>
                        <option value="truck">Other</option>
                    </select>
                </div>
                <div class="md:col-span-2">
                    <label class="block text-gray-700 mb-1 sm:mb-2">Sum Insured (UGX)</label>
                    <input type="number" id="sumInsured" class="w-full p-2 border rounded text-sm sm:text-base" placeholder="e.g. 30000000" required>
                    <p class="text-xs text-gray-500 mt-1">Enter the value of your vehicle</p>
                </div>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 sm:py-3 rounded text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors">
                Calculate Premium
            </button>
        </form>
    `;
    
    // Insert calculator before the quote form
    if (quoteSection) {
        quoteSection.parentNode.insertBefore(calculatorContainer, quoteSection);
    } else {
        // If the quote section doesn't exist, append to the body
        document.body.appendChild(calculatorContainer);
    }
    
    // Add event listener for premium calculator form
    const premiumCalculatorForm = document.getElementById('premiumCalculatorForm');
    if (premiumCalculatorForm) {
        premiumCalculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            calculatePremium();
        });
    }
});

// Function to calculate premium and display result
function calculatePremium() {
    // Get values from form
    const sumInsured = parseFloat(document.getElementById('sumInsured').value);
    const carType = document.getElementById('carType').value;
    
    // Validate input
    if (!sumInsured || isNaN(sumInsured) || !carType) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Calculate premium components
    const basicPremium = sumInsured * 0.04;
    const trainingLevy = basicPremium * 0.005;
    const stickerFees = 6000;
    const vat = basicPremium * 0.181;
    const stampDuty = 35000;
    const totalPremium = basicPremium + trainingLevy + stickerFees + vat + stampDuty;
    
    // Format values with commas
    const formatNumber = (num) => {
        return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };
    
    // Replace calculator form with results
    const calculatorContainer = document.getElementById('premiumCalculatorForm').parentNode;
    calculatorContainer.innerHTML = `
        <div class="space-y-6 sm:space-y-8">
            <div class="text-center sm:text-left">
                <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your Premium Breakdown</h2>
                <p class="text-sm sm:text-base text-gray-600 mb-4">Based on a ${carType.charAt(0).toUpperCase() + carType.slice(1)} with sum insured of UGX ${formatNumber(sumInsured)}</p>
            </div>
            
            <div class="space-y-4 sm:space-y-6">
                <div class="border-b pb-4">
                    <div class="flex justify-between py-2 text-sm sm:text-base">
                        <span class="text-gray-700">Basic Premium (4.00%)</span>
                        <span class="font-semibold">UGX ${formatNumber(basicPremium)}</span>
                    </div>
                </div>
                
                <div class="border-b pb-4">
                    <div class="flex justify-between py-2 text-sm sm:text-base">
                        <span class="text-gray-700">Training Levy (0.5%)</span>
                        <span class="font-semibold">UGX ${formatNumber(trainingLevy)}</span>
                    </div>
                    <div class="flex justify-between py-2 text-sm sm:text-base">
                        <span class="text-gray-700">VAT (18%)</span>
                        <span class="font-semibold">UGX ${formatNumber(vat)}</span>
                    </div>
                    <div class="flex justify-between py-2 text-sm sm:text-base">
                        <span class="text-gray-700">Stamp Duty (fixed)</span>
                        <span class="font-semibold">UGX ${formatNumber(stampDuty)}</span>
                    </div>
                </div>
                
                <div class="border-b pb-4">
                    <div class="flex justify-between py-2 text-sm sm:text-base">
                        <span class="text-gray-700">Sticker Fees</span>
                        <span class="font-semibold">UGX ${formatNumber(stickerFees)}</span>
                    </div>
                </div>
                
                <div class="bg-blue-50 p-4 rounded-lg">
                    <div class="flex justify-between py-2 text-base sm:text-lg">
                        <span class="font-bold text-gray-900">Total Premium</span>
                        <span class="font-bold text-blue-700">UGX ${formatNumber(totalPremium)}</span>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 sm:mt-10 p-4 sm:p-6 bg-gray-50 rounded-lg text-center">
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Ready for a customized quote?</h3>
                <p class="text-sm sm:text-base text-gray-600 mb-4">Now that you've seen the estimated premium, get an accurate quote from us in minutes. We'll ask more detailed questions about you and your vehicle(s) and provide options to fit your unique needs.</p>
                <button id="getQuoteBtn" class="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors">
                    Get Quote
                </button>
            </div>
            
            <div class="text-center">
                <button id="recalculateBtn" class="text-blue-600 hover:text-blue-800 underline text-sm sm:text-base">Recalculate Premium</button>
            </div>
        </div>
    `;
    
    // Add event listener for "Get Quote" button
    document.getElementById('getQuoteBtn').addEventListener('click', function() {
        const calculatorContainer = document.querySelector('.p-4.sm\\:p-6.bg-white.rounded-lg.shadow-lg');
        const quoteFormContainer = document.getElementById('quoteFormContainer');
        calculatorContainer.innerHTML = '';
        quoteFormContainer.classList.remove('hidden');
        calculatorContainer.appendChild(quoteFormContainer);
    });
    
    // Add event listener for "Recalculate" button
    document.getElementById('recalculateBtn').addEventListener('click', function() {
        // Restore the calculator form
        resetCalculator();
    });
}

// Function to reset calculator to initial state
function resetCalculator() {
    const calculatorContainer = document.querySelector('.p-4.sm\\:p-6.bg-white.rounded-lg.shadow-lg');
    calculatorContainer.innerHTML = `
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Motor Insurance Premium Calculator</h2>
        <form id="premiumCalculatorForm" class="space-y-4 sm:space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                    <label class="block text-gray-700 mb-1 sm:mb-2">Insurance Type</label>
                    <select id="motorInsuranceType" class="w-full p-2 border rounded text-sm sm:text-base" required disabled>
                        <option value="comprehensive" selected>Motor Comprehensive</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700 mb-1 sm:mb-2">Car Type</label>
                    <select id="carType" class="w-full p-2 border rounded text-sm sm:text-base" required>
                        <option value="">Select Car Type</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="pickup">Pickup</option>
                        <option value="van">Van</option>
                        <option value="truck">Truck</option>
                    </select>
                </div>
                <div class="md:col-span-2">
                    <label class="block text-gray-700 mb-1 sm:mb-2">Sum Insured (UGX)</label>
                    <input type="number" id="sumInsured" class="w-full p-2 border rounded text-sm sm:text-base" placeholder="e.g. 30000000" required>
                    <p class="text-xs text-gray-500 mt-1">Enter the value of your vehicle</p>
                </div>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 sm:py-3 rounded text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors">
                Calculate Premium
            </button>
        </form>
    `;
    
    // Reattach event listener
    document.getElementById('premiumCalculatorForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculatePremium();
    });
}

// Handle window resize - adjust layout if needed
window.addEventListener('resize', function() {
    // This could contain additional responsive adjustments if needed
    // For now, TailwindCSS classes handle most of the responsiveness
});
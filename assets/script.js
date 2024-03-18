document.querySelectorAll('.dropdown-content a').forEach(function(element, index) {
    element.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        var selectedCurrency = this.getAttribute('data-currency');
        // Determine the input field to update based on the index of the clicked element
        var inputId = index < 2 ? 'selectedCurrency1' : 'selectedCurrency2';
        document.getElementById(inputId).value = selectedCurrency;
    });
});

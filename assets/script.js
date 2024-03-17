document.querySelectorAll('.dropdown-content a').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        var selectedCurrency = this.getAttribute('data-currency');
        var dropdownId = this.closest('.dropdown').id;
        var inputId = dropdownId === 'dropdown1' ? 'selectedCurrency1' : 'selectedCurrency2';
        document.getElementById(inputId).value = selectedCurrency;
    });
});

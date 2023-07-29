function EMI() {
    const principal = parseFloat(document.getElementById('PA').value);
    const interestRate = parseFloat(document.getElementById('IR').value);
    const loanTenure = parseInt(document.getElementById('LT').value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(loanTenure))
     {
        alert('Please enter valid values.');
        return;
    }

    const monthlyInterestRate = interestRate / (12 * 100);
    const monthlyEMI = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) / (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    const resultElement = document.getElementById('result');
    resultElement.textContent = ` $${monthlyEMI.toFixed(2)}`;
}

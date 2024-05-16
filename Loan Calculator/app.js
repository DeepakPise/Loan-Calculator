window.onload = () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('input', calculateLoan);
    });
};

function calculateLoan() {
    const principle = parseFloat(document.querySelector('#amount').value);
    const interestRate = parseFloat(document.querySelector('#interest').value);
    const tenure = parseFloat(document.querySelector('#tenure').value);

    if (!principle || !interestRate || !tenure) {
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const emi = principle * monthlyInterest * Math.pow(1 + monthlyInterest, tenure) / (Math.pow(1 + monthlyInterest, tenure) - 1);

    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principle;

    document.querySelector('#emi').innerText = `EMI: ₹` + emi.toFixed(2);
    document.querySelector('#totalAmount').innerText = `Total Amount: ₹` + totalAmount.toFixed(2);
    document.querySelector('#totalInterest').innerText = `Total Interest: ₹` + totalInterest.toFixed(2);
}

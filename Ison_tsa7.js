document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.querySelector('.flex-container');
    const gapInput = document.getElementById('gap');
    const growInputs = document.querySelectorAll('.grow-input');

    document.getElementById('reset-flexbox').addEventListener('click', () => {
        flexContainer.style.gap = '0px';
        gapInput.value = 0;
        flexContainer.style.flexDirection = 'row';
        flexContainer.style.justifyContent = 'flex-start';
        flexContainer.style.alignItems = 'stretch';
        growInputs.forEach(input => input.value = 0);
        document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = 0);
    });

    gapInput.addEventListener('input', (event) => {
        flexContainer.style.gap = `${event.target.value}px`;
    });

    document.querySelectorAll('[data-flex-direction]').forEach(button => {
        button.addEventListener('click', (event) => {
            flexContainer.style.flexDirection = event.target.getAttribute('data-flex-direction');
        });
    });

    document.querySelectorAll('[data-justify-content]').forEach(button => {
        button.addEventListener('click', (event) => {
            flexContainer.style.justifyContent = event.target.getAttribute('data-justify-content');
        });
    });

    document.querySelectorAll('[data-align-items]').forEach(button => {
        button.addEventListener('click', (event) => {
            flexContainer.style.alignItems = event.target.getAttribute('data-align-items');
        });
    });

    document.getElementById('reset-grow').addEventListener('click', () => {
        growInputs.forEach(input => input.value = 0);
        document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = 0);
    });

    document.getElementById('grow-all').addEventListener('click', () => {
        document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = 1);
        growInputs.forEach(input => input.value = 1);
    });

    growInputs.forEach(input => {
        input.addEventListener('input', (event) => {
            const box = event.target.getAttribute('data-box');
            document.getElementById(`box${box}`).style.flexGrow = event.target.value;
        });
    });
});

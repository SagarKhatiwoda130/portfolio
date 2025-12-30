const scriptURL = 'https://script.google.com/macros/s/AKfycbzR9HSTZYiU9GJnbdSPby3627bPn2WXBLX7DP8bqGWYfU4-1Xbb1c3sHJlonIcIN9s/exec';
const form = document.forms['submit-to-google-sheet'];
const popup = document.getElementById('popup-message');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            // Show popup
            popup.style.display = 'block';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 3000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Oops! Something went wrong.');
        });
});

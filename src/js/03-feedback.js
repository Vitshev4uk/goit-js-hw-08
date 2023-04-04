import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const messageInput = document.querySelector('textarea');

form.addEventListener('input', throttle((event) => {
    event.preventDefault();
    const formFeedback = { email: input.value, message: messageInput.value }
    localStorage.setItem('feedback-form-state', JSON.stringify(formFeedback));
}, 500));
const savedFeedback = localStorage.getItem('feedback-form-state');

if (savedFeedback !== null) {
    const parcedFeedback = JSON.parse(savedFeedback);
    input.value = parcedFeedback.email;
    messageInput.value = parcedFeedback.message;
};

form.addEventListener('submit', (event) => {
    console.log(localStorage.getItem('feedback-form-state'));
    event.preventDefault();
    localStorage.setItem('feedback-form-state', '');
    input.value = '';
    messageInput.value = '';
})

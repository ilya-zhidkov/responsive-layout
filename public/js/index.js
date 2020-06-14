const toggleButton = document.getElementById('toggle');
const navigation = document.querySelector('body > header nav');

toggleButton.addEventListener('click', event => {
    event.preventDefault();
    
    navigation.classList.toggle('expand');
});

const toggleButton = document.getElementById('toggle');
const navigation = document.querySelector('header nav');

toggleButton.addEventListener('click', event => {
    navigation.classList.toggle('expand');
});

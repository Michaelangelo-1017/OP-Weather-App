export default function displayLoading() {
    const loadingElement = document.createElement('div');
    const loadingText = document.createElement('p');
    loadingElement.id = 'loading';
    loadingText.textContent = 'MWA';
    loadingElement.appendChild(loadingText);
    document.body.appendChild(loadingElement);
}
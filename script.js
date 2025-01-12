const storedData = JSON.parse(localStorage.getItem('skipAdToken'));
const now = Date.now();

if (!storedData || storedData.expiryTime < now) {
    const currentPath = window.location.pathname.replace(/^\//, ''); // This ensures only the leading slash is removed
    const skipAdUrl = `/index.html?redirect=${encodeURIComponent(currentPath)}`; // Encoding the path for safety
    window.location.href = skipAdUrl;
} else {
    console.log('Token is valid, no redirection needed.');
}

// Utility function to set a cookie
function setCookie(name, value, hours) {
    const d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

// Utility function to get a cookie's value
function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const storedData = JSON.parse(localStorage.getItem('skipAdToken'));
const now = Date.now();
const cookieToken = getCookie('skipAdToken');

// Validate using cookies and stored data
if (!storedData || !cookieToken || storedData.expiryTime < now || storedData.token !== cookieToken) {
    window.location.href = '/skipAdPage.html'; // Redirect to the skip ad page
} else {
    console.log('Token is valid, no redirection needed.');
}

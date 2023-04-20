// Get active tab ID from cookie or default to "tab1"
let activeTabId = getCookie("activeTabId") || "tab1";

// Set active tab as "active" class and show corresponding content
activateTab(activeTabId);


function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return match ? decodeURIComponent(match[2]) : null;
}
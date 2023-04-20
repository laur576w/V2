// Add event listeners to tabs
const tabs = document.querySelectorAll("nav ul li");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Set active tab as "active" class and show corresponding content
    activateTab(tab.id);

    // Set active tab ID in cookie
    setCookie("activeTabId", tab.id, 3);
  });
});

function activateTab(tabId) {
  // Remove "active" class from all tabs and "show" class from all content
  tabs.forEach(tab => tab.classList.remove("active"));
  const contents = document.querySelectorAll(".content > div");
  contents.forEach(content => content.classList.remove("show"));

  // Add "active" class to selected tab and "show" class to corresponding content
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add("active");
  const selectedContent = document.getElementById(`con${tabId.substr(3)}`);
  selectedContent.classList.add("show");
}
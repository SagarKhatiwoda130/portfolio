document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbList = document.getElementById("breadcrumb-list");

    // Get full page title
    const fullTitle = document.title || "Current Page";

    // Extract page name before "|"
    const currentPage = fullTitle.split("|")[0].trim();

    // Create current page breadcrumb
    const li = document.createElement("li");
    li.textContent = currentPage;
    li.classList.add("current");

    breadcrumbList.appendChild(li);
});

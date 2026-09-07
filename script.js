function searchArticles() {

    const searchInput =
        document.getElementById("searchInput");

    const question =
        searchInput.value.trim();

    if (question === "") {

        alert("What are you curious about?");

        return;
    }

    alert(
        "Great question! Search feature coming soon for: "
        + question
    );
}

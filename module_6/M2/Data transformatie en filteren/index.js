document.addEventListener("DOMContentLoaded", () => {
    const zoektermInput = document.getElementById("zoekterm");
    const sorteerSelect = document.getElementById("sorteer");
    const limietSelect = document.getElementById("limiet");
    const toepassenButton = document.getElementById("toepassen");
    const postsContainer = document.getElementById("posts-container");

    const fetchPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await response.json();
            renderPosts(posts);
        } catch (error) {
            postsContainer.innerHTML = "<p class='geen-resultaten'>Er is een fout opgetreden bij het ophalen van posts.</p>";
        }
    };

    const renderPosts = (posts) => {
        const zoekterm = zoektermInput.value.toLowerCase();
        const limiet = parseInt(limietSelect.value);
        const sorteerOptie = sorteerSelect.value;

        const gefilterdePosts = posts.filter(post => post.title.toLowerCase().includes(zoekterm));

        switch (sorteerOptie) {
            case "titel-oplopend":
                gefilterdePosts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "titel-aflopend":
                gefilterdePosts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "id-oplopend":
                gefilterdePosts.sort((a, b) => a.id - b.id);
                break;
            case "id-aflopend":
                gefilterdePosts.sort((a, b) => b.id - a.id);
                break;
        }

        const beperktePosts = gefilterdePosts.slice(0, limiet);

        postsContainer.innerHTML = "";
        if (beperktePosts.length > 0) {
            beperktePosts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");

                postElement.innerHTML = `
                    <div class="post-titel">${post.title.toUpperCase()}</div>
                    <div class="post-body">${post.body.substring(0, 100)}${post.body.length > 100 ? '...' : ''}</div>
                    <div class="post-info">
                        <span>ID: ${post.id}</span>
                        <span>Gebruiker-ID: ${post.userId}</span>
                    </div>
                `;

                postsContainer.appendChild(postElement);
            });
        } else {
            postsContainer.innerHTML = "<p class='geen-resultaten'>Geen posts gevonden</p>";
        }
    };

    toepassenButton.addEventListener("click", fetchPosts);

    fetchPosts();
});

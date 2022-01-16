async function downoloadList() {
    const response = fetch("https://gorest.co.in/public-api/posts?page=1", {
        method: "GET",
        headers: {
            Authorization: "Bearer e820bd90c36deb8ab02a3c45618bbdad2161e27739f24e9884b32d5a767af4f3",
            "Content-type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data);
}
downoloadList();
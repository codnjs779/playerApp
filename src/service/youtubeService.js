class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }
    async mostPopular() {
        console.log("this.youtube", this.youtube);
        const response = await this.youtube.get("videos", {
            params: {
                part: "snippet",
                chart: "mostPopular",
                maxResults: 25,
            },
        });
        console.log("this.youtube", response);
        return response.data.items;
    }

    async inputController(query) {
        const response = await this.youtube.get("search", {
            params: {
                part: "snippet",
                maxResults: 25,
                type: "video",
                q: query,
            },
        });
        return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
    }
}
export default Youtube;

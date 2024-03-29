 export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=N3MH3Y63Lz0yeDh7Ot8Y6TRbN6eZpEvX&q=${category}&limit=20`;

    const resp = await fetch(url);

    const {data} = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}

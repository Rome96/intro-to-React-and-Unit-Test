const getImagen = async () => {
  try {
    const apiKey = "fvs9AwDk1cJlHvKtIvF73Ar2ncHRisep";
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
		return url
  } catch (error) {
    // manejo del error
		console.error(error, 'No existe');
  }
};

export default getImagen

// getImagen();

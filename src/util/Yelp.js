const apiKey = '0icNRcoy-FSMD-ByCo5Y-_iSwN31_O6vF968saQKKrPPeyGUIcqu0z3lmAcrafAzDcoSmyF9op1EgE5kL0DzKZzUVrD25BgkXTUnHPZyo-5vwpTNU7dzKwIEo3GFWnYx';

const Yelp = {};

const search(term, location, sortBy) {
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}
		&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`;
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(businesses => (
						return {
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.address,
							city: business.city,
							state: business.state,
							zipCode: business.zipCode,
							category: business.category,
							rating: business.rating,
							reviewCount: business.reviewCount
						}
					) 
				);
			}
			throw new Error ('Request failed!');
		});
}

export default Yelp;
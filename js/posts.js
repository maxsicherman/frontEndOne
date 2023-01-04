
class Review {
    // Need to add photo(s)
    constructor(title, date, body, photos, rating) {
        this.title = title
        this.dateString = date
        this.date = new Date(date)
        this.body = body
        this.photos = photos
        this.rating = rating
    }
}

const OtusBody = `A cute spot that's perfect post-Runyon. \
                The pad thai was flavorful but light, \
                leaving us full but ready to rage. The rolls \
                and green curry were also delicious, but the \
                highlight of the meal was the mango sticky rice \
                which was the perfect amount of sticky and not overly \
                sweet. Lo-fi jazz added to the evening coffee shop vibe.`;

const Otus = new Review('Otus Thai Kitchen & Coffee', 'July 11, 2021', OtusBody, "../images/Otus.jpg", "Anna: 8.5 Max: 7.8");

const NightMarketBody = `Fun decor with WeHo energy and a cool looking bar. Rico \
                        Nasty and Jack Harlow blasting made us extra hungry. The \
                        chicken pad thai was excellent, possibly even better than \
                        Otus. Anna could not handle the spice. The filet mignon was \
                        perfectly soft and almost melted in your mouth. "A place \
                        where old people probably pregame bars." There was even a \
                        famous guy at the table next to us. Exciting!`;

const NightMarket = new Review('Night + Market', 'July 25, 2021', NightMarketBody, "../images/NightMarket203.jpg", "Anna: 9.5 Max: 8.6");

const OuiBody = `GAS. A petit Georgian restaurant in Melrose. Though they almost baited \
                Max into tipping 25% for a takeout order, this spot gets the highest \
                rating of the tour so far. The mushroom and garlic khachapuri has a \
                delectably soft crust and was loaded with a 3-cheese blend. Each bit was \
                GAS. The spiced chicken laffa... also GAS. For a quick lunch spot, Oui is \
                well worth the money.`;

const Oui = new Review('Oui', 'August 10, 2021', OuiBody, "../images/OuiRandom.jpg", "Anna: 9.5 Max: 9.6");

var Reviews = [Otus, NightMarket, Oui];

Reviews.sort((a, b) => {
    const aDate = a.date
    const bDate = b.date
    if (aDate > bDate) {
        return -1
    } else {
        return 1
    }
});



var template = document.querySelector("template");

var clone, date, title, body, images, rating;
for (i=0; i< Reviews.length; i++) {
    clone = template.content.cloneNode(true)
 
    date = clone.querySelector("time");
    title = clone.querySelector("h3");
    body = clone.querySelectorAll("p")[0];
    images = clone.querySelectorAll("div")[1];
    rating = clone.querySelectorAll("p")[1];


    date.textContent = Reviews[i].dateString;

    const image = document.createElement("img");
    image.src=Reviews[i].photos;
    image.alt="Image didn't load."
    images.appendChild(image);

    title.textContent = Reviews[i].title;
    body.textContent = Reviews[i].body;
    rating.textContent = Reviews[i].rating;
    document.body.appendChild(clone);
}




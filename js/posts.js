
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


const MizlalaBody = `The perfect spot for some fast casual Medi food. Also a lot of food for \
                the price. The falafel was supa crunchy on the outside and paired superbly \
                with the VEGAN garlic sauce. The chicken shwarma was seasoned very well and \
                came with tasty pickles. Though the food was close to a 10, the patio was \
                somewhat chaotic plus parking was a bitch and valet was stupid expensive. \
                Would be a great dinner to takeout and eat at somewhere nice.`;

const Mizlala = new Review('Mizlala', 'August 25, 2021', MizlalaBody, "../images/Mizlala.jpg", "Anna: 8.0 Max: 7.9");

const BacariBody = `Great spot with romantic ambiance. Perfect for date night! Served by \
                    the silly and rambunctious Daniella, the fried chicken sliders were \
                    delish and messy. The shawarma tacos are a must for Mediterranean fans. \
                    The brussel sprouts had an oily crunch to them with a powerful drizzle \
                    atop. They make your breath taste and smell like brussel sprouts for \
                    hours after the meal so you and your partner can enjoy the flavor all \
                    evening! Mushroom pizza and bread pudding were also gas. Overall, great \
                    taste and atmosphere, but not quite MMMMM and a little expensive.`;

const Bacari = new Review('Bacari', 'September 12, 2021', BacariBody, "../images/Bacari.jpg", "Anna: 8.0 Max: 8.1");

const PastaSistersBody = `Great aux. With unlimited bread and thicc pasta, this spot is perfect \
                          for a couple of famished big fat fattiez. The bolognese is their most \
                          popular dish for a reason and the carbonara is creamy and delicious. \
                          It's difficult to fuck up pasta, but the food and ambience in the cute \
                          and always bumpin Culver City make Pasta Sisters well worth the money \
                          (at least when Max pays :^)).`;

const PastaSisters = new Review('Pasta Sisters', 'September 19, 2021', PastaSistersBody, "../images/PastaSisters.jpg", "Anna: 8.1 Max: 7.7");

const CofaxBody = `Kofacs is a nice spot for a quick sunday breakfast burrito while bopping around \
                   Melrose. The staff is very silly, even when they take your order from across \
                   the restaurant. The burritos and sandwiches are relatively small for the price,\
                   but still tasty. Coffee is pretty good too, but Anna made Max Karen and asked for \
                   more sugar. Tough to fully enjoy coffee that's not a Philtered Soul cold brew.`;

const Cofax = new Review('Cofax', 'October 2, 2021', CofaxBody, "../images/Cofax.jpg" ,"Anna: 7.7 Max: 7.6");

const YukoBody = `If you're in the mood for something extra weird post LACMA Jazz, Yuko Kitchen \
                  is the place for you. There was absolutely no music, and in such a small place \
                  with few people there were a few moments of total silence in the restaurant. \
                  The crazy art and weird layout add to the spot's eclectic vibe. The portions are \
                  huge though, with multiple meals in a single plate.`;

const Yuko = new Review('Yuko Kitchen', 'October 14, 2021', YukoBody, "../images/Yuko.jpg" ,'Anna: 7.0 Max: 7.0');

const ThaiFreshBody = `Thai Fresh's cute decor in a tiny space helps to create the low-key ambience. \
                       The decorations are well placed and not too much for the Wewoo strip mall \
                       restaurant. They really have the fundamentals down with a delicious and filling \
                       pad thai and pad see ew. This spot is incredibly reliable and has become our \
                       go-to for local Thai.`;

const ThaiFresh = new Review("Thai Fresh", "November 5, 2021", ThaiFreshBody, "../images/wCovidThaiFresh.jpg" , "Anna: 8.3 Max: 8.1");

var Reviews = [Otus, NightMarket, Oui, Mizlala, Bacari, PastaSisters, Cofax, Yuko, ThaiFresh];

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
    // Fill out template
    clone = template.content.cloneNode(true)
 
    date = clone.querySelector("time");
    title = clone.querySelector("h3");
    body = clone.querySelectorAll("p")[0];
    images = clone.querySelectorAll("div")[1];
    rating = clone.querySelectorAll("p")[1];


    date.textContent = Reviews[i].dateString;

    const image = document.createElement("img");
    image.src=Reviews[i].photos;
    image.alt="Image didn't load.";
    image.id="post-image";
    images.appendChild(image);

    title.textContent = Reviews[i].title;
    body.textContent = Reviews[i].body;
    rating.textContent = Reviews[i].rating;
    document.body.appendChild(clone);
}




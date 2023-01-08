
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

const NongLaBody = `Nong La adds to the rich food culture of Sawtelle. Solid pho in a chic setting. \
                    The waiter was very friendly, but was listening to music through a single wired \
                    headphone. The soup got us feelin a little bloated, so if you're trying to get \
                    SOMISOMI after, beware.`;

const NongLa = new Review("Nong La", "December 3, 2021", NongLaBody, "../images/NongLa.jpg", "Anna: 8.0 Max: 7.6");

const GoodStuffBody = `Though a bit of a mob, Good Stuff does in fact serve the goods. Anna almost \
                       made us leave at first because the food didn't seem expensive enough. But the \
                       burgers were incredibly tasty and filling. The basket of fries also were perfectly \
                       crisp and salty. Forgot to take a picture here too so enjoy Anna by the ocean!`;

const GoodStuff = new Review("Good Stuff Burgers", "December 5, 2021", GoodStuffBody, "../images/GoodStuffRandom.jpg", "Anna: 8.1 Max: 8.1");

const MazalBody = `The best restaurant in all of Los Angeles. Max was a little sus at first when Anna wanted \
                   to drive an hour to a vegetarian Israeli spot, but the food and ambience are well worth it. \
                   The bourekas are sooooooo good and the flatbread is possibly the tastiest thing on the \
                   planet, the perfect balance of sweet and savory. The pita feels like you're eating a cloud \
                   of gluten. The restaurant itself also is very nicely decorated and has a cute patio. This \
                   has become our spot and is always worth the schlep.`;
                
const Mazal = new Review("Mazal", "December 9, 2021", MazalBody, "../images/Mazal1.jpg", "Anna: 10 Max: 10");

const CourageBody = `Quite possibly the most questionable decision either of us have ever made. It truly does \
                     take courage to wait in line for 90 minutes in the rain to buy 2 bagels for $40 dollars. \
                     Yes... $40. The bagel even tasted pretentious, but was still pretty tasty. The overall \
                     experience was still XLent, as time spent together is unbeatable (especially in the Stu \
                     City Philz).`;

const Courage = new Review("Courage Bagels", "December 30, 2021", CourageBody, "../images/Courage.jpg", "Anna: 7.5 Max: 6.3");

const FlakeBody = `A nice little breakfast burrito stand in the not gross part of Venice. Very tasty salsa but \
                   they kind of skimp on the protein. The burrito was also super cheesy. Outdoor seating on Rose \
                   Ave is a great place to enjoy a tame Saturday morning.`;

const Flake = new Review("Flake", "January 15, 2022", FlakeBody, "../images/Flake.jpg", "Anna: 7.5 Max: Cofax - .5");                  

const RonanBody = `If you're really in the mood for some normal, tasty pizza, Ronan is not the place for you. The \
                   burrata is really good topped with pine nuts and super dark green oil. The pizzas are not at all \
                   straightforward, with lots of toppings that may or may not add to the tastiness of the 'za. Nice \
                   setting though with an outdoor booth in perfect lighting. 2 pizzas and burrata had us close to Xploding.`;

const Ronan = new Review("Ronan", "January 28, 2022", RonanBody, "../images/Ojai.jpg", "Anna: 7.6 Max: 7.1");

const AllTimeBody =   `Loud ass music got me feeling dizzy... The place was dimly lit with earthy decor which paired \
                       with the random loud music to create an LA-chic ambience. The food was tasty, especially the \
                       Japanese sweet potatoes. This spot is very expensive, has no parking, and our waitress was mega \
                       kookie. They also tried to finesse Anna into tipping 30% with toast... nice try All Time.`;

const AllTime = new Review("All Time", "April 8, 2022", AllTimeBody, "../images/AllTime.jpg", "Anna: 7.7 Max: 7.3");

const PomodoroBody = `Pomodoro is the Italian spot we needed. The perfect place to go post-Dayger (thanks for driving, \
                      Anna). At Pomo, they are truly for the customer. Our mans was ready to refill every 5 minutes and \
                      the owner even checked up on us. There are tons of people in a very small space, which somehow \
                      makes the spot feel more comfortable. The pasta and pizza are delicious and well-priced too.`;

const Pomodoro = new Review("Pomodoro", "April 29, 2022", PomodoroBody, "../images/Pomodoro.jpg", "Anna: 8.0 Max: 8.2");

const AllTimeBrunchBody = `Normal music volume this time. Much cheaper than dinner and still very filling and tasty. \
                           DON'T GET THE SALAD... it's just lettuce.`;

const AllTimeBrunch = new Review("All Time (Brunch)", "May 12, 2022", AllTimeBrunchBody, "../images/AllTimeBrunch.jpg", "Anna: 7.8 Max: 7.1");

const YsabelBody = `Happy anniversary! To any other couple having trouble deciding between having a fancy dinner or \
                    going clubbing for your anniversary, Ysabel is the perfect place for you. The dim but tasteful \
                    lighting paired with music you'd only hear in the clerb, curated and mixed live by a DJ, creates an \
                    ambience that might be a little too L.A. The food and drinks are pretty tasty, but relatively small \
                    portions for a lot of $$$. Server was a doucher but no worries, if you need a dome to help relax, \
                    there are plenty of people in there late 20's-early 30's vaping at the dinner table to fiend from. \
                    Though a silly place for a romantic dinner, food quality, price, and ambience mean very little compared \
                    to the joy it brings us spending an evening together and experiencing new things.`;

const Ysabel = new Review("Ysabel", "June 11, 2022", YsabelBody, "../images/Ysabel.jpg", "Anna: 6.5 Max: 6.3");

const nycBody = `Back in action! We had to get acclimated to the New York food scene before giving fair reviews, so this post \
                 will be more of an NYC food overview rather than a single restaurant review. We would like to thank our \
                 sponsors, Watson and Jeff Bezos, for allowing us to PR on food expenses this summer! After 6 weeks of feasting \
                 around Manhattan, we can confirm that the bagels here are better. Go to Absolute for the best bagel and Sable's \
                 for the best fish in town. If you're feeling Thai near the UES, Thep is better than Up Thai, except for the fact \
                 that they're always out of Chang beer. Both spots play loud house music so you can bop during your dinner instead \
                 of talking. Vanessa's is the perfect, cheap goodbye meal for lovers and dumpling lovers. The winner of most \
                 spammable spot on the Upper East Side (and maybe the whole world) goes to Sashimi Express!! Nothing beats going \
                 #beasmod on 11 rolls with your boo for only $40. As 2 big fat fatties who can't go more than a day without cookies \
                 or ice cream, Levain's is a must for a tasty dessert after a tough day of work. Unfortunately, the summers over and \
                 our 2 Jew reviewers can't feast together regularly for a bit, but they'll be reunited on the East Coast at the end \
                 of the Winter for more feasting and reviewing!`;

const NYC = new Review("NYC", "September 12, 2022", nycBody, "../images/Met.jpg", "");

var Reviews = [Otus, NightMarket, Oui, Mizlala, Bacari, PastaSisters, Cofax, Yuko, ThaiFresh, NongLa, GoodStuff, Mazal, Courage, Flake, Ronan, AllTime, Pomodoro, AllTimeBrunch, Ysabel, NYC];

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




// Initialize the map
var initialCoords = [41.3775, 64.5853];
var initialZoom = 6;
var map = L.map('map').setView(initialCoords, initialZoom);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to reset the map to initial view
function resetMap() {
    map.setView(initialCoords, initialZoom);
}

// Attach the reset function to the button
document.getElementById('reset-button').addEventListener('click', resetMap);

// Cities data with detailed information
var cities = [
    {
        name: "Tashkent",
        lat: 41.2995,
        lon: 69.2401,
        info: "Tashkent, the capital of Uzbekistan.",
        sections: [
            {
                title: "Overview",
                content: "Tashkent is a vibrant blend of history and modernity. " +
                    "Nestled in the heart of Central Asia, this cosmopolitan city is characterized by its rich cultural heritage, " +
                    "evident in its striking architecture, bustling bazaars, and ancient landmarks like the Khast Imam Complex and " +
                    "the Amir Timur Museum. Yet, Tashkent also boasts a dynamic urban landscape, with sleek skyscrapers, " +
                    "lively nightlife, and a thriving arts scene. Its strategic location on the Silk Road has influenced its diverse cuisine, " +
                    "offering a tantalizing array of flavors. With its warm hospitality and forward-thinking spirit, " +
                    "Tashkent welcomes visitors to explore its many treasures.",
                image: "images_uzb/Tashkent-overview.jpeg",
                caption: "Tashkent TV Tower: Tallest structure in Central Asia, standing at 375 meters."
            },
            {
                title: "History",
                content: "Tashkent's history is a tapestry woven with threads of conquest, trade, and cultural exchange. " +
                    "Founded over 2,000 years ago, this ancient city has been a crossroads of civilizations along the Silk Road. " +
                    "It bore witness to the rise and fall of empires, from the reign of Alexander the Great to the conquests of Genghis Khan " +
                    "and the Timurid dynasty. Tashkent's resilience shone through the trials of war and rebuilding, " +
                    "shaping its identity as a melting pot of diverse cultures. Explore its archaeological treasures, " +
                    "from ancient settlements to medieval mosques, and uncover the layers of history that have shaped " +
                    "modern-day Tashkent into the vibrant metropolis it is today.",
                image: "images_uzb/tashkent-history.jpeg",
                caption: "Amir Timur Statue: Tribute to the 14th-century conqueror in Tashkent."

            },
            {
                title: "Activities",
                content: "Tashkent, the beating heart of Uzbekistan, invites you on a journey through its captivating attractions. " +
                    "Delve into the city's history at the majestic Khast Imam Complex, home to ancient manuscripts and ornate mosques. " +
                    "Marvel at the grandeur of the Amir Timur Museum, celebrating the legacy of the legendary conqueror. " +
                    "Lose yourself in the vibrant chaos of Chorsu Bazaar, where spices, textiles, and handicrafts beckon. " +
                    "Ascend to the heights of the TV Tower for panoramic views of the city's skyline. " +
                    "Whether exploring its historic sites, wandering through its verdant parks, or savoring its culinary delights, " +
                    "Tashkent promises an unforgettable adventure.",
                image: "images_uzb/tasheknt-activities.jpeg",
                caption: "Chorsu Bazaar: Tashkent's vibrant market under a grand dome."

            }
        ]
    },
    {
        name: "Samarkand",
        lat: 39.6542,
        lon: 66.9597,
        info: "Samarkand, Gateway to the Ancient World.",
        sections: [
            {
                title: "Overview",
                content: "Samarkand, a jewel of Uzbekistan, enchants visitors with its timeless allure. " +
                    "As one of the oldest continuously inhabited cities in Central Asia, " +
                    "Samarkand's history unfolds like a captivating tale of conquest, trade, and " +
                    "cultural exchange. Nestled along the Silk Road, it served as a vital hub where East met West, " +
                    "fostering the exchange of ideas, goods, and cultures. Its architectural wonders, " +
                    "such as the Registan Square and the Bibi-Khanym Mosque, stand as testament to its glorious past as a " +
                    "center of Islamic civilization. Today, Samarkand's vibrant bazaars, stunning monuments, and " +
                    "warm hospitality beckon travelers to immerse themselves in its rich heritage and storied past.",
                image: "images_uzb/Samarkand_activities.jpeg",
                caption: "Bibi-Khanym mosque."
            },
            {
                title: "History",
                content: "Samarkand's history reads like an epic saga, woven with the threads of conquest, cultural exchange, " +
                    "and artistic achievement. As one of the oldest inhabited cities in Central Asia, it has stood witness to the rise " +
                    "and fall of empires, from Alexander the Great's conquest to the reign of the Timurid dynasty. " +
                    "Through the centuries, it flourished as a center of trade and scholarship along the Silk Road, " +
                    "attracting scholars, artisans, and merchants from distant lands. Its architectural marvels, " +
                    "such as the Gur-e-Amir Mausoleum and the Shah-i-Zinda Necropolis, reflect the city's rich cultural tapestry " +
                    "and enduring legacy as a cradle of civilization in the heart of Asia.",
                image: "images_uzb/samarkand_history.jpeg",
                caption: "Shāh-e Zendah group of mausoleums and mosques."

            },
            {
                title: "Activities",
                content: "Embark on an unforgettable journey through Samarkand, where adventure awaits at every turn. " +
                    "Dive into the city's vibrant bazaars, where the air is alive with the scent of spices and " +
                    "the chatter of traders. Lose yourself in the maze-like alleys of the Siab Bazaar, " +
                    "haggling for treasures amid a kaleidoscope of colors. Delve into the city's rich heritage with " +
                    "immersive tours of its historic sites, from the majestic Registan Square to the tranquil Ulugh Beg " +
                    "Observatory. Savor the flavors of Uzbek cuisine at local eateries, where traditional dishes like plov " +
                    "and shashlik tantalize the taste buds. Whether exploring ancient monuments or sampling culinary delights, " +
                    "Samarkand promises an adventure like no other.",
                image: "images_uzb/samarkand_overview.jpeg",
                caption: "Registan Square."
            }
        ]
    },
    {
        name: "Bukhara",
        lat: 39.7747,
        lon: 64.4286,
        info: "Bukhara, Unveil the Soul of the Silk Road.",
        sections: [
            {
                title: "Overview",
                content: "Bukhara, an oasis of antiquity in the heart of Uzbekistan, beckons travelers to discover its " +
                    "timeless wonders. Nestled along the ancient Silk Road, this historic city is a living museum, " +
                    "where the past and present converge in a tapestry of culture, tradition, and hospitality. " +
                    "From its majestic monuments to its bustling bazaars, Bukhara offers a glimpse into a bygone era, " +
                    "while embracing the vibrant spirit of modernity. Whether strolling through its labyrinthine streets or " +
                    "savoring its culinary delights, visitors are sure to be captivated by the charm and allure of Bukhara.",
                image: "images_uzb/bukhara-overview.jpeg",
                caption: "Poi-Kalyan Complex: Featuring the Kalon Minaret (1127), Kalyan Mosque (1514)."

            },
            {
                title: "History",
                content: "Step back in time and uncover the rich tapestry of history that defines Bukhara, " +
                    "a city steeped in legend and lore. For over two millennia, Bukhara has been a crossroads of civilizations, " +
                    "from the Persian Empire to the Islamic Caliphate. Its strategic location along the Silk Road made it a " +
                    "hub of trade, scholarship, and culture, attracting scholars, merchants, " +
                    "and conquerors from far and wide. From the reign of Alexander the Great to the golden age of the " +
                    "Samanid dynasty, Bukhara has been a center of learning and enlightenment, leaving behind a legacy " +
                    "of architectural marvels and artistic treasures that continue to inspire awe to this day.",
                image: "images_uzb/bukhara_history.jpeg",
                caption: "Ark of Bukhara: Historic fortress besieged by Genghis Khan in 1220."

            },
            {
                title: "Activities",
                content: "Embark on a journey of discovery through the ancient streets of Bukhara, " +
                    "where every corner reveals a new adventure. Explore the city's architectural wonders, " +
                    "from the towering minarets of the Kalyan Complex to the intricate mosaics of the Samanid Mausoleum. " +
                    "Immerse yourself in the vibrant atmosphere of the city's bustling bazaars, where artisans ply their " +
                    "trade and exotic spices fill the air with their intoxicating aroma. Indulge your senses with a feast " +
                    "of Uzbek cuisine, sampling traditional dishes like samsa and lagman at local eateries. " +
                    "Whether marveling at historic landmarks or simply soaking in the ambiance of this enchanting city, " +
                    "Bukhara promises an unforgettable experience for travelers seeking to unravel the mysteries " +
                    "of the Silk Road.",
                image: "images_uzb/bukhara-activities.jpeg",
                caption: "Iconic statue of famous Uzbek folk character Nasreddin Hoja and his donkey."
            }
        ]
    },
    {
        name: "Khiva",
        lat: 41.3794,
        lon: 60.3633,
        info: "Khiva, Echoes of Empires.",
        sections: [
            {
                title: "Overview",
                content: "Khiva, a jewel of the Uzbek desert, stands as a testament to the enduring legacy of the Silk Road. " +
                    "Nestled within ancient city walls, Khiva's labyrinthine streets and ornate minarets transport visitors " +
                    "to a bygone era. With its well-preserved architecture and vibrant culture, " +
                    "Khiva offers a glimpse into the rich tapestry of Central Asian history. From its bustling markets " +
                    "to its tranquil mosques, Khiva's charm lies in its ability to evoke the spirit of a bygone age " +
                    "while embracing the modern world.",
                image: "images_uzb/khiva-overview.jpeg",
                caption: "Inside Ichan Kala: Historic heart of Khiva."
            },
            {
                title: "History",
                content: "For centuries, Khiva has been a beacon of civilization in the vast desert expanse of Central Asia. " +
                    "Founded over two millennia ago, the city flourished as a vital oasis along the Silk Road, " +
                    "serving as a crossroads of trade and culture. From the rise of the Khwarazmian Empire to the conquests " +
                    "of Genghis Khan and the Timurid dynasty, Khiva has borne witness to the ebb and flow of empires. " +
                    "Its majestic palaces, towering minarets, and ancient fortifications stand as testaments to its " +
                    "storied past and enduring resilience.",
                image: "images_uzb/khiva-history.jpeg",
                caption: "Kalta Minor Minaret: Iconic turquoise-tiled minaret from 1851."
            },
            {
                title: "Activities",
                content: "Step into a world of enchantment as you explore the timeless streets of Khiva. " +
                    "Wander through the winding alleys of the Itchan Kala, the city's historic center, " +
                    "where every corner reveals a new wonder. Marvel at the intricate tilework of the Kalta Minor Minaret, " +
                    "or climb to the top of the ancient city walls for panoramic views of the surrounding desert. " +
                    "Immerse yourself in the vibrant atmosphere of the Tash-Hauli Palace, where music and dance bring " +
                    "Khiva's rich cultural heritage to life. Whether shopping for souvenirs in the bustling markets " +
                    "or savoring the flavors of traditional Uzbek cuisine, Khiva offers an unforgettable adventure for " +
                    "travelers seeking to experience the magic of the Silk Road",
                image: "images_uzb/khiva_acitivties.jpeg",
                caption: "Khiva Bazaar: Traditional crafts and textiles in a vibrant marketplace."
            }
        ]
    }
];

// Initial welcome message
var welcomeMessage = '<h2>Unveil the Cities of Uzbekistan!</h2>\n' +
    '    <p>Discover the rich history and vibrant culture of Uzbekistan. ' +
    'Click on a city to explore its unique attractions, historical landmarks, and the best places to visit.</p>';

//set initial welcome page before clicking anything
document.getElementById('info').innerHTML = welcomeMessage;

// Function to show city info
function showCityInfo(city) {
    let infoContent = `
        <h2>${city.name}</h2>
        <p>${city.info}</p>
    `;

    city.sections.forEach(section => {
        infoContent += `
            <h3>${section.title}</h3>
            <p>${section.content}</p>
            <figure>
                <img src="${section.image}" alt="${section.title}" style="width:100%;max-width:400px;">
                <figcaption>${section.caption}</figcaption>
            </figure>
        `;
    });

    document.getElementById('info').innerHTML = infoContent;
}

// Add pins for each city
cities.forEach(function(city) {
    var marker = L.marker([city.lat, city.lon]).addTo(map);

    marker.bindPopup(`<b>${city.name}</b>`)
        .on('click', function() {
            showCityInfo(city);
        })
        .bindTooltip(`<b>${city.name}</b>`)
});

// Load GeoJSON for Uzbekistan outline
fetch('uzbekistan.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: 'blue',
                weight: 3,
                opacity: 0.7
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error loading GeoJSON:', error));

//click outside the markers present welcome page
map.on('click',function(){
    document.getElementById('info').innerHTML = welcomeMessage;
});

// Add GeoSearch control
const provider = new window.GeoSearch.OpenStreetMapProvider();

const searchControl = new window.GeoSearch.GeoSearchControl({
    provider: provider,
    style: 'bar',
    autoComplete: true,
    autoCompleteDelay: 250,
    retainZoomLevel: false,
    animateZoom: true,
    keepResult: true

});

map.addControl(searchControl);


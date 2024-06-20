document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([18.9831, 75.7532], 8); // Centered on Maharashtra

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var forts = [
        { 
            name: "Raigad Fort", 
            lat: 18.2345, 
            lon: 73.4421, 
            info: "Raigad Fort was the capital of Chhatrapati Shivaji Maharaj's Maratha Empire. It is located in the Raigad district of Maharashtra.",
            images: [
                "https://images.unsplash.com/photo-1560756769-068d6638b559?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1589644873574-345111273e9b?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1560756718-59609860409c?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ]
        },
        { 
            name: "Sinhagad Fort", 
            lat: 18.3665, 
            lon: 73.7554, 
            info: "Sinhagad Fort, also known as Kondana Fort, is located near Pune. It is famous for the Battle of Sinhagad fought between Marathas and Mughals.",
            images: [
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/aa/67/9b/caption.jpg?w=1000&h=-1&s=1",
                "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/c1/e6/b3.jpg",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/7d/f9/10/green-water.jpg?w=1200&h=-1&s=1"
            ]
        },
        { 
            name: "Purandar Fort", 
            lat: 18.2858, 
            lon: 73.9915, 
            info: "Purandar Fort is situated near Saswad in Pune district. It played a strategic role in the defense of the Pune region during various conflicts.",
            images: [
                "https://punetouristplaces.com/wp-content/uploads/2023/06/Purandar-Fort-Pune-Tourist-Places.jpg",
                "https://www.treksandtrails.org/blog/wp-content/uploads/2020/09/Purandar-Fort-Trek.jpg",
                "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1695289040/bbj/nlj3bq985wjxxtig0jey.jpg"
            ]
        },
        { 
            name: "Rajgad Fort", 
            lat: 18.2537, 
            lon: 73.6788, 
            info: "Rajgad Fort, meaning 'King of forts', is located near Pune. It was the capital of the Maratha Empire for 26 years.",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rajgad_Fort_in_Pune%2C_Maharashtra.jpg/800px-Rajgad_Fort_in_Pune%2C_Maharashtra.jpg?20210514105845",
                "https://i.redd.it/rajgad-fort-maharashtra-india-it-is-one-of-the-oldest-forts-v0-chcppts8ptvc1.jpg?width=1080&format=pjpg&auto=webp&s=85e288d1be36f5942df664f07108b17f5cbd1a33",
                "https://vajiramandravi.s3.us-east-1.amazonaws.com/media/2023/2/20/13/53/4/Rajgad_Fort.jpg"
            ]
        },
        { 
            name: "Torna Fort", 
            lat: 18.2995, 
            lon: 73.5182, 
            info: "Torna Fort is the highest hill fort in Pune district. It was the first fort captured by Shivaji Maharaj in 1643, at the age of 16.",
            images: [
                "https://im.whatshot.in/img/2019/Jul/zunzar-machi-at-torna-cropped-1562139803.jpg",
                "https://www.adventurush.com/wp-content/uploads/2023/07/shutterstock_1817012579-1.jpg",
                "https://media2.thrillophilia.com/images/photos/000/025/398/original/1512124219_Torna_From_Zunzar_Machi.jpg?"
            ]
        }
    ];

    forts.forEach(function(fort) {
        var marker = L.marker([fort.lat, fort.lon]).addTo(map);
        var popupContent = `<b>${fort.name}</b><br>${fort.info}<br><div class="popup-gallery">`;

        fort.images.forEach(function(image) {
            popupContent += `<img src="${image}" alt="${fort.name} Image">`;
        });

        popupContent += `</div>`;

        marker.bindPopup(popupContent, {
            maxWidth: "auto" // Allow popup to expand based on content
        });
    });
});

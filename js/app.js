//mission
Vue.component("mission-image", {
  template: "#mission-images-template",
  props: {
    id: Number,
    url: String,
  },
});

Vue.component("mission-info", {
  template: "#mission-info-template",
  props: {
    id: Number,
    title: String,
    description: String,
  },
});

//feedback
Vue.component("feedback-item", {
  template: "#feedback-items-template",
  props: {
    id: Number,
    name: String,
    country: String,
    text: String,
  },
});

//blog
Vue.component("blog-item", {
  template: "#blog-items-template",
  props: {
    id: Number,
    photo: String,
    title: String,
    text: String,
  },
});

//vue
new Vue({
  el: "#app",
  data: {
    photos: [
      { id: 1, url: "./img/01/01_sky.png" },
      { id: 2, url: "./img/01/01_mountain.png" },
      { id: 3, url: "./img/01/01_sand.png" },
      { id: 4, url: "./img/01/01_beach.png" },
    ],
    missions: [
      {
        id: 1,
        title: "OUR MISSION",
        description:
          "over 15 years we are helping people to explore the beauty of the world",
      },
      {
        id: 2,
        title: "CHOOSE ANY DESTINATION ACROSS THE WORLD",
        description:
          "we collaborate with 1000+ hotels and other accommodation properties all over the globe",
      },
      {
        id: 3,
        title: "WE ARE HERE TO PROVIDE ALL YOUR TRAVEL NEEDS",
        description:
          "from planning your trip to booking hotels, flights and car hire, we will make sure your travel journey is stress-free. our travel experts are always on hand to provide you with advice, guidance and assistance",
      },
      {
        id: 4,
        title: "MAKE RESERVATIONS ONLINE ANYTIME",
        description:
          "we are here for you 24/7, contact us in any convenient way",
      },
      {
        id: 5,
        title: "YOUR PAYMENTS ARE SECURE",
        description:
          "our payment systems use the latest encryption technologies to keep your information safe and secure. you can be confident that your data is secure when booking with us.",
      },
    ],
    comments: [
      {
        id: 1,
        name: "MIKE",
        country: "SRI LANKA",
        text: "The tour guides were knowledgeable and enthusiastic, the accommodations were topnotch and the itinerary was packed with activities and sights to see. It truly was an amazing trip that I'll never forget!",
      },
      {
        id: 2,
        name: "ALICE",
        country: "FRANCE",
        text: "I recently booked a tour with this tour organization, and had a wonderful experience. They took great care to make sure we felt comfortable and safe throughout the entire trip. I would highly recommend this tour organization for anyone looking for a unique, stress-free vacation.",
      },
      {
        id: 3,
        name: "JOHN",
        country: "THAILAND",
        text: "Everything was taken care of and they were extremely responsive to all of my inquiries. The tour guides were knowledgeable and friendly and the transportation and accommodation were top-notch. I would definitely recommend it for anyone looking for an amazing tour experience!",
      },
    ],
    posts: [
      {
        id: 1,
        photo: "./img/02/02_packing.png",
        title: "PACKING TIPS",
        text: "If you're getting ready to embark on a new journey, you may be wondering what type of luggage will best suit your needs. With so many choices and sizes, it can be hard to know what to look for. The good news is that there are some great travel recommendations for different types of travelers.",
      },
      {
        id: 2,
        photo: "./img/02/02_beach.png",
        title: "BEST BEACHES",
        text: "Sunsets and sandy beaches - what could be better? Whether you’re looking for a quiet slice of paradise or an adventure-filled destination, let’s explore some of the best beaches around the world!",
      },
      {
        id: 3,
        photo: "./img/02/02_nature.png",
        title: "EXPLORING NATURE’S WONDERS",
        text: "Take a journey through magnificent forests and breathtaking nature, and experience the power of the outdoors with this incredible woodlands getaway.",
      },
    ],
  },
});

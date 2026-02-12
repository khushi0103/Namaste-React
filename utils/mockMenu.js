// const MOCK_MENU_DATA = {
//   info: {
//     cloudinaryImageId: "4581019a1db5d5e7ce6a30484b820cdd",
//     name: "Chaudhary's",
//     cuisines: ["Chinese", "Snacks"],
//     avgRating: 4.0,
//     costForTwo: "₹200 for two",
//     sla: {
//       deliveryTime: 29,
//       slaString: "25-30 MINS",
//       lastMileTravelString: "4.3 km"
//     }
//   },

//   menu: {
//     title: "Main Course",
//     categories: [
//       {
//         title: "Indian Curries",
//         itemCards: [
//           // Existing Items
//           {
//             id: "61693823",
//             name: "Kadhai Chaap",
//             description: "Serves 5",
//             imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/9dadc7c6-ce52-44b4-ac00-858037e05892_5cf56d5c-73da-43e9-89c0-5a7ee16445b1.jpg",
//             price: 200,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "3.9",
//             ratingCount: "34"
//           },

//           {
//             id: "79742105",
//             name: "Butter Dal Tadka",
//             description: "Healthy split yellow lentil with tadka.",
//             imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/a2c66a14-314d-432a-b039-9393790d5f16_2376311d-fde8-47c4-901e-60c36e720536.jpg",
//             price: 180,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "4.7",
//             ratingCount: "17"
//           },

//           {
//             id: "6826421",
//             name: "Dal Makhani",
//             description: "Creamy rich black lentil curry.",
//             imageId: "0cbf26be8622288f637edf9ebf4411b3",
//             price: 200,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "4.0",
//             ratingCount: "418"
//           },

//           {
//             id: "72961316",
//             name: "Matar Mushroom",
//             description: "Serves 5",
//             imageId: "FOOD_CATALOG/IMAGES/CMS/2024/7/31/790822e6-66b1-49a0-8809-42ec323d9520_f47b0fbe-ff96-45ed-9360-9809fcc1a975.jpg",
//             price: 190,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "4.6",
//             ratingCount: "7"
//           },

//           {
//             id: "8913004",
//             name: "Aloo Palak",
//             description: "Spinach & potato curry",
//             imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/7fa45a44-dcfa-438e-ae69-2a46a2153e10_f69ee13a-18f4-492e-aeca-025ae9312249.jpg",
//             price: 180,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "4.7",
//             ratingCount: "11"
//           },

//           // 🔥 Newly Added Items

//           {
//             id: "72961293",
//             name: "Aloo Gobhi",
//             description: "Serves 5",
//             imageId: "2d187c92a8e62b58fc0f5a94c0f4f453",
//             price: 190,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "4.0",
//             ratingCount: "33"
//           },

//           {
//             id: "8913002",
//             name: "Rajma",
//             description: "Authentic Punjabi Rajma.",
//             imageId: "ktojj7mciua6mxogf1rm",
//             price: 180,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "4.6",
//             ratingCount: "72"
//           },

//           {
//             id: "72961306",
//             name: "Aloo Gobhi Masala",
//             description: "Serves 5",
//             imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/e5d9a2e9-401c-4a90-b8f4-1acc0afe68f5_fd9f5445-a111-4712-be25-7c2dbd833e80.jpg",
//             price: 190,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "3.3",
//             ratingCount: "35"
//           },

//           {
//             id: "8913001",
//             name: "Mixed Vegetable",
//             description: "Fresh seasonal vegetables cooked in Punjabi style gravy.",
//             imageId: "p4btlfcjvrfkny6wels7",
//             price: 190,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "4.1",
//             ratingCount: "76"
//           },

//           {
//             id: "6826422",
//             name: "Dal Tadka",
//             description: "Yellow lentils tempered with garlic & spices.",
//             imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/a2c66a14-314d-432a-b039-9393790d5f16_2376311d-fde8-47c4-901e-60c36e720536.jpg",
//             price: 150,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "4.1",
//             ratingCount: "347"
//           },

//           {
//             id: "62566937",
//             name: "Sarson Ka Saag",
//             description: "Traditional Punjabi mustard greens curry.",
//             imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/b1ed8b9e-a5d0-43d5-a574-093eb04326f5_69e55f28-f2db-4ed5-8234-48919996d289.jpg",
//             price: 160,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "4.8",
//             ratingCount: "30"
//           },

//           {
//             id: "60882541",
//             name: "Gravy Chaap",
//             description: "Serves 5",
//             imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/6c405ac8-c279-4320-8731-78fd6e6d017e_314be422-2f80-49e2-b703-d2d17006c69f.jpg",
//             price: 200,
//             isVeg: true,
//             portionSize: "Serves 5",
//             rating: "3.3",
//             ratingCount: "45"
//           }
//         ]
//       }
//     ]
//   }
// };


const MOCK_RESTAURANTS = [
  {
    id: "34419",
    info: {
      cloudinaryImageId: "4581019a1db5d5e7ce6a30484b820cdd",
      name: "Chaudhary's",
      cuisines: ["Chinese", "Snacks"],
      avgRating: 4.0,
      costForTwo: "₹200 for two",
      sla: {
        deliveryTime: 29,
        slaString: "25-30 MINS",
        lastMileTravelString: "4.3 km"
      }
    },
    menu: {
      title: "Main Course",
      categories: [
        {
          title: "Indian Curries",
          itemCards: [
            // 👇 YAHAN apne sare existing items paste kar do
            {
            id: "61693823",
            name: "Kadhai Chaap",
            description: "Serves 5",
            imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/9dadc7c6-ce52-44b4-ac00-858037e05892_5cf56d5c-73da-43e9-89c0-5a7ee16445b1.jpg",
            price: 200,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "3.9",
            ratingCount: "34"
          },

          {
            id: "79742105",
            name: "Butter Dal Tadka",
            description: "Healthy split yellow lentil with tadka.",
            imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/a2c66a14-314d-432a-b039-9393790d5f16_2376311d-fde8-47c4-901e-60c36e720536.jpg",
            price: 180,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "4.7",
            ratingCount: "17"
          },
          {
            id: "6826421",
            name: "Dal Makhani",
            description: "Creamy rich black lentil curry.",
            imageId: "0cbf26be8622288f637edf9ebf4411b3",
            price: 200,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "4.0",
            ratingCount: "418"
          },

          {
            id: "72961316",
            name: "Matar Mushroom",
            description: "Serves 5",
            imageId: "FOOD_CATALOG/IMAGES/CMS/2024/7/31/790822e6-66b1-49a0-8809-42ec323d9520_f47b0fbe-ff96-45ed-9360-9809fcc1a975.jpg",
            price: 190,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "4.6",
            ratingCount: "7"
          },

          {
            id: "8913004",
            name: "Aloo Palak",
            description: "Spinach & potato curry",
            imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/7fa45a44-dcfa-438e-ae69-2a46a2153e10_f69ee13a-18f4-492e-aeca-025ae9312249.jpg",
            price: 180,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "4.7",
            ratingCount: "11"
          },

          // 🔥 Newly Added Items

          {
            id: "72961293",
            name: "Aloo Gobhi",
            description: "Serves 5",
            imageId: "2d187c92a8e62b58fc0f5a94c0f4f453",
            price: 190,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "4.0",
            ratingCount: "33"
          },

          {
            id: "8913002",
            name: "Rajma",
            description: "Authentic Punjabi Rajma.",
            imageId: "ktojj7mciua6mxogf1rm",
            price: 180,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "4.6",
            ratingCount: "72"
          },

          {
            id: "72961306",
            name: "Aloo Gobhi Masala",
            description: "Serves 5",
            imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/e5d9a2e9-401c-4a90-b8f4-1acc0afe68f5_fd9f5445-a111-4712-be25-7c2dbd833e80.jpg",
            price: 190,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "3.3",
            ratingCount: "35"
          },

          {
            id: "8913001",
            name: "Mixed Vegetable",
            description: "Fresh seasonal vegetables cooked in Punjabi style gravy.",
            imageId: "p4btlfcjvrfkny6wels7",
            price: 190,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "4.1",
            ratingCount: "76"
          },

          {
            id: "6826422",
            name: "Dal Tadka",
            description: "Yellow lentils tempered with garlic & spices.",
            imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/a2c66a14-314d-432a-b039-9393790d5f16_2376311d-fde8-47c4-901e-60c36e720536.jpg",
            price: 150,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "4.1",
            ratingCount: "347"
          },

          {
            id: "62566937",
            name: "Sarson Ka Saag",
            description: "Traditional Punjabi mustard greens curry.",
            imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/b1ed8b9e-a5d0-43d5-a574-093eb04326f5_69e55f28-f2db-4ed5-8234-48919996d289.jpg",
            price: 160,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "4.8",
            ratingCount: "30"
          },

          {
            id: "60882541",
            name: "Gravy Chaap",
            description: "Serves 5",
            imageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/15/6c405ac8-c279-4320-8731-78fd6e6d017e_314be422-2f80-49e2-b703-d2d17006c69f.jpg",
            price: 200,
            isVeg: true,
            portionSize: "Serves 5",
            rating: "3.3",
            ratingCount: "45"
          }
          ]
        }
      ]
    }
  },

  {
    id: "91822",
    info: {
      name: "Bajrang's Bikaner",
      },
    menu : {
        title : "All Day Breakfast",
        categories: [
        {
        title : "All days Breakfast",
        itemCards : [
            {
                id: "132342927",
                name: "Kachori",
                category: "All Day Breakfast",
                description: "Crispy And Golden On The Outside, Stuffed With A Flavorful Spiced Filling, This Kachori Is A Perfect Crunchy, Savory Snack",
                imageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/27/b7bda96e-5628-4f5b-b62a-e4d4f1bbf020_ad515635-c4dd-4c31-9919-5efb028dceb3.png",
                price: 20,
                rating: "4.6",
                ratingCount: "209 ratings",
            },
            {
                id: "132342928",
                name: "Samosa",
                category: "All Day Breakfast",
                description: "A Crispy, Flaky Pastry Filled With A Spicy Potato And Pea Mix, This Samosa Delivers A Perfect Balance Of Crunch And Flavor.",
                imageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/27/9d6f9859-b4a1-4518-afae-fb33da720bed_21dc3d00-b68e-4933-9327-e1995b5da76b.png",
                price: 35,
                rating: "4.3",
                ratingCount: "170 ratings",
            },
            {
                id: "152174669",
                name: "Chole Bhature",
                category: "All Day Breakfast",
                description: "Soft, Fluffy Bhaturey Served With Spicy, Tangy Chickpeas (Choley), Offering A Classic, Hearty North Indian Dish Bursting With Flavor.",
                imageId: "FOOD_CATALOG/IMAGES/CMS/2024/10/9/c5872666-e363-478c-9830-4355194fb2f2_8621cad2-96bb-4f4b-90dd-6f477e7166e7.jpeg",
                price: 145,
                rating: "4.6",
                ratingCount: "233 ratings",
            }
        ]
    }
]
    },
}

];

export default MOCK_RESTAURANTS;


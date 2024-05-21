import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/*
const AppLayout = () => {
   (
    
    * Header
      -> Logo
      -> Nav Items
      -> Cart
      -> Signin
    * Body
       * Search Bar
       * RestaurantList
          *Restaurant Card
            -> Image   
            -> Name   
            -> Rating   
            -> Cusines   
       * Footer
          -> Links
          -> Copywright  
    
  )
}
*/

// Inline Styling
const bg = {
  color: "green",
  border: "2px solid yellow",
  padding: "5px",
};

const Title = () => <h1 style={bg}>ModdyMart</h1>;

const Header = () => {
  return (
    <div className="navbar">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Mode</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantList = [
  {
    name: "Burger King",
    image:
      "data:image/jpeg;base64,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",
    cusines: ["American", "Indian"],
    rating: "4.2",
  },
];

// Dynamic Data
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "74453",
      name: "Domino's Pizza",
      uuid: "87727dbd-7f2b-4857-9763-359624165845",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "dominos-pizza-majura-nondh-test_surat",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
      locality: "Bhatar Road",
      parentId: 2456,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74453",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "410476",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
      city: "21",
      area: "althan bhatar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ldtibwymvzehvmdwl8la",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
      locality: "Adajan FC",
      parentId: 236673,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "410476",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "81094",
      name: "Richie Rich Juices & Shakes",
      uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
      city: "21",
      area: "Athwa",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
      cuisines: ["Ice Cream"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
      locality: "Parle Point",
      parentId: 771,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "81094",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311443",
      name: "Siddhi Icecream & Thick Shake",
      uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
      city: "21",
      area: "Nanpura",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "spd3y5gok3vvwqulgmda",
      cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "siddhi-icecream-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
      locality: "Athwa",
      parentId: 387846,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311443",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "307070",
      name: "Pizza Pie",
      uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
      city: "21",
      area: "Nanpura",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "bvr70adr30ejyr5ua79k",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "pizza-pie-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
      locality: "Nanpura",
      parentId: 158854,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "307070",
        deliveryTime: 37,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "76858",
      name: "Feeling Hungry",
      uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
      cuisines: ["Chinese", "North Indian", "Biryani"],
      tags: [],
      costForTwo: 2000,
      costForTwoString: "₹20 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "feeling-hungry-adajan-gam-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
      locality: "Royal Residency, Adajan Gam",
      parentId: 79237,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "76858",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "617279",
      name: "Malaxmi Fast Food",
      uuid: "4848cb1b-b1c4-4a6e-9a6d-f96b781357db",
      city: "21",
      area: "Adajan",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "agkm7cflq72tkualhstb",
      cuisines: ["Fast Food", "Pizzas", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 44,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "40-50 MINS",
      lastMileTravel: 9.100000381469727,
      slugs: {
        restaurant: "mahalaxmi-fast-food-adajan-adajan-2",
        city: "surat",
      },
      cityState: "21",
      address: "shop no 15,palanpur food zone,opp.sai trith,pal gam suart",
      locality: "Palanpur Food Zone",
      parentId: 373635,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "9.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "617279",
        deliveryTime: 44,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 9.100000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "469264",
      name: "Dessert House",
      uuid: "7a320917-c577-49cb-875a-1e585a3adbc1",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "jegpumsjcmomksbr2sxr",
      cuisines: ["Desserts", "Ice Cream"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "dessert-house-piplod-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "SHOP NO 2, MARVELLA CORRIDOR OPP. C B PATEL HEALTH CLUB V.I.P ROAD, VESU",
      locality: "Piplod",
      parentId: 71430,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "469264",
        deliveryTime: 27,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "395204",
      name: "McDonald's Gourmet Burger Collection",
      uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
      city: "21",
      area: "Piplod",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 8.199999809265137,
      slugs: {
        restaurant:
          "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
      locality: "Valentine Cinema",
      parentId: 10761,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "395204",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 8.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "193541",
      name: "Behrouz Biryani",
      uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
      city: "21",
      area: "Adajan Patiya",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "craozjakzx7sll2uracb",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Persian",
        "Desserts",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 49,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 6.400000095367432,
      slugs: {
        restaurant: "behrouz-biryani-adajan-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
      locality: "Nr Navyug College, Rander Road",
      parentId: 1803,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "193541",
        deliveryTime: 49,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 6.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "475510",
      name: "Momos House",
      uuid: "34320d9a-ffa7-450c-ad61-d50485306626",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "vmold2zualdrrypxcvue",
      cuisines: ["Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "momo’s-house-piplod-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "SHOP NO - 2, MARVELLA CORRIDOR, OPP. C B PATEL HEALTH CLUB, V.I.P. ROAD, Surat,, Vesu , Surat Municipal Corporation, Surat Municipal Corporation, Gujarat - 395007",
      locality: "Vesu",
      parentId: 15884,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "475510",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "127596",
      name: "Sabir Chicken",
      uuid: "f0f49821-52ed-4435-9014-c845e964a3d8",
      city: "21",
      area: "Chowk Bazar",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "kilrdjqt8chduasii5ni",
      cuisines: ["North Indian", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 4.300000190734863,
      slugs: {
        restaurant: "sabir-chicken-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "Nehru Bridge, Behind Nagin Chand Hall, Chowk Bazar, Surat, Gujarat 395003",
      locality: "Chowk Bazar",
      parentId: 173978,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "127596",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 4.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "64656",
      name: "Mahesh Pav Bhaji",
      uuid: "ccfda4b9-82b1-4f22-9567-eb98c448b267",
      city: "21",
      area: "Adajan",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
      cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Pizzas"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 6.900000095367432,
      slugs: {
        restaurant: "mahesh-pav-bhaji-adajan-gam-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop 12, Garden View Apartment, Honey Park Road, Adajan Gam, Surat",
      locality: "Adajan Gam",
      parentId: 6553,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "64656",
        deliveryTime: 36,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 6.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "255204",
      name: "The Dango Cake Shop",
      uuid: "dbfd3f3c-77a6-4979-96c4-ce9863e54cdc",
      city: "21",
      area: "Galaxy Circle",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "mnvfpsoealkflze4e5qi",
      cuisines: ["Bakery"],
      tags: [],
      costForTwo: 27000,
      costForTwoString: "₹270 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 7.699999809265137,
      slugs: {
        restaurant: "twisted-cake-live-cake-adajan-adajan",
        city: "surat",
      },
      cityState: "21",
      address: "44 La Victoria, galaxy circle pal Surat",
      locality: "Galaxy Circle",
      parentId: 207513,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "255204",
        deliveryTime: 34,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 7.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "664656",
      name: "Cheezylicious Cafe",
      uuid: "5880e561-10ed-4f96-990b-2251e2f09c82",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
      cuisines: [
        "Cafe",
        "Fast Food",
        "Chinese",
        "Snacks",
        "Italian",
        "Mexican",
      ],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 7.599999904632568,
      slugs: {
        restaurant: "cheezylicious-cafe-piplod-piplod-2",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop no G10 ground floor, aagam square B/S Dream heritage, Canal road, Vesu",
      locality: "Dream heritage",
      parentId: 59292,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "664656",
        deliveryTime: 38,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 7.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({ name, cuisines, lastMileTravelString }) => {
  // console.log(props);

  return (
    <>
      <div className="card">
        <img
          src={
            "data:image/jpeg;base64,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"
          }
          alt="Burger"
        />
        <h2>{name}</h2>
        <h2>{cuisines}</h2>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="body">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} Key={restaurant.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/*
 * <> fragment </>  // React.Fragment is a Compononent exported by the react.Its an empty tag.
 * JSX can have only one Parent.
 * react uses reconciiation Algorithm to diff one tree from other i.e bw actual dom and virtual dom and finds what needs to be updated and just updates that part rerenders that part. (Reconsocialiation uses DIFF Algorithm ). It only re renders that part of dom only which it does not know about .(Use unique key );
 * Virtual dom is a representaion of DOM.
 * React Fiber is a new Reconciaiation Engine in React 16. It is Responsible for DIFF.
 * Never use index as a Key.
 * No Key(Not Acceptable) <<<<<<<<<< Index Key(Use it As a Last Option) << Unique Key(Using this is the Best Practice)
 * */

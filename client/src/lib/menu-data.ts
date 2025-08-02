import { MenuItem } from "@shared/schema";

// This file contains static menu data extracted from the original restaurant files
// In a production app, this would come from a database or CMS

export const menuCategories = [
  { id: 'appetizers', name: 'Appetizers', emoji: '🍲' },
  { id: 'salads', name: 'Salads', emoji: '🥗' },
  { id: 'entrees', name: 'Entrées', emoji: '🥘' },
  { id: 'seafood', name: 'Seafood', emoji: '🦐' },
  { id: 'wraps', name: 'Gyro Wraps', emoji: '🌯' },
  { id: 'vegetarian', name: 'Vegetarian', emoji: '🥬' },
  { id: 'desserts', name: 'Desserts', emoji: '🍰' },
];

// Stock photo queries for Persian food dishes
export const stockPhotoQueries = {
  persianFood: [
    "persian kabob rice saffron",
    "middle eastern grilled meat",
    "persian stew ghormeh sabzi",
    "tahdig crispy rice",
    "persian kebab koobideh",
    "saffron basmati rice",
    "persian lamb stew",
    "middle eastern appetizers mezze"
  ],
  kebabPlatters: [
    "persian kabob platter",
    "grilled meat skewers rice",
    "middle eastern mixed grill",
    "lamb beef chicken kabob",
    "persian soltani platter",
    "grilled vegetables kabob"
  ],
  restaurantInterior: [
    "middle eastern restaurant interior",
    "persian carpet dining room",
    "warm restaurant ambiance",
    "traditional middle eastern decor"
  ],
  persianCultural: [
    "persian patterns textiles",
    "middle eastern spices market",
    "traditional persian carpet",
    "persian calligraphy art"
  ]
};

import { type User, type InsertUser, type MenuItem, type InsertMenuItem, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private menuItems: Map<string, MenuItem>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.menuItems = new Map();
    this.contactMessages = new Map();
    this.initializeMenuData();
  }

  private initializeMenuData() {
    // Appetizers
    const appetizers = [
      {
        id: randomUUID(),
        name: "Hummus",
        description: "Fine blended chickpeas, sesame seed paste, garlic, lemon juice, and olive oil, served with 1 pita bread.",
        price: "5.99",
        category: "appetizers",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/restaurant/hummus.png",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Eggplant Dip",
        description: "Warm roasted eggplant mixed with sautéed onions, garlic and crusted mint. Topped with yogurt & comes with 1 pita bread.",
        price: "6.99",
        category: "appetizers",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/stuffed-peppers.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Grape Leaves",
        description: "3 grape leaves stuffed with rice, served with garlic sauce.",
        price: "4.99",
        category: "appetizers",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/baklava.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Fetacheese",
        description: "Served with pita bread.",
        price: "7.99",
        category: "appetizers",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/shiraz-salad.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Kibi",
        description: "",
        price: "3.50",
        category: "appetizers",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/baklava.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Fried Mushroom",
        description: "Freshly battered and fried.",
        price: "7.99",
        category: "appetizers",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/baklava.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Fried Zucchini",
        description: "Freshly battered and fried.",
        price: "7.99",
        category: "appetizers",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/baklava.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Tah Dig",
        description: "Bottom of the pan crusted rice.",
        price: "1.99",
        category: "appetizers",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/chicken-kabob-plate.jpg",
        isAvailable: true,
      },
    ];

    // Salads
    const salads = [
      {
        id: randomUUID(),
        name: "Lamb Gyro Salad",
        description: "Slice of lamb, Iceberg lettuce, slice of tomato with cucumber, topped with fetta cheese, olive oil & lemon juice dressing.",
        price: "14.99",
        category: "salads",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/shiraz-salad.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Beef Filet Kabob Salad",
        description: "Tender chunks of beef ribeye with grilled tomato, bell pepper, onion & garden salad.",
        price: "18.99",
        category: "salads",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/shiraz-salad.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Chicken Breast Kabob Salad",
        description: "Juicy chunks of chicken breast with grilled tomato, bell pepper, onion & garden salad.",
        price: "14.99",
        category: "salads",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/shiraz-salad.jpg",
        isAvailable: true,
      },
    ];

    // Entrees
    const entrees = [
      {
        id: randomUUID(),
        name: "Koobideh Kabob",
        description: "Two skewers of seasoned, juicy ground beef kabob. Served with Persian rice & grilled tomatoes.",
        price: "13.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/restaurant/koobideh kabobs.png",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Chicken Koobideh",
        description: "Two skewers of ground chicken kabob. Served with Persian rice & grilled tomatoes.",
        price: "13.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/restaurant/koobideh and chicken kabob.png",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Ground Chicken & Ground Beef Kabob",
        description: "One skewer of ground beef kabob & one skewer of ground chicken kabob with Persian rice & grilled tomatoes.",
        price: "13.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/restaurant/chicken and beef.png",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Chicken Breast Kabob",
        description: "Grilled chicken breast with grilled tomato, bell pepper, & onion. Served with Persian rice.",
        price: "13.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/chicken-kabob-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Beef Shish Kabob Filet",
        description: "Tender chunks of beef ribeye with grilled tomato, bell pepper, onion & Persian rice.",
        price: "17.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Lamb Kabob",
        description: "Chunk of tender lamb served with Persian rice, grilled tomato, bell pepper, zucchini, squash & onion.",
        price: "18.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/restaurant/lamb-kabob.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Lamb Shank",
        description: "Shank of lamb cooked and served in a homemade tomato sauce & rice.",
        price: "17.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Chicken & Lamb Gyro Plate",
        description: "Slices of chicken, lamb with garlic sauce on top, hummus, Persian rice & pita bread.",
        price: "16.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Lamb Gyro Plate",
        description: "Slices of lamb gyro, hummus, and pita with garlic sauce & Persian rice.",
        price: "13.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Chicken Showarma Plate",
        description: "Slices of chicken breast, topped with garlic sauce, with a side of hummus, rice & pita bread.",
        price: "13.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/chicken-kabob-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Gheymeh (Chicken) Stew",
        description: "Chunks of chicken breast, yellow split peas, potato, tomato sauce & rice.",
        price: "12.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Ghormeh Sabzi (Beef) Stew",
        description: "Chunks of beef, beans, chopped parsley, onion, cilantro, spinach & rice.",
        price: "13.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Chicken Soltani Combo",
        description: "One skewer of beef kabob & chicken breast kabob. Served with Persian rice, grilled tomato, bell pepper & onion.",
        price: "17.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/restaurant/chicken-soltani.png",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Beef Soltani",
        description: "One skewer of ground beef kabob & chunks of Ribeye beef kabob. Served with Persian rice, grilled tomato, bell pepper & onion.",
        price: "19.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Chicken-Beef Filet Combo",
        description: "Filets of beef and chicken kabob. Served with Persian rice, grilled tomato, bell peppers & onion.",
        price: "17.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Lamb & Beef Chunk Filet Kabob",
        description: "Half portion of lamb chunk, beef sirlion, served with Persian rice, grilled tomato, onion & bell pepper.",
        price: "18.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Everything Combo",
        description: "Chicken breast filet, filet kabob and one skewer of ground beef. Served with rice, grilled tomato, bell pepper & onion.",
        price: "20.99",
        category: "entrees",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
    ];

    // Seafood
    const seafood = [
      {
        id: randomUUID(),
        name: "Tilapia Over Rice",
        description: "Sautéed with olive oil and veggies, served with special sweet chili sauce & rice.",
        price: "15.99",
        category: "seafood",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Salmon Kabob",
        description: "Served with Persian rice, grilled tomato, bell pepper, zuccini, squash & onion.",
        price: "17.99",
        category: "seafood",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Catfish Over Rice",
        description: "Served with sautéed veggies, served with special sweet chili sauce & Persian rice.",
        price: "15.99",
        category: "seafood",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
    ];

    // Wraps
    const wraps = [
      {
        id: randomUUID(),
        name: "Chicken Gyro",
        description: "Slices of chicken breast, wrapped in pita bread. Served with lettuce tomato, pickle & house garlic sauce.",
        price: "6.99",
        category: "wraps",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/chicken-kabob-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Lamb Gyro Wrap",
        description: "Slices of succulent lamb gyro, wrapped in pita bread served with tomato, pickle, and house sauce.",
        price: "6.99",
        category: "wraps",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Beef Kabob Gyro",
        description: "One skewer of ground beef kabob, wrapped in pita bread. Served with lettuce tomato, pickle & house garlic sauce.",
        price: "6.99",
        category: "wraps",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Falafel Gyro",
        description: "Fried grounded chick peas, wrapped in pita bread. Served with lettuce tomato, pickle & house garlic sauce.",
        price: "6.99",
        category: "wraps",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/stuffed-peppers.jpg",
        isAvailable: true,
      },
    ];

    // Vegetarian
    const vegetarian = [
      {
        id: randomUUID(),
        name: "Vegetarian Lentil Soup",
        description: "Fresh homemade brown lentils with onions, parsley, garlic.",
        price: "4.99",
        category: "vegetarian",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/stuffed-peppers.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Veggie Kabob",
        description: "Slices of grilled yellow squash, zuccini, tomato, onion, bell pepper. Served with Persian rice & garlic sauce.",
        price: "13.99",
        category: "vegetarian",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/kabob-veggie-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Falafel Plate",
        description: "Three fried grounded chick peas, served with hummus, Persian rice, lettuce, tomato & pita bread.",
        price: "13.99",
        category: "vegetarian",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/stuffed-peppers.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Veggie Plate",
        description: "Hummus, eggplant dip, 3 grape leaves, served with Persian rice, & pita bread.",
        price: "13.99",
        category: "vegetarian",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/stuffed-peppers.jpg",
        isAvailable: true,
      },
    ];

    // Kids Menu
    const kids = [
      {
        id: randomUUID(),
        name: "Kid's Chicken Koobideh",
        description: "1 skewer of ground chicken koobideh kabob served with Persian rice & grilled tomato.",
        price: "7.99",
        category: "kids",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/chicken-kabob-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Kid's Beef Kabob",
        description: "One skewer of seasoned, juicy ground beef kabob. Served with Persian rice and grilled tomatoes.",
        price: "7.99",
        category: "kids",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Kid's Chicken Kabob",
        description: "Juicy chicken served with Persian rice, grilled onion, bell pepper & tomato.",
        price: "7.99",
        category: "kids",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/chicken-kabob-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Chicken Nuggets",
        description: "Three nuggets, served with french fries.",
        price: "5.50",
        category: "kids",
        isVegetarian: false,
        isHalal: true,
        imageUrl: "/images/food/chicken-kabob-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Small Fries",
        description: "",
        price: "4.99",
        category: "kids",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/chicken-kabob-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Large Fries",
        description: "",
        price: "5.99",
        category: "kids",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/chicken-kabob-plate.jpg",
        isAvailable: true,
      },
    ];

    // Sides
    const sides = [
      {
        id: randomUUID(),
        name: "Shiraz Salad",
        description: "Diced cucumber, tomato, onion, crushed mint, olive oil & fresh lemon juice.",
        price: "3.49",
        category: "sides",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/restaurant/shiraz salad.png",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Tabouli",
        description: "Chopped parsley, onion, tomato, olive oil & fresh lemon juice.",
        price: "3.49",
        category: "sides",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/shiraz-salad.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "House Salad",
        description: "Iceberg lettuce, slice of tomato with cucumber, topped with fetta cheese with olive oil & lemon juice dressing.",
        price: "5.99",
        category: "sides",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/shiraz-salad.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Yogurt with Cucumber Mint",
        description: "Creamy homemade yogurt with diced cucumber & crushed mint.",
        price: "3.49",
        category: "sides",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/shiraz-salad.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Side of Rice",
        description: "",
        price: "3.99",
        category: "sides",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Side of Pita",
        description: "",
        price: "0.99",
        category: "sides",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
      {
        id: randomUUID(),
        name: "Zeresh or Dill",
        description: "",
        price: "1.99",
        category: "sides",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/kabob-rice-plate.jpg",
        isAvailable: true,
      },
    ];

    // Desserts
    const desserts = [
      {
        id: randomUUID(),
        name: "Baklava",
        description: "Delicious, sweet, traditional dessert to finish your meal.",
        price: "1.75",
        category: "desserts",
        isVegetarian: true,
        isHalal: true,
        imageUrl: "/images/food/baklava.jpg",
        isAvailable: true,
      },
    ];

    // Initialize all menu items
    [...appetizers, ...salads, ...entrees, ...seafood, ...wraps, ...vegetarian, ...kids, ...sides, ...desserts].forEach(item => {
      this.menuItems.set(item.id, item as MenuItem);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      item => item.category === category
    );
  }

  async createMenuItem(insertItem: InsertMenuItem): Promise<MenuItem> {
    const id = randomUUID();
    const item: MenuItem = { 
      ...insertItem, 
      id,
      // Set default values for fields that might be undefined
      isVegetarian: insertItem.isVegetarian ?? false,
      isHalal: insertItem.isHalal ?? true,
      imageUrl: insertItem.imageUrl ?? null,
      isAvailable: insertItem.isAvailable ?? true,
    };
    this.menuItems.set(id, item);
    return item;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date().toISOString()
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();

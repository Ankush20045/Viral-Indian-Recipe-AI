require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Static Viral Recipe Data
const recipes = [
    // --- STREET FOOD ---
    {
        id: "1",
        name: "Kulhad Pizza",
        image: "/images/kulhad_pizza.png",
        description: "Viral Street Style | The cheesy goodness in a clay pot!",
        ingredients: [
            "Pizza base or bread (cubed)",
            "Onion, Capsicum, Corn (chopped)",
            "Pizza Pasta Sauce",
            "Mayonnaise & Liquid Cheese",
            "Mozzarella Cheese",
            "Oregano & Chilli Flakes",
            "Butter"
        ],
        steps: [
            "In a bowl, mix chopped veggies, pizza sauce, mayo, and bread cubes.",
            "Take a Kulhad (clay pot), grease it with butter.",
            "Layer the mixture, add liquid cheese, then another layer.",
            "Top with lots of Mozzarella cheese, oregano, and chilli flakes.",
            "Bake in preheated oven at 180°C for 5-7 mins or microwave for 2 mins until cheese melts.",
            "Serve hot!"
        ],
        time: "15 Mins",
        difficulty: "Easy",
        tips: "Soak Kulhad in water for 1 hour before using if baking in oven.",
        category: "Street Food"
    },
    {
        id: "2",
        name: "Pani Puri / Golgappa",
        image: "/images/Panipuri.jfif",
        description: "The King of Indian Street Food! Crispy puris filled with spicy tangy water.",
        ingredients: [
            "Readymade Puris",
            "Boiled Potatoes (mashed)",
            "Black Chickpeas (boiled)",
            "Tamarind Chutney",
            "Spicy Pani (Mint, Coriander, Green Chilli, Ginger, Pani Puri Masala, Black Salt, Lemon)"
        ],
        steps: [
            "Prepare the spicy pani by blending mint, coriander, chillies, and ginger. Mix with water and spices.",
            "Mix mashed potatoes with salt, chilli powder, and chickpeas.",
            "Crack a hole in the puri, stuff with potato mix.",
            "Dip in spicy water and eat immediately!",
            "Optional: Add sweet chutney for a Meetha Puri."
        ],
        time: "30 Mins",
        difficulty: "Medium",
        tips: "Chill the spicy water for at least an hour for best taste.",
        category: "Street Food"
    },
    {
        id: "3",
        name: "Kurkure Momos",
        image: "/images/download (1).jfif",
        description: "Street Style | Crunchy, spicy, and absolutely viral.",
        ingredients: [
            "Frozen or steamed momos",
            "Cornflakes (crushed)",
            "Maida & Cornflour slurry",
            "Peri-peri masala",
            "Oil for frying"
        ],
        steps: [
            "Dip momos in the maida-cornflour slurry.",
            "Roll them in crushed cornflakes mixed with peri-peri masala.",
            "Deep fry in hot oil until golden brown and crispy.",
            "Serve with spicy red chutney and mayonnaise."
        ],
        time: "20 Mins",
        difficulty: "Medium",
        tips: "Double coat for extra crunch!",
        category: "Street Food"
    },
    {
        id: "4",
        name: "Pav Bhaji",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1000&auto=format&fit=crop",
        description: "Mumbai Style | Spicy mixed vegetable mash with buttered toasted buns.",
        ingredients: [
            "Potatoes, Cauliflower, Peas, Carrots (boiled & mashed)",
            "Onions, Tomatoes, Capsicum (finely chopped)",
            "Pav Bhaji Masala",
            "Butter (lots of it)",
            "Ginger-Garlic Paste",
            "Pav (Bread rolls)",
            "Lemon & Coriander"
        ],
        steps: [
            "Heat butter in a pan, sauté onions, ginger-garlic paste, and capsicum.",
            "Add tomatoes and cook until soft. Add pav bhaji masala and chilli powder.",
            "Add mashed veggies and mix well. Mash everything together in the pan.",
            "Add water to adjust consistency, simulate simmering.",
            "Top with a big dollop of butter and coriander.",
            "Toast pav with butter and serve hot."
        ],
        time: "40 Mins",
        difficulty: "Medium",
        tips: "Use beetroot for that bright red street-style color without artificial coloring.",
        category: "Street Food"
    },
    {
        id: "5",
        name: "Vada Pav",
        image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=1000&auto=format&fit=crop",
        description: "The Indian Burger | Spicy potato fritter in a bun.",
        ingredients: [
            "Boiled Potatoes (mashed)",
            "Mustard seeds, Curry leaves, Turmeric",
            "Green Chillies, Ginger, Garlic (crushed)",
            "Besan (Gram flour) batter",
            "Pav Buns",
            "Green & Sweet Chutneys",
            "Fried Green Chillies"
        ],
        steps: [
            "Heat oil, add mustard seeds, curry leaves, and crushed chilli-ginger-garlic.",
            "Add turmeric and mashed potatoes. Mix well and let cool.",
            "Shape into balls.",
            "Dip in seasoned besan batter and deep fry until golden.",
            "Slather chutneys on pav, place the vada inside.",
            "Serve with fried green chilli."
        ],
        time: "30 Mins",
        difficulty: "Medium",
        tips: "Add a pinch of baking soda to the batter for fluffy vadas.",
        category: "Street Food"
    },

    // --- SOUTH INDIAN ---
    {
        id: "6",
        name: "Rameshwaram Cafe Ghee Podi Idli",
        image: "/images/Podi idlii is loveee.jfif",
        description: "Trending | The famous Bangalore style ghee-soaked idlis.",
        ingredients: [
            "Leftover Idlis (cut into 4 pieces each)",
            "Ghee (Generous amount)",
            "Idli Podi (Gunpowder)",
            "Curry leaves",
            "Mustard seeds"
        ],
        steps: [
            "Heat ghee in a pan. Add mustard seeds and curry leaves.",
            "Add a lot of Idli Podi and mix well on low flame.",
            "Toss the idli pieces in the pan until coated well.",
            "Drizzle more ghee on top and serve hot.",
            "Crispy outside, soft inside!"
        ],
        time: "10 Mins",
        difficulty: "Beginner",
        tips: "Use homemade idlis kept in the fridge for better texture.",
        category: "South Indian"
    },
    {
        id: "7",
        name: "Masala Dosa",
        image: "/images/masala_dosa.png",
        description: "Classic | Crispy crepe stuffed with spiced potato filling.",
        ingredients: [
            "Dosa Batter (fermented)",
            "Potatoes (boiled & mashed)",
            "Onions, Green Chillies, Ginger",
            "Mustard seeds, Turmeric, Curry leaves",
            "Sambhar & Coconut Chutney (for serving)"
        ],
        steps: [
            "Prepare the potato masala: heat oil, temper mustard seeds, curry leaves, chillies. Sauté onions, add turmeric and potatoes. Mix well.",
            "Heat a tawa (griddle), pour a ladle of batter and spread thin.",
            "Drizzle oil/ghee around edges. Cook until crisp.",
            "Place a dollop of potato masala in center, fold, and serve.",
            "Serve with hot sambhar and chutney."
        ],
        time: "20 Mins",
        difficulty: "Hard",
        tips: "Rub the tawa with an onion slice before spreading batter to prevent sticking.",
        category: "South Indian"
    },
    {
        id: "8",
        name: "Hyderabadi Chicken Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop",
        description: "Royal | Fragrant basmati rice cooked with marinated chicken.",
        ingredients: [
            "Chicken (marinated in yogurt & spices)",
            "Basmati Rice (soaked & half-cooked)",
            "Fried Onions (Birista)",
            "Saffron milk, Ghee, Mint, Coriander",
            "Whole spices (Cardamom, Cloves, Cinnamon)"
        ],
        steps: [
            "Marinate chicken with yogurt, ginger-garlic, chilli powder, biryani masala, and fried onions for 2 hours.",
            "Layer the marinated chicken at the bottom of a heavy pot.",
            "Add a layer of half-cooked rice.",
            "Top with fried onions, saffron milk, ghee, mint, and coriander.",
            "Seal with dough and cook on low heat (Dum) for 45 mins.",
            "Serve with Raita."
        ],
        time: "1.5 Hrs",
        difficulty: "Hard",
        tips: "Do not overcook the rice before layering; it should be only 70% done.",
        category: "Main Course"
    },

    // --- NORTH INDIAN ---
    {
        id: "9",
        name: "Butter Chicken",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000&auto=format&fit=crop",
        description: "Global Favorite | Creamy tomato curry with tender chicken.",
        ingredients: [
            "Chicken (boneless, marinated)",
            "Tomatoes, Onions, Cashews",
            "Butter & Fresh Cream",
            "Ginger-Garlic Paste, Kasuri Methi",
            "Kashmiri Red Chilli Powder, Garam Masala"
        ],
        steps: [
            "Cook marinated chicken in a pan or oven.",
            "Make gravy: Sauté onions, tomatoes, cashews, spices. Blend into smooth paste.",
            "Sieve the puree. Cook with butter and ginger-garlic paste.",
            "Add chicken, fresh cream, and crushed kasuri methi.",
            "Simmer for 5-10 mins. Serve with Naan."
        ],
        time: "45 Mins",
        difficulty: "Medium",
        tips: "Use Kashmiri chilli powder for the brilliant red color without too much heat.",
        category: "Main Course"
    },
    {
        id: "10",
        name: "Paneer Tikka Masala",
        image: "/images/Paneer Tikka Masala.jfif",
        description: "Vegetarian Delight | Grilled paneer cubes in spicy gravy.",
        ingredients: [
            "Paneer (cubed)",
            "Yogurt (Hung curd) & Spices for marinade",
            "Onion-Tomato Gravy",
            "Capsicum & Onion petals",
            "Cream & Coriander"
        ],
        steps: [
            "Marinate paneer and veggies in yogurt and spices. Grill or pan-fry.",
            "Prepare a rich onion-tomato gravy with cashew paste.",
            "Add the grilled paneer and veggies to the gravy.",
            "Finish with cream and coriander.",
            "Serve with Jeera Rice or Roti."
        ],
        time: "40 Mins",
        difficulty: "Medium",
        tips: "Soak paneer in warm water for 10 mins before using to keep it soft.",
        category: "Main Course"
    },
    {
        id: "11",
        name: "Dal Makhani",
        image: "/images/jjj.jfif",
        description: "Rich & Creamy | Black lentils slow-cooked with butter.",
        ingredients: [
            "Whole Black Urad Dal + Kidney Beans (soaked overnight)",
            "Butter & Cream",
            "Tomato Puree",
            "Ginger-Garlic Paste",
            "Kashmiri Chilli & Garam Masala"
        ],
        steps: [
            "Boil dal and beans until soft and mushy.",
            "In a pot, heat butter, add ginger-garlic paste and tomato puree. Cook well.",
            "Add spices and the boiled dal. Add water and simmer on low heat for 30-40 mins.",
            "Mash some dal against the side of the pot for creaminess.",
            "Add fresh cream and butter. Simmer again.",
            "Serve hot."
        ],
        time: "1 Hr + Soaking",
        difficulty: "Medium",
        tips: "The longer you simmer (slow cook), the better it tastes!",
        category: "Main Course"
    },
    {
        id: "12",
        name: "Chole Bhature",
        image: "/images/Chole Bhature_.jfif",
        description: "Punjabi Classic | Spicy chickpeas with fluffy fried bread.",
        ingredients: [
            "Chickpeas (Kabuli Chana) - soaked & boiled",
            "Maida, Yogurt, Soda (for Bhatura)",
            "Onion, Tomato, Ginger-Garlic",
            "Chole Masala, Tea bag (for color)",
            "Oil for deep frying"
        ],
        steps: [
            "Knead maida with yogurt and soda. Rest for 2 hours.",
            "Cook chickpeas with onion-tomato masala and spices.",
            "Add a tea bag while boiling chole for that dark color (remove later).",
            "Roll out dough into discs and deep fry until puffed (Bhature).",
            "Serve with pickle and onions."
        ],
        time: "1 Hr + Rest time",
        difficulty: "Medium",
        tips: "Hot oil is key for bhaturas to puff up instantly.",
        category: "Main Course"
    },

    // --- SWEETS / DESSERTS ---
    {
        id: "13",
        name: "Gulab Jamun",
        image: "/images/_Golden Gulab Jamun Bliss_.jfif",
        description: "The classic Indian dessert. Soft, spongy, berry-sized balls soaked in rose scented sugar syrup.",
        ingredients: [
            "Khoya (Mawa) or Milk Powder",
            "Maida (All purpose flour)",
            "Sugar (for syrup)",
            "Cardamom & Rose water",
            "Ghee/Oil for frying"
        ],
        steps: [
            "Make sugar syrup with cardamom and rose water (one string consistency).",
            "Knead khoya and maida into a smooth dough. Make small balls (smooth, no cracks).",
            "Deep fry in low-medium hot ghee until dark golden brown.",
            "Soak in warm sugar syrup for at least 2 hours.",
            "Serve warm or cold."
        ],
        time: "45 Mins",
        difficulty: "Medium",
        tips: "Fry on low heat to ensure the inside is cooked properly.",
        category: "Sweets"
    },
    {
        id: "14",
        name: "Gajar Ka Halwa",
        image: "/images/gajar-ka-halwa.jfif",
        description: "Winter Special | Rich carrot pudding cooked in milk.",
        ingredients: [
            "Red Carrots (grated)",
            "Full Cream Milk",
            "Sugar",
            "Ghee",
            "Cardamom & Dry Fruits (Cashews, Almonds)"
        ],
        steps: [
            "Cook grated carrots and milk in a heavy bottom pan until milk reduces completely.",
            "Add sugar and cook until moisture evaporates.",
            "Add ghee and roast for 5-10 mins.",
            "Garnish with cardamom powder and roasted nuts.",
            "Serve hot."
        ],
        time: "1 Hr",
        difficulty: "Easy",
        tips: "Use red 'Delhi' carrots for the best natural sweetness and color.",
        category: "Sweets"
    },

    // --- QUICK / BEVERAGES ---
    {
        id: "15",
        name: "Chilli Guava Shot",
        image: "/images/Chilli Guava Shots.jfif",
        description: "Quick 10-Min | Spicy, tangy, and refreshing.",
        ingredients: [
            "Guava juice",
            "Red Chilli powder",
            "Salt & Black salt",
            "Lemon juice",
            "Ice cubes"
        ],
        steps: [
            "Rim the shot glass with lemon and dip in salt-chilli powder mix.",
            "Pour chilled guava juice.",
            "Add a dash of lemon, pinch of black salt and chilli powder.",
            "Mix well and serve chilled."
        ],
        time: "5 Mins",
        difficulty: "Easy",
        tips: "Add a splash of soda for a fizzy twist.",
        category: "Quick 10-Min Recipes"
    },
    {
        id: "16",
        name: "Masala Chai",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1000&auto=format&fit=crop",
        description: "The emotion of India. Spiced milk tea.",
        ingredients: [
            "Water & Milk (2:1 ratio)",
            "Tea powder (Loose leaf)",
            "Sugar",
            "Ginger (crushed)",
            "Cardamom (crushed)"
        ],
        steps: [
            "Boil water with ginger and cardamom.",
            "Add tea powder and boil for 1-2 mins.",
            "Add milk and sugar. Boil again until it rises up.",
            "Simmer for a minute for strong flavor.",
            "Strain and serve with biscuits."
        ],
        time: "10 Mins",
        difficulty: "Easy",
        tips: "Boil the spices in water first before adding milk to extract max flavor.",
        category: "Quick 10-Min Recipes"
    },
    // --- NEW ADDITIONS ---
    {
        id: "17",
        name: "Samosa",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop",
        description: "The All-Time Favorite | Golden crispy pastry filled with spiced potatoes.",
        ingredients: [
            "All-purpose flour (Maida)",
            "Potatoes (boiled & mashed)",
            "Green Peas",
            "Ginger, Green Chillies",
            "Spices (Cumin, Coriander, Garam Masala)",
            "Oil for deep frying"
        ],
        steps: [
            "Make a stiff dough with maida, oil, and water. Rest for 20 mins.",
            "Prepare filling: Sauté cumin, ginger, chillies, peas, and mashed potatoes with spices.",
            "Roll out dough into ovals, cut in half. Form a cone.",
            "Stuff with potato filling and seal the edges with water.",
            "Deep fry on low heat until golden and crispy.",
            "Serve with Green Chutney and Tamarind Chutney."
        ],
        time: "45 Mins",
        difficulty: "Medium",
        tips: "Fry on low heat for a long time to get that bubbly, crispy texture.",
        category: "Street Food"
    },
    {
        id: "18",
        name: "Medu Vada",
        image: "/images/medu_vada.png",
        description: "South Indian Donut | Crispy lentil fritters perfect for breakfast.",
        ingredients: [
            "Urad Dal (soaked for 4 hours)",
            "Green Chillies, Ginger",
            "Curry Leaves, Coriander",
            "Whole Peppercorns",
            "Rice Flour (for crispiness)",
            "Oil for deep frying"
        ],
        steps: [
            "Grind soaked dal into a fluffy, thick batter (add very little water).",
            "Mix in chopped chillies, ginger, curry leaves, peppercorns, and salt.",
            "Beat the batter well to aerate it.",
            "Wet your hands, take a ball of batter, make a hole in center.",
            "Slide into hot oil and fry until golden.",
            "Serve with Sambar and Coconut Chutney."
        ],
        time: "30 Mins + Soaking",
        difficulty: "Hard",
        tips: "If batter becomes loose, add a little rice flour to thicken it.",
        category: "South Indian"
    },
    {
        id: "19",
        name: "Papdi Chaat",
        image: "/images/papdi_chaat.png",
        description: "Chatpata Explosion | Crispy wafers with tangy toppings.",
        ingredients: [
            "Papdi (Crispy flat puris)",
            "Boiled Potatoes & Chickpeas",
            "Curd (Yogurt) - sweetened",
            "Green Chutney & Tamarind Chutney",
            "Sev, Pomegranate seeds",
            "Chaat Masala, Chilli Powder"
        ],
        steps: [
            "Arrange Papdis on a plate.",
            "Top with potato cubes and chickpeas.",
            "Drizzle generous amount of sweetened curd.",
            "Add Green Chutney and Tamarind Chutney.",
            "Sprinkle chaat masala, chilli powder, sev, and pomegranate.",
            "Eat immediately before it gets soggy!"
        ],
        time: "10 Mins",
        difficulty: "Easy",
        tips: "Keep the curd chilled and thick for the best taste.",
        category: "Street Food"
    }
];

// Routes

// Get all recipes
app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

// Get recipe by ID
app.get('/api/recipes/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

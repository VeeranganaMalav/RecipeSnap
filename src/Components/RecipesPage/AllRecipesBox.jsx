import * as css from "../../Styles/AllRecipesBoxCss";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Box, Text, Center, Button, Image } from "@chakra-ui/react";

import TempRecipeData from "../../Functions/TempData";
import RecipeCard from "./RecipeCard";
import { getData } from "../../Redux/Recipes/action";
import LoadingComponent from "./LoadingComponent";

const AllRecipesBox = () => {
  const dispatch = useDispatch();
  const Loading = useSelector((state) => state.RecipeReducer.isLoading);
  const Error = useSelector((state) => state.RecipeReducer.isError);
  const TotalPages = useSelector((state) => state.RecipeReducer.totalPages);
  const Data = useSelector((state) => state.RecipeReducer.recipes);

  useEffect((res) => {
    dispatch(getData());
  }, []);

  return (
    <Box css={css.OuterCont}>
      {/* Recipes Container */}
      {Loading ? (
        <LoadingComponent />
      ) : (
        <Box css={css.RecipeCardsHolder}>
          {/* Recipe Card */}
          {Data?.map((item, ind) => (
            <RecipeCard key={item._id} {...item} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AllRecipesBox;

let ing = [
  "Creamy peanut butter",
  "Maple syrup",
  "Coconut oil",
  "Vanilla extract",
  "Quick oats",
  "Dark chocolate chips",
  "Salt",
  "Red bell pepper",
  "Yellow bell pepper",
  "Zucchini",
  "Eggplant",
  "Red onion",
  "Sun-dried tomatoes",
  "Olive oil",
  "Balsamic vinegar",
  "Fresh thyme leaves",
  "Black pepper",
  "Vegan cheese ",
  "Dark chocolate ",
  "Dried raspberries",
  "Edible dried rose petals",
  "Rose water",
  "Freeze-dried raspberry powder",
  "Edible gold leaf ",
  "Edible silver leaf ",
  "All-purpose flour",
  "Baking powder",
  "Coconut sugar ",
  "Almond milk ",
  "Applesauce",
  "Vegetable oil ",
  "Fresh berries ",
  "Maple syrup ",
  "Granulated sugar",
  "Cocoa powder",
  "Milk ",
  "Vegetable oil",
  "Chocolate chips",
  "Powdered sugar ",
  "Vanilla ice cream ",
  "Canned chickpeas ",
  "Dried dill",
  "Dried parsley",
  "Garlic powder",
  "Onion powder",
  "Dried chives",
  "Paprika",
  "Cayenne pepper ",
  "Ripe mango",
  "Ripe avocados",
  "Jalapeño pepper",
  "Fresh cilantro",
  "Fresh lime juice",
  "Sushi rice",
  "N",
  "Avocado",
  "Cucumber",
  "Carrot",
  "Purple cabbage",
  "Soy sauce ",
  "Rice vinegar",
  "Toasted sesame seeds",
  "Semi-sweet chocolate ",
  "Vegan butter",
  "Brown sugar",
  "Flaxseed meal",
  "Water",
  "Sliced almonds",
  "Chickpeas",
  "Tahini",
  "Roasted lemon juice",
  "Garlic cloves",
  "Ground turmeric",
  "Paprika and olive oil ",
  "Sweet potatoes",
  "Chili powder",
  "Ground cumin",
  "Canned chili ",
  "Shredded cheddar cheese ",
  "Diced red onion",
  "Chopped fresh cilantro",
  "Sour cream ",
  "Rolled oats",
  "Greek yogurt",
  "Apple",
  "Honey ",
  "Ground cinnamon",
  "Ground nutmeg",
  "Chopped nuts ",
  "Old-fashioned rolled oats",
  "Pecans",
  "Dried cranberries",
  "Unsweetened shredded coconut",
  "Pumpkin seeds ",
  "Leeks",
  "Fresh spinach leaves",
  "Firm tofu",
  "Coconut milk",
  "Nutritional yeast",
  "Turmeric powder",
  "Ground black pepper",
  "Popped popc",
  "Baking soda",
  "Beetroots",
  "Cooked chickpeas",
  "Lemon juice",
  "Ground c",
  "Extra virgin olive oil",
  "Fresh parsley",
  "Toasted sesame seeds ",
  "Potatoes",
  "Green peas",
  "Cumin seeds",
  "Onion",
  "Ginger-garlic paste",
  "Tomatoes",
  "Red chili powder",
  "Garam masala",
  "Vegan butter ",
  "Powdered sugar",
  "Non-dairy milk",
  "Pinch of salt",
  "Apples ",
  "Creamy nut butter ",
  "Granola ",
  "Dried cranberries ",
  "Vegan ricotta cheese",
  "Fresh basil leaves",
  "Lemon zest",
  "Cherry tomatoes",
  "Balsamic glaze",
  "Cooked pinto beans",
  "Chipotle peppers in adobo sauce",
  "Vegetable broth ",
  "Boiling water",
  "Vegan chocolate ganache ",
  "Ripe tomatoes",
  "Sun-dried tomatoes in oil",
  "Baguette ",
  "Balsamic reduction ",
  "Shredded coconut ",
  "Canned beans ",
  "Crushed tomatoes",
  "Tomato paste",
  "Vegetable broth",
  "Dried ",
  "Dried basil",
  "Red pepper flakes ",
  "Bread slices ",
  "Butter",
  "Medjool dates",
  "Chia seeds",
  "Flax seeds",
  "Pumpkin seeds",
  "Sunflower seeds",
  "Almond butter ",
  "Cinnamon ",
  "Sun-dried tomatoes ",
  "Toasted pine nuts ",
  "Potatoes ",
  "Sea salt",
  "Fresh dill",
  "Salt and pepper",
  "Coconut flakes",
  "Almonds",
  "Cinnamon",
  "Dried fruit ",
  "Flour",
  "C",
  "T",
  "Lettuce leaves",
  "Tomato",
  "Pickle slices",
  "Vegan mayonnaise",
  "Dijon mustard",
  "Apple cider vinegar",
  "Agave nectar",
  "Ripe bananas",
  "Chopped walnuts ",
  "Miso paste",
  "Soy sauce",
  "Sesame oil",
  "Sambal oelek ",
  "Lime juice",
  "Sesame seeds ",
  "Fresh ",
  "Semi-sweet chocolate",
  "Heavy cream",
  "Egg yolks",
  "Raspberry puree ",
  "Gelatin powder",
  "Fresh raspberries ",
  "Chocolate shavings ",
  "Frozen edamame",
  "Sesame seeds",
  "White sesame seeds",
  "Honey",
  "Unsalted butter",
  "Noodles of your choice",
  "Chili garlic sauce",
  "Green onions",
  "Beet puree ",
  "Coconut milk ",
  "Pineapple chunks",
  "Mango chunks",
  "Kiwi slices",
  "Sweetener of choice ",
  "Cereal of your choice ",
  "Cooked white rice",
  "Cremini mushrooms",
  "Ground flaxseed",
  "Breadcrumbs",
  "Smoked paprika",
  "Olive oil ",
  "Ketchup",
  "Potato",
  "Ground paprika",
  "Chili powder ",
  "Almond flour",
  "Banana",
  "Plant-based milk ",
  "Coconut oil ",
  "Sea salt ",
  "Rice paper wrappers",
  "Rice vermicelli noodles",
  "Lettuce leaves ",
  "Fresh mint leaves",
  "Fresh cilantro leaves",
  "Carrots",
  "Cooked and peeled shrimp ",
  "Creamy peanut hoisin sauce",
  "Almond butter",
  "Chopped almonds",
  "Buffalo sauce ",
  "Celery sticks ",
  "Vegan ranch ",
  "Granulated sugar ",
  "Ice-cold water",
  "Eggplants",
  "Ground cayenne pepper",
  "Mint leaves",
  "Cilantro leaves",
  "Tofu ",
  "Rice noodles",
  "Bean sprouts",
  "Boiled eggs ",
  "Lemongrass",
  "Galangal ",
  "Cumin powder",
  "Shallots",
  "Lime",
  "White pepper powder",
  "Fried shallots",
  "Lime wedges",
  "Coconut sponge cake",
  "Passion fruit curd",
  "Coconut cream",
  "Toasted coconut flakes ",
  "Fresh mint leaves ",
  "Pumpkin puree",
  "Ground ginger",
  "Ground cloves",
  "Vegan pie crust",
  "Coconut whipped cream ",
  "Cauliflower fl",
  "Barbecue sauce",
  "Instant coffee granules",
  "Hot water",
  "Full-fat coconut milk",
  "Your fav",
  "Mint leaves ",
  "Bell peppers ",
  "Dried thyme",
  "Wooden skewers",
  "Canned diced tomatoes",
  "Crusty bread",
  "Fresh fruits ",
  "Drizzle of coconut milk ",
  "Unsweetened applesauce",
  "Chopped walnuts",
  "Dried figs",
  "Vegan pie crust ",
  "Coarse sugar ",
  "Watermelon ",
  "Kiwi",
  "Fresh blueberries",
  "Seaweed flakes ",
  "Mayonnaise ",
  "Hoisin sauce",
  "Sriracha sauce",
  "Fresh chives",
  "Caramel sauce ",
  "Vegan whipped cream ",
  "Udon noodles",
  "Mirin",
  "Sugar",
  "Optional: Jalapeno",
  "Pistachios",
  "Snap peas",
  "Thai red curry paste",
  "Lime leaves",
  "Cooked jasmine rice",
  "Buckwheat flour",
  "Whole wheat flour",
  "Minced garlic",
  "Cashews",
  "Fresh lemon juice",
  "Instant ramen noodles",
  "Kimchi",
  "Toasted seaweed ",
  "Toasted sesame oil",
  "Nut butter ",
  "Coconut flour",
  "Dark chocolate chips ",
  "Red onions",
  "Fresh figs",
  "Red grapes",
  "Feta cheese",
  "Fresh arugula",
  "Mixed berries ",
  "Cold water",
  "Basmati rice",
  "Milk",
  "Ground cardamom",
  "Slivered almonds ",
  "Pistachios ",
  "Ground cinnamon ",
  "Dried rose petals ",
  "Strawberries",
  "Mango",
  "Pita bread",
  "Egg",
  "Lime zest",
  "Additional shredded coconut ",
  "Coconut flakes ",
  "White beans ",
  "Cream cheese",
  "Fresh strawberries",
  "Graham crackers",
  "Unsweetened almond milk ",
  "Kalamata olives",
  "White chocolate ",
  "Sea salt flakes",
  "Frozen green peas",
  "Curry powder",
  "Turmeric",
  "Tofu",
  "Cooking oil",
  "Millet",
  "Drizzle of almond milk ",
  "Blueberries",
  "Fresh parsley leaves",
];

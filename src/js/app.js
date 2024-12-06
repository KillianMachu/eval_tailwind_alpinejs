import Alpine from "alpinejs";
import Recipes from "./modules/Recipes";
window.alpine = Alpine;

// declare your Alpine components here...
Alpine.data('Recipes', Recipes);
Alpine.start();

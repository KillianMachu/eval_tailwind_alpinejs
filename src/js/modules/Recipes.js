export default function Recipes(jsonFile) {
    return {
        recipes: [],
        items: [],
        nbRecipes: null,
        nbItems: null,
        difficulties: [],
        categories: [],
        currentDifficulty: '',
        currentPrepTime: '',
        currentCategory: '',
        searchQuery: '',
        recipeDetail: null,
        recipeDetailId: null,
        currentStep: 0,

        init(){
            this.fetchDatas(jsonFile)
        },

        // récupérer les données du json
        fetchDatas(jsonFile) {
            fetch(jsonFile)
                .then(response => response.json())
                .then(data => {
                    this.setDatas(data);
                })
                .catch(error => {
                    console.error('Erreur de chargement:', error);
                });
        },

        // définir les variables nécessaires
        setDatas(datas) {
            this.recipes = datas.recipes
            this.nbRecipes = this.recipes.length
            this.getItems()
            this.difficulties = this.setUniqueValues(this.recipes, 'difficulty')
            this.categories = this.setUniqueValues(this.recipes, 'category')
        },

        // définir les filtres (uniques)
        setUniqueValues(recipes, field) {
            const uniqueValues = new Set();
            recipes.forEach(recipe => {
                if (recipe[field]) {
                    uniqueValues.add(recipe[field]);
                }
            });
            
            return Array.from(uniqueValues);
        },
        

        // récupérer les items en fonction des filtres
        getItems() {
            this.items = this.recipes.filter(recipe => {
                return this.filterByDifficulty(recipe) &&
                this.filterByPrepTime(recipe) &&
                this.filterByCategory(recipe) &&
                this.filterBySearchQuery(recipe);
            });
            
            this.nbItems = this.items.length  
            return this.items
        },

        filterByDifficulty(recipe) {
            if (this.currentDifficulty === '') {
                return true
            }
            else {
                return recipe.difficulty === this.currentDifficulty
            }
        },

        filterByPrepTime(recipe) {
            if (this.currentPrepTime === '') {
                return true
            }
            const prepTime = recipe.preparationTime;

            if (this.currentPrepTime === 'short') {
                return prepTime < 30;
            } else if (this.currentPrepTime === 'medium') {
                return prepTime >= 30 && prepTime <= 60;
            } else if (this.currentPrepTime === 'long') {
                return prepTime > 60;
            }
            return true;
        },

        filterByCategory(recipe) {
            if (this.currentCategory === '') {
                return true
            }
            return recipe.category === this.currentCategory;
        },

        filterBySearchQuery(recipe) {
            if (this.searchQuery === '') {
                return true
            }
            return recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        },

        // vérifier si la popup est ouverte grâce aux données de recipeDetail
        isRecipeOpen(){
            return this.recipeDetail !== null
        },

        // définir les valeurs de recipeDetail et recipeDetailId pour ouvrir la popup
        openRecipe(recipeId) {
            this.recipeDetailId = recipeId
            this.recipeDetail = this.items.find((item) => item.id == this.recipeDetailId)
        },

        // supprimer les données de recipeDetail pour fermer la popup
        closeRecipe() {
            this.recipeDetail = null
            this.currentStep = 0
        },

        // augmenter les étapes quand on clique sur suivant
        decreaseCurrentStep() {
            if (this.isFirstStep()) {
                return;
            }

            this.currentStep--
        },

        // diminuer les étapes quan on clique sur précédent
        increaseCurrentStep() {
            if (this.isLastStep()) {
                return;
            }
            
            this.currentStep++
        },

        // vérifier si on est à la première étape
        isFirstStep() {
            return this.currentStep === 0
        },

        // vérifier si on est à la dernière étape
        isLastStep() {
            return this.currentStep === (this.recipeDetail.instructions.length -1)
        },
    }
}
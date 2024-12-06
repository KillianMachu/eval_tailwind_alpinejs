export default function Recipes(jsonFile) {
    return {
        recipes: [],
        items: [],
        nbRecipes: null,
        nbItems: null,
        difficulties: [],
        currentDifficulty: '',
        popup: null,
        popupId: null,

        init(){
            this.fetchDatas(jsonFile)
        },

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

        setDatas(datas) {
            this.recipes = datas.recipes
            this.items = this.recipes
            this.nbRecipes = this.items.length
            this.nbItems = this.nbRecipes
            this.difficulties = this.setDifficulties(this.recipes)
        },

        setDifficulties(recipes) {
            const difficulties = new Set()
            recipes.forEach(recipe => {
                if (recipe.difficulty) {
                    difficulties.add(recipe.difficulty)
                }
            });
            
            return Array.from(difficulties)
        },

        updateItems() {
            if (this.currentDifficulty === '') {
                this.items = this.recipes
            } else {
                this.items = this.recipes.filter((filter) => filter.difficulty == this.currentDifficulty)
            }
            this.nbItems = this.items.length            
        },

        openPopup(recipeId) {
            this.popupId = this.popupId
            this.popup = this.items.find((item) => item.id == recipeId)
        }

    }
}
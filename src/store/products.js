export default {
    state: {
        selectedCategoryName: '',
        categoryList: [
            {
                id: 1,
                image: 'img-06.jpg',
                caption: 'MAIN DISHES',
                categoryName: 'main-dishes',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 2,
                image: 'img-07.jpg',
                caption: 'SOUPS',
                categoryName: 'soups',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 3,
                image: 'img-08.jpg',
                caption: 'HAMBURGERS',
                categoryName: 'hamburgers',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            
            {
                id: 4,
                image: 'img-09.jpg',
                caption: 'DESSERTS',
                categoryName: 'desserts',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 5,
                image: 'img-10.jpg',
                caption: 'BARBECUE',
                categoryName: 'barbecue',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 6,
                image: 'img-11.jpg',
                caption: 'SALADS',
                categoryName: 'salads',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        ],

        'main-dishes': [
            {
                id: 1,
                image: 'img-06.jpg',
                caption: 'Main dish',
                categoryName: 'main-dishes',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 2,
                image: 'img-07.jpg',
                caption: 'Main dish',
                categoryName: 'main-dishes',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 3,
                image: 'img-08.jpg',
                caption: 'Main dish',
                categoryName: 'main-dishes',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            
            {
                id: 4,
                image: 'img-09.jpg',
                caption: 'Main dish',
                categoryName: 'main-dishes',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        ],

    },
    mutations: {
        setSelectedCategoryName(state,payload) {
            state.selectedCategoryName = payload;
        }
    },

    actions: {
        chooseCategory(state, payload) {
            state.commit('setSelectedCategoryName', payload);
        }
    },

    getters: {
        getCategoryList(state) {
            return state.categoryList;
        },

        getSelectedCategoryProducts(state) {
            return state[state.selectedCategoryName];
        },

        getSelectedCategoryName(state) {
            return state.selectedCategoryName.split('-').join(' ');
        }
    }    
}
  
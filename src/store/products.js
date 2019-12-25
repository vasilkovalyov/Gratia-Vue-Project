export default {
    state: {
        selectedCategoryName: '',
        chooseProduct: {},
        categoryList: [
            {
                id: 1,
                image: 'img-06.jpg',
                caption: 'MAIN DISHES',
                categoryName: 'main-dishes',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                cost: 2
            },
            {
                id: 2,
                image: 'img-07.jpg',
                caption: 'SOUPS',
                categoryName: 'soups',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                cost: 3
            },
            {
                id: 3,
                image: 'img-08.jpg',
                caption: 'HAMBURGERS',
                categoryName: 'hamburgers',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                cost: 7
            },
            
            {
                id: 4,
                image: 'img-09.jpg',
                caption: 'DESSERTS',
                categoryName: 'desserts',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                cost: 4
            },
            {
                id: 5,
                image: 'img-10.jpg',
                caption: 'BARBECUE',
                categoryName: 'barbecue',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                cost: 9
            },
            {
                id: 6,
                image: 'img-11.jpg',
                caption: 'SALADS',
                categoryName: 'salads',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                cost: 2
            }
        ],

        'main-dishes': [
            {
                id: 1,
                image: 'img-27.jpg',
                caption: 'Crispy Pork Shank',
                categoryName: 'main-dishes',
                description: 'Cooked according to a corporate recipe, served with a side dish of sauerkraut, mashed potatoes and mustard.',
                cost: 6
            },
            {
                id: 2,
                image: 'img-28.jpg',
                caption: 'Baked barbecue pork ribs',
                categoryName: 'main-dishes',
                description: 'With potato wedges, corn and pickled cucumbers',
                cost: 3
            },
            {
                id: 3,
                image: 'img-29.jpg',
                caption: 'Viennese pork schnitzel on bone',
                categoryName: 'main-dishes',
                description: 'With french fries and fresh salad',
                cost: 5
            }
        ],

        'soups': [
            {
                id: 1,
                image: 'img-12.jpg',
                caption: 'Hungarian goulash soup',
                categoryName: 'soups',
                description: 'Thick spicy soup with bell peppers, potatoes, beef, onions, carrots and garlic',
                cost: 4
            },
            {
                id: 2,
                image: 'img-13.jpg',
                caption: 'Pea soup',
                categoryName: 'soups',
                description: 'With smoked meats, bacon and hot bread sticks',
                cost: 6
            },
            {
                id: 3,
                image: 'img-14.jpg',
                caption: 'Borsch with beef',
                categoryName: 'soups',
                description: 'With smoked meats, bacon and hot bread sticks',
                cost: 10
            },
            {
                id: 4,
                image: 'img-15.jpg',
                caption: 'Mushroom Soup',
                categoryName: 'soups',
                description: 'Mushrooms and potatoes with crackers and herbs',
                cost: 7
            }
        ],

        'desserts': [
            {
                id: 1,
                image: 'img-16.jpg',
                caption: 'Napoleon',
                categoryName: 'desserts',
                description: 'Homemade recipe with orange stew',
                cost: 10
            },
            {
                id: 2,
                image: 'img-17.jpg',
                caption: 'Chocolate Fondant',
                categoryName: 'desserts',
                description: 'With ice cream, strawberries, topping and mint',
                cost: 9
            },
            {
                id: 3,
                image: 'img-18.jpg',
                caption: 'Meringues and profiteroles with creamy caramel sauce',
                categoryName: 'desserts',
                description: '',
                cost: 5
            },
            {
                id: 4,
                image: 'img-19.jpg',
                caption: 'Lingonberry cake',
                categoryName: 'desserts',
                description: 'With a delicate cheese cream',
                cost: 11
            },
            
            {
                id: 5,
                image: 'img-20.jpg',
                caption: 'Fruit vase',
                categoryName: 'desserts',
                description: 'Pears, grapes, oranges, apples, pineapple, kiwi, berries',
                cost: 4
            }
        ],

        'hamburgers': [
        ],

        'barbecue': [
        ],

        'salads': [
            {
                id: 1,
                image: 'img-21.jpg',
                caption: 'Salted puff salad with salted salmon',
                categoryName: 'salads',
                description: 'With curd cheese, garlic and horseradish, vegetables and almond petals on Borodino bread',
                cost: 12
            },
            {
                id: 2,
                image: 'img-22.jpg',
                caption: 'Grilled prawns with fresh salad and vegetables',
                categoryName: 'salads',
                description: 'Under mustard-balsamic dressing',
                cost: 7
            },
            {
                id: 3,
                image: 'img-23.jpg',
                caption: 'Grilled Adyghe cheese salad',
                categoryName: 'salads',
                description: 'With pickled bell peppers, grilled zucchini and tomatoes under lemon-olive dressing',
                cost: 9
            },
            {
                id: 4,
                image: 'img-24.jpg',
                caption: 'Caesar',
                categoryName: 'salads',
                description: 'With chicken, Romano and iceberg lettuce, Caesar dressing, Parmesan cheese, garlic crackers, cherry tomatoes and herbs',
                cost: 6
            },
            
            {
                id: 5,
                image: 'img-25.jpg',
                caption: 'Greek salad',
                categoryName: 'salads',
                description: 'Fresh cucumbers, cherry tomatoes, bell pepper, lettuce, olives, feta cheese, boiled egg, greens seasoned with olive oil',
                cost: 4
            },
            {
                id: 6,
                image: 'img-26.jpg',
                caption: 'Grilled vegetables salad',
                categoryName: 'salads',
                description: 'Garlic Pesto',
                cost: 9
            }
        ],
    },
    
    mutations: {
        setSelectedCategoryName(state,payload) {
            state.selectedCategoryName = payload;
        },

        setChooseProduct(state, payload) {
            state.chooseProduct = state[payload.category][--payload.id];
        }
    },

    actions: {
        chooseCategory(state, payload) {
            state.commit('setSelectedCategoryName', payload);
        },

        chooseProductCategoryById(state, payload) {
            state.commit('setChooseProduct', payload);
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
        },

        getChooseProduct(state) {
            return state.chooseProduct;
        }
    }    
}
  
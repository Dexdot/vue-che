export default {
  state: {
    products: [
      {
        tags: ['popular', 'hotter'],
        src: 'img/1.png',
        id: 'qw89d7',
        name: 'Стейк из говядины',
        weight: '250',
        description:
          'Стейк из поясничной части мраморной говядины. Рекомендуемая степень прожарки medium',
        composition: 'Микс салатов, лосось, соус терияки, соус Унаги',
        price: '246',
        calories: '650',
        squirrels: '34',
        fats: '60',
        carbohydrates: '12'
      },
      {
        tags: ['grill', 'hotter'],
        src: 'img/2.png',
        id: 'q98qhwd',
        name: 'Плов Чайханский',
        weight: '250',
        description:
          'Вкуснейшая шаверма прямиком из Санкт-Петербурга от великого Джамала на гостинке',
        composition: 'Смесь курицы и салата, прекрасного соуса и лаваша',
        price: '180',
        calories: '750',
        squirrels: '60',
        fats: '42',
        carbohydrates: '21'
      },
      {
        tags: ['baby', 'soup'],
        src: 'img/3.png',
        id: 'q8wydb9wq8',
        name: 'Китайский суп из утки',
        weight: '250',
        description: 'chin-chopa-evan-kzun-yan-min',
        composition: 'Уточка из поднебесной',
        price: '320',
        calories: '400',
        squirrels: '24',
        fats: '40',
        carbohydrates: '26'
      },
      {
        tags: ['sidedish', 'baby', 'popular'],
        src: 'img/4.png',
        id: 'hd12qw',
        name: 'Цезарь',
        weight: '480',
        description: 'Салат Юлия Цезаря, тот самый, да',
        composition:
          'Бомбезный итальянский (или греческий?) салатик с курицей и листьями. Ням',
        price: '299',
        calories: '370',
        squirrels: '30',
        fats: '16',
        carbohydrates: '40'
      }
    ]
  },
  getters: {
    products: state => state.products
  },
  mutations: {},
  actions: {}
};

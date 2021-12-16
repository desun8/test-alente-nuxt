const filterProducts = (product, filter) => {
  const search = filter.search;
  const price = filter.price;
  const category = filter.category;
  const brand = filter.brand;
  const rating = +filter.rating;

  if (search && !product.title.toLowerCase().includes(search.toLowerCase())) {
    return false;
  }

  if (price && price !== 'all') {
    const isPriceRange = price.includes(',');

    if (isPriceRange) {
      const priceRange = price.split(',');
      if (product.price < +priceRange[0] || product.price > +priceRange[1]) {
        return false;
      }
    } else if (product.price < +price) {
      return false;
    }
  }

  if (brand.length && !brand.includes(product.brandId)) {
    return false;
  }

  if (category.length && !category.includes(product.categoryId)) {
    return false;
  }

  if (rating && rating > 1 && Math.floor(product.rating) < rating) {
    return false;
  }

  return true;
};

const initialFilter = {
  search: '',
  price: null,
  category: [],
  brand: [],
  rating: null
};

export const state = () => ({
  products: null,
  categories: null,
  brands: null,
  view: 'grid',
  category: null,
  brand: null,
  search: '',
  filter: { ...initialFilter },
  pagination: {
    perPage: 9,
    curr: 1,
    total: 1
  }
});

export const getters = {
  getSearchResults: state => (searchPrase) => {
    if (searchPrase) {
      return state.products.filter(item =>
        item.title.toLowerCase().includes(searchPrase.toLowerCase())
      );
    }

    return state.products;
  },

  getFilteredProducts:
    (state) => {
      return state.products?.filter((product) => {
        return filterProducts(product, state.filter);
      });
    },

  getProducts (state) {
    let currProducts;

    const products = state.products.filter(product => filterProducts(product, state.filter));

    if (state.pagination.total > 1) {
      const start = state.pagination.perPage * (state.pagination.curr - 1);
      const end = state.pagination.perPage * state.pagination.curr;
      currProducts = products.slice(start, end);
    } else {
      currProducts = products;
    }

    return currProducts;
  }
};

export const mutations = {
  setProducts (state, payload) {
    state.products = payload;
  },

  setBrands (state, payload) {
    state.brands = payload;
  },

  setCategories (state, payload) {
    state.categories = payload;
  },

  setView (state, payload) {
    if (payload === 'list' || payload === 'grid') {
      state.view = payload;
    } else {
      state.view = 'grid';
    }
  },

  clearFilter (state) {
    state.filter = { ...initialFilter };
  },

  setFilterSearch (state, payload) {
    if (payload === '') {
      state.filter.search = payload;
    } else {
      state.filter = { ...initialFilter, search: payload };
    }
  },

  setFilterPrice (state, payload) {
    state.filter.price = payload;
  },

  setFilterRating (state, payload) {
    state.filter.rating = payload;
  },

  setFilterBrand (state, payload) {
    const isAdd = payload[0];
    const value = payload[1];

    if (isAdd) {
      state.filter.brand = [...state.filter.brand, value];
    } else {
      state.filter.brand = state.filter.brand.filter(item => item !== value);
    }
  },

  setFilterCategory (state, payload) {
    const isAdd = payload[0];
    const value = payload[1];

    if (isAdd) {
      state.filter.category = [...state.filter.category, value];
    } else {
      state.filter.category = state.filter.category.filter(item => item !== value);
    }
  },

  setPaginationTotal (state, payload) {
    state.pagination.total = payload;
  },

  setPaginationCurr (state, payload) {
    state.pagination.curr = +payload;
  }
};

export const actions = {};

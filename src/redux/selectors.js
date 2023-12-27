export const selectProducts = (state) => state.products.items;

export const selectOrders = (state) => state.orders.items;

export const selectLanguages = state => state.languages.language;

export const selectDirectoryPath = state => state.directoryPath.items;

export const selectCategories = state => state.categories.category;

export const selectSearchParams = state => state.searchParams.parameter;

export const selectFilteredProducts = state => state.filteredProducts.filteredProduct;

// export const selectOrdersAll = (state) => state.ordersAll.qualitity;

// export const selectIsLoading = (state) => state.adverts.isLoading;

// export const selectError = (state) => state.adverts.error;

// export const selectFeedbackForm = (state) => state.form;

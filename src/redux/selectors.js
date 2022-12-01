export const selectEmail = state => state.auth.user.email;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectFilterValue = state => state.filter.value;
// export const selectContacts = state =>
//   state.contacts.queries.getContacts(undefined);

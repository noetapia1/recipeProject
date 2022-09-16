// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey:'cda6e1c260664058adf2cae17bb3c715',
  recipeSearch:'https://api.spoonacular.com/recipes/complexSearch',
  recipeDetailSearch: (id:string) => `https://api.spoonacular.com/recipes/${id}/information`,
  randomRecipeSearch:'https://api.spoonacular.com/recipes/random',
  dbUrl:'https://recipedb-35df.restdb.io/rest/recipe',
  dbKey:'6323bfb90282ae17e4905d98'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

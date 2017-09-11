import { ShoppingListRecipeBookPage } from './app.po';

describe('shopping-list-recipe-book App', () => {
  let page: ShoppingListRecipeBookPage;

  beforeEach(() => {
    page = new ShoppingListRecipeBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

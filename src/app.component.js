/**
 * Main application controller, with header and footer
 */
export default {
  template: `
    <header>
      <h1>Address Book</h1>
    </header>
    <div ui-view>Content</div>
    <footer>
        Author: Mariusz Sielski
    </footer>
  `
};
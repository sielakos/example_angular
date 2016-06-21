/**
 * Main application controller, with header and footer
 */
export default {
  template: `
    <header>
    </header>
    <div class="app__content" ui-view>Content</div>
    <footer class="app__footer">
      Author: Mariusz Sielski
    </footer>
  `
};
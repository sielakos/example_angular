/**
 * Header component. Displays name of application and top navigation
 */
export default {
  template: `
    <div class="header">
      <h1 class="header__title">Address Book</h1>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__position">
            <a class="header__link" ui-sref="main.list({})">List</a>
          </li>
          <li class="header__position">
            <a class="header__link" href="#">Add new</a>
          </li>
        </ul>
      </nav>
    </div>
  `
};
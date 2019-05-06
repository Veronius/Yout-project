import './app-present.css';

export default class AppPresent {
  constructor(titles) {
    this.titles = titles;
  }
  render() {
    const content = document.createElement('ul');
    content.innerHTML = this.titles.map(title => `<li>${title}</li>`).join('');

    document.body.appendChild(content);
  }
}

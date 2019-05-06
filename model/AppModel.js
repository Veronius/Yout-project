export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  async getClip() {
    const { url } = this.state;

   // const responce = await fetch(url);
   // const data = await responce.json();

    fetch(url)
      .then(res => res.json())
      .then(res => console.log(res));
  }
}

export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractNames(data) {
    return data.items.map(clip => clip.snippet.title);
  }

  async getClip() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();
    //const log = console.log(data);

    return AppModel.extractNames(data);
  }
}

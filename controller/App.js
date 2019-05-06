import AppModel from '../model/AppModel';
// import AppPresent from '../present/AppPresent';

export default class App {
  constructor() {
    this.state = {
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5CetS3GQJHiicztQ9Ab5ImTf96J3PdzQ&type=video&part=snippet&maxResults=15&q=js',
    };
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await getClip();
    // const present = new AppPresent(data);
    // present.render();
  }

}

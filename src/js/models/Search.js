import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = "c95ec2732694b0f175af57e57b59ded9";
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      //console.log(this.results);
    } catch (error) {
      alert(error);
    }
  }
}

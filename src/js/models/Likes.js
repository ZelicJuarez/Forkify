export default class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, author, img) {
    const like = {
      id,
      title,
      author,
      img
    };
    this.likes.push(like);

    // Persist data in local storage
    this.persistData();

    return like;
  }

  deleteLike(id) {
    const index = this.likes.findIndex(el => el.id === id);
    this.likes.splice(index, 1);

    // Persist data in local storage
    this.persistData();
  }

  isLiked(id) {
    return this.likes.findIndex(el => el.id === id) !== -1;
  }

  getNumLikes() {
    return this.likes.length;
  }

  persistData() {
    localStorage.setItem("likes", JSON.stringify(this.likes)); // JSON.stringify to turn into a string
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem("likes")); // JSON.parse opposite to JSON.stringify

    //Restoring likes from the localStorage
    if (storage) this.likes = storage;
  }
}

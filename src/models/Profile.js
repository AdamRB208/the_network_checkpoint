
export class Profile {

  /**
  * @typedef ProfileData
  * @property {string} id
  * @property {string} email
  * @property {string} name
  * @property {string} picture
  * @property {string} bio
  * @property {string} coverImg
  * @property {boolean} graduated
  * @property {string} github
  * @property {string} linkedin
  * @property {string} class 
  * @param {ProfileData} data
  */

  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.class = data.class
    this.graduated = data.graduated
  }
}

// example 

// {
//   "_id": "67c78d1aa1fd2c655a4bfd68",
//   "subs": [
//     "auth0|67c78d19f494a90beccc689b"
//   ],
//   "email": "piratedave@land.ho",
//   "name": "piratedave",
//   "picture": "https://s.gravatar.com/avatar/2364b03f26c8adaaf17bc98f9f7e800f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpi.png",
//   "bio": "",
//   "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
//   "github": "",
//   "linkedin": "",
//   "resume": "",
//   "class": "",
//   "graduated": false,
//   "createdAt": "2025-03-04T23:32:59.146Z",
//   "updatedAt": "2025-03-04T23:32:59.146Z",
//   "__v": 0,
//   "id": "67c78d1aa1fd2c655a4bfd68"

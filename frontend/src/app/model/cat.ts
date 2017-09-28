/**
 * A Cat object retrieved from the servers
 *
 * @export
 * @class Cat
 */
export class Cat {

  /**
   * A unique identifier from the database
   *
   * @type {number}
   * @memberof Cat
   */
  public catId: number;
  /**
   * Title to display with the cat
   *
   * @type {string}
   * @memberof Cat
   */
  public title: string;
  /**
   * Current rating (in 0-4 stars in half-steps) for the cat.
   *
   * @type {number}
   * @memberof Cat
   */
  public communityRating: number;
  /**
   * If user is logged in and has rated this cat, this is that rating.
   *
   * @type {number}
   * @memberof Cat
   */
  public myRating: number;
  /**
   * The url to the image of the cat.
   *
   * @type {string}
   * @memberof Cat
   */
  public image: string;

  /**
   * Creates an instance of Cat.
   * @param {number} [catId=0] Defaults catId to zero
   * @param {string} [title]
   * @param {number} [commuityRating]
   * @param {number} [myRating]
   * @param {string} [image]
   * @memberof Cat
   */
  constructor(catId: number = 0, title?: string, commuityRating?: number, myRating?: number, image?: string) {
    this.catId = catId;
    this.title = title;
    this.communityRating = commuityRating;
    this.myRating = myRating;
    this.image = image;
  }
}

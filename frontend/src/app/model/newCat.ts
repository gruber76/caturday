/**
 * Essentially a DTO for uploading a new cat image to the database.
 *
 * @export
 * @class NewCat
 */
export class NewCat {
    /**
     * The title to show for the newly uploaded cat photo
     *
     * @type {string}
     * @memberof NewCat
     */
    public title: string;

    /**
     * A base64 encoded image uploaded and headed for the database.
     *
     * @type {string}
     * @memberof NewCat
     */
    public image: string;

    /**
     *  Constructor for a new NewCat.
     * @param {string} title
     * @param {string} image
     * @memberof NewCat
     */
    constructor(title: string, image: string) {
      this.title = title;
      this.image = image;
    }


  }

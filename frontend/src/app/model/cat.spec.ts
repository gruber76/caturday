import { Cat } from './cat';

describe('Cat', () => {
  var testObject = {
    catId: 5,
    title: 'stripey',
    communityRating: 3.5,
    myRating: 3,
    image: 'https://www.google.com/imaginary'
  };

  it('has title', () => {
    const cat = new Cat(testObject.catId, testObject.title);
    expect(cat.title).toBe(testObject.title);
  });

  it('has catId', () => {
    const cat = new Cat(testObject.catId);
    expect(cat.catId).toBe(testObject.catId);
  });

});

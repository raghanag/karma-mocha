import { Naga } from './naga';

describe("Naga", () => {

  it("should say 'Hello Naga'", () => {

      let naga = new Naga();

      expect(naga.sayNaga()).to.be("Hello Naga");
  });
});
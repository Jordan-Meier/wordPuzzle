describe('countBy1', function() {
  it("it will count to a given number by increments of 1", function() {
    expect(countBy1(10,1)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

});


describe('countBy4', function () {
  it("it will count to a given number by a given increment", function() {
    expect(countBy4(0,16,4)).to.eql([0, 4, 8, 12, 16]);
  });
  it("it will return false if values entered are not numbers", function () {
    expect(countBy4("word")).to.equal(false);
  });

});

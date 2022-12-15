function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(highlight) {
    return function(adj ="special") {
        return `You are ${highlight}${adj}${highlight}!`;

    }

}

/* it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
    let result = wrapAdjective('*')
    let emphatic = result("a hard worker")
    expect(emphatic).to.equal("You are *a hard worker*!")
  });

  it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
    let result = wrapAdjective("||")
    let emphatic = result("a dedicated programmer")
    expect(emphatic).to.equal("You are ||a dedicated programmer||!")
  }); */
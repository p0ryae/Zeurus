function Dissect(parameter) {
    let parseRE = null;
    let ruleSrc = [];
    let ruleMap = {};

    this.add = function (parameter) {
        for (let rule in parameter) {
            ruleSrc.push(parameter[rule].source);
            ruleMap[rule] = new RegExp('^(' + parameter[rule].source + ')$');
        }
        parseRE = new RegExp(ruleSrc.join('|'), 'g');
    };
    this.tokenize = function (input) {
        return input.match(parseRE);
    };
    this.identify = function (token) {
        for (let rule in ruleMap) {
            if (ruleMap[rule].test(token)) {
                return rule;
            }
        }
    };

    this.add(parameter);

    return this;
}

export {
    Dissect
}
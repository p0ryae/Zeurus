function textareaFormatter(textarea, dissect) {
    let parent = document.createElement("div");
    let output = document.createElement("pre");
    let label = document.createElement("label");
    output.setAttribute("id", "pre");
    parent.appendChild(output);
    parent.appendChild(label);
    textarea.parentNode.replaceChild(parent, textarea);
    label.appendChild(textarea);
    parent.className = 'format ' + textarea.className;
    textarea.className = '';
    textarea.spellcheck = false;
    textarea.wrap = "off";

    let colorize = function (input, output, dissect) {
        let oldInput = output.childNodes;
        let newInput = dissect.tokenize(input);
        let firstDiff, lastDiffNew, lastDiffOld;
        for (firstDiff = 0; firstDiff < newInput.length && firstDiff < oldInput.length; firstDiff++)
            if (newInput[firstDiff] !== oldInput[firstDiff].textContent) break;
        while (newInput.length < oldInput.length)
            output.removeChild(oldInput[firstDiff]);
        for (lastDiffNew = newInput.length - 1, lastDiffOld = oldInput.length - 1; firstDiff < lastDiffOld; lastDiffNew--, lastDiffOld--)
            if (newInput[lastDiffNew] !== oldInput[lastDiffOld].textContent) break;
        for (; firstDiff <= lastDiffOld; firstDiff++) {
            oldInput[firstDiff].className = dissect.identify(newInput[firstDiff]);
            oldInput[firstDiff].textContent = oldInput[firstDiff].innerText = newInput[firstDiff];
        }
        for (let insertionPt = oldInput[firstDiff] || null; firstDiff <= lastDiffNew; firstDiff++) {
            let span = document.createElement("span");
            span.className = dissect.identify(newInput[firstDiff]);
            span.textContent = span.innerText = newInput[firstDiff];
            output.insertBefore(span, insertionPt);
        }
    };

    this.input = textarea;
    this.output = output;
    this.update = function () {
        let input = textarea.value;
        if (input) {
            colorize(input, output, dissect);
            let lines = input.split('\n');
            let maxlen = 0;
            let curlen = 0;
            for (let i = 0; i < lines.length; i++) {
                let tabLength = 0, offset = -1;
                while ((offset = lines[i].indexOf('\t', offset + 1)) > -1) {
                    tabLength += 7 - (tabLength + offset) % 8;
                }
                curlen = lines[i].length + tabLength;
                maxlen = maxlen > curlen ? maxlen : curlen;
            }
            textarea.cols = maxlen + 1;
            textarea.rows = lines.length + 2;
        } else {
            output.innerHTML = '';
            textarea.cols = textarea.rows = 1;
        }
    };

    if (textarea.addEventListener) {
        textarea.addEventListener("input", this.update, false);
    } else {
        textarea.attachEvent("onpropertychange",
            function (e) {
                if (e.propertyName.toLowerCase() === 'value') {
                    this.update();
                }
            }
        );
    }
    this.update();

    return this;
}

export {
    textareaFormatter
}
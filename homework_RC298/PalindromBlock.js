var PalindromBlock = React.createClass({

    getInitialState: function() {
        return {
            selectCheckBox: false,
            filterText: null,
        };
    },

    
    arrayStateFunc: function() {
        var cloneArr = [];
        for (var i = 0; i < this.props.palindroms.length; i++) {
            cloneArr.push(this.props.palindroms[i]);
        }
        if (this.state.filterText != null && this.state.selectCheckBox) {
            var newArr = this.filterFunc(this.state.filterText, cloneArr);
            newArr = this.sortArray(newArr);
            return newArr;
        } else if (this.state.filterText != null) {
            return this.filterFunc(this.state.filterText);
        } else if (this.state.selectCheckBox) {
            return this.sortArray(cloneArr);
        }
        return this.props.palindroms;
    },

    sortArray: function(unsortedArr) {
        unsortedArr.sort(function(a, b) {
            var textA = a.text.toUpperCase();
            var textB = b.text.toUpperCase();
            if (textA < textB) {
                return -1;
            }
            if (textA > textB) {
                return 1;
            }
            return 0;
        })
        return unsortedArr;
    },

    filterFunc: function(textState) {
        var tempArr  = [];
        this.props.palindroms.forEach((element) => {
            for(var i = 0; i < element.text.length; i++) {
                for (var j = 0; j < textState.length; j++) {
                    if(element.text[i] == textState[j]) {
                        tempArr.push(element);
                        i = element.text.length;
                    }
                }
            }
        })
        return tempArr;
    },

    checkBoxSelected: function() {
        if (!this.state.selectCheckBox) {
            console.log("Checkbox is checked");
            this.setState({selectCheckBox: true});
        } else if (this.state.selectCheckBox){
            console.log("Checkbox is unchecked");
            this.setState({selectCheckBox: false});
        }
    },

    filterTextChanged: function(EO) {
        console.log("changed filter text - " + EO.target.value);
        this.setState({filterText: EO.target.value});
    },

    resetButtonPushed: function(pushed) {
            console.log("Reset button pushed");
            this.setState({selectCheckBox: false});
            this.setState({filterText: null});
    },
    
    render: function() {
        var newArr = this.arrayStateFunc();
        var textArr = [];
        newArr.forEach((element) => {
            var liElement = React.DOM.li({className: "list-group-item", key: element.code}, element.text);
            textArr.push(liElement)});

        return React.DOM.form({}, 
            React.DOM.div({className: "container px-lg-5"},
                React.DOM.div({className: "form-row"},
                    React.DOM.div({className: "col-md-6 mb-3"},
                        React.DOM.label({htmlFor: "textFilter"}, "Поиск совпадений"),
                        React.DOM.input({type: "text", defaultValue: "", className: "form-control", id: "textFilter", onChange: this.filterTextChanged})
                )),
                React.DOM.div({className: "form-group"},
                    React.DOM.div({className: "form-check"},
                        React.DOM.input({className: "form-check-input", type: "checkbox", value: "", id: "textSort", checked: this.state.selectCheckBox, onClick: this.checkBoxSelected}),
                        React.DOM.label({className: "form-check-label", htmlFor: "textSort"}, "Сортировка по алфавиту"),
                )),
                React.DOM.button({className: "btn btn-primary", type: "reset", onClick: this.resetButtonPushed}, "Сброс"),
                React.DOM.div({className: "row mt-3 ml-1"}, 
                    React.DOM.p({className: "h3"}, "Список Палиндромов"),
                ),
                React.DOM.div({className: "form-row mt-3"},
                    React.DOM.div({className: "card", width: "18rem"},
                    React.DOM.ul({className: "list-group list-group-flush"}, textArr),
                    ),
                ),      
            ),
        );
    }

});


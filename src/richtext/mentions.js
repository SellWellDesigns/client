var UserStore = require('_/stores/UserStore.jsx')

module.exports = {

    tagRegex: /(^|\W)(@|#)([A-Za-z0-9-_.]*)/ig,

    findMentions: function(str) {

        var match, mentions = {
            tags: [],
            users: [],
            links: []
        };

        while (match = this.tagRegex.exec(str)) {
            var name = match[3];

            switch (match[2]) {
                case "#":
                    if (mentions.tags.indexOf(name) < 0) {
                        mentions.tags.push(name);
                    }
                    break;
                case "@":
                    if (mentions.users.indexOf(name) < 0) {
                        mentions.users.push(name);
                    }
                    break;
                default:
            }
        }

        return mentions;
    },

    findPossibles: function(str) {
        // console.log(UserStore.getAll());
        return [];
    },

    wrapMentions: function(str, wrap) {
        var w = wrap || '$1<span>$2$3</span>';

        return str.replace(this.tagRegex, w);
    },

    getCaretPosition: function(ctrl) {
        var start, end;

        if (ctrl.setSelectionRange) {
            start = ctrl.selectionStart;
            end = ctrl.selectionEnd;
        } else if (document.selection && document.selection.createRange) {
            var range = document.selection.createRange();
            start = 0 - range.duplicate().moveStart('character', -100000);
            end = start + range.text.length;
        }
        return {
            start: start,
            end: end
        }
    }

};
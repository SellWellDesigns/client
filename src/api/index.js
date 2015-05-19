var $ = require('jquery'),
    $q = require('q')

var Api = function(config) {
    this.base_url = 'http://api.dev';
    this.token = null;
}

Api.prototype.setToken = function(token) {
    this.token = token;
}

Api.prototype.get = function(url) {
    var $d = $q.defer()

    $.get(this.base_url + url, {
        token: this.token
    }, function(data) {
        $d.resolve(data);
    });

    return $d.promise
};

Api.prototype.post = function(url, data) {
    var $d = $q.defer()

    data.token = this.token

    $.post(this.base_url + url, data, function(data) {
        $d.resolve(data);
    });

    return $d.promise
};

Api.prototype.put = function() {

};

Api.prototype.delete = function() {

};

module.exports = new Api;
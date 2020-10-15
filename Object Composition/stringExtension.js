(() => {
    String.prototype.ensureStart = function (str = '') {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str = '') {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.length == 0;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length < n) {
            return this.toString();
        }

        let foundSpace = this.lastIndexOf(' ');
        if (foundSpace != -1) {
            return this.str.substring(0, foundSpace) + '...';
        } else {
            return this.str.substring(0, n - 3) + '...';
        }
    }

    String.format = function (string, ...params) {
        params.forEach((key, index) => {
            string = string.replace(`{${index}}`, key);
        });
        return string;
    }

})()
module.exports = {
    generateRandomEmailAddress: function() {
        let emailAddress = Math.random().toString().replace('0.', '') + "@splinter.com";
        return emailAddress;
    },

    generateRandomString: function() {
        let randomString = Math.random().toString(36).substring(2, 15);
        return randomString;
    }
}
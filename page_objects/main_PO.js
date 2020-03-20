export default class Main_PO {
    open(path) {
        browser.setWindowSize(1200, 1000);
        browser.url(path);
    }

    waitUsingFixedTimeout(time) {
        console.log("Pausing for: " + time + " seconds.");
        browser.pause(time);
    }

    get signUpButton() {
        return $("a[href*='register']");
    }

    get userName() {
        return $("[placeholder='Username']");
    }

    get emailAddress() {
        return $("[placeholder='Email']");
    }

    get password() {
        return $("[placeholder='Password']");
    }

    get submitButton() {
        return $("[type='submit']");
    }

    get articlePreview() {
        return $(".article-preview");
    }

    submit() {
        return this.submitButton.click();
    }

    get errorMessage() {
        return $(".error-messages li:nth-of-type(1)");
    }
}
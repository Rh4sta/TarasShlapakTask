import Main_PO from "./main_PO.js";
var config = require('../config/main-config');
var dataGenerators = require('../utils/dataGenerators');

class NewUser_PO extends Main_PO {
    open() {
        super.open("https://redux.productionready.io");
    }

    signUp() {
        return this.signUpButton.click();
    }

    get profilePage() {
        return $(".profile-page");
    }

    successfulSignUp() {
        this.signUpButton.waitForDisplayed(5000);
        this.signUp();
        this.userName.waitForDisplayed(5000);
        this.userName.setValue(dataGenerators.generateRandomString());
        this.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
        this.password.setValue(config.password);
        this.submit();
        expect(this.profilePage).to.exist;
    }

    unsuccessfulSignUp() {
        this.signUpButton.waitForDisplayed(5000);
        this.signUp();
        this.userName.waitForDisplayed(5000);
        this.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
        this.password.setValue(config.password);
        this.submit();
        expect(this.errorMessage).to.exist;
    }

    tooLongUsername() {
        this.signUpButton.waitForDisplayed(5000);
        this.signUp();
        this.userName.waitForDisplayed(5000);
        this.userName.setValue(config.manyCharactersUsername);
        this.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
        this.password.setValue(config.password);
        this.submit();
        expect(this.errorMessage).to.exist;
    }

    allFieldsBlank() {
        this.signUpButton.waitForDisplayed(5000);
        this.signUp();
        this.submitButton.waitForDisplayed(3000);
        this.submit();
        expect(this.errorMessage).to.exist;
    }
}
export default new NewUser_PO();
import Main_PO from "./main_PO.js";
var config = require('../config/main-config');
var dataGenerators = require('../utils/dataGenerators');

class ExistingUser_PO extends Main_PO {
    open() {
        super.open("https://redux.productionready.io");
    }

    get signInButton() {
        return $("a[href*='login']");
    }

    signIn() {
        return this.signInButton.click();
    }

    get newArticleButton() {
        return $("a[href*='editor']");
    }

    newArticle() {
        return this.newArticleButton.click();
    }

    get articleTitle() {
        return $("[placeholder='Article Title']");
    }

    get articleDescription() {
        return $("[placeholder='What\\'s this article about?']");
    }

    get articleText() {
        return $("[placeholder='Write your article (in markdown)']");
    }

    get articleTags() {
        return $("[placeholder='Enter tags']");
    }

    get publishArticleButton() {
        return $("[type='button']");
    }

    publishArticle() {
        return this.publishArticleButton.click();
    }

    get articlePage() {
        return $(".article-page");
    }

    successfulSignIn() {
        this.signInButton.waitForDisplayed(5000);
        this.signIn();
        this.emailAddress.waitForDisplayed(5000);
        this.emailAddress.setValue(config.signInEmail);
        this.password.setValue(config.password);
        this.submit();
        this.articlePreview.waitForDisplayed(5000);
        expect(this.articlePreview).to.exist;
    }

    emailDoesNotExist() {
        this.signIn();
        this.emailAddress.waitForDisplayed(5000);
        this.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
        this.password.setValue(config.password);
        this.submit();
        expect(this.errorMessage).to.exist;
    }

    incorrectPassword() {
        this.signIn();
        this.emailAddress.waitForDisplayed(5000);
        this.emailAddress.setValue(config.signInEmail);
        this.password.setValue(dataGenerators.generateRandomString());
        this.submit();
        expect(this.errorMessage).to.exist;
    }

    successfulArticlePublish() {
        this.signIn();
        this.emailAddress.waitForDisplayed(5000);
        this.emailAddress.setValue(config.signInEmail);
        this.password.setValue(config.password);
        this.submit();
        this.articlePreview.waitForDisplayed(5000);
        this.newArticle();
        this.articleTitle.waitForDisplayed(5000);
        this.articleTitle.setValue(dataGenerators.generateRandomString());
        this.articleDescription.setValue(dataGenerators.generateRandomString());
        this.articleText.setValue(dataGenerators.generateRandomString());
        this.articleTags.setValue(config.tag);
        this.publishArticle();
        browser.pause(3000);
        expect(this.articlePage).to.exist;
    }

    unsuccessfulArticlePublish() {
        this.signIn();
        this.emailAddress.waitForDisplayed(5000);
        this.emailAddress.setValue(config.signInEmail);
        this.password.setValue(config.password);
        this.submit();
        this.articlePreview.waitForDisplayed(5000);
        this.newArticle();
        this.articleTitle.waitForDisplayed(5000);
        this.articleTags.setValue(config.tag);
        this.publishArticle();
    expect(this.errorMessage).to.exist;
    }
}
export default new ExistingUser_PO();
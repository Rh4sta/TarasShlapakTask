import ExistingUser_PO from '../page_objects/existingUser_PO';

describe("Article publish test cases", () => {
    beforeEach(function() {
        ExistingUser_PO.open();
    })

    it("The user successfully publishes an article", () => {
        ExistingUser_PO.successfulArticlePublish();
    })

    it("The user does not fill all required article fields and catches an error", () => {
        ExistingUser_PO.unsuccessfulArticlePublish();
    })
})
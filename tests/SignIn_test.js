import ExistingUser_PO from '../page_objects/existingUser_PO';

describe("Sign in test cases", () => {
    beforeEach(function() {
        ExistingUser_PO.open();
    })

    it("The user should sign in successfully", () => {
        ExistingUser_PO.successfulSignIn();
    })

    it("The user does not fill existing email", () => {
        ExistingUser_PO.emailDoesNotExist();
    })

    it("The user fills incorrect password", () => {
        ExistingUser_PO.incorrectPassword();
    })
})
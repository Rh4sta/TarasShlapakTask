import NewUser_PO from '../page_objects/newUser_PO';

describe("Sign up test cases", () => {
    beforeEach(function() {
        NewUser_PO.open();
    })

    it("The user should sign up successfully", () => {
        NewUser_PO.successfulSignUp();
    })

    it("The user does not fill all required fields and catches an error", () => {
        NewUser_PO.unsuccessfulSignUp();
    })

    it("The user creates username with more than 20 symbols", () => {
        NewUser_PO.tooLongUsername();
    })

    it("The user does not fill anything and cathes an error", () => {
        NewUser_PO.allFieldsBlank();
    })
})
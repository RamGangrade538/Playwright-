class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = this.page.getByPlaceholder('Username');
        this.passwordField = this.page.getByPlaceholder('Password'); 
        this.loginButton = this.page.locator("[type='submit']");  
        this.profileclick = this.page.locator("//*[@class='oxd-userdropdown-name']")
        this.logoutbutton = this.page.getByText("Logout")
    }

    async navigateToLogin() {
        
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async logout(){
        await this.profileclick.click()
        await this.logoutbutton.click()

    }

    async login(username, password) {
        await this.usernameField.type(username);                     
        await this.passwordField.type(password);
        await this.loginButton.click();   
    }
}

module.exports = LoginPage;
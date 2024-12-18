class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = this.page.getByPlaceholder('Username');
        this.passwordField = this.page.getByPlaceholder('Password'); 
        this.loginButton = this.page.locator("[type='submit']");  
    }

    async navigateToLogin() {
        
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async login(username, password) {
        await this.usernameField.type("Admin");                     
        await this.passwordField.type("admin123");
        await this.loginButton.click();   
    }
}

module.exports = LoginPage;
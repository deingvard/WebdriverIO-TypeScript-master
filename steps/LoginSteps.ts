import { LoginPage } from '../pageobjects/LoginPage';

export class LoginSteps {
	public loginPage: LoginPage;

	/**
	 * Initialize Login Page
	 */
	public init() {
		this.navigateToHerokuappDirect();
		this.loginPage = new LoginPage();
	}

	/**
	 * Enter data on the Herokuapp page
	 */
	public enterLoginForm(login, password) {
		this.loginPage.enterUserName(login);
		this.loginPage.enterPassword(password);
	}

	/**
	 * Navigate to Herokuapp direct site
	 */
	public navigateToHerokuappDirect() {
		browser.maximizeWindow();
		browser.url('/login');
	}
}

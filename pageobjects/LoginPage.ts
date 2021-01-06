import { Page } from './Page';

export class LoginPage extends Page {
	/**
	 * define elements
	 */
	get userNameInput() {
		return $('#username');
	}
	get passwordInput() {
		return $('#password');
	}

	public enterUserName(username: string) {
		this.userNameInput.setValue(username);
	}

	public enterPassword(password: string) {
		this.passwordInput.setValue(password);
	}

	constructor() {
		super();
	}

	public static instance() {
		let page = new LoginPage();
		page.verifyIamOnPage();
		return page;
	}
}

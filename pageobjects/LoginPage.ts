import { Page } from './Page';
import logger from '@wdio/logger';
const log = logger('test-basic');

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

	/**
	 * Enter data on the Login form
	 * @param username
	 */
	public enterUserName(username: string) {
		log.info('Enter username');
		this.userNameInput.setValue(username);
	}

	/**
	 * Enter data on the Login form
	 * @param password
	 */
	public enterPassword(password: string) {
		log.info('Enter password');
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

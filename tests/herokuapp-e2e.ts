import { expect } from 'chai';
import { LoginSteps } from '../steps/LoginSteps';
let testData = require('../test-data/herokuapp-data');

describe('E2E Tests', () => {
	let loginSteps = new LoginSteps();

	beforeEach(() => {
		loginSteps.init();
	});
	afterEach(() => {
		browser.execute('window.sessionStorage.clear();');
		browser.execute('window.localStorage.clear();');
	});

	it('Check right title', () => {
		loginSteps.enterLoginForm(testData.userName, testData.password);
		browser.pause(100);
	});
});

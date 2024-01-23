import { qase } from 'playwright-qase-reporter/dist/playwright';
import { test } from 'playwright/test'

test.describe('Test suite', () => {
    test(qase([540,541], 'Several ids'), () => {
        expect(true).toBe(true);
    })

    test(qase(542, 'Correct test'), () => {
        expect(true).toBe(true);
    })

    test.skip(qase("543", 'Skipped test'), () => {
        expect(true).toBe(true);
    })

    test(qase(["544", "545"], 'Failed test'), () => {
        expect(true).toBe(false);
    })
});
import { URLs } from "../enums/URLs";
import { test, expect } from "../fixtures/mainMenu";
import { menuAction } from "../support/dropdownList";

test.describe('Main menu',async () => {

    test('The "Home" link',async ({mainMenu}) => {
        
        await menuAction(await mainMenu.getPage(), 'Home', URLs.HOME_PAGE, async () => {
            await mainMenu.clickHomeLink();
        })
    })

    test('The "Products" link',async ({mainMenu}) => {
        
        await menuAction(await mainMenu.getPage(), 'Products', URLs.PRODUCTS_PAGE, async () => {
            await mainMenu.clickProductsLink();
        })
    })

    test('The "Cart" link',async ({mainMenu}) => {
        
        await menuAction(await mainMenu.getPage(), 'Cart', URLs.SHOPPING_CART_PAGE, async () => {
            await mainMenu.clickCartLink();
        })
    })

    test('The "Signup / Login" link',async ({mainMenu}) => {
        
        await menuAction(await mainMenu.getPage(), 'Signup / Login', URLs.LOGIN_PAGE, async () => {
            await mainMenu.clickSignupLink();
        })
    })

    test('The "Test Cases" link',async ({mainMenu}) => {
        
        await menuAction(await mainMenu.getPage(), 'Test Cases', URLs.TEST_CASES_PAGE, async () => {
            await mainMenu.clickTestCasesLink();
        })
    })

    test('The "API Testing" link',async ({mainMenu}) => {
        
        await menuAction(await mainMenu.getPage(), 'API Testing', URLs.API_TESTING_PAGE, async () => {
            await mainMenu.clickAPITestingLink();
        })
    })

    test('The "Video Tutorials" link',async ({mainMenu}) => {
    
        await test.step('Click the "Video Tutorials" link',async () => {
            await mainMenu.clickVideoTutorialsLink();
        })

        expect((await mainMenu.getPage()).url()).toContain(URLs.VIDEO_TUTORIALS_PAGE);
    })

    test('The "Contact us" link',async ({mainMenu}) => {
    
        await menuAction(await mainMenu.getPage(), 'Contact us', URLs.CONTACT_US_PAGE, async () => {
            await mainMenu.clickContactUsLink();
        })
    })
})
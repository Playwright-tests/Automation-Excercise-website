import { URLs } from "../enums/URLs";
import { test } from "../fixtures/sideMenu";
import { menuAction } from "../support/dropdownList";

test.describe('The "Brands" menu links',async () => {
    
    test('The "POLO" link',async ({brandsMenu}) => {
        
        await menuAction(await brandsMenu.getPage(), 'POLO', URLs.POLO_PAGE, async () => {
            await brandsMenu.clickPoloLink();
        })
    })

    test('The "H&M" link',async ({brandsMenu}) => {
        
        await menuAction(await brandsMenu.getPage(), 'H&M', URLs.H_And_M_PAGE, async () => {
            await brandsMenu.clickHAndMLink();
        })
    })

    test('The "MADAME" link',async ({brandsMenu}) => {
        
        await menuAction(await brandsMenu.getPage(), 'MADAME', URLs.MADAME_PAGE, async () => {
            await brandsMenu.clickMadameLink();
        })
    })

    test('The "MAST & HARBOUR" link',async ({brandsMenu}) => {
        
        await menuAction(await brandsMenu.getPage(), 'MAST & HARBOUR', URLs.MAST_AND_HARBOUR_PAGE, async () => {
            await brandsMenu.clickMastAndHarbourLink();
        })
    })

    test('The "BABYHUG" link',async ({brandsMenu}) => {
        
        await menuAction(await brandsMenu.getPage(), 'BABYHUG', URLs.BABYHUG_PAGE, async () => {
            await brandsMenu.clickBabyhugLink();
        })
    })

    test('The "ALLEN SOLLY JUNIOR" link',async ({brandsMenu}) => {
        
        await menuAction(await brandsMenu.getPage(), 'ALLEN SOLLY JUNIOR', URLs.ALLEN_SOLLY_JUNIOR_PAGE, async () => {
            await brandsMenu.clickAllySollenJuniorLink();
        })
    })

    test('The "KOOKIE KIDS" link',async ({brandsMenu}) => {
        
        await menuAction(await brandsMenu.getPage(), 'KOOKIE KIDS', URLs.KOOKIE_KIDS_PAGE, async () => {
            await brandsMenu.clickKookieKidsLink();
        })
    })

    test('The "BIBA" link',async ({brandsMenu}) => {
        
        await menuAction(await brandsMenu.getPage(), 'BIBA', URLs.BIBA_PAGE, async () => {
            await brandsMenu.clickBibaLink();
        })
    })
})
Feature('Homepage');

Scenario('can be seen', (I) => {
  I.amOnPage('/');
  I.see('Car Hire – Search, Compare & Save');
});

Scenario('can search for pick-up locations', (I) => {
  I.amOnPage('/');
  I.fillField('search', 'Manchester');
  I.see('Manchester Airport');
  I.see('Greater Manchester');
  I.see('United Kingdom');
});

Scenario('can show no results found for location lookup', (I) => {
  I.amOnPage('/');
  I.fillField('search', '3dsad1232dsad31321dasd312');
  I.see('No results found');
});

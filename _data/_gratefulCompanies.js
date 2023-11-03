// ----------------------------------------------------------------------

function removeSpacesAndQuotesFn(companyName) {
  return companyName.replace(/[\s"«»]/g, '');
}

const COMPANIES_NAME = [
  'ООО "Рога и копыта"',
  'ООО "Благодарная компания"',
  'ООО "Тесла Моторс Рус"',
  'ПАО «ПИК-специализированный застройщик»'
];

const _gratefulCompanies = COMPANIES_NAME.map((company, index) => {
  const companyNameForFileName = removeSpacesAndQuotesFn(company);
  return {
    id: index,
    companyName: company,
    thankYouPhoto: `images/gratefullImg/${companyNameForFileName}.jpeg`,
    altTag: `Благодарность от компании ${company}`
  };
});

export default _gratefulCompanies
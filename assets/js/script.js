const txt = `"1","Ogrodzieniec","Zamek Ogrodzieniec – ruiny zamku leżącego na Jurze Krakowsko-Częstochowskiej, wybudowanego w systemie tzw. Orlich Gniazd, we wsi Podzamcze w województwie śląskim, w powiecie zawierciańskim, około 2 km na wschód od Ogrodzieńca. Zamek został wybudowany w XIV – XV w. przez ród Włodków Sulimczyków.","99PLN","50PLN"
"2","Ojców","wieś w województwie małopolskim, w powiecie krakowskim, w gminie Skała, na terenie Wyżyny Krakowsko-Częstochowskiej, w Dolinie Prądnika, na Szlaku Orlich Gniazd. W Królestwie Polskim istniała gmina Ojców. W latach 1975–1998 miejscowość położona była w województwie krakowskim. W latach 1928–1966 Ojców miał status uzdrowiska posiadającego charakter użyteczności publicznej.","40PLN","15PLN`;

console.log(txt.split(/[\r\n]+/gm));

const fileSelector = document.querySelector('.uploader__input');
const result = document.querySelector('.result')
const form = document.querySelector('.order');
const excursions = document.querySelectorAll('.excursions');
const username = form.querySelector('[name="name"]')
const email = form.querySelector('[name = "email"]')
const panelOgrodzieniec = document.querySelector('.summary__item--prototype')

const summary = document.querySelector('.summary');

form.addEventListener('submit', e => {
  e.preventDefault(e)
  validateInputs(e)
})

const validateInputs = () => {

  const userNameValue = username.value.trim()
  const emailValue = email.value.trim()

  if (userNameValue === '') {
    setError(username, 'Wypełnij powyższe pole')

  } else if (emailValue === '') {

    setError(email, 'Wypełnij powyższe pole')
  } else if ((!emailValue.includes('@'))) {
    setError(email, 'Adres email musi zawierać @')

  } else {
    setSuccess(username)
    setSuccess(email)
    alert('Formularz został wysłany')
  }

}


const setSuccess = element => {

  const inputControl = element.parentElement.parentElement
  const errorDisplay = inputControl.nextElementSibling
  errorDisplay.innerText = ''
  inputControl.classList.add('success')
  inputControl.classList.remove('error')
}

const setError = (element, message) => {

  const inputControl = element.parentElement.parentElement
  const errorDisplay = inputControl.nextElementSibling
  errorDisplay.innerText = message
  inputControl.classList.add('error')
  inputControl.classList.remove('success')

}


function addOrderOgrodzieniec(event) {

  event.preventDefault();
  const excursion = event.target.parentElement;
  const inputAdult = event.target.adults;
  const inputChild = event.target.children;
  const adultNumber = Number(inputAdult.value);
  const childNumber = Number(inputChild.value);

  if (adultNumber > 0 || childNumber > 0) {
    const price = excursion.querySelectorAll('.excursions__price');
    const summaryPrices = document.querySelector('.summary__prices');
    const summaryTotalPrice = document.querySelector('.summary__total-price');
    const adultPrice = Number(price[0].innerText)
    const childPrice = Number(price[1].innerText)
    summaryPrices.innerText = `dorośli: ${adultNumber} x ${adultPrice}PLN, dzieci: ${childNumber} x ${childPrice}PLN`;
    summaryTotalPrice.innerText = adultPrice * adultNumber + childPrice * childNumber;

  }

}

function addOrderOjców(event) {

  event.preventDefault();
  const panelOjcow = document.querySelector('.ojcow')
  const excursion2 = event.target.parentElement;
  const inputAdult2 = event.target.adults;
  const inputChild2 = event.target.children;
  const adultNumber2 = Number(inputAdult2.value);
  const childNumber2 = Number(inputChild2.value);

  if (adultNumber2 > 0 || childNumber2 > 0) {

    const price = excursion2.querySelectorAll('.excursions__price');
    const summary = document.querySelector('.summary');
    const summaryItems = document.querySelectorAll('.summary__item');


    for (let item of summaryItems) {
      if (!item.classList.contains('summary__item--prototype')) {
        summary.removeChild(item);
      }
    }

    const summaryPrices = panelOjcow.querySelector('.summary__prices');
    const summaryTotalPrice = panelOjcow.querySelector('.summary__total-price');
    const adultPrice2 = Number(price[0].innerText)
    const childPrice2 = Number(price[1].innerText)
    summaryPrices.innerText = `dorośli: ${adultNumber2} x ${adultPrice2}PLN, dzieci: ${childNumber2} x ${childPrice2}PLN`;
    summaryTotalPrice.innerText = adultPrice2 * adultNumber2 + childPrice2 * childNumber2;

  }

}


fileSelector.addEventListener('change', readFile);

function readFile(event) {

  let selected = fileSelector.files[0]
  let reader = new FileReader();
  reader.addEventListener("loadend", () => {
    const ul = document.querySelector('.excursions');
    const li = document.querySelector('.excursions__item--prototype');
    li.classList.remove('excursions__item--prototype')

    const lines = reader.result.split(/[\r\n]+/gm);

    const line1 = lines[0].split('",')
    const line2 = lines[1].split('",')
   

    const id = function (line) {
      return line[0].substring(
        line[0].indexOf("") + 1,
        line[0].lastIndexOf("")
      )
    }

    const id1 = id(line1)
    const id2 = id(line2)
    li.setAttribute('data-id', id1)

    const title = function (line) {
      return line[1].substring(
        line[1].indexOf("") + 1,
        line[1].lastIndexOf("")
      )
    }

    const title1 = title(line1)
    const title2 = title(line2)
    
    const description = function (line) {
      return line[2].substring(
        line[2].indexOf("") + 1,
        line[2].lastIndexOf("")
      )
    }

    const description1 = description(line1)
    const description2 = description(line2)

    const adultNumber = function (line) {
      return line[3].substring(
        line[3].indexOf("") + 1,
        line[3].lastIndexOf("") - 1
      )
    }

    const adultNumber1 = adultNumber(line1)
    const adultNumber2 = adultNumber(line2)

    const childNumber = function (line) {
      return line[4].substring(
        line[4].indexOf("") + 1,
        line[4].lastIndexOf("") - 1
      )
    }

    const childNumber1 = childNumber(line1)
    const childNumber2 = childNumber(line2)

    console.log(id2, title2, description2, adultNumber2, childNumber2)

    let clone = li.cloneNode(true)
    clone.setAttribute('data-id', id2)

    const cloneTitle = clone.querySelector('.excursions__title')
    const cloneDescription = clone.querySelector('.excursions__description');
    const clonePrices = clone.querySelectorAll('.excursions__price');

    const rawDescription = document.querySelector('.excursions__description')
    rawDescription.innerText = description1


    cloneTitle.innerText = title2;
    cloneDescription.innerText = description2;
    clonePrices[0].innerText = adultNumber2;
    clonePrices[1].innerText = childNumber2;

    ul.appendChild(clone)

    const order = document.querySelector('.order')
    order.addEventListener('submit', function (e) {
      e.preventDefault()
    })

   
    const excursion = document.querySelectorAll('.excursions__item')
    excursion[0].addEventListener('submit', addOrderOgrodzieniec)
    excursion[1].addEventListener('submit', addOrderOjców)

  });

  reader.readAsText(selected);

  showOgrodzieniec()
  showOjców()

};


function showOgrodzieniec() {

  const summary = document.querySelector('.summary')
  const panelOgrodzieniec = document.querySelector('.summary__item--prototype')
  panelOgrodzieniec.style.display = 'block'

}

function showOjców() {

  const panelOgrodzieniecClone = panelOgrodzieniec.cloneNode(true);
  const panelOjcow = panelOgrodzieniecClone
  panelOjcow.classList.add('ojcow')
  const panelOjcowTitle = panelOjcow.querySelector('.ojcow h3 .summary__name')
  panelOjcowTitle.innerText = 'Ojców'
  const panelOjcowTotalPrice = panelOjcow.querySelector('.ojcow h3 .summary__total-price')
  panelOjcowTotalPrice.innerText = 0 + 'PLN'
  const panelOjcowAdultPrice = panelOjcow.querySelector('.ojcow .summary__prices .adultPrice')
  panelOjcowAdultPrice.innerText = '4'
  const panelOjcowChildPrice = panelOjcow.querySelector('.ojcow  .summary__prices .childPrice')
  panelOjcowChildPrice.innerText = '15'

  summary.appendChild(panelOgrodzieniecClone)

}









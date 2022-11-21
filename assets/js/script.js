const txt = `"1","Ogrodzieniec","Zamek Ogrodzieniec – ruiny zamku leżącego na Jurze Krakowsko-Częstochowskiej, wybudowanego w systemie tzw. Orlich Gniazd, we wsi Podzamcze w województwie śląskim, w powiecie zawierciańskim, około 2 km na wschód od Ogrodzieńca. Zamek został wybudowany w XIV – XV w. przez ród Włodków Sulimczyków.","99PLN","50PLN"
"2","Ojców","wieś w województwie małopolskim, w powiecie krakowskim, w gminie Skała, na terenie Wyżyny Krakowsko-Częstochowskiej, w Dolinie Prądnika, na Szlaku Orlich Gniazd. W Królestwie Polskim istniała gmina Ojców. W latach 1975–1998 miejscowość położona była w województwie krakowskim. W latach 1928–1966 Ojców miał status uzdrowiska posiadającego charakter użyteczności publicznej.","40PLN","15PLN`;

console.log(txt.split(/[\r\n]+/gm));

const fileSelector = document.querySelector('.uploader__input');
const result = document.querySelector('.result')
const form = document.querySelector('.order');
const excursions = document.querySelectorAll('.excursions');
const username = form.querySelector('[name="name"]')
const rootUserName = username.parentElement.parentElement
const email = form.querySelector('[name = "email"]')
const rootEmail = username.parentElement.parentElement



const formSubmitElements = [
  {
    name: 'name',
    label: 'Imie i nazwisko',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    required: true
  },

]

form.addEventListener('submit', e => {
  e.preventDefault(e)
  validateInputs(e)
})

const validateInputs = (e) => {

  const userNameValue = username.value.trim()
  const emailValue = email.value.trim()
 
  
  function checkData(e) {
      if (!(userNameValue === '') && !(emailValue === "")) {
       
          setSuccess(username)
          setSuccess(email)
      } 

      if (userNameValue === '') {
          setError(username,'Wypełnij powyższe pole')
         
      } 

      if (emailValue === '') {
          setError(email,'Wypelnij powyższe pole')
         
      }

      if ((!emailValue.includes('@'))){
          setError(email, 'Adres email musi zawierać @')
         
      }

  }

  checkData()

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
  console.log(inputControl)
  const errorDisplay = inputControl.nextElementSibling
  errorDisplay.innerText = message
  inputControl.classList.add('error')
  inputControl.classList.remove('success')

}

const showInputValue = function (el, rootContainer ) {

  el.addEventListener('keyup', function (event) {
      if (event.key === "Enter") {
          rootContainer.innerText = ''
          validateInputs()
      }
  })
}


const render = function() {

  const usernameElement = showInputValue(username, rootUserName)
  const emailElement = showInputValue(email, rootEmail )

  
}

render()

function addOrderOgrodzieniec(event){
  event.preventDefault();
  console.log(event.target)
  const excursion = event.target.parentElement;
  console.log(excursion)
  const inputAdult = event.target.adults;
  console.log(inputAdult)
  const inputChild = event.target.children;
  console.log(inputChild)
  
  const adultNumber = Number(inputAdult.value);
  console.log(adultNumber)
  const childNumber = Number(inputChild.value);

  if(adultNumber > 0 || childNumber > 0){
     
      const excursionTitle = excursion.querySelector('.excursions__title').innerText;
      const price = excursion.querySelectorAll('.excursions__price');
      const summaryPrices = document.querySelector('.summary__prices');
      const summaryTotalPrice = document.querySelector('.summary__total-price');
      const adultPrice = Number(price[0].innerText)
      const childPrice = Number(price[1].innerText)
      summaryPrices.innerText = `dorośli: ${adultNumber} x ${adultPrice}PLN, dzieci: ${childNumber} x ${childPrice}PLN`;
      summaryTotalPrice.innerText = adultPrice * adultNumber + childPrice * childNumber;
      
}
 
}

function addOrderOjców(event){
alert('ojców')
  event.preventDefault();
  const summary = document.querySelector('.summary')
console.log(summary)
    const div = document.createElement('div')
summary.appendChild(div)
  const excursion = event.target.parentElement;
  const inputAdult = event.target.adults;
  const inputChild = event.target.children;
  const adultNumber = Number(inputAdult.value);
  const childNumber = Number(inputChild.value);

  if(adultNumber > 0 || childNumber > 0){
     

      const excursionTitle = excursion.querySelector('.excursions__title');
      
      const price = excursion.querySelectorAll('.excursions__price');
      const summaryPrices = document.querySelector('.summary__prices');
      const summaryTotalPrice = document.querySelector('.summary__total-price');
      const adultPrice = Number(price[0].innerText)
      const childPrice = Number(price[1].innerText)
      summaryPrices.innerText = `dorośli: ${adultNumber} x ${adultPrice}PLN, dzieci: ${childNumber} x ${childPrice}PLN`;
      summaryTotalPrice.innerText = adultPrice * adultNumber + childPrice * childNumber;
      
}
 
}








// form.addEventListener('submit', validateForm)

// function validateForm(event) {
//   event.preventDefault();
//   const errors = [];
//   const nameElements = form.querySelectorAll('[name]')
//   const emailElement = form.querySelector('[name = "email"]')
//  const emailElementValue = emailElement.value
// //  if(emailElementValue.includes('@')){
      
// //     } else {
// //       const errorPlace = document.createElement('div')
// //       errorPlace.classList.add('error')
// //       errorPlace.innerText = 'Adres email musi zawierać @'
// //       emailElement.parentElement.parentElement.appendChild(errorPlace)
// //       //errors.push('error')
// //     }
 
//   nameElements.forEach(function (nameElement, form) {

//     const value = nameElement.value;

//     form.addEventListener('keyup', function(event){
//       if(event.key === 'Enter'){
//         alert('wyczyść')
//       }
//     })

//     if (value.length === 0) {

//       const errorPlace = document.createElement('div')
//       errorPlace.classList.add('error')
//       errorPlace.innerText = 'wypełnij '
//       nameElement.parentElement.parentElement.appendChild(errorPlace)

//     } else if(emailElementValue.includes('@')){
      
//     } else if(!emailElementValue.includes('@')){
//       const errorPlace = document.createElement('div')
//       errorPlace.classList.add('error')
//       errorPlace.innerText = 'adres email'
//       nameElement.parentElement.parentElement.appendChild(errorPlace)
      

//       errorPlace.classList.add('em')
//       const em = document.querySelector('.em')
//       //const errorPlace = document.createElement('div')
//       //errorPlace.classList.add('error')
//       em.innerText = 'Adres email musi zawierać @'
//       //emailElement.parentElement.parentElement.appendChild(errorPlace)
//       //errors.push('error')
//     }

  
//   })
//   // if (errors.length === 0) {
//   //   alert(`Formularz został wypełniony poprawnie`)
//   //   errorPlace.innerText = ''
//   // }

// }
fileSelector.addEventListener('change', readFile);
excursions[0].addEventListener('submit', addOrderOgrodzieniec);
excursions[1].addEventListener('submit', addOrderOjców)



function readFile(event) {
  


  const fileList = event.target.files;
  console.log(fileList);

  let selected = fileSelector.files[0]
  console.log(selected)


  let reader = new FileReader();
  reader.addEventListener("loadend", () => {


    const ul = document.querySelector('.excursions');
    const li = document.querySelector('.excursions__item--prototype');
   
    li.classList.remove('excursions__item--prototype')
    
   
    const lines = reader.result.split(/[\r\n]+/gm);

    const line1 = lines[0].split('",')
    const line2 = lines[1].split('",')
    console.log(line1)

    const id = function (line) {
      return line[0].substring(
        line[0].indexOf("") + 1,
        line[0].lastIndexOf("")
        
      )
    }

    const id1 = id(line1)
    const id2 = id(line2)
    li.setAttribute('data-id', id1)

    console.log(id1, id2)

    const title = function (line) {
      return line[1].substring(
        line[1].indexOf("") + 1,
        line[1].lastIndexOf("")
      )
    }

    const title1 = title(line1)
    const title2 = title(line2)
    console.log(title1, title2)

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
    console.log(cloneTitle)
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
    order.addEventListener('submit', function(e){
      e.preventDefault()
    })

  });

  reader.readAsText(selected);

};



const txt = `"1","Ogrodzieniec","Zamek Ogrodzieniec – ruiny zamku leżącego na Jurze Krakowsko-Częstochowskiej, wybudowanego w systemie tzw. Orlich Gniazd, we wsi Podzamcze w województwie śląskim, w powiecie zawierciańskim, około 2 km na wschód od Ogrodzieńca. Zamek został wybudowany w XIV – XV w. przez ród Włodków Sulimczyków.","99PLN","50PLN"
"2","Ojców","wieś w województwie małopolskim, w powiecie krakowskim, w gminie Skała, na terenie Wyżyny Krakowsko-Częstochowskiej, w Dolinie Prądnika, na Szlaku Orlich Gniazd. W Królestwie Polskim istniała gmina Ojców. W latach 1975–1998 miejscowość położona była w województwie krakowskim. W latach 1928–1966 Ojców miał status uzdrowiska posiadającego charakter użyteczności publicznej.","40PLN","15PLN`;

console.log(txt.split(/[\r\n]+/gm));

const fileSelector = document.querySelector('.uploader__input');
const result = document.querySelector('.result')
const form = document.querySelector('.order');
const username = form.querySelector('[name="name"]')
const email = form.querySelector('[name = "email"]')
console.log(username, email)

const formNameSubmitElement = {
  name: 'name',
  label: 'Imie i nazwisko',
  required: true
}

const formEmailSubmitElement =
{
  name: 'email',
  label: 'Email',
  required: true
}


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
  e.preventDefault()
  validateInputs()
})

const validateInputs = () => {

  const userNameValue = username.value.trim()
  const emailValue = email.value.trim()
  
  function checkData() {
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


fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;
  console.log(fileList);

  let selected = fileSelector.files[0]
  console.log(selected)


  let reader = new FileReader();
  reader.addEventListener("loadend", () => {


    const ul = document.querySelector('.excursions');
    const li = document.querySelector('.excursions__item--prototype');

    result.innerText = reader.result;
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

  });

  reader.readAsText(selected);

});



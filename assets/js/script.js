const txt = `"1","Ogrodzieniec","Zamek Ogrodzieniec – ruiny zamku leżącego na Jurze Krakowsko-Częstochowskiej, wybudowanego w systemie tzw. Orlich Gniazd, we wsi Podzamcze w województwie śląskim, w powiecie zawierciańskim, około 2 km na wschód od Ogrodzieńca. Zamek został wybudowany w XIV – XV w. przez ród Włodków Sulimczyków.","99PLN","50PLN"
"2","Ojców","wieś w województwie małopolskim, w powiecie krakowskim, w gminie Skała, na terenie Wyżyny Krakowsko-Częstochowskiej, w Dolinie Prądnika, na Szlaku Orlich Gniazd. W Królestwie Polskim istniała gmina Ojców. W latach 1975–1998 miejscowość położona była w województwie krakowskim. W latach 1928–1966 Ojców miał status uzdrowiska posiadającego charakter użyteczności publicznej.","40PLN","15PLN`;

console.log(txt.split(/[\r\n]+/gm));

const fileSelector = document.querySelector('.uploader__input');
const result = document.querySelector('.result')

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

    const line2 = lines[1].split('",')
    console.log(line2)
   
    const id2 = line2[0].substring(
      line2[0].indexOf("") + 1,
      line2[0].lastIndexOf("") - 1
    )

    const title2 = line2[1].substring(
      line2[1].indexOf("") + 1,
      line2[1].lastIndexOf("") 
    )
    console.log(title2)

    const description2 = line2[2].substring(
      line2[2].indexOf("") + 1,
      line2[2].lastIndexOf("") - 1
    )

    const adultNumber2 = line2[3].substring(
      line2[3].indexOf("") + 1,
      line2[3].lastIndexOf("") - 1
    )

    const childNumber2 = line2[4].substring(
      line2[4].indexOf("") + 1,
      line2[4].lastIndexOf("") - 1
    )

    console.log(id2, title2, description2, adultNumber2, childNumber2)

    let clone = li.cloneNode(true)
    const cloneTitle = clone.querySelector('.excursions__title')
    const cloneDescription = clone.querySelector('.excursions__description');
    const clonePrices = clone.querySelectorAll('.excursions__price');

    cloneTitle.innerText = title2;
    cloneDescription.innerText = description2;
    clonePrices[0].innerText = adultNumber2;
    clonePrices[1].innerText = childNumber2;
    
    ul.appendChild(clone)

  });

  

  reader.readAsText(selected);

});


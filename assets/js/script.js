const txt = `"1","Ogrodzieniec","Zamek Ogrodzieniec – ruiny zamku leżącego na Jurze Krakowsko-Częstochowskiej, wybudowanego w systemie tzw. Orlich Gniazd, we wsi Podzamcze w województwie śląskim, w powiecie zawierciańskim, około 2 km na wschód od Ogrodzieńca. Zamek został wybudowany w XIV – XV w. przez ród Włodków Sulimczyków.","99PLN","50PLN"
"2","Ojców","wieś w województwie małopolskim, w powiecie krakowskim, w gminie Skała, na terenie Wyżyny Krakowsko-Częstochowskiej, w Dolinie Prądnika, na Szlaku Orlich Gniazd. W Królestwie Polskim istniała gmina Ojców. W latach 1975–1998 miejscowość położona była w województwie krakowskim. W latach 1928–1966 Ojców miał status uzdrowiska posiadającego charakter użyteczności publicznej.","40PLN","15PLN`;

console.log( txt.split(/[\r\n]+/gm) );

const fileSelector = document.querySelector('.uploader__input');
const result = document.querySelector('.result')

fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);

   let selected = fileSelector.files[0]
   console.log(selected)
   

   let reader = new FileReader();
   reader.addEventListener("loadend", () => {
     result.innerText = reader.result;
     const lines = reader.result.split(/[\r\n]+/gm);
     console.log(lines.length)
    const line1 = lines[0]
    const splitLine1 = line1.split(',')
    console.log(splitLine1)
    const substringLine1 = splitLine1[0].substring(
      splitLine1[0].indexOf("") + 1, 
      splitLine1[0].lastIndexOf("") -1
   )
   console.log(substringLine1)
     
     for(let key = 0; key < lines.length; key++){
      const ex = lines.key[0]
      console.log(ex)
      const exsplit = ex.split(',')
      console.log(exsplit)
  
      console.log(ex)
      const excursionDetails = {
          id: excursion[0],
          title: excursion[1],
          description: excursion[2],
          adultNumber: excursion[3],
          childNumber: excursion[4],
      }
      
      excursions.appendChild(createExcursionClone(excursionDetails));
      
  }
     
     const lines2 = lines[0].split(',')
     console.log(lines2[0])
    
     const lines3 = lines2[0].substring(
        lines2[0].indexOf("") + 1, 
        lines2[0].lastIndexOf("") -1
     )
     console.log(lines)
   console.log(lines3, 'ok')
  
   });
   reader.readAsText(selected);
 
  });

  
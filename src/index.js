import { getData } from './data-business.js'
import { createCharacterRow } from './utils.js'

const loadingEl = document.querySelector('#root')

getData()
    .then(data => {
        loadingEl.textContent = '';
        data.forEach(character => loadingEl.append(createCharacterRow(character)))
  });



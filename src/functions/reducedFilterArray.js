import * as P from 'prop-types';

import { transformDateStringOfDateUTC } from './transformDateStringOfDateUTC';

export const reducedFilterArray = (arrList, valueInput, valueListSearch) => {
   
   if(valueInput == '') return arrList
   
   // Percorre toda a lista
   const List = arrList.filter((obj) => {
      let input = valueInput;
      // Percorre todos os objetos
      for(const property in obj) {
         // Caso o objeto seja igual ao valueListSearch
         if(property == valueListSearch){
            let inputSearch = obj[property];
            // Caso o valor encontrado seja uma data
            console.log(input, inputSearch)
            if(valueInput.search("/") != -1){
               input = transformDateStringOfDateUTC(input);
               inputSearch = transformDateStringOfDateUTC(inputSearch);
               return input.trim() == inputSearch.trim()
            };
            return input.trim() == inputSearch.trim()
         }
      }
   });
   
   return List
};

reducedFilterArray.propTypes = {
   arrList: P.array.isRequired,
   valueInput: P.string.isRequired,
   valueListSearch: P.string.isRequired
}
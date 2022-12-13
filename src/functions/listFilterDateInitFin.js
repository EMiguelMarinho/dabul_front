export const listFilterDateInitFin = (arrList, initialValue, finalyValue, valueListSearch) => {
   if( !initialValue && !finalyValue ) return arrList;

   const initialDateUTC = transformDateStringOfDateUTC(initialValue);
   const finalyDateUTC = transformDateStringOfDateUTC(finalyValue);

   // Percorre toda a lista
   const List = arrList.filter((obj) => {
      // Percorre todos os objetos
      for(const property in obj) {
         // Caso o objeto seja igual ao valueListSearch
         if(property == valueListSearch){
            let inputSearch = obj[property];
            inputSearch = transformDateStringOfDateUTC(inputSearch);

            if(!initialDateUTC) return inputSearch <= finalyDateUTC;
            if(!finalyDateUTC) return inputSearch >= initialDateUTC;
            return inputSearch <= finalyDateUTC && inputSearch >= initialDateUTC;
         };
      }
   });
   return List
};

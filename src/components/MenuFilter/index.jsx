import {
   Container_Filter,
   Container_Input,
   Input_Div,
   Input,
   Btn_Filter
} from './styles';

export const MenuFilter = () => {
   return (
      <div>
            <Container_Filter>
               <Container_Input>
                  <label>Recebimento</label>
                  <Input_Div>
                     <Input>
                        <p>De:</p>
                        <input type="number" placeholder="R$ 00"/>
                     </Input>
                     <Input>
                        <p>Até:</p>
                        <input type="number" placeholder="R$ 00"/>
                     </Input>
                  </Input_Div>
               </Container_Input>
               <Container_Input>
                  <label>Data de recebimento</label>
                  <Input_Div>
                     <Input>
                        <p>De:</p>
                        <input type="number" placeholder="R$ 00"/>
                     </Input>
                     <Input>
                        <p>Até:</p>
                        <input type="number" placeholder="R$ 00"/>
                     </Input>
                  </Input_Div>
               </Container_Input>
               <Container_Input>
                  <label>Valor Bruto</label>
                  <Input_Div>
                     <Input>
                        <p>De:</p>
                        <input type="number" placeholder="R$ 00"/>
                     </Input>
                     <Input>
                        <p>Até:</p>
                        <input type="number" placeholder="R$ 00"/>
                     </Input>
                  </Input_Div>
               </Container_Input>
               <Container_Input>
                  <label>Cliente</label>
                  <Input_Div>
                     <Input width="100%">
                        <input type="text" placeholder="Lorem Ipsum"/>
                     </Input>
                  </Input_Div>
               </Container_Input>
               <Container_Input>
                  <label>Pasta</label>
                  <Input_Div>
                     <Input width="100%">
                        <input type="text" placeholder="Lorem Ipsum"/>
                     </Input>
                  </Input_Div>
               </Container_Input>
               <Btn_Filter onClick={e => e.preventDefault()}>
                  Filtrar
               </Btn_Filter>
            </Container_Filter>
      </div>
   )
}

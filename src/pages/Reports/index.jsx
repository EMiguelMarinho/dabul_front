import { Link } from "react-router-dom";

import { ContainerMain } from "../../components/ContainerMain";
import { IconMenu } from "../../components/ReportsMenu";

import { Title } from '../Clients/styles';

import * as Styles from './styles';

import { useState } from 'react';

import { BiTrendingUp, BiWalletAlt } from 'react-icons/bi';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { MdOutlineAssessment, MdOutlineSettingsInputComponent } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { AiFillBank } from 'react-icons/ai';

import { BalanceBank } from "../../components/ReportsOpen/BalanceBank";
import { CashFlow } from "../../components/ReportsOpen/CashFlow";
import { GeneralContimatic } from "../../components/ReportsOpen/GeneralContimatic";
import { PaidAndUnpaid } from "../../components/ReportsOpen/PaidAndUnpaid";
import { ReportsRegister } from "../../components/ReportsOpen/Reports";
import { ReceiptPanel } from "../ReceiptPanel";

export const Reports = () => {
   const [ stateRegisterCashFlow, setStateRegisterCashFlow ] = useState(false);
   const [ stateRegisterPaidAndUnpaid, setStateRegisterPaidAndUnpaid ] = useState(false);
   const [ stateRegisterReports, setStateRegisterReports ] = useState(false);
   const [ stateRegisterBank, setStateRegisterBank ] = useState(false);
   const [ stateRegisterGeneralContimatic, setStateRegisterGeneralContimatic ] = useState(false);

   return (
      <ContainerMain>
         <Title>Módulo financeiro</Title>

         <Styles.Container>
            <IconMenu Logo={BiTrendingUp} subTitle="Fluxo de caixa" onClick={() => setStateRegisterCashFlow(true)}/>
            {stateRegisterCashFlow && <CashFlow setStateRegisterCashFlow={setStateRegisterCashFlow} />}

            <IconMenu Logo={MdOutlineCompareArrows} subTitle="Lançamentos pagos e não pagos" onClick={() => setStateRegisterPaidAndUnpaid(true)}/>
            {stateRegisterPaidAndUnpaid && <PaidAndUnpaid setStateRegisterPaidAndUnpaid={setStateRegisterPaidAndUnpaid} />}

            <Link to="/home/paymentPanel">
               <IconMenu Logo={BiWalletAlt} subTitle="Painel Pagamento"/>
            </Link>

            <Link to="/home/receiptsPanel">
               <IconMenu Logo={MdOutlineAssessment} subTitle="Painel Recebimento"/>
            </Link>

            <IconMenu Logo={HiOutlineDocumentReport} subTitle="Período do Relatório" onClick={() => setStateRegisterReports(true)}/>
            {stateRegisterReports && <ReportsRegister setStateRegisterReports={setStateRegisterReports} />}

            <IconMenu Logo={MdOutlineSettingsInputComponent} subTitle="Contimatic Geral"  onClick={() => setStateRegisterGeneralContimatic(true)}/>
            {stateRegisterGeneralContimatic &&  <GeneralContimatic setStateRegisterGeneralContimatic={setStateRegisterGeneralContimatic} />}

            <IconMenu Logo={AiFillBank} subTitle="Saldo dos Bancos" onClick={() => setStateRegisterBank(true)}/>
            {stateRegisterBank && <BalanceBank setStateRegisterBank={setStateRegisterBank} />}
         </Styles.Container>
      </ContainerMain>
   )
}

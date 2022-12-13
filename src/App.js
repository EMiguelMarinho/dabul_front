import * as PropTypes from 'prop-types';

import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { RecoverPassword } from './pages/RecoverPassword';
import { NewPassword } from './pages/NewPassword';

// Links ReceiveBills
import { Clients } from './pages/Clients';
import { ReceiptsOfficial } from './pages/ReceiptsOfficial';
import { ReceiptsMult } from './pages/ReceiptsMult';
import { TypesReceipts } from './pages/TypesReceipts';
import { EmissionNFS_E } from './pages/EmissionNFS_E';

// Links PaysBills
import { Providers } from './pages/Providers';
import { Payments } from './pages/Payments';
import { DownPayment } from './pages/DownPayment'

// Links General
import { Reports } from './pages/Reports';
import { Users } from './pages/Users';
import { PaymentMethods } from './pages/PaymentMethods';
import { Companies } from './pages/Companies';
import { Bills } from './pages/Bills';
import { GroupBills } from './pages/GroupBills';
import { ReceiptPanel } from './pages/ReceiptPanel';
import { PaymentPanel } from './pages/PaymentPanel';

// Links Others
import { Banks } from './pages/Banks';
import { Folders } from './pages/Folders';

const PrivateRotuer = () => {
   const hasUser = sessionStorage.getItem('Users');

   if(hasUser){
      return <Outlet />
   }

   return <Navigate to="/login" />

   // return isLoaged ? <Outlet /> : <Navigate to="/login" />
}

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/recoverPassword" element={<RecoverPassword />} />
            <Route path="/newPassword" element={<NewPassword />} />
            <Route element={<PrivateRotuer />}>
               <Route path="/home" element={<Home />} />

               {/* Links ReceiveBills */}
               <Route path="/home/clients" element={<Clients />} />
               <Route path="/home/receipts" element={<ReceiptsOfficial />} />
               <Route path="/home/receiptsMult" element={<ReceiptsMult />} />
               <Route path="/home/typesReceipts" element={<TypesReceipts />} />
               <Route path="/home/emissionNFS_E" element={<EmissionNFS_E />} />

               {/* Links PaysBills */}
               <Route path="/home/providers" element={<Providers />} />
               <Route path="/home/payments" element={<Payments />} />
               <Route path="/home/downPayment" element={<DownPayment />} />

               {/* Links General */}
               <Route path="/home/reports" element={<Reports />} />
               <Route path="/home/users" element={<Users />} />
               <Route path="/home/paymentMethods" element={<PaymentMethods />} />
               <Route path="/home/companies" element={<Companies />} />
               <Route path="/home/bills" element={<Bills />} />
               <Route path="/home/groupBills" element={<GroupBills />} />

               <Route path="/home/receiptsPanel" element={<ReceiptPanel />} />
               <Route path="/home/paymentPanel" element={<PaymentPanel />} />

               {/* Links Others */}
               <Route path="/home/banks" element={<Banks />} />
               <Route path="/home/folders" element={<Folders />} />
            </Route>


            <Route path="*" element={<Login />} />
         </Routes>
      </div>
   );
}

export default App;

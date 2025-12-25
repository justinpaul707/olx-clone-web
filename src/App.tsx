import { ToastContainer } from 'react-toastify'
import './App.css'
import { Provider } from 'react-redux'
import MetaList from './meta/Meta'
import store  from '@app/app/store/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryClient';
import ApiDebugPanel from './components/debug/ApiDebugPanel';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MetaList />
          <ApiDebugPanel />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App

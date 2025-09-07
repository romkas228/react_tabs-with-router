import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TabsPovider } from './context/TabsProvider';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';

export const Root = () => (
  <TabsPovider>
    <HashRouter>
      <Routes>
        <Route path='/home' element={<Navigate to='/' replace />} />
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />

          <Route path='tabs'>
            <Route index element={<TabsPage />} />
            <Route path=':tabId' element={<TabsPage />} />
          </Route>
          
          <Route path='*' element={<PageNotFound />}/>
        </Route>
      </Routes>
    </HashRouter>
  </TabsPovider>
);

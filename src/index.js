import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import TeacherStore from './store/TeacherStore';
import WorksStore from './store/WorksStore';
import PlansStore from './store/PlansStore';
import AudienceStore from './store/AudienceStore';

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    teacher: new TeacherStore(),
    work: new WorksStore(),
    plan: new PlansStore(),
    audience: new AudienceStore()
  }}>
    <App />
  </Context.Provider>
);



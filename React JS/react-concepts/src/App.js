import React from 'react'

// import { Provider } from 'react-redux'
// import store from './redux/store'
// import CakeContainer from './components/CakeContainer'
// import HooksCakeContainer from './components/HooksCakeContainer'
// import IcecreamContainer from './components/IcecreamContainer'
// import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
// import UserContainer from './components/UserContainer'

// react-toolkit-demo
import Cakeview from './react-toolkit-demo/features/cake/Cakeview'
import IcecreamView from './react-toolkit-demo/features/icecream/Icecreamview'
import Userview from './react-toolkit-demo/features/user/Userview'
import { Provider } from 'react-redux'
import store from './react-toolkit-demo/app/store'
import Posts from './react-toolkit-demo/features/RTKQuery/Posts'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { postsApi } from './react-toolkit-demo/features/RTKQuery/apiSlice'

// redux-saga-demo
// import Header from './redux-saga-demo/components/Header'
// import Main from './redux-saga-demo/components/Main'
// import store from './redux-saga-demo/redux/store'
// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
// import Cart from './redux-saga-demo/components/Cart'


function App () {
  return (
    <>

      {/* <Provider store={store}>
        <div className='App'>
        <UserContainer />
          <ItemContainer cake />
          <ItemContainer />
          <NewCakeContainer />
          <CakeContainer />
          <HooksCakeContainer />
          <IcecreamContainer />
        </div>
      </Provider> */}

      {/* redux-toolkit-demo */}
      <Provider store={store}>
        {/* <Cakeview/>
        <IcecreamView/>
        <Userview/> */}
        <ApiProvider api={postsApi}>
            <Posts/>
        </ApiProvider>
      </Provider>

      {/* <Provider store={store}>
        <div className='App'>
          <Router>
            <Header/>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </Router>
        </div>
      </Provider> */}
    </>
  )
}

export default App
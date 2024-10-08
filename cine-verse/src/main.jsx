import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import Trendinglist from './components/Trendinglist.jsx';
import Trending1 from './components/Trending1.jsx';
import Trending2 from './components/Trending2.jsx';
import Trending3 from './components/Trending3.jsx';
import Trending4 from './components/Trending4.jsx';
import Trending5 from './components/Trending5.jsx';
import Trending6 from './components/Trending6.jsx';
import Trending7 from './components/Trending7.jsx';
import Trending8 from './components/Trending8.jsx';
import Animation from './components/Animation.jsx';
import Animation1 from './components/Animation1.jsx';
import Animation2 from './components/Animation2.jsx';
import Animation3 from './components/Animation3.jsx';
import Animation4 from './components/Animation4.jsx';
import Animation5 from './components/Animation5.jsx'; 
import Animation6 from './components/Animation6.jsx';
import Animation7 from './components/Animation7.jsx';
import Animation8 from './components/Animation8.jsx';
import Top1 from './components/Top1.jsx';
import Top2 from './components/Top2.jsx';
import Top3 from './components/Top3.jsx';
import Top4 from './components/Top4.jsx';
import Soon1 from './components/Soon1.jsx';
import Soon2 from './components/Soon2.jsx';
import Soon3 from './components/Soon3.jsx';
import Soon4 from './components/Soon4.jsx';
import About from './components/About.jsx';
import Update from './components/Update.jsx';
import Serieslist from './components/Serieslist.jsx';



const router= createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/trending", element:<Trendinglist/>},
  {path:"/trending1", element:<Trending1/>},
  {path:"/trending2", element:<Trending2/>},
  {path:"/trending3", element:<Trending3/>},
  {path:"/trending4", element:<Trending4/>},
  {path:"/trending5", element:<Trending5/>},
  {path:"/trending6", element:<Trending6/>},
  {path:"/trending7", element:<Trending7/>},
  {path:"/trending8", element:<Trending8/>},
  {path:"/animation", element:<Animation/>},
  {path:"/animation1", element:<Animation1/>},
  {path:"/animation2", element:<Animation2/>},
  {path:"/animation3", element:<Animation3/>},
  {path:"/animation4", element:<Animation4/>},
  {path:"/animation5", element:<Animation5/>},
  {path:"/animation6", element:<Animation6/>},
  {path:"/animation7", element:<Animation7/>},
  {path:"/animation8", element:<Animation8/>},
  {path:"/top1", element:<Top1/>},
  {path:"/top2", element:<Top2/>},
  {path:"/top3", element:<Top3/>},
  {path:"/top4", element:<Top4/>},
  {path:"/soon1", element:<Soon1/>},
  {path:"/soon2", element:<Soon2/>},
  {path:"/soon3", element:<Soon3/>},
  {path:"/soon4", element:<Soon4/>},
  {path:"/serieslist", element:<Serieslist/>},
  {path:"/about", element:<About/>},
  {path:"/update", element:<Update/>},
 

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)

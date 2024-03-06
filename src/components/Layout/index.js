import { Outlet } from 'react-router-dom'
import Sidebar from './/Sidebar'
import './index.scss'

const Layout=()=>{
    return (
    <div className='App'><Sidebar/>
    <div className='page'>
     <span className='tags top-tags'>&lt;body&gt;</span>
     <Outlet/>
     <span className='tags bottom-tags'>
        &lt;/body&gt;
        <br/>
        <span className='bottom-tags-html'>&lt;/html,Contaner()&gt;</span>
        </span>
        <div className='lastUpdated'>  Last Update on 06/03/2024</div>   
    </div>
    </div>
)}
export default Layout;
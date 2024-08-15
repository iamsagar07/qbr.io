import { Outlet } from 'react-router-dom'
import Combine from '../common/Combine'

const AppLayout = () => {
  return (
    <div>
        <div>
        <Combine />
        <main>
            <Outlet></Outlet>
        </main>
        </div>
    </div>
  )
}

export default AppLayout
import main from '../../assets/logo/main.png'
import { Link } from 'react-router-dom'
function Logo() {

    return (
        <Link to="/">
            <img src={main} alt="" className='w-20 h-auto' />
        </Link>
    );

}


export default Logo;
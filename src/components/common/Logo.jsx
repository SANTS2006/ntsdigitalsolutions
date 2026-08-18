import main from '../../assets/logo/main.png'
import { Link } from 'react-router-dom'
function Logo() {

    return (
        <Link to="/">
            <img src={main} alt="" className='w-40' />
        </Link>
    );

}


export default Logo;
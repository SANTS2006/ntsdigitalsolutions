import main from '../../assets/logo/main.webp';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/" aria-label="NTS Digital Solutions home">
            <img
                src={main}
                alt="NTS Digital Solutions"
                width="320"
                height="213"
                decoding="async"
                className="h-auto w-20"
            />
        </Link>
    );
}

export default Logo;

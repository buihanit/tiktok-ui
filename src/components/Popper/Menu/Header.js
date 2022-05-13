import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('header-submenu')}>
            <button className={cx('btn-back')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}

export default Header;

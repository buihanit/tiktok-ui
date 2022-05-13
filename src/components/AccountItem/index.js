import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.avatar} alt="Han" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Bui Ba Han</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>bbh</span>
            </div>
        </div>
    );
}

export default AccountItem;

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
     return (
          <div className={cx('wrapper')}>
               <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/31a2e92512606aa596df657166e5e483~c5_300x300.webp?x-expires=1652324400&x-signature=cgbFXQx%2FYf3dYGz3ICjGkTjBh4c%3D' alt='Hoa' />
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
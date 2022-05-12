import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Bottom from '~/components/Buttom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Bottom className={cx('menu-item')} lefticon={data.icon} to={data.to}>
            {data.title}
        </Bottom>
    );
}

export default MenuItem;

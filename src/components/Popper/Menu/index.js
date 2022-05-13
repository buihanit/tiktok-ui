import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { default as HeaderMenu } from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHisory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHisory((prev) => [...prev, item.children]);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            visible
            delay={[0, 700]}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-Popper')}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title="Language"
                                onBack={() => {
                                    setHisory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

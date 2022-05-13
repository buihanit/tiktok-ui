import { useState, useEffect } from 'react';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Buttom from '~/components/Buttom';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/Feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <a href="/" className={cx('logo')}>
                        <img src={images.logo} alt="tiktok" />
                    </a>
                    <div className={cx('block__search block__header')}>
                        <Tippy
                            interactive
                            visible={searchResult.length > 0}
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('search-title')}>Accounts</h4>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <form className={cx('form__search')}>
                                <div className="form--content">
                                    <div className={cx('form--inner')}>
                                        <input
                                            type="text"
                                            className={cx('input--search')}
                                            placeholder="Search accounts and videos"
                                            spellCheck={false}
                                        />
                                        <div className={cx('group--icon')}>
                                            <a href="/" className={cx('clear')}>
                                                <FontAwesomeIcon icon={faCircleXmark} />
                                            </a>
                                            <span className={cx('loading')} style={{ display: 'none' }}>
                                                <FontAwesomeIcon icon={faSpinner} />
                                            </span>
                                        </div>
                                        <button className={cx('btn--search')} type="button">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </Tippy>
                    </div>
                    <div className={cx('actions')}>
                        <Buttom text>Upload</Buttom>
                        <Buttom primary>Log in</Buttom>
                        <Menu items={MENU_ITEMS}>
                            <div className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;

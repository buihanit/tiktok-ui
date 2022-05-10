import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Buttom({
     to,
     href,
     small = false,
     large = false,
     text = false,
     disabled = false,
     primary = false,
     outline = false,
     rounded = false,
     children,
     className,
     lefticon,
     righticon,
     onClick,
     ...passProps }) {
     let Component = 'button';
     const props = {
          onClick,
          ...passProps,
     }

     // Remove event listener when button disabled
     if (disabled) {
          Object.keys(props).forEach((key) => {
               if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key]
               }
          })
     }

     if (to) {
          props.to = to;
          Component = Link
     } else if (href) {
          props.href = href;
          Component = 'a'
     }


     const classes = cx('wrapper', {
          primary,
          outline,
          text,
          small,
          large,
          disabled,
          rounded,
          [className]: className
     })
     return (
          <Component className={classes} {...props}>
               {lefticon && <span className={cx('icon')}>{lefticon}</span>}
               <span className={cx('text-btn')}>
                    {children}
               </span>
               {righticon && <span className={cx('icon')}>{righticon}</span>}

          </Component>
     );
}

export default Buttom;
import { Anchor, Button, Drawer } from 'antd';
const { Link } = Anchor;
import React, { useState } from 'react';

function NavBarHeader(props) {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>
            <div className="mobileHidden">
                <Anchor defaultSelectedKeys={['home']} targetOffset="50">
                    <Link href="#home" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#features" title="Features" />
                    <Link href="#work" title="Howitworks" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
            <div className="mobileVisible">
                <Button type="primary" onClick={showDrawer}>
                    <i className="fas fa-bars"></i>
                </Button>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <Anchor defaultSelectedKeys={['home']} targetOffset="50">
                        <Link href="#home" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#features" title="Features" />
                        <Link href="#work" title="Howitworks" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </Drawer>
            </div>
        </div>
    );
}

export default NavBarHeader;
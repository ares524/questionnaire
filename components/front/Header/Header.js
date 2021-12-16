import React from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
  Button,
} from "reactstrap";
import Link from "next/link";
import s from "./Header.module.scss";
import { withRouter, useRouter } from "next/router";
import { connect } from "react-redux";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      innerWidth: typeof window !== "undefined" && window.innerWidth,
    };
  }
  
  render() {
    const { innerWidth } = this.state;

    return (
      <Navbar className={s.header}>
        <Container className="justify-content-between">
          <NavbarBrand className="d-flex">
            <Link href={"/"} locale='de'>
              <span className={s.logoStyle}> Jurata </span>
            </Link>
          </NavbarBrand>
          <div>
            <Link href={"/"} locale='en'>
              <span className={s.lang}> Englsih </span>
            </Link>
            <Link href={"/"} locale='de'>
              <span className={s.lang}> Dutch </span>
            </Link> 
          </div>
        </Container>
      </Navbar>
    );
  }
}

Header.propTypes = {};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    navbarType: store.layout.navbarType,
    navbarColor: store.layout.navbarColor,
  };
}

export default withRouter(connect(mapStateToProps)(Header));

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";

// Components
import HeaderContainer from "@/components/layouts/header/parts/header-container";

export default function Header({ type = "default" }) {

    return (

        <header id="header" className={styles.header} data-type={type}>

            <HeaderContainer />

        </header>

    );
    
}
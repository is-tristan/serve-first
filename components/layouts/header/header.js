// Components
import HeaderContainer from "@/components/layouts/header/parts/header-container"

import styles from "@/styles/components/layouts/header/header.module.scss"

export default function Header() {

    return (

        <header id="header" className={styles.header} role="banner">

            <HeaderContainer />

        </header>

    )

}

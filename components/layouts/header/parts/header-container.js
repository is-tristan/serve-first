// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";

// Components
import HeaderLogo from "@/components/layouts/header/parts/header-logo";
import HeaderMenu from "@/components/layouts/header/parts/header-menu";
import HeaderButtons from "@/components/layouts/header/parts/header-buttons";

export default function HeaderContainer() {

    return (

        <div className={`container ${styles.headerContainer}`}>

            <HeaderLogo />

            <HeaderMenu />

            <HeaderButtons />

        </div>

    )

}

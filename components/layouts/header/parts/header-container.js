import { getMenuAds } from "@/sanity/lib/queries"

import styles from "@/styles/components/layouts/header/header.module.scss"

import HeaderLogo from "@/components/layouts/header/parts/header-logo"
import HeaderMenu from "@/components/layouts/header/parts/header-menu"
import HeaderActions from "@/components/layouts/header/parts/header-actions"

export default async function HeaderContainer() {

    const menuAds = await getMenuAds()

    return (

        <div className={`container ${styles.headerContainer}`}>

            <HeaderLogo />

            <HeaderMenu menuAds={menuAds} />

            <HeaderActions menuAds={menuAds} />

        </div>

    )

}

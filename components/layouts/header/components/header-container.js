import { getMenuAds } from "@/sanity/lib/queries"

import styles from "@/styles/components/layouts/header/header.module.scss"

import HeaderLogo from "@/components/layouts/header/components/header-logo"
import HeaderMenu from "@/components/layouts/header/components/header-menu"
import HeaderActions from "@/components/layouts/header/components/header-actions"

export default async function HeaderContainer({ headerType = "default" }) {

    const menuAds = await getMenuAds()

    return (

        <div className={`container ${styles.headerContainer}`}>

            <HeaderLogo />

            {headerType !== "minimal" && <HeaderMenu menuAds={menuAds} />}

            <HeaderActions menuAds={menuAds} />

        </div>

    )

}

import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/bird-colorful-gradient-design-vector_343694-2506 (1).avif" alt="my logo image" width={200} height={100} padding={20}/>
                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;